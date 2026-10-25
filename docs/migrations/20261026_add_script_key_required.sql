-- Existing deployments: add a per-script key gate, defaulting to the current
-- secure behavior for all scripts. Supabase migration has already been applied
-- to the connected production project; this file is retained for self-hosting.
ALTER TABLE public.scripts
  ADD COLUMN IF NOT EXISTS key_required boolean NOT NULL DEFAULT true;
