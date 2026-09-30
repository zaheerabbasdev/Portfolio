export interface SitemapLink {
  id: string
  label: string
  href: string
}

// Full list of the site's real sections, in page order - used by the
// footer's "Sitemap" column. Deliberately separate from navLinks.ts, which
// drives the header and only surfaces a shorter subset.
export const footerSitemap: SitemapLink[] = [
  { id: 'top', label: 'Home', href: '#top' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Portfolio', href: '#projects' },
  { id: 'testimonials', label: 'Testimonials', href: '#testimonials' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]
