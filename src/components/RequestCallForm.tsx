import { useState, type FormEvent } from 'react'
import { ArrowRight, Check, Loader2 } from 'lucide-react'
import { isDev, submitToNetlify } from '../lib/netlify'

type Status = 'idle' | 'sending' | 'done' | 'error'

const fields = [
  { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name', autoComplete: 'name' },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'you@company.com',
    autoComplete: 'email',
  },
  {
    name: 'phone',
    label: 'Phone Number',
    type: 'tel',
    placeholder: '+91 98XXX XXXXX',
    autoComplete: 'tel',
  },
  { name: 'zip', label: 'Pin Code', type: 'text', placeholder: '560043', autoComplete: 'postal-code' },
] as const

export function RequestCallForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')

    // Capture the node now — React nulls out currentTarget once the handler
    // returns, so it is not safe to touch after the await below.
    const form = event.currentTarget
    const data = Object.fromEntries(
      Array.from(new FormData(form).entries()).map(([key, value]) => [key, String(value)]),
    )

    try {
      await submitToNetlify('request-a-call', data)
      setStatus('done')
      form.reset()
    } catch (error) {
      // `vite dev` has no Netlify backend — treat the 404 as success locally so
      // the flow stays testable, but log it so a real prod failure is visible.
      if (isDev) {
        console.info('[dev] Netlify form POST skipped — payload was:', data)
        setStatus('done')
        form.reset()
        return
      }
      console.error('Request A Call submission failed:', error)
      setStatus('error')
    }
  }

  return (
    <form
      name="request-a-call"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-ink-900/85 p-4 shadow-2xl backdrop-blur-xl sm:p-5"
    >
      <input type="hidden" name="form-name" value="request-a-call" />
      <p className="hidden">
        <label>
          Leave this empty: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[repeat(4,minmax(0,1fr))_auto]">
        {fields.map((field) => (
          <label key={field.name} className="group block">
            <span className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-white/45 transition-colors duration-300 group-focus-within:text-flame-500">
              {field.label}
            </span>
            <input
              name={field.name}
              type={field.type}
              required
              autoComplete={field.autoComplete}
              placeholder={field.placeholder}
              className="w-full rounded-lg border border-white/12 bg-white/[0.06] px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 transition-all duration-300 hover:border-white/25 focus:border-flame-500 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-flame-500/25"
            />
          </label>
        ))}

        <div className="flex items-end sm:col-span-2 lg:col-span-1">
          <button
            type="submit"
            disabled={status === 'sending' || status === 'done'}
            className="shimmer-on-hover group flex h-[42px] w-full items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-semibold text-ink-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-flame-500 hover:shadow-lg hover:shadow-flame-500/25 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 lg:w-auto"
          >
            {status === 'sending' && <Loader2 className="h-4 w-4 animate-spin" />}
            {status === 'done' && <Check className="h-4 w-4" />}
            {status === 'idle' || status === 'error' ? 'Request A Call' : null}
            {status === 'sending' && 'Sending'}
            {status === 'done' && 'Received'}
            {(status === 'idle' || status === 'error') && (
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2.4}
              />
            )}
          </button>
        </div>
      </div>

      <p
        aria-live="polite"
        className={`mt-3 text-[11px] leading-relaxed transition-colors duration-300 ${
          status === 'error' ? 'text-red-300' : 'text-white/35'
        }`}
      >
        {status === 'done'
          ? 'Thanks — we have your details and will call you back shortly.'
          : status === 'error'
            ? 'Something went wrong sending that. Please call us instead on 080 4205 2762.'
            : 'By submitting your contact details, you agree to be contacted by Prateek Enterprises about your Bharat Gas enquiry.'}
      </p>
    </form>
  )
}
