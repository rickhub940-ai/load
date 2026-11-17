-- ===========================================================================
-- nilpack setup chunk (layer 1) -- shipped encrypted inside the boot blob.
--
-- Everything here runs *after* the boot key was assembled by the mini-VM, and
-- it is the only place that knows how the payload key is derived.  The
-- fingerprint `F` below is a sum of cheap, portable self-measurements spread
-- across ten functions: patch any one of them and the key silently changes,
-- so decryption stops working without a single explicit "tamper detected"
-- error to patch out.
--
-- The probe block must stay in sync with PROBES in packer.py.
-- ===========================================================================
local K, L, B2, N2, B3, N3, AAD, ALPHA = ...

local function p01() return #{"a", "b", "c", "d"} end
local function p02() return select("#", "x", "y", "z") end
local function p03() return #"nil" + #"boolean" + #"number" + #"function" end
local function p04() return #tostring(1 / 2) + #tostring(1 / 4) end
local function p05()
    local a, b, c = 3, 5, 7
    return (function() return a * b + c end)()
end
local function p06() return math.floor(-2.5) + math.floor(2.5) end
local function p07()
    local s, n = "nil4", 0
    for i = 1, #s do n = n + s:byte(i) end
    return n % 71
end
local function p08() return tonumber("ff", 16) % 13 end
local function p09() return (type(rawget(_G, "bit32")) == "table") and 1 or 0 end
local function p10() return (type(rawget(_G, "bit")) == "table") and 1 or 0 end

local F = (p01() + 3 * p02() + 5 * p03() + 7 * p04() + 11 * p05()
    + 13 * p06() + 17 * p07() + 19 * p08() + 23 * p09() + 29 * p10()) % 2147483647

-- payload key + string-pool key are chained off the boot key and off F
local k2, kstr = L.kdf(K, F, N2)

local sealed = L.b91(B2, ALPHA)
if not sealed then return end
local payload_src = L.aead(k2, N2, sealed, AAD)
if not sealed or not payload_src then return end

local blob = L.b91(B3, ALPHA)
if not blob then return end
local pool = L.pool_open(blob, N3, kstr)
if not pool then return end

local NS = function(i) return L.pool_get(pool, i) end

local chunk = L.load("local __NS = ...\n" .. payload_src, "=y")
if not chunk then return end
return chunk(NS)
