'use client'
import { useState, useEffect } from 'react'
import { useLang } from '../lib/LanguageContext'

export default function Navbar() {
  const { t, locale, setLocale } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#investments', label: t.nav.investments },
    { href: '#approach', label: t.nav.approach },
    { href: '#philosophy', label: t.nav.philosophy },
    { href: '#investor-relations', label: t.nav.relations },
    { href: '#strategic-partnerships', label: t.nav.partnerships },
    { href: '#contact', label: t.nav.contact },
  ]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const navBg = scrolled
    ? 'rgba(8,13,18,0.97)'
    : 'transparent'

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
      style={{
        background: navBg,
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-light)' : 'none',
      }}>
      <div className="px-8 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="tracking-[0.3em] text-xs font-light transition-colors duration-300"
          style={{ color: 'var(--text-body)' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-body)')}>
          RAVES CAPITAL
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={(e) => handleScroll(e, l.href)}
              className="tracking-[0.15em] xl:tracking-[0.2em] text-[9px] xl:text-[10px] font-light transition-colors duration-300 whitespace-nowrap"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}>
              {l.label}
            </a>
          ))}
          <div className="w-px h-4 ml-2" style={{ background: 'var(--border)' }} />
          <div className="flex items-center gap-3">
            <button onClick={() => setLocale('en')}
              className="tracking-[0.15em] text-[10px] font-light transition-colors"
              style={{ color: locale === 'en' ? 'var(--text-primary)' : 'var(--text-muted)' }}>
              EN
            </button>
            <span className="text-xs" style={{ color: 'var(--border)' }}>|</span>
            <button onClick={() => setLocale('es')}
              className="tracking-[0.15em] text-[10px] font-light transition-colors"
              style={{ color: locale === 'es' ? 'var(--text-primary)' : 'var(--text-muted)' }}>
              ES
            </button>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-4 lg:hidden">
          <div className="flex items-center gap-3">
            <button onClick={() => setLocale('en')}
              className="tracking-[0.15em] text-[10px] font-light transition-colors"
              style={{ color: locale === 'en' ? 'var(--text-primary)' : 'var(--text-muted)' }}>
              EN
            </button>
            <span className="text-xs" style={{ color: 'var(--border)' }}>|</span>
            <button onClick={() => setLocale('es')}
              className="tracking-[0.15em] text-[10px] font-light transition-colors"
              style={{ color: locale === 'es' ? 'var(--text-primary)' : 'var(--text-muted)' }}>
              ES
            </button>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-1 transition-colors"
            style={{ color: 'var(--text-body)' }}>
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-px bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-px bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden px-8 py-6 flex flex-col gap-5"
          style={{ background: 'rgba(8,13,18,0.98)', borderTop: '1px solid var(--border-light)' }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={(e) => handleScroll(e, l.href)}
              className="tracking-[0.2em] text-xs font-light transition-colors"
              style={{ color: 'var(--text-body)' }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
