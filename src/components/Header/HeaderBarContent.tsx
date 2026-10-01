import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { navLinks } from "@/components/Header/navLinks";
import { Logo } from "@/components/Header/Logo";
import { PillButton } from "@/components/ui/PillButton";

interface HeaderBarContentProps {
  variant: "hero" | "scroll";
  menuOpen: boolean;
  onOpenMenu: () => void;
  focusable?: boolean;
}

export function HeaderBarContent({
  variant,
  menuOpen,
  onOpenMenu,
  focusable = true,
}: HeaderBarContentProps) {
  const tabIndex = focusable ? undefined : -1;

  return (
    <div className="flex items-center justify-between px-6 py-3 text-cloud sm:px-10 lg:px-12">
      <span
        className={variant === "hero" ? "text-cloud lg:text-ink" : "text-cloud"}
      >
        <Logo tabIndex={tabIndex} />
      </span>

      <div className="hidden items-center gap-8 lg:flex">
        <nav aria-label="Primary" className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              tabIndex={tabIndex}
              className="font-display text-xs font-semibold tracking-[0.15em] text-cloud/85 transition-colors hover:text-cloud"
            >
              {link.label.toUpperCase()}
            </a>
          ))}
        </nav>

        <PillButton
          as="a"
          href="#contact"
          variant="solid"
          tabIndex={tabIndex}
          className="bg-cloud text-ink hover:bg-white hover:text-ink"
        >
          Contact me
        </PillButton>
      </div>

      <button
        type="button"
        onClick={onOpenMenu}
        aria-label="Open navigation menu"
        aria-expanded={menuOpen}
        tabIndex={tabIndex}
        className="flex h-10 w-10 items-center justify-center lg:hidden"
      >
        <FontAwesomeIcon icon={faBars} className="text-xl" aria-hidden="true" />
      </button>
    </div>
  );
}
