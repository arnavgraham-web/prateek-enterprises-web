import { Clock, Mail, MapPin, Navigation, Phone } from 'lucide-react'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'
import { business } from '../data/site'

export function Location() {
  return (
    <section id="location" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <SectionLabel icon={MapPin}>Our Location</SectionLabel>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
          Where does Prateek Enterprises operate?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-500">
          Our showroom is in OMBR Layout, Banaswadi — walk in for new connections, refills and
          commercial supply enquiries.
        </p>
      </Reveal>

      <Reveal direction="scale" delay={100} className="mt-12">
        <div className="group overflow-hidden rounded-3xl border border-ink-200 bg-white">
          <div className="overflow-hidden">
            <img
              src="/images/showroom.jpg"
              alt="The Prateek Enterprises Bharat Gas showroom front in OMBR Layout, Banaswadi"
              loading="lazy"
              className="h-64 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105 sm:h-96"
            />
          </div>

          <div className="grid gap-8 p-7 sm:p-9 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-ink-900">
                {business.name}
                <span className="ml-2 text-sm font-medium text-ink-400">
                  {business.nameKannada}
                </span>
              </h3>

              <ul className="mt-5 space-y-3.5 text-sm">
                <li className="flex gap-3 text-ink-500">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" strokeWidth={2.2} />
                  <span>
                    {business.address.line1}
                    <br />
                    {business.address.line2}
                    <span className="mt-1 block text-xs text-ink-400">
                      {business.address.landmark}
                    </span>
                  </span>
                </li>
                <li className="flex gap-3 text-ink-500">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" strokeWidth={2.2} />
                  <span>
                    {business.hours.map((slot) => (
                      <span key={slot.days} className="block">
                        {slot.days} · {slot.time}
                      </span>
                    ))}
                  </span>
                </li>
                <li className="flex gap-3 text-ink-500">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" strokeWidth={2.2} />
                  <span>
                    <a href={business.phoneHref} className="link-underline hover:text-brand-600">
                      {business.phone}
                    </a>
                    <span className="mt-0.5 block text-xs text-ink-400">
                      Refills, connections &amp; bookings
                    </span>
                  </span>
                </li>
                <li className="flex gap-3 text-ink-500">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" strokeWidth={2.2} />
                  <a href={business.emailHref} className="link-underline hover:text-brand-600">
                    {business.email}
                  </a>
                </li>
              </ul>
            </div>

            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="group/btn flex items-center justify-center gap-2.5 rounded-2xl bg-ink-900 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-lg hover:shadow-brand-600/25"
            >
              <Navigation
                className="h-4 w-4 transition-transform duration-500 group-hover/btn:rotate-45"
                strokeWidth={2.3}
              />
              Get directions
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
