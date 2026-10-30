-- Separate the server-enforced execution gate from the display-only working status.
-- Preview cards are public Coming Soon placeholders and can never be executed.
ALTER TABLE public.scripts
  ADD COLUMN IF NOT EXISTS is_enabled boolean NOT NULL DEFAULT true,
  ADD COLUMN IF NOT EXISTS is_preview boolean NOT NULL DEFAULT false;

COMMENT ON COLUMN public.scripts.is_enabled IS
  'Server-side gate for key verification and script delivery';
COMMENT ON COLUMN public.scripts.is_preview IS
  'Hide map identity in the public card and display Coming Soon; never executable';
