import { useEffect, useRef, useState } from 'react'

/**
 * Fires once when the element scrolls into view. Used to trigger the CSS
 * reveal animations — we unobserve after the first hit so sections don't
 * re-animate when the user scrolls back up.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(rootMargin = '-12% 0px') {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // No IntersectionObserver (or a very old browser): show content immediately
    // rather than leaving it stuck at opacity 0.
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    // IntersectionObserver does not report while the document is hidden — a
    // background tab, a prerender, or an offscreen embed. Without this guard the
    // page would paint fully blank on restore, since .reveal starts at opacity 0.
    if (document.visibilityState === 'hidden') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(entry.target)
        }
      },
      { rootMargin, threshold: 0.05 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin])

  return { ref, inView }
}
