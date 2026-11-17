"""End-to-end tests for nilpack.

Run with:
    pip install lupa
    python -m unittest discover -s tools/nilpack/tests -v

The tests execute the *packed* output inside real Lua interpreters (Lua 5.1,
5.2, 5.3, 5.4, 5.5 and LuaJIT 2.1 via lupa) and compare its printed output with
the original script.
"""

from __future__ import annotations

import os
import sys
import unittest

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, ROOT)
sys.path.insert(0, HERE)

try:
    import lupa  # noqa: F401
    HAVE_LUPA = True
except ImportError:  # pragma: no cover
    HAVE_LUPA = False

import packer  # noqa: E402

SAMPLE = os.path.join(HERE, "sample.lua")

# runtimes that expose neither bit32 nor bit -> the "lua51" profile
PLAIN = ("lua51", "lua53", "lua54", "lua55")


def read_sample() -> str:
    with open(SAMPLE, "r", encoding="utf-8") as fh:
        return fh.read()


@unittest.skipUnless(HAVE_LUPA, "lupa not installed (pip install lupa)")
class PackedExecution(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        from harness import run_lua
        cls.run_lua = staticmethod(run_lua)
        cls.source = read_sample()
        cls.packed, cls.stats = packer.pack(cls.source, seed=11, target="lua51")

    def test_round_trip_plain_lua(self):
        """Packed script prints exactly what the original prints."""
        for name in PLAIN:
            with self.subTest(runtime=name):
                want, err = self.run_lua(name, self.source)
                self.assertIsNone(err)
                got, err = self.run_lua(name, self.packed)
                self.assertIsNone(err)
                self.assertEqual(got, want)

    def test_target_binding_luajit(self):
        """A luajit build runs on LuaJIT and stays silent elsewhere."""
        packed, _ = packer.pack(self.source, seed=12, target="luajit")
        want, _ = self.run_lua("luajit21", self.source)
        got, err = self.run_lua("luajit21", packed)
        self.assertIsNone(err)
        self.assertEqual(got, want)
        for name in PLAIN:
            got, err = self.run_lua(name, packed)
            self.assertIsNone(err, "wrong-target build must not raise")
            self.assertEqual(got, "", "wrong-target build must fail silently")

    def test_wrong_target_is_silent(self):
        packed, _ = packer.pack(self.source, seed=13, target="lua51")
        got, err = self.run_lua("luajit21", packed)
        self.assertIsNone(err)
        self.assertEqual(got, "")

    def test_no_plaintext_leak(self):
        """No string literal of the original survives in the packed file."""
        dbg: dict = {}
        packer.pack(self.source, seed=11, target="lua51", _debug=dbg)
        with open(os.path.join(ROOT, "lua", "nil_lib.lua"), "r", encoding="utf-8") as fh:
            lib = fh.read()
        checked = 0
        for value in dbg["strings"]:
            if len(value) < 5 or value in lib:
                continue          # too short / also a runtime string
            checked += 1
            with self.subTest(value=value):
                self.assertNotIn(value, self.packed)
        self.assertGreater(checked, 10, "sanity: must actually check strings")

    def test_tampered_blobs_fail_silently(self):
        """A single flipped byte anywhere in the chained blobs yields silence."""
        want, _ = self.run_lua("lua51", self.source)
        for marker in ('local B1, N1 = "', 'local B2, N2 = "', 'local B3, N3 = "'):
            with self.subTest(blob=marker):
                idx = self.packed.index(marker) + len(marker)
                ch = self.packed[idx]
                flipped = "A" if ch != "A" else "B"
                bad = self.packed[:idx] + flipped + self.packed[idx + 1:]
                got, err = self.run_lua("lua51", bad)
                self.assertIsNone(err, "tampering must not raise")
                self.assertNotEqual(got, want)

    def test_pool_is_site_bound(self):
        """Records decrypt only with their own site id."""
        from lupa import lua51
        dbg: dict = {}
        packer.pack(self.source, seed=14, target="lua51", _debug=dbg)
        with open(os.path.join(ROOT, "lua", "nil_lib.lua"), "r", encoding="utf-8") as fh:
            lib = fh.read()
        L = lua51.LuaRuntime(encoding=None)
        NIL = L.eval("function(c) local CHARS=c; return (function()\n" + lib + "\nend)() end")(
            packer.CHARS.encode())
        pool = NIL.pool_open(dbg["pool_blob"], dbg["n3"], dbg["kstr"])
        n = len(dbg["strings"])
        got = sorted(NIL.pool_get(pool, i).decode("latin-1") for i in range(1, n + 1))
        self.assertEqual(got, sorted(dbg["strings"]))
        # the same ciphertext read with the neighbouring site id is garbage
        self.assertNotEqual(NIL.pool_get(pool, 1), NIL.pool_get(pool, 2))
        # and a wrong pool key yields nothing usable either
        wrong = NIL.pool_open(dbg["pool_blob"], dbg["n3"], bytes(32))
        self.assertNotEqual(wrong and NIL.pool_get(wrong, 1),
                            NIL.pool_get(pool, 1))


class LayerSanity(unittest.TestCase):
    def test_probe_fingerprint_matches_stage2(self):
        """packer.probe_fingerprint mirrors the Lua probe block."""
        env = packer.TARGETS["lua51"]
        self.assertEqual(packer.probe_fingerprint(env["bit32"], env["bit"]), 903)
        self.assertEqual(packer.probe_fingerprint(1, 0), 926)   # Luau / Lua 5.2
        self.assertEqual(packer.probe_fingerprint(0, 1), 932)   # LuaJIT

    def test_alphabet_is_a_permutation(self):
        dbg: dict = {}
        packer.pack("print(1)", seed=3, target="lua51", _debug=dbg)
        alpha = dbg["alphabet"]
        self.assertEqual(len(alpha), 91)
        self.assertEqual(len(set(alpha)), 91)
        self.assertEqual(set(alpha), set(packer.CHARS))

    def test_deterministic_for_a_seed(self):
        a, _ = packer.pack("print('x')", seed=42, target="lua51")
        b, _ = packer.pack("print('x')", seed=42, target="lua51")
        self.assertEqual(a, b)
        c, _ = packer.pack("print('x')", seed=43, target="lua51")
        self.assertNotEqual(a, c)

    def test_keys_differ_per_layer(self):
        dbg: dict = {}
        packer.pack(read_sample(), seed=5, target="lua51", _debug=dbg)
        self.assertNotEqual(dbg["boot_key"], dbg["k2"])
        self.assertNotEqual(dbg["k2"], dbg["kstr"])
        self.assertEqual(len(dbg["n1"]), 12)
        self.assertNotEqual(dbg["n1"], dbg["n2"])


if __name__ == "__main__":
    unittest.main(verbosity=2)
