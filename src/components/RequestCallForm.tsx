import { useRef, useState, type FormEvent } from 'react'
import { ArrowRight, Check, Loader2, MessageCircle } from 'lucide-react'
import { isDev, submitToNetlify } from '../lib/netlify'
import { enquiryMessage, whatsappHref } from '../lib/contact'

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
  const formRef = useRef<HTMLFormElement>(null)

  /**
   * Opens WhatsApp with whatever the visitor has typed so far. Deliberately not
   * gated on validation — someone who has only entered a name should still be
   * able to start a chat.
   */
  function openWhatsApp() {
    const form = formRef.current
    if (!form) return

    const data = Object.fromEntries(
      Array.from(new FormData(form).entries()).map(([key, value]) => [key, String(value)]),
    )
    const href = whatsappHref(enquiryMessage(data))
    if (href) window.open(href, '_blank', 'noopener,noreferrer')
  }

  const whatsappEnabled = whatsappHref('') !== null

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
      ref={formRef}
      name="request-a-call"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/60 bg-white/95 p-4 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-5"
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
            <span className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-ink-400 transition-colors duration-300 group-focus-within:text-brand-600">
              {field.label}
            </span>
            <input
              name={field.name}
              type={field.type}
              required
              autoComplete={field.autoComplete}
              placeholder={field.placeholder}
              className="w-full rounded-lg border border-ink-200 bg-ink-100/70 px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 transition-all duration-300 hover:border-ink-400 focus:border-brand-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-600/20"
            />
          </label>
        ))}

        <div className="flex items-end gap-2 sm:col-span-2 lg:col-span-1">
          {/* Hidden entirely until a WhatsApp number is configured in site.ts */}
          {whatsappEnabled && (
            <button
              type="button"
              onClick={openWhatsApp}
              title="Send this enquiry on WhatsApp"
              className="group flex h-[42px] shrink-0 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1EBE5A] hover:shadow-lg hover:shadow-[#25D366]/30 active:translate-y-0"
            >
              <MessageCircle
                className="h-4 w-4 transition-transform duration-500 group-hover:scale-110"
                strokeWidth={2.3}
              />
              <span className="lg:hidden">WhatsApp</span>
            </button>
          )}

          <button
            type="submit"
            disabled={status === 'sending' || status === 'done'}
            className="shimmer-on-hover group flex h-[42px] w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-600/30 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 lg:w-auto"
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
          status === 'error' ? 'text-red-600' : 'text-ink-400'
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
