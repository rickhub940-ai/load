-- ===========================================================================
-- nilpack boot template (layer 0)
--
-- The packer substitutes: the runtime library, the baked data blobs and the
-- mini-VM program (all placeholders live below this comment).
--
-- Execution order is a chain of key derivations; every step only unlocks the
-- material the next step needs:
--   mini-VM  -> boot key + NIL91 alphabet
--   boot key -> setup chunk (stage 2), AEAD verified
--   setup    -> probe fingerprint -> payload key + pool key
-- ===========================================================================
local CHARS = "@@CHARS@@"
local PROG = @@PROG@@

local NIL = (function()
@@LIB@@
end)()

local B1, N1 = "@@STAGE2@@", "@@N1@@"
local B2, N2 = "@@PAYLOAD@@", "@@N2@@"
local B3, N3 = "@@POOL@@", "@@N3@@"
local AAD = "@@AAD@@"

-- layer 1: the VM assembles the key and the alphabet on the spot
local key, alphabet = NIL.vm(PROG)
if not key or not alphabet then return end

-- layer 2: setup chunk (AEAD; a wrong key or a patched byte fails silently)
local sealed = NIL.b91(B1, alphabet)
if not sealed then return end
local setup_src = NIL.aead(key, N1, sealed, AAD)
if not setup_src then return end
local setup = NIL.load(setup_src, "=x")
if not setup then return end

return setup(key, NIL, B2, N2, B3, N3, AAD, alphabet)
