TraceSheet -- Japanese stroke data (modified AnimCJK), published under the Arphic Public License
====================================================================================

TraceSheet (iOS, by App Factory) bundles a Japanese stroke-order data pack for its
"Write" mode. The pack is a modified work of AnimCJK's graphicsJaKana.txt and
graphicsJa.txt (https://github.com/parsimonhi/animCJK, commit
ec5e17cca76c87587790bcbce5ea0b4d4fb753d6). As section 2(b) of the Arphic Public
License asks, the modified pack is made freely available here.

Files in this directory:
  ja.json.gz            the pack exactly as shipped in the app (gzipped JSON keyed by
                        character; each entry's "strokes" and "medians" unchanged from AnimCJK)
  ANIMCJK_NOTICE.txt    how and when it was modified, plus AnimCJK's licence notice verbatim
  ARPHICPL.TXT          the Arphic Public License
  make_stroke_packs.py  the script that builds the pack from AnimCJK's files

What was changed: a subset (all kana + the jouyou kanji) was selected and repacked from
one-JSON-object-per-line files into one gzipped JSON object; the redundant "character"
key was dropped. No stroke outline or median was altered.

Distributed under the Arphic Public License (see ARPHICPL.TXT), with NO WARRANTY.
Contact: https://tracesheet.appfactory.sg/support
