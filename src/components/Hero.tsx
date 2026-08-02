import { MapPin } from 'lucide-react'
import { RequestCallForm } from './RequestCallForm'
import { business } from '../data/site'

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink-900">
      {/* Slow ambient zoom keeps the hero from feeling static */}
      <img
        src="/images/hero-truck.jpg"
        alt="A Bharat Gas cylinder truck operated by Prateek Enterprises on a highway"
        className="hero-zoom absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-70"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-900/85 via-ink-900/55 to-ink-900/92" />

      <div className="mx-auto max-w-7xl px-5 pb-10 pt-32 sm:px-8 sm:pb-14 sm:pt-40 lg:pt-48">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white [animation:reveal-up_0.8s_cubic-bezier(0.22,1,0.36,1)_0.18s_both] sm:text-5xl lg:text-6xl">
            Your Trusted{' '}
            <span className="relative whitespace-nowrap text-flame-500">
              Bharat Gas
              <svg
                className="absolute -bottom-1.5 left-0 h-2.5 w-full text-flame-500/45"
                viewBox="0 0 200 9"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 6.5C40 2.5 80 1.5 198 4.5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  pathLength={1}
                  className="[stroke-dasharray:1] [animation:draw_1s_ease-out_0.9s_both]"
                />
              </svg>
            </span>{' '}
            Distributor in Bengaluru
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 [animation:reveal-up_0.8s_cubic-bezier(0.22,1,0.36,1)_0.28s_both] sm:text-lg">
            Domestic and commercial LPG, delivered on time. From a single household refill in
            Banaswadi to scheduled bulk supply for kitchens, hospitals and corporate campuses across
            the city.
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm text-white/55 [animation:reveal-up_0.8s_cubic-bezier(0.22,1,0.36,1)_0.36s_both]">
            <MapPin className="h-4 w-4 shrink-0 text-flame-500" strokeWidth={2.2} />
            {business.address.full}
          </div>
        </div>

        <div className="mt-12 [animation:reveal-up_0.9s_cubic-bezier(0.22,1,0.36,1)_0.45s_both] sm:mt-16">
          <RequestCallForm />
        </div>
      </div>
    </section>
  )
}
