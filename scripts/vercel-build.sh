#!/usr/bin/env bash
set -euo pipefail

pnpm --filter @workspace/natural-power-maintenance run build

# Vercel expects a root-level output directory (per `vercel.json#outputDirectory`).
if [[ -d "artifacts/natural-power-maintenance/dist" ]]; then
  rm -rf dist
  cp -R "artifacts/natural-power-maintenance/dist" dist
elif [[ -d "dist" ]]; then
  : # already in the expected place
else
  echo "Expected build output not found (dist)" >&2
  exit 1
fi
