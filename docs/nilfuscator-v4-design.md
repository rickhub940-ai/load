# Nilfuscator v4 — Key‑Chained Architecture

เอกสารออกแบบ + สถานะการลงมือทำจริง (โปรโตไทป์อยู่ที่ `tools/nilpack/`)

---

## 0) เป้าหมายและภัยคุกคาม

| ผู้โจมตี | ทำอะไรได้ | v4 ต้องกันอะไร |
|---|---|---|
| **Regex dumper** | `grep` หา string/XOR table ในไฟล์ | ไม่มี literal สำคัญในไฟล์ → ผ่าน (ทดสอบแล้ว) |
| **Static reader** | อ่านโค้ดแล้วเข้าใจโครงสร้าง | ต้อง emulate mini‑VM + setup จึงจะได้คีย์ |
| **Patch/NOP** | แพตช์ anti‑tamper, ข้าม `if` | ไม่มี `if tampered then error()`, การแพตช์ทำให้ **คีย์เพี้ยน** ไม่ใช่ทำให้ error |
| **Hook/dump ที่ runtime** | ดัก `string.byte`, `debug.sethook`, แทน `chacha_xor` | **ยังไม่กัน** (ข้อจำกัดที่รู้ตัว — เฟส 3) |
| **Emulator เต็มรูปแบบ** | รันทุกอย่างใน sandbox แล้วอ่านค่าที่ถอดได้ | กันไม่ได้ 100% ทุก obfuscator — เป้าคือ *ต้นทุนเวลา* |

หลักคิด: **ไม่มีจุดเดียวที่ "ตรวจแล้ว error"** ทุกการตรวจต้องไหลเข้าไปเป็น *ตัวเลขในสมการสร้างคีย์* ถ้าค่าผิด → กุญแจผิด → AEAD คืน `nil` เงียบ ๆ
(นี่คือสิ่งที่ Skibidi ทำครึ่งเดียว: `__gfsetup` เช็ก anti‑tamper แล้วเรียก `error()` เมื่อถูกแพตช์ ซึ่งง่ายต่อการ NOP)

---

## 1) สถาปัตยกรรมที่ลงมือทำแล้ว (working prototype)

```
┌─ ชั้น 0 ─ ไฟล์ .lua ที่แจก ────────────────────────────────────────────┐
│ PROG (int array)   B1/N1 (setup)   B2/N2 (payload)   B3/N3 (pool)      │
│ CHARS (91 ตัว)     + runtime ~19 KB (nil_lib.lua, มินิฟายแล้ว)          │
└────────────────────────────────────────────────────────────────────────┘
        │ mini-VM 10 opcode (~600 ints)
        ▼
  k_boot[32] + alphabet[91]        ← ไม่มีอยู่ในไฟล์ เป็นผลจากการรัน
        │ NIL91 decode → AEAD(k_boot, N1)
        ▼
  setup chunk (source ถูกเข้ารหัส)
        │ probe p01..p10 → F   (10 ฟังก์ชัน, ค่ากระจาย)
        │ k_payload, k_pool = ChaCha(k_boot, counter=F / F+1, nonce=N2)
        ▼
  payload source ── AEAD(k_payload, N2)     ⇒ load()
  string pool  ── MAC(k_pool) + site-bound   ⇒ __NS(site) ถอดทีละตัว
```

### สิ่งที่วัดได้

- **ขนาด**: payload 1.6 KB → 19 KB; payload 80 KB → 175 KB (≈1.25× + runtime 19 KB)
  (เทียบ Skibidi 320–365 KB สำหรับ payload เล็ก — เพราะเราแยก helper แทนก๊อป decoder เข้า handler ทุกตัว)
- **เวลา**: 80 KB บน Lua 5.1 = 1.04 s, บน Lua 5.4/5.5 = 0.31 s, LuaJIT = 0.02 s (Luau มี `bit32` → ใกล้เคียง 5.4)
- **ผลทดสอบ**: `python -m unittest discover -s tools/nilpack/tests` → 10/10 ผ่าน บน Lua 5.1/5.2/5.3/5.4/5.5 + LuaJIT

---

## 2) Mapping: 5 เทคนิคของ Skibidi → สถานะใน Nil v4

| # | เทคนิค Skibidi | สถานะ | รายละเอียดใน nilpack |
|---|---|---|---|
| 1 | Dynamic Key‑Derivation Setup (`__gfsetup` → `T2`) | ✅ ทำแล้ว | `lua/stage2.lua` + `packer.probe_fingerprint` |
| 2 | Mini‑VM สร้าง constants/alphabet (`b1`) | ✅ ทำแล้ว (แยกคีย์ boot / payload) | `minivm.py`, `nil_lib.vm` |
| 3 | AEAD + dictionary compression | ✅ AEAD / ⬜ LZ4 | `crypto.aead_seal/open`, `nil_lib.aead`; LZ4 = เฟส 2 |
| 4 | Lazy per‑`pc` decode + pc‑bound string nonce | 🟡 บางส่วน | pool ผูก nonce กับ `site` (≈ pc) แล้ว; instruction VM = เฟส 3 |
| 5 | Inline data ใน instruction stream | ⬜ | ต้องมี VM ก่อน (เฟส 3) |

จุดที่ **จงใจไม่ก๊อป**:

- ❌ `getfenv/setfenv` ใน hot path → ทำให้ Luau ปิด fastcall และพังบน executor บางตัว
- ❌ ก๊อป decoder เข้า handler ทุก opcode → ไฟล์บวม 2 เท่าโดยความหนาเท่าเดิม
- ❌ วาง `K_INIT` และ `K_RE` พร้อมกันใน VM เดียว (จุดตายของ Skibidi) → v4 แยกคีย์เพย์โหลดให้เกิดหลัง probe เท่านั้น

---

## 3) แผนงาน (เรียงตามผลตอบแทนต่อแรง)

### เฟส 1 — Hardening ของที่ทำแล้ว (0.5–1 วัน)
- [ ] **Self‑host**: เอา `nil_lib.lua` + `stage2.lua` ผ่าน nilpack อีกรอบ (เพิ่มชั้น +19 KB, กันคนอ่าน runtime ตรง ๆ)
- [ ] Pool length (2 ไบต์) เข้ารหัสด้วย stream เดียวกับ ciphertext (ตอนนี้รั่วขนาด string)
- [ ] เพิ่ม probe แบบ *per‑target*: `game.PlaceId`, `identifyexecutor()` hash, `#tostring(game)` ฯลฯ
      → pack แยกต่อ executor; ค่าที่คาดหวังฝังตอนแพ็ก (คนละค่าต่อ build)
- [ ] `--profile` หลายค่าพร้อมกัน: สร้างไฟล์เดียวที่ลองหลาย `F` (ลูป 2–3 ค่า) เผื่อ downgrade client

### เฟส 2 — ขนาดและคีย์ที่ผูกกับ "บริบท" (1–2 วัน)
- [ ] LZ4 block + shared dictionary ก่อน AEAD (แบบ `V.C[0]` ของ Skibidi แต่ dictionary สร้างจาก payload เดิม → compress ได้ดีกับสคริปต์เดียวกันหลายเวอร์ชัน)
- [ ] KDF 3 ชั้น: `k = ChaCha(k_boot, F) → ChaCha(·, hash(payload_version))` เพื่อผูกคีย์กับ *เนื้อหา* (แก้ payload แล้วคีย์เก่าใช้ไม่ได้)
- [ ] `--minify` ต่อ payload ก่อนแพ็ก (ตัดคอมเมนต์/ช่องว่าง) ลด 10–20%

### เฟส 3 — VM layer จริง (งานใหญ่ 1–2 สัปดาห์)
- [ ] คอมไพล์ Lua → bytecode ของ我们自己 (subset: locals, arithmetic, calls, tables, loops)
- [ ] Lazy per‑`pc` decode: `dp = v0 ^ ((abs(seed) ^ pc) & 255)` เลือก bucket, ถอด operand ณ `pc`
- [ ] `off2[pc]` assertion: ขนาด instruction ผิด → crash ทันที (กัน disassembler ที่ไล่ `pc = 1..N`)
- [ ] Inline data: บาง opcode อ่าน `pc+1..pc+cnt` เป็นข้อมูล (string/number) ไม่ใช่ instruction
- [ ] วัดผล: disassembler ที่ไม่รู้ semantics ต้องพัง, ขนาดไฟล์ ≤ 1.6× payload

### เฟส 4 — Anti‑analysis (1 สัปดาห์)
- [ ] ตรวจ `debug.sethook` / hook `string.byte` / `chacha_xor` ถูกแทนที่หรือไม่ → ป้อนผลเข้า `F`
- [ ] ตรวจว่า `load`/`loadstring` เป็น native (ไม่ถูก wrap)
- [ ] Time‑based: ตรวจว่าเวลารัน setup อยู่ในช่วงที่คาด (emulator ช้า/เร็วเกิน → คีย์เพี้ยน)
- [ ] Canary: string ปลอมที่ไม่มีใครเรียก — ถ้าถูกถอดแปลว่ามีคนกวาด pool ทั้งก้อน

---

## 4) ต่อเข้ากับ pipeline 999MS (ยังไม่ได้ต่อ — ทำเมื่อพร้อม)

จุดต่อที่สะอาดที่สุดคือ **stage bodies** ที่ถูกส่งไป obfuscate อยู่แล้ว (`scripts/*.lua`, `lib/loader.lua` ประกอบร่างเป็น stage chain ด้วย `@NEXT@`, `@NEXT_SHA@`, `@NONCE@`):

```bash
# 1) แพ็ก stage body ก่อนอัปขึ้น storage (ทำนอก CI ก็ได้)
python3 tools/nilpack/packer.py scripts/Test.lua -o /tmp/Test.nil.lua \
        --target luau --seed "$(date +%s)" --stats

# 2) ฝังแทน body เดิมในขั้นตอนที่ประกอบ stage
#    (สคริปต์ประกอบ stage ของคุณ: แทน @NEXT@ ด้วยไฟล์ที่แพ็กแล้ว)
```

ข้อควรระวังเมื่อต่อจริง:

- **`--target` ต้องตรงกับ executor ปลายทาง** — ถ้า loader รองรับหลาย executor ให้สร้างหลาย build แล้วเลือกจาก `identifyexecutor()` ฝั่ง loader (ไม่ใช่ฝั่ง body)
- **ขนาด**: ทุก stage body จะ +~19 KB จาก runtime — ถ้า stage มี 4 ชั้น = +76 KB ต่อการรัน 1 ครั้ง ควรเลือกแพ็กเฉพาะชั้นในสุด
- **เวลา boot**: วัดจริงบนมือถือก่อน (nil_lib บน Luau เร็วกว่า PUC Lua 5.1 ราว 3 เท่าจากการทดสอบ)
- **Rollback**: เก็บ `scripts/*.lua` ต้นฉบับไว้เหมือนเดิม (nilpack ไม่แก้ไฟล์ต้นทาง) — ถอดออกได้ทันที

---

## 5) Checklist ก่อนปล่อยจริง

- [ ] `python -m unittest discover -s tools/nilpack/tests` ผ่านบนเครื่องที่ใช้ปล่อย
- [ ] รันบน executor จริง 3 ตัว (คนละ bit backend) — ต้องได้ผลเหมือนต้นฉบับ
- [ ] เอา build ผิด target ไปรัน → ต้องเงียบ ไม่มี error message ให้ตามแก้
- [ ] พลิก 1 ไบต์ใน B1/B2/B3 → เงียบ
- [ ] `grep` คำสำคัญในสคริปต์ (ชื่อฟังก์ชัน, URL, คีย์) ในไฟล์ผลลัพธ์ → ต้องไม่เจอ
- [ ] วัดเวลา boot บนมือถือระดับล่าง (เป้า < 150 ms สำหรับ payload 50 KB)

---

## 6) สรุปตรง ๆ

โปรโตไทป์นี้พิสูจน์ว่า 3 ใน 5 เทคนิคที่ทำให้ Skibidi "หนา" ยกมาใช้ได้จริงในขนาดที่เล็กกว่าเดิมมาก และผลทดสอบยืนยันพฤติกรรมหลัก (คีย์เกิดตอนรัน, แพตช์แล้วเงียบ, string ผูก site, build ผูก platform)
สิ่งที่ยัง**ไม่ได้**คือกำแพงจริงของ Skibidi: **VM + per‑pc decode + inline data** ซึ่งเป็นเฟส 3 และเป็นงานคนละขนาด (สัปดาห์ ไม่ใช่วัน)
