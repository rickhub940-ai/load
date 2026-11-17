-- End-to-end sample: exercises strings in every syntactic position nilpack
-- touches (call sugar, table keys, long brackets, escapes, concat, methods).
local M = {}
M.__index = M

function M.new(name)
    return setmetatable({ name = name, items = {} }, M)
end

function M:add(item, n)
    table.insert(self.items, string.rep(item, n or 1))
    return self
end

function M:render()
    local parts = {}
    for i, v in ipairs(self.items) do
        parts[#parts + 1] = ("%d:%s"):format(i, v)
    end
    return table.concat(parts, " | ")
end

local bag = M.new("demo")
bag:add("alpha", 2):add("beta")

print("name:", bag.name)
print("render:", bag:render())
print("long:", [[line one
line two]])
print("escaped:", "tab\there, quote\"q\", byte\65")
print(("sugar"):upper() .. "-" .. #"len")
print(string.format("%s=%02d", "hex", 7))
print(("x"):rep(3))

local t = { ["key with space"] = 1, plain = 2 }
print("table:", t["key with space"] + t.plain)

local function varargs(...)
    local n = select("#", ...)
    return n, (...)
end
print("varargs:", varargs("a", "b", "c"))

local s = ""
for i = 1, 3 do
    s = s .. tostring(i * i) .. ","
end
print("loop:", s)

print("done")
