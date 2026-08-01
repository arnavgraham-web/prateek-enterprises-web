import type { ElementType, ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

type Direction = 'up' | 'left' | 'right' | 'scale'

const directionClass: Record<Direction, string> = {
  up: '',
  left: 'reveal-left',
  right: 'reveal-right',
  scale: 'reveal-scale',
}

type RevealProps = {
  children: ReactNode
  /** Entrance direction. Defaults to a rise from below. */
  direction?: Direction
  /** Stagger, in ms, applied as animation-delay. */
  delay?: number
  className?: string
  as?: ElementType
  id?: string
}

/**
 * Wraps content in a scroll-triggered entrance animation.
 * The animation itself lives in index.css (.reveal / .is-visible) so it can be
 * switched off wholesale by prefers-reduced-motion.
 */
export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  as: Tag = 'div',
  id,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${directionClass[direction]} ${inView ? 'is-visible' : ''} ${className}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
