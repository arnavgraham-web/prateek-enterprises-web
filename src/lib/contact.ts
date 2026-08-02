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

/**
 * WhatsApp is the channel for new commercial accounts, so every message opens by
 * saying so — it keeps the queue readable and stops domestic refill requests, which
 * belong on the landline, from arriving here unlabelled.
 */
export const COMMERCIAL_INTRO =
  'Hi Prateek Enterprises, I would like to enquire about commercial LPG supply.'

/** Message for the hero enquiry form, built from whatever the visitor filled in. */
export function enquiryMessage(fields: Record<string, string>) {
  const lines = [
    COMMERCIAL_INTRO,
    '',
    fields.name && `Name: ${fields.name}`,
    fields.phone && `Phone: ${fields.phone}`,
    fields.email && `Email: ${fields.email}`,
    fields.zip && `Pin code: ${fields.zip}`,
  ].filter(Boolean)

  return lines.join('\n')
}
