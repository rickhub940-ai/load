-- Run rows represent verified launches, not live runtime presence.
UPDATE public.executions
SET status = 'verified'
WHERE status = 'running';

ALTER TABLE public.executions
  ALTER COLUMN status SET DEFAULT 'verified';

CREATE OR REPLACE FUNCTION public.record_run(
  p_session_id text, p_script_name text, p_hwid_hash text, p_user_id text, p_username text,
  p_display_name text, p_executor text, p_place_id text, p_job_id text, p_ip text
) RETURNS boolean LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF p_session_id IS NULL OR length(p_session_id) = 0 THEN RETURN false; END IF;
  IF p_hwid_hash IS NULL OR length(p_hwid_hash) = 0 THEN RETURN false; END IF;
  IF p_job_id IS NULL OR length(p_job_id) = 0 THEN RETURN false; END IF;

  INSERT INTO public.executions(session_id, script_name, hwid_hash, user_id, username, display_name,
                                executor, place_id, job_id, ip, source, started_at, status)
  VALUES (p_session_id, p_script_name, p_hwid_hash, nullif(p_user_id, ''), p_username, p_display_name,
          p_executor, p_place_id, p_job_id, p_ip, 'runtime', now(), 'verified');
  RETURN true;
EXCEPTION WHEN unique_violation THEN
  RETURN false;
END $$;
