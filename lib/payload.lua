-- ===========================================================
-- 999MS Payload — UI + server-backed authentication
-- ===========================================================
-- HEADER: the host stays readable/outside obfuscation and is passed in.
local MS999_BASE_URL = "@BASE_URL@"
local __ms999_unpack = table.unpack or unpack
local __ms999_args = { n = select("#", ...), ... }
local __ms999_base = __ms999_args.n
local __ms999_extra = { MS999_BASE_URL }
for __ms999_i = 1, #__ms999_extra do __ms999_args[__ms999_base + __ms999_i] = __ms999_extra[__ms999_i] end
__ms999_args.n = __ms999_base + #__ms999_extra
local __ms999_stage = function(...)
-- BODY BEGIN: obfuscate only the content below this line.
-- ===========================================================
local HttpService = game:GetService("HttpService")
local Players = game:GetService("Players")
local ctx, msBaseUrl = ...

local function Abort(reason)
    local stop = type(ctx) == "table" and ctx.stopChecks or nil
    if type(stop) == "function" then pcall(stop) end
    if type(ctx) == "table" then ctx.requestWire = nil end
    local message = "[999MS] " .. tostring(reason or "stage aborted")
    if type(warn) == "function" then warn(message) else print(message) end
    return false
end

local BASE_URL = msBaseUrl
local CHAIN_VERSION = "999MS-chain-v1"
local CHAIN_TTL = 60
local CHAIN_SESSION_TTL = 30 * 60

if type(ctx) ~= "table" then return Abort("[999MS] Context missing") end
local Chain = ctx.chain
local ChainId = type(Chain) == "table" and Chain.Id or nil
local function chainIs(stage, maxAge)
    local current = ctx.chain
    return current == Chain
        and type(current) == "table"
        and current.Version == CHAIN_VERSION
        and type(current.Id) == "string"
        and current.Id == ChainId
        and current.Stage == stage
        and type(current.UpdatedAt) == "number"
        and tick() - current.UpdatedAt >= 0
        and tick() - current.UpdatedAt <= maxAge
end

if not chainIs("loader", CHAIN_TTL) then
    return Abort("[999MS] Chain rejected: run loadc.lua")
end
if ctx.sourceSaved then return Abort("source marker was saved") end
if not chainIs("loader", 60) then
    return Abort("[999MS] Chain interrupted before payload")
end
Chain.Stage = "payload"
Chain.UpdatedAt = tick()

-- ═══ Essential hand-off APIs ═══
local RealLoadstring = loadstring or load
local HttpRequest = ctx.request
if type(RealLoadstring) ~= "function" then return Abort("loadstring API unavailable") end
if type(HttpRequest) ~= "function" then return Abort("HTTP request API unavailable") end

-- ===========================================================
-- Anti-Save
--
-- Stage 2 owns the runtime write/outbound monitor. This stage also performs
-- a local startup file scan; auth and chain validation remain server-backed.
-- ===========================================================

-- ═══ Locals ═══
local SCRIPT_NAME = ctx.scriptName or "main"
local SCRIPT_NAME_LOCKED = SCRIPT_NAME
local USER_KEY = type(ctx.key) == "string" and ctx.key or ""
local StartupError = ""
local RAWSET_FAILURE = "rawset/rawget self-test failed"
-- The key arrived as a local positional argument; discard it from the context
-- as soon as this stage has captured its private copy.
ctx.key = nil

local Char = ("").char
local Byte = ("").byte
local Gmatch = ("").gmatch

local ServerId = ""
local XORKey = ""
local Ticket = ""
local ChecksActive = true
-- Keeps the Control panel channel alive after post-load monitoring stops.
local ControlActive = false

-- ═══ Helpers ═══
-- Stop post-load monitoring without disconnecting or suspending the client.
local function StopChecks(keepStageHooks)
    if not ChecksActive then return end
    ChecksActive = false
    Ticket = ""
    ServerId = ""
    XORKey = ""

    if ctx.chain == Chain and type(Chain) == "table" and Chain.Id == ChainId then
        ctx.chain = nil
    end
    local stopStageTwo = ctx.stopChecks
    if not keepStageHooks and type(stopStageTwo) == "function" then pcall(stopStageTwo) end
    ctx.request = nil
    ctx.requestWire = nil
    ctx.writeMonitor = nil
    ctx.key = nil
    ctx.running = nil
end


local function Split(str, sep)
    local out = {}
    for p in Gmatch(str, "([^" .. sep .. "]+)") do
        table.insert(out, p)
    end
    return out
end

local function GetHWID()
    -- Match Luasec's primary getter order, then accept common executor aliases.
    -- A getter must be present; do not substitute an executor fingerprint header
    -- or Roblox's ClientId for this client-supplied device identifier.
    local fs = {}
    local function add(fn)
        if type(fn) == "function" then fs[#fs + 1] = fn end
    end
    add(gethwid)
    add(get_exwid)
    if type(syn) == "table" then add(syn.get_hwid) end
    add(get_hwid)
    for _, fn in ipairs(fs) do
        local ok, value = pcall(fn)
        if ok and type(value) == "string" and #value >= 4 and #value <= 512 then
            return value
        end
    end
    return nil
end

local SafeLoadstring = RealLoadstring
if not chainIs("payload", CHAIN_SESSION_TTL) then
    return Abort("[999MS] Chain expired before authentication")
end

print("[999MS] Runtime APIs ready")

-- ═══ Crypto ═══
local Charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"

local function Xor(data, key)
    local out = ""
    for i = 1, #data do
        out = out .. Char(bit32.bxor(data:byte(i), key:byte((i - 1) % #key + 1)))
    end
    return out
end

local function Base64(str)
    local out = ""
    for i = 1, #str, 3 do
        local a, b, c = str:byte(i, i + 2)
        a, b, c = a or 0, b or 0, c or 0
        local n = bit32.lshift(a, 16) + bit32.lshift(b, 8) + c
        local s1 = bit32.rshift(n, 18) % 64
        local s2 = bit32.rshift(n, 12) % 64
        local s3 = bit32.rshift(n, 6) % 64
        local s4 = n % 64
        out = out .. Charset:sub(s1 + 1, s1 + 1) .. Charset:sub(s2 + 1, s2 + 1)
        if i + 1 > #str then
            out = out .. "=="
        elseif i + 2 > #str then
            out = out .. Charset:sub(s3 + 1, s3 + 1) .. "="
        else
            out = out .. Charset:sub(s3 + 1, s3 + 1) .. Charset:sub(s4 + 1, s4 + 1)
        end
    end
    return out
end

local function Base64Decode(str)
    str = str:gsub("-", "+"):gsub("_", "/")
    while #str % 4 ~= 0 do str = str .. "=" end
    local out = ""
    local buffer, bits = 0, 0
    for i = 1, #str do
        local c = str:sub(i, i)
        if c ~= "=" then
            local v = Charset:find(c, 1, true)
            if v then
                buffer = bit32.lshift(buffer, 6) + (v - 1)
                bits = bits + 6
                if bits >= 8 then
                    bits = bits - 8
                    out = out .. Char(bit32.rshift(buffer, bits) % 256)
                end
            end
        end
    end
    return out
end

-- ═══ RNG ═══
local function Floor(n)
    if n >= 0 then return n - (n % 1) end
    if n % 1 == 0 then return n end
    return n - (n % 1) - 1
end
local function Abs(n) return n < 0 and -n or n end

local function Equate(X)
    X = X + 73
    local Y = (X % 11) ^ 3 + (X % 5) * 97 + Floor(X / 3)
    if X ~= 0 then Y = Y + (X * 37) - ((X % 9) ^ 2)
    else Y = Abs(Y) + 137 end
    return (Y * 7919 + 1234567) % 100000000000003
end

local ChallengeMultipliers = { 2, 5, 3, 7, 11 }
local ChallengeOffsets = { -32, 256, -17, 19, -101 }
local function RestoreChallenge(index, value)
    if type(value) ~= "number" then return nil end
    local restored = (value - ChallengeOffsets[index]) / ChallengeMultipliers[index]
    if restored % 1 ~= 0 then return nil end
    return restored
end
local function GetRngSeed() return math.random(1, 1000000) end

local function E1() return tonumber(#game:GetService("Workspace"):GetChildren()) end
local function E2() return tonumber(#game:GetChildren()) end
local function E3() return tonumber(#game:GetService("Players"):GetPlayers()) end
local function E4()
    local player = Players.LocalPlayer
    return player and tonumber(player.UserId) or 0
end
local function E5() return tonumber(game.PlaceId) end
local function E6()
    local s = (game.JobId or ""):gsub("-", "")
    return tonumber(s:sub(1, 15), 16) or 0
end

local function R1()
    local b = GetRngSeed() + GetRngSeed() + E1() + E2()
    local r1, r2 = math.random(1, 1000), math.random(1, 1000)
    return Equate(((r1 ~= 0) and (b * r1) or b) + r2 + (E1() % (r2 + 1)))
end
local function R2()
    local b = GetRngSeed() + GetRngSeed() + E3() + E4()
    local r3, r4 = math.random(1, 1000), math.random(1, 1000)
    local c = (r3 % 2 == 0) and (b + r3) or (b - (r3 % 256))
    return Equate(((r4 ~= 0) and (c * r4) or c) + E3())
end
local function R3()
    local b = GetRngSeed() + GetRngSeed() + E5() + E6()
    local r5, r6 = math.random(1, 1000), math.random(1, 1000)
    local sh = bit32.lshift(b % 2^20, (r5 % 8))
    return Equate(((r6 > 0) and (sh % (r6 + 1)) or sh) + r5 + E5())
end
local function R4()
    local b = GetRngSeed() + GetRngSeed() + E4() + E5()
    local r7, r8 = math.random(1, 1000), math.random(1, 1000)
    local x = bit32.bxor(b % 2^20, r7)
    return Equate(((r8 ~= 0) and (x * (r8 % 100)) or x) + E4() + r7)
end
local function R5()
    local b = GetRngSeed() + GetRngSeed() + E6() + E4()
    local r9, r10 = math.random(1, 1000), math.random(1, 1000)
    local m = (r10 > 0) and (b % r10) or b
    return Equate(((r9 ~= 0) and (m * r9) or m) + E6() + r10)
end

-- Use Roblox's JSON decoder after bounding the response size.
local function JsonDecode(text)
    if type(text) ~= "string" or #text == 0 or #text > 2 * 1024 * 1024 then return nil end
    local ok, value = pcall(function() return HttpService:JSONDecode(text) end)
    return ok and value or nil
end

local function EncodeJson(value)
    local kind = type(value)
    if kind == "nil" then return "null" end
    if kind == "boolean" then return tostring(value) end
    if kind == "number" then
        -- tostring() truncates at 14 significant digits, which would round the
        -- challenge values (they run up to 1e14). Emit integers exactly.
        if value ~= value or value == math.huge or value == -math.huge then return "null" end
        if value % 1 == 0 and Abs(value) < 2 ^ 53 then return string.format("%.0f", value) end
        return string.format("%.17g", value)
    end
    if kind == "string" then
        return '"' .. value:gsub('[%z\1-\31\\"]', function(ch)
            local map = { ['"'] = '\\"', ["\\"] = "\\\\", ["\n"] = "\\n", ["\r"] = "\\r", ["\t"] = "\\t" }
            return map[ch] or string.format("\\u%04x", ch:byte())
        end) .. '"'
    end
    if kind == "table" then
        if #value > 0 then
            local parts = {}
            for index = 1, #value do parts[index] = EncodeJson(value[index]) end
            return "[" .. table.concat(parts, ",") .. "]"
        end
        local parts = {}
        for key, item in pairs(value) do
            parts[#parts + 1] = EncodeJson(tostring(key)) .. ":" .. EncodeJson(item)
        end
        return "{" .. table.concat(parts, ",") .. "}"
    end
    return "null"
end

-- Versioned framing adapted from Jjhj.txt. The XOR key travels with the data:
-- this is reversible obfuscation, NOT encryption/authentication. TLS, signed
-- tickets, provider checks and server-side runtime proof remain authoritative.
local Wire = {}
do
    local VERSION = "ms999-morse-v1"
    local KEY_BYTES = 16
    local MAX_PLAIN_BYTES = 128 * 1024
    local MAX_WIRE_CHARS = (MAX_PLAIN_BYTES + KEY_BYTES + 8) * 12
    local morse = {
        ["0"] = "-----", ["1"] = ".----", ["2"] = "..---", ["3"] = "...--", ["4"] = "....-",
        ["5"] = ".....", ["6"] = "-....", ["7"] = "--...", ["8"] = "---..", ["9"] = "----.",
        A = ".-", B = "-...", C = "-.-.", D = "-..", E = ".", F = "..-.",
    }
    local reverse = {}
    for symbol, code in pairs(morse) do reverse[code] = symbol end

    local function checksum16(bytes)
        local sum = 0
        for index = 1, #bytes do sum = (sum + bytes[index] * index) % 65536 end
        return sum
    end
    local function permutation(length, seed)
        local order = {}
        for index = 1, length do order[index] = index end
        for index = length, 2, -1 do
            seed = (seed * 1664525 + 1013904223) % 4294967296
            local other = seed % index + 1
            order[index], order[other] = order[other], order[index]
        end
        return order
    end
    local function bytesToString(bytes, first, last)
        local parts = {}
        for index = first or 1, last or #bytes do parts[#parts + 1] = string.char(bytes[index]) end
        return table.concat(parts)
    end

    function Wire.Encode(text)
        if type(text) ~= "string" or #text > MAX_PLAIN_BYTES then return nil, "Wire input size invalid" end
        local key, bytes = {}, {}
        for index = 1, KEY_BYTES do key[index] = math.random(0, 255) end
        for index = 1, #text do bytes[index] = text:byte(index) end
        local length, sum = #text, checksum16(bytes)
        local frame = {
            77, 49,
            math.floor(length / 16777216) % 256, math.floor(length / 65536) % 256,
            math.floor(length / 256) % 256, length % 256,
        }
        for index = 1, #bytes do frame[#frame + 1] = bytes[index] end
        frame[#frame + 1] = math.floor(sum / 256)
        frame[#frame + 1] = sum % 256
        for index = 1, #frame do frame[index] = bit32.bxor(frame[index], key[(index - 1) % KEY_BYTES + 1]) end
        local order = permutation(#frame, checksum16(key))
        local raw = {}
        for index = 1, KEY_BYTES do raw[#raw + 1] = key[index] end
        for index = 1, #order do raw[#raw + 1] = frame[order[index]] end
        local tokens = {}
        for index = 1, #raw do
            local hex = string.format("%02X", raw[index])
            for digit = 1, 2 do
                local code = morse[hex:sub(digit, digit)]
                code = code:gsub("%-%-", "I"):gsub("%-", "l"):gsub("%.%.", ":")
                tokens[#tokens + 1] = code
            end
        end
        return table.concat(tokens, ";")
    end

    function Wire.Decode(encoded)
        if type(encoded) ~= "string" or #encoded == 0 or #encoded > MAX_WIRE_CHARS
            or encoded:find("[^Il.:;]") or encoded:sub(1, 1) == ";"
            or encoded:sub(-1) == ";" or encoded:find(";;", 1, true) then
            return nil, "Wire encoding invalid"
        end
        local digits = {}
        for token in encoded:gmatch("[^;]+") do
            if #token > 5 then return nil, "Wire token invalid" end
            local code = token:gsub("I", "--"):gsub("l", "-"):gsub(":", "..")
            local symbol = reverse[code]
            if not symbol then return nil, "Wire token invalid" end
            digits[#digits + 1] = symbol
            if #digits > (MAX_PLAIN_BYTES + KEY_BYTES + 8) * 2 then return nil, "Wire frame size invalid" end
        end
        if #digits % 2 ~= 0 or #digits < (KEY_BYTES + 8) * 2 then return nil, "Wire frame size invalid" end
        local key, shuffled = {}, {}
        for index = 1, #digits, 2 do
            local byte = tonumber(digits[index] .. digits[index + 1], 16)
            if not byte then return nil, "Wire hex invalid" end
            if #key < KEY_BYTES then key[#key + 1] = byte else shuffled[#shuffled + 1] = byte end
        end
        local order = permutation(#shuffled, checksum16(key))
        local frame = {}
        for index = 1, #order do frame[order[index]] = shuffled[index] end
        for index = 1, #frame do frame[index] = bit32.bxor(frame[index], key[(index - 1) % KEY_BYTES + 1]) end
        if frame[1] ~= 77 or frame[2] ~= 49 then return nil, "Wire magic invalid" end
        local length = frame[3] * 16777216 + frame[4] * 65536 + frame[5] * 256 + frame[6]
        if length > MAX_PLAIN_BYTES or length + 8 ~= #frame then return nil, "Wire length invalid" end
        local bytes = {}
        for index = 1, length do bytes[index] = frame[index + 6] end
        local expected = frame[#frame - 1] * 256 + frame[#frame]
        if expected ~= checksum16(bytes) then return nil, "Wire checksum invalid" end
        return bytesToString(bytes)
    end

    function Wire.Wrap(body)
        local guidOk, guid = pcall(function() return HttpService:GenerateGUID(false) end)
        if not guidOk or type(guid) ~= "string" then return nil, nil, "Wire nonce unavailable" end
        local nonce = guid:gsub("-", ""):lower()
        if #nonce ~= 32 or nonce:find("[^a-f0-9]") then return nil, nil, "Wire nonce invalid" end
        local encoded, err = Wire.Encode(EncodeJson({ v = 1, n = nonce, t = os.time(), b = body }))
        if not encoded then return nil, nil, err end
        return { w = VERSION, d = encoded }, nonce
    end

    function Wire.Unwrap(envelope, nonce)
        if type(envelope) ~= "table" or envelope.w ~= VERSION then return nil, "Wire response version invalid" end
        local plain, err = Wire.Decode(envelope.d)
        if not plain then return nil, err end
        local packet = JsonDecode(plain)
        if type(packet) ~= "table" or packet.v ~= 1 or packet.n ~= nonce
            or type(packet.t) ~= "number" or packet.t % 1 ~= 0
            or math.abs(os.time() - packet.t) > 300 or type(packet.b) ~= "table" then
            return nil, "Wire response metadata invalid"
        end
        if packet.x ~= nil or envelope.x ~= nil then
            local descriptor, data = packet.x, envelope.x
            if type(descriptor) ~= "table" or descriptor.t ~= "bytes" or type(data) ~= "table"
                or #data > 1024 * 1024 or descriptor.l ~= #data or packet.b.Data ~= nil
                or type(descriptor.h) ~= "string" or #descriptor.h ~= 64
                or descriptor.h:find("[^a-f0-9]") then return nil, "Wire bulk invalid" end
            local count = 0
            for index, byte in pairs(data) do
                if type(index) ~= "number" or index % 1 ~= 0 or index < 1 or index > #data
                    or type(byte) ~= "number" or byte % 1 ~= 0 or byte < 0 or byte > 255 then
                    return nil, "Wire bulk byte invalid"
                end
                count = count + 1
            end
            if count ~= #data then return nil, "Wire bulk array invalid" end
            local cryptTable = (type(syn) == "table" and syn.crypt) or crypt
            local hash = type(cryptTable) == "table" and cryptTable.hash or nil
            if type(hash) ~= "function" then return nil, "Wire bulk hash unavailable" end
            local hashInput = #data == 0 and "[]" or EncodeJson(data)
            local hashOk, digest = pcall(hash, hashInput, "sha256")
            if not hashOk or type(digest) ~= "string" or digest:lower() ~= descriptor.h then
                return nil, "Wire bulk digest invalid"
            end
            packet.b.Data = data
        end
        return packet.b
    end
end

-- Environment/function metadata warnings are advisory; the rawset self-test is mandatory.
-- No executor-global writes, alternative HWID, global RNG reseed or third-party auth.
local function RunClientDiagnostics()
    local warnings, skipped = 0, 0
    local function probe(callback)
        local ok, result = pcall(callback)
        if not ok or result ~= true then warnings = warnings + 1 end
    end
    probe(function() return game.ClassName == "DataModel" end)
    probe(function() return workspace.ClassName == "Workspace" end)
    probe(function() return typeof(Enum.Material.Plastic) == "EnumItem" and Enum.Material.Plastic.Value == 256 end)
    probe(function() return typeof(game.Changed) == "RBXScriptSignal" end)
    probe(function() return typeof(workspace.Changed) == "RBXScriptSignal" end)
    probe(function()
        local runService = game:GetService("RunService")
        return runService.ClassName == "RunService" and runService:IsClient() and not runService:IsServer()
    end)
    probe(function()
        local position = CFrame.new(1, 2, 3)
        return position.X == 1 and position.Y == 2 and position.Z == 3
    end)
    probe(function()
        local guid = HttpService:GenerateGUID(false)
        return type(guid) == "string" and #guid == 36
    end)
    probe(function() return type(HttpRequest) == "function" and type(SafeLoadstring) == "function" end)

    -- Mandatory rawset/rawget self-test adapted from Jjhj.txt. Use a fresh
    -- local table, never permanent executor-global keys or a process-wide hook.
    local rawsetPassed = false
    local setValue, getValue = rawset, rawget
    if type(setValue) == "function" and type(getValue) == "function" then
        local testOk, testResult = pcall(function()
            local indexCalls, newIndexCalls = 0, 0
            local temporary = setmetatable({}, {
                __index = function() indexCalls = indexCalls + 1; return nil end,
                __newindex = function() newIndexCalls = newIndexCalls + 1 end,
            })
            local key, sentinel = "999MS_RawsetSelfTest", {}
            local returned = setValue(temporary, key, sentinel)
            local written = getValue(temporary, key) == sentinel
            setValue(temporary, key, nil)
            return returned == temporary and written and getValue(temporary, key) == nil
                and indexCalls == 0 and newIndexCalls == 0
        end)
        rawsetPassed = testOk and testResult == true
        if not rawsetPassed then
            warnings = warnings + 1
            pcall(function() warn("[999MS] rawset/rawget self-test failed") end)
        end
    else
        -- Missing required primitives count as a failed self-test, not a pass.
        warnings = warnings + 1
        skipped = skipped + 1
    end

    -- Stage 2 intentionally hooks outbound functions. Do not mistake those
    -- owned request/print/clipboard hooks for evidence of third-party tampering.
    local functions = { type, tostring, tonumber, pcall, os.clock, os.time, bit32 and bit32.bxor }
    for _, fn in pairs(functions) do
        if type(fn) == "function" then
            if type(islclosure) == "function" and type(iscclosure) == "function" then
                probe(function() return not islclosure(fn) and iscclosure(fn) end)
            else
                skipped = skipped + 1
            end
            if type(isfunctionhooked) == "function" then
                probe(function() return not isfunctionhooked(fn) end)
            else
                skipped = skipped + 1
            end
            if type(debug) == "table" and type(debug.getinfo) == "function" then
                local ok, info = pcall(debug.getinfo, fn, "S")
                if ok and type(info) == "table" and type(info.what) == "string" then
                    if info.what ~= "C" then warnings = warnings + 1 end
                else
                    skipped = skipped + 1
                end
            else
                skipped = skipped + 1
            end
        end
    end
    if warnings > 0 then
        pcall(function() warn("[999MS] Client diagnostics: " .. warnings .. " warning(s); authentication still requires server approval") end)
    end
    return { warnings = warnings, skipped = skipped, rawsetPassed = rawsetPassed }
end

-- Wire-entry scaffold from the proposal. It is intentionally not connected to
-- the live request format until __stWireMask and wireKey derivation are defined.
local function pack(...)
    return { n = select("#", ...), ... }
end

local function buildEntries(items, clearCount, wireKey)
    if type(items) ~= "table" then return nil, "Invalid items" end
    if type(clearCount) ~= "number" or clearCount < 0 then return nil, "Invalid clearCount" end

    local entries = {}
    local total = 0
    for index = 1, items.n or #items do
        local item = items[index]
        if type(item) ~= "table" then return nil, "Invalid item" end

        local kind, text = item[1], item[2]
        if type(kind) ~= "number" then return nil, "Invalid kind" end
        if type(text) ~= "string" then return nil, "Invalid text" end

        if index - 1 > clearCount and #text > 0 then
            if type(__stWireMask) ~= "function" then return nil, "Mask function unavailable" end
            local ok, masked = pcall(__stWireMask, text, wireKey, index - 1)
            if not ok or type(masked) ~= "string" then return nil, "Mask failed" end
            text = masked
        end

        if #text > 65535 then return nil, "Text too long" end
        entries[#entries + 1] = { kind, text }
        total = total + 3 + #text
    end
    return entries, total
end

-- ═══ POST ═══
local function AddDeviceParts(out, hwid)
    local value = string.lower((hwid:match("^%s*(.-)%s*$")))
    local encoded = Base64(value)
    local length = #encoded
    for index = 1, 5 do
        local first = math.floor((index - 1) * length / 5) + 1
        local last = math.floor(index * length / 5)
        out[string.char(97 + index)] = encoded:sub(first, last)
    end
end

local function PackRequest(path, payload, hwid)
    local out = {}
    if path == "/api/verify" then
        out.p, out.a = "q7", payload.key
        AddDeviceParts(out, hwid)
        out.g, out.h = payload.scriptName, payload.userId
        out.i, out.j, out.k = payload.Rng1, payload.Rng2, payload.Rng3
        out.l, out.m, out.n = payload.Rng4, payload.Rng5, payload.RngFloat
    elseif path == "/api/script" then
        out.p, out.a = "m2", payload.ticket
        AddDeviceParts(out, hwid)
        out.g, out.o = payload.scriptName, payload.Data
        out.q, out.r = payload.hop, payload.eq
    elseif path == "/api/script-verify" then
        out.p, out.a = "x9", payload.ticket
        AddDeviceParts(out, hwid)
        out.g, out.q = payload.scriptName, payload.hop
        out.s, out.t = payload.runtimeSecret, payload.scriptToken
    elseif path == "/api/heartbeat" then
        out.p, out.a = "v4", payload.ticket
        AddDeviceParts(out, hwid)
        out.g, out.o = payload.scriptName, payload.Data
    elseif path == "/api/start" then
        out.p = "k8"
        AddDeviceParts(out, hwid)
        out.g = payload.scriptName
    else
        return nil
    end
    -- `u` carries the raw getter value as a decoy; the server ignores it.
    out.u = hwid
    return out
end

-- One versioned transport shared with main.lua through the run-local ctx.
-- The caller cannot select a different endpoint or silently downgrade to JSON.
local function SendWire(packed, expectedBaseUrl)
    if not ChecksActive and not ControlActive then return nil, "Cancelled" end
    if expectedBaseUrl ~= nil and expectedBaseUrl ~= BASE_URL then
        return nil, "Wire origin mismatch"
    end
    if type(packed) ~= "table" then return nil, "Unsupported request" end
    local envelope, nonce, wireError = Wire.Wrap(packed)
    if not envelope then return nil, wireError end
    local requestBody = EncodeJson(envelope)
    if #requestBody > 1024 * 1024 then return nil, "Wire request too large" end
    local headers = { ["Content-Type"] = "application/json" }
    local ok, res = pcall(HttpRequest, {
        Url = BASE_URL .. "/api/q",
        Method = "POST",
        Headers = headers,
        Body = requestBody,
    })
    if not ok or type(res) ~= "table" then return nil, "Connection failed" end
    local status = tonumber(res.StatusCode or res.Status)
    local responseBody = res.Body
    if type(status) ~= "number" or type(responseBody) ~= "string" then
        return nil, "Malformed response"
    end
    if #responseBody > 4 * 1024 * 1024 then return nil, "Response too large" end
    local decoded = JsonDecode(responseBody)
    if type(decoded) ~= "table" then return nil, "Invalid response" end
    if decoded.w == nil and status ~= 200 then
        if status == 429 then return nil, "Rate limited" end
        return nil, "Wire request rejected (HTTP " .. tostring(status) .. ")"
    end
    local unpacked, decodeError = Wire.Unwrap(decoded, nonce)
    if type(unpacked) ~= "table" then return nil, decodeError or "Invalid wire response" end
    return { status = status, data = unpacked }, nil
end

ctx.requestWire = SendWire

local function postJSON(path, payload, hwid)
    -- Keep the existing Base64-HWID fields and ignored raw decoy inside the frame.
    if type(hwid) ~= "string" or #hwid < 4 or #hwid > 512 then
        return nil, "Executor HWID getter unavailable"
    end
    local packed = PackRequest(path, payload, hwid)
    if type(packed) ~= "table" then return nil, "Unsupported request" end
    return SendWire(packed)
end

local function EncodeBody(tbl)
    local json = EncodeJson(tbl)
    local encrypted = Xor(json, XORKey)
    local b64 = Base64(encrypted)
    local full = XORKey .. b64
    local bytes = {}
    for i = 1, #full do table.insert(bytes, Byte(full, i)) end
    return { Data = bytes }
end

-- ═══ Control channel (Control panel ⇄ running client) ═══
-- Reports the runner profile and pulls admin commands over the same
-- authenticated wire as the rest of the runtime. Commands are still gated
-- server-side by ADMIN_TOKEN and the signed session ticket; the profile the
-- client reports is display data only and authorises nothing.
local CONTROL_BEAT_SECONDS = 12
local ControlKick           -- assigned below; needs the kick-prompt helper
local StartControlAgent

local function DecodeBody(resp, key)
    if type(resp) ~= "table" or type(resp.Data) ~= "table" then return nil end
    if #resp.Data == 0 or #resp.Data > 1024 * 1024 then return nil end
    local bytes = {}
    for index, byte in ipairs(resp.Data) do
        if type(byte) ~= "number" or byte % 1 ~= 0 or byte < 0 or byte > 255 then return nil end
        bytes[index] = Char(byte)
    end
    local raw = table.concat(bytes)
    if type(key) ~= "string" or #key == 0 or raw:sub(1, #key) ~= key then return nil end
    return JsonDecode(Xor(Base64Decode(raw:sub(#key + 1)), key))
end

local function ControlExecutorName()
    if type(identifyexecutor) == "function" then
        local ok, value = pcall(identifyexecutor)
        if ok and type(value) == "string" and #value > 0 then return value end
    end
    if type(syn) == "table" then return "Synapse X" end
    if type(krnl) == "table" or KRNL_LOADED ~= nil then return "KRNL" end
    if type(fluxus) == "table" then return "Fluxus" end
    if type(WrapGlobal) == "function" then return "Script-Ware" end
    return "unknown"
end

local function ControlProfile()
    local profile = { executor = ControlExecutorName() }
    pcall(function()
        local player = Players.LocalPlayer
        if player then
            profile.name = tostring(player.Name or "")
            profile.displayName = tostring(player.DisplayName or player.Name or "")
            profile.userId = tostring(player.UserId or "")
        end
    end)
    pcall(function() profile.placeId = tostring(game.PlaceId or "") end)
    pcall(function() profile.jobId = tostring(game.JobId or "") end)
    return profile
end

local function ControlRunCode(code)
    if type(SafeLoadstring) ~= "function" then return false, "loadstring unavailable" end
    local compileOk, chunk = pcall(SafeLoadstring, code)
    if not compileOk or type(chunk) ~= "function" then
        return false, "compile failed: " .. tostring(chunk)
    end
    local packed = { pcall(chunk) }
    if packed[1] ~= true then return false, tostring(packed[2]) end
    local out = {}
    for index = 2, #packed do out[#out + 1] = tostring(packed[index]) end
    if #out == 0 then return true, "ok" end
    return true, table.concat(out, ", ")
end

StartControlAgent = function(ticket, xorKey, hwid)
    if ControlActive then return end
    if type(ticket) ~= "string" or #ticket == 0 then return end
    if type(xorKey) ~= "string" or #xorKey == 0 then return end
    if type(hwid) ~= "string" or #hwid < 4 or #hwid > 512 then return end
    ControlActive = true

    task.spawn(function()
        local pending = nil
        local misses = 0

        while ControlActive do
            local beatBody = { scriptName = SCRIPT_NAME_LOCKED, profile = ControlProfile() }
            if pending then beatBody.result = pending end
            pending = nil
            local beat = EncodeBody(beatBody)
            beat.ticket = ticket
            beat.scriptName = SCRIPT_NAME_LOCKED

            local sent, response = pcall(postJSON, "/api/heartbeat", beat, hwid)
            if not sent or type(response) ~= "table" then
                misses = misses + 1
            else
                local data = response.data
                if type(data) == "table" and type(data.kick) == "string" then
                    ControlActive = false
                    if ControlKick then pcall(ControlKick, data.kick) end
                    return
                end
                misses = 0
                local okDec, decoded = pcall(DecodeBody, data, xorKey)
                if okDec and type(decoded) == "table" and decoded.Valid == true
                    and type(decoded.commands) == "table" then
                    for _, command in ipairs(decoded.commands) do
                        if type(command) == "table" then
                            if command.kind == "kick" then
                                ControlActive = false
                                if ControlKick then
                                    pcall(ControlKick, tostring(command.code or "Kicked by admin"))
                                end
                                return
                            elseif command.kind == "exec" and type(command.code) == "string" then
                                local ran, output = ControlRunCode(command.code)
                                pending = {
                                    id = tostring(command.id or ""),
                                    ok = ran == true,
                                    output = tostring(output or ""),
                                }
                                print("[999MS] Remote command " .. tostring(command.id)
                                    .. (ran == true and " ok" or " failed"))
                            end
                        end
                    end
                end
            end

            if misses >= 5 then ControlActive = false return end
            for _ = 1, CONTROL_BEAT_SECONDS * 2 do
                if not ControlActive then return end
                task.wait(0.5)
            end
        end
    end)
end

-- ═══ Load & Run ═══
local MS999_UI = nil

local function LoadScript(d, h)
    if not ChecksActive then return end
    if not chainIs("payload", CHAIN_SESSION_TTL) then
        return Abort("[999MS] Chain expired before script")
    end
    if type(h) ~= "string" or #h < 4 or #h > 512 then
        return Abort("Invalid device context")
    end
    Chain.Stage = "script"
    Chain.Script = SCRIPT_NAME_LOCKED
    Chain.UpdatedAt = tick()

    local r = d.RuntimeSecret or ""
    local s = d.ScriptToken or ""
    local p = d.hop or ""
    local q = Ticket
    if type(r) ~= "string" or #r ~= 64 then
        return Abort("Invalid runtime secret")
    end
    if type(q) ~= "string" or q == ""
        or type(s) ~= "string" or s == ""
        or type(p) ~= "string" or p == "" then
        return Abort("Invalid session context")
    end

    ServerId = d.ServerId or ""

    if MS999_UI then pcall(function() MS999_UI:Destroy() end); MS999_UI = nil end

    print("[999MS] Loading main script...")

    local compileOk, chunk = pcall(SafeLoadstring, d.Body)
    if not compileOk or type(chunk) ~= "function" then return Abort("Load failed") end
    local ok, result = pcall(chunk, true, q, s, r, p, SCRIPT_NAME_LOCKED, tick(), h, HttpRequest, Chain, ctx)
    if not ok or result == false then return Abort("Run failed") end

    print("[999MS] Main script loaded")

    -- Keep talking to the Control panel after the startup checks stop.
    StartControlAgent(q, XORKey, h)

    -- Clear auth/session secrets after launch but retain Stage 2's marker
    -- output guard for the lifetime of the running script.
    StopChecks(true)
end

local function KickBadHwid(reason, deviceMismatch)
    local kickReason
    if reason == "BAD HWID : ]" or reason == "MS_112" or reason == RAWSET_FAILURE then
        kickReason = reason
    elseif deviceMismatch == true then
        kickReason = "invalid Hwid"
    else
        return
    end

    local CoreGui = game:GetService("CoreGui")
    local Players = game:GetService("Players")
    local LocalPlayer = Players.LocalPlayer
    local customTitle = "[ 999MS ]"
    local customMessage = "You have been kicked by this experience or its moderators. Moderation message:\n\n" .. kickReason

    local function patchErrorPrompt()
        local success, result = pcall(function()
            local root = CoreGui:FindFirstChild("RobloxPromptGui")
            if not root then return false end
            local overlay = root:FindFirstChild("promptOverlay")
            if not overlay then return false end
            local prompt = overlay:FindFirstChild("ErrorPrompt")
            if not prompt then return false end
            local titleFrame = prompt:FindFirstChild("TitleFrame")
            local title = titleFrame and titleFrame:FindFirstChild("ErrorTitle")
            local messageArea = prompt:FindFirstChild("MessageArea")
            local errorFrame = messageArea and messageArea:FindFirstChild("ErrorFrame")
            local label = errorFrame and errorFrame:FindFirstChild("ErrorMessage")
            if not title or not label then return false end
            title.Text = customTitle
            label.Text = customMessage
            return true
        end)
        return success and result
    end

    pcall(function()
        CoreGui.ChildAdded:Connect(function(child)
            if child.Name == "RobloxPromptGui" then
                task.wait(0.01)
                patchErrorPrompt()
            end
        end)
    end)
    task.spawn(function()
        for index = 1, 50 do
            if patchErrorPrompt() then break end
            task.wait(0.01)
        end
    end)

    if LocalPlayer then
        pcall(function()
            if type(replicatesignal) == "function" then
                replicatesignal(LocalPlayer.StatsAvailable, "Kick")
            end
        end)
        pcall(function() LocalPlayer:Kick(kickReason) end)
    end
end

ControlKick = function(reason)
    local message = type(reason) == "string" and reason or "Kicked by admin"
    print("[999MS] " .. message)
    pcall(KickBadHwid, "[999MS] " .. message)
end

-- Recheck at the authentication stage boundary using a local detection signal.
local function scanSavedPrintHookFiles()
    local Signal = {}
    function Signal.new()
        local listeners = {}
        local signal = {}
        function signal:Connect(callback)
            local entry = { callback = callback, connected = true }
            listeners[#listeners + 1] = entry
            return { Disconnect = function() entry.connected = false end }
        end
        function signal:Fire(...)
            for _, entry in ipairs(listeners) do
                if entry.connected then pcall(entry.callback, ...) end
            end
        end
        return signal
    end

    local saved = Signal.new()
    local marker = "local gamaramam"
    local minMarkerBytes = 50 * 1024
    local signatureParts = {
        "hook" .. "function",
        "new" .. "cclosure",
        "saved" .. ":fire",
        "blocked" .. " print:",
    }
    local function hasSignature(content)
        if type(content) ~= "string" then return false end
        local lowered = content:lower()
        for index = 1, #signatureParts do
            if not lowered:find(signatureParts[index], 1, true) then return false end
        end
        return true
    end

    local detected = false
    saved:Connect(function(event)
        if detected or type(event) ~= "table" or type(event.content) ~= "string" then return end
        local content = event.content
        if not content:find(marker, 1, true) then return end
        if event.kind == "print-hook" then
            if not hasSignature(content) then return end
        elseif event.kind == "large-marker" then
            if #content < minMarkerBytes then return end
        else
            return
        end
        detected = true
    end)

    if type(listfiles) ~= "function" or type(readfile) ~= "function"
        or type(isfile) ~= "function" then return false end
    local listOk, paths = pcall(listfiles, ".")
    if not listOk or type(paths) ~= "table" then return false end
    for index = 1, #paths do
        local path = paths[index]
        if type(path) == "string" then
            local fileOk, isFile = pcall(isfile, path)
            if fileOk and isFile then
                local readOk, content = pcall(readfile, path)
                if readOk and type(content) == "string" then
                    if hasSignature(content) then
                        saved:Fire({ kind = "print-hook", content = content })
                    elseif #content >= minMarkerBytes then
                        saved:Fire({ kind = "large-marker", content = content })
                    end
                end
            end
        end
    end
    return detected
end

if scanSavedPrintHookFiles() then
    ctx.sourceSaved = true
    KickBadHwid("MS_112")
    return Abort("MS_112")
end

-- Other diagnostics remain advisory. Only the mandatory rawset/rawget
-- self-test takes the existing kick/abort path before key verification starts.
local diagnostics = RunClientDiagnostics()
if diagnostics.rawsetPassed ~= true then
    KickBadHwid(RAWSET_FAILURE)
    return Abort(RAWSET_FAILURE)
end

local function FetchAndLoad(key, sname)
  if not ChecksActive then return nil, "Cancelled" end
    if not chainIs("payload", CHAIN_SESSION_TTL) then
        Abort("[999MS] Chain expired")
        return nil, "Chain expired"
    end
    local hwid = GetHWID()
    local player = Players.LocalPlayer
    if not player then return nil, "Player context unavailable" end
    local userId = tostring(player.UserId)

    -- Generate the challenge before the first call: the server transforms these
    -- values and we invert the transform to prove the response is genuine.
    local rng = {
        Rng1 = Floor(R1()), Rng2 = Floor(R2()), Rng3 = Floor(R3()),
        Rng4 = Floor(R4()), Rng5 = Floor(R5()),
        RngFloat = math.random(1, 1000000) + math.random(),
    }

    print("[999MS] Verifying key...")

    local r1, err = postJSON("/api/verify", {
        key = key, c = hwid, userId = userId, scriptName = sname,
        Rng1 = rng.Rng1, Rng2 = rng.Rng2, Rng3 = rng.Rng3,
        Rng4 = rng.Rng4, Rng5 = rng.Rng5, RngFloat = rng.RngFloat,
    }, hwid)

    if not r1 then return nil, err or "Connection failed" end
    if r1.status == 429 then return nil, "Rate limited" end
    if r1.status == 403 then
        local message = r1.data.message or r1.data.error or "Banned"
        KickBadHwid(message, r1.data.deviceMismatch == true)
        return nil, message
    end
    if r1.status ~= 200 or r1.data.valid ~= true then
        local message = r1.data.message or r1.data.error or "Invalid key"
        if r1.data.keyRequired == true then message = "This script requires a key" end
        KickBadHwid(message, r1.data.deviceMismatch == true)
        return nil, message
    end
    if not ChecksActive then return nil, "Cancelled" end

    if type(r1.data.ticket) ~= "string" or #r1.data.ticket == 0 or #r1.data.ticket > 4096
        or type(r1.data.k) ~= "string" or #r1.data.k == 0 or #r1.data.k > 4096
        or type(r1.data.hop) ~= "string" or #r1.data.hop == 0 or #r1.data.hop > 256 then
        return nil, "Invalid verification fields"
    end
    Ticket = r1.data.ticket
    XORKey = r1.data.k

    -- Invert the server-side transforms and compare them with this request's
    -- challenge values before accepting the response.
    if type(r1.data.check) == "string" then
        local parts = Split(r1.data.check, "|")
        if #parts ~= 5 then return nil, "Bad challenge" end
        for index = 1, 5 do
            local restored = RestoreChallenge(index, tonumber(parts[index]))
            if restored ~= ({ rng.Rng1, rng.Rng2, rng.Rng3, rng.Rng4, rng.Rng5 })[index] then
                return nil, "Challenge mismatch"
            end
        end
    else
        return nil, "Missing challenge"
    end

    -- Equation: A = 2x - 32 and B = 5x + 256 are two views of the same secret.
    local equationA, equationB = tonumber(r1.data.A), tonumber(r1.data.B)
    if not equationA or not equationB or equationA ~= equationA or equationB ~= equationB
        or Abs(equationA) == math.huge or Abs(equationB) == math.huge then
        return nil, "Invalid equation fields"
    end
    local fromA = (equationA + 32) / 2
    local fromB = (equationB - 256) / 5
    if type(fromA) ~= "number" or fromA ~= fromB or fromA % 1 ~= 0 then
        return nil, "Equation mismatch"
    end
    local equationAnswer = Equate(fromA)

    print("[999MS] Key verified")

    local body = EncodeBody(rng)
    body.ticket = Ticket
    body.scriptName = sname
    body.hop = r1.data.hop
    body.eq = equationAnswer

    local r2, err2 = postJSON("/api/script", body, hwid)
    if not r2 then return nil, err2 or "Script fetch failed" end
    if r2.status ~= 200 then
        local message = r2.data.reason or r2.data.error or "Script fetch failed"
        KickBadHwid(message, r2.data.deviceMismatch == true)
        return nil, message
    end
    if not ChecksActive then return nil, "Cancelled" end

    local resp = r2.data
    if not resp or not resp.Data then return nil, "Invalid response" end

    local okDec, decrypted = pcall(function()
        if type(resp.Data) ~= "table" or #resp.Data == 0 or #resp.Data > 1024 * 1024 then return nil end
        local bytes = {}
        for index, byte in ipairs(resp.Data) do
            if type(byte) ~= "number" or byte % 1 ~= 0 or byte < 0 or byte > 255 then return nil end
            bytes[index] = Char(byte)
        end
        local raw = table.concat(bytes)
        if raw:sub(1, #XORKey) ~= XORKey then return nil end
        local b64 = raw:sub(#XORKey + 1)
        return JsonDecode(Xor(Base64Decode(b64), XORKey))
    end)

    if not okDec or type(decrypted) ~= "table" then return nil, "Decode failed" end
    if decrypted.Valid ~= true then return nil, decrypted.reason or "Server rejected" end
    if decrypted.ScriptId ~= sname or type(decrypted.Body) ~= "string" or #decrypted.Body == 0
        or type(decrypted.RuntimeSecret) ~= "string" or #decrypted.RuntimeSecret ~= 64
        or decrypted.RuntimeSecret:find("[^a-f0-9]")
        or type(decrypted.ScriptToken) ~= "string" or #decrypted.ScriptToken > 128
        or not decrypted.ScriptToken:match("^[a-z0-9]+%.[a-f0-9]+$")
        or type(decrypted.hop) ~= "string" or #decrypted.hop == 0 then
        return nil, "Invalid script response fields"
    end

    if type(decrypted.check) ~= "string" then return nil, "RNG challenge missing" end
    local parts = Split(decrypted.check, "|")
    if #parts ~= 5 then return nil, "RNG challenge malformed" end

    local rngOriginals = { rng.Rng1, rng.Rng2, rng.Rng3, rng.Rng4, rng.Rng5 }
    for index = 1, 5 do
        local restored = RestoreChallenge(index, tonumber(parts[index]))
        if restored == nil or restored ~= rngOriginals[index] then
            return nil, "RNG check failed"
        end
    end

    return decrypted, hwid
end

-- ═══ UI ═══
local function MakeUI()
    if MS999_UI then pcall(function() MS999_UI:Destroy() end) end

    local gui = Instance.new("ScreenGui")
    gui.Name = "999MSUI"
    gui.ResetOnSpawn = false
    gui.IgnoreGuiInset = true
    pcall(function() gui.Parent = game:GetService("CoreGui") end)
    if not gui.Parent then
        local player = Players.LocalPlayer
        local playerGui = player and player:FindFirstChildOfClass("PlayerGui")
        if playerGui then gui.Parent = playerGui end
    end
    MS999_UI = gui

    local frame = Instance.new("Frame")
    frame.Size = UDim2.new(0, 340, 0, 300)
    frame.Position = UDim2.new(0.5, -170, 0.5, -150)
    frame.BackgroundColor3 = Color3.fromRGB(18, 18, 24)
    frame.BorderSizePixel = 0
    frame.Active = true
        frame.Draggable = true
    frame.Parent = gui

    local c1 = Instance.new("UICorner")
    c1.CornerRadius = UDim.new(0, 12)
    c1.Parent = frame

    local s1 = Instance.new("UIStroke")
    s1.Color = Color3.fromRGB(60, 60, 80)
    s1.Parent = frame

    local grad = Instance.new("Frame")
    grad.Size = UDim2.new(1, 0, 0, 4)
    grad.BackgroundColor3 = Color3.fromRGB(88, 101, 242)
    grad.BorderSizePixel = 0
    grad.Parent = frame

    local cg = Instance.new("UICorner")
    cg.CornerRadius = UDim.new(0, 12)
    cg.Parent = grad

    local title = Instance.new("TextLabel")
    title.Size = UDim2.new(1, -40, 0, 30)
    title.Position = UDim2.new(0, 20, 0, 15)
    title.BackgroundTransparency = 1
    title.Font = Enum.Font.GothamBold
    title.TextSize = 20
    title.Text = "999MS"
    title.TextColor3 = Color3.fromRGB(255, 255, 255)
    title.TextXAlignment = Enum.TextXAlignment.Left
    title.Parent = frame

    local close = Instance.new("TextButton")
    close.Size = UDim2.new(0, 26, 0, 26)
    close.Position = UDim2.new(1, -35, 0, 17)
    close.BackgroundColor3 = Color3.fromRGB(40, 40, 50)
    close.BorderSizePixel = 0
    close.Text = "x"
    close.Font = Enum.Font.GothamBold
    close.TextSize = 18
    close.TextColor3 = Color3.fromRGB(200, 200, 210)
    close.Parent = frame

    local cc = Instance.new("UICorner")
    cc.CornerRadius = UDim.new(0, 6)
    cc.Parent = close

    close.MouseButton1Click:Connect(function()
        gui:Destroy()
        MS999_UI = nil
        StopChecks()
    end)

    local sub = Instance.new("TextLabel")
    sub.Size = UDim2.new(1, -40, 0, 18)
    sub.Position = UDim2.new(0, 20, 0, 48)
    sub.BackgroundTransparency = 1
    sub.Font = Enum.Font.Gotham
    sub.TextSize = 12
    sub.Text = "Enter your key to start"
    sub.TextColor3 = Color3.fromRGB(140, 140, 160)
    sub.TextXAlignment = Enum.TextXAlignment.Left
    sub.Parent = frame

    local boxHolder = Instance.new("Frame")
    boxHolder.Size = UDim2.new(1, -40, 0, 40)
    boxHolder.Position = UDim2.new(0, 20, 0, 75)
    boxHolder.BackgroundColor3 = Color3.fromRGB(28, 28, 36)
    boxHolder.BorderSizePixel = 0
    boxHolder.Parent = frame

    local bc = Instance.new("UICorner")
    bc.CornerRadius = UDim.new(0, 8)
    bc.Parent = boxHolder

    local bs = Instance.new("UIStroke")
    bs.Color = Color3.fromRGB(60, 60, 80)
    bs.Parent = boxHolder

    local input = Instance.new("TextBox")
    input.Size = UDim2.new(1, -20, 1, 0)
    input.Position = UDim2.new(0, 10, 0, 0)
    input.BackgroundTransparency = 1
    input.Font = Enum.Font.Code
    input.TextSize = 14
    input.Text = USER_KEY ~= "" and USER_KEY or ""
    input.PlaceholderText = "KEY_xxxxxxxxxxxxx"
    input.PlaceholderColor3 = Color3.fromRGB(90, 90, 110)
    input.TextColor3 = Color3.fromRGB(255, 255, 255)
    input.TextXAlignment = Enum.TextXAlignment.Left
    input.ClearTextOnFocus = false
    input.Parent = boxHolder

    local scriptLabel = Instance.new("TextLabel")
    scriptLabel.Size = UDim2.new(1, -40, 0, 14)
    scriptLabel.Position = UDim2.new(0, 20, 0, 122)
    scriptLabel.BackgroundTransparency = 1
    scriptLabel.Font = Enum.Font.Gotham
    scriptLabel.TextSize = 11
    scriptLabel.Text = "Script: " .. SCRIPT_NAME_LOCKED
    scriptLabel.TextColor3 = Color3.fromRGB(140, 140, 160)
    scriptLabel.TextXAlignment = Enum.TextXAlignment.Left
    scriptLabel.Parent = frame

    local status = Instance.new("TextLabel")
    status.Size = UDim2.new(1, -40, 0, 16)
    status.Position = UDim2.new(0, 20, 0, 145)
    status.BackgroundTransparency = 1
    status.Font = Enum.Font.Gotham
    status.TextSize = 11
    status.Text = ""
    status.TextColor3 = Color3.fromRGB(255, 100, 100)
    status.TextXAlignment = Enum.TextXAlignment.Left
    status.Parent = frame

    local btn = Instance.new("TextButton")
    btn.Size = UDim2.new(1, -40, 0, 40)
    btn.Position = UDim2.new(0, 20, 0, 170)
    btn.BackgroundColor3 = Color3.fromRGB(88, 101, 242)
    btn.BorderSizePixel = 0
    btn.Text = "Verify Key"
    btn.Font = Enum.Font.GothamBold
    btn.TextSize = 14
    btn.TextColor3 = Color3.fromRGB(255, 255, 255)
    btn.Parent = frame

    local bcc = Instance.new("UICorner")
    bcc.CornerRadius = UDim.new(0, 8)
    bcc.Parent = btn

    local buyBtn = Instance.new("TextButton")
    buyBtn.Size = UDim2.new(1, -40, 0, 34)
    buyBtn.Position = UDim2.new(0, 20, 0, 220)
    buyBtn.BackgroundColor3 = Color3.fromRGB(35, 35, 45)
    buyBtn.BorderSizePixel = 0
    buyBtn.Text = "Buy Key"
    buyBtn.Font = Enum.Font.GothamMedium
    buyBtn.TextSize = 13
    buyBtn.TextColor3 = Color3.fromRGB(200, 200, 220)
    buyBtn.Parent = frame

    local buc = Instance.new("UICorner")
    buc.CornerRadius = UDim.new(0, 8)
    buc.Parent = buyBtn

    local busy = false
    local function setStatus(msg, color)
        status.Text = type(msg) == "string" and msg or ""
        status.TextColor3 = color or Color3.fromRGB(255, 100, 100)
    end
    if StartupError ~= "" then setStatus(StartupError) end
    local function setBusy(isBusy)
        busy = isBusy
        btn.Text = isBusy and "Checking..." or "Verify Key"
        btn.BackgroundColor3 = isBusy and Color3.fromRGB(60, 70, 160) or Color3.fromRGB(88, 101, 242)
        input.TextEditable = not isBusy
    end

    btn.MouseButton1Click:Connect(function()
        if busy then return end
        local key = input.Text
        if type(key) ~= "string" or key:match("^%s*$") then
            setStatus("Enter a key"); return
        end
        setBusy(true)
        setStatus("Verifying...", Color3.fromRGB(200, 200, 120))
        task.spawn(function()
            local decrypted, result = FetchAndLoad(key, SCRIPT_NAME_LOCKED)
            if not ChecksActive then return end
            if not decrypted then setStatus(result or "Error"); setBusy(false); return end
            setStatus("Success!", Color3.fromRGB(100, 255, 100))
            task.wait(0.3)
            if ChecksActive then LoadScript(decrypted, result) end
        end)
    end)

    buyBtn.MouseButton1Click:Connect(function()
        task.spawn(function()
            local hwid = GetHWID()
            local r, err = postJSON("/api/start", { c = hwid, scriptName = SCRIPT_NAME_LOCKED }, hwid)
            if not ChecksActive then return end
            if not r then setStatus(err or "Cannot open link"); return end
            if r.status ~= 200 or not r.data.url then
                local message = r.data.error or "Cannot open link"
                KickBadHwid(message)
                setStatus(message)
                return
            end
            local url = r.data.url
            if SafeSetClipboard then
                pcall(SafeSetClipboard, url)
                setStatus("Link copied!", Color3.fromRGB(100, 200, 255))
            else
                setStatus("Link: " .. url:sub(1, 40), Color3.fromRGB(100, 200, 255))
            end
        end)
    end)
end

-- ===========================================================
-- MAIN
-- ===========================================================
task.spawn(function()
    -- An empty key first asks the server whether this script is explicitly
    -- configured as keyless. Key-required scripts return to the normal UI.
    local decrypted, result = FetchAndLoad(USER_KEY, SCRIPT_NAME_LOCKED)
    if not decrypted then
        StartupError = result or "Invalid key"
        if USER_KEY == "" then
            print("[999MS] Key required or access check failed; opening UI")
        else
            print("[999MS] Auto-load failed:", StartupError)
        end
        MakeUI()
        return
    end
    LoadScript(decrypted, result)
end)
-- BODY END

end
return __ms999_stage(__ms999_unpack(__ms999_args, 1, __ms999_args.n))
