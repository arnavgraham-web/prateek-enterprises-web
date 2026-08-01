import { useState } from 'react'
import { HelpCircle, Phone, Plus } from 'lucide-react'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'
import { business, faqs } from '../data/site'

export function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="border-y border-ink-200 bg-ink-100/60">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
          <div className="space-y-8">
            <Reveal direction="left">
              <SectionLabel icon={HelpCircle}>Questions &amp; Answers</SectionLabel>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-ink-900 sm:text-4xl">
                Frequently asked questions
              </h2>
            </Reveal>

            <Reveal direction="left" delay={120} className="group overflow-hidden rounded-2xl">
              <img
                src="/images/truck-ub-city.jpg"
                alt="A Prateek Enterprises Bharat Gas truck on a commercial delivery run in Bengaluru"
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-80"
              />
            </Reveal>
          </div>

          <div className="space-y-4">
            <Reveal direction="right">
              <div className="divide-y divide-ink-200 overflow-hidden rounded-2xl border border-ink-200 bg-white">
                {faqs.map((faq, i) => {
                  const isOpen = open === i
                  return (
                    <div key={faq.q}>
                      <h3>
                        <button
                          type="button"
                          onClick={() => setOpen(isOpen ? -1 : i)}
                          aria-expanded={isOpen}
                          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-300 hover:bg-ink-100/70"
                        >
                          <span
                            className={`text-sm font-semibold transition-colors duration-300 ${
                              isOpen ? 'text-brand-600' : 'text-ink-900'
                            }`}
                          >
                            {faq.q}
                          </span>
                          <Plus
                            className={`h-4 w-4 shrink-0 transition-all duration-400 ease-out ${
                              isOpen ? 'rotate-135 text-brand-600' : 'rotate-0 text-ink-400'
                            }`}
                            strokeWidth={2.4}
                          />
                        </button>
                      </h3>

                      {/* Grid-rows trick animates to the content's natural height */}
                      <div
                        className={`grid transition-[grid-template-rows,opacity] duration-400 ease-out ${
                          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="px-5 pb-5 text-sm leading-relaxed text-ink-500">{faq.a}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </Reveal>

            <Reveal direction="right" delay={140}>
              <div className="group relative overflow-hidden rounded-2xl bg-ink-900 p-7 text-center">
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-600/25 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-brand-500/30" />

                <h3 className="relative text-lg font-semibold text-white">Need more help?</h3>
                <p className="relative mx-auto mt-2 max-w-sm text-sm leading-relaxed text-white/55">
                  Call us for supply enquiries, new connections or partnership requests — we are
                  happy to assist.
                </p>

                <a
                  href={business.phoneHref}
                  className="shimmer-on-hover relative mt-5 inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-flame-500 hover:text-ink-900 hover:shadow-lg hover:shadow-flame-500/25"
                >
                  <Phone className="h-4 w-4 transition-transform duration-500 group-hover:rotate-12" strokeWidth={2.3} />
                  {business.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
