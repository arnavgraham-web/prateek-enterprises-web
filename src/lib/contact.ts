import { business } from '../data/site'

/**
 * Builds a wa.me deep link with a prefilled message.
 *
 * Returns null when no WhatsApp number is configured, so callers can hide the
 * button entirely rather than render a link that opens WhatsApp to nowhere.
 * See the `whatsapp` field in src/data/site.ts.
 */
export function whatsappHref(message: string): string | null {
  const number = business.whatsapp.replace(/\D/g, '')
  if (!number) return null
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

/** Message for the hero enquiry form, built from whatever the visitor filled in. */
export function enquiryMessage(fields: Record<string, string>) {
  const lines = [
    'Hi Prateek Enterprises, I would like to enquire about an LPG connection.',
    '',
    fields.name && `Name: ${fields.name}`,
    fields.phone && `Phone: ${fields.phone}`,
    fields.email && `Email: ${fields.email}`,
    fields.zip && `Pin code: ${fields.zip}`,
  ].filter(Boolean)

  return lines.join('\n')
}
