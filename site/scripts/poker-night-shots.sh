#!/bin/bash
# Poker Night 2.1 site screenshots: raw simulator PNGs (1320x2868) -> 720x1564 JPEG q82.
# Usage: scripts/poker-night-shots.sh <store_shots/raw dir>   (holds en/iphone69 and zh/iphone69)
set -euo pipefail
RAW="${1:?usage: poker-night-shots.sh <raw dir>}"
OUT="$(cd "$(dirname "$0")/.." && pwd)/public/apps/poker-night/v21"
IDS="01-tonight 02-live 03-settle 04-hand 04-hand-image 05-theme-soda 05-theme-milk 05-theme-fortune 06-wire 06-wire-reader 07-planning 08-pro"
for lang in en zh; do
  mkdir -p "$OUT/$lang"
  for id in $IDS; do
    src="$RAW/$lang/iphone69/$id.png"
    [ -f "$src" ] || { echo "skip $lang/$id (no raw)"; continue; }
    sips -Z 1564 -s format jpeg -s formatOptions 82 "$src" --out "$OUT/$lang/$id.jpg" >/dev/null
  done
done
ls "$OUT"/*
