#!/usr/bin/env bash
set -euo pipefail

# === Settings ===
REPO_URL="https://github.com/soumodip-m/rising-star-skate-hub.git"
REPO_DIR="rising-star-skate-hub"
REPORT="audit-report.txt"
SITE_HOST="${SITE_HOST:-https://rsaindia.co.in}"

# === 0) Ensure repo present ===
if [ ! -d "$REPO_DIR/.git" ]; then
  echo "Cloning $REPO_URL ..."
  git clone "$REPO_URL"
fi
cd "$REPO_DIR"

# Detect default branch
DEFAULT_BRANCH="$(git remote show origin | sed -n '/HEAD branch/s/.*: //p')"
DEFAULT_BRANCH="${DEFAULT_BRANCH:-main}"

# === 1) Check report ===
if [ ! -f "$REPORT" ]; then
  echo "ERROR: $REPORT not found. Run your audit first."
  exit 1
fi

MISSING_COUNT=$(grep -c '^MISSING' "$REPORT" || true)
if [ "$MISSING_COUNT" -eq 0 ]; then
  echo "No MISSING entries in $REPORT. Nothing to fix."
  exit 0
fi

echo "==> Found $MISSING_COUNT MISSING paths."
mkdir -p public/images

# === 2) Images ===
curl -sfLo public/images/hero-roller.jpg https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=1920&auto=format&fit=crop || true
curl -sfLo public/images/training-rink.jpg https://images.unsplash.com/photo-1607346256330-dee7af15f7d5?q=80&w=1920&auto=format&fit=crop || true
curl -sfLo public/images/coach-team.jpg https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1920&auto=format&fit=crop || true
curl -sfLo public/images/events-medals.jpg https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1920&auto=format&fit=crop || true
curl -sfLo public/images/facilities-gym.jpg https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1920&auto=format&fit=crop || true
curl -sfLo public/images/pool-cross-training.jpg https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?q=80&w=1920&auto=format&fit=crop || true

# === 3) Helper ===
make_page () {
  local url_path="$1"
  local title="$2"
  local description="$3"
  local hero="$4"
  local rel="${url_path#/}"
  local target="public/${rel}/index.html"
  mkdir -p "$(dirname "$target")"
  if [ -f "$target" ]; then echo "Skip (exists): $target"; return; fi
  cat > "$target" <<EOF
<!doctype html>
<html lang='en'><head>
<meta charset='utf-8'><meta name='viewport' content='width=device-width,initial-scale=1'>
<title>${title}</title>
<meta name='description' content='${description}'>
<link rel='preload' as='image' href='${hero}'>
<style>body{font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;margin:0;color:#111;background:#fff;}h1{font-size:clamp(28px,4vw,40px);margin:12px 0 6px;}p{line-height:1.6}.container{max-width:1120px;margin:0 auto;padding:18px 16px}.hero{position:relative;overflow:hidden;border-radius:14px;background:#000}.hero img{width:100%;height:360px;object-fit:cover;opacity:.9}.hero .overlay{position:absolute;inset:0;display:flex;align-items:flex-end;background:linear-gradient(180deg,rgba(0,0,0,0)40%,rgba(0,0,0,.55)100%);color:#fff;padding:22px}</style>
</head><body>
<main class='container'><section class='hero'><img src='${hero}' alt='Hero'><div class='overlay'><h1>${title}</h1></div></section><p>${description}</p></main></body></html>
EOF
  echo "Created: $target"
}

# === 4) Parse ===
MISSING_PATHS=$(awk '/^MISSING/ {print $2}' "$REPORT" | sort -u)
for p in $MISSING_PATHS; do
  hero="/images/hero-roller.jpg"
  case "$p" in
    */about*) hero="/images/coach-team.jpg";;
    */admission*) hero="/images/events-medals.jpg";;
    */event*) hero="/images/events-medals.jpg";;
    */facilit*) hero="/images/facilities-gym.jpg";;
    */gallery*) hero="/images/hero-roller.jpg";;
    */contact*) hero="/images/pool-cross-training.jpg";;
    */skate*) hero="/images/training-rink.jpg";;
  esac
  TITLE="RSA – $(echo "${p#/}" | tr '/' ' ' | sed -E 's/\b[a-z]/\u&/g')"
  DESC="Auto-generated page for ${p} to prevent blank/404."
  make_page "$p" "$TITLE" "$DESC" "$hero"
done

# === 5) Robots & Sitemap ===
cat > public/robots.txt <<ROBOTS
User-agent: *
Allow: /
Sitemap: ${SITE_HOST}/sitemap.xml
ROBOTS

{ echo '<?xml version="1.0" encoding="UTF-8"?>'; echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
find public -type f -name index.html | sed -E "s|^public/||" | while read p; do echo "  <url><loc>${SITE_HOST}/$(echo "$p"|sed 's/index.html$//')</loc></url>"; done;
echo '</urlset>'; } > public/sitemap.xml

git add public
git commit -m 'Create static pages for missing routes; add robots.txt & sitemap.xml' || true
git push origin "HEAD:${DEFAULT_BRANCH}"

echo "✅ Done. Missing pages created under /public, domain ${SITE_HOST}."
