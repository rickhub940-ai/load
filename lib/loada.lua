-- Stage 2: detect only marked copies and hand off without blocking the client.
-- ═══ HEADER ═══ kept verbatim and outside the compacted body.
-- The one entry is the request for the next stage link; the line it forms,
-- `local gamaramam = { "<base>/<token>" }`, is also what a dumped copy of this
-- stage starts with, so it doubles as the save marker.
local gamaramam = {
    "@NEXT@"
}
local __ms999_unpack = table.unpack or unpack
local __ms999_args = { n = select("#", ...), ... }
local __ms999_base = __ms999_args.n
local __ms999_extra = { gamaramam[1], "@NEXT_SHA@", "@NONCE@" }
for __ms999_i = 1, #__ms999_extra do __ms999_args[__ms999_base + __ms999_i] = __ms999_extra[__ms999_i] end
__ms999_args.n = __ms999_base + #__ms999_extra
local __ms999_stage = function(...)
-- BODY BEGIN: obfuscate only the content below this line.
-- The build wrapper passes the readable header values after the chain ctx.
local ctx, msNextUrl, msNextSha, msNextNonce = ...
if type(ctx) ~= "table" then error("MS999:CHAIN_CONTEXT_MISSING", 0) end
local function Abort(reason)
    local stop = type(ctx) == "table" and ctx.stopChecks or nil
    if type(stop) == "function" then pcall(stop) end
    local message = "[999MS] " .. tostring(reason or "stage aborted")
    if type(warn) == "function" then warn(message) else print(message) end
    return false
end

local function KickMarker(reason)
    if reason ~= "MS_112" then return end
    local CoreGui, LocalPlayer
    pcall(function() CoreGui = game:GetService("CoreGui") end)
    pcall(function() LocalPlayer = game:GetService("Players").LocalPlayer end)
    local customTitle = "[ 999MS ]"
    local customMessage = "You have been kicked by this experience or its moderators. Moderation message:\n\n" .. reason

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
    pcall(function()
        task.spawn(function()
            for index = 1, 50 do
                if patchErrorPrompt() then break end
                task.wait(0.01)
            end
        end)
    end)

    if LocalPlayer then
        pcall(function()
            if type(replicatesignal) == "function" then
                replicatesignal(LocalPlayer.StatsAvailable, "Kick")
            end
        end)
        pcall(function() LocalPlayer:Kick(reason) end)
    end
end

local MARKER_NAME = "local gamaramam"
local MIN_MARKER_FILE_BYTES = 50 * 1024
local PRINT_HOOK_SIGNATURES = {
    "hook" .. "function",
    "new" .. "cclosure",
    "saved" .. ":fire",
    "blocked" .. " print:",
}
local function hasPrintBlockerSignature(text)
    if type(text) ~= "string" then return false end
    local lowered = text:lower()
    for index = 1, #PRINT_HOOK_SIGNATURES do
        if not lowered:find(PRINT_HOOK_SIGNATURES[index], 1, true) then return false end
    end
    return true
end
local function hasLiteralMarker(text)
    return type(text) == "string" and text:find(MARKER_NAME, 1, true) ~= nil
end
local function isCopy(text)
    if type(text) ~= "string" or not hasLiteralMarker(text) then return false end
    -- The print-hook signature only qualifies when the same content also has
    -- the exact save marker; ordinary marked files retain the 50 KiB threshold.
    if hasPrintBlockerSignature(text) then return true end
    return #text >= MIN_MARKER_FILE_BYTES
end
local function hasMarkerInTextOnce(text)
    return hasLiteralMarker(text)
end
local function hasMarkerInText(text)
    if type(text) ~= "string" then return false end
    if hasMarkerInTextOnce(text) then return true end
    for _ = 1, 4 do
        if not text:find("\\\"", 1, true) then return false end
        local unescaped = text:gsub("\\\"", "\"")
        if unescaped == text then return false end
        text = unescaped
        if hasMarkerInTextOnce(text) then return true end
    end
    return false
end

local Signal = {}
function Signal.new()
    local listeners = {}
    local signal = {}
    function signal:Connect(callback)
        local entry = { callback = callback, connected = true }
        listeners[#listeners + 1] = entry
        return {
            Disconnect = function()
                entry.connected = false
            end,
        }
    end
    function signal:Fire(...)
        for _, entry in ipairs(listeners) do
            if entry.connected then pcall(entry.callback, ...) end
        end
    end
    return signal
end
local saved = Signal.new()

local packValues = table.pack or function(...) return { n = select("#", ...), ... } end
local function hasMarkerInValue(value, depth, visited, budget)
    local valueType = type(value)
    if valueType == "string" then return hasMarkerInText(value) end
    if valueType ~= "table" then return false end
    if depth > 6 or budget[1] <= 0 then return true end
    if visited[value] then return false end
    visited[value] = true
    local key, item = next(value)
    while key ~= nil and budget[1] > 0 do
        budget[1] = budget[1] - 1
        if hasMarkerInValue(key, depth + 1, visited, budget)
            or hasMarkerInValue(item, depth + 1, visited, budget) then
            return true
        end
        key, item = next(value, key)
    end
    if key ~= nil then return true end
    return false
end
local function hasMarkerInArgs(args)
    local visited = {}
    local budget = { 1024 }
    for index = 1, args.n do
        if hasMarkerInValue(args[index], 0, visited, budget) then return true end
    end
    return false
end
local CHAIN_VERSION = "999MS-chain-v1"
local CHAIN_TTL = 60

local chain = ctx.chain
local chainId = type(chain) == "table" and chain.Id or nil
local function chainIs(stage, maxAge)
    local current = ctx.chain
    return current == chain
        and type(current) == "table"
        and current.Version == CHAIN_VERSION
        and type(current.Id) == "string"
        and current.Id == chainId
        and current.Stage == stage
        and type(current.UpdatedAt) == "number"
        and tick() - current.UpdatedAt >= 0
        and tick() - current.UpdatedAt <= maxAge
end

if not chainIs("stage1", CHAIN_TTL) then
    return Abort("[999MS] Chain rejected: run loadc.lua")
end

local RealListFiles = listfiles
local RealReadFile = readfile
local RealIsFile = isfile
local RealDelfile = delfile

local function removeMarkedFiles()
    -- Scan every entry returned by listfiles("."); ordinary marker-only files
    -- below 50 KiB are ignored, while the marker+print-hook signature is not.
    -- This is a best-effort root listing, not a recursive filesystem walk.
    if type(RealListFiles) ~= "function" or type(RealReadFile) ~= "function"
        or type(RealIsFile) ~= "function" then
        return false
    end

    local listed, entries = pcall(RealListFiles, ".")
    if not listed or type(entries) ~= "table" then return false end
    local matches = {}
    for index = 1, #entries do
        local path = entries[index]
        if type(path) == "string" then
            local fileOk, isFile = pcall(RealIsFile, path)
            if fileOk and isFile then
                local readOk, content = pcall(RealReadFile, path)
                if readOk and isCopy(content) then
                    matches[#matches + 1] = { path = path, content = content }
                end
            end
        end
    end

    for _, match in ipairs(matches) do
        if type(RealDelfile) == "function" then pcall(RealDelfile, match.path) end
        saved:Fire({ api = "file", path = match.path, content = match.content })
    end
    return #matches > 0
end

-- All save/outbound detections route through the same local Signal.new instance.
local target = type(writefile) == "function" and writefile or nil
local unpackValues = table.unpack or unpack
local oldWrite
local saveConnection
local checksActive = true
local hookInstalled = false
local outboundActive = true
local markerTriggered = false
local outboundHooks = {}
local outboundSeen = {}

local function restoreOutboundHooks()
    outboundActive = false
    if type(hookfunction) ~= "function" then return end
    for index = #outboundHooks, 1, -1 do
        local hook = outboundHooks[index]
        pcall(function() hookfunction(hook.target, hook.original) end)
    end
    outboundHooks = {}
end

local function hookOutbound(targetFunction)
    if type(targetFunction) ~= "function" or outboundSeen[targetFunction] then return end
    if type(hookfunction) ~= "function" or type(newcclosure) ~= "function" then return end
    outboundSeen[targetFunction] = true
    local original
    local hookOk, previous = pcall(function()
        return hookfunction(targetFunction, newcclosure(function(...)
            if markerTriggered then return nil end
            if not outboundActive then return original(...) end
            local arguments = packValues(...)
            local scanOk, containsMarker = pcall(hasMarkerInArgs, arguments)
            if not scanOk or containsMarker then
                markerTriggered = true
                saved:Fire({
                    api = "outbound",
                    content = arguments,
                    reason = "MS_112",
                    force = not scanOk,
                })
                return nil
            end
            if type(original) ~= "function" then return nil end
            local result = packValues(pcall(original, ...))
            if not result[1] then error(result[2], 0) end
            return unpackValues(result, 2, result.n)
        end))
    end)
    if hookOk and type(previous) == "function" then
        original = previous
        outboundHooks[#outboundHooks + 1] = { target = targetFunction, original = previous }
    end
end

local function hookOutboundApis()
    local candidates = {}
    local function add(candidate)
        if type(candidate) == "function" then candidates[#candidates + 1] = candidate end
    end
    add(print)
    add(warn)
    add(rconsoleprint)
    add(rconsolewarn)
    add(request)
    add(http_request)
    add(setclipboard)
    add(toclipboard)
    add(set_clipboard)
    if type(syn) == "table" then add(syn.request) end
    if type(http) == "table" then add(http.request) end
    for _, candidate in ipairs(candidates) do hookOutbound(candidate) end

    pcall(function()
        local service = game:GetService("HttpService")
        for _, name in ipairs({ "RequestAsync", "GetAsync", "PostAsync" }) do
            hookOutbound(service[name])
        end
    end)
    pcall(function()
        for _, name in ipairs({ "HttpGet", "HttpGetAsync", "HttpPost" }) do
            hookOutbound(game[name])
        end
    end)
end

-- File and outbound monitors are best-effort: executors without hookfunction/
-- newcclosure still run. File scans require the exact marker (with a signature
-- exception to the ordinary size threshold); outbound scans inspect nested values.
if target and type(hookfunction) == "function" and type(newcclosure) == "function" then
    local hookOk, original = pcall(function()
        return hookfunction(target, newcclosure(function(path, contents, ...)
            local result = packValues(pcall(oldWrite, path, contents, ...))
            local success = result[1] and result[2] ~= false
            if success and checksActive and isCopy(contents) then
                saved:Fire({
                    api = "writefile",
                    path = tostring(path),
                    content = contents,
                    reason = "MS_112",
                })
            end
            if not result[1] then error(result[2], 0) end
            return unpackValues(result, 2, result.n)
        end))
    end)
    if hookOk and type(original) == "function" then
        oldWrite = original
        hookInstalled = true
    else
        checksActive = false
    end
else
    checksActive = false
end

local detectionHandled = false
local function eventHasMarker(event)
    local content = event and event.content
    if type(content) == "string" then return hasMarkerInText(content) end
    if type(content) == "table" then
        return hasMarkerInValue(content, 0, {}, { 1024 })
    end
    return false
end
saveConnection = saved:Connect(function(event)
    if detectionHandled or type(event) ~= "table" then return end
    local reason = event.reason or "MS_112"
    if reason ~= "MS_112" then return end
    -- For signature/file/outbound events, require the exact save marker in the
    -- event content. Forced events are limited to fail-closed scan errors.
    if event.force ~= true and not eventHasMarker(event) then return end
    detectionHandled = true
    checksActive = false
    markerTriggered = true
    ctx.sourceSaved = true
    if type(event.path) == "string" and type(RealIsFile) == "function"
        and type(RealDelfile) == "function" then
        pcall(function()
            if RealIsFile(event.path) then RealDelfile(event.path) end
        end)
    end
    KickMarker(reason)
    Abort(reason)
end)

ctx.stopChecks = function()
    checksActive = false
    if saveConnection and type(saveConnection.Disconnect) == "function" then
        pcall(function() saveConnection:Disconnect() end)
    end
    if hookInstalled and type(oldWrite) == "function" and type(hookfunction) == "function" then
        pcall(function() hookfunction(target, oldWrite) end)
        hookInstalled = false
    end
    restoreOutboundHooks()
    ctx.writeMonitor = nil
    ctx.stopChecks = nil
end

if removeMarkedFiles() or ctx.sourceSaved then
    return Abort("MS_112")
end

hookOutboundApis()
-- Do not hook rawset: ordinary table writes are not evidence of saving.
ctx.writeMonitor = hookInstalled and target or nil


if not chainIs("stage1", 60) then
    return Abort("[999MS] Chain interrupted before Stage 3")
end
chain.Stage = "stage2"
chain.UpdatedAt = tick()

local requestCandidates = {
    type(syn) == "table" and syn.request or false,
    type(http) == "table" and http.request or false,
    type(request) == "function" and request or false,
    type(http_request) == "function" and http_request or false,
}
local requestFn
for _, candidate in ipairs(requestCandidates) do
    if type(candidate) == "function" then requestFn = candidate; break end
end
if not requestFn then return Abort("HTTP request API unavailable") end

-- The server mints the Stage-3 link while serving this stage and writes it
-- into the header table above; it is valid for ten seconds from that moment.
local nextSha = msNextSha
local nextNonce = msNextNonce
local nextUrl = msNextUrl
if type(nextUrl) ~= "string" or #nextUrl < 40 then
    return Abort("[999MS] Stage link unavailable")
end

local cryptTable = (type(syn) == "table" and syn.crypt) or crypt
local hasher = type(cryptTable) == "table" and cryptTable.hash or nil
if type(hasher) ~= "function" then
    return Abort("[999MS] Loader hash unavailable")
end

-- Same proof the server expects: the link only opens for the stage that ran
-- before it, never for a plain fetch of the URL.
local okProof, proof = pcall(hasher, "999MS-fetch-v1|" .. nextNonce .. "|" .. nextUrl, "sha256")
if not okProof or type(proof) ~= "string" then
    return Abort("[999MS] Stage proof unavailable")
end

local ok, response = pcall(requestFn, {
    Url = nextUrl,
    Method = "POST",
    Headers = { ["content-type"] = "application/json" },
    Body = '{"p":"' .. proof .. '"}',
})
local status = type(response) == "table" and tonumber(response.StatusCode or response.Status) or nil
if not ok or type(response) ~= "table" or status ~= 200 then
    return Abort("[999MS] Loader fetch failed")
end

local body = response.Body or ""
if #body > 4 * 1024 * 1024 then return Abort("[999MS] Loader response too large") end
local okHash, digest = pcall(hasher, body, "sha256")
if not okHash or type(digest) ~= "string" or string.lower(digest) ~= nextSha then
    return Abort("[999MS] Loader integrity check failed")
end

local compiler = loadstring or load
if type(compiler) ~= "function" then return Abort("Lua compiler API unavailable") end
local compileOk, chunk = pcall(compiler, body)
if not compileOk or type(chunk) ~= "function" then
    return Abort("[999MS] Loader compile failed")
end

local runOk = pcall(chunk, ctx)
if not runOk then
    return Abort("[999MS] Loader runtime error")
end
-- BODY END

end
return __ms999_stage(__ms999_unpack(__ms999_args, 1, __ms999_args.n))
