import { useCallback, useEffect, useRef, useState } from 'react'
import type { KeyboardEvent, TouchEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { testimonials } from '@/data/testimonials'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

const ROTATE_MS = 20_000
const SWIPE_THRESHOLD = 40

// One testimonial visible at a time, in a wide card that reuses the Project
// Card's own visual language (border, background, rounded-sm corners,
// typography scale) and the Project Carousel's sliding-track transition,
// arrow design and swipe/keyboard handling - restyled for a single wide
// slide, not reinvented. Auto-advances every 20s; looping at the ends
// (unlike the Project Carousel, which stops there) matches this carousel's
// pre-existing modulo-index behavior. Entries without quote text are
// filtered out, as before.
export function TestimonialCarousel() {
  const entries = testimonials.filter((item) => item.quote.trim().length > 0)
  const [index, setIndex] = useState(0)
  const prefersReducedMotion = usePrefersReducedMotion()
  const timerRef = useRef<number | null>(null)
  const touchStartX = useRef<number | null>(null)

  const clearTimer = () => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  const restartTimer = useCallback(() => {
    clearTimer()
    if (prefersReducedMotion || entries.length <= 1) return
    timerRef.current = window.setInterval(() => {
      setIndex((current) => (current + 1) % entries.length)
    }, ROTATE_MS)
  }, [entries.length, prefersReducedMotion])

  useEffect(() => {
    restartTimer()
    return clearTimer
  }, [restartTimer])

  if (entries.length === 0) return null

  const goTo = (next: number) => {
    setIndex((next + entries.length) % entries.length)
    restartTimer()
  }

  const goPrev = () => goTo(index - 1)
  const goNext = () => goTo(index + 1)

  const trackStyle = { transform: `translateX(-${index * 100}%)` }

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') goPrev()
    if (event.key === 'ArrowRight') goNext()
  }

  const onTouchStart = (event: TouchEvent) => {
    touchStartX.current = event.touches[0].clientX
  }

  const onTouchEnd = (event: TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = event.changedTouches[0].clientX - touchStartX.current
    if (delta > SWIPE_THRESHOLD) goPrev()
    if (delta < -SWIPE_THRESHOLD) goNext()
    touchStartX.current = null
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Testimonials"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className="relative w-full"
    >
      <div className="overflow-hidden">
        <div aria-live="polite" className="flex transition-transform duration-500 ease-out" style={trackStyle}>
          {entries.map((entry, entryIndex) => (
            <div key={entry.id} className="w-full flex-none px-1" aria-hidden={entryIndex !== index}>
              <article className="flex min-h-[220px] flex-col items-center justify-center gap-6 rounded-sm border border-ink/10 bg-white p-8 text-center sm:p-10 lg:p-12">
                <p className="max-w-2xl text-sm leading-relaxed text-muted">&ldquo;{entry.quote}&rdquo;</p>
                <div>
                  <p className="font-display text-sm font-bold text-ink">{entry.name}</p>
                  <p className="text-xs text-muted">{entry.role}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {entries.length > 1 && (
        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <span className="font-display text-xs font-semibold tracking-[0.2em] text-muted">
            {String(index + 1).padStart(2, '0')} / {String(entries.length).padStart(2, '0')}
          </span>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      )}
    </div>
  )
}
