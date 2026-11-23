#!/usr/bin/env bash
# Prints the sorted route paths from the last `next build` output.
# Usage: npm run build > build.log 2>&1 && scripts/list-routes.sh build.log
# If no file is given, reads stdin.
set -euo pipefail
LC_ALL=en_US.UTF-8 sed -nE 's/^[┌├└│ ]*[○●ƒ] +(\/[^ ]*).*/\1/p' "${1:-/dev/stdin}" | sort -u
