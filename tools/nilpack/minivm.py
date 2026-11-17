"""Mini-VM: turns a flat integer program into runtime-derived key material.

The point of the VM is that neither the boot key nor the NIL91 alphabet appears
as a literal anywhere in the packed file: both are *computed* by ~200 tiny
instructions right before they are used.  The packer runs the exact same
interpreter in Python, so it knows the resulting bytes without ever storing
them.

Instruction encoding is deliberately tiny (a flat int array, variable length):

    1  SET  r, imm
    2  XOR  r, s
    3  ADD  r, s
    4  MUL  r, s
    5  ROT  r, k
    6  SWP  r, s
    7  OUT  r                ; append (r & 0xFF) to the output stream
    8  MIX  r, s, imm        ; r = r ^ (s * imm + 0x9E37)
    9  PERM r, s             ; build the 91-char alphabet permutation
   10  ADDI r, imm
"""

from __future__ import annotations

import random

M32 = 0xFFFFFFFF
NREG = 8
OP_SET, OP_XOR, OP_ADD, OP_MUL, OP_ROT, OP_SWP, OP_OUT, OP_MIX, OP_PERM, OP_ADDI = range(1, 11)

WIDTH = {OP_SET: 3, OP_XOR: 3, OP_ADD: 3, OP_MUL: 3, OP_ROT: 3,
         OP_SWP: 3, OP_OUT: 2, OP_MIX: 4, OP_PERM: 3, OP_ADDI: 3}


def _rotl32(x: int, n: int) -> int:
    n &= 31
    x &= M32
    return ((x << n) | (x >> (32 - n))) & M32


def _alph_perm(a_reg_value: int, b_reg_value: int) -> tuple[int, int]:
    a = a_reg_value % 91
    if a == 0:
        a = 1
    while a % 7 == 0 or a % 13 == 0:
        a += 1
    return a, b_reg_value % 91


def run(program: list[int], chars: str) -> tuple[bytes, str]:
    """Reference interpreter.  Must behave exactly like ``vm`` in nil_lib.lua."""
    r = [0] * (NREG + 1)
    out = bytearray()
    alphabet = None
    i = 0
    n = len(program)
    while i < n:
        op = program[i]
        if op == OP_SET:
            r[program[i + 1]] = program[i + 2] & M32
        elif op == OP_XOR:
            r[program[i + 1]] ^= r[program[i + 2]]
        elif op == OP_ADD:
            r[program[i + 1]] = (r[program[i + 1]] + r[program[i + 2]]) & M32
        elif op == OP_MUL:
            r[program[i + 1]] = (r[program[i + 1]] * r[program[i + 2]]) & M32
        elif op == OP_ROT:
            r[program[i + 1]] = _rotl32(r[program[i + 1]], program[i + 2])
        elif op == OP_SWP:
            a, b = program[i + 1], program[i + 2]
            r[a], r[b] = r[b], r[a]
        elif op == OP_OUT:
            out.append(r[program[i + 1]] & 0xFF)
        elif op == OP_MIX:
            a, b, imm = program[i + 1], program[i + 2], program[i + 3]
            r[a] = (r[a] ^ ((r[b] * imm + 0x9E37) & M32)) & M32
        elif op == OP_PERM:
            pa, pb = _alph_perm(r[program[i + 1]], r[program[i + 2]])
            alphabet = "".join(chars[((i2 - 1) * pa + pb) % 91] for i2 in range(1, 92))
        elif op == OP_ADDI:
            r[program[i + 1]] = (r[program[i + 1]] + program[i + 2]) & M32
        else:
            raise ValueError(f"bad opcode {op} at {i}")
        i += WIDTH[op]
    if alphabet is None:
        raise ValueError("program never ran PERM")
    return bytes(out), alphabet


def build(seed: int, n_junk: int = 140) -> list[int]:
    """Generate a deterministic-ish random program that emits 32 key bytes."""
    rng = random.Random(seed)
    prog: list[int] = []

    def reg():
        return rng.randint(1, NREG)

    # prime the registers from immediates
    for r in range(1, NREG + 1):
        prog += [OP_SET, r, rng.getrandbits(32)]

    for _ in range(n_junk):
        op = rng.choice([OP_XOR, OP_ADD, OP_MUL, OP_ROT, OP_SWP, OP_MIX, OP_ADDI])
        if op == OP_MIX:
            prog += [OP_MIX, reg(), reg(), rng.randrange(1, 1 << 16)]
        elif op == OP_ROT:
            prog += [OP_ROT, reg(), rng.randrange(1, 32)]
        elif op == OP_ADDI:
            prog += [OP_ADDI, reg(), rng.getrandbits(24)]
        elif op == OP_SWP:
            prog += [OP_SWP, reg(), reg()]
        else:
            prog += [op, reg(), reg()]

    # emit 32 key bytes, mixing junk in between so OUT positions are not a
    # contiguous block that can be lifted with a regex
    for _ in range(32):
        prog += [OP_MIX, reg(), reg(), rng.randrange(1, 1 << 16)]
        prog += [OP_OUT, reg()]

    prog += [OP_PERM, reg(), reg()]
    return prog


def to_lua(program: list[int]) -> str:
    return "{" + ",".join(str(v) for v in program) + "}"
