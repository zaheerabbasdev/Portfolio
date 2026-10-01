export interface SitemapLink {
  id: string;
  label: string;
  href: string;
}

export const footerSitemap: SitemapLink[] = [
  { id: "top", label: "Home", href: "#top" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "projects", label: "Portfolio", href: "#projects" },
  { id: "testimonials", label: "Testimonials", href: "#testimonials" },
  { id: "contact", label: "Contact", href: "#contact" },
];
