# nilpack — Key‑Chained Lua/Luau Packer (prototype)

โปรโตไทป์ที่ลงมือทำจริงตามข้อวิเคราะห์ Skibidi ก่อนหน้านี้ — ไม่ใช่แค่ดีไซน์บนกระดาษ
ทุกเลเยอร์ถูกทดสอบด้วยการ **รันโค้ดที่แพ็กแล้วใน Lua จริง 6 ตัว** (Lua 5.1/5.2/5.3/5.4/5.5 + LuaJIT 2.1 ผ่าน `lupa`)

```
tools/nilpack/
├── packer.py            # ตัวแพ็ก (CLI + API)
├── crypto.py            # ChaCha20 / Poly1305 / AEAD / NIL91 (Python reference)
├── minivm.py            # คอมไพเลอร์ + interpreter ของ mini-VM
├── lualex.py            # lexer หา string literal (รองรับ Luau backtick interpolation)
├── lua/
│   ├── nil_lib.lua      # runtime ที่ฝังลงไฟล์ผลลัพธ์ (pure Lua, ไม่พึ่ง bit32)
│   ├── boot.lua         # เลเยอร์ 0 (เทมเพลต)
│   └── stage2.lua       # setup chunk (เทมเพลต, ถูกเข้ารหัสก่อนฝัง)
└── tests/
    ├── sample.lua       # เคสทดสอบครบทุกตำแหน่งของ string
    ├── harness.py       # รัน Lua ใน Python แล้วดัก print()
    └── test_nilpack.py  # unittest 10 เคส
```

---

## 1) สถาปัตยกรรม: ลูกโซ่กุญแจ 3 ชั้น

```
ไฟล์ที่ได้ (ชั้น 0, อ่านได้)
 ├─ PROG  = โปรแกรม mini-VM (~600 int)
 ├─ B1/N1 = setup chunk  (AEAD, เข้ารหัสด้วย k_boot)
 ├─ B2/N2 = payload      (AEAD, เข้ารหัสด้วย k_payload)
 ├─ B3/N3 = string pool  (MAC + ต่อ site, เข้ารหัสด้วย k_pool)
 └─ CHARS  = 91 ตัวอักษรที่ alphabet จะถูกสลับลำดับจากมัน

รันจริง:
 mini-VM(PROG) ──► k_boot + alphabet(91)          ← ไม่มีคีย์/alphabet ตรง ๆ ในไฟล์
        │
        ├─► NIL91 decode(B1) ─► AEAD(k_boot)      ─► ซอร์สของ setup chunk
        │
        └─► setup chunk:
              probe 10 ตัว (p01..p10) ─► F
              k_payload, k_pool = kdf(k_boot, F, N2)   ← ผูกกับ "ลายนิ้วมือ" ของ runtime
              AEAD(k_payload)(B2) ─► ซอร์สของผู้ใช้
              MAC(k_pool)(B3)     ─► string pool (ถอดทีละ site ตอนเรียก __NS(i))
              load(ซอร์ส)(__NS)
```

จุดที่ต่างจาก Skibidi โดยเจตนา:

| ประเด็น | Skibidi | nilpack (โน้ต) |
|---|---|---|
| คีย์/ตาราง | `b1` สร้าง `K_INIT` **และ** `K_RE` ออกมาพร้อมกัน (อ่านได้จาก `Re`) | มีแค่ `k_boot` ตอน boot; `k_payload`/`k_pool` เกิดหลัง probe และไม่เคยถูกสร้างถ้า probe ผิด |
| MAC | ChaCha20+Poly1305 ทุกจุด | เหมือนกัน + MAC ของ pool (แก้ record แล้วเงียบ ไม่พ่น string ขยะเข้า payload) |
| Nonce ของ string | `Sm(abs(seed), pc, constIdx)` | `site_nonce(base, site)` โดย `site` ถูกสลับลำดับ (shuffle) และ **ไม่เรียงตาม literal** |
| ขนาด | 320–365 KB | runtime ~19 KB (หลังมินิฟาย) + ข้อมูล ≈ 1.25× ของ payload |
| Anti-tamper | `setfenv`/`getfenv` ใน hot path | ไม่แตะ `getfenv` เลย; ใช้ค่าที่วัดได้พอร์ตได้ (ดู §3) |

## 2) วิธีใช้

```bash
# CLI
python3 tools/nilpack/packer.py input.lua -o out.lua --target luau --seed 1234 --stats

# API
python3 -c "import sys; sys.path.insert(0,'tools/nilpack'); import packer; \
  code, st = packer.pack(open('in.lua').read(), seed=1, target='luau'); print(st)"
```

`--target` ฝังค่าลายนิ้วมือที่คาดหวังไว้ล่วงหน้า (จึงเป็น **per‑platform build**):

| target | bit32 | bit | ใช้ได้บน |
|---|---|---|---|
| `luau` (ค่าเริ่มต้น) | 1 | 0 | Roblox Luau (และ Lua 5.2/5.3 ที่มี `bit32`) |
| `lua51` | 0 | 0 | Lua 5.1 / 5.3 / 5.4 / 5.5 |
| `luajit` | 0 | 1 | LuaJIT 2.x |

ถ้าเอา build ของ `luau` ไปรันบน LuaJIT → `F` เพี้ยน → กุญแจผิด → **เงียบ ไม่มี error ให้แพตช์**

## 3) กลไกที่ลงมือทำแล้ว

1. **Mini‑VM สร้างกุญแจ + alphabet ตอนรัน** (`minivm.py` ↔ `nil_lib.vm`)
   10 opcode (`SET/XOR/ADD/MUL/ROT/SWP/OUT/MIX/PERM/ADDI`), ~600 ints, คีย์ 32 ไบต์ + permutation 91 ตัว
   Python interpreter เป็นตัวอ้างอิง — ตัวเดียวกันนี้ใช้คำนวณตอนแพ็ก จึงไม่มีคีย์ฝังในไฟล์

2. **Probe fingerprint → กุญแจเพย์โหลด** (`lua/stage2.lua`)
   10 ฟังก์ชันวัด `#`, `select`, `#tostring(1/2)`, upvalue, `math.floor`, `tonumber("ff",16)`,
   และ `type(rawget(_G,"bit32"))`/`type(rawget(_G,"bit"))`
   `F` ถูกใช้เป็น **counter ของ ChaCha** ในการสร้าง `k_payload`/`k_pool` → แพตช์ probe ตัวใดตัวหนึ่ง = คีย์เปลี่ยน = ถอดไม่ได้ (ไม่มีการเรียก `error("tampered")` ให้ตามลบ)

3. **AEAD ทุกชั้น + MAC ของ pool**
   ChaCha20 ถูกต้องตาม RFC 8439 (ทดสอบ block vector §2.3.2 และ AEAD tag §2.8.2), Poly1305 ใช้ limb 10 บิต (13 limbs, `2^130 ≡ 5`) จึงไม่ต้องพึ่ง bigint/bit lib
   แก้ 1 ไบต์ใน B1/B2/B3 → เงียบ (`return` เปล่า) ไม่มี stacktrace

4. **String pool ผูกกับ "site"**
   string literal ทุกตัวถูกแทนด้วย `(__NS(site))`; nonce = `f(base, site)` และ **site ถูก shuffle** ให้ไม่ตรงลำดับ literal
   → ใครดูด blob ไปถอดด้วยคีย์เดียวจะได้ขยะ เพราะแต่ละ record ต้องใช้ site ของตัวเอง
   (`tests/test_nilpack.py::test_pool_is_site_bound` ตรวจข้อนี้)

5. **พอร์ตabilidade ของ runtime**
   `nil_lib.lua` เลือกเส้นทาง bit ops 4 ระดับ: `bit32` → `bit` (LuaJIT) → operator `~ & |` (5.3+) → ตาราง nibble
   ไม่มี syntax 5.3+ และไม่เรียก `getfenv` → ใช้ได้ทั้ง PUC Lua และ Luau

## 4) ผลทดสอบ (รันจริงใน sandbox)

```
payload 1.6 KB → out 19 KB   | ผ่านทั้ง Lua 5.1/5.3/5.4/5.5
payload 80 KB  → out 175 KB  | lua51 1.04s · lua54 0.31s · lua55 0.30s (Luau มี bit32 → เร็วกว่านี้)
```

```
$ python -m unittest discover -s tools/nilpack/tests -v
test_round_trip_plain_lua ... ok        (เทียบ print() กับต้นฉบับทุก runtime)
test_target_binding_luajit ... ok       (build ของ luajit เงียบบน Lua อื่น)
test_wrong_target_is_silent ... ok
test_no_plaintext_leak ... ok           (ทุก string ≥5 ตัวในต้นฉบับหายจากไฟล์結果)
test_tampered_blobs_fail_silently ... ok(B1/B2/B3 โดนพลิก 1 ไบต์ → เงียบ)
test_pool_is_site_bound ... ok
Ran 10 tests ... OK
```

## 5) ข้อจำกัดที่รู้ตัว (อย่าหลงคิดว่าหน้าเท่า Skibidi แล้ว)

- **ยังไม่มี bytecode VM** — payload ยังเป็น *ซอร์ส Lua* ที่ถูกเข้ารหัส+ถอด string ไม่ใช่ instruction stream
  ดังนั้นคนที่ emulate setup chunk ได้จะได้ซอร์สจริงกลับมา (แบบเดียวกับจุดตายของ Skibidi ที่ `K_RE` รั่ว)
- **probe เป็นค่าคงที่ต่อ target** → `F` ทำนายได้ถ้ารู้ target (ไม่ผูกกับ environment จริงของผู้รัน)
  ทางแก้ระยะต่อไป: pack แยกตาม executor/ที่อยู่/`game.PlaceId` แล้วฝังค่าที่คาดหวัง (ยังต้อง emulate ให้ได้อยู่ดี แต่ brute-force ง่ายขึ้น)
- **ความยาว string ใน pool ยังเป็น plaintext** (2 ไบต์) → รั่วขนาดของแต่ละ literal
- **runtime ยังไม่ถูก obfuscate ตัวเอง** — `nil_lib.lua` อ่านง่าย ถ้าจะกันจริงต้องรัน nilpack ซ้อนตัวเอง (self-host) หรือเขียนใหม่เป็น VM
- **ไม่มี anti-hook** (`debug.sethook`, `string.byte` replacement) — ถ้าคนรันดัก `chacha_xor` ก็ได้ keystream
- ยังไม่ทดสอบบน Luau จริง (sandbox ไม่มี Luau) — ตรวจแล้วเฉพาะว่า runtime ใช้ subset ที่ Luau รองรับ

## 6) ต่อยอดที่คุ้มที่สุด (เรียงตามผลตอบแทน)

1. **Self-host**: เอา `nil_lib.lua` + `stage2.lua` ไปผ่าน nilpack ตัวเองอีกรอบ (เพิ่มอีกชั้น ต้นทุน ~19 KB)
2. **LZ4 + shared dictionary** ก่อน AEAD สำหรับ payload → ลดขนาด 2–3 เท่า (Skibidi ทำแบบนี้กับ `V.ch`)
3. **Per‑pc decode**: เปลี่ยน payload เป็น bytecode ของ VM เล็ก ๆ ที่ถอด instruction ณ `pc` (ตามที่วิเคราะห์ไว้ §4 ของบันทึกก่อนหน้า) — งานใหญ่สุด แต่คือกำแพงจริง
4. **Pool length obfuscation**: เข้ารหัส 2 ไบต์ความยาวด้วย stream เดียวกับ ciphertext หรือเก็บเป็น delta

รายละเอียดเชิงออกแบบ/แผนงานเต็มอยู่ใน `docs/nilfuscator-v4-design.md`
