-- 999MS run statistics — Supabase schema
-- Project: rickhub940-ai's Project (ref lqfqxqwzswguyefctbma, ap-southeast-1)
--
-- Apply with the Supabase SQL editor or `psql`. Everything here is idempotent
-- enough to re-run; the only destructive steps are commented out.
--
-- Recording rules (as requested):
--   * a run is counted ONCE, keyed by (hwid_hash, job_id)
--       - same HWID + same jobId already in the table -> the same run, not counted again
--       - same HWID + a different jobId             -> a new run, one INSERT
--   * user_id / place_id are stored for display only and are not part of the key
--   * rows are never updated — one INSERT per counted run, nothing else
--   * one successful runtime proof records each launched script; no periodic heartbeat

-- ───────────────────────────── tables ─────────────────────────────

-- One public uploader identity, linked by the owner through Discord OAuth.
-- Row id is constrained to 1 so this remains a single-owner integration.
create table if not exists public.uploader_profile (
  id smallint primary key default 1 check (id = 1),
  discord_id text not null unique,
  username text not null,
  global_name text,
  avatar_hash text,
  linked_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.uploader_profile enable row level security;
revoke all on table public.uploader_profile from public, anon, authenticated;
grant select, insert, update, delete on table public.uploader_profile to service_role;


create table if not exists public.executions (
  id uuid primary key default gen_random_uuid(),
  session_id text not null,          -- server session id (jti); one row per counted run
  script_name text,
  hwid_hash text,                    -- half of the counting key (see executions_run_key)
  user_id text,
  username text,
  display_name text,
  executor text,
  place_id text,
  job_id text,
  ip text,
  source text default 'runtime',
  started_at timestamptz not null default now(),
  last_beat_at timestamptz not null default now(), -- legacy compatibility; no longer updated
  ended_at timestamptz,
  beats integer not null default 1,              -- legacy compatibility; stays at 1
  status text not null default 'verified',       -- a verified launch, not live presence
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists executions_session_id_idx on public.executions(session_id);
create index if not exists executions_started_at_idx on public.executions(started_at desc);

-- The counting rule: one row per (machine, game instance).
create unique index if not exists executions_run_key
  on public.executions (coalesce(hwid_hash, ''), coalesce(job_id, ''));

create table if not exists public.links (
  id uuid primary key default gen_random_uuid(),
  path text not null unique,
  script_name text,
  hours integer,
  created_at timestamptz not null default now(),
  expires_at timestamptz
);

-- Metadata-only map directory (no script body column: .lua source lives in
-- GitHub scripts/<script_name>.lua so Supabase storage & egress stay ~0).
create table if not exists public.scripts (
  id uuid primary key default gen_random_uuid(),
  place_id text not null,
  script_name text not null,
  size integer not null default 0,
  key_required boolean not null default true,
  is_working boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (place_id, script_name)
);

-- Owner-managed display status; existing entries default to available.
alter table public.scripts add column if not exists is_working boolean not null default true;

alter table public.executions enable row level security;
alter table public.links enable row level security;
alter table public.scripts enable row level security;

-- ──────────────────────────── functions ───────────────────────────
-- All of them are SECURITY DEFINER so the service-role key can use them
-- without granting table privileges, and every write is a single INSERT.

create or replace function public.record_run(
  p_session_id text, p_script_name text, p_hwid_hash text, p_user_id text, p_username text,
  p_display_name text, p_executor text, p_place_id text, p_job_id text, p_ip text
) returns boolean language plpgsql security definer set search_path = public as $$
begin
  if p_session_id is null or length(p_session_id) = 0 then return false; end if;
  if p_hwid_hash is null or length(p_hwid_hash) = 0 then return false; end if;
  if p_job_id is null or length(p_job_id) = 0 then return false; end if;

  insert into public.executions(session_id, script_name, hwid_hash, user_id, username, display_name,
                                executor, place_id, job_id, ip, source, started_at, status)
  values (p_session_id, p_script_name, p_hwid_hash, nullif(p_user_id, ''), p_username, p_display_name,
          p_executor, p_place_id, p_job_id, p_ip, 'runtime', now(), 'verified');
  return true;
exception when unique_violation then
  return false; -- this HWID already has a row for this jobId
end $$;

create or replace function public.record_link(p_path text, p_script_name text, p_hours integer)
returns void language plpgsql security definer set search_path = public as $$
begin
  if p_path is null or length(p_path) = 0 then return; end if;
  insert into public.links(path, script_name, hours, expires_at)
  values (p_path, p_script_name, p_hours,
          case when p_hours is null then null else now() + (p_hours::text || ' hours')::interval end)
  on conflict (path) do nothing;
end $$;

-- ───────────────────────────── views ─────────────────────────────
-- Read by GET/POST /api/control/stats -> the /stats dashboard.

create or replace view public.v_exec_totals as
select
  count(*)::bigint as total_runs,
  count(distinct hwid_hash)::bigint as unique_machines,
  count(distinct script_name)::bigint as unique_scripts,
  count(distinct user_id)::bigint as unique_users,
  count(*) filter (where started_at >= date_trunc('day', now()))::bigint as runs_today,
  count(*) filter (where started_at >= date_trunc('month', now()))::bigint as runs_month,
  (select count(*) from public.links)::bigint as total_links,
  (select count(*) from public.links where expires_at is null or expires_at > now())::bigint as active_links,
  max(started_at) as last_run_at
from public.executions;

create or replace view public.v_exec_monthly as
select to_char(date_trunc('month', started_at), 'YYYY-MM') as month,
       date_trunc('month', started_at) as month_start,
       count(*)::bigint as runs,
       count(distinct coalesce(nullif(user_id, ''), hwid_hash))::bigint as uniques
from public.executions
where started_at >= date_trunc('month', now()) - interval '11 months'
group by 1, 2
order by 2;

-- 60 days, zero filled so the chart line stays continuous.
create or replace view public.v_exec_daily as
select to_char(d.day, 'YYYY-MM-DD') as day,
       count(e.id)::bigint as runs,
       count(distinct coalesce(nullif(e.user_id, ''), e.hwid_hash))::bigint as uniques
from generate_series(date_trunc('day', now()) - interval '59 days', date_trunc('day', now()), interval '1 day') as d(day)
left join public.executions e on date_trunc('day', e.started_at) = d.day
group by d.day
order by d.day;

-- 72 hours, zero filled.
create or replace view public.v_exec_hourly as
select to_char(h.hour, 'YYYY-MM-DD HH24:00') as hour,
       count(e.id)::bigint as runs,
       count(distinct coalesce(nullif(e.user_id, ''), e.hwid_hash))::bigint as uniques
from generate_series(date_trunc('hour', now()) - interval '71 hours', date_trunc('hour', now()), interval '1 hour') as h(hour)
left join public.executions e on date_trunc('hour', e.started_at) = h.hour
group by h.hour
order by h.hour;

drop view if exists public.v_recent_runs;
create view public.v_recent_runs as
select session_id, script_name, hwid_hash, user_id, username, display_name, executor,
       place_id, job_id, ip, source, started_at, status
from public.executions
order by started_at desc
limit 100;

-- ─────────────────────── optional maintenance ─────────────────────
-- Keep only the last 90 days of runs (run by hand or from a cron job).
-- delete from public.executions where started_at < now() - interval '90 days';
