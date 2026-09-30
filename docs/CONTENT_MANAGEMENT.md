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
out. As soon as you fill in a `quote`, that entry (and the section, if it
was the first one) appears automatically. No component changes needed.

## Contact form - `data/contact.ts`

`formspreeEndpoint` is intentionally empty. To go live:

1. Create a form at [formspree.io](https://formspree.io) and copy its
   endpoint URL (`https://formspree.io/f/xxxxxxx`).
2. Paste it into `formspreeEndpoint` in `data/contact.ts`.

Until it's set, submitting the form runs full validation but shows an
informational toast instead of sending anything - see
`src/components/Contact/ContactForm.tsx`. `fields` drives which inputs
render and their placeholders/`required` state; reordering or editing that
array changes the form without touching `ContactForm.tsx`.

## Resume

Replace `public/assets/resume/Zaheer-Abbas-Resume.pdf` with a new file of the **same
name** to update the downloadable resume without touching any code. If you
rename the file, update `personal.resumeUrl` in `data/personal.ts` to
match.
