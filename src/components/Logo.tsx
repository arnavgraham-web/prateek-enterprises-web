import { Flame } from 'lucide-react'

/** Wordmark + flame glyph. `light` renders for dark backgrounds (hero, footer). */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#top"
      className="group flex items-center gap-2.5 transition-transform duration-300 hover:-translate-y-0.5"
      aria-label="Prateek Enterprises — home"
    >
      <span className="relative grid h-9 w-9 place-items-center rounded-lg bg-brand-600 shadow-sm transition-colors duration-300 group-hover:bg-brand-700">
        <Flame className="h-5 w-5 text-flame-500 animate-flame" strokeWidth={2.4} />
      </span>
      <span className="leading-tight">
        <span
          className={`block text-[15px] font-bold tracking-tight ${light ? 'text-white' : 'text-ink-900'}`}
        >
          Prateek Enterprises
        </span>
        <span
          className={`block text-[10px] font-medium uppercase tracking-[0.14em] ${
            light ? 'text-white/60' : 'text-ink-400'
          }`}
        >
          Bharat Gas Distributor
        </span>
      </span>
    </a>
  )
}
