import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { whatsappHref } from '../lib/contact'

/**
 * Floating WhatsApp button. Appears once the visitor scrolls past the hero, so it
 * never covers the enquiry form that is already on screen at the top.
 *
 * Renders nothing at all when no WhatsApp number is configured — see the
 * `whatsapp` field in src/data/site.ts.
 */
export function WhatsAppFab() {
  const [shown, setShown] = useState(false)
  const href = whatsappHref('Hi Prateek Enterprises, I would like to enquire about LPG supply.')

  useEffect(() => {
    if (!href) return

    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [href])

  if (!href) return null

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat with us on WhatsApp"
      className={`group fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 transition-all duration-500 hover:bg-[#1EBE5A] hover:shadow-2xl ${
        shown ? 'translate-y-0 scale-100 opacity-100' : 'pointer-events-none translate-y-4 scale-90 opacity-0'
      }`}
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" aria-hidden="true" />
      <MessageCircle
        className="relative h-6 w-6 transition-transform duration-500 group-hover:scale-110"
        strokeWidth={2.2}
      />
    </a>
  )
}
