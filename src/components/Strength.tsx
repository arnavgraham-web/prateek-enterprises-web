import { Shield, Sparkles, Truck, Zap, type LucideIcon } from 'lucide-react'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'
import { CountUp } from './CountUp'
import { stats, strengths } from '../data/site'

const icons: Record<string, LucideIcon> = { zap: Zap, shield: Shield, truck: Truck }

export function Strength() {
  return (
    <section id="strength" className="border-y border-ink-200 bg-ink-100/60">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal direction="left">
              <SectionLabel icon={Sparkles}>Why Choose Us</SectionLabel>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
                Our logistics strength
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ink-500">
                Reliable, safe and fully authorised LPG distribution. Transparent cylinder pricing,
                trained delivery crews and a fleet sized for commercial volumes — for homes and
                businesses right across Bengaluru.
              </p>
            </Reveal>

            <Reveal direction="left" delay={140}>
              <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-ink-200 pt-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-3xl font-bold tracking-tight text-brand-600 sm:text-4xl">
                      <CountUp value={stat.value} suffix={stat.suffix} />
                    </dt>
                    <dd className="mt-1.5 text-xs leading-relaxed text-ink-500">{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="space-y-4">
            {strengths.map((item, i) => {
              const Icon = icons[item.icon] ?? Zap
              return (
                <Reveal key={item.title} direction="right" delay={i * 120}>
                  <article className="group relative overflow-hidden rounded-2xl border border-ink-200 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/8">
                    {/* Accent bar wipes in from the top on hover */}
                    <span className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-brand-600 transition-transform duration-500 ease-out group-hover:scale-y-100" />

                    <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-all duration-500 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-brand-600/25">
                      <Icon
                        className="h-5 w-5 transition-transform duration-500 group-hover:scale-110"
                        strokeWidth={2.1}
                      />
                    </span>

                    <h3 className="text-base font-semibold text-ink-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.body}</p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
