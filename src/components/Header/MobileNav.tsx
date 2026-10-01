import { useEffect, useLayoutEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faXmark } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "@/lib/gsap";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { personal } from "@/data/personal";
import { Logo } from "@/components/Header/Logo";
import { SocialLinks } from "@/components/ui/SocialLinks";
import type { NavLink } from "@/components/Header/navLinks";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
  resumeUrl: string;
}

const HOME_LINK: NavLink = { id: "top", label: "Home", href: "#top" };
const CONTACT_LINK: NavLink = {
  id: "contact",
  label: "Contact",
  href: "#contact",
};

export function MobileNav({ open, onClose, links, resumeUrl }: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useLockBodyScroll(open);

  useLayoutEffect(() => {
    if (panelRef.current)
      gsap.set(panelRef.current, { xPercent: -100, visibility: "hidden" });
  }, []);

  useEffect(() => {
    const panel = panelRef.current;
    const backdrop = backdropRef.current;
    if (!panel || !backdrop) return;

    if (open) {
      gsap.set(panel, { visibility: "visible" });
      gsap.set(backdrop, { pointerEvents: "auto" });
      gsap.to(backdrop, { opacity: 1, duration: 0.3, ease: "power2.out" });
      gsap.to(panel, { xPercent: 0, duration: 0.45, ease: "power3.out" });
      firstLinkRef.current?.focus();
    } else {
      gsap.to(panel, {
        xPercent: -100,
        duration: 0.35,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(panel, { visibility: "hidden" });
        },
      });
      gsap.to(backdrop, {
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(backdrop, { pointerEvents: "none" });
        },
      });
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  const drawerLinks = [HOME_LINK, ...links, CONTACT_LINK];

  return (
    <>
      <div
        ref={backdropRef}
        onClick={onClose}
        aria-hidden="true"
        style={{ opacity: 0, pointerEvents: "none" }}
        className="fixed inset-0 z-40 bg-ink/60 backdrop-blur-sm lg:hidden"
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className="on-dark fixed inset-y-0 left-0 z-50 flex w-[80%] max-w-sm flex-col bg-ink text-cloud lg:hidden"
      >
        <div className="flex items-center justify-between px-7 py-3">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="flex h-9 w-9 items-center justify-center text-cloud"
          >
            <FontAwesomeIcon
              icon={faXmark}
              className="text-xl"
              aria-hidden="true"
            />
          </button>
        </div>

        <nav
          aria-label="Mobile primary"
          className="flex-1 overflow-y-auto border-t border-cloud/10 px-7 py-8"
        >
          <ul className="flex flex-col gap-6">
            {drawerLinks.map((link, index) => (
              <li key={link.id}>
                <a
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={link.href}
                  onClick={onClose}
                  className="font-display text-lg font-medium text-cloud/90 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-6 border-t border-cloud/10 px-7 py-8">
          <a
            href={resumeUrl}
            download="Zaheer-Abbas-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-3 border border-cloud bg-cloud px-6 py-4 font-display text-sm font-bold uppercase tracking-[0.2em] text-ink shadow-[0_6px_0_0_rgba(246,246,245,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-transparent hover:text-cloud active:translate-y-0 active:scale-[0.98]"
          >
            <FontAwesomeIcon
              icon={faDownload}
              className="text-base"
              aria-hidden="true"
            />
            Download Resume
          </a>
          <div className="flex justify-center">
            <SocialLinks links={personal.socials} variant="dark" size="sm" />
          </div>
        </div>
      </div>
    </>
  );
}
