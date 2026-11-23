#!/usr/bin/env bash
# Launch gate for the Hebrew site: fails while any draft placeholder remains.
# Lists file:line for every ph( call and every <Placeholder under the Hebrew sources.
set -u
cd "$(dirname "$0")/.."

hits=$(grep -rnE --include='*.ts' --include='*.tsx' '(^|[^A-Za-z0-9_])ph\(|<Placeholder' \
  data/he "app/(he)" components/he 2>/dev/null \
  | grep -vE '\.test\.tsx?:' \
  | grep -vE 'export function ph\(' || true)

if [ -n "$hits" ]; then
  echo "Hebrew site is NOT launch-ready. Drafts and placeholders remaining:"
  echo "$hits"
  echo
  echo "Count: $(echo "$hits" | wc -l | tr -d ' ')"
  exit 1
fi
echo "No placeholders or drafts found under data/he, app/(he), components/he."
