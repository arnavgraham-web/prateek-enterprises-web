import { Building2 } from 'lucide-react'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'
import { clients, type Client } from '../data/site'

/**
 * One tile on the wall. Renders the real logo when we have one, and a wordmark
 * tile when we don't — both at the same size, so a partial logo set still reads
 * as a deliberate design rather than a broken grid.
 *
 * Logos sit greyscale at rest and come to full colour on hover, which stops a
 * dozen unrelated brand palettes from fighting each other.
 */
function ClientCard({ name, sector, logo, invert }: Client) {
  return (
    <div className="group flex h-[104px] w-72 shrink-0 flex-col items-center justify-center gap-2.5 rounded-2xl border border-ink-200 bg-white px-5 py-4 transition-all duration-400 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/8">
      {logo ? (
        /* Fixed box + object-contain: very wide marks (East Point is ~10:1) fill the
           width, squarer marks fill the height, and every tile stays the same size. */
        <img
          src={logo}
          alt={`${name} logo`}
          loading="lazy"
          className={`h-11 w-[204px] object-contain grayscale transition-all duration-500 group-hover:grayscale-0 ${
            invert ? 'invert' : ''
          }`}
        />
      ) : (
        <span
          className="line-clamp-2 text-center text-[15px] font-bold leading-tight tracking-tight text-ink-500 transition-colors duration-400 group-hover:text-brand-700"
          title={name}
        >
          {name}
        </span>
      )}

      <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-ink-400">
        {sector}
      </span>
    </div>
  )
}

export function Clientele() {
  // Alternate entries between the two rows so logo tiles and wordmark tiles stay
  // mixed — a straight split would stack every logo in one row.
  // The marquee track renders each row twice so the -50% translate loops seamlessly.
  const rows = [
    clients.filter((_, i) => i % 2 === 0),
    clients.filter((_, i) => i % 2 === 1),
  ]

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
                <ClientCard key={`${client.name}-${i}`} {...client} />
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
