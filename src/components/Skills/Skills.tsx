import { skills } from '@/data/skills'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useScrollReveal } from '@/hooks/useScrollReveal'

// Skills render as category → name lists, no icons or proficiency bars.
// Adding/removing a category in data/skills.ts needs no component changes.
export function Skills() {
  const revealRef = useScrollReveal<HTMLDivElement>({ itemSelector: '[data-reveal]' })

  return (
    <section id="skills" className="bg-cloud py-24 sm:py-28">
      <Container>
        <div className="flex flex-col items-center gap-14">
          <SectionHeading heading="Skills" />

          <div ref={revealRef} className="grid w-full max-w-4xl gap-12 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.category} data-reveal>
                <h3 className="mb-4 font-display text-xs font-bold tracking-[0.25em] text-ink">
                  {group.category.toUpperCase()}
                </h3>
                <ul className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded border border-ink/15 bg-white px-3.5 py-2 text-sm font-medium text-ink/85 transition-colors hover:border-ink/40"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
