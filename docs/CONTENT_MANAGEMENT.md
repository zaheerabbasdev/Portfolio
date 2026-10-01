# Content Management

Everything you'll want to update regularly lives in `src/data/`. You never
need to touch a component file to change copy, add a project, or remove a
skill.

## Personal info & social links - `data/personal.ts`

Edit `name`, `title`, `tagline`, `location`, `email`, `phone`, `resumeUrl`
directly. `socials` is an array - add or remove an entry to add/remove an
icon everywhere it's used (hero, mobile nav, footer, contact):

```ts
{ id: 'twitter', label: 'Twitter', href: 'https://twitter.com/...', icon: 'github' }
```

`icon` must be one of the keys already mapped in
`src/components/ui/SocialLinks.tsx` (`email`, `github`, `linkedin`,
`facebook`). To support a new icon, import it from `@fortawesome` and add it
to the `iconMap` there.

## About - `data/about.ts`

`intro` is the paragraph under the heading. `pillars` is the three-column
list (Frontend / Backend & APIs / Deployment & Maintenance) - add, remove
or rename entries freely; the grid (`sm:grid-cols-3`) will need a manual
tweak in `About.tsx` if you go beyond 3 pillars.

## Skills - `data/skills.ts`

```ts
{
  category: 'Frontend',
  skills: ['React.js', 'Next.js', 'TypeScript'],
}
```

Add a new object to add a new category. Add/remove strings in `skills` to
add/remove individual skills. No icons, percentages or proficiency levels -
keep it that way; the brief explicitly rules those out.

## Experience - `data/experience.ts`

Each entry has a `type` (`'work' | 'education' | 'certification'`, used for
the small label above the role), `role`, `organization`, `period`, optional
`location`, and `points` (bullet list - pass `[]` for entries that don't
need bullets, like education/certifications). Entries render in array
order - put your most relevant entry first.

## Projects - `data/projects.ts`

```ts
{
  id: 'unique-slug',
  title: 'Project Name',
  description: '...',
  image: importedImage,
  techStack: ['Next.js', 'MySQL'],
  githubRepo: 'https://github.com/...',
  githubRepoEnabled: true,
  liveUrl: '',
  liveUrlEnabled: false,
}
```

- `image` is a normal Vite asset import - drop a file in
  `src/assets/projects/` and `import` it at the top of the file.
- `githubRepoEnabled` / `liveUrlEnabled` independently show or hide each
  link's icon on the card. Leave the URL as `''` when a link is disabled.
- The carousel handles any number of projects automatically - 1, 2, 3, or
  20 all work without touching `ProjectCarousel.tsx`.

## Testimonials - `data/testimonials.ts`

```ts
{ id: 'slug', name: 'Full Name', role: 'Title, Company', quote: '' }
```

**The Testimonials section only renders entries with non-empty `quote`
text**, and the whole section disappears if none qualify. This is
intentional - placeholder/fake testimonial content was explicitly ruled
out. All four entries currently in the file have real, confirmed quotes.
To stage a new one before its text is ready, add an entry with
`quote: ''`; it (and the section, if it's the first entry) appears
automatically the moment a real quote is filled in. No component changes
needed.

## Contact form - `data/contact.ts`

The contact form has two modes, switched with a segmented control above the
fields (defaults to Email). Both modes share the same `name`/`message`
values when you switch between them, so nothing typed is lost.

**Email mode** shows Full Name, Email, and Message, and submits via
Formspree (see below).

**WhatsApp mode** shows Full Name, WhatsApp Number, and Message. On submit,
it opens `https://wa.me/<number>` in a new tab, pre-filled with a message
built from the visitor's own input. The destination number is
`personal.phone` in `data/personal.ts` - there's no separate WhatsApp
number to configure. The message template and the digit-only formatting
required by `wa.me` live in `src/lib/whatsapp.ts`; the per-mode required-field
validation lives in `src/lib/validation.ts`.

`fields` in `contact.ts` defines the label/placeholder/type for all four
possible inputs (`name`, `email`, `phone`, `message`); `ContactForm.tsx`
picks which three are shown based on the active mode.

`formspreeEndpoint` is intentionally empty. To go live with Email mode:

1. Create a form at [formspree.io](https://formspree.io) and copy its
   endpoint URL (`https://formspree.io/f/xxxxxxx`).
2. Paste it into `formspreeEndpoint` in `data/contact.ts`.

Until it's set, submitting in Email mode runs full validation but shows an
informational toast instead of sending anything - see
`src/components/Contact/ContactForm.tsx`. WhatsApp mode doesn't depend on
this endpoint and works as soon as `personal.phone` is a real number.

## Resume

Replace `public/assets/resume/Zaheer-Abbas-Resume.pdf` with a new file of the **same
name** to update the downloadable resume without touching any code. If you
rename the file, update `personal.resumeUrl` in `data/personal.ts` to
match.

## Favicon, manifest, robots.txt, sitemap.xml

- **Favicons** live in `public/favicons/` (an SVG plus 16/32/180/192/512px
  PNGs) and are referenced from `index.html`'s `<link>` tags. Replace the
  files in place, keeping the same names, to swap the icon.
- **`public/site.webmanifest`** points at the 192px/512px icons in that same
  folder and sets the app name/theme colors for "add to home screen".
- **`public/robots.txt`** and **`public/sitemap.xml`** both reference
  `https://zaheerabbas.dev/`. Update both (and the canonical/Open Graph tags
  in `index.html`) if the site moves to a different domain - see
  `docs/DEPLOYMENT.md`.
