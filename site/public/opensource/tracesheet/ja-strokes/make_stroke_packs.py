#!/usr/bin/env python3
"""Builds the Japanese and Korean stroke packs for Write (v4 spec §3).

Usage:
    python3 tool/make_stroke_packs.py [--source-dir DIR] [--kanji jouyou|kyouiku]

Outputs (same `{char: {"strokes": [...], "medians": [...]}}` shape and
coordinate system as the hanzi-writer pack `assets/strokes/all.json.gz`:
1024-unit box, y up, top edge y = 900, bottom edge y = -124):

- `assets/strokes/ja.json.gz` — AnimCJK (github.com/parsimonhi/animCJK,
  pinned to ANIMCJK_SHA) `graphicsJaKana.txt` + `graphicsJa.txt`, Arphic
  Public License. Every character object is AnimCJK's own `strokes` /
  `medians` unchanged (only the redundant `character` key is dropped); the
  pack is a subset: all kana, the kanji set chosen with --kanji (default
  jōyō = 2,136, a superset of the 1,026 kyōiku kanji), 々, and every kanji
  in `assets/library/ja.json`. APL §2(a) notice: the pack carries a
  `_notice` key saying how and when it was changed.
  AnimCJK splits a kana stroke that crosses itself (あ, ぬ, ...) into parts
  that share the tail of one median; the app merges those parts back into
  one stroke at load time (`StrokePack(mergeSplitStrokes: true)`), so the
  data stays verbatim.
- `assets/strokes/ko.json.gz` — TraceSheet's own hangul stroke data,
  generated here: the 51 compatibility jamo (ㄱ…ㅣ) and the 2,350 KS X 1001
  syllables (+ any syllable in `assets/library/ko.json`). Each jamo is
  authored below as centreline polylines in a unit box, in standard
  Korean-school stroke order; syllables place the jamo in the standard
  initial / vowel / final layout boxes. Outlines are the centrelines
  stroked with a round pen (a union of segment rectangles and discs, all
  wound the same way, so the app's non-zero fill draws them solid; ㅇ is
  an annulus); the medians are the centrelines themselves.

Deterministic: fixed source commit, sorted keys, gzip mtime 0 — re-running
produces byte-identical files. Stdlib only.
"""
import argparse
import gzip
import io
import json
import math
import os
import sys
import tempfile
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ANIMCJK_SHA = "ec5e17cca76c87587790bcbce5ea0b4d4fb753d6"  # master, 2026-05-13
ANIMCJK_RAW = "https://raw.githubusercontent.com/parsimonhi/animCJK/" + ANIMCJK_SHA + "/"
ANIMCJK_FILES = ["graphicsJa.txt", "graphicsJaKana.txt", "dictionaryJa.txt", "licenses/COPYING.txt"]

# AnimCJK's dictionaryJa.txt tags kyōiku kanji g1–g6 per the 2017 list
# (1,006). The 2020 revision added these 20 (prefecture names) to grade 4.
KYOUIKU_2020_ADDITIONS = "茨媛岡潟岐熊香佐埼崎滋鹿縄井沖栃奈梨阪阜"
EXTRA_JA = "々"


# ---------------------------------------------------------------------------
# Japanese (AnimCJK)


def fetch_animcjk(source_dir):
    """Returns {name: text}; downloads into a temp dir unless cached."""
    out = {}
    for name in ANIMCJK_FILES:
        local = os.path.join(source_dir, os.path.basename(name)) if source_dir else None
        if local and os.path.exists(local):
            with open(local, encoding="utf-8") as f:
                out[name] = f.read()
            continue
        url = ANIMCJK_RAW + name
        print("downloading", url, file=sys.stderr)
        with urllib.request.urlopen(url) as r:
            text = r.read().decode("utf-8")
        out[name] = text
        if local:
            os.makedirs(source_dir, exist_ok=True)
            with open(local, "w", encoding="utf-8") as f:
                f.write(text)
    return out


def parse_lines(text):
    return [json.loads(line) for line in text.splitlines() if line.strip()]


def library_chars(lang):
    path = os.path.join(ROOT, "assets", "library", lang + ".json")
    chars = set()

    def walk(o):
        if isinstance(o, dict):
            for k, v in o.items():
                if k == "text" and isinstance(v, str):
                    chars.update(v)
                else:
                    walk(v)
        elif isinstance(o, list):
            for x in o:
                walk(x)

    with open(path, encoding="utf-8") as f:
        walk(json.load(f))
    return chars


def is_kanji(ch):
    o = ord(ch)
    return 0x4E00 <= o <= 0x9FFF or 0x3400 <= o <= 0x4DBF or 0x20000 <= o <= 0x2FFFF or 0xF900 <= o <= 0xFAFF


def build_ja(src, kanji_set):
    kana = {d["character"]: d for d in parse_lines(src["graphicsJaKana.txt"])}
    kanji = {d["character"]: d for d in parse_lines(src["graphicsJa.txt"])}
    grades = {}
    for d in parse_lines(src["dictionaryJa.txt"]):
        grades[d["character"]] = set(d.get("set", []))

    kyouiku = {c for c, s in grades.items() if s & {"g1", "g2", "g3", "g4", "g5", "g6"}}
    kyouiku |= set(KYOUIKU_2020_ADDITIONS)
    jouyou = kyouiku | {c for c, s in grades.items() if "g7" in s}
    wanted = set(jouyou if kanji_set == "jouyou" else kyouiku) | set(EXTRA_JA)
    lib = {c for c in library_chars("ja") if is_kanji(c)}
    missing_lib = sorted(c for c in lib if c not in kanji)
    wanted |= lib & set(kanji)
    missing = sorted(c for c in wanted if c not in kanji)
    if missing:
        raise SystemExit("AnimCJK lacks wanted kanji: " + "".join(missing))

    pack = {}
    for c, d in list(kana.items()) + [(c, kanji[c]) for c in wanted]:
        if len(d["strokes"]) != len(d["medians"]):
            raise SystemExit("stroke/median count mismatch for " + c)
        pack[c] = {"strokes": d["strokes"], "medians": d["medians"]}
    stats = {
        "kana": len(kana),
        "kyouiku": len(kyouiku),
        "kanji": len(wanted),
        "library_kanji": len(lib),
        "library_kanji_missing": "".join(missing_lib),
    }
    return pack, stats


JA_NOTICE = (
    "Modified by TraceSheet on 2026-09-27 (tool/make_stroke_packs.py): a subset "
    "of AnimCJK graphicsJaKana.txt + graphicsJa.txt (github.com/parsimonhi/animCJK "
    "commit " + ANIMCJK_SHA + ") -- all kana plus the selected kanji -- repacked "
    "from one-JSON-object-per-line files into one gzipped JSON object keyed by "
    "character; each character's `strokes` and `medians` are unchanged (the "
    "redundant `character` key is dropped). Distributed under the Arphic Public "
    "License (ARPHICPL.TXT); see ANIMCJK_NOTICE.txt."
)


# ---------------------------------------------------------------------------
# Korean (generated)

# Unit box coordinates: x right, y down, 0..1. A stroke is a polyline
# [(x, y), ...] or ("ring", cx, cy, r) — a circle drawn counter-clockwise
# from the top, as ㅇ is written.

def ring(cx, cy, r):
    return ("ring", cx, cy, r)


CONSONANTS = {
    "ㄱ": [[(0.08, 0.12), (0.86, 0.12), (0.80, 0.92)]],
    "ㄴ": [[(0.14, 0.08), (0.14, 0.88), (0.92, 0.88)]],
    "ㄷ": [[(0.12, 0.12), (0.88, 0.12)], [(0.14, 0.12), (0.14, 0.88), (0.92, 0.88)]],
    "ㄹ": [
        [(0.10, 0.08), (0.86, 0.08), (0.86, 0.48)],
        [(0.14, 0.48), (0.86, 0.48)],
        [(0.14, 0.48), (0.14, 0.90), (0.92, 0.90)],
    ],
    "ㅁ": [
        [(0.12, 0.10), (0.12, 0.90)],
        [(0.12, 0.10), (0.88, 0.10), (0.88, 0.90)],
        [(0.12, 0.90), (0.88, 0.90)],
    ],
    "ㅂ": [
        [(0.14, 0.06), (0.14, 0.92)],
        [(0.86, 0.06), (0.86, 0.92)],
        [(0.14, 0.48), (0.86, 0.48)],
        [(0.14, 0.92), (0.86, 0.92)],
    ],
    "ㅅ": [[(0.52, 0.06), (0.42, 0.46), (0.06, 0.92)], [(0.46, 0.48), (0.94, 0.92)]],
    "ㅇ": [ring(0.5, 0.5, 0.4)],
    "ㅈ": [[(0.10, 0.10), (0.84, 0.10), (0.46, 0.52), (0.06, 0.92)], [(0.50, 0.50), (0.94, 0.92)]],
    "ㅊ": [
        [(0.36, 0.04), (0.64, 0.04)],
        [(0.10, 0.28), (0.84, 0.28), (0.46, 0.64), (0.06, 0.94)],
        [(0.52, 0.62), (0.94, 0.94)],
    ],
    "ㅋ": [[(0.08, 0.12), (0.86, 0.12), (0.80, 0.92)], [(0.10, 0.50), (0.83, 0.50)]],
    "ㅌ": [
        [(0.12, 0.10), (0.88, 0.10)],
        [(0.12, 0.50), (0.86, 0.50)],
        [(0.12, 0.10), (0.12, 0.90), (0.92, 0.90)],
    ],
    "ㅍ": [
        [(0.06, 0.12), (0.94, 0.12)],
        [(0.32, 0.12), (0.36, 0.86)],
        [(0.68, 0.12), (0.64, 0.86)],
        [(0.04, 0.86), (0.96, 0.86)],
    ],
    "ㅎ": [[(0.36, 0.04), (0.64, 0.04)], [(0.06, 0.24), (0.94, 0.24)], ring(0.5, 0.66, 0.28)],
}

# Two jamo side by side (double consonants and final clusters).
PAIRS = {
    "ㄲ": "ㄱㄱ", "ㄸ": "ㄷㄷ", "ㅃ": "ㅂㅂ", "ㅆ": "ㅅㅅ", "ㅉ": "ㅈㅈ",
    "ㄳ": "ㄱㅅ", "ㄵ": "ㄴㅈ", "ㄶ": "ㄴㅎ", "ㄺ": "ㄹㄱ", "ㄻ": "ㄹㅁ", "ㄼ": "ㄹㅂ",
    "ㄽ": "ㄹㅅ", "ㄾ": "ㄹㅌ", "ㄿ": "ㄹㅍ", "ㅀ": "ㄹㅎ", "ㅄ": "ㅂㅅ",
}

def vstem(x):
    return [(x, 0.02), (x, 0.98)]


def hbar(x0, x1, y):
    return [(x0, y), (x1, y)]


# Vertical vowels (right of the initial); `wide` ones get a wider box.
VERTICAL = {
    "ㅏ": ([vstem(0.40), hbar(0.40, 0.84, 0.48)], False),
    "ㅑ": ([vstem(0.40), hbar(0.40, 0.84, 0.36), hbar(0.40, 0.84, 0.62)], False),
    "ㅓ": ([hbar(0.10, 0.60, 0.48), vstem(0.60)], False),
    "ㅕ": ([hbar(0.10, 0.60, 0.36), hbar(0.10, 0.60, 0.62), vstem(0.60)], False),
    "ㅣ": ([vstem(0.50)], False),
    "ㅐ": ([vstem(0.30), hbar(0.30, 0.72, 0.48), vstem(0.72)], True),
    "ㅒ": ([vstem(0.30), hbar(0.30, 0.72, 0.36), hbar(0.30, 0.72, 0.62), vstem(0.72)], True),
    "ㅔ": ([hbar(0.06, 0.44, 0.48), vstem(0.44), vstem(0.80)], True),
    "ㅖ": ([hbar(0.06, 0.44, 0.36), hbar(0.06, 0.44, 0.62), vstem(0.44), vstem(0.80)], True),
}

# Horizontal vowels (below the initial).
HORIZONTAL = {
    "ㅗ": [[(0.5, 0.12), (0.5, 0.56)], hbar(0.04, 0.96, 0.56)],
    "ㅛ": [[(0.36, 0.12), (0.36, 0.56)], [(0.64, 0.12), (0.64, 0.56)], hbar(0.04, 0.96, 0.56)],
    "ㅜ": [hbar(0.04, 0.96, 0.36), [(0.5, 0.36), (0.5, 0.92)]],
    "ㅠ": [hbar(0.04, 0.96, 0.36), [(0.36, 0.36), (0.36, 0.92)], [(0.64, 0.36), (0.64, 0.92)]],
    "ㅡ": [hbar(0.04, 0.96, 0.50)],
}

# Compound vowels: horizontal part + vertical part.
MIXED = {"ㅘ": "ㅗㅏ", "ㅙ": "ㅗㅐ", "ㅚ": "ㅗㅣ", "ㅝ": "ㅜㅓ", "ㅞ": "ㅜㅔ", "ㅟ": "ㅜㅣ", "ㅢ": "ㅡㅣ"}

INITIALS = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ"
VOWELS = "ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ"
FINALS = ["", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ",
          "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"]


def consonant_strokes(j):
    """Strokes of consonant [j] in its own unit box."""
    if j in CONSONANTS:
        return CONSONANTS[j]
    a, b = PAIRS[j]
    return [placed(s, (0.0, 0.0, 0.48, 1.0)) for s in CONSONANTS[a]] + [
        placed(s, (0.52, 0.0, 1.0, 1.0)) for s in CONSONANTS[b]
    ]


def placed(stroke, box):
    """[stroke] (unit box) mapped into [box] = (x0, y0, x1, y1)."""
    x0, y0, x1, y1 = box
    w, h = x1 - x0, y1 - y0
    if isinstance(stroke, tuple) and stroke[0] == "ellipse":
        _, cx, cy, rx, ry = stroke
        return ("ellipse", x0 + cx * w, y0 + cy * h, rx * w, ry * h)
    if isinstance(stroke, tuple):
        _, cx, cy, r = stroke
        # Keep rings round-ish in squat / narrow boxes.
        rx, ry = r * w, r * h
        m = min(rx, ry)
        return ("ellipse", x0 + cx * w, y0 + cy * h, min(rx, m * 1.3), min(ry, m * 1.3))
    return [(x0 + x * w, y0 + y * h) for x, y in stroke]


def syllable_layout(vowel, has_final):
    """Boxes (unit, y down) for initial, vowel parts and final."""
    if vowel in VERTICAL:
        wide = VERTICAL[vowel][1]
        vx = 0.42 if wide else 0.50
        if has_final:
            return {"init": (0.04, 0.06, vx + 0.04, 0.52), "v": (vx, 0.0, 0.98, 0.60), "final": (0.14, 0.64, 0.86, 0.98)}
        return {"init": (0.04, 0.14, vx + 0.04, 0.86), "v": (vx, 0.02, 0.98, 0.98)}
    if vowel in HORIZONTAL:
        if has_final:
            return {"init": (0.22, 0.02, 0.78, 0.34), "h": (0.04, 0.30, 0.96, 0.62), "final": (0.14, 0.66, 0.86, 0.98)}
        return {"init": (0.18, 0.04, 0.82, 0.50), "h": (0.02, 0.46, 0.98, 0.96)}
    wide = VERTICAL[MIXED[vowel][1]][1]
    vx = 0.50 if wide else 0.58
    if has_final:
        return {
            "init": (0.04, 0.02, vx - 0.02, 0.32),
            "h": (0.02, 0.28, vx + 0.14, 0.60),
            "v": (vx, 0.0, 0.98, 0.62),
            "final": (0.14, 0.66, 0.86, 0.98),
        }
    return {
        "init": (0.04, 0.04, vx + 0.02, 0.46),
        "h": (0.02, 0.42, vx + 0.16, 0.90),
        "v": (vx, 0.02, 0.98, 0.98),
    }


def vowel_parts(vowel):
    """[(part, strokes)] with part "v" or "h"."""
    if vowel in VERTICAL:
        return [("v", VERTICAL[vowel][0])]
    if vowel in HORIZONTAL:
        return [("h", HORIZONTAL[vowel])]
    h, v = MIXED[vowel]
    return [("h", HORIZONTAL[h]), ("v", VERTICAL[v][0])]


def syllable_strokes(ch):
    s = ord(ch) - 0xAC00
    init, vowel, final = INITIALS[s // 588], VOWELS[(s % 588) // 28], FINALS[s % 28]
    boxes = syllable_layout(vowel, bool(final))
    out = [placed(st, boxes["init"]) for st in consonant_strokes(init)]
    for part, strokes in vowel_parts(vowel):
        out += [placed(st, boxes[part]) for st in strokes]
    if final:
        out += [placed(st, boxes["final"]) for st in consonant_strokes(final)]
    return out


def jamo_strokes(j):
    """A standalone compatibility jamo, drawn large."""
    if j in VOWELS:
        if j in VERTICAL:
            return [placed(st, (0.22, 0.04, 0.78, 0.96)) for st in VERTICAL[j][0]]
        if j in HORIZONTAL:
            return [placed(st, (0.04, 0.20, 0.96, 0.80)) for st in HORIZONTAL[j]]
        h, v = MIXED[j]
        wide = VERTICAL[v][1]
        vx = 0.46 if wide else 0.54
        return [placed(st, (0.02, 0.10, vx + 0.16, 0.86)) for st in HORIZONTAL[h]] + [
            placed(st, (vx, 0.02, 0.98, 0.98)) for st in VERTICAL[v][0]
        ]
    return [placed(st, (0.12, 0.12, 0.88, 0.88)) for st in consonant_strokes(j)]


# Unit box (y down) → glyph space (1024 box, y up, top 900).
ORIGIN_X, ORIGIN_Y, SPAN = 72.0, 828.0, 880.0


def to_glyph(p):
    return (ORIGIN_X + p[0] * SPAN, ORIGIN_Y - p[1] * SPAN)


def centreline(stroke):
    """Glyph-space centreline points of a placed stroke."""
    if isinstance(stroke, tuple):
        _, cx, cy, rx, ry = stroke
        pts = []
        # Counter-clockwise on screen from the top, overlapping the start a
        # little so the ring closes.
        n = 24
        for i in range(n + 2):
            t = 2 * math.pi * i / n
            pts.append((cx - rx * math.sin(t), cy - ry * math.cos(t)))
        return [to_glyph(p) for p in pts]
    return [to_glyph(p) for p in stroke]


def disc(c, r, n=10):
    # Clockwise in y-up glyph space, like `rect` below.
    return [(c[0] + r * math.cos(-2 * math.pi * i / n), c[1] + r * math.sin(-2 * math.pi * i / n)) for i in range(n)]


def rect(a, b, r):
    dx, dy = b[0] - a[0], b[1] - a[1]
    length = math.hypot(dx, dy)
    nx, ny = -dy / length * r, dx / length * r  # left normal
    # Left side forward, right side back: clockwise in y-up space.
    return [(a[0] + nx, a[1] + ny), (b[0] + nx, b[1] + ny), (b[0] - nx, b[1] - ny), (a[0] - nx, a[1] - ny)]


def signed_area(poly):
    return sum(poly[i][0] * poly[(i + 1) % len(poly)][1] - poly[(i + 1) % len(poly)][0] * poly[i][1] for i in range(len(poly))) / 2


def outline_d(points, width):
    """SVG path `d` of [points] stroked with a round pen of [width]."""
    r = width / 2
    shapes = []
    for i in range(1, len(points)):
        shapes.append(rect(points[i - 1], points[i], r))
    for i, p in enumerate(points):
        if i in (0, len(points) - 1):
            shapes.append(disc(p, r))
            continue
        a = (p[0] - points[i - 1][0], p[1] - points[i - 1][1])
        b = (points[i + 1][0] - p[0], points[i + 1][1] - p[1])
        cos = (a[0] * b[0] + a[1] * b[1]) / (math.hypot(*a) * math.hypot(*b))
        if cos < math.cos(math.radians(20)):
            shapes.append(disc(p, r))
    parts = []
    for poly in shapes:
        assert signed_area(poly) < 0, "every sub-path must be clockwise (y up)"
        pts = [(round(x), round(y)) for x, y in poly]
        parts.append("M " + " L ".join("%d %d" % q for q in pts) + " Z")
    return " ".join(parts)


def pen_width(stroke_count):
    return 64 if stroke_count <= 3 else 56 if stroke_count <= 6 else 50 if stroke_count <= 10 else 44


def ring_d(stroke, width):
    """A ring stroke's outline: outer ellipse clockwise + inner ellipse
    counter-clockwise (y up), so the non-zero fill leaves the hole open."""
    _, cx, cy, rx, ry = stroke
    c = to_glyph((cx, cy))
    r = width / 2
    parts = []
    for grow, sign in ((r, -1), (-r, 1)):
        ax, ay = rx * SPAN + grow, ry * SPAN + grow
        pts = [(c[0] + ax * math.cos(sign * 2 * math.pi * i / 32), c[1] + ay * math.sin(sign * 2 * math.pi * i / 32)) for i in range(32)]
        parts.append("M " + " L ".join("%d %d" % (round(x), round(y)) for x, y in pts) + " Z")
    return " ".join(parts)


def glyph_json(strokes, width=None):
    w = width or pen_width(len(strokes))
    lines = [centreline(s) for s in strokes]
    return {
        "strokes": [
            ring_d(s, w) if isinstance(s, tuple) else outline_d(line, w) for s, line in zip(strokes, lines)
        ],
        "medians": [[[round(x), round(y)] for x, y in line] for line in lines],
    }


def build_ko():
    pack = {}
    for j in INITIALS + "ㄳㄵㄶㄺㄻㄼㄽㄾㄿㅀㅄ" + VOWELS:
        if j not in pack:
            pack[j] = glyph_json(jamo_strokes(j), width=72)
    syllables = {chr(c) for c in range(0xAC00, 0xD7A4) if len(chr(c).encode("euc_kr")) == 2}
    lib = {c for c in library_chars("ko") if 0xAC00 <= ord(c) <= 0xD7A3}
    extra = lib - syllables
    for ch in sorted(syllables | lib):
        pack[ch] = glyph_json(syllable_strokes(ch))
    return pack, {"jamo": len(pack) - len(syllables | lib), "ksx1001": len(syllables), "library_extra": len(extra)}


# ---------------------------------------------------------------------------


def write_pack(path, pack):
    data = json.dumps(pack, ensure_ascii=False, separators=(",", ":"), sort_keys=True).encode("utf-8")
    buf = io.BytesIO()
    with gzip.GzipFile(filename="", mode="wb", fileobj=buf, compresslevel=9, mtime=0) as g:
        g.write(data)
    with open(path, "wb") as f:
        f.write(buf.getvalue())
    return len(data), len(buf.getvalue())


def main():
    ap = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    ap.add_argument("--source-dir", help="cache dir for the AnimCJK files (downloaded if absent)")
    ap.add_argument("--kanji", choices=["jouyou", "kyouiku"], default="jouyou")
    ap.add_argument("--out-dir", default=os.path.join(ROOT, "assets", "strokes"))
    args = ap.parse_args()

    source_dir = args.source_dir or os.path.join(tempfile.gettempdir(), "tracesheet-animcjk-" + ANIMCJK_SHA[:12])
    src = fetch_animcjk(source_dir)

    ja, ja_stats = build_ja(src, args.kanji)
    ja["_notice"] = JA_NOTICE
    raw, gz = write_pack(os.path.join(args.out_dir, "ja.json.gz"), ja)
    print("ja.json.gz: %d chars, %s, %d bytes (raw %d)" % (len(ja) - 1, ja_stats, gz, raw))

    ko, ko_stats = build_ko()
    raw, gz = write_pack(os.path.join(args.out_dir, "ko.json.gz"), ko)
    print("ko.json.gz: %d chars, %s, %d bytes (raw %d)" % (len(ko), ko_stats, gz, raw))

    notice = os.path.join(ROOT, "assets", "licenses", "ANIMCJK_NOTICE.txt")
    with open(notice, "w", encoding="utf-8") as f:
        f.write(
            "assets/strokes/ja.json.gz -- Japanese stroke data for Write (TraceSheet v4)\n\n"
            + JA_NOTICE
            + "\n\nKana: %d. Kanji: %d (%s set; includes all %d kyouiku kanji).\n\n"
            % (ja_stats["kana"], ja_stats["kanji"], args.kanji, ja_stats["kyouiku"])
            + "AnimCJK's own licence notice (licenses/COPYING.txt at that commit), verbatim:\n\n"
            + src["licenses/COPYING.txt"].rstrip("\n")
            + "\n"
        )
    print("wrote", notice)

    hangul = os.path.join(ROOT, "assets", "licenses", "HANGUL_STROKES.txt")
    with open(hangul, "w", encoding="utf-8") as f:
        f.write(
            "assets/strokes/ko.json.gz -- Korean hangul stroke data for Write (TraceSheet v4)\n\n"
            "Original data made for TraceSheet by tool/make_stroke_packs.py; no third-party\n"
            "glyph outlines, fonts or stroke data were used. Each jamo is drawn as centreline\n"
            "strokes in the standard stroke order taught in Korean schools (top to bottom,\n"
            "left to right; the circle of ieung counter-clockwise from the top), and each\n"
            "syllable places its jamo in the standard initial / vowel / final layout.\n\n"
            "Characters: %d compatibility jamo + %d syllables (the KS X 1001 set).\n"
            % (ko_stats["jamo"], ko_stats["ksx1001"] + ko_stats["library_extra"])
        )
    print("wrote", hangul)


if __name__ == "__main__":
    main()
