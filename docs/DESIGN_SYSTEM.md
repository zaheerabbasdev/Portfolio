# Design System

The visual language comes directly from the supplied reference screens
(`The Design I Want/` in the original asset pack): a monochrome, diagonal-split
hero, boxed all-caps section headings, hairline dividers, and bracketed
text buttons. This document records the tokens and patterns so future
changes stay consistent with that reference.

## Color

Defined as CSS custom properties in `src/index.css` under `@theme`, which
Tailwind v4 turns into utilities automatically (`bg-ink`, `text-muted`, etc).

| Token | Value | Use |
|---|---|---|
| `--color-ink` | `#0d0d0d` | Primary black - dark panels, headings, text on light |
| `--color-ink-soft` | `#171717` | Hover state for ink surfaces |
| `--color-paper` | `#ececeb` | Default light section background |
| `--color-paper-dim` | `#dcdcda` | Scrollbar track, subtle contrast |
| `--color-cloud` | `#f6f6f5` | Secondary light background, text-on-dark |
| `--color-white` | `#ffffff` | Cards, form surfaces |
| `--color-muted` | `#6b6b68` | Body copy on light backgrounds |
| `--color-muted-dark` | `#9a9a97` | Body copy on dark backgrounds |

There is no accent color and no purple/violet anywhere in the palette -
both are deliberate, matching the supplied design and its explicit
restrictions. There is exactly one visual theme; no dark/light mode toggle
exists anywhere in the app.

## Typography

Two Google Fonts, loaded in `index.html`:

- **Space Grotesk** (`--font-display`) - headings, nav, labels, buttons.
  Bold, geometric, developer-oriented.
- **Inter** (`--font-sans`) - body copy, form fields.

Type scale follows Tailwind's default steps (`text-sm` → `text-7xl`); hero
name and section headings are the only places using the largest sizes, so
there's a clear hierarchy between display and body text.

## Primitives (`src/components/ui/`)

- **SectionHeading** - the boxed, tracked-out `ABOUT ME` / `SKILLS` /
  `CONTACT` heading used on every major section.
- **Divider** - the small stitched zig-zag rule between the boxed heading
  and section body.
- **BracketButton** - the `| EXPLORE |` / `| SUBMIT |` text button with
  vertical hairline brackets. Also used for the hero's "Resume" link and
  the About intro band's "Read More", via its `as="a"` mode.
- **PillButton** - a sharp-cornered (not rounded) black/white CTA, currently
  used only for the "Contact me" button in the header.
- **SocialLinks** - square icon buttons (Font Awesome), with a `dark`
  variant for black backgrounds and a `light` variant for paper backgrounds.
- **Logo** - the "ZA" monogram (see `public/favicons/favicon.svg`), rendered
  inline as SVG paths with `currentColor` so it adapts to light/dark
  contexts. Displayed at 55×55px everywhere it appears: the fancy header,
  the persistent scroll header, and the mobile nav drawer.

## Layout

- **Hero** is the one intentionally asymmetric layout: a diagonal
  `clip-path` split on `lg+` screens (paper left / ink right), collapsing to
  a full-bleed dark photo with an overlay identity bar below `lg` - a
  deliberately different mobile composition, not a shrunk desktop layout.
- Every other section is a centered, single-column composition with a
  `max-w-6xl` container, which is what the reference design uses throughout
  (About, Skills, Contact are all centered).

## Motion

- **One orchestrated entrance**: the hero plays a single GSAP timeline once,
  right after the loader hands off (image → eyebrow → name → title → socials).
  Nothing else animates on load.
- **Scroll reveals**: `useScrollReveal` fades + slides section content up
  once, the first time it enters the viewport (About pillars, skill
  categories, experience entries). It is intentionally subtle and only
  applied to content that benefits from a reveal, not to every element.
- **Experience timeline**: the connecting line is scroll-scrubbed (grows as
  you scroll through the list) rather than fading in with the rest of the
  content, since it's meant to read as a progress indicator.
- All animation respects `prefers-reduced-motion`; see
  `src/hooks/usePrefersReducedMotion.ts` - when it's on, elements are set to
  their final state instantly instead of tweening.

## Deliberately not used

- **No skill icons or progress bars.** The reference uses icons, but the
  brief explicitly asks for name-only, category-grouped skills.
- **No project or testimonial grid.** Both are single-item carousels per the
  brief, not cards-in-a-grid.
- **No modal/dialog.** Project cards already show the full description,
  tech stack and links inline - a modal would duplicate that content rather
  than add anything, so one was deliberately left out rather than added for
  decoration.
