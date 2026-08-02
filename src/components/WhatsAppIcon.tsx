/**
 * The official WhatsApp glyph — green rounded-square icon, white phone.
 * Source: Wikimedia Commons, File:WhatsApp.svg (PD — simple geometry,
 * ineligible for copyright, though the mark remains Meta/WhatsApp's trademark).
 *
 * It's a full-colour badge, not a single-tone icon, so it reads best on a
 * neutral (white/dark) surface rather than stamped onto another solid green
 * fill — every call site below was changed off bg-[#25D366] accordingly.
 */
export function WhatsAppIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return <img src="/images/whatsapp-icon.svg" alt="" className={className} />
}
