'use client'
import { useState, useEffect } from 'react'
import Logo from './Logo'
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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'bg-black/95 backdrop-blur-sm border-b border-white/5' : 'bg-transparent'}`}>
      <div className="px-8 md:px-12 h-16 flex items-center justify-between">
        {/* Logo text */}
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="text-white/70 tracking-[0.3em] text-xs font-light hover:text-white transition-colors">
          RAVES CAPITAL
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={(e) => handleScroll(e, l.href)}
              className="text-white/40 hover:text-white/90 tracking-[0.15em] xl:tracking-[0.2em] text-[9px] xl:text-[10px] font-light transition-colors duration-300 whitespace-nowrap">
              {l.label}
            </a>
          ))}
          <div className="w-px h-4 bg-white/20 ml-2" />
          <div className="flex items-center gap-3">
            <button onClick={() => setLocale('en')}
              className={`tracking-[0.15em] text-[10px] font-light transition-colors ${locale === 'en' ? 'text-white' : 'text-white/30 hover:text-white/60'}`}>
              EN
            </button>
            <span className="text-white/20 text-xs">|</span>
            <button onClick={() => setLocale('es')}
              className={`tracking-[0.15em] text-[10px] font-light transition-colors ${locale === 'es' ? 'text-white' : 'text-white/30 hover:text-white/60'}`}>
              ES
            </button>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-4 lg:hidden">
          <div className="flex items-center gap-3">
            <button onClick={() => setLocale('en')}
              className={`tracking-[0.15em] text-[10px] font-light transition-colors ${locale === 'en' ? 'text-white' : 'text-white/30'}`}>
              EN
            </button>
            <span className="text-white/20 text-xs">|</span>
            <button onClick={() => setLocale('es')}
              className={`tracking-[0.15em] text-[10px] font-light transition-colors ${locale === 'es' ? 'text-white' : 'text-white/30'}`}>
              ES
            </button>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white/60 hover:text-white p-1">
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
        <div className="lg:hidden bg-black/98 border-t border-white/5 px-8 py-6 flex flex-col gap-5">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={(e) => handleScroll(e, l.href)}
              className="text-white/60 hover:text-white tracking-[0.2em] text-xs font-light transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
