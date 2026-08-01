import { ArrowUpRight, Cylinder } from 'lucide-react'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'
import { services } from '../data/site'

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <SectionLabel icon={Cylinder}>Services</SectionLabel>
        <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
          What we supply
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-500">
          One authorised distributor for the whole range — from a single household cylinder to a
          standing commercial contract.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={i * 110} className="h-full">
            {/* Column layout + mt-auto on the image keeps every card's photo on the
                same baseline, however long the blurb runs. */}
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/8">
              <div className="flex items-start justify-between gap-4 p-5 pb-4">
                <h3 className="text-base font-semibold leading-snug text-ink-900 transition-colors duration-300 group-hover:text-brand-600">
                  {service.title}
                </h3>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink-100 text-ink-500 transition-all duration-400 group-hover:bg-brand-600 group-hover:text-white">
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-400 group-hover:rotate-45"
                    strokeWidth={2.3}
                  />
                </span>
              </div>

              <p className="px-5 pb-5 text-sm leading-relaxed text-ink-500">{service.body}</p>

              <div className="mx-3 mb-3 mt-auto overflow-hidden rounded-xl">
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  className="h-48 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-107"
                />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
