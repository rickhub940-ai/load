"""Run a Lua chunk inside a chosen embedded interpreter, capturing print().

Requires ``lupa`` (pip install lupa).  Each Lua version lupa ships is exposed:
lua51, lua52, lua53, lua54, lua55 and luajit21.
"""

from __future__ import annotations

from lupa import lua51, lua52, lua53, lua54, lua55, luajit21

RUNTIMES = {
    "lua51": lua51,
    "lua52": lua52,
    "lua53": lua53,
    "lua54": lua54,
    "lua55": lua55,
    "luajit21": luajit21,
}

RUNNER = """
RUN = function(src)
  local buf = {}
  local realprint = print
  _G.print = function(...)
    local n = select('#', ...)
    local t = {}
    for i = 1, n do
      local v = select(i, ...)
      t[i] = (type(v) == "string") and v or tostring(v)
    end
    buf[#buf + 1] = table.concat(t, "\\t")
  end
  local loader = loadstring or load
  local chunk, err = loader(src, "=chunk")
  if not chunk then
    _G.print = realprint
    return nil, tostring(err)
  end
  local ok, e = pcall(chunk)
  _G.print = realprint
  return table.concat(buf, "\\n"), (not ok) and tostring(e) or nil
end
"""


def run_lua(name: str, source: str) -> tuple[str, str | None]:
    """Return (printed output, error or None)."""
    mod = RUNTIMES[name]
    L = mod.LuaRuntime(encoding=None)
    L.execute(RUNNER)
    fn = L.globals().RUN
    out, err = fn(source.encode("utf-8"))
    if out is not None:
        out = out.decode("utf-8", "replace")
    return out, (err.decode("utf-8", "replace") if err else None)
