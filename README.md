# Zaheer Abbas - Portfolio

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Built with Vite](https://img.shields.io/badge/built%20with-Vite-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind%20CSS-v4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deploy to GitHub Pages](https://github.com/stackiid/zaheer-abbas-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/stackiid/zaheer-abbas-portfolio/actions/workflows/deploy.yml)

A single-page portfolio site for Zaheer Abbas, a full-stack developer, built
with React, TypeScript, Tailwind CSS v4, and GSAP. Monochrome, editorial
visual identity; a diagonal split hero; a dual-mode (Email/WhatsApp) contact
form; and a persistent navigation bar that takes over once the hero scrolls
out of view.

**Live:** [stackiid.github.io/zaheer-abbas-portfolio](https://stackiid.github.io/zaheer-abbas-portfolio/)

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Contact Form](#contact-form)
- [Resume](#resume)
- [Responsive Design](#responsive-design)
- [Accessibility](#accessibility)
- [SEO](#seo)
- [Deployment](#deployment)
- [Performance Considerations](#performance-considerations)
- [Browser Support](#browser-support)
- [Documentation](#documentation)
- [Future Improvements](#future-improvements)
- [About the Developer](#about-the-developer)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- **Diagonal split hero** - a black/white clip-path layout with a scroll-
  triggered intro animation (GSAP), built to respect
  `prefers-reduced-motion`.
- **Two-header navigation system** - a transparent header inside the hero,
  and a persistent black header that slides in once the user has scrolled
  past roughly half the hero's height, sharing one `HeaderBarContent`
  component so their content can't drift apart.
- **Dual-mode contact form** - a segmented Email/WhatsApp switch. Email
  submits to Formspree; WhatsApp opens `wa.me` with a pre-filled message
  built from the visitor's own input. See [Contact Form](#contact-form).
- **Content-driven sections** - About, Skills, Experience, Projects, and
  Testimonials all render from typed data files in `src/data/`, so updating
  copy doesn't require touching component code (see
  [`docs/CONTENT_MANAGEMENT.md`](docs/CONTENT_MANAGEMENT.md)).
- **Carousels with keyboard, swipe, and autoplay** - the Projects carousel
  and the Testimonials carousel both support arrow-key navigation, touch
  swipe, and (for Testimonials) a 20-second auto-advance that pauses for
  reduced-motion users.
- **Mobile navigation drawer** - a left-side slide-in panel (GSAP-animated)
  with its own Resume CTA and social links, reusing the same nav data as
  desktop.

## Tech Stack

| Category         | Choice                                               |
| ----------------- | ----------------------------------------------------- |
| Framework         | [React 19](https://react.dev/)                        |
| Language          | [TypeScript](https://www.typescriptlang.org/) (strict mode) |
| Build tool        | [Vite 8](https://vite.dev/)                           |
| Styling           | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`) |
| Animation         | [GSAP](https://gsap.com/)                             |
| Icons             | [Font Awesome](https://fontawesome.com/) (`react-fontawesome`, solid + brands) |
| Linting           | [oxlint](https://oxc.rs/docs/guide/usage/linter.html) |
| Hosting (current) | GitHub Pages, via GitHub Actions                      |

No React framework (Next.js, Remix, etc.) is used; this is a client-rendered
Vite SPA.

## Project Structure

```
src/
├── components/        One folder per section/feature (Header, Hero, About,
│                       Skills, Experience, Projects, Testimonials, Contact,
│                       Footer, Loader) plus a ui/ folder of shared
│                       primitives (buttons, dividers, section headings).
├── data/               Typed content for every section (personal info, nav
│                       links, skills, experience, projects, testimonials,
│                       contact form config, sitemap links for the footer).
├── hooks/              Small reusable hooks (scroll-reveal, media query,
│                       reduced motion, body-scroll lock).
├── lib/                Framework-agnostic helpers (form validation, the
│                       WhatsApp message/URL builder, the shared GSAP
│                       instance).
├── types/              Shared TypeScript interfaces for the data layer.
├── assets/images/      Build-time imported images (hero portrait, project
│                       screenshots) - processed and hashed by Vite.
├── App.tsx             Mounts the loader, sticky header, and every section
│                       in order.
└── index.css           Design tokens (`@theme`), global resets, and a
                        handful of defensive overrides documented in place
                        (see docs/DESIGN_SYSTEM.md).

public/
├── favicons/           SVG + PNG icons (16/32/180/192/512px).
├── assets/
│   ├── images/         Static images served as-is (currently unused -
│   │                   in-app images are bundled from src/assets/ instead).
│   └── resume/         The downloadable resume PDF.
├── robots.txt
├── site.webmanifest
└── sitemap.xml

docs/                   Deeper notes - see [Documentation](#documentation).
```

See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for a fuller breakdown of
how data flows through the app.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) - the deployment workflow runs on Node 20;
  any reasonably current Node 20+ LTS release should work locally.
- npm (the project ships a `package-lock.json`).

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server (default: `http://localhost:5173`) with hot
module replacement.

### Production Build

```bash
npm run build
```

Type-checks the project (`tsc -b`) and then builds an optimized production
bundle into `dist/` with Vite.

### Preview

```bash
npm run preview
```

Serves the contents of `dist/` locally, so you can sanity-check the actual
production build before deploying.

## Available Scripts

| Script            | Command            | Description                                                  |
| ------------------ | ------------------- | -------------------------------------------------------------- |
| `npm run dev`      | `vite`              | Starts the dev server with HMR.                               |
| `npm run build`    | `tsc -b && vite build` | Type-checks, then produces a production build in `dist/`. |
| `npm run lint`     | `oxlint`            | Runs the oxlint static analyzer (including React Hooks rules). |
| `npm run preview`  | `vite preview`      | Serves the built `dist/` output locally.                      |

## Environment Variables

| Variable          | Required | Purpose                                                                 |
| ------------------ | :------: | -------------------------------------------------------------------------- |
| `VITE_BASE_PATH`   | No       | Overrides Vite's `base` path. Set to `/<repo-name>/` when deploying to GitHub Pages under a project repo; left unset (defaults to `/`) for Netlify/Vercel or a custom domain at the root. |

No API keys, secrets, or tokens are required to run this project. The
contact form's Formspree endpoint (see below) is a public form URL, not a
secret, and is read from a plain constant in source rather than an
environment variable.

## Contact Form

The form has two modes, switched with a segmented control (defaults to
Email). Switching modes preserves the shared `name`/`message` fields.

### Email

- Fields: Full Name, Email, Message.
- Submission: a `POST` request to a [Formspree](https://formspree.io)
  endpoint, configured in `src/data/contact.ts` as `formspreeEndpoint`.
  **This is currently empty** in the shipped project; until it's set,
  submitting runs full validation but shows an informational toast instead
  of sending anything (see `src/components/Contact/ContactForm.tsx`).

### WhatsApp

- Fields: Full Name, WhatsApp Number, Message.
- On submit, the form opens `https://wa.me/<number>` in a new tab, where
  `<number>` is `personal.phone` from `src/data/personal.ts` (the portfolio
  owner's number, not the visitor's).
- The message is pre-filled from a template in `src/lib/whatsapp.ts` that
  includes the visitor's name, their submitted WhatsApp number, and their
  message, without truncation.

Per-mode required-field validation lives in `src/lib/validation.ts`. See
[`docs/CONTENT_MANAGEMENT.md`](docs/CONTENT_MANAGEMENT.md) for how to edit
field labels/placeholders.

## Resume

The resume is a static PDF at `public/assets/resume/Zaheer-Abbas-Resume.pdf`,
linked with a `download` attribute from both the desktop Hero's "Resume"
button and the mobile navigation drawer's "Download Resume" button. The link
is built as `` `${import.meta.env.BASE_URL}assets/resume/Zaheer-Abbas-Resume.pdf` ``
in `src/data/personal.ts`, so it resolves correctly both at the domain root
and under a GitHub Pages sub-path - it does not depend on the dev server or
any client-side route.

## Responsive Design

The layout is built mobile-first with Tailwind's breakpoints and has been
iterated on at common widths from 320px up through desktop. Notable
responsive behaviors:

- The Hero is a single stacked column (text above the full-bleed portrait)
  below the `lg` breakpoint, and switches to the diagonal split layout at
  `lg` and above.
- The persistent scroll header and mobile navigation drawer both work
  across all breakpoints; the drawer (with its hamburger trigger) replaces
  the inline nav links and Contact button below `lg`.
- The Projects and Testimonials carousels support touch swipe in addition
  to arrow-button and keyboard navigation, for touch devices.
- Hero social icons are right-aligned with safe edge padding on small
  screens; the mobile navigation drawer's social icons are centered as a
  group. These are deliberately different treatments for two different
  contexts.

## Accessibility

Practices actually implemented in this project:

- Semantic sectioning (`<section id="...">` per section, a single `<h1>`
  in the hero, `<nav aria-label="...">` for navigation groups).
- Keyboard support for both carousels (arrow keys) and the mobile
  navigation drawer (Escape to close, focus moves to the first link on
  open).
- A sitewide `:focus-visible` ring, with a light-on-dark variant for
  sections on a black background (see `src/index.css`).
- `aria-pressed` on the contact form's Email/WhatsApp toggle, `aria-live`
  regions for toast notifications and the active carousel slide, and
  `role="dialog"`/`aria-modal="true"` on the mobile navigation drawer.
- Descriptive `alt` text on the hero portrait and project preview images.
- Off-screen elements (the scroll header before its threshold, inactive
  carousel slides) are removed from the tab order via `tabIndex={-1}`
  and/or `aria-hidden`, not just visually hidden.

**Known limitations**, documented honestly rather than glossed over:

- Contact form inputs use `aria-label` rather than visible `<label>`
  elements paired with placeholder-style prompts; this is accessible to
  screen readers but means there's no persistent visible label once a
  field is filled in.
- The mobile navigation drawer moves focus to its first link on open and
  closes on Escape, but does not implement a full cycling focus trap -
  background content is not reachable by mouse (body scroll is locked),
  but a keyboard user tabbing far enough could in principle reach it.

This project has not been audited against WCAG by an automated or manual
accessibility testing tool; the above reflects what's implemented, not a
formal conformance claim.

## SEO

- Page `<title>`, meta description, and `<link rel="canonical">` are set in
  `index.html`.
- Open Graph (`og:*`) and Twitter Card (`twitter:*`) meta tags are present
  in `index.html`.
- Favicons (SVG + PNG at 16/32/180px, plus 192/512px for the manifest) live
  in `public/favicons/` and are linked from `index.html`.
- `public/site.webmanifest` provides app metadata (name, theme colors,
  icons) for "add to home screen" support.
- `public/robots.txt` allows crawling and points at the sitemap.
- `public/sitemap.xml` lists the single homepage URL - the page's other
  sections (About, Skills, Experience, etc.) are same-page anchors, not
  separate routes, so they are intentionally not listed as separate pages.

All of the above currently reference `https://zaheerabbas.dev/` as the
canonical domain. See [Deployment](#deployment) if that changes.

## Deployment

The repository ships a GitHub Actions workflow
(`.github/workflows/deploy.yml`) that builds the site with
`VITE_BASE_PATH=/<repo-name>/` and publishes `dist/` to GitHub Pages on every
push to `main`. The current live deployment
([stackiid.github.io/zaheer-abbas-portfolio](https://stackiid.github.io/zaheer-abbas-portfolio/))
uses this workflow.

The project is a static Vite build with no server-side requirements, so it
can equally be deployed to Netlify, Vercel, or any static host - see
[`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for platform-specific
configuration, including why `VITE_BASE_PATH` matters for GitHub Pages
specifically and how asset paths (resume, favicons) are kept base-path-safe.

## Performance Considerations

- **No router, minimal dependencies** - this is a single static page with a
  small, deliberate dependency list (React, GSAP, Font Awesome); there's no
  routing library, state management library, or UI kit to ship.
- **Build-time image processing** - images referenced from components (the
  hero portrait, project screenshots) are imported as ES modules and
  processed/hashed by Vite, rather than referenced as loose public files.
- **Scroll listeners are throttled** - the persistent header's visibility
  check runs at most once per animation frame (`requestAnimationFrame`),
  not on every scroll event.
- **Animation respects `prefers-reduced-motion`** - the hero's intro
  animation, the scroll header's slide transition, and the testimonials
  carousel's autoplay all check this media query via the shared
  `usePrefersReducedMotion` hook.

No bundle-size analysis or Lighthouse audit has been run as part of this
project; the above are implementation choices, not measured benchmarks.

## Browser Support

Built with modern, broadly-supported web platform features (CSS clip-path,
CSS custom properties, `getBoundingClientRect`/`requestAnimationFrame` for
scroll handling, ES2023 syntax via the project's TypeScript target). It
should work correctly in current versions of Chrome, Firefox, Safari, and
Edge. No specific legacy-browser testing (e.g. older Safari versions or any
Internet Explorer) has been performed, and none is targeted.

## Documentation

| Document | Covers |
| --- | --- |
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | Folder structure, data flow, and component conventions. |
| [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) | Color tokens, typography, shared UI primitives, motion conventions. |
| [`docs/CONTENT_MANAGEMENT.md`](docs/CONTENT_MANAGEMENT.md) | How to edit every section's content, the contact form, resume, and SEO files, without touching components. |
| [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) | GitHub Pages / Netlify / Vercel deployment, custom domains, base-path handling. |
| [`docs/DEVELOPMENT.md`](docs/DEVELOPMENT.md) | Local setup, path aliases, adding a new section, troubleshooting. |

## Future Improvements

Realistic possible future work - not implemented today:

- A full keyboard focus trap in the mobile navigation drawer.
- An automated accessibility audit (e.g. axe-core) as part of CI.
- A real Formspree endpoint wired in for production email submissions.
- Expanded project case studies (process, outcomes) beyond the current
  card summaries.
- Basic analytics, if/when needed.
- Image optimization review (responsive `srcset`/modern formats) as more
  project images are added.

## About the Developer

This project was designed and built by **Ubaid Ahmad**
([@stackiid](https://github.com/stackiid)), a full-stack MERN developer and
UI/UX designer. His work spans both sides of the stack: REST API and
database design (MongoDB, Node.js/Express service architecture) on the
backend, and component-driven, responsive, accessible interfaces (React,
Tailwind CSS, Figma-to-code) on the front end. He built this portfolio
end-to-end for Zaheer Abbas, from the visual design through the animation
and deployment pipeline documented above - a connection reflected in one of
the testimonials in the Testimonials section of this site.

- Portfolio: [stackiid.github.io/portfolio](https://stackiid.github.io/portfolio/)
- GitHub: [github.com/stackiid](https://github.com/stackiid)

## License

The source code in this repository (components, configuration, and
documentation) is licensed under the [MIT License](LICENSE).

This license does **not** extend to the personal content the site
displays - Zaheer Abbas's name, photo, resume, and project write-ups, and
any third-party project screenshots, remain the property of their
respective owners and may not be reused.

## Acknowledgements

- [Formspree](https://formspree.io) - contact form backend (Email mode).
- [Font Awesome](https://fontawesome.com/) - icon set used throughout the UI.
- [GSAP](https://gsap.com/) - scroll reveals, header transitions, and the mobile drawer animation.
