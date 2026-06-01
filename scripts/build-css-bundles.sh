#!/usr/bin/env bash
# Concatenate CSS for fewer HTTP requests (run after editing source CSS).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
mkdir -p css/bundles

bundle() {
  local out="$1"
  shift
  {
    echo "/* Patel Clinic — generated bundle. Do not edit; run scripts/build-css-bundles.sh */"
    for f in "$@"; do
      echo ""
      echo "/* --- $f --- */"
      cat "$f"
    done
  } > "$out"
  echo "Wrote $(wc -c < "$out" | tr -d ' ') bytes -> $out"
}

bundle css/bundles/site-base.bundle.css \
  css/header.css \
  css/premium.css \
  css/footer.css

bundle css/bundles/home.bundle.css \
  css/connect-crown.css \
  css/connect.css \
  css/home-hero.css \
  css/home-prestige.css \
  css/crown.css \
  css/home-atlas.css \
  css/home-readable-heads.css \
  css/home.css \
  css/pages.css \
  css/media.css \
  css/hero.css \
  css/facilities-title-band.css
