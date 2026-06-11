#!/usr/bin/env bash
# Add patient review videos: drop raw files as images/pv15.mp4 … then run this script.
# Requires: ffmpeg (brew install ffmpeg)
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
IMG="$ROOT/images"
OPT="$IMG/optimized"
mkdir -p "$OPT"

compress_one() {
  local in="$1"
  local base
  base="$(basename "$in" .mp4)"
  local out="$OPT/${base}.mp4"
  echo "→ Compressing $base"
  ffmpeg -y -i "$in" \
    -vf "scale='min(1280,iw)':-2" \
    -c:v libx264 -crf 28 -preset fast \
    -c:a aac -b:a 96k -movflags +faststart \
    "$out"
  poster_for "$out"
}

poster_for() {
  local mp4="$1"
  local base
  base="$(basename "$mp4" .mp4)"
  local poster="$OPT/${base}-poster.jpg"
  if [ -f "$poster" ]; then
    return 0
  fi
  echo "  Poster $base"
  ffmpeg -y -ss 00:00:01 -i "$mp4" -vframes 1 -q:v 3 "$poster" 2>/dev/null
}

# Raw uploads in images/
shopt -s nullglob
for f in "$IMG"/pv*.mp4; do
  compress_one "$f"
done

# Already in optimized/ (e.g. dropped there directly) — compress if huge, always ensure poster
for f in "$OPT"/pv*.mp4; do
  base="$(basename "$f" .mp4)"
  size_mb=$(( $(stat -f%z "$f" 2>/dev/null || stat -c%s "$f") / 1048576 ))
  if [ "$size_mb" -gt 24 ]; then
    echo "→ Re-compressing large file $base (${size_mb}MB)"
    tmp="$OPT/.${base}-work.mp4"
    ffmpeg -y -i "$f" \
      -vf "scale='min(1280,iw)':-2" \
      -c:v libx264 -crf 28 -preset fast \
      -c:a aac -b:a 96k -movflags +faststart \
      "$tmp"
    mv "$tmp" "$f"
  fi
  poster_for "$f"
done

echo ""
echo "Done. Registered in js/site-config.js as SITE.reviewVideos."
echo "Next: git add images/optimized/pv*.mp4 images/optimized/pv*-poster.jpg && commit && push"
