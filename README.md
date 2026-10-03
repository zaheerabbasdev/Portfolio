# Zaheer Abbas - Portfolio

![React](https://img.shields.io/badge/React-19-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6)
![Vite](https://img.shields.io/badge/Vite-8-646CFF)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4)
![License](https://img.shields.io/badge/license-MIT-green)

A single-page portfolio website for Zaheer Abbas, a full-stack developer, built with React, TypeScript, Tailwind CSS 4, and GSAP. It has a monochrome, editorial look, a diagonal split hero, a persistent navigation bar that takes over once the hero scrolls out of view, and a contact form that works in two modes: email through Formspree, or a pre-filled WhatsApp message. All page content comes from typed data files, so copy can be changed without editing components.

## Client

This project was designed and built by [Ubaid Ahmad](https://github.com/stackiid) for **Zaheer Abbas**.

| Detail | Value |
| --- | --- |
| Client | Zaheer Abbas, full-stack developer |
| Client email | [zabbasdev@gmail.com](mailto:zabbasdev@gmail.com) |
| Client repository | [github.com/zaheerabbasdev/Portfolio](https://github.com/zaheerabbasdev/Portfolio) |
| Client live site | [zaheerabbasdev.github.io/Portfolio](https://zaheerabbasdev.github.io/Portfolio/) |
| Developer repository | [github.com/stackiid/zaheer-abbas-portfolio](https://github.com/stackiid/zaheer-abbas-portfolio) |
| Developer live site | [stackiid.github.io/zaheer-abbas-portfolio](https://stackiid.github.io/zaheer-abbas-portfolio/) |

## Live Demo

- Client deployment: [https://zaheerabbasdev.github.io/Portfolio/](https://zaheerabbasdev.github.io/Portfolio/)
- Developer deployment: [https://stackiid.github.io/zaheer-abbas-portfolio/](https://stackiid.github.io/zaheer-abbas-portfolio/)

## Table of Contents

- [Client](#client)
- [Live Demo](#live-demo)
- [Features](#features)
- [Page Sections](#page-sections)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Environment Variables](#environment-variables)
- [Updating Content](#updating-content)
- [Contact Form](#contact-form)
- [Design System](#design-system)
- [Responsive Design](#responsive-design)
- [Accessibility](#accessibility)
- [SEO](#seo)
- [Deployment](#deployment)
- [Performance Considerations](#performance-considerations)
- [Known Limitations](#known-limitations)
- [Documentation](#documentation)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- Diagonal split hero built with a CSS `clip-path`, with a GSAP intro animation that is skipped for visitors who prefer reduced motion
- Two-header navigation: a transparent header over the hero, and a persistent black header that slides in after the visitor scrolls past roughly half the hero; both render the same `HeaderBarContent` component so their content stays identical
- Mobile navigation drawer that slides in from the left, with its own resume button and social links
- Branded loading screen that stays visible for at least 1.2 seconds (shorter for reduced-motion visitors) while page scrolling is locked
- Scroll-triggered reveal animations built with GSAP ScrollTrigger
- Skills grouped into five categories
- Combined timeline for work experience, education, and certifications
- Projects carousel showing three cards at a time on desktop and one on smaller screens, with arrow buttons, keyboard arrows, and touch swipe
- Testimonials carousel with arrow buttons, keyboard arrows, touch swipe, and an automatic 20-second rotation that is turned off for reduced-motion visitors
- Dual-mode contact form (Email or WhatsApp) with per-mode validation and toast notifications
- Downloadable resume PDF linked from the hero and the mobile drawer
- Footer sitemap and social links

## Page Sections

| Order | Section | Content |
| --- | --- | --- |
| 1 | Hero | Name, title, tagline, social links, resume download, and contact button |
| 2 | About | Introduction, a "How I Work" banner, and three pillars: Frontend, Backend and APIs, Deployment and Maintenance |
| 3 | Skills | Programming Languages, Frontend, Backend, Databases, and Tools and Technologies |
| 4 | Experience | Self-employed full-stack developer role, university degree, and a Python certification |
| 5 | Projects | Four projects: Kaarkun, Fleet Management, ALBAZ Shipping Services, and TailorApp |
| 6 | Testimonials | Four testimonials from collaborators |
| 7 | Contact | Email and WhatsApp contact form |
| 8 | Footer | Sitemap links and social links |

## Tech Stack

| Category | Technology |
| --- | --- |
| UI library | React 19 |
| Language | TypeScript 6 (strict checks, `erasableSyntaxOnly`, ES2023 target) |
| Build tool | Vite 8 with `@vitejs/plugin-react` |
| Styling | Tailwind CSS 4 through `@tailwindcss/vite`, with design tokens in an `@theme` block |
| Animation | GSAP 3 with ScrollTrigger |
| Icons | Font Awesome Free 7 through `@fortawesome/react-fontawesome` (solid and brands) |
| Fonts | Google Fonts: Space Grotesk (display) and Inter (body) |
| Forms | Formspree (email) and a `wa.me` link (WhatsApp) |
| Linting | oxlint |
| Hosting | GitHub Pages through GitHub Actions; Netlify and Vercel configuration also included |
| Backend | None |

## Project Structure

```text
portfolio/
|-- .github/workflows/
|   `-- deploy.yml                 # Lint, build, and deploy to GitHub Pages
|-- docs/                          # Architecture, design, content, deployment, and development notes
|-- public/
|   |-- assets/resume/             # Resume PDF
|   |-- favicons/                  # SVG and PNG icons
|   |-- robots.txt
|   |-- sitemap.xml
|   `-- site.webmanifest
|-- src/
|   |-- assets/
|   |   |-- images/                # Hero portrait
|   |   `-- projects/              # Project screenshots
|   |-- components/                # One folder per section, plus shared ui/ primitives
|   |-- data/                      # Typed content for every section
|   |-- hooks/                     # useScrollReveal, useMediaQuery, usePrefersReducedMotion, useLockBodyScroll
|   |-- lib/                       # Form validation, WhatsApp URL builder, shared GSAP instance
|   |-- types/index.ts             # Shared TypeScript interfaces
|   |-- App.tsx
|   |-- index.css                  # Design tokens, resets, and focus styles
|   `-- main.tsx
|-- index.html
|-- netlify.toml
|-- vercel.json
|-- vite.config.ts
|-- tsconfig.json, tsconfig.app.json, tsconfig.node.json
|-- .oxlintrc.json
|-- package.json
|-- LICENSE                        # MIT License
`-- README.md
```

## Prerequisites

- Node.js 20 or later (the GitHub Actions workflow uses Node 20)
- npm
- An internet connection for Google Fonts

## Getting Started

Clone the repository, install dependencies, and start the development server:

```bash
git clone https://github.com/zaheerabbasdev/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Open the local URL that Vite prints, typically `http://localhost:5173`.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the Vite development server with hot reload |
| `npm run build` | Type-checks with `tsc -b`, then builds to `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs oxlint |

## Environment Variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `VITE_BASE_PATH` | No | Overrides Vite's `base` path. The GitHub Actions workflow sets it to `/<repo-name>/`; when it is unset, the base path is `/`, which suits Netlify, Vercel, or a root custom domain |

No API keys or secrets are needed. The Formspree endpoint is a public form URL stored in `src/data/contact.ts`.

## Updating Content

Every section reads from a file in `src/data/`, so content changes never require editing component code.

| File | Controls |
| --- | --- |
| `personal.ts` | Name, title, tagline, summary, contact details, resume path, and social links |
| `about.ts` | About text, banner, and the three pillars |
| `skills.ts` | Skill categories and skills |
| `experience.ts` | Work, education, and certification entries |
| `projects.ts` | Project cards, including optional GitHub and live links that are switched on with `githubRepoEnabled` and `liveUrlEnabled` |
| `testimonials.ts` | Testimonials |
| `contact.ts` | Form heading, field labels and placeholders, Formspree endpoint, and toast duration |
| `footerSitemap.ts` | Footer links |

Project screenshots live in `src/assets/projects/` and are imported by `projects.ts`, so Vite hashes and optimizes them at build time. The resume PDF goes in `public/assets/resume/`. See [docs/CONTENT_MANAGEMENT.md](./docs/CONTENT_MANAGEMENT.md) for details.

## Contact Form

The form is switched between two modes with a segmented control that defaults to Email.

| Mode | Fields | On submit |
| --- | --- | --- |
| Email | Full Name, Email, Message | Validates, then sends a `POST` request with the name, email, and message to the Formspree endpoint in `src/data/contact.ts`; shows a success or error toast and clears the form after a successful send |
| WhatsApp | Full Name, WhatsApp Number, Message | Validates, then opens `wa.me` in a new tab with a pre-filled message addressed to the portfolio owner's number from `personal.ts` |

Validation lives in `src/lib/validation.ts`: a name and a message are required in both modes, the email must match a basic address pattern, and the WhatsApp number must contain between 7 and 15 digits. Switching modes clears the error messages.

## Design System

Design tokens are declared in the `@theme` block of `src/index.css`.

| Group | Details |
| --- | --- |
| Colors | `ink` (`#0d0d0d`), `ink-soft`, `paper` (`#ececeb`), `paper-dim`, `cloud`, `white`, `line`, `muted`, and `muted-dark` |
| Typography | `--font-display` (Space Grotesk) and `--font-sans` (Inter) |
| Focus | A 2px ink outline on `:focus-visible`, with a light variant on dark sections |
| Scrolling | Smooth scrolling, disabled for reduced-motion visitors |

Shared UI primitives (`BracketButton`, `PillButton`, `SectionHeading`, `Divider`, `Container`, `SocialLinks`) live in `src/components/ui/`. See [docs/DESIGN_SYSTEM.md](./docs/DESIGN_SYSTEM.md) for more.

## Responsive Design

The layout is mobile-first and uses Tailwind breakpoints.

| Viewport | Behavior |
| --- | --- |
| Below `lg` (1024px) | The hero stacks into a single column, the inline navigation is replaced by a hamburger button and slide-in drawer, and the projects carousel shows one card at a time |
| `lg` and above | The diagonal split hero and inline navigation appear, and the projects carousel shows three cards at a time |

## Accessibility

Implemented practices visible in the code:

- `lang="en"` on the root element and a single `<h1>` in the hero
- Semantic sections with ids, and labeled `<nav>` groups
- Arrow-key support in both carousels, and Escape to close the mobile drawer, which also moves focus to its first link when it opens
- `role="dialog"` and `aria-modal` on the mobile drawer
- `aria-pressed` on the contact mode switch, `aria-live` regions for toasts and carousel slides, and `aria-invalid` and `aria-describedby` on form fields with errors
- Off-screen elements, such as the hidden sticky header and inactive slides, are removed from the tab order and hidden from assistive technology
- Visible `:focus-visible` outlines
- Reduced-motion support in the hero intro, the sticky header transition, the loader, scroll reveals, carousel autoplay, and smooth scrolling

No accessibility audit or WCAG conformance level is claimed.

## SEO

`index.html` includes a title, meta description, canonical URL, Open Graph tags, Twitter Card tags, `theme-color`, favicons, and a web app manifest. `public/` contains `robots.txt` and a one-URL `sitemap.xml`. The Open Graph tags have no image.

## Deployment

`.github/workflows/deploy.yml` runs on pushes to `main` and can also be started manually. It installs with `npm ci`, runs `npx oxlint`, builds with `VITE_BASE_PATH` set to `/<repo-name>/`, and publishes `dist/` to GitHub Pages. The workflow uses the repository's own name, so the same file works for both the client repository and the developer repository.

One-time setup: in the repository, open Settings, then Pages, and set the source to GitHub Actions.

For Netlify or Vercel, the included `netlify.toml` and `vercel.json` set the build command, the output directory, and a rewrite of all routes to `index.html`. See [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md) for details, including custom domains.

## Performance Considerations

- A small dependency list: React, GSAP, and Font Awesome, with no router, state library, or UI kit
- Project screenshots and the hero portrait are WebP files imported through Vite, which hashes them for caching
- The sticky header checks the scroll position at most once per animation frame
- Fonts use `preconnect` hints and `display=swap`
- No bundle analysis or Lighthouse audit has been run

## Known Limitations

- The canonical URL, Open Graph URL, `robots.txt`, and `sitemap.xml` point to `https://zaheerabbas.dev/`, which is a different address from the GitHub Pages sites listed above
- Contact form inputs use `aria-label` and placeholders rather than visible labels, so there is no persistent label once a field is filled in
- The mobile drawer does not implement a full keyboard focus trap
- Form submissions depend on the external Formspree endpoint, and the WhatsApp mode only opens a link
- Only one of the four projects has a live link, and the others link to source repositories or nothing
- The site needs an internet connection to load fonts
- There are no automated tests
- Page titles and meta tags are the same for every visitor, since the site is a single page

## Documentation

Detailed notes are in the `docs` folder:

- [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md): folder structure, data flow, and component conventions
- [docs/DESIGN_SYSTEM.md](./docs/DESIGN_SYSTEM.md): colors, typography, shared primitives, and motion
- [docs/CONTENT_MANAGEMENT.md](./docs/CONTENT_MANAGEMENT.md): how to edit each section's content
- [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md): GitHub Pages, Netlify, and Vercel setup
- [docs/DEVELOPMENT.md](./docs/DEVELOPMENT.md): local setup, path aliases, and adding a new section

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details. The license covers the source code, configuration, and documentation. It does not extend to the personal content shown on the site, such as Zaheer Abbas's name, photograph, resume, and project write-ups, or to third-party project screenshots, which remain the property of their respective owners.

Copyright (c) 2026 Zaheer Abbas

## Acknowledgements

- Animation library: [GSAP](https://gsap.com)
- Icons from [Font Awesome](https://fontawesome.com)
- Contact form handling by [Formspree](https://formspree.io)
- Typefaces from [Google Fonts](https://fonts.google.com): Space Grotesk and Inter
- Styling utilities from [Tailwind CSS](https://tailwindcss.com)
