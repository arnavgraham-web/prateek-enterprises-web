import type { LucideIcon } from 'lucide-react'

/** Small eyebrow above each section heading, e.g. "⚙ Services". */
export function SectionLabel({
  icon: Icon,
  children,
  light = false,
}: {
  icon: LucideIcon
  children: string
  light?: boolean
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] ${
        light ? 'text-white/55' : 'text-ink-400'
      }`}
    >
      <Icon className="h-3.5 w-3.5" strokeWidth={2.2} />
      {children}
    </span>
  )
}
