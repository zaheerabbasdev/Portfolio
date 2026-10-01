import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface LoaderProps {
  onComplete: () => void
}

const MIN_VISIBLE_MS = 1200
const REDUCED_MOTION_MS = 400
const HARD_CAP_MS = 4000

// Full-screen initial loader, adapted from the supplied nine-square design
// into a GSAP-driven loop instead of the original styled-components keyframes.
export function Loader({ onComplete }: LoaderProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const overlay = overlayRef.current
    if (!overlay) return

    const squares = gridRef.current?.querySelectorAll<HTMLElement>('.loader-square') ?? []
    const minVisible = prefersReducedMotion ? REDUCED_MOTION_MS : MIN_VISIBLE_MS

    let loopTween: gsap.core.Tween | null = null
    if (!prefersReducedMotion && squares.length > 0) {
      loopTween = gsap.to(squares, {
        opacity: 0.15,
        duration: 0.5,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        stagger: { each: 0.08, from: 'start', repeat: -1 },
      })
    }

    const minTimePromise = new Promise<void>((resolve) => setTimeout(resolve, minVisible))
    const pageLoadPromise = new Promise<void>((resolve) => {
      if (document.readyState === 'complete') {
        resolve()
        return
      }
      window.addEventListener('load', () => resolve(), { once: true })
    })

    let finished = false
    const finish = () => {
      if (finished) return
      finished = true
      loopTween?.kill()
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.55,
        ease: 'power2.inOut',
        onComplete,
      })
    }

    Promise.all([minTimePromise, pageLoadPromise]).then(finish)
    // Hard cap: the loader must never stay stuck, even if `load` never fires.
    const hardCap = window.setTimeout(finish, HARD_CAP_MS)

    return () => {
      window.clearTimeout(hardCap)
      loopTween?.kill()
    }
  }, [onComplete, prefersReducedMotion])

  return (
    <div
      ref={overlayRef}
      role="status"
      aria-label="Loading portfolio"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-ink"
    >
      <div ref={gridRef} className="grid grid-cols-3 gap-2.5">
        {Array.from({ length: 9 }).map((_, index) => (
          <span key={index} className="loader-square h-2.5 w-2.5 bg-paper" />
        ))}
      </div>
    </div>
  )
}
