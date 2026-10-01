# Architecture

## Stack

React 19 + TypeScript, built with Vite 8. Styling is Tailwind CSS v4
(CSS-first config via `@theme` in `src/index.css`, no `tailwind.config.js`
needed). Animation is GSAP + ScrollTrigger. Icons are Font Awesome via
`@fortawesome/react-fontawesome`. Linting is oxlint - there is no ESLint
config in this project by design.

## Folder structure

```text
src/
├── assets/            Optimized images (WebP), organized by use
├── components/
│   ├── ui/             Shared primitives: SectionHeading, Divider,
│   │                    BracketButton, PillButton, SocialLinks, Container
│   ├── Header/          Fancy header (in the hero) + persistent scroll
│   │                    header, sharing one HeaderBarContent; mobile
│   │                    slide-in panel; logo
│   ├── Hero/            Diagonal split hero
│   ├── About/           About Me section, plus the black "How I Work" intro
│   │                    band above it
│   ├── Skills/          Category → skill-name lists
│   ├── Experience/      Scroll-animated timeline
│   ├── Projects/        Horizontal carousel + card
│   ├── Testimonials/    Single-item rotating carousel
│   ├── Contact/         Dual-mode (Email/WhatsApp) form, validation wiring,
│   │                    toast notifications
│   └── Footer/
├── data/                Content - the only files you edit to update copy
├── hooks/                useScrollReveal, useMediaQuery, useLockBodyScroll,
│                          usePrefersReducedMotion
├── lib/                  gsap.ts (plugin registration), validation.ts
├── types/                Shared TypeScript interfaces for every data shape
├── App.tsx               Loader → main content orchestration
└── main.tsx              React root
```

## Data flows one way: `data/` → components

Every section component imports its content from `src/data/*.ts` and maps
over it - no section has hardcoded copy, and no section assumes a fixed
number of items. Concretely:

- **Skills** renders however many categories exist in `skills.ts`, each with
  however many skill names, via nested `.map()` calls.
- **Experience** renders the timeline connector as `absolute inset-y` inside
  a `position: relative` wrapper around the whole list, so its height is
  always exactly the height of however many `<li>` entries exist - nothing
  is pinned to a pixel count.
- **Projects** computes carousel bounds (`maxIndex`) from
  `projects.length` and the current `visibleCount` (1 or 3), so it degrades
  correctly whether there's 1 project or 14.
- **Testimonials** filters `testimonials.ts` down to entries with non-empty
  `quote` text at render time, and renders nothing if none qualify yet.
- **Header** logic is split from its markup: `HeaderBarContent.tsx` renders
  the logo, nav links, and Contact button once, and both `Header.tsx` (the
  fancy header inside the hero, never fixed) and `StickyHeader.tsx` (the
  persistent bar that slides in once the user has scrolled past ~50% of the
  hero) render it with different positioning/colors, so the two can never
  drift out of sync with each other's content.

See `docs/CONTENT_MANAGEMENT.md` for the practical "how do I add one more X"
walkthrough.

## Component conventions

- Components are function components, one per file, named exports.
- Presentational primitives live in `components/ui/`; section components
  compose them and reach into `data/` directly (no prop-drilling content
  through App.tsx).
- Section wrappers (`About.tsx`, `Skills.tsx`, etc.) own their `<section id>`
  and background color; nav anchors (`#about`, `#skills`, ...) target those
  ids directly, so smooth-scroll navigation needs no routing library.
- There is intentionally no router. The site is a single route with
  in-page anchors, so `react-router-dom` was removed after scaffolding
  rather than left in unused.

## Loader → content handoff

`App.tsx` renders `<Loader>` (fixed overlay) while `loading` is `true`, and
always renders the main content underneath it at `opacity-0` so images can
start fetching immediately. `Loader` resolves once *both* a minimum visible
time and the window `load` event have fired (with a hard 4s cap so it can
never get stuck), then fades itself out and calls `onComplete`, which flips
`loading` to `false` and cross-fades the main content in.
