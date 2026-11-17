"""Minimal Lua 5.1 / 5.4 / Luau lexer: find string literals, leave comments alone.

Only what nilpack needs: locate every short string, long string and (Luau)
backtick-interpolated string literal, decode it to bytes, and let the caller
substitute it with a call into the runtime string pool.  Nothing else about the
grammar is interpreted.

Values are handled as ``str`` of code points 0..255 (one char per byte) so that
escaped binary data survives the round-trip unchanged.
"""

from __future__ import annotations

_SIMPLE = {
    "a": "\a", "b": "\b", "f": "\f", "n": "\n", "r": "\r",
    "t": "\t", "v": "\v", "\\": "\\", '"': '"', "'": "'", "\n": "\n",
}


class LexError(ValueError):
    pass


def _long_bracket_level(src: str, i: int) -> int | None:
    """If src[i] starts a long bracket ``[==[`` return its level, else None."""
    if i >= len(src) or src[i] != "[":
        return None
    j = i + 1
    while j < len(src) and src[j] == "=":
        j += 1
    if j < len(src) and src[j] == "[":
        return j - i - 1
    return None


def _read_long(src: str, i: int, level: int) -> tuple[str, int]:
    open_len = level + 2
    close = "]" + "=" * level + "]"
    start = i + open_len
    end = src.find(close, start)
    if end < 0:
        raise LexError("unterminated long bracket")
    body = src[start:end]
    if body.startswith("\r\n"):
        body = body[2:]
    elif body.startswith("\n"):
        body = body[1:]
    return body, end + len(close)


def _read_short(src: str, i: int) -> tuple[str, int]:
    quote = src[i]
    i += 1
    out = []
    while True:
        if i >= len(src):
            raise LexError("unterminated string")
        c = src[i]
        if c == quote:
            return "".join(out), i + 1
        if c != "\\":
            out.append(c)
            i += 1
            continue
        i += 1
        if i >= len(src):
            raise LexError("unterminated escape")
        e = src[i]
        if e in _SIMPLE:
            out.append(_SIMPLE[e])
            i += 1
        elif e == "x":
            out.append(chr(int(src[i + 1:i + 3], 16)))
            i += 3
        elif e == "z":
            i += 1
            while i < len(src) and src[i] in " \t\r\n\f\v":
                i += 1
        elif e == "u":
            close = src.index("}", i)
            out.append(chr(int(src[i + 2:close], 16)))
            i = close + 1
        elif e.isdigit():
            j = i
            while j < len(src) and j < i + 3 and src[j].isdigit():
                j += 1
            out.append(chr(int(src[i:j]) & 0xFF))
            i = j
        else:
            raise LexError("unknown escape \\%s" % e)


def _scan_region(src: str, i: int, stop: int, found: list) -> int:
    """Scan code from i..stop, appending (start, end, value, kind) tuples."""
    while i < stop:
        c = src[i]
        if c == "-" and src.startswith("--", i):
            lvl = _long_bracket_level(src, i + 2)
            if lvl is not None:
                _, i = _read_long(src, i + 2, lvl)
            else:
                j = src.find("\n", i)
                i = stop if j < 0 else j + 1
        elif c in "\"'":
            start = i
            value, i = _read_short(src, i)
            found.append((start, i, value, "short"))
        elif c == "[":
            lvl = _long_bracket_level(src, i)
            if lvl is not None:
                start = i
                value, i = _read_long(src, i, lvl)
                found.append((start, i, value, "long"))
            else:
                i += 1
        elif c == "`":
            # Luau interpolated string: text parts are literal, {..} is code
            start = i
            i += 1
            literal = []
            while i < stop:
                ch = src[i]
                if ch == "\\" and i + 1 < stop:
                    literal.append(src[i:i + 2])
                    i += 2
                elif ch == "`":
                    i += 1
                    break
                elif ch == "{":
                    depth = 1
                    j = i + 1
                    while j < stop and depth:
                        cj = src[j]
                        if cj == "{":
                            depth += 1
                        elif cj == "}":
                            depth -= 1
                            if depth == 0:
                                break
                        j += 1
                    _scan_region(src, i + 1, j, found)
                    literal.append(src[i:j + 1])
                    i = j + 1
                else:
                    literal.append(ch)
                    i += 1
            found.append((start, i, "".join(literal), "interp"))
        else:
            i += 1
    return i


def scan(src: str) -> list[tuple[int, int, str, str]]:
    """Return [(start, end, value, kind)] for every string literal, in order."""
    found: list[tuple[int, int, str, str]] = []
    _scan_region(src, 0, len(src), found)
    found.sort(key=lambda t: t[0])
    return found


def replace(src: str, make_call, kinds: tuple[str, ...] = ("short", "long")) -> tuple[str, list[str]]:
    """Replace matching literals with ``make_call(index)``; return (src, values)."""
    parts = []
    values: list[str] = []
    last = 0
    idx = 0
    for start, end, value, kind in scan(src):
        if kind not in kinds:
            continue
        parts.append(src[last:start])
        parts.append(make_call(idx))
        values.append(value)
        idx += 1
        last = end
    parts.append(src[last:])
    return "".join(parts), values


def quote(value: str) -> str:
    """Encode bytes (0..255 per char) as a Lua short string literal."""
    out = ['"']
    for ch in value:
        o = ord(ch)
        if ch == '"':
            out.append('\\"')
        elif ch == "\\":
            out.append("\\\\")
        elif ch == "\n":
            out.append("\\n")
        elif ch == "\r":
            out.append("\\r")
        elif 32 <= o < 127:
            out.append(ch)
        else:
            out.append("\\%03d" % o)
    out.append('"')
    return "".join(out)
