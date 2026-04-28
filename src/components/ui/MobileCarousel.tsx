'use client'

import { Children, useRef, useState, useEffect, type ReactNode } from 'react'

interface MobileCarouselProps {
  children: ReactNode
  /**
   * Tailwind class string for the desktop grid layout (applied at `sm:` and up).
   * Example: "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
   */
  smGridCols: string
  /** Card width on mobile, expressed as a Tailwind width class. Default `w-[85%]` so the next card peeks. */
  mobileCardWidth?: string
  /** Gap class. Default `gap-4 sm:gap-6`. */
  gap?: string
  className?: string
}

/**
 * Mobile-only horizontal scroll-snap carousel that becomes a CSS grid at the `sm:` breakpoint.
 *
 * - Mobile: snap-x / snap-mandatory horizontal scroll. Each child is `w-[85%]` so the next card peeks.
 *   Dot indicators below auto-track the most-visible card via IntersectionObserver. Click a dot to
 *   scroll that card into view smoothly.
 * - `sm:` and up: behaves identically to a CSS grid; dots are hidden.
 */
export default function MobileCarousel({
  children,
  smGridCols,
  mobileCardWidth = 'w-[85%]',
  gap = 'gap-4 sm:gap-6',
  className = '',
}: MobileCarouselProps) {
  const childrenArr = Children.toArray(children)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const root = scrollerRef.current
    if (!root || childrenArr.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible item among intersecting entries.
        const best = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (!best) return
        const idx = itemRefs.current.findIndex((el) => el === best.target)
        if (idx >= 0) setActiveIndex(idx)
      },
      {
        root,
        // Trigger as a slide passes the 60% visibility threshold — feels snappy without thrashing.
        threshold: [0.6, 0.9],
      }
    )

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [childrenArr.length])

  const scrollToIndex = (i: number) => {
    const el = itemRefs.current[i]
    if (el) el.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
  }

  return (
    <div className={className}>
      <div
        ref={scrollerRef}
        className={`-mx-6 flex overflow-x-auto px-6 snap-x snap-mandatory scrollbar-hide sm:mx-0 sm:overflow-visible sm:px-0 sm:grid ${smGridCols} ${gap}`}
      >
        {childrenArr.map((child, i) => (
          <div
            key={i}
            ref={(el) => {
              itemRefs.current[i] = el
            }}
            className={`snap-start shrink-0 ${mobileCardWidth} sm:w-auto sm:shrink`}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Dot indicators — mobile only */}
      {childrenArr.length > 1 && (
        <div
          role="tablist"
          aria-label="Carousel pagination"
          className="flex sm:hidden justify-center items-center gap-2 mt-6"
        >
          {childrenArr.map((_, i) => {
            const active = i === activeIndex
            return (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={active}
                aria-label={`Go to slide ${i + 1} of ${childrenArr.length}`}
                onClick={() => scrollToIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  active
                    ? 'w-8 bg-accent shadow-[0_0_8px_rgba(26,157,176,0.5)]'
                    : 'w-1.5 bg-border hover:bg-accent/40 active:scale-90'
                }`}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
