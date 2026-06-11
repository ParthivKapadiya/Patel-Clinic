#!/usr/bin/env bash
# Compress patient review videos for faster web delivery.
# Requires: ffmpeg (brew install ffmpeg)
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
IMG="$ROOT/images"
mkdir -p "$IMG/optimized"

shopt -s nullglob
for f in "$IMG"/pv*.mp4; do
  base="$(basename "$f" .mp4)"
  out="$IMG/optimized/${base}.mp4"
  echo "→ $base"
  ffmpeg -y -i "$f" \
    -vf "scale='min(1280,iw)':-2" \
    -c:v libx264 -crf 28 -preset slow \
    -c:a aac -b:a 96k -movflags +faststart \
    "$out"
  ffmpeg -y -ss 00:00:01 -i "$out" -vframes 1 -q:v 3 "$IMG/optimized/${base}-poster.jpg"
done

echo "Done. Posters saved as images/optimized/pvN-poster.jpg"
echo "Tip: for batch uploads use ./scripts/add-review-videos.sh"
