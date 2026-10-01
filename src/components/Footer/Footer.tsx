import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faLocationDot,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { personal } from "@/data/personal";
import { footerSitemap } from "@/data/footerSitemap";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark bg-ink py-16 text-cloud sm:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1fr]">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <p className="font-display text-xl font-bold text-cloud">
              {personal.firstName}.
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-muted-dark">
              {personal.title}. Based in {personal.location}.
            </p>
            <SocialLinks links={personal.socials} variant="dark" size="sm" />
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="font-display text-xs font-bold tracking-[0.25em] text-cloud">
              SITEMAP
            </h3>
            <div className="mt-6 grid grid-cols-2 grid-flow-col grid-rows-4 gap-x-8 gap-y-3 text-sm">
              {footerSitemap.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="text-muted-dark transition-colors hover:text-cloud"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Get in touch */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-xs font-bold tracking-[0.25em] text-cloud">
              GET IN TOUCH
            </h3>
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 text-sm font-semibold text-cloud/80 transition-colors hover:text-cloud"
            >
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="text-xs"
                aria-hidden="true"
              />
              Start a conversation
            </a>
            <p className="flex items-center gap-2 text-sm text-muted-dark">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-xs"
                aria-hidden="true"
              />
              {personal.location}
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 border-t border-cloud/10 pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-muted-dark">
            © {year} {personal.name}. All rights reserved.
          </p>

          <a
            href="#top"
            className="flex items-center gap-2 font-display text-xs font-bold tracking-[0.2em] text-cloud/80 transition-colors hover:text-cloud"
          >
            BACK TO TOP
            <FontAwesomeIcon icon={faArrowUp} aria-hidden="true" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
