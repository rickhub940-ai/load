"""Pure-Python reference implementation of the primitives used by nilpack.

Everything here has an exact byte-for-byte counterpart in ``lua/nil_lib.lua``
(the runtime that ships inside the packed script).  The Python side is the
*packer*; the Lua side must reproduce it on the target, so both sides are
deliberately dumb: additions, xor, rotations and 10-bit limb arithmetic only.

Primitives
----------
ChaCha20 (RFC 8439)   keystream / stream cipher
Poly1305 (RFC 8439)   one-time MAC, 13 limbs of 10 bits
AEAD                  encrypt-then-MAC (ChaCha20-Poly1305 style)
NIL91                 printable transport encoding, custom alphabet
"""

from __future__ import annotations

M32 = 0xFFFFFFFF


def _rotl32(x: int, n: int) -> int:
    x &= M32
    return ((x << n) | (x >> (32 - n))) & M32


def _quarter(s, a, b, c, d):
    s[a] = (s[a] + s[b]) & M32
    s[d] = _rotl32(s[d] ^ s[a], 16)
    s[c] = (s[c] + s[d]) & M32
    s[b] = _rotl32(s[b] ^ s[c], 12)
    s[a] = (s[a] + s[b]) & M32
    s[d] = _rotl32(s[d] ^ s[a], 8)
    s[c] = (s[c] + s[d]) & M32
    s[b] = _rotl32(s[b] ^ s[c], 7)


def _le32(b: bytes) -> int:
    return b[0] | (b[1] << 8) | (b[2] << 16) | (b[3] << 24)


def _to_le32(v: int) -> bytes:
    v &= M32
    return bytes((v & 0xFF, (v >> 8) & 0xFF, (v >> 16) & 0xFF, (v >> 24) & 0xFF))


CONSTANTS = (0x61707865, 0x3320646E, 0x79622D32, 0x6B206574)


def chacha20_block(key: bytes, counter: int, nonce: bytes) -> bytes:
    assert len(key) == 32 and len(nonce) == 12
    s = list(CONSTANTS)
    s += [_le32(key[i:i + 4]) for i in range(0, 32, 4)]
    s.append(counter & M32)
    s += [_le32(nonce[i:i + 4]) for i in range(0, 12, 4)]
    x = list(s)
    for _ in range(10):
        _quarter(x, 0, 4, 8, 12)
        _quarter(x, 1, 5, 9, 13)
        _quarter(x, 2, 6, 10, 14)
        _quarter(x, 3, 7, 11, 15)
        _quarter(x, 0, 5, 10, 15)
        _quarter(x, 1, 6, 11, 12)
        _quarter(x, 2, 7, 8, 13)
        _quarter(x, 3, 4, 9, 14)
    return b"".join(_to_le32((x[i] + s[i]) & M32) for i in range(16))


def chacha20_xor(key: bytes, nonce: bytes, data: bytes, counter: int = 0) -> bytes:
    out = bytearray()
    for off in range(0, len(data), 64):
        ks = chacha20_block(key, counter + off // 64, nonce)
        out += bytes(a ^ b for a, b in zip(data[off:off + 64], ks))
    return bytes(out)


# ---------------------------------------------------------------------------
# Poly1305 -- 13 limbs of 10 bits.  2^130 == 5 (mod p), so folding is a
# single multiply-add, which keeps every intermediate exact in a double.
# ---------------------------------------------------------------------------

def _block_limbs(block: bytes, hibit: int = 1) -> list[int]:
    """Little-endian block (<=16 bytes) + 2^(8*len) -> 13 limbs of 10 bits."""
    n = int.from_bytes(block, "little") | (hibit << (8 * len(block)))
    return [(n >> (10 * i)) & 0x3FF for i in range(13)]


def _clamp_r(key: bytes) -> list[int]:
    r = bytearray(key[:16])
    r[3] &= 15
    r[7] &= 15
    r[11] &= 15
    r[15] &= 15
    r[4] &= 252
    r[8] &= 252
    r[12] &= 252
    return _block_limbs(bytes(r), 0)


def _carry(h: list[int]) -> list[int]:
    for _ in range(3):
        for i in range(12):
            h[i + 1] += h[i] >> 10
            h[i] &= 0x3FF
        c = h[12] >> 10
        h[12] &= 0x3FF
        h[0] += 5 * c
    return h


def _mul(h: list[int], r: list[int]) -> list[int]:
    prod = [0] * 25
    for i in range(13):
        hi = h[i]
        if hi:
            for j in range(13):
                prod[i + j] += hi * r[j]
    for i in range(24, 12, -1):
        prod[i - 13] += 5 * prod[i]
    return _carry(prod[:13])


def _add(a: list[int], b: list[int]) -> list[int]:
    return _carry([a[i] + b[i] for i in range(13)])


def poly1305(key: bytes, msg: bytes) -> bytes:
    r = _clamp_r(key)
    h = [0] * 13
    for i in range(0, len(msg), 16):
        h = _mul(_add(h, _block_limbs(msg[i:i + 16])), r)
    h = _carry(h)
    n = sum(h[i] << (10 * i) for i in range(13))
    p = (1 << 130) - 5
    if n >= p:
        n -= p
    s = int.from_bytes(key[16:32], "little")
    return ((n + s) % (1 << 128)).to_bytes(16, "little")


# ---------------------------------------------------------------------------

def _pad16(b: bytes) -> bytes:
    return b"\x00" * ((16 - len(b) % 16) % 16)


def aead_seal(key: bytes, nonce: bytes, plaintext: bytes, aad: bytes = b"") -> bytes:
    otk = chacha20_block(key, 0, nonce)[:32]
    ct = chacha20_xor(key, nonce, plaintext, counter=1)
    mac_data = (aad + _pad16(aad) + ct + _pad16(ct)
                + len(aad).to_bytes(8, "little") + len(ct).to_bytes(8, "little"))
    return ct + poly1305(otk, mac_data)


def aead_open(key: bytes, nonce: bytes, sealed: bytes, aad: bytes = b"") -> bytes | None:
    if len(sealed) < 16:
        return None
    ct, tag = sealed[:-16], sealed[-16:]
    otk = chacha20_block(key, 0, nonce)[:32]
    mac_data = (aad + _pad16(aad) + ct + _pad16(ct)
                + len(aad).to_bytes(8, "little") + len(ct).to_bytes(8, "little"))
    if poly1305(otk, mac_data) != tag:
        return None
    return chacha20_xor(key, nonce, ct, counter=1)


# ---------------------------------------------------------------------------
# NIL91 -- 5 digits of base 91 carry 4 bytes (91^5 = 6_240_321_451 > 2^32).
# A 6th character records how many of the 4 bytes are real, which keeps the
# stream self-delimiting while still looking like one flat text blob.
# ---------------------------------------------------------------------------

TAG_ALPHABET = "1234"


def encode91(data: bytes, alphabet: str) -> str:
    assert len(alphabet) == 91 and len(set(alphabet)) == 91
    out = []
    for i in range(0, len(data), 4):
        chunk = data[i:i + 4]
        n = len(chunk)
        v = int.from_bytes(chunk.ljust(4, b"\x00"), "little")
        for _ in range(5):
            out.append(alphabet[v % 91])
            v //= 91
        out.append(TAG_ALPHABET[n - 1])
    return "".join(out)


def decode91(text: str, alphabet: str) -> bytes:
    index = {c: i for i, c in enumerate(alphabet)}
    out = bytearray()
    i = 0
    while i + 6 <= len(text):
        v = 0
        for k in range(5):
            v += index[text[i + k]] * (91 ** k)
        tail = TAG_ALPHABET.index(text[i + 5]) + 1
        out += v.to_bytes(4, "little")[:tail]
        i += 6
    return bytes(out)
