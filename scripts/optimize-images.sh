#!/usr/bin/env bash
# Resize large photos and create WebP copies for faster LCP (macOS sips + cwebp if available).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
IMG="$ROOT/images"
WEBP="$IMG/webp"
mkdir -p "$WEBP"

max_width="${MAX_WIDTH:-1400}"
jpeg_quality="${JPEG_QUALITY:-82}"

shopt -s nullglob
for src in "$IMG"/*.{jpeg,jpg,JPEG,JPG,png,PNG}; do
  [[ -f "$src" ]] || continue
  base="$(basename "$src")"
  name="${base%.*}"
  ext="${base##*.}"
  ext_lower="$(printf '%s' "$ext" | tr '[:upper:]' '[:lower:]')"

  w=$(sips -g pixelWidth "$src" 2>/dev/null | awk '/pixelWidth/{print $2}')
  if [[ -n "$w" && "$w" -gt "$max_width" ]]; then
  if [[ "$ext_lower" == "png" ]]; then
      sips -Z "$max_width" "$src" >/dev/null
    else
      sips -Z "$max_width" -s format jpeg -s formatOptions "$jpeg_quality" "$src" >/dev/null
    fi
    echo "Resized $base (was ${w}px wide)"
  fi

  if command -v cwebp >/dev/null 2>&1; then
    out="$WEBP/${name}.webp"
    cwebp -q "${WEBP_QUALITY:-80}" "$src" -o "$out" >/dev/null 2>&1 && echo "WebP $out"
  fi
done

# Priority LCP assets (hero + above-fold home)
for f in patel4 pi31 pi2 pi3 patel1; do
  for ext in jpeg jpg png; do
    src="$IMG/${f}.${ext}"
    [[ -f "$src" ]] || continue
    if command -v cwebp >/dev/null 2>&1; then
      cwebp -q 82 "$src" -o "$WEBP/${f}.webp" >/dev/null 2>&1 && echo "LCP webp: ${f}.webp"
    fi
    break
  done
done

echo "Done. WebP folder: $WEBP"
