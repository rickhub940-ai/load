-- 999MS script: Prison_Life
-- place: 155615604
-- uploaded from the Control panel at 2026-10-26T10:45:18.734Z

--// =========================
--// LOADER CHECK (Anticheat / Signature)
--// =========================
local EXPECTED_SCRIPT = "Prison_Life"
local args = { n = select("#", ...), ... }

local function reject(reason)
    local message = "[999MS] INVALID"
    local player, coreGui

    pcall(function()
        player = game:GetService("Players").LocalPlayer
        coreGui = game:GetService("CoreGui")
    end)

    local function patchPrompt()
        pcall(function()
            local root = coreGui and coreGui:FindFirstChild("RobloxPromptGui")
            local overlay = root and root:FindFirstChild("promptOverlay")
            local prompt = overlay and overlay:FindFirstChild("ErrorPrompt")
            local titleFrame = prompt and prompt:FindFirstChild("TitleFrame")
            local title = titleFrame and titleFrame:FindFirstChild("ErrorTitle")
            local messageArea = prompt and prompt:FindFirstChild("MessageArea")
            local errorFrame = messageArea and messageArea:FindFirstChild("ErrorFrame")
            local text = errorFrame and errorFrame:FindFirstChild("ErrorMessage")

            if title and text then
                title.Text = "[ 999MS ]"
                text.Text = "You have been kicked. Reason:\n\n" .. message
            end
        end)
    end

    pcall(function()
        if coreGui then
            coreGui.ChildAdded:Connect(function(child)
                if child.Name == "RobloxPromptGui" then
                    task.wait(0.01)
                    patchPrompt()
                end
            end)
        end
    end)

    pcall(function()
        task.spawn(function()
            for _ = 1, 50 do
                patchPrompt()
                task.wait(0.01)
            end
        end)
    end)

    if player then
        pcall(function()
            if type(replicatesignal) == "function" then
                replicatesignal(player.StatsAvailable, "Kick")
            end
        end)
        pcall(function()
            player:Kick(message)
        end)
    end

    return false
end

local function validateLoader()
    if args.n ~= 12 or args[1] ~= true then return false, "INVALID" end
    if type(args[2]) ~= "string" or args[2] == "" then return false, "INVALID" end
    if type(args[3]) ~= "string" or args[3] == "" then return false, "INVALID" end
    if type(args[4]) ~= "string" or #args[4] ~= 64 then return false, "INVALID" end
    if type(args[5]) ~= "string" or args[5] == "" then return false, "INVALID" end
    if args[6] ~= EXPECTED_SCRIPT then return false, "INVALID" end
    if type(args[7]) ~= "number" then return false, "INVALID" end
    if tick() - args[7] < 0 or tick() - args[7] > 60 then return false, "INVALID" end
    if type(args[8]) ~= "string" or #args[8] < 4 or #args[8] > 512 then return false, "INVALID" end
    if type(args[9]) ~= "function" then return false, "INVALID" end
    if type(args[12]) ~= "string" or not args[12]:match("^https://") then return false, "INVALID" end
    local chain, ctx = args[10], args[11]
    if type(chain) ~= "table" or type(ctx) ~= "table" then return false, "INVALID" end
    if ctx.runtimeVerified ~= true or type(ctx.requestWire) ~= "function" or ctx.chain ~= chain then return false, "INVALID" end
    if chain.Version ~= "999MS-chain-v1" or type(chain.Id) ~= "string" or chain.Id == "" or chain.Stage ~= "script" or chain.Script ~= EXPECTED_SCRIPT or type(chain.UpdatedAt) ~= "number" then return false, "INVALID" end
    if tick() - chain.UpdatedAt < 0 or tick() - chain.UpdatedAt > 20 then return false, "INVALID" end
    return true
end

local valid, reason = validateLoader()
if not valid then
    return reject(reason)
end

--// =========================
--// PRISON LIFE SCRIPT START
--// =========================
if game.PlaceId ~= 155615604 then return end

local WindUI = loadstring(game:HttpGet("https://github.com/Footagesus/WindUI/releases/latest/download/main.lua"))()

local player = game.Players.LocalPlayer
local CoreGui = game:GetService("CoreGui")
local UserInputService = game:GetService("UserInputService")
local TweenService = game:GetService("TweenService")
local Debris = game:GetService("Debris")
local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local RunService = game:GetService("RunService")
local UIS = game:GetService("UserInputService")
local LP = player
local Cam = workspace.CurrentCamera

if CoreGui:FindFirstChild("WindUI_Toggle") then CoreGui.WindUI_Toggle:Destroy() end

local avatar = "https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=" .. player.UserId .. "&size=420x420&format=Png"

--// =========================
--// LANGUAGE SYSTEM
--// =========================
getgenv().CurrentLang = getgenv().CurrentLang or "English"

local Lang = {
    English = {
        TabMain = "MAIN", TabAim = "AIMBOT", TabEsp = "ESP", TabBody = "Body", TabMisc = "MISC", TabSettings = "SETTINGS",
        GunBuff = "Gun Buff", GunBuffDesc = "Makes your gun shoot faster and deal more damage.",
        Hitbox = "Hitbox Expander", HitboxDesc = "Enlarges the target's hitbox, making them easier to hit.",
        HitboxSize = "Hitbox Size", HitboxSizeDesc = "Adjust the size of the hitbox.",
        AutoArrest = "Auto Arrest", AutoArrestDesc = "Automatically arrests nearby criminals.",
        AntiTase = "Anti-Taser", AntiTaseDesc = "Prevents you from being tased.",
        AntiAim = "Anti Aim", AntiAimDesc = "Disrupts enemy aim by 70%.",
        
        SilentAim = "Silent Aim", SilentAimDesc = "Redirects your bullets to hit the closest target.",
        AutoShoot = "Auto Shoot", AutoShootDesc = "Automatically fires when a target is in your FOV.",
        WallCheck = "WallCheck", WallCheckDesc = "Only locks onto targets you can actually see.",
        ShowDamage = "Show Damage", ShowDamageDesc = "Shows floating damage numbers when you hit someone.",
        HitSound = "Hit Sound", HitSoundDesc = "Plays a sound effect when you hit a target.",
        ShowFOV = "Show FOV & Tracer", ShowFOVDesc = "Draws the FOV circle and a tracer line.",
        FOVSize = "FOV Size", FOVSizeDesc = "Adjust the radius of the FOV circle.",
        TargetTeams = "Target Teams", TargetTeamsDesc = "Select which teams to lock onto.",
        
        EspName = "ESP Name", EspNameDesc = "Shows player names above their heads.",
        EspHealth = "ESP Health", EspHealthDesc = "Shows the current health of players.",
        EspDist = "ESP Distance", EspDistDesc = "Shows the distance to players in meters.",
        EspHighlight = "ESP Highlight", EspHighlightDesc = "Highlights players through walls.",
        EspWeapon = "ESP Weapon", EspWeaponDesc = "Shows the weapon each player is holding.",
        
        SpeedHack = "Speed Hack", SpeedHackDesc = "Increases your movement speed.",
        WalkSpeed = "WalkSpeed Value", WalkSpeedDesc = "Adjust your movement speed.",
        HighJump = "High Jump", HighJumpDesc = "Increases your jump height.",
        JumpPower = "Jump Power", JumpPowerDesc = "Adjust your jump power.",
        Noclip = "Noclip", NoclipDesc = "Walk through walls and obstacles.",
        FlyBypass = "Fly Bypass", FlyBypassDesc = "Allows you to fly around the map.",
        FlySpeed = "Fly Speed", FlySpeedDesc = "Adjust the speed of flying.",
        
        SettingsTheme = "UI Theme", SettingsThemeDesc = "Change the color theme of the UI.",
        SettingsLang = "Language", SettingsLangDesc = "Change the language of the UI."
    },
    Thai = {
        TabMain = "หน้าหลัก", TabAim = "ช่วยเล็ง", TabEsp = "มองทะลุ", TabBody = "ร่างกาย", TabMisc = "อื่นๆ", TabSettings = "ตั้งค่า",
        GunBuff = "บัพปืน", GunBuffDesc = "ปรับให้ปืนยิงเร็วขึ้นและเพิ่มดาเมจ",
        Hitbox = "ขยายฮิตบล็อก", HitboxDesc = "ขยายพื้นที่ปะทะของศัตรูให้ยิงโดนง่ายขึ้น",
        HitboxSize = "ขนาดฮิตบล็อก", HitboxSizeDesc = "ปรับขนาดความใหญ่ของพื้นที่ปะทะ",
        AutoArrest = "จับอัตโนมัติ", AutoArrestDesc = "จับอาชญากรที่อยู่ใกล้ๆ อัตโนมัติ",
        AntiTase = "กันทาซเซอร์", AntiTaseDesc = "ป้องกันไม่ให้คุณโดนทาซเซอร์",
        AntiAim = "Anti Aim", AntiAimDesc = "รบกวนการเล็งของศัตรู 70%",
        
        SilentAim = "Silent Aim", SilentAimDesc = "บังคับกระสุนให้พุ่งเข้าหาเป้าหมายที่ใกล้ที่สุด",
        AutoShoot = "ยิงอัตโนมัติ", AutoShootDesc = "ยิงอัตโนมัติเมื่อมีศัตรูอยู่ในระยะ FOV",
        WallCheck = "เช็กกำแพง", WallCheckDesc = "ล็อกเฉพาะศัตรูที่คุณมองเห็นเท่านั้น",
        ShowDamage = "โชว์ดาเมจ", ShowDamageDesc = "แสดงตัวเลขดาเมจเมื่อคุณยิงโดน",
        HitSound = "เสียงตอนยิงโดน", HitSoundDesc = "เล่นเสียงเมื่อคุณยิงโดนเป้าหมาย",
        ShowFOV = "โชว์วง FOV + เส้น", ShowFOVDesc = "แสดงวงกลมระยะล็อกและเส้นชี้เป้า",
        FOVSize = "ขนาด FOV", FOVSizeDesc = "ปรับขนาดวงระยะการล็อก",
        TargetTeams = "ทีมเป้าหมาย", TargetTeamsDesc = "เลือกว่าจะล็อกเฉพาะทีมไหน",
        
        EspName = "โชว์ชื่อ", EspNameDesc = "แสดงชื่อผู้เล่นบนหัว",
        EspHealth = "โชว์เลือด", EspHealthDesc = "แสดง血量ของศัตรู",
        EspDist = "โชว์ระยะทาง", EspDistDesc = "แสดงระยะห่างจากคุณ",
        EspHighlight = "ไฮไลท์ตัว", EspHighlightDesc = "ไฮไลท์ตัวศัตรูให้เห็นผ่านกำแพง",
        EspWeapon = "โชว์อาวุธ", EspWeaponDesc = "แสดงไอคอนอาวุธที่ศัตรูถืออยู่",
        
        SpeedHack = "วิ่งเร็ว", SpeedHackDesc = "เพิ่มความเร็วในการเดิน",
        WalkSpeed = "ความเร็วเดิน", WalkSpeedDesc = "ปรับความเร็วในการเดิน",
        HighJump = "กระโดดสูง", HighJumpDesc = "เพิ่มความสูงในการกระโดด",
        JumpPower = "แรงกระโดด", JumpPowerDesc = "ปรับแรงในการกระโดด",
        Noclip = "ทะลุกำแพง", NoclipDesc = "เดินทะลุกำแพงและสิ่งกีดขวาง",
        FlyBypass = "บิน", FlyBypassDesc = "บินได้ทั่วแมพ",
        FlySpeed = "ความเร็วบิน", FlySpeedDesc = "ปรับความเร็วในการบิน",
        
        SettingsTheme = "ธีม UI", SettingsThemeDesc = "เปลี่ยนสีธีมของเมนู",
        SettingsLang = "ภาษา", SettingsLangDesc = "เปลี่ยนภาษาของเมนู"
    }
}

local function L(key) return Lang[getgenv().CurrentLang][key] or key end

--// =========================
--// THEME SYSTEM (Dark Purple Default)
--// =========================
local Themes = {
    ["Default"] = { Accent = Color3.fromRGB(0, 170, 255), Background = Color3.fromRGB(20, 20, 20), Text = Color3.fromRGB(255, 255, 255) },
    ["Midnight Blue"] = { Accent = Color3.fromRGB(59, 169, 255), Background = Color3.fromRGB(10, 22, 40), Text = Color3.fromRGB(255, 255, 255) },
    ["Blood Red"] = { Accent = Color3.fromRGB(255, 50, 50), Background = Color3.fromRGB(30, 10, 10), Text = Color3.fromRGB(255, 255, 255) },
    ["Neon Green"] = { Accent = Color3.fromRGB(0, 255, 100), Background = Color3.fromRGB(15, 25, 15), Text = Color3.fromRGB(255, 255, 255) },
    ["Dark Purple"] = { Accent = Color3.fromRGB(180, 50, 255), Background = Color3.fromRGB(25, 15, 35), Text = Color3.fromRGB(255, 255, 255) }
}

local function ApplyTheme(themeName)
    local t = Themes[themeName] or Themes["Default"]
    WindUI:AddTheme({
        Name = "CustomTheme", Accent = t.Accent, Hover = t.Accent, Background = t.Background, BackgroundTransparency = 0.35,
        Outline = t.Accent, Text = t.Text, Icon = t.Text, WindowBackground = t.Background, WindowShadow = Color3.fromRGB(0,0,0),
        TabBackground = t.Background, TabTitle = t.Text, TabIcon = t.Text, ElementBackground = t.Background, ElementTitle = t.Text,
        Button = t.Accent, Toggle = t.Accent, Slider = t.Accent,
    })
    WindUI:SetTheme("CustomTheme")
end

getgenv().CurrentTheme = getgenv().CurrentTheme or "Dark Purple"
ApplyTheme(getgenv().CurrentTheme)

--// =========================
--// BACKEND LOGIC & VARIABLES
--// =========================
getgenv().buffEnabled = false
getgenv().hitboxEnabled = false
getgenv().sizeMultiplier = 2
getgenv().ESP_Name = false
getgenv().ESP_Health = false
getgenv().ESP_Distance = false
getgenv().ESP_Highlight = false
getgenv().ESPGUNEnabled = false
getgenv().BodyWalkSpeedEnabled = false
getgenv().BodyWalkSpeedValue = 16
getgenv().jumpPowerValue = 50
getgenv().frontNoclip = false
getgenv().trackedParts = {}
getgenv().AutoArrestEnabled = false
getgenv().AntiTaseEnabled = false

getgenv().SA_Enabled = false
getgenv().SA_AutoShoot = true
getgenv().SA_ShowDamage = true
getgenv().SA_HitSound = true
getgenv().SA_ShowVisuals = false
getgenv().SA_WallCheck = true
getgenv().SA_FOV = 300
getgenv().SA_SelectedTeams = {["Guards"] = true}
getgenv().SA_LineColor = Color3.new(1, 0, 0)

local saLastFire = 0
local lastHitTarget = nil
local lastHitTime = 0
local lastHitPosition = nil

local remotes = {
    meleeremote = ReplicatedStorage:WaitForChild("meleeEvent"),
    arrestremote = ReplicatedStorage:WaitForChild("Remotes"):WaitForChild("ArrestPlayer"),
}

--// =========================
--// ANTI-TASE (DISABLE METHOD)
--// =========================
local antiTaseActive = false
local taseConnections = {}

local function applyAntiTase()
    local gunRemotes = ReplicatedStorage:FindFirstChild("GunRemotes")
    if not gunRemotes then return end
    local playerTased = gunRemotes:FindFirstChild("PlayerTased")
    if not playerTased then return end
    for _, conn in pairs(getconnections(playerTased.OnClientEvent)) do
        pcall(function() conn:Disable(); table.insert(taseConnections, conn) end)
    end
end

local function removeAntiTase()
    for _, conn in pairs(taseConnections) do pcall(function() conn:Enable() end) end
    taseConnections = {}
end

LP.CharacterAdded:Connect(function()
    if antiTaseActive then task.wait(0.5); applyAntiTase() end
end)

--// =========================
--// ANTI AIM (70% EFFECTIVENESS)
--// =========================
local Config = {
    Enabled = false, Depth = 5, SafeMargin = 30, MaxSinkSpeed = 0, FollowHorizontal = true, SinkDepth = 0,
    ServerPose = "stand", FlipUpsideDown = true, SwayEnabled = true, SwayRadius = 20, SwaySpeed = 115.5,
    SwayTriangle3D = true, SwayTriangleTilt = 38, NoiseEnabled = true, NoiseAmplitude = 4, NoiseOctaves = 4,
    NoiseLacunarity = 2.0, NoiseGain = 0.55, NoiseSpeed = 6.0, ShowFakeDot = true, FakeDotSize = 1.5,
    FakeDotColor = Color3.fromRGB(255, 50, 50),
}

local state = { real = nil, vel = nil, ang = nil, fakePos = nil, spoofed = false, lockXZ = nil, swayClock = 0 }
local reportedY = nil
local SQRT3 = math.sqrt(3)
local fakeDot = nil

local function findRoot()
    local char = LP.Character
    if not char then return nil, nil end
    local hum = char:FindFirstChildOfClass("Humanoid")
    local root = (hum and hum.RootPart) or char:FindFirstChild("HumanoidRootPart")
    if root and root:IsA("BasePart") then return root, hum end
    return nil, hum
end

local function ensureFakeDot()
    if fakeDot and fakeDot.Parent then return fakeDot end
    fakeDot = Instance.new("Part")
    fakeDot.Name = "AntiAimFakeDot"
    fakeDot.Shape = Enum.PartType.Ball
    fakeDot.Size = Vector3.new(Config.FakeDotSize, Config.FakeDotSize, Config.FakeDotSize)
    fakeDot.Anchored, fakeDot.CanCollide, fakeDot.CanQuery, fakeDot.CanTouch = true, false, false, false
    fakeDot.Material = Enum.Material.Neon
    fakeDot.Color = Config.FakeDotColor
    fakeDot.Transparency = 0.1
    fakeDot.Parent = workspace.CurrentCamera
    return fakeDot
end

local function updateFakeDot()
    if not Config.ShowFakeDot or not Config.Enabled or not state.fakePos then
        if fakeDot then fakeDot.Parent = nil end
        return
    end
    local dot = ensureFakeDot()
    dot.Size = Vector3.new(Config.FakeDotSize, Config.FakeDotSize, Config.FakeDotSize)
    dot.Color = Config.FakeDotColor
    dot.CFrame = CFrame.new(state.fakePos)
    dot.Parent = workspace.CurrentCamera
end

local function restore()
    if not state.spoofed or not state.real then state.spoofed = false; updateFakeDot(); return end
    local root = findRoot()
    state.spoofed = false
    updateFakeDot()
    if not root then return end
    root.CFrame = state.real
    root.AssemblyLinearVelocity = state.vel or Vector3.zero
    root.AssemblyAngularVelocity = state.ang or Vector3.zero
end

local function trianglePath(t, R, v)
    local p0x, p0z = R, 0
    local p1x, p1z = -R * 0.5, R * SQRT3 * 0.5
    local p2x, p2z = -R * 0.5, -R * SQRT3 * 0.5
    local side = R * SQRT3
    local perimeter = 3 * side
    if v <= 0 then return p0x, p0z end
    local period = perimeter / v
    local dist = (t % period) * v
    local seg = math.floor(dist / side) % 3
    local u = (dist - seg * side) / side
    local ax, az, bx, bz
    if seg == 0 then ax, az, bx, bz = p0x, p0z, p1x, p1z
    elseif seg == 1 then ax, az, bx, bz = p1x, p1z, p2x, p2z
    else ax, az, bx, bz = p2x, p2z, p0x, p0z end
    return ax + (bx - ax) * u, az + (bz - az) * u
end

local function fbm1D(t, seed, octaves, lacunarity, gain)
    local sum, amp, freq, norm = 0, 1, 1, 0
    for k = 0, octaves - 1 do
        sum = sum + amp * math.sin(freq * t + seed * (k + 1) * 1.37)
        norm = norm + amp
        amp = amp * gain
        freq = freq * lacunarity
    end
    if norm > 0 then return sum / norm end
    return 0
end

local function noise3D(t, amp, octaves, lacunarity, gain)
    local nx = fbm1D(t, 1.0, octaves, lacunarity, gain) * amp
    local ny = fbm1D(t, 2.0, octaves, lacunarity, gain) * amp
    local nz = fbm1D(t, 3.0, octaves, lacunarity, gain) * amp
    return nx, ny, nz
end

local function punch()
    local root = findRoot()
    if not root or not state.real or reportedY == nil then return end
    local realCF = state.real
    local x, z = realCF.X, realCF.Z
    if not Config.FollowHorizontal then
        if not state.lockXZ then state.lockXZ = Vector3.new(realCF.X, 0, realCF.Z) end
        x, z = state.lockXZ.X, state.lockXZ.Z
    end
    local forward, right = realCF.LookVector, realCF.RightVector
    local yOffset = 0
    if Config.SwayEnabled and Config.SwayRadius > 0 then
        local lx, lz = trianglePath(state.swayClock, Config.SwayRadius, Config.SwaySpeed)
        x = x + right.X * lx + forward.X * lz
        z = z + right.Z * lx + forward.Z * lz
        if Config.SwayTriangle3D then yOffset = Config.SwayTriangleTilt * math.abs(math.sin(state.swayClock * math.pi)) end
    end
    if Config.NoiseEnabled and Config.NoiseAmplitude > 0 then
        local tn = os.clock() * Config.NoiseSpeed
        local nx, ny, nz = noise3D(tn, Config.NoiseAmplitude, Config.NoiseOctaves, Config.NoiseLacunarity, Config.NoiseGain)
        x = x + right.X * nx + forward.X * nz
        z = z + right.Z * nx + forward.Z * nz
        yOffset = yOffset + ny * 0.5
    end
    local poseAngle = (Config.ServerPose == "lie_back" and math.rad(-90)) or (Config.ServerPose == "lie_face" and math.rad(90)) or (Config.ServerPose == "tilt" and math.rad(8)) or 0
    local flipAngle = Config.FlipUpsideDown and math.rad(180) or 0
    local fake = CFrame.new(x, reportedY + yOffset, z) * CFrame.Angles(poseAngle, 0, flipAngle) * realCF.Rotation
    root.CFrame = fake
    root.AssemblyLinearVelocity = state.vel or Vector3.zero
    root.AssemblyAngularVelocity = state.ang or Vector3.zero
    if typeof(sethiddenproperty) == "function" then pcall(sethiddenproperty, root, "NetworkIsSleeping", false) end
    state.fakePos = fake.Position
    state.spoofed = true
    updateFakeDot()
end

local function advance(dt)
    local root, character = findRoot()
    if not root or not character then return false end
    local pos = root.Position
    local stillFake = state.spoofed and state.fakePos and (pos - state.fakePos).Magnitude < 8
    if not stillFake then
        state.real = root.CFrame
        state.vel = root.AssemblyLinearVelocity
        state.ang = root.AssemblyAngularVelocity
    end
    if not state.real then return false end
    dt = math.clamp(dt or (1 / 60), 0, 0.1)
    if reportedY == nil then reportedY = state.real.Y end
    if Config.SwayEnabled and Config.SwayRadius > 0 then state.swayClock = state.swayClock + dt end
    return true
end

RunService.PostSimulation:Connect(function(dt)
    if not Config.Enabled then return end
    if not advance(dt) then return end
    punch()
    task.defer(function() if Config.Enabled and state.spoofed then punch() end end)
end)

RunService:BindToRenderStep("AntiAimRestore", Enum.RenderPriority.First.Value, function()
    if not Config.Enabled then return end
    restore()
end)

LP.CharacterAdded:Connect(function()
    reportedY = nil; state.real = nil; state.vel = nil; state.ang = nil
    state.fakePos = nil; state.spoofed = false; state.lockXZ = nil
    state.swayClock = 0; updateFakeDot()
end)

--// =========================
--// VISUALS
--// =========================
local saVisGui = Instance.new("ScreenGui", LP:WaitForChild("PlayerGui"))
saVisGui.Name = "SilentAim_Visuals"
saVisGui.IgnoreGuiInset = true
saVisGui.ResetOnSpawn = false

local saCircle = Instance.new("Frame", saVisGui)
saCircle.BackgroundTransparency = 1
saCircle.AnchorPoint = Vector2.new(0.5, 0.5)
saCircle.Visible = false
local saStroke = Instance.new("UIStroke", saCircle)
saStroke.Thickness = 2
saStroke.Color = Color3.new(1, 1, 1)
local saCorner = Instance.new("UICorner", saCircle)
saCorner.CornerRadius = UDim.new(1, 0)

local saTracer = Drawing.new("Line")
saTracer.Visible = false
saTracer.Thickness = 1.5
saTracer.Transparency = 1
saTracer.Color = getgenv().SA_LineColor

--// =========================
--// UI CREATION
--// =========================
local Window = WindUI:CreateWindow({
    Title = "999MS HUB [ Prison life ]", Icon = "rbxassetid://108958018844079", Author = "Made by 009.exe",
    Folder = "999MS HUB", Size = UDim2.fromOffset(730, 410), Transparent = true, Resizable = true,
    User = { Enabled = true, Custom = { Name = player.Name, Bio = "999MS HUB USER", Image = avatar } }
})
Window:Tag({ Title = "v1.0.0", Icon = "github", Color = Color3.fromHex("#00bfff"), Radius = 10 })
Window:EditOpenButton({ Enabled = false })

local ScreenGui = Instance.new("ScreenGui"); ScreenGui.Name = "WindUI_Toggle"; ScreenGui.ResetOnSpawn = false; ScreenGui.Parent = CoreGui
local ToggleBtn = Instance.new("ImageButton")
ToggleBtn.Size, ToggleBtn.Position, ToggleBtn.BackgroundTransparency = UDim2.new(0, 50, 0, 50), UDim2.new(0, 20, 0.5, -25), 1
ToggleBtn.Image, ToggleBtn.Active, ToggleBtn.Draggable, ToggleBtn.Parent = "rbxassetid://108958018844079", true, true, ScreenGui

local opened = true
local function toggle() opened = not opened; if Window.UI then Window.UI.Enabled = opened else Window:Toggle() end end
ToggleBtn.MouseButton1Click:Connect(function()
    ToggleBtn:TweenSize(UDim2.new(0, 56, 0, 56), Enum.EasingDirection.Out, Enum.EasingStyle.Quad, 0.12, true, function()
        ToggleBtn:TweenSize(UDim2.new(0, 50, 0, 50), Enum.EasingDirection.Out, Enum.EasingStyle.Quad, 0.12, true)
    end)
    toggle()
end)
UserInputService.InputBegan:Connect(function(input, gp) if not gp and input.KeyCode == Enum.KeyCode.T then toggle() end end)

local Tab = Window:Tab({Title = L("TabMain"), Icon = "list"})
local AimTab = Window:Tab({Title = L("TabAim"), Icon = "crosshair"})
local EspTab = Window:Tab({Title = L("TabEsp"), Icon = "eye"})
local bodyTab = Window:Tab({Title = L("TabBody"), Icon = "dna"})
local MiscTab = Window:Tab({Title = L("TabMisc"), Icon = "settings"})
local SettingsTab = Window:Tab({Title = L("TabSettings"), Icon = "cog"})

-- MAIN TAB
Tab:Toggle({ Title = L("GunBuff"), Desc = L("GunBuffDesc"), Value = false, Callback = function(v) 
    getgenv().buffEnabled = v
    for _, t in pairs(player.Backpack:GetChildren()) do getgenv().HandleBuffOnTool(t) end
    if player.Character then for _, t in pairs(player.Character:GetChildren()) do getgenv().HandleBuffOnTool(t) end end
end })
Tab:Toggle({ Title = L("Hitbox"), Desc = L("HitboxDesc"), Value = false, Callback = function(state) 
    getgenv().hitboxEnabled = state
    if not state then for _, p in ipairs(Players:GetPlayers()) do if p ~= player and p.Character and p.Character:FindFirstChild("HumanoidRootPart") then local rp = p.Character.HumanoidRootPart; rp.Size, rp.Transparency, rp.Material, rp.CanCollide = Vector3.new(2,2,1), 1, Enum.Material.Plastic, false end end end
end })
Tab:Slider({ Title = L("HitboxSize"), Desc = L("HitboxSizeDesc"), Step = 1, Value = { Min = 2, Max = 15, Default = 2 }, Callback = function(v) getgenv().sizeMultiplier = v end })
Tab:Toggle({ Title = L("AutoArrest"), Desc = L("AutoArrestDesc"), Value = getgenv().AutoArrestEnabled, Callback = function(state) getgenv().AutoArrestEnabled = state end })
Tab:Toggle({ Title = L("AntiTase"), Desc = L("AntiTaseDesc"), Value = getgenv().AntiTaseEnabled, Callback = function(state) 
    getgenv().AntiTaseEnabled = state
    antiTaseActive = state
    if state then applyAntiTase() else removeAntiTase() end
end })

-- AIMBOT TAB
AimTab:Toggle({ Title = L("SilentAim"), Desc = L("SilentAimDesc"), Value = getgenv().SA_Enabled, Callback = function(state) getgenv().SA_Enabled = state; if not state then getgenv().SA_AutoShoot = false; saLastFire = tick() end end })
AimTab:Toggle({ Title = L("AutoShoot"), Desc = L("AutoShootDesc"), Value = getgenv().SA_AutoShoot, Callback = function(state) getgenv().SA_AutoShoot = state; if not state then saLastFire = tick() end end })
AimTab:Toggle({ Title = L("WallCheck"), Desc = L("WallCheckDesc"), Value = getgenv().SA_WallCheck, Callback = function(state) getgenv().SA_WallCheck = state end })
AimTab:Toggle({ Title = L("ShowDamage"), Desc = L("ShowDamageDesc"), Value = getgenv().SA_ShowDamage, Callback = function(state) getgenv().SA_ShowDamage = state end })
AimTab:Toggle({ Title = L("HitSound"), Desc = L("HitSoundDesc"), Value = getgenv().SA_HitSound, Callback = function(state) getgenv().SA_HitSound = state end })
AimTab:Toggle({ Title = L("ShowFOV"), Desc = L("ShowFOVDesc"), Value = getgenv().SA_ShowVisuals, Callback = function(state) getgenv().SA_ShowVisuals = state end })
AimTab:Colorpicker({ Title = "Tracer Color", Default = getgenv().SA_LineColor, Callback = function(color) getgenv().SA_LineColor = color; if saTracer then saTracer.Color = color end end })
AimTab:Slider({ Title = L("FOVSize"), Desc = L("FOVSizeDesc"), Step = 10, Value = { Min = 50, Max = 2000, Default = getgenv().SA_FOV }, Callback = function(value) getgenv().SA_FOV = value end })
AimTab:Dropdown({ Title = L("TargetTeams"), Desc = L("TargetTeamsDesc"), Values = { "Guards", "Inmates", "Criminals", "Hostile" }, Value = { "Guards" }, Multi = true, AllowNone = true, Callback = function(options) getgenv().SA_SelectedTeams = {}; for _, t in ipairs(options) do getgenv().SA_SelectedTeams[t] = true end end })

-- ESP TAB
EspTab:Toggle({ Title = L("EspName"), Desc = L("EspNameDesc"), Value = getgenv().ESP_Name, Callback = function(v) getgenv().ESP_Name = v end })
EspTab:Toggle({ Title = L("EspHealth"), Desc = L("EspHealthDesc"), Value = getgenv().ESP_Health, Callback = function(v) getgenv().ESP_Health = v end })
EspTab:Toggle({ Title = L("EspDist"), Desc = L("EspDistDesc"), Value = getgenv().ESP_Distance, Callback = function(v) getgenv().ESP_Distance = v end })
EspTab:Toggle({ Title = L("EspHighlight"), Desc = L("EspHighlightDesc"), Value = getgenv().ESP_Highlight, Callback = function(v) getgenv().ESP_Highlight = v end })
EspTab:Toggle({ Title = L("EspWeapon"), Desc = L("EspWeaponDesc"), Value = getgenv().ESPGUNEnabled, Callback = function(state) getgenv().ESPGUNEnabled = state; if not state and getgenv().clearAllESPGUN then getgenv().clearAllESPGUN() end end })

-- BODY TAB
bodyTab:Toggle({ Title = L("SpeedHack"), Desc = L("SpeedHackDesc"), Value = getgenv().BodyWalkSpeedEnabled, Callback = function(state) getgenv().BodyWalkSpeedEnabled = state; if getgenv().UpdateBody then getgenv().UpdateBody() end end })
bodyTab:Slider({ Title = L("WalkSpeed"), Desc = L("WalkSpeedDesc"), Step = 1, Value = { Min = 16, Max = 120, Default = getgenv().BodyWalkSpeedValue }, Callback = function(value) getgenv().BodyWalkSpeedValue = value; if getgenv().UpdateBody then getgenv().UpdateBody() end end })
bodyTab:Toggle({ Title = L("HighJump"), Desc = L("HighJumpDesc"), Value = getgenv().JumpHackEnabled, Callback = function(v) if getgenv().toggleHighJump then getgenv().toggleHighJump(v) end end })
bodyTab:Slider({ Title = L("JumpPower"), Desc = L("JumpPowerDesc"), Step = 5, Value = { Min = 50, Max = 500, Default = getgenv().jumpPowerValue }, Callback = function(v) getgenv().jumpPowerValue = tonumber(v) or 50 end })
bodyTab:Toggle({ Title = L("Noclip"), Desc = L("NoclipDesc"), Value = getgenv().frontNoclip, Callback = function(state) getgenv().frontNoclip = state; if not state and getgenv().trackedParts then for part,_ in pairs(getgenv().trackedParts) do if part:IsA("BasePart") then part.CanCollide = true end end getgenv().trackedParts = {} end end })
bodyTab:Toggle({ Title = L("FlyBypass"), Desc = L("FlyBypassDesc"), Value = getgenv()["_CR.DayToDay2044_Fly"], Callback = function(v) getgenv()["_CR.DayToDay2044_Fly"] = v end })
bodyTab:Slider({ Title = L("FlySpeed"), Desc = L("FlySpeedDesc"), Step = 1, Value = { Min = 1, Max = 500, Default = getgenv()["_CR.DayToDay2044_Speed"] }, Callback = function(v) getgenv()["_CR.DayToDay2044_Speed"] = tonumber(v) or 100 end })

-- MISC TAB (Anti Aim)
MiscTab:Toggle({ 
    Title = L("AntiAim"), 
    Desc = L("AntiAimDesc"), 
    Value = false, 
    Callback = function(state) 
        Config.Enabled = state
        if not state then
            restore()
            reportedY = nil
            state.lockXZ = nil
            state.spoofed = false
            state.swayClock = 0
            updateFakeDot()
        end
    end 
})

-- SETTINGS TAB
SettingsTab:Dropdown({
    Title = L("SettingsTheme"), Desc = L("SettingsThemeDesc"), Values = {"Default", "Midnight Blue", "Blood Red", "Neon Green", "Dark Purple"}, Value = getgenv().CurrentTheme,
    Callback = function(themeName) getgenv().CurrentTheme = themeName; ApplyTheme(themeName); Window:Notify({Title = "Theme Changed", Content = "Applied theme: " .. themeName, Duration = 3}) end
})

--// =========================
--// BACKGROUND LOGIC
--// =========================
getgenv().HandleBuffOnTool = function(tool)
    if not tool:IsA("Tool") then return end
    task.wait(0.1)
    if getgenv().buffEnabled then
        tool:SetAttribute("AutoFire", true); tool:SetAttribute("FireRate", 0.001); tool:SetAttribute("Damage", 999); tool:SetAttribute("IsReloading", false)
    else
        tool:SetAttribute("AutoFire", false); tool:SetAttribute("FireRate", nil); tool:SetAttribute("Damage", nil); tool:SetAttribute("IsReloading", nil)
    end
end
LP.CharacterAdded:Connect(function(char) char.ChildAdded:Connect(getgenv().HandleBuffOnTool) end)
if LP.Character then LP.Character.ChildAdded:Connect(getgenv().HandleBuffOnTool) end
for _, tool in pairs(LP.Backpack:GetChildren()) do getgenv().HandleBuffOnTool(tool) end
LP.Backpack.ChildAdded:Connect(getgenv().HandleBuffOnTool)

RunService.RenderStepped:Connect(function()
    if not getgenv().hitboxEnabled then return end
    for _, p in ipairs(Players:GetPlayers()) do
        if p ~= LP and p.Character then
            local rp, hum = p.Character:FindFirstChild("HumanoidRootPart"), p.Character:FindFirstChildOfClass("Humanoid")
            local isSeated = p.Character:FindFirstChildOfClass("VehicleSeat") or p.Character:FindFirstChildOfClass("Seat") or (hum and hum.SeatPart ~= nil)
            if rp and not isSeated then rp.Size, rp.Transparency, rp.BrickColor, rp.Material, rp.CanCollide = Vector3.new(getgenv().sizeMultiplier, getgenv().sizeMultiplier, getgenv().sizeMultiplier), 0.7, p.TeamColor, Enum.Material.Neon, false
            elseif rp and isSeated then rp.Size, rp.Transparency, rp.Material, rp.CanCollide = Vector3.new(2,2,1), 1, Enum.Material.Plastic, false end
        end
    end
end)

local saRayParams = RaycastParams.new(); saRayParams.FilterType = Enum.RaycastFilterType.Exclude; saRayParams.IgnoreWater = true
local function updateRayFilter() saRayParams.FilterDescendantsInstances = LP.Character and {LP.Character} or {} end
LP.CharacterAdded:Connect(updateRayFilter); updateRayFilter()

local function isHostile(char) return char and (char:GetAttribute("Hostile") == true or (function() for _, d in ipairs(char:GetDescendants()) do if d:GetAttribute("Hostile") == true then return true end end return false end)()) end
local function hasLOS(targetPart)
    if not getgenv().SA_WallCheck then return true end
    local char = LP.Character; local originPart = char and (char:FindFirstChild("Head") or char:FindFirstChild("HumanoidRootPart")); if not originPart then return false end
    local hit = workspace:Raycast(originPart.Position, targetPart.Position - originPart.Position, saRayParams); return not hit or hit.Instance:IsDescendantOf(targetPart.Parent)
end

local function ShowDamageText(position, damage)
    if not getgenv().SA_ShowDamage then return end
    local anchor = Instance.new("Part", workspace); anchor.Size, anchor.Position, anchor.Anchored, anchor.CanCollide, anchor.CanQuery, anchor.Transparency = Vector3.new(0.1,0.1,0.1), position + Vector3.new(0,0.5,0), true, false, false, 1
    local billboard = Instance.new("BillboardGui", anchor); billboard.Size, billboard.Adornee, billboard.AlwaysOnTop = UDim2.new(0,120,0,60), anchor, true
    local text = Instance.new("TextLabel", billboard); text.Size, text.BackgroundTransparency, text.Text, text.Font, text.TextSize = UDim2.new(1,0,1,0), 1, tostring(math.floor(damage)), Enum.Font.GothamBlack, 36
    text.TextColor3, text.TextStrokeColor3, text.TextStrokeTransparency = Color3.fromRGB(255,40,40), Color3.new(0,0,0), 0
    TweenService:Create(anchor, TweenInfo.new(1.2, Enum.EasingStyle.Quad, Enum.EasingDirection.Out), {Position = anchor.Position + Vector3.new(0,3,0)}):Play()
    task.delay(0.4, function() TweenService:Create(text, TweenInfo.new(0.8, Enum.EasingStyle.Quad, Enum.EasingDirection.In), {TextTransparency=1, TextStrokeTransparency=1}):Play() end)
    Debris:AddItem(anchor, 1.5)
end

local function PlayHitSound()
    if not getgenv().SA_HitSound then return end
    local myChar = LP.Character; if not myChar then return end
    local sound = Instance.new("Sound", myChar); sound.SoundId, sound.Volume, sound.PlayOnRemove = "rbxassetid://6534948092", 1, false
    sound:Play(); sound.Ended:Once(function() sound:Destroy() end); Debris:AddItem(sound, 3)
end

local function getTarget(originPos)
    if not getgenv().SA_Enabled then return nil end
    local bestPart, bestDist = nil, getgenv().SA_FOV
    local selected, includeHostile = getgenv().SA_SelectedTeams or {}, getgenv().SA_SelectedTeams["Hostile"] == true
    for _, v in ipairs(Players:GetPlayers()) do
        if v ~= LP and v.Character then
            local teamName, isH = v.Team and v.Team.Name or nil, isHostile(v.Character)
            local teamOk = false
            if teamName and selected[teamName] then teamOk = (teamName == "Inmates" and includeHostile) and isH or (not includeHostile and teamName == "Inmates") or teamName ~= "Inmates" end
            if not teamOk and includeHostile and isH then teamOk = true end
            if teamOk then
                local hum, part = v.Character:FindFirstChildOfClass("Humanoid"), v.Character:FindFirstChild("Head") or v.Character:FindFirstChild("HumanoidRootPart")
                if hum and hum.Health > 0 and part then
                    local dist = (part.Position - originPos).Magnitude
                    if dist <= bestDist then local _, onScreen = Cam:WorldToViewportPoint(part.Position); if onScreen and hasLOS(part) then bestDist, bestPart = dist, part end end
                end
            end
        end
    end
    return bestPart
end

local saCastRay, saHooked = nil, false
local function setupCastRayHook()
    if saHooked then return end
    for _, fn in ipairs(getgc(true)) do
        if typeof(fn) == "function" then
            local info = debug.getinfo(fn)
            if info.source and info.source:find("GunController") then
                for _, uv in ipairs(debug.getupvalues(fn)) do
                    if typeof(uv) == "function" then
                        local uvInfo = debug.getinfo(uv)
                        if uvInfo.name == "castRay" then saCastRay = uv elseif uvInfo.name == "shoot" then saShootFunc = uv end
                    end
                end
            end
        end
    end
    if saCastRay then
        local old; old = hookfunction(saCastRay, newcclosure(function(originPos, targetPos, spread, ...)
            local ok, r1, r2 = pcall(old, originPos, targetPos, spread, ...); if not ok then return old(originPos, targetPos, spread, ...) end
            if getgenv().SA_Enabled then
                local targetPart = getTarget(originPos)
                if targetPart then local rayResult = workspace:Raycast(originPos, targetPart.Position - originPos); if rayResult and rayResult.Instance:IsDescendantOf(targetPart.Parent) then 
                    lastHitTarget = targetPart.Parent
                    lastHitPosition = rayResult.Position
                    lastHitTime = tick()
                    return rayResult.Instance, rayResult.Position 
                end end
            end
            return r1, r2
        end))
        saHooked = true
    end
end

local oldFireServer = ReplicatedStorage:WaitForChild("GunRemotes"):WaitForChild("ShootEvent").FireServer
hookfunction(oldFireServer, newcclosure(function(self, data)
    if getgenv().SA_Enabled and type(data) == "table" and #data > 0 and type(data[1]) == "table" then
        local myHRP = LP.Character and LP.Character:FindFirstChild("HumanoidRootPart")
        if myHRP then
            local targetPart = getTarget(myHRP.Position)
            if targetPart then for _, shot in ipairs(data) do if type(shot) == "table" then shot[1], shot[2], shot[3] = shot[1] or myHRP.Position, targetPart.Position, targetPart end end end
        end
    end
    return oldFireServer(self, data)
end))

local lastHealth = {}
local function setupHealthTracker(p)
    local function onCharacter(char)
        local hum = char:WaitForChild("Humanoid", 5); if not hum then return end
        lastHealth[p] = hum.Health
        hum.HealthChanged:Connect(function(newHealth)
            local oldHealth = lastHealth[p] or newHealth
            if newHealth < oldHealth and lastHitTarget == char and (tick() - lastHitTime < 0.5) then
                PlayHitSound(); ShowDamageText(lastHitPosition or char:GetPivot().Position, oldHealth - newHealth)
                lastHitTarget, lastHitPosition = nil, nil
            end
            lastHealth[p] = newHealth
        end)
    end
    if p.Character then onCharacter(p.Character) end
    p.CharacterAdded:Connect(onCharacter)
end
for _, p in ipairs(Players:GetPlayers()) do if p ~= LP then setupHealthTracker(p) end end
Players.PlayerAdded:Connect(setupHealthTracker)

local isUserClicking = false
UIS.InputBegan:Connect(function(input, gp) if not gp and input.UserInputType == Enum.UserInputType.MouseButton1 then isUserClicking = true end end)
UIS.InputEnded:Connect(function(input) if input.UserInputType == Enum.UserInputType.MouseButton1 then isUserClicking = false end end)

task.spawn(function()
    while task.wait(0.05) do
        if not getgenv().SA_Enabled or not getgenv().SA_AutoShoot or isUserClicking then continue end
        local myChar = LP.Character; local myHead, tool = myChar and myChar:FindFirstChild("Head"), myChar and myChar:FindFirstChildOfClass("Tool")
        if not (myHead and tool and (tool:GetAttribute("ToolType") == "Gun" or tool.Name:lower():find("gun"))) then continue end
        if tick() - saLastFire < 0.08 or (tool:GetAttribute("Local_ReloadSession") or 0) > 0 then continue end
        if tool:GetAttribute("Ammo") and tool:GetAttribute("Ammo") <= 0 then continue end
        local target = getTarget(myHead.Position); if not target then continue end
        if saShootFunc then
            pcall(function() 
                saShootFunc({UserInputState = Enum.UserInputState.Begin, UserInputType = Enum.UserInputType.MouseButton1, Position = Vector3.zero})
                task.wait(0.02)
                saShootFunc({UserInputState = Enum.UserInputState.End, UserInputType = Enum.UserInputType.MouseButton1, Position = Vector3.zero}) 
            end)
            saLastFire = tick()
            local w = 0; while tool:GetAttribute("Local_IsShooting") == true and not isUserClicking and getgenv().SA_AutoShoot and w < 0.5 do task.wait(0.02); w += 0.02 end
        else
            pcall(function() ShootEvent:FireServer({{myHead.Position, target.Position, target}}) end)
            saLastFire = tick()
        end
    end
end)

task.spawn(function() while task.wait(1) do if not saHooked and LP.Character and LP.Character:FindFirstChildOfClass("Tool") then setupCastRayHook() end end end)

-- 🔴 ลูป Auto Arrest (Safe Version)
local ArrestCooldown = 0
local CurrentArrestTarget = nil

task.spawn(function()
    while task.wait(0.1) do
        if not getgenv().AutoArrestEnabled then
            CurrentArrestTarget = nil
            continue
        end

        local myChar = LP.Character
        local myRoot = myChar and myChar:FindFirstChild("HumanoidRootPart")
        if not myRoot then continue end

        local closestTarget = nil
        local closestDist = 7.5 

        for _, plr in ipairs(Players:GetPlayers()) do
            if plr ~= LP and plr.Character then
                local char = plr.Character
                local hum = char:FindFirstChildOfClass("Humanoid")
                local hrp = char:FindFirstChild("HumanoidRootPart")
                
                if hum and hum.Health > 0 and hrp then
                    local dist = (myRoot.Position - hrp.Position).Magnitude
                    if dist <= closestDist then
                        local canArrest = false
                        
                        if plr.Team and plr.Team.Name == "Criminals" then
                            canArrest = true
                        elseif plr.Team and plr.Team.Name == "Inmates" then
                            if char:GetAttribute("Hostile") == true or char:GetAttribute("Trespassing") == true then
                                canArrest = true
                            end
                        end

                        if char:FindFirstChild("ForceField") then canArrest = false end
                        if char:GetAttribute("Tased") == true then canArrest = false end

                        if canArrest then
                            closestTarget = plr
                            closestDist = dist
                        end
                    end
                end
            end
        end

        CurrentArrestTarget = closestTarget

        if CurrentArrestTarget and (os.clock() - ArrestCooldown) > 7 then
            local success, err = pcall(function()
                remotes.arrestremote:InvokeServer(CurrentArrestTarget, 1)
            end)
            if success then
                ArrestCooldown = os.clock()
            end
        end
    end
end)

getgenv().UpdateBody = function()
    local char = LP.Character; if not char then return end
    local hum = char:FindFirstChildOfClass("Humanoid"); if not hum then return end
    hum.WalkSpeed = getgenv().BodyWalkSpeedEnabled and getgenv().BodyWalkSpeedValue or 16
end
LP.CharacterAdded:Connect(function() task.wait(0.2) getgenv().UpdateBody() end)
RunService.Heartbeat:Connect(function() if getgenv().BodyWalkSpeedEnabled then getgenv().UpdateBody() end end)

getgenv().toggleHighJump = function(on)
    if getgenv().jumpLoop then getgenv().jumpLoop:Disconnect() getgenv().jumpLoop = nil end
    if on then getgenv().jumpLoop = RunService.Heartbeat:Connect(function() local char = LP.Character; local hum = char and char:FindFirstChildOfClass("Humanoid"); if hum then hum.UseJumpPower = true; hum.JumpPower = getgenv().jumpPowerValue end end) end
end

local accumulator = 0
RunService.RenderStepped:Connect(function(dt)
    if not getgenv().frontNoclip then return end
    accumulator += dt; if accumulator < 0.12 then return end; accumulator = 0
    local char = LP.Character; local root = char and char:FindFirstChild("HumanoidRootPart"); if not root then return end
    local parts = workspace:GetPartBoundsInRadius(root.Position, 6); local currentParts = {}
    for _,part in pairs(parts) do if part:IsA("BasePart") and part ~= root then local underFoot = part.Position.Y + part.Size.Y/2 < root.Position.Y; if not underFoot then part.CanCollide = false; getgenv().trackedParts[part] = true; currentParts[part] = true end end end
    for part,_ in pairs(getgenv().trackedParts) do if not currentParts[part] then if part:IsA("BasePart") then part.CanCollide = true end getgenv().trackedParts[part] = nil end end
end)

-- ESP Setup
local ESP_FOLDER = Instance.new("Folder", CoreGui); ESP_FOLDER.Name = "ESP_FOLDER"
local function createESP(p)
    if p == LP then return end
    local function onChar(char)
        local hum, root, head = char:WaitForChild("Humanoid",5), char:WaitForChild("HumanoidRootPart",5), char:WaitForChild("Head",5)
        if not hum or not root or not head then return end
        local hl = Instance.new("Highlight", ESP_FOLDER); hl.Adornee, hl.DepthMode, hl.FillTransparency, hl.OutlineTransparency, hl.Enabled = char, Enum.HighlightDepthMode.AlwaysOnTop, 0.5, 0, false
        local ng = Instance.new("BillboardGui", ESP_FOLDER); ng.Adornee, ng.Size, ng.StudsOffset, ng.AlwaysOnTop = head, UDim2.new(0,200,0,45), Vector3.new(0,2.5,0), true
        local nl = Instance.new("TextLabel", ng); nl.Size, nl.BackgroundTransparency, nl.Text, nl.TextSize, nl.Font, nl.TextStrokeTransparency = UDim2.new(1,0,0,20), 1, p.Name, 12, Enum.Font.SourceSansBold, 0
        local hpl = Instance.new("TextLabel", ng); hpl.Position, hpl.Size, hpl.BackgroundTransparency, hpl.TextSize, hpl.Font, hpl.TextStrokeTransparency = UDim2.new(0,0,0,20), UDim2.new(1,0,0,20), 1, 12, Enum.Font.SourceSans, 0
        local dg = Instance.new("BillboardGui", ESP_FOLDER); dg.Adornee, dg.Size, dg.StudsOffset, dg.AlwaysOnTop = root, UDim2.new(0,200,0,20), Vector3.new(0,-3,0), true
        local dl = Instance.new("TextLabel", dg); dl.Size, dl.BackgroundTransparency, dl.TextSize, dl.Font, dl.TextStrokeTransparency, dl.TextColor3 = UDim2.new(1,0,1,0), 1, 12, Enum.Font.SourceSans, 0, Color3.new(1,1,1)
        RunService.RenderStepped:Connect(function()
            if not char.Parent or hum.Health <= 0 then ng:Destroy() dg:Destroy() hl:Destroy() return end
            local tc = (p.Team and p.TeamColor) and p.TeamColor.Color or Color3.fromRGB(255,255,255)
            local hp = math.floor(hum.Health)
            nl.Visible, nl.TextColor3 = getgenv().ESP_Name, tc
            hpl.Visible, hpl.Text, hpl.TextColor3 = getgenv().ESP_Health, "HP: "..hp, hp/hum.MaxHealth > 0.6 and Color3.fromRGB(0,255,0) or (hp/hum.MaxHealth > 0.3 and Color3.fromRGB(255,255,0) or Color3.fromRGB(255,0,0))
            dg.Enabled = getgenv().ESP_Distance
            if getgenv().ESP_Distance and LP.Character and LP.Character:FindFirstChild("HumanoidRootPart") then dl.Text = math.floor((LP.Character.HumanoidRootPart.Position - root.Position).Magnitude).." m" end
            hl.Enabled, hl.FillColor, hl.OutlineColor = getgenv().ESP_Highlight, tc, tc
        end)
    end
    if p.Character then onChar(p.Character) end; p.CharacterAdded:Connect(onChar)
end
for _,p in ipairs(Players:GetPlayers()) do createESP(p) end; Players.PlayerAdded:Connect(createESP)

RunService.RenderStepped:Connect(function()
    local center = Vector2.new(Cam.ViewportSize.X / 2, Cam.ViewportSize.Y / 2)
    saCircle.Visible = getgenv().SA_ShowVisuals and getgenv().SA_Enabled
    if saCircle.Visible then saCircle.Size, saCircle.Position = UDim2.new(0, getgenv().SA_FOV * 2, 0, getgenv().SA_FOV * 2), UDim2.fromOffset(center.X, center.Y) end
    
    local target = getTarget(Cam.CFrame.Position)
    if getgenv().SA_ShowVisuals and target then
        local p, vis = Cam:WorldToViewportPoint(target.Position)
        if vis then saTracer.Visible, saTracer.From, saTracer.To, saTracer.Color = true, center, Vector2.new(p.X, p.Y), getgenv().SA_LineColor
        else saTracer.Visible = false end
    else saTracer.Visible = false end
end)