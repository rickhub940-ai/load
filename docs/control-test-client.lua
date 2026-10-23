--[[
  999MS - Control test client (standalone)

  A tiny client that talks to the Control panel directly: it reports a Roblox
  profile over /api/heartbeat and runs/kicks on the commands the panel sends
  back. It does NOT use the loader chain, so it is only meant for testing the
  Control panel itself.

  How to use:
    1. Control panel -> "เครื่องที่กำลังรัน" -> สร้างสคริปต์ทดสอบ
    2. Copy the generated snippet (the placeholders below are already filled)
    3. Paste it into an executor and press Execute
    4. The profile shows up in the panel within ~10 seconds
]]

local BASE   = "%BASE%"     -- e.g. https://loader999xx-one.vercel.app
local TICKET = "%TICKET%"   -- short-lived test ticket (30 min)
local XKEY   = "%XORKEY%"   -- payload XOR key
local HWID   = "%HWID%"     -- test hardware id that the ticket is bound to
local SCRIPT = "main"
local BEAT   = 10           -- seconds between heartbeats

local HttpService = game:GetService("HttpService")
local Players = game:GetService("Players")
local Http = (type(syn) == "table" and syn.request)
    or (type(http) == "table" and http.request)
    or request or http_request
local bit = bit32 or bit

if type(Http) ~= "function" then error("[999MS] executor has no HTTP support") end
if type(bit) ~= "table" then error("[999MS] executor has no bit32") end

local Charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
local Char, Byte = string.char, string.byte

local function Xor(data, key)
    local out = {}
    for index = 1, #data do
        out[index] = Char(bit.bxor(Byte(data, index), Byte(key, (index - 1) % #key + 1)))
    end
    return table.concat(out)
end

local function B64(data)
    local out = {}
    for index = 1, #data, 3 do
        local a, b, c = Byte(data, index, index + 2)
        a, b, c = a or 0, b or 0, c or 0
        local n = bit.lshift(a, 16) + bit.lshift(b, 8) + c
        out[#out + 1] = Charset:sub(bit.rshift(n, 18) % 64 + 1, bit.rshift(n, 18) % 64 + 1)
        out[#out + 1] = Charset:sub(bit.rshift(n, 12) % 64 + 1, bit.rshift(n, 12) % 64 + 1)
        if index + 1 > #data then
            out[#out + 1] = "=="
        elseif index + 2 > #data then
            out[#out + 1] = Charset:sub(bit.rshift(n, 6) % 64 + 1, bit.rshift(n, 6) % 64 + 1) .. "="
        else
            out[#out + 1] = Charset:sub(bit.rshift(n, 6) % 64 + 1, bit.rshift(n, 6) % 64 + 1)
                .. Charset:sub(n % 64 + 1, n % 64 + 1)
        end
    end
    return table.concat(out)
end

local function B64Dec(text)
    local out, buffer, bits = {}, 0, 0
    for index = 1, #text do
        local value = Charset:find(text:sub(index, index), 1, true)
        if value then
            buffer = bit.lshift(buffer, 6) + (value - 1)
            bits = bits + 6
            if bits >= 8 then
                bits = bits - 8
                out[#out + 1] = Char(bit.rshift(buffer, bits) % 256)
            end
        end
    end
    return table.concat(out)
end

-- The heartbeat payload is XOR+Base64 and travels as a byte array.
local function Protect(tbl)
    local raw = XKEY .. B64(Xor(HttpService:JSONEncode(tbl), XKEY))
    local bytes = {}
    for index = 1, #raw do bytes[index] = Byte(raw, index) end
    return bytes
end

local function Unprotect(bytes)
    local raw = {}
    for index = 1, #bytes do raw[index] = Char(bytes[index]) end
    raw = table.concat(raw)
    if raw:sub(1, #XKEY) ~= XKEY then return nil end
    local ok, data = pcall(function()
        return HttpService:JSONDecode(Xor(B64Dec(raw:sub(#XKEY + 1)), XKEY))
    end)
    return ok and data or nil
end

local function Profile()
    local profile = { executor = "unknown" }
    if type(identifyexecutor) == "function" then
        local ok, name = pcall(identifyexecutor)
        if ok and type(name) == "string" then profile.executor = name end
    end
    pcall(function()
        local player = Players.LocalPlayer
        if player then
            profile.name = player.Name
            profile.displayName = player.DisplayName or player.Name
            profile.userId = tostring(player.UserId)
        end
    end)
    pcall(function() profile.placeId = tostring(game.PlaceId) end)
    pcall(function() profile.jobId = tostring(game.JobId) end)
    return profile
end

local function Beat(result)
    local body = {
        ticket = TICKET,
        c = HWID,
        Data = Protect({ scriptName = SCRIPT, profile = Profile(), result = result }),
    }
    local ok, res = pcall(Http, {
        Url = BASE .. "/api/heartbeat",
        Method = "POST",
        Headers = { ["Content-Type"] = "application/json", ["X-Fingerprint"] = HWID },
        Body = HttpService:JSONEncode(body),
    })
    if not ok or type(res) ~= "table" or type(res.Body) ~= "string" then return nil end
    local parsed = HttpService:JSONDecode(res.Body)
    if type(parsed) ~= "table" then return nil end
    if type(parsed.kick) == "string" then return { kick = parsed.kick } end
    return Unprotect(parsed.Data or {})
end

local function Run(code)
    local compiler = loadstring or load
    local ok, chunk = pcall(compiler, code)
    if not ok or type(chunk) ~= "function" then return false, "compile: " .. tostring(chunk) end
    local packed = { pcall(chunk) }
    if not packed[1] then return false, tostring(packed[2]) end
    local out = {}
    for index = 2, #packed do out[#out + 1] = tostring(packed[index]) end
    return true, #out > 0 and table.concat(out, ", ") or "ok"
end

local function Kick(message)
    local player = Players.LocalPlayer
    if player then pcall(function() player:Kick("[999MS] " .. tostring(message)) end) end
end

print("[999MS] test client online - beat every " .. BEAT .. "s")
print("[999MS] hwid " .. HWID .. " (ต้องตรงกับค่าที่ผูก ticket ไม่เช่นนั้นโดนเตะ BAD HWID)")

task.spawn(function()
    local pending
    while true do
        local response = Beat(pending)
        pending = nil

        if type(response) == "table" then
            if type(response.kick) == "string" then
                warn("[999MS] " .. response.kick)
                Kick(response.kick)
                return
            end
            if type(response.commands) == "table" then
                for _, command in ipairs(response.commands) do
                    if command.kind == "kick" then
                        Kick(command.code or "Kicked by admin")
                        return
                    elseif command.kind == "exec" and type(command.code) == "string" then
                        local ok, output = Run(command.code)
                        pending = { id = tostring(command.id or ""), ok = ok, output = tostring(output or "") }
                        print("[999MS] remote " .. tostring(command.id) .. (ok and " ok: " or " error: ") .. tostring(output))
                    end
                end
            end
        end

        task.wait(BEAT)
    end
end)
