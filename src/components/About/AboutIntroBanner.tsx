import { about } from '@/data/about'
import { Container } from '@/components/ui/Container'
import { BracketButton } from '@/components/ui/BracketButton'

// The black horizontal band that opens the About section, sitting flush
// against the bottom of the Hero (full-bleed, no section padding above it)
// and immediately above the existing "About Me" content. Deliberately a
// plain bold headline rather than the boxed SectionHeading style used for
// "About Me" / "Skills" / etc., so the two don't read as two stacked
// section titles.
export function AboutIntroBanner() {
  return (
    <div className="relative overflow-hidden bg-[#1d1d1d] py-10 sm:py-12 lg:py-14">
      <svg
        aria-hidden="true"
        viewBox="0 0 64 64"
        className="pointer-events-none absolute -right-10 top-1/2 hidden h-56 w-56 -translate-y-1/2 text-cloud/10 lg:block xl:-right-6 xl:h-72 xl:w-72"
      >
        <g fill="currentColor">
          <path d="M11.55 15.35 L24.8 15.35 L20.25 23.72 L16.11 23.72Z" />
          <path d="M29.45 15.35 L38.92 15.35 L21.03 48.65 L11.6 48.65Z" />
          <path d="M39.24 24.09 L52.45 48.65 L43.02 48.65 L34.51 32.83Z" />
          <path d="M30.09 40.33 L33.86 40.33 L38.33 48.65 L25.68 48.65Z" />
        </g>
      </svg>

      <Container>
        <div className="relative z-10 max-w-lg">
          <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-cloud sm:text-3xl">
            {about.banner.heading}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-dark sm:text-base">{about.banner.body}</p>
          <div className="mt-6">
            <BracketButton
              onDark
              label={about.banner.action}
              onClick={() => document.getElementById('about-content')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}
