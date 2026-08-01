import { useState, type FormEvent } from 'react'
import { Check, Loader2, MapPin, Phone, Send } from 'lucide-react'
import { Logo } from './Logo'
import { Reveal } from './Reveal'
import { business, navLinks } from '../data/site'
import { isDev, submitToNetlify } from '../lib/netlify'

type Status = 'idle' | 'sending' | 'done' | 'error'

function GetInTouchForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')

    const form = event.currentTarget
    const email = String(new FormData(form).get('email') ?? '')

    try {
      await submitToNetlify('get-in-touch', { email })
      setStatus('done')
      form.reset()
    } catch (error) {
      if (isDev) {
        console.info('[dev] Netlify form POST skipped — email was:', email)
        setStatus('done')
        form.reset()
        return
      }
      console.error('Get in touch submission failed:', error)
      setStatus('error')
    }
  }

  return (
    <form
      name="get-in-touch"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="mt-6"
    >
      <input type="hidden" name="form-name" value="get-in-touch" />
      <p className="hidden">
        <label>
          Leave this empty: <input name="bot-field" />
        </label>
      </p>

      <div className="flex max-w-md gap-2">
        <input
          name="email"
          type="email"
          required
          placeholder="Your email address"
          autoComplete="email"
          className="min-w-0 flex-1 rounded-lg border border-white/12 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-white/30 transition-all duration-300 hover:border-white/25 focus:border-flame-500 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-flame-500/25"
        />
        <button
          type="submit"
          disabled={status === 'sending' || status === 'done'}
          className="shimmer-on-hover group flex shrink-0 items-center gap-2 rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-flame-500 hover:text-ink-900 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'sending' ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : status === 'done' ? (
            <Check className="h-4 w-4" />
          ) : (
            <Send
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2.3}
            />
          )}
          <span className="hidden sm:inline">
            {status === 'done' ? 'Sent' : status === 'sending' ? 'Sending' : 'Submit'}
          </span>
        </button>
      </div>

      <p
        aria-live="polite"
        className={`mt-3 text-xs ${status === 'error' ? 'text-red-300' : 'text-white/35'}`}
      >
        {status === 'done'
          ? 'Thanks — we will be in touch.'
          : status === 'error'
            ? `Could not send that. Please call us on ${business.phone}.`
            : 'Leave your email and we will get back to you.'}
      </p>
    </form>
  )
}

export function Footer() {
  return (
    <footer id="contact" className="bg-ink-900 text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <Reveal>
            <Logo light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              Fast, reliable and fully authorised domestic &amp; commercial LPG distribution.
              An official {business.brand} dealer serving Bengaluru.
            </p>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-flame-500">
              {business.tagline}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h3 className="text-sm font-semibold text-white">Explore</h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a href="#top" className="link-underline text-sm text-white/50 transition-colors hover:text-white">
                  Home
                </a>
              </li>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-underline text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={180}>
            <h3 className="text-sm font-semibold text-white">Reach us</h3>
            <ul className="mt-5 space-y-4 text-sm text-white/50">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-flame-500" strokeWidth={2.2} />
                <span>
                  {business.address.line1}
                  <br />
                  {business.address.line2}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-flame-500" strokeWidth={2.2} />
                <a href={business.phoneHref} className="link-underline hover:text-white">
                  {business.phone}
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-16 border-t border-white/10 pt-12">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Get in touch
          </h2>
          <p className="mt-2 max-w-md text-sm text-white/50">
            Have questions or need assistance? We are here to help.
          </p>
          <GetInTouchForm />
        </Reveal>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p>
            Authorised {business.brand} distributor · {business.parent}
          </p>
        </div>
      </div>
    </footer>
  )
}
