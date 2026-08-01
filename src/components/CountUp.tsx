import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Counts up to `value` the first time the number scrolls into view. */
export function CountUp({
  value,
  suffix = '',
  duration = 1400,
}: {
  value: number
  suffix?: string
  duration?: number
}) {
  const { ref, inView } = useInView<HTMLSpanElement>('0px')
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return

    if (prefersReducedMotion()) {
      setDisplay(value)
      return
    }

    let frame = 0
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      // easeOutExpo — fast start, gentle settle
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setDisplay(Math.round(eased * value))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  )
}
