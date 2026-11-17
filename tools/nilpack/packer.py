"""nilpack -- key-chained Lua/Luau packer (prototype).

Layer chain
-----------
0. boot    : mini-VM derives the boot key + NIL91 alphabet at runtime
1. setup   : AEAD(boot key) chunk; probes -> fingerprint F -> payload/pool keys
2. payload : AEAD(payload key) user source; every string literal replaced by a
             call into a per-site encrypted pool (site-bound nonces)

Usage
-----
    python tools/nilpack/packer.py input.lua -o out.lua --target luau

    from packer import pack
    packed = pack(open("in.lua").read())
"""

from __future__ import annotations

import argparse
import os
import random
import sys
from dataclasses import dataclass

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)

import crypto  # noqa: E402
import lualex  # noqa: E402
import minivm  # noqa: E402

# 91 printable characters the alphabet is a permutation of
CHARS = "".join(chr(c) for c in range(33, 124))

VERSION = "nil4.1"
AAD = b"NIL4|" + VERSION.encode()

# Environment factors: the packer bakes the expected values for a target, so a
# build made for Luau silently fails to decrypt on PUC Lua (and vice versa).
TARGETS = {
    "luau":    {"bit32": 1, "bit": 0},   # Roblox Luau
    "lua51":   {"bit32": 0, "bit": 0},   # PUC Lua 5.1
    "lua54":   {"bit32": 0, "bit": 0},   # PUC Lua 5.3/5.4/5.5
    "luajit":  {"bit32": 0, "bit": 1},   # LuaJIT 2.x
}


def probe_fingerprint(bit32: int, bit: int) -> int:
    """Mirror of the probe block in lua/stage2.lua -- keep both in sync."""
    p01 = 4                                   # #{"a","b","c","d"}
    p02 = 3                                   # select("#", "x", "y", "z")
    p03 = 3 + 7 + 6 + 8                       # #"nil" + #"boolean" + ...
    p04 = len("0.5") + len("0.25")            # #tostring(1/2) + #tostring(1/4)
    p05 = 3 * 5 + 7                           # captured upvalues
    p06 = -3 + 2                              # floor(-2.5) + floor(2.5)
    p07 = sum("nil4".encode()) % 71           # byte loop
    p08 = 255 % 13                            # tonumber("ff", 16) % 13
    p09 = bit32
    p10 = bit
    return (p01 + 3 * p02 + 5 * p03 + 7 * p04 + 11 * p05
            + 13 * p06 + 17 * p07 + 19 * p08 + 23 * p09 + 29 * p10) % 2147483647


def kdf(boot_key: bytes, f: int, nonce: bytes) -> tuple[bytes, bytes]:
    """Mirror of NIL.kdf in lua/nil_lib.lua."""
    k2 = crypto.chacha20_block(boot_key, f, nonce)[:32]
    kstr = crypto.chacha20_block(boot_key, (f + 1) % 0x100000000, nonce)[:32]
    return k2, kstr


def site_nonce(base: bytes, site: int) -> bytes:
    """Mirror of nil_lib.site_nonce: per-site nonce, never reused."""
    v = (site + int.from_bytes(base[8:12], "little")) & 0xFFFFFFFF
    v ^= 0x5BF03635
    return base[:8] + v.to_bytes(4, "little")


@dataclass
class Stats:
    payload_bytes: int = 0
    pool_bytes: int = 0
    setup_bytes: int = 0
    output_bytes: int = 0
    strings: int = 0


def _minify(text: str) -> str:
    """Drop whole-line comments and indentation from our own runtime code."""
    out = []
    for line in text.splitlines():
        line = line.strip()
        if not line or line.startswith("--"):
            continue
        out.append(line)
    return "\n".join(out)


def _read(name: str) -> str:
    with open(os.path.join(HERE, "lua", name), "r", encoding="utf-8") as fh:
        return fh.read()


def build_pool(strings: list[str], kstr: bytes, nonce: bytes,
               sites: list[int]) -> bytes:
    """One record per string: 2-byte length + ciphertext, written in site order.

    `site` (1-based) is mixed into the nonce, so decrypting record N requires
    knowing N -- i.e. the call site -- not just the pool key.
    """
    recs: list[bytes] = [b""] * (len(strings) + 1)
    for literal, value in enumerate(strings):
        site = sites[literal]
        ct = crypto.chacha20_xor(kstr, site_nonce(nonce, site),
                                 value.encode("latin-1"), 0)
        recs[site] = len(ct).to_bytes(2, "little") + ct
    body = b"".join(recs[1:])
    # domain-separated MAC key: same secret, different ChaCha counter
    kpk = crypto.chacha20_block(kstr, 0xFFFFFFFF, nonce)[:32]
    return body + crypto.poly1305(kpk, body)


def pack(source: str, *, seed: int | None = None, target: str = "luau",
         pool: bool = True, transform: bool = True, minify: bool = True,
         _debug: dict | None = None) -> tuple[str, Stats]:
    if seed is None:
        # every build gets its own mini-VM program, i.e. its own boot key
        seed = random.SystemRandom().getrandbits(32)
    rng = random.Random(seed)
    env = TARGETS[target]

    # -- layer 2 source: string literals -> pool sites -------------------
    strings: list[str] = []
    if transform and pool:
        spans = [(st, en, v) for st, en, v, kind in lualex.scan(source)
                 if kind in ("short", "long")]
        index: dict[str, int] = {}
        for _st, _en, value in spans:
            if value not in index:
                index[value] = len(strings)
                strings.append(value)
        sites = list(range(1, len(strings) + 1))
        rng.shuffle(sites)
        out, pos = [], 0
        for st, en, value in spans:
            out.append(source[pos:st])
            out.append("(__NS(%d))" % sites[index[value]])
            pos = en
        out.append(source[pos:])
        payload_src = "".join(out)
    else:
        payload_src = source

    payload = payload_src.encode("utf-8")

    # -- keys -------------------------------------------------------------
    prog = minivm.build(seed, n_junk=rng.randint(120, 200))
    boot_key, alphabet = minivm.run(prog, CHARS)
    assert len(boot_key) >= 32

    n1 = bytes(rng.randrange(256) for _ in range(12))
    n2 = bytes(rng.randrange(256) for _ in range(12))
    n3 = bytes(rng.randrange(256) for _ in range(12))

    f = probe_fingerprint(env["bit32"], env["bit"])
    k2, kstr = kdf(boot_key, f, n2)

    pool_blob = build_pool(strings, kstr, n3, sites) if strings else b""

    # -- sealing ----------------------------------------------------------
    payload_sealed = crypto.aead_seal(k2, n2, payload, AAD)
    setup_src = _read("stage2.lua").encode("utf-8")
    setup_sealed = crypto.aead_seal(boot_key, n1, setup_src, AAD)

    q = lualex.quote

    def qb(value: bytes) -> str:
        return q(value.decode("latin-1"))[1:-1]

    boot = _read("boot.lua")
    boot = boot.replace("@@LIB@@", _read("nil_lib.lua").rstrip("\n"))
    boot = boot.replace("@@CHARS@@", q(CHARS)[1:-1])
    boot = boot.replace("@@PROG@@", minivm.to_lua(prog))
    boot = boot.replace("@@STAGE2@@", qb(crypto.encode91(setup_sealed, alphabet).encode("latin-1")))
    boot = boot.replace("@@N1@@", qb(n1))
    boot = boot.replace("@@PAYLOAD@@", qb(crypto.encode91(payload_sealed, alphabet).encode("latin-1")))
    boot = boot.replace("@@N2@@", qb(n2))
    boot = boot.replace("@@POOL@@", qb(crypto.encode91(pool_blob, alphabet).encode("latin-1")))
    boot = boot.replace("@@N3@@", qb(n3))
    boot = boot.replace("@@AAD@@", qb(AAD))

    if _debug is not None:
        _debug.update(boot_key=boot_key, alphabet=alphabet, f=f, k2=k2, kstr=kstr,
                      n1=n1, n2=n2, n3=n3, strings=strings, pool_blob=pool_blob,
                      payload_src=payload_src, prog=prog)

    if minify:
        boot = _minify(boot)

    stats = Stats(
        payload_bytes=len(payload),
        pool_bytes=len(pool_blob),
        setup_bytes=len(setup_sealed),
        output_bytes=len(boot.encode("utf-8")),
        strings=len(strings),
    )
    return boot, stats


def main(argv: list[str] | None = None) -> int:
    ap = argparse.ArgumentParser(prog="nilpack", description=__doc__.splitlines()[0])
    ap.add_argument("input", help="Lua/Luau source to protect")
    ap.add_argument("-o", "--output", help="write packed script here (default: stdout)")
    ap.add_argument("--seed", type=int, default=None,
                    help="deterministic build seed (default: random per build)")
    ap.add_argument("--target", default="luau", choices=sorted(TARGETS),
                    help="runtime the probe fingerprint is baked for")
    ap.add_argument("--no-pool", action="store_true", help="skip the string pool")
    ap.add_argument("--no-minify", action="store_true", help="keep comments/indent")
    ap.add_argument("--stats", action="store_true", help="print layer sizes to stderr")
    args = ap.parse_args(argv)

    with open(args.input, "r", encoding="utf-8") as fh:
        source = fh.read()
    packed, stats = pack(source, seed=args.seed, target=args.target,
                         pool=not args.no_pool, minify=not args.no_minify)

    if args.output:
        with open(args.output, "w", encoding="utf-8") as fh:
            fh.write(packed)
    else:
        sys.stdout.write(packed)
    if args.stats:
        sys.stderr.write(
            "payload=%dB pool=%dB(%d str) setup=%dB out=%dB\n"
            % (stats.payload_bytes, stats.pool_bytes, stats.strings,
               stats.setup_bytes, stats.output_bytes))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
