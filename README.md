# Zaheer Abbas | Portfolio

Personal portfolio site for Zaheer Abbas, a full-stack developer. Built
from scratch as a modern React/TypeScript rebuild of a supplied static
design reference (diagonal-split monochrome hero, boxed section headings,
bracketed buttons) - see `docs/DESIGN_SYSTEM.md` for the full visual
language.

**Live preview:** run locally with the steps below (no live deployment URL
yet - see `docs/DEPLOYMENT.md` once you've deployed).

## Stack

React 19 · TypeScript · Vite 8 · Tailwind CSS v4 · GSAP (+ ScrollTrigger) ·
Font Awesome · oxlint

## Quick start

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server with hot reload |
| `npm run lint` | Run oxlint |
| `npm run build` | Type-check and build to `dist/` |
| `npm run preview` | Serve the production build locally |

## Project structure

```text
src/
├── assets/       Optimized images
├── components/   One folder per section/primitive (see docs/ARCHITECTURE.md)
├── data/         All editable content - see docs/CONTENT_MANAGEMENT.md
├── hooks/        Scroll reveal, media query, reduced motion, scroll lock
├── lib/          GSAP setup, form validation
└── types/        Shared TypeScript interfaces
```

## Documentation

- **[docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)** - stack, folder layout,
  data-flow and component conventions
- **[docs/CONTENT_MANAGEMENT.md](docs/CONTENT_MANAGEMENT.md)** - how to
  edit personal info, projects, skills, experience, testimonials and the
  contact form without touching component code
- **[docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md)** - color tokens,
  typography, spacing/layout patterns, motion principles
- **[docs/DEVELOPMENT.md](docs/DEVELOPMENT.md)** - local setup, linting,
  path aliases, how to add a new section
- **[docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)** - Vercel, Netlify and
  GitHub Pages, including the GitHub Pages sub-path base-URL setup

## Before this goes live

- [ ] Add a real Formspree endpoint in `src/data/contact.ts`
      (`formspreeEndpoint: ''` - see `docs/CONTENT_MANAGEMENT.md`)
- [ ] Fill in testimonial quotes in `src/data/testimonials.ts` - the
      section stays hidden until at least one has real text
- [ ] Point `<link rel="canonical">` / Open Graph tags in `index.html` at
      the real production domain
- [ ] Pick a deployment target and follow `docs/DEPLOYMENT.md`

## License

MIT for the source code, with content excluded - see [LICENSE](LICENSE).
