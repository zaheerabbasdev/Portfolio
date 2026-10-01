export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { id: "about", label: "About me", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "projects", label: "Portfolio", href: "#projects" },
];
