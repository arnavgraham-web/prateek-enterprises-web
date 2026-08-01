import { BadgeCheck } from 'lucide-react'
import { Reveal } from './Reveal'
import { business } from '../data/site'

const collage = [
  { src: '/images/truck-vidhana-soudha.jpg', alt: 'Bharat Gas truck passing Vidhana Soudha, Bengaluru', span: 'row-span-2' },
  { src: '/images/delivery-staff.jpg', alt: 'Uniformed delivery crew handling a Bharat Gas cylinder', span: '' },
  { src: '/images/showroom-alt.jpg', alt: 'The Prateek Enterprises Bharat Gas showroom in OMBR Layout', span: '' },
]

export function TrustPanel() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
      <Reveal direction="scale">
        <div className="overflow-hidden rounded-3xl bg-brand-600 bg-[radial-gradient(120%_120%_at_0%_0%,var(--color-brand-500),var(--color-brand-700))]">
          <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-14">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-white/20 backdrop-blur">
                <BadgeCheck className="h-4 w-4" strokeWidth={2.3} />
                Trusted
              </span>

              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Trusted supply,
                <br />
                delivered with care.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-relaxed text-white/75 sm:text-base">
                Our commitment to safety, reliability and long-term relationships is what sets us
                apart. As an authorised {business.brand} distributor, every cylinder we hand over is
                sealed, weight-checked and delivered by a trained crew — so your household or
                kitchen keeps running without a second thought.
              </p>

              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-flame-500 hover:text-ink-900 hover:shadow-lg hover:shadow-black/15"
              >
                Talk to our team
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4">
              {collage.map((image, i) => (
                <div
                  key={image.src}
                  className={`group overflow-hidden rounded-2xl ring-1 ring-white/15 ${image.span}`}
                  style={{ animationDelay: `${i * 90}ms` }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
