import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { personal } from '@/data/personal'
import { navLinks } from '@/components/Header/navLinks'
import { HeaderBarContent } from '@/components/Header/HeaderBarContent'
import { MobileNav } from '@/components/Header/MobileNav'
import { gsap } from '@/lib/gsap'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

// Persistent black nav bar. Hidden and off-screen above the viewport while
// the user is in the first half of the Hero (where the Fancy Header, which
// never becomes fixed, is the natural navigation); once the user has
// scrolled past ~50% of the Hero's own height, it slides down from the top
// and stays fixed for the rest of the page. Scrolling back above that
// threshold slides it back out, handing navigation back to the Fancy
// Header. The threshold is derived from the Hero section's actual measured
// height (see Hero.tsx's `id="hero"`), not a hardcoded pixel value, so it
// stays correct across viewport sizes and orientation changes.
export function StickyHeader() {
  const barRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    let frame = 0

    const checkThreshold = () => {
      const hero = document.getElementById('hero')
      if (!hero) return
      const rect = hero.getBoundingClientRect()
      const scrolledPastHeroTop = -rect.top
      setVisible(scrolledPastHeroTop >= rect.height / 2)
    }

    const onScrollOrResize = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(checkThreshold)
    }

    checkThreshold()
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
    }
  }, [])

  // GSAP owns this element's transform from the very first paint. (An inline
  // CSS `translateY(-100%)` would be parsed by GSAP into a fixed pixel `y`
  // offset that animating `yPercent` never clears - leaving the bar stuck
  // off-screen even when it should be visible.)
  useLayoutEffect(() => {
    if (barRef.current) gsap.set(barRef.current, { yPercent: -100 })
  }, [])

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    if (prefersReducedMotion) {
      gsap.set(bar, { yPercent: visible ? 0 : -100 })
      return
    }

    gsap.to(bar, {
      yPercent: visible ? 0 : -100,
      duration: 0.45,
      ease: visible ? 'power3.out' : 'power2.in',
    })
  }, [visible, prefersReducedMotion])

  return (
    <>
      <div
        ref={barRef}
        aria-hidden={!visible}
        className={`fixed inset-x-0 top-0 z-40 bg-ink ${visible ? '' : 'pointer-events-none'}`}
      >
        <HeaderBarContent
          variant="scroll"
          menuOpen={menuOpen}
          onOpenMenu={() => setMenuOpen(true)}
          focusable={visible}
        />
      </div>

      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} links={navLinks} resumeUrl={personal.resumeUrl} />
    </>
  )
}
