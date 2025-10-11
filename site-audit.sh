#!/usr/bin/env bash
set -euo pipefail

# === Settings ===
REPO_URL="https://github.com/soumodip-m/rising-star-skate-hub.git"
REPO_DIR="rising-star-skate-hub"
REPORT="audit-report.txt"

# === 0) Clone if needed ===
if [ ! -d "$REPO_DIR/.git" ]; then
  echo "Cloning $REPO_URL ..."
  git clone "$REPO_URL"
fi
cd "$REPO_DIR"

echo "==> Scanning internal links in src/ and public/ ..."

# === 1) Collect internal links (href="/..." or to="/...") ===
LINKS=$(
  { grep -RhoE 'href="\/[^"#?]+' src public 2>/dev/null || true; \
    grep -RhoE 'to="\/[^"#?]+' src 2>/dev/null || true; } \
  | sed -E 's/^(href|to)=\"//g' \
  | grep -vE '^https?://' \
  | grep -vE '^(mailto:|tel:)' \
  | grep -vE '^\/?#' \
  | sed -E 's/[\" ]$//g' \
  | sed -E 's/\/+$//g' \
  | sed -E 's/^$/\//g' \
  | sort -u
)

if [ -z "${LINKS}" ]; then
  echo "No internal links found. (Nothing to audit.)"
  exit 0
fi

# === 2) Map a URL path to expected static file location under public/ ===
map_target() {
  local p="$1"
  local rel="${p#/}"
  if [[ "$rel" == *.* ]]; then
    echo "public/$rel"
  else
    echo "public/$rel/index.html"
  fi
}

# === 3) Build the report ===
: > "$REPORT"
{
  echo "AUDIT REPORT — Static page coverage"
  echo "Repository: $REPO_URL"
  echo "Timestamp:  $(date)"
  echo "Note: OK = static file exists under public/ ; MISSING = no static file found (may be SPA-only route)"
  echo "--------------------------------------------------------------------------"
} >> "$REPORT"

MISSING=0
OK=0

for p in $LINKS; do
  if [ -z "$p" ] || [ "$p" = "/" ]; then
    continue
  fi
  target="$(map_target "$p")"
  if [ -f "$target" ]; then
    printf "OK       %-40s -> %s\n" "$p" "$target" | tee -a "$REPORT"
    OK=$((OK+1))
  else
    printf "MISSING  %-40s -> %s\n" "$p" "$target" | tee -a "$REPORT"
    MISSING=$((MISSING+1))
  fi
done

{
  echo "--------------------------------------------------------------------------"
  echo "Summary: OK=$OK | MISSING=$MISSING"
  echo "Report saved to: $REPORT"
} | tee -a "$REPORT"

echo
echo "✅ Audit complete. (No changes were made to your repository.)"
echo "   Open ${REPO_DIR}/${REPORT} to review missing paths."
