import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import { attachCarouselWheel } from '../lib/carouselWheel.js'
import { getCenteredOffset } from '../lib/carouselPosition.js'

function restoreCarouselFocus(element, track) {
  // A wheel/touch gesture can hide a slide while one of its links has focus.
  if (track?.contains(document.activeElement)) {
    element?.focus({ preventScroll: true })
  }
}

/** Slides have a stable id, a navigation label, and React content. */
function ProjectCarousel({ slides = [], label = 'Project story', theme = 'dark' }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const touchStart = useRef(null)
  const interactionArea = useRef(null)
  const viewportArea = useRef(null)
  const trackArea = useRef(null)
  const carouselId = useId()
  const index = Math.min(activeIndex, Math.max(0, slides.length - 1))
  const slide = slides[index]

  useEffect(() => {
    const element = interactionArea.current
    if (!element || slides.length < 2) return

    return attachCarouselWheel(element, (direction) => {
      const current = Number(trackArea.current?.dataset.index ?? 0)
      if (current + direction >= 0 && current + direction < slides.length) {
        restoreCarouselFocus(element, trackArea.current)
      }
      setActiveIndex((previous) => {
        const current = Math.min(previous, slides.length - 1)
        return Math.max(0, Math.min(current + direction, slides.length - 1))
      })
    })
  }, [slides.length])

  useLayoutEffect(() => {
    const viewport = viewportArea.current
    const track = trackArea.current
    const activeCard = track?.children[index]
    if (!viewport || !activeCard) return

    function measure() {
      const offset = getCenteredOffset(activeCard.offsetLeft, activeCard.offsetWidth, viewport.clientWidth)
      track.style.transform = `translate3d(${-offset}px, 0, 0)`
      viewport.style.height = `${activeCard.offsetHeight}px`
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(viewport)
    observer.observe(activeCard)
    return () => observer.disconnect()
  }, [index, slides])

  function goTo(nextIndex) {
    const next = Math.max(0, Math.min(nextIndex, slides.length - 1))
    if (next !== index) restoreCarouselFocus(interactionArea.current, trackArea.current)
    setActiveIndex(next)
  }

  function handleKeyDown(event) {
    // Keep keyboard behavior inside links and buttons native.
    if (event.target !== event.currentTarget) return
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault()
      goTo(index + (event.key === 'ArrowRight' ? 1 : -1))
    }
  }

  function handleTouchEnd(event) {
    const start = touchStart.current
    touchStart.current = null
    if (!start || event.touches.length > 0) return
    const end = event.changedTouches[0]
    const dx = end.clientX - start.x
    const dy = end.clientY - start.y
    // Ignore taps, vertical scrolling, and diagonal gestures.
    if (Math.abs(dx) >= 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      goTo(index + (dx < 0 ? 1 : -1))
    }
  }

  if (!slide) return null

  const controlStyle = 'project-carousel-arrow inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white hover:border-white/50 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d0dfbc] disabled:cursor-not-allowed disabled:border-white/10 disabled:text-white/25 disabled:hover:bg-transparent motion-safe:transition-colors sm:size-12'

  return (
    <div
      ref={interactionArea}
      data-theme={theme}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      aria-describedby={`${carouselId}-instructions`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="project-carousel min-w-0 rounded-[28px] focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[#d0dfbc]"
    >
      <p id={`${carouselId}-instructions`} className="sr-only">
        Use the previous and next buttons, choose a slide, or swipe horizontally.
        Horizontal two-finger trackpad swipes also change slides.
        When the carousel itself is focused, use the left and right arrow keys.
      </p>

      <div
        ref={viewportArea}
        className="project-carousel-viewport"
        data-multiple={slides.length > 1}
        onTouchStart={(event) => {
          const touch = event.touches[0]
          touchStart.current = event.touches.length === 1
            ? { x: touch.clientX, y: touch.clientY }
            : null
        }}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={() => { touchStart.current = null }}
      >
        <div ref={trackArea} data-index={index} className="project-carousel-track">
          {slides.map((item, itemIndex) => (
            <div
              key={item.id}
              id={`${carouselId}-slide-${itemIndex}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${itemIndex + 1} of ${slides.length}: ${item.label}`}
              aria-hidden={itemIndex !== index}
              inert={itemIndex !== index}
              className="project-carousel-card rounded-[28px] border border-white/10 bg-[#191d19] p-6 sm:p-10 lg:min-h-[520px] lg:p-14"
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>

      <div className="project-carousel-controls mt-6 flex flex-wrap items-center justify-between gap-x-0 gap-y-3 sm:gap-x-3">
        <div className="flex items-center" role="group" aria-label="Choose a slide">
          {slides.map((item, itemIndex) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Show slide ${itemIndex + 1}: ${item.label}`}
              aria-current={itemIndex === index ? 'step' : undefined}
              aria-controls={`${carouselId}-slide-${itemIndex}`}
              onClick={() => goTo(itemIndex)}
              className="group flex size-11 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#d0dfbc]"
            >
              <span className={`project-carousel-dot h-1.5 rounded-full motion-safe:transition-colors ${itemIndex === index ? 'w-5 bg-[#d0dfbc]' : 'w-1.5 bg-white/30 group-hover:bg-white/60'}`} />
            </button>
          ))}
        </div>

        <p role="status" aria-live="polite" aria-atomic="true" className="sr-only">
          Slide {index + 1} of {slides.length}: {slide.label}
        </p>
        <p aria-hidden="true" className="project-carousel-caption hidden text-xs tracking-wide text-[#a0a79c] sm:block">
          {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')} · {slide.label}
        </p>

        <div className="flex gap-2">
          <button type="button" aria-label="Previous slide" aria-controls={`${carouselId}-slide-${index}`} disabled={index === 0} onClick={() => goTo(index - 1)} className={controlStyle}>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
              <path d="m14 6-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button type="button" aria-label="Next slide" aria-controls={`${carouselId}-slide-${index}`} disabled={index === slides.length - 1} onClick={() => goTo(index + 1)} className={controlStyle}>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
              <path d="m10 6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCarousel
