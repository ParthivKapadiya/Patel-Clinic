#!/usr/bin/env bash
# Compress patient review videos for faster web delivery.
# Requires: ffmpeg (brew install ffmpeg)
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
IMG="$ROOT/images"
mkdir -p "$IMG/optimized"

for f in "$IMG"/pv*.mp4; do
  [ -f "$f" ] || continue
  base="$(basename "$f" .mp4)"
  out="$IMG/optimized/${base}.mp4"
  echo "→ $base"
  ffmpeg -y -i "$f" \
    -vf "scale='min(1280,iw)':-2" \
    -c:v libx264 -crf 28 -preset slow \
    -c:a aac -b:a 96k -movflags +faststart \
    "$out"
done

echo "Done. Update SITE.reviewVideos paths in js/site-config.js to images/optimized/ when satisfied."
