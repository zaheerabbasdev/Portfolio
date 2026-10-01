import { about } from "@/data/about";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Divider } from "@/components/ui/Divider";
import { BracketButton } from "@/components/ui/BracketButton";
import { AboutIntroBanner } from "@/components/About/AboutIntroBanner";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function About() {
  const revealRef = useScrollReveal<HTMLDivElement>({
    itemSelector: "[data-reveal]",
  });

  return (
    <section id="about" className="bg-paper">
      <AboutIntroBanner />

      <Container>
        <div
          id="about-content"
          ref={revealRef}
          className="flex flex-col items-center gap-10 py-24 text-center sm:py-28"
        >
          <div data-reveal>
            <SectionHeading heading={about.heading} />
          </div>

          <p
            data-reveal
            className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base"
          >
            {about.intro}
          </p>

          <div data-reveal>
            <BracketButton
              label="Explore"
              onClick={() =>
                document
                  .getElementById(about.exploreTargetId)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            />
          </div>

          <div data-reveal>
            <Divider />
          </div>

          <div className="grid w-full gap-12 pt-4 sm:grid-cols-3 sm:gap-8">
            {about.pillars.map((pillar) => (
              <div
                key={pillar.id}
                data-reveal
                className="flex flex-col items-center gap-3 text-center"
              >
                <h3 className="font-display text-sm font-bold tracking-[0.2em] text-ink">
                  {pillar.title.toUpperCase()}
                </h3>
                <p className="max-w-xs text-sm leading-relaxed text-muted">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          <div data-reveal className="pt-2">
            <Divider />
          </div>
        </div>
      </Container>
    </section>
  );
}
