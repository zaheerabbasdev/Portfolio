import { useState } from 'react'
import { personal } from '@/data/personal'
import { navLinks } from '@/components/Header/navLinks'
import { HeaderBarContent } from '@/components/Header/HeaderBarContent'
import { MobileNav } from '@/components/Header/MobileNav'

// Header sits transparently over the hero. Desktop shows the full text nav
// plus the "Contact me" pill; below `lg` a hamburger opens the slide panel.
// This never becomes fixed - it scrolls away naturally with the hero. See
// StickyHeader for the persistent nav that takes over once the user has
// scrolled past the hero.
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header id="top" className="absolute inset-x-0 top-0 z-40">
        <HeaderBarContent variant="hero" menuOpen={menuOpen} onOpenMenu={() => setMenuOpen(true)} />
      </header>

      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} links={navLinks} resumeUrl={personal.resumeUrl} />
    </>
  )
}
