import { useEffect, useRef } from "react";
import { experience } from "@/data/experience";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const typeLabel: Record<string, string> = {
  work: "Experience",
  education: "Education",
  certification: "Certification",
};

export function Experience() {
  const revealRef = useScrollReveal<HTMLDivElement>({
    itemSelector: "[data-reveal]",
  });
  const lineRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const line = lineRef.current;
    if (!line || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.set(line, { scaleY: 0, transformOrigin: "top" });
      gsap.to(line, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: line,
          start: "top 75%",
          end: "bottom 85%",
          scrub: 0.6,
        },
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === line) trigger.kill();
      });
    };
  }, [prefersReducedMotion]);

  return (
    <section id="experience" className="bg-cloud py-24 sm:py-28">
      <Container>
        <div className="flex flex-col items-center gap-16">
          <SectionHeading heading="Experience" />

          <div ref={revealRef} className="relative w-full max-w-2xl">
            <div
              className="absolute left-[7px] top-2 bottom-2 w-px bg-ink/12"
              aria-hidden="true"
            />
            <div
              ref={lineRef}
              className="absolute left-[7px] top-2 bottom-2 w-px bg-ink"
              aria-hidden="true"
            />

            <ul className="flex flex-col gap-12">
              {experience.map((item) => (
                <li key={item.id} data-reveal className="relative pl-9">
                  <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-ink bg-cloud" />
                  <p className="font-display text-xs font-bold tracking-[0.2em] text-muted">
                    {typeLabel[item.type]?.toUpperCase()}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-bold text-ink sm:text-xl">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-muted">
                    {item.organization}
                    {item.location ? ` · ${item.location}` : ""} - {item.period}
                  </p>
                  {item.points.length > 0 ? (
                    <ul className="mt-4 flex flex-col gap-2">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm leading-relaxed text-muted"
                        >
                          <span className="mt-2 h-1 w-1 flex-none rounded-full bg-ink/50" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
