#!/usr/bin/env bash
# Drop patient/clinic photos as images/pi41.jpeg, pi42.png, etc. then run this script.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
IMG="$ROOT/images"
CONFIG="$ROOT/js/site-config.js"

shopt -s nullglob
numbers=()
png_nums=()

for f in "$IMG"/pi*.{jpeg,jpg,JPEG,JPG,png,PNG}; do
  [[ -f "$f" ]] || continue
  base="$(basename "$f")"
  num="${base#pi}"
  num="${num%%.*}"
  [[ "$num" =~ ^[0-9]+$ ]] || continue
  numbers+=("$num")
  ext="${base##*.}"
  ext_lower="$(printf '%s' "$ext" | tr '[:upper:]' '[:lower:]')"
  if [[ "$ext_lower" == "png" ]]; then
    png_nums+=("$num")
  fi
done

if [ "${#numbers[@]}" -eq 0 ]; then
  echo "No images/piN.jpeg or piN.png files found."
  echo "Add photos to: $IMG/"
  echo "Example: pi41.jpeg, pi42.jpeg, pi43.png"
  exit 1
fi

IFS=$'\n' sorted=($(printf '%s\n' "${numbers[@]}" | sort -n -u))
unset IFS

filtered=()
for n in "${sorted[@]}"; do
  [ "$n" = "33" ] && continue
  # pi44/pi45 are pharmacy product promos — listed in SITE.homoeopathicProducts
  [ "$n" = "44" ] && continue
  [ "$n" = "45" ] && continue
  filtered+=("$n")
done

last_idx=$((${#filtered[@]} - 1))
echo "Found ${#filtered[@]} patient photos (pi${filtered[0]} … pi${filtered[$last_idx]})"

NUMS_CSV=$(IFS=,; echo "${filtered[*]}")
PNG_CSV=$(IFS=,; echo "$(printf '%s\n' "${png_nums[@]}" | sort -n -u | tr '\n' ',' | sed 's/,$//')")

python3 - "$CONFIG" "$NUMS_CSV" "$PNG_CSV" <<'PY'
import re
import sys
from pathlib import Path

config_path = Path(sys.argv[1])
nums = [int(x) for x in sys.argv[2].split(",") if x.strip()]
png_raw = sys.argv[3].strip()
png_set = sorted({int(x) for x in png_raw.split(",") if x.strip()})

text = config_path.read_text()

png_block = "const PATIENT_PHOTO_PNG = new Set([" + ", ".join(str(n) for n in png_set) + "]);"
text = re.sub(
    r"const PATIENT_PHOTO_PNG = new Set\(\[[^\]]*\]\);",
    png_block,
    text,
    count=1,
)

nums_lines = ",\n  ".join(str(n) for n in nums)
nums_block = (
    "/** pi33 was never uploaded — skip it so the gallery does not reference a missing file */\n"
    f"const PATIENT_PHOTO_NUMBERS = [\n  {nums_lines},\n];"
)
text = re.sub(
    r"/\*\* pi33 was never uploaded[^*]*\*/\s*const PATIENT_PHOTO_NUMBERS = \[[\s\S]*?\];",
    nums_block,
    text,
    count=1,
)

config_path.write_text(text)
print("Updated js/site-config.js")
PY

echo "→ Optimizing images + WebP…"
"$ROOT/scripts/optimize-images.sh"

echo ""
echo "Done. Photos appear in Gallery, Testimonials, and home gallery."
echo "Next: git add images/ images/webp/ js/site-config.js && commit && push"
