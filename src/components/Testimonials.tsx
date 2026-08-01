import { MessageSquareQuote, Star } from 'lucide-react'
import { Reveal } from './Reveal'
import { SectionLabel } from './SectionLabel'
import { business, testimonials } from '../data/site'

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <SectionLabel icon={MessageSquareQuote}>Testimonials</SectionLabel>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
          What customers say about our service
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-500">
          Rated {business.rating.score} across {business.rating.count} Google reviews by households
          and businesses across east Bengaluru.
        </p>
      </Reveal>

      {/*
        Visible build-time reminder. These cards render placeholder copy, not real
        reviews — delete this banner and the placeholders together once genuine
        Google reviews are pasted into `testimonials` in src/data/site.ts.
      */}
      <Reveal className="mx-auto mt-8 max-w-2xl">
        <p className="rounded-xl border border-dashed border-flame-600/50 bg-flame-400/10 px-4 py-3 text-center text-xs font-medium text-ink-700">
          ⚠ Placeholder reviews — replace with real Google reviews in{' '}
          <code className="font-mono">src/data/site.ts</code> before launch, then remove this
          notice.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {testimonials.map((review, i) => (
          <Reveal key={i} delay={i * 110}>
            <figure className="group h-full rounded-2xl border border-ink-200 bg-white p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/8">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink-100 text-sm font-semibold text-ink-500 transition-colors duration-400 group-hover:bg-brand-600 group-hover:text-white">
                  {i + 1}
                </span>
                <figcaption className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-ink-900">
                    {review.name}
                  </span>
                  <span className="block text-xs text-ink-400">{review.date}</span>
                </figcaption>
              </div>

              <div className="mt-4 flex gap-0.5" aria-label={`${review.stars} out of 5 stars`}>
                {Array.from({ length: 5 }, (_, star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 transition-transform duration-300 ${
                      star < review.stars
                        ? 'fill-flame-500 text-flame-500 group-hover:scale-110'
                        : 'fill-ink-200 text-ink-200'
                    }`}
                    style={{ transitionDelay: `${star * 45}ms` }}
                  />
                ))}
              </div>

              <blockquote className="mt-4 text-sm leading-relaxed text-ink-500">
                {review.body}
              </blockquote>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
