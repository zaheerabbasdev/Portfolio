import { useEffect, useRef } from 'react'
import type { RefObject } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface ScrollRevealOptions {
  /** CSS selector, scoped to the container, for the items to stagger in. */
  itemSelector: string
  y?: number
  stagger?: number
  duration?: number
  start?: string
}

// Fades + slides matched elements up into view once per scroll, and skips
// the motion entirely when the user prefers reduced motion.
export function useScrollReveal<T extends HTMLElement>({
  itemSelector,
  y = 32,
  stagger = 0.12,
  duration = 0.7,
  start = 'top 80%',
}: ScrollRevealOptions): RefObject<T | null> {
  const containerRef = useRef<T | null>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const items = container.querySelectorAll<HTMLElement>(itemSelector)
    if (items.length === 0) return

    if (prefersReducedMotion) {
      gsap.set(items, { opacity: 1, y: 0 })
      return
    }

    const ctx = gsap.context(() => {
      gsap.set(items, { opacity: 0, y })
      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container,
          start,
        },
      })
    }, container)

    return () => ctx.revert()
  }, [itemSelector, y, stagger, duration, start, prefersReducedMotion])

  return containerRef
}

export { ScrollTrigger }
