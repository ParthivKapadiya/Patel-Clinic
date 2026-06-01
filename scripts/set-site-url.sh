#!/usr/bin/env bash
# Set production domain everywhere (site-config, sitemap, robots).
# Usage:
#   ./scripts/set-site-url.sh https://www.patelclinic.in
#   SITE_URL=https://www.patelclinic.in ./scripts/set-site-url.sh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

URL="${1:-${SITE_URL:-}}"
if [[ -z "$URL" && -f site.url ]]; then
  URL="$(tr -d '[:space:]' < site.url)"
fi

if [[ -z "$URL" ]]; then
  echo "Usage: $0 https://www.your-clinic-domain.com" >&2
  echo "Or create site.url with one line (https://...) or set SITE_URL env." >&2
  exit 1
fi

URL="${URL%/}"
if [[ ! "$URL" =~ ^https?:// ]]; then
  echo "Error: URL must start with http:// or https:// (got: $URL)" >&2
  exit 1
fi

CONFIG="$ROOT/js/site-config.js"
if [[ ! -f "$CONFIG" ]]; then
  echo "Error: missing $CONFIG" >&2
  exit 1
fi

if sed --version 2>/dev/null | grep -q GNU; then
  sed -i "s|siteUrl: \"[^\"]*\"|siteUrl: \"$URL\"|" "$CONFIG"
else
  sed -i '' "s|siteUrl: \"[^\"]*\"|siteUrl: \"$URL\"|" "$CONFIG"
fi

LASTMOD="$(date +%Y-%m-%d)"
PATHS=(
  "/"
  "/about.html"
  "/services.html"
  "/appointment.html"
  "/contact.html"
  "/faq.html"
  "/testimonials.html"
  "/gallery.html"
)

{
  echo '<?xml version="1.0" encoding="UTF-8"?>'
  echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
  for p in "${PATHS[@]}"; do
    prio="0.8"
    freq="monthly"
    case "$p" in
      /) prio="1.0"; freq="weekly" ;;
      /appointment.html) prio="0.95" ;;
      /about.html|/services.html|/contact.html) prio="0.9" ;;
      /faq.html) prio="0.85" ;;
      /testimonials.html|/gallery.html) freq="weekly" ;;
    esac
    echo "  <url><loc>${URL}${p}</loc><lastmod>${LASTMOD}</lastmod><changefreq>${freq}</changefreq><priority>${prio}</priority></url>"
  done
  echo "</urlset>"
} > "$ROOT/sitemap.xml"

{
  echo "User-agent: *"
  echo "Allow: /"
  echo ""
  echo "Sitemap: ${URL}/sitemap.xml"
} > "$ROOT/robots.txt"

echo "$URL" > "$ROOT/site.url"
echo "Production URL set to: $URL"
echo "  - js/site-config.js (siteUrl)"
echo "  - sitemap.xml"
echo "  - robots.txt"
echo "  - site.url"
echo ""
echo "Redeploy the site, then in Netlify set this as the primary custom domain."
