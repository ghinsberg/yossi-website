#!/usr/bin/env bash
# Launch gate for the Hebrew site. Entry point; logic is in check-he-launch.mjs.
# Exits non-zero, listing file:line, while any draft or unwrapped Hebrew remains.
exec node "$(dirname "$0")/check-he-launch.mjs"
