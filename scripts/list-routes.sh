#!/usr/bin/env bash
# Prints the app routes of the last `next build`, one sorted public route
# pattern per line (top-level patterns, dynamic segments as in
# /keynotes/[slug]; route-group segments like (en) never appear).
# Source: .next/app-path-routes-manifest.json, written by `next build`.
# Usage: npm run build && scripts/list-routes.sh
# Exits non-zero if the manifest is missing or yields zero routes.
set -euo pipefail
cd "$(dirname "$0")/.."
manifest=".next/app-path-routes-manifest.json"
if [ ! -f "$manifest" ]; then
  echo "list-routes: $manifest not found; run 'npm run build' first" >&2
  exit 1
fi
routes=$(node -e '
const m = JSON.parse(require("fs").readFileSync(process.argv[1], "utf8"));
const r = [...new Set(Object.values(m))].sort();
if (r.length) console.log(r.join("\n"));
' "$manifest")
if [ -z "$routes" ]; then
  echo "list-routes: no routes found in $manifest" >&2
  exit 1
fi
printf '%s\n' "$routes"
