# Vercel Deployment

This repository is prepared for deploying the `natural-power-maintenance` frontend on Vercel from the repository root.

## What Vercel Builds

- Install command: `pnpm install --frozen-lockfile`
- Build command: `sh -c 'pnpm --filter @workspace/natural-power-maintenance run build && if [ -d artifacts/natural-power-maintenance/dist ]; then rm -rf dist && cp -R artifacts/natural-power-maintenance/dist dist; elif [ -d dist ]; then :; else echo "Expected build output not found" >&2; exit 1; fi'`
- Output directory: `dist`

These values are defined in [`vercel.json`](file:///Users/deivyanshsingh/Downloads/Power-Group-Status/vercel.json).

## Routing

The frontend is a single-page app. `vercel.json` keeps static assets on the filesystem and rewrites non-file routes to `index.html`.

## Import Steps

1. Import the repository into Vercel.
2. Keep the project root at the repository root.
3. Vercel should pick up `vercel.json` automatically.
4. Deploy.

## API

The current maintenance page is static and does not require the API at render time.

If you later want the frontend to call an external API, deploy `artifacts/api-server` separately and point the frontend to that backend in application code or environment-specific client setup.
