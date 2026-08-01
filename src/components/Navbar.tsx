import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { Logo } from './Logo'
import { business, navLinks } from '../data/site'

export function Navbar() {
  // Transparent over the hero, solid once the user scrolls past it
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Don't let the page scroll behind the open mobile sheet
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const solid = scrolled || menuOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? 'border-b border-ink-200 bg-white/90 py-3 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Logo light={!solid} />

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`link-underline text-sm font-medium transition-colors duration-300 ${
                  solid ? 'text-ink-700 hover:text-brand-600' : 'text-white/85 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={business.phoneHref}
            className={`group hidden items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 sm:flex ${
              solid
                ? 'bg-ink-900 text-white hover:bg-brand-600'
                : 'bg-white/12 text-white ring-1 ring-white/25 backdrop-blur hover:bg-white hover:text-ink-900'
            }`}
          >
            <Phone
              className="h-4 w-4 transition-transform duration-500 group-hover:rotate-12"
              strokeWidth={2.2}
            />
            {business.phone}
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className={`grid h-10 w-10 place-items-center rounded-lg transition-colors duration-300 lg:hidden ${
              solid ? 'text-ink-800 hover:bg-ink-100' : 'text-white hover:bg-white/15'
            }`}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile sheet — links stagger in from the top */}
      <div
        className={`overflow-hidden bg-white transition-[max-height,opacity] duration-400 lg:hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="space-y-1 px-5 pb-5 pt-3 sm:px-8">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              className={`transition-all duration-500 ${
                menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
              }`}
              style={{ transitionDelay: menuOpen ? `${i * 55}ms` : '0ms' }}
            >
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-100 hover:text-brand-600"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={business.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full bg-ink-900 px-4 py-3 text-sm font-semibold text-white sm:hidden"
            >
              <Phone className="h-4 w-4" strokeWidth={2.2} />
              {business.phone}
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
