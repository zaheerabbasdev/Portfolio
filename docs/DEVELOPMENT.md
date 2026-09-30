# Development

## Prerequisites

- Node.js 20+
- npm 10+

## Commands

```bash
npm install       # install dependencies
npm run dev       # start the Vite dev server (http://localhost:5173)
npm run lint      # run oxlint
npm run build     # type-check (tsc -b) then production build to dist/
npm run preview   # serve the production build locally
```

## Before committing

Run both of these - CI (`.github/workflows/deploy.yml`) runs the same
checks and will fail the build otherwise:

```bash
npx oxlint
npm run build
```

## Linting

This project uses **oxlint**, not ESLint - there is no `.eslintrc` and none
should be added. oxlint is configured with its defaults; if you need to
adjust a rule, add an `.oxlintrc.json` rather than reaching for ESLint.

## Path aliases

`@/*` resolves to `src/*` (configured in both `vite.config.ts` and
`tsconfig.app.json`). Prefer `@/components/...`, `@/data/...`, etc. over
relative `../../` imports.

## Adding a new section

1. Create `src/components/<Name>/<Name>.tsx`.
2. If it needs content, add a typed data file in `src/data/` and a matching
   interface in `src/types/index.ts`.
3. Give the section's root `<section>` an `id` and add a matching entry to
   `src/components/Header/navLinks.ts` if it should appear in navigation.
4. Import and render it from `src/App.tsx` in the desired scroll order.
5. If it should animate in on scroll, wrap its reveal targets with
   `data-reveal` and call `useScrollReveal({ itemSelector: '[data-reveal]' })`
   the same way `About.tsx` or `Skills.tsx` do.

## Browser support

Targets evergreen browsers (Chrome, Firefox, Safari, Edge - last 2
versions). No IE11/legacy support; the build targets `ES2023` per
`tsconfig.app.json`.

## Troubleshooting

- **Fonts look wrong / fall back to system sans** - check that
  `fonts.googleapis.com` and `fonts.gstatic.com` aren't blocked by an
  ad-blocker or offline dev environment; there's no local font fallback
  bundled.
- **Mobile nav panel appears behind other content** - it's rendered with
  `z-50`/`z-40`; if you add a new fixed-position element with a higher
  z-index, it will need to sit below that.
- **GSAP animations don't run in dev but do in build (or vice versa)** -
  check `usePrefersReducedMotion()`; most animation hooks short-circuit
  when the OS-level reduced-motion setting is on, which some browsers'
  dev tools let you simulate and forget to turn back off.
