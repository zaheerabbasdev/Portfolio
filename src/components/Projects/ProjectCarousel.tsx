import { useMemo, useRef, useState } from 'react'
import type { KeyboardEvent, TouchEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/Projects/ProjectCard'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const SWIPE_THRESHOLD = 40

// Horizontal, data-driven carousel. `visibleCount` (1 on mobile, 3 on
// desktop) and `projects.length` together decide how far the track can
// travel, so 1, 2, 3 or 4+ projects all behave correctly with no special-casing.
export function ProjectCarousel() {
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const visibleCount = isDesktop ? 3 : 1
  const maxIndex = Math.max(0, projects.length - visibleCount)
  const [index, setIndex] = useState(0)
  const clampedIndex = Math.min(index, maxIndex)

  const touchStartX = useRef<number | null>(null)

  const canGoPrev = clampedIndex > 0
  const canGoNext = clampedIndex < maxIndex

  const goPrev = () => setIndex((current) => Math.max(0, current - 1))
  const goNext = () => setIndex((current) => Math.min(maxIndex, current + 1))

  const trackStyle = useMemo(
    () => ({ transform: `translateX(-${clampedIndex * (100 / visibleCount)}%)` }),
    [clampedIndex, visibleCount],
  )

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
      aria-label="Project portfolio"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className="relative"
    >
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500 ease-out" style={trackStyle}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-full flex-none px-3 lg:w-1/3"
              aria-hidden={false}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {maxIndex > 0 && (
        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={goPrev}
            disabled={!canGoPrev}
            aria-label="Previous project"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:bg-ink hover:text-paper disabled:pointer-events-none disabled:opacity-25"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <span className="font-display text-xs font-semibold tracking-[0.2em] text-muted">
            {String(clampedIndex + 1).padStart(2, '0')} / {String(maxIndex + 1).padStart(2, '0')}
          </span>
          <button
            type="button"
            onClick={goNext}
            disabled={!canGoNext}
            aria-label="Next project"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:bg-ink hover:text-paper disabled:pointer-events-none disabled:opacity-25"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      )}
    </div>
  )
}
