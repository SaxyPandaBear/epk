# EPK

Electronic press kit, built with Next.js (static export) and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

## Deployment

This repo deploys to GitHub Pages as a project site at
`https://saxypandabear.github.io/epk`, via the GitHub Actions workflow in
`.github/workflows/deploy.yml`. It builds a static export (`next build` with
`output: "export"` in `next.config.ts`) and publishes it with
`actions/deploy-pages`.

One-time setup after pushing this repo to GitHub: go to
**Settings → Pages → Build and deployment → Source**, and select
**GitHub Actions**. After that, every push to `main` redeploys automatically.

The `basePath` in `next.config.ts` is set to `/epk` only during production
builds (`next build`), so `next dev` still serves from the site root.
