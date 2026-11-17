-- ===========================================================================
-- nil_lib.lua -- runtime bundled into every nilpack output.
--
-- The packer wraps this file in `local NIL = (function() ... end)()`, sets
-- `CHARS` (the 91 printable characters the alphabet is drawn from) and calls
-- `NIL.install(<mini-vm program>)` to obtain the boot key + alphabet.
--
-- No Lua 5.3+ syntax, no bit library required: bit ops degrade to nibble
-- lookup tables, and everything else is additions/modulo that stay exact
-- inside doubles.  Verified on Lua 5.1, 5.3, 5.4, 5.5, LuaJIT 2.1.
-- ===========================================================================
local floor, byte, char, sub, concat, rep = math.floor, string.byte, string.char, string.sub, table.concat, string.rep
local M32 = 4294967296
local POW = { 1 }
for i = 1, 32 do POW[i + 1] = POW[i] * 2 end

---------------------------------------------------------------------------
-- 32-bit primitives
---------------------------------------------------------------------------
local BX, BA, BO

-- 1) bit32 (Lua 5.2/5.3, Luau)
local native = rawget(_G, "bit32")
if native and native.bxor then
    BX = function(a, b) return native.bxor(a, b) % M32 end
    BA = function(a, b) return native.band(a, b) % M32 end
    BO = function(a, b) return native.bor(a, b) % M32 end
end
-- 2) LuaJIT bit library (signed results)
if not BX then
    local b = rawget(_G, "bit")
    if b and b.bxor then
        local function fix(v) if v < 0 then return v + M32 end return v end
        BX = function(x, y) return fix(b.bxor(x, y)) end
        BA = function(x, y) return fix(b.band(x, y)) end
        BO = function(x, y) return fix(b.bor(x, y)) end
    end
end
-- 3) native bitwise operators (Lua 5.3+)
if not BX then
    local loader = loadstring or load
    local src = "local a,b=... return (%s) %% 4294967296"
    local function mk(expr)
        local ok, f = pcall(loader, string.format(src, expr))
        if ok and type(f) == "function" then
            local ok2, r = pcall(f, 5, 3)
            if ok2 then return f end
        end
        return nil
    end
    local fx, fa, fo = mk("a~b"), mk("a&b"), mk("a|b")
    if fx and fa and fo then BX, BA, BO = fx, fa, fo end
end
-- 4) pure arithmetic fallback (nibble tables)
if not BX then
    local function nib(fn)
        local t = {}
        for a = 0, 15 do
            for b = 0, 15 do t[a * 16 + b] = fn(a, b) end
        end
        return t
    end
    local function nbits(a, b, want)
        local r, p = 0, 1
        for _ = 0, 3 do
            local x, y = a % 2, b % 2
            if want == 1 then
                if x ~= y then r = r + p end
            elseif want == 2 and x == 1 and y == 1 then r = r + p
            elseif want == 3 and (x == 1 or y == 1) then r = r + p
            end
            a, b, p = floor(a / 2), floor(b / 2), p * 2
        end
        return r
    end
    local TX, TA, TO = nib(function(a, b) return nbits(a, b, 1) end),
        nib(function(a, b) return nbits(a, b, 2) end),
        nib(function(a, b) return nbits(a, b, 3) end)
    local function wide(t, a, b)
        local r, p = 0, 1
        for _ = 1, 8 do
            local an, bn = a % 16, b % 16
            r = r + t[an * 16 + bn] * p
            a, b, p = floor(a / 16), floor(b / 16), p * 16
        end
        return r
    end
    BX = function(a, b) return wide(TX, a, b) end
    BA = function(a, b) return wide(TA, a, b) end
    BO = function(a, b) return wide(TO, a, b) end
end

local function ROTL(x, k)
    k = k % 32
    if k == 0 then return x end
    local p = POW[32 - k + 1]          -- 2^(32-k)
    local lo = x % p                   -- part that stays inside 32 bits
    local hi = floor(x / p)            -- part that wraps around
    return (lo * POW[k + 1] + hi) % M32
end

local function MUL32(a, b)
    local a1, a0 = floor(a / 65536), a % 65536
    local b1, b0 = floor(b / 65536), b % 65536
    local mid = (a1 * b0 + a0 * b1) % 65536
    return (a0 * b0 + mid * 65536) % M32
end

local function b2w(s, i)
    local a, b, c, d = byte(s, i, i + 3)
    return a + b * 256 + c * 65536 + d * 16777216
end

local function w2b(v)
    return char(v % 256, floor(v / 256) % 256, floor(v / 65536) % 256, floor(v / 16777216) % 256)
end

---------------------------------------------------------------------------
-- ChaCha20 (RFC 8439)
---------------------------------------------------------------------------
local SIG = { 0x61707865, 0x3320646E, 0x79622D32, 0x6B206574 }

local function chacha_state(key, ctr, nonce)
    local s = {}
    for i = 1, 4 do s[i] = SIG[i] end
    for i = 1, 8 do s[4 + i] = b2w(key, 4 * i - 3) end
    s[13] = ctr % M32
    for i = 1, 3 do s[13 + i] = b2w(nonce, 4 * i - 3) end
    return s
end

local function quarter(x, a, b, c, d)
    x[a] = (x[a] + x[b]) % M32
    x[d] = ROTL(BX(x[d], x[a]), 16)
    x[c] = (x[c] + x[d]) % M32
    x[b] = ROTL(BX(x[b], x[c]), 12)
    x[a] = (x[a] + x[b]) % M32
    x[d] = ROTL(BX(x[d], x[a]), 8)
    x[c] = (x[c] + x[d]) % M32
    x[b] = ROTL(BX(x[b], x[c]), 7)
end

-- returns the 64-byte keystream block for `ctr`
local function chacha_block(key, ctr, nonce)
    local s = chacha_state(key, ctr, nonce)
    local x = {}
    for i = 1, 16 do x[i] = s[i] end
    for _ = 1, 10 do
        quarter(x, 1, 5, 9, 13)
        quarter(x, 2, 6, 10, 14)
        quarter(x, 3, 7, 11, 15)
        quarter(x, 4, 8, 12, 16)
        quarter(x, 1, 6, 11, 16)
        quarter(x, 2, 7, 12, 13)
        quarter(x, 3, 8, 9, 14)
        quarter(x, 4, 5, 10, 15)
    end
    local t = {}
    for i = 1, 16 do t[i] = w2b((x[i] + s[i]) % M32) end
    return concat(t)
end

local function chacha_xor(key, nonce, data, ctr)
    local out = {}
    local n = #data
    local o = 1
    while o <= n do
        local ks = chacha_block(key, ctr, nonce)
        local chunk = sub(data, o, o + 63)
        local t = {}
        for i = 1, #chunk do t[i] = char(BX(byte(chunk, i), byte(ks, i))) end
        out[#out + 1] = concat(t)
        o = o + 64
        ctr = ctr + 1
    end
    return concat(out)
end

---------------------------------------------------------------------------
-- Poly1305 (13 limbs of 10 bits)
---------------------------------------------------------------------------
local function limbs_of(s, pad)
    local L, acc, nbits, idx = {}, 0, 0, 1
    for i = 1, #s do
        local v = byte(s, i)
        for k = 0, 7 do
            local bit = floor(v / POW[k + 1]) % 2
            acc = acc + bit * POW[nbits + 1]
            nbits = nbits + 1
            if nbits == 10 then L[idx] = acc; idx, acc, nbits = idx + 1, 0, 0 end
        end
    end
    if pad then
        acc = acc + POW[nbits + 1]
        nbits = nbits + 1
        if nbits == 10 then L[idx] = acc; idx, acc, nbits = idx + 1, 0, 0 end
    end
    if nbits > 0 then L[idx] = acc; idx = idx + 1 end
    for i = idx, 13 do L[i] = 0 end
    return L
end

local function pm_carry(h)
    for _ = 1, 3 do
        for i = 1, 12 do
            local c = floor(h[i] / 1024)
            h[i + 1] = h[i + 1] + c
            h[i] = h[i] - c * 1024
        end
        local c = floor(h[13] / 1024)
        h[13] = h[13] - c * 1024
        h[1] = h[1] + 5 * c
    end
    return h
end

local function pm_mul(h, r)
    local p = {}
    for i = 1, 25 do p[i] = 0 end
    for i = 1, 13 do
        local hi = h[i]
        if hi ~= 0 then
            for j = 1, 13 do p[i + j - 1] = p[i + j - 1] + hi * r[j] end
        end
    end
    for i = 25, 14, -1 do p[i - 13] = p[i - 13] + 5 * p[i] end
    local out = {}
    for i = 1, 13 do out[i] = p[i] end
    return pm_carry(out)
end

local function pm_add(a, b)
    local o = {}
    for i = 1, 13 do o[i] = a[i] + b[i] end
    return pm_carry(o)
end

local function pm_clamp(key)
    local t = { byte(key, 1, 16) }
    t[4] = BA(t[4], 15)
    t[8] = BA(t[8], 15)
    t[12] = BA(t[12], 15)
    t[16] = BA(t[16], 15)
    t[5] = BA(t[5], 252)
    t[9] = BA(t[9], 252)
    t[13] = BA(t[13], 252)
    local parts = {}
    for i = 1, 16 do parts[i] = char(t[i]) end
    return limbs_of(concat(parts), false)
end

-- 128-bit serialisation of h (the top two bits are dropped)
local function limbs_to16(h)
    local bt, acc, nbits = {}, 0, 0
    for i = 1, 13 do
        local v = h[i]
        local top = (i == 13) and 7 or 9
        for k = 0, top do
            acc = acc + (floor(v / POW[k + 1]) % 2) * POW[nbits + 1]
            nbits = nbits + 1
            if nbits == 8 then bt[#bt + 1] = char(acc); acc, nbits = 0, 0 end
        end
    end
    return concat(bt)  -- exactly 16 bytes
end

local function poly1305(key, msg)
    local r = pm_clamp(key)
    local h = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 }
    for i = 1, #msg, 16 do
        local blk = sub(msg, i, i + 15)
        h = pm_mul(pm_add(h, limbs_of(blk, true)), r)
    end
    h = pm_carry(h)
    -- subtract p (limb1 = 1019, limbs 2..13 = 1023) if h >= p
    local ge = true
    for i = 13, 1, -1 do
        local lim = (i == 1) and 1019 or 1023
        if h[i] ~= lim then
            ge = h[i] > lim
            break
        end
    end
    if ge then
        local borrow = 0
        for i = 1, 13 do
            local lim = (i == 1) and 1019 or 1023
            local v = h[i] - lim - borrow
            if v < 0 then v = v + 1024; borrow = 1 else borrow = 0 end
            h[i] = v
        end
    end
    local tag = limbs_to16(h)
    local s = sub(key, 17, 32)
    local out, carry = {}, 0
    for i = 1, 16 do
        local v = byte(tag, i) + byte(s, i) + carry
        out[i] = v % 256
        carry = floor(v / 256)
    end
    return char(out[1], out[2], out[3], out[4], out[5], out[6], out[7], out[8],
        out[9], out[10], out[11], out[12], out[13], out[14], out[15], out[16])
end

---------------------------------------------------------------------------
-- AEAD (ChaCha20 + Poly1305, encrypt-then-MAC)
---------------------------------------------------------------------------
local function len64(n)
    return w2b(n % M32) .. w2b(floor(n / M32))
end

local function pad16(s)
    local r = #s % 16
    if r == 0 then return "" end
    return rep("\0", 16 - r)
end

local function aead_open(key, nonce, sealed, aad)
    if #sealed < 17 then return nil end
    local ct, tag = sub(sealed, 1, #sealed - 16), sub(sealed, #sealed - 15)
    local otk = sub(chacha_block(key, 0, nonce), 1, 32)
    local data = aad .. pad16(aad) .. ct .. pad16(ct) .. len64(#aad) .. len64(#ct)
    if poly1305(otk, data) ~= tag then return nil end
    return chacha_xor(key, nonce, ct, 1)
end

---------------------------------------------------------------------------
-- NIL91 transport encoding
---------------------------------------------------------------------------
local TAGCH = "1234"

local P91 = { 1, 91, 91 * 91, 91 * 91 * 91, 91 * 91 * 91 * 91 }

local function b91_decode(text, alpha)
    local idx = {}
    for i = 1, #alpha do idx[sub(alpha, i, i)] = i - 1 end
    local out, n = {}, 0
    local i = 1
    while i + 5 <= #text do
        local v = 0
        for k = 0, 4 do
            local d = idx[sub(text, i + k, i + k)]
            if not d then return nil end
            v = v + d * P91[k + 1]
        end
        local tail = TAGCH:find(sub(text, i + 5, i + 5), 1, true)
        if not tail then return nil end
        n = n + 1
        out[n] = w2b(v)
        i = i + 6
        if tail < 4 then out[n] = sub(out[n], 1, tail) end
    end
    return concat(out)
end

---------------------------------------------------------------------------
-- Mini-VM: derives the boot key and the alphabet permutation
---------------------------------------------------------------------------
local NREG = 8

local function vm(prog)
    local r = {}
    for i = 1, NREG do r[i] = 0 end
    local out, alpha = {}, nil
    local i = 1
    local n = 0
    while i <= #prog do
        local op = prog[i]
        if op == 1 then
            r[prog[i + 1]] = prog[i + 2] % M32
            i = i + 3
        elseif op == 2 then
            r[prog[i + 1]] = BX(r[prog[i + 1]], r[prog[i + 2]])
            i = i + 3
        elseif op == 3 then
            r[prog[i + 1]] = (r[prog[i + 1]] + r[prog[i + 2]]) % M32
            i = i + 3
        elseif op == 4 then
            r[prog[i + 1]] = MUL32(r[prog[i + 1]], r[prog[i + 2]])
            i = i + 3
        elseif op == 5 then
            r[prog[i + 1]] = ROTL(r[prog[i + 1]], prog[i + 2])
            i = i + 3
        elseif op == 6 then
            local a, b = prog[i + 1], prog[i + 2]
            r[a], r[b] = r[b], r[a]
            i = i + 3
        elseif op == 7 then
            n = n + 1
            out[n] = char(r[prog[i + 1]] % 256)
            i = i + 2
        elseif op == 8 then
            local a, b, k = prog[i + 1], prog[i + 2], prog[i + 3]
            r[a] = BX(r[a], (MUL32(r[b], k) + 0x9E37) % M32)
            i = i + 4
        elseif op == 9 then
            local A = r[prog[i + 1]] % 91
            if A == 0 then A = 1 end
            while A % 7 == 0 or A % 13 == 0 do A = A + 1 end
            local B = r[prog[i + 2]] % 91
            local t = {}
            for k = 1, 91 do
                t[k] = sub(CHARS, ((k - 1) * A + B) % 91 + 1, ((k - 1) * A + B) % 91 + 1)
            end
            alpha = concat(t)
            i = i + 3
        elseif op == 10 then
            r[prog[i + 1]] = (r[prog[i + 1]] + prog[i + 2]) % M32
            i = i + 3
        else
            return nil
        end
    end
    return concat(out), alpha
end

---------------------------------------------------------------------------
-- String pool: one nonce per *site*, so a bulk dump decrypts nothing
---------------------------------------------------------------------------
local function site_nonce(base, i)
    local v = BX((i + b2w(base, 9)) % M32, 0x5BF03635)
    return sub(base, 1, 8) .. w2b(v)
end

local function pool_open(blob, nonce, key)
    -- integrity first: a re-framed pool would otherwise feed garbage strings
    -- into the payload; instead we hand back nil and the caller stays silent
    if #blob < 17 then return nil end
    local body, tag = sub(blob, 1, #blob - 16), sub(blob, #blob - 15)
    local kpk = sub(chacha_block(key, 0xFFFFFFFF, nonce), 1, 32)
    if poly1305(kpk, body) ~= tag then return nil end
    local pool = { blob = body, nonce = nonce, key = key, off = {}, len = {}, n = 0 }
    local i, n = 1, 0
    while i + 1 <= #blob - 16 do
        local l = byte(blob, i) + byte(blob, i + 1) * 256
        n = n + 1
        pool.off[n] = i + 2
        pool.len[n] = l
        i = i + 2 + l
    end
    pool.n = n
    pool.cache = {}
    return pool
end

local function pool_get(pool, i)
    local c = pool.cache[i]
    if c ~= nil then return c end
    local off, len = pool.off[i], pool.len[i]
    if not off then return "" end
    local ct = sub(pool.blob, off, off + len - 1)
    local pt = chacha_xor(pool.key, site_nonce(pool.nonce, i), ct, 0)
    pool.cache[i] = pt
    return pt
end

---------------------------------------------------------------------------
return {
    bxor = BX, band = BA, bor = BO, rotl = ROTL, mul32 = MUL32,
    block = chacha_block, xor = chacha_xor, poly = poly1305, aead = aead_open,
    b91 = b91_decode, vm = vm, kdf = function(k, f, n)
        return sub(chacha_block(k, f, n), 1, 32), sub(chacha_block(k, (f + 1) % M32, n), 1, 32)
    end,
    pool_open = pool_open, pool_get = pool_get, site_nonce = site_nonce,
    load = loadstring or load, w2b = w2b, b2w = b2w, len64 = len64, pad16 = pad16,
}
