import { useState } from "react";
import { personal } from "@/data/personal";
import { navLinks } from "@/components/Header/navLinks";
import { HeaderBarContent } from "@/components/Header/HeaderBarContent";
import { MobileNav } from "@/components/Header/MobileNav";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header id="top" className="absolute inset-x-0 top-0 z-40">
        <HeaderBarContent
          variant="hero"
          menuOpen={menuOpen}
          onOpenMenu={() => setMenuOpen(true)}
        />
      </header>

      <MobileNav
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={navLinks}
        resumeUrl={personal.resumeUrl}
      />
    </>
  );
}
