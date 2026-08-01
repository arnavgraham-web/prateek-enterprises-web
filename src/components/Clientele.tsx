import { Building2 } from 'lucide-react'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'
import { clients } from '../data/site'

/** Initials used as a stand-in logo mark until real client logos are supplied. */
function initials(name: string) {
  return name
    .replace(/[^\p{L}\p{N} ]/gu, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join('')
}

function ClientCard({ name, sector }: { name: string; sector: string }) {
  return (
    <div className="group flex w-72 shrink-0 items-center gap-3.5 rounded-2xl border border-ink-200 bg-white px-4 py-3.5 transition-all duration-400 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/8">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-sm font-bold tracking-tight text-brand-700 transition-all duration-400 group-hover:bg-brand-600 group-hover:text-white">
        {initials(name)}
      </span>
      <span className="min-w-0">
        {/* Long names (e.g. the hospital) wrap to two lines rather than truncating */}
        <span className="block text-sm font-semibold leading-snug text-ink-900" title={name}>
          {name}
        </span>
        <span className="block text-[11px] font-medium uppercase tracking-wider text-ink-400">
          {sector}
        </span>
      </span>
    </div>
  )
}

export function Clientele() {
  // The marquee track renders the list twice so the -50% translate loops seamlessly.
  const half = Math.ceil(clients.length / 2)
  const rows = [clients.slice(0, half), clients.slice(half)]

  return (
    <section id="clients" className="overflow-hidden border-y border-ink-200 bg-ink-100/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <SectionLabel icon={Building2}>Our Clientele</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Trusted by kitchens, campuses and care providers
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-500">
            Restaurants, cloud kitchens, hospitals, colleges and corporate cafeterias across
            Bengaluru rely on our commercial LPG supply to keep service running.
          </p>
        </Reveal>
      </div>

      {/* Two rows scrolling in opposite directions; both pause on hover */}
      <div className="marquee mt-12 space-y-4">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
          >
            <div
              className="marquee-track flex w-max gap-4 pr-4"
              style={{
                animationDirection: rowIndex % 2 === 1 ? 'reverse' : 'normal',
                animationDuration: rowIndex % 2 === 1 ? '46s' : '38s',
              }}
            >
              {[...row, ...row].map((client, i) => (
                <ClientCard key={`${client.name}-${i}`} name={client.name} sector={client.sector} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm text-ink-500">
            Supplying a multi-site kitchen or campus?{' '}
            <a
              href="#contact"
              className="link-underline font-semibold text-brand-600 hover:text-brand-700"
            >
              Ask us for a customised supply plan
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  )
}
