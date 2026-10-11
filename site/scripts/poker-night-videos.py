"""Transcode Poker Night's approved promo videos for the website (run with python3; needs ffmpeg).

Sources: HQ marketing renders approved 2026-10-11 (hq video status poker-night), the /brag cut
(appfactory apps/poker-night/promo/brag-output) and the current App Store previews (pn13-media4).
Writes public/apps/poker-night/video/<id>-<v|h>-<en|zh>.mp4 + .jpg posters and
src/content/poker-night-videos.json (ids, durations, sizes) for the landing page.
"""
import json, os, subprocess, sys
HOME = os.path.expanduser("~")
HQ = f"{HOME}/orca/workspaces/hq/marketing/var/video/poker-night"
AF = f"{HOME}/orca/workspaces/appfactory"
SITE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(SITE, "public/apps/poker-night/video")
os.makedirs(OUT, exist_ok=True)

def hq(project, en, zh):
    return {"en": f"{HQ}/{project}/render/en/{en}/out.mp4", "zh": f"{HQ}/{project}/render/zh/{zh}/out.mp4"}

# id -> {orientation: {locale: source}}; orientation v = 9:16 (or the 886x1920 preview), h = 16:9
VIDEOS = {
    "pn1-settle":      {"v": hq("2.0.0-short-pn1-settle", "v11", "v10")},
    "pn2-card":        {"v": hq("2.0.0-short-pn2-card", "v8", "v8")},
    "pn3-clock":       {"v": hq("2.0.0-short-pn3-clock", "v11", "v10")},
    "pn4-walkthrough": {"h": hq("2.0.0-long-pn4-walkthrough", "v8", "v8")},
    "b1-settle":       {"v": hq("2.0.0-short-b1-settle", "v8", "v7"), "h": hq("2.0.0-long-b1-settle", "v7", "v7")},
    "b2-card":         {"v": hq("2.0.0-short-b2-card", "v9", "v9"), "h": hq("2.0.0-long-b2-card", "v9", "v9")},
    "b3-clock":        {"v": hq("2.0.0-short-b3-clock", "v7", "v7"), "h": hq("2.0.0-long-b3-clock", "v7", "v7")},
    "b4-night":        {"v": hq("2.0.0-short-b4-night", "v9", "v9"), "h": hq("2.0.0-long-b4-night", "v8", "v8")},
    "b5-study":        {"v": hq("2.0.0-short-b5-study", "v13", "v13"), "h": hq("2.0.0-long-b5-study", "v13", "v13")},
    "brag-night":      {"v": {"en": f"{AF}/poker-night/apps/poker-night/promo/brag-output/social/poker-night-9x16-en.mp4",
                              "zh": f"{AF}/poker-night/apps/poker-night/promo/brag-output/social/poker-night-9x16-zh.mp4"},
                        "h": {"en": f"{AF}/poker-night/apps/poker-night/promo/brag-output/social/poker-night-16x9-en.mp4",
                              "zh": f"{AF}/poker-night/apps/poker-night/promo/brag-output/social/poker-night-16x9-zh.mp4"}},
    "preview-store":   {"v": {"en": f"{AF}/pn13-media4/apps/poker-night/promo/out/asc/en-US/iphone69-01-preview.mp4",
                              "zh": f"{AF}/pn13-media4/apps/poker-night/promo/out/asc/zh-Hans/iphone69-01-preview.mp4"}},
    "preview-brag":    {"v": hq("2.0.0-preview-bp-preview", "v5", "v5")},
    "preview-brag2":   {"v": {"en": f"{AF}/poker-night/apps/poker-night/promo/brag-output/asc/en-US/iphone69-preview.mp4",
                              "zh": f"{AF}/poker-night/apps/poker-night/promo/brag-output/asc/zh-Hans/iphone69-preview.mp4"}},
}

def probe(p):
    r = subprocess.run(["ffprobe", "-v", "error", "-select_streams", "v:0", "-show_entries", "stream=width,height",
                        "-show_entries", "format=duration", "-of", "json", p], capture_output=True, text=True, check=True)
    j = json.loads(r.stdout); s = j["streams"][0]
    return s["width"], s["height"], float(j["format"]["duration"])

manifest = {}
for vid, orients in VIDEOS.items():
    manifest[vid] = {}
    for o, locs in orients.items():
        manifest[vid][o] = {}
        for loc, src in locs.items():
            if not os.path.exists(src):
                sys.exit(f"missing {src}")
            w, h, dur = probe(src)
            # web size: long edge 1280
            scale = "scale=-2:1280" if h >= w else "scale=1280:-2"
            base = f"{vid}-{o}-{loc}"
            mp4 = os.path.join(OUT, base + ".mp4"); jpg = os.path.join(OUT, base + ".jpg")
            if not os.path.exists(mp4) or os.path.getmtime(mp4) < os.path.getmtime(src):
                subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", src, "-vf", f"{scale},fps=30", "-c:v", "libx264",
                                "-preset", "slow", "-crf", "27", "-profile:v", "high", "-pix_fmt", "yuv420p",
                                "-c:a", "aac", "-b:a", "112k", "-ac", "2", "-movflags", "+faststart", mp4], check=True)
                t = min(2.4, dur * 0.3)
                subprocess.run(["ffmpeg", "-v", "error", "-y", "-ss", f"{t:.2f}", "-i", src, "-frames:v", "1",
                                "-vf", scale.replace("1280", "960"), "-q:v", "4", jpg], check=True)
            ow, oh, _ = probe(mp4)
            manifest[vid][o][loc] = {"src": f"/apps/poker-night/video/{base}.mp4", "poster": f"/apps/poker-night/video/{base}.jpg",
                                     "width": ow, "height": oh, "duration": round(dur, 1),
                                     "bytes": os.path.getsize(mp4)}
            print(f"{base}: {ow}x{oh} {dur:.1f}s {os.path.getsize(mp4)/1e6:.1f} MB")

with open(os.path.join(SITE, "src/content/poker-night-videos.json"), "w") as f:
    json.dump(manifest, f, indent=1)
