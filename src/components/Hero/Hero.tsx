import { useEffect, useRef } from "react";
import portrait from "@/assets/images/zaheer-portrait.webp";
import { personal } from "@/data/personal";
import { Header } from "@/components/Header/Header";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { BracketButton } from "@/components/ui/BracketButton";
import { Divider } from "@/components/ui/Divider";
import { gsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-hero-image]", {
        opacity: 0,
        scale: 1.06,
        duration: 1,
        ease: "power2.out",
      })
        .from(
          "[data-hero-eyebrow]",
          { opacity: 0, y: 16, duration: 0.5 },
          "-=0.6",
        )
        .from(
          "[data-hero-name]",
          { opacity: 0, y: 26, duration: 0.65 },
          "-=0.3",
        )
        .from(
          "[data-hero-title]",
          { opacity: 0, y: 16, duration: 0.5 },
          "-=0.35",
        )
        .from(
          "[data-hero-social] > *",
          { opacity: 0, y: 12, duration: 0.4, stagger: 0.08 },
          "-=0.25",
        );
    }, root);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      id="hero"
      ref={rootRef}
      className="relative overflow-hidden bg-ink lg:bg-paper"
    >
      {/* Desktop-only diagonal split panel */}
      <div
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{
          background: "var(--color-ink)",
          clipPath: "polygon(53% 0, 100% 0, 100% 100%, 47% 100%)",
        }}
        aria-hidden="true"
      />

      <Header />

      <div className="relative mx-auto flex min-h-screen max-w-[1680px] flex-col lg:h-screen lg:flex-row">
        {/* Text column */}
        <div className="relative z-10 flex flex-1 flex-col justify-center gap-5 px-6 pb-0 pt-28 sm:px-10 lg:w-1/2 lg:flex-none lg:px-16 lg:py-20 xl:px-20">
          <p
            data-hero-eyebrow
            className="font-sans text-base text-muted lg:text-muted"
          >
            Hi, I am
          </p>
          <h1
            data-hero-name
            className="font-display text-5xl font-bold leading-[1.05] text-cloud sm:text-6xl lg:text-ink lg:text-6xl xl:text-7xl"
          >
            {personal.name}
          </h1>
          <p
            data-hero-title
            className="font-display text-base font-medium text-muted-dark lg:text-muted lg:text-lg"
          >
            {personal.title} <span className="opacity-50">/</span>{" "}
            {personal.tagline}
          </p>

          <p className="hidden max-w-md font-sans text-sm leading-relaxed text-muted lg:block">
            {personal.summary}
          </p>

          <div className="hidden max-w-md lg:block">
            <Divider />
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <span className="font-display text-4xl font-bold leading-none text-ink">
              {personal.yearsExperience}
            </span>
            <span className="font-sans text-sm leading-tight text-muted">
              Years
              <br />
              Experience
            </span>
          </div>

          <div data-hero-social className="hidden pt-3 lg:block">
            <SocialLinks links={personal.socials} variant="light" />
          </div>

          <div className="hidden items-center gap-8 pt-5 lg:flex">
            <BracketButton
              label="Explore"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            />
            <BracketButton
              as="a"
              href={personal.resumeUrl}
              download="Zaheer-Abbas-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              label="Resume"
            />
          </div>
        </div>

        {/* Portrait column */}
        <div className="relative flex flex-1 items-end justify-center lg:w-1/2 lg:flex-none lg:items-end">
          <img
            data-hero-image
            src={portrait}
            alt={`Portrait of ${personal.name}`}
            className="relative z-0 h-[62vh] w-auto max-w-none object-contain object-bottom sm:h-[68vh] lg:h-[86%] lg:max-h-[760px] xl:max-h-[820px]"
          />

          {/* Mobile-only social bar over the photo */}
          <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-end bg-gradient-to-t from-ink via-ink/85 to-transparent px-6 py-6 sm:px-10 lg:hidden">
            <SocialLinks links={personal.socials} variant="dark" size="sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
