# Deployment

The app is a static SPA (`vite build` → `dist/`) with a single route and
in-page anchor navigation, so any static host works. Configs for three
common platforms are included.

## Vercel

`vercel.json` sets the build command and output directory. Import the repo
in the Vercel dashboard (or run `vercel`), no further configuration needed - it auto-detects Vite and uses `vercel.json` for the SPA rewrite.

## Netlify

`netlify.toml` sets the build command, publish directory (`dist`), Node
version, and an SPA catch-all redirect to `index.html`. Connect the repo in
the Netlify dashboard, or deploy from the CLI with `netlify deploy --prod`.

## GitHub Pages

`.github/workflows/deploy.yml` builds and deploys on every push to `main`
using `actions/deploy-pages`. One manual step is required first:

1. In the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
2. Push to `main` (or run the workflow manually from the **Actions** tab).

GitHub Pages serves project sites from `https://<user>.github.io/<repo>/`,
a sub-path - not the domain root. The workflow sets `VITE_BASE_PATH` to
`/<repo-name>/` at build time (`vite.config.ts` reads it via
`process.env.VITE_BASE_PATH`) so every asset URL resolves correctly under
that sub-path. Vercel and Netlify serve from the domain root, so they don't
set this variable and `base` falls back to `/`.

If you ever need to build for a sub-path locally (e.g. to test GitHub
Pages output before pushing):

```bash
VITE_BASE_PATH=/your-repo-name/ npm run build
npm run preview
```

## Environment variables

None are required for a basic deployment. The only build-time variable is
`VITE_BASE_PATH`, described above, and it's optional - it defaults to `/`.

## Custom domain

All three platforms support attaching a custom domain from their
dashboards; no code changes are needed for that step itself. The project
already references `https://zaheerabbas.dev/` as its canonical domain in
`index.html` (`<link rel="canonical">`, Open Graph `og:url`), `public/robots.txt`,
and `public/sitemap.xml`. If you deploy to a different domain, update all
four of those to match - otherwise search engines and social previews will
point at the wrong URL.
