'use client'
import { useLang } from '../lib/LanguageContext'

export default function Hero() {
  const { t } = useLang()

  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col" style={{ background: 'var(--bg-primary)' }}>
      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      {/* Left border line */}
      <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px" style={{ background: 'var(--border-light)' }} />

      {/* Content */}
      <div className="relative flex-1 flex flex-col px-8 md:px-16 pt-32 pb-24">
        {/* Eyebrow */}
        <p className="tracking-[0.4em] text-[10px] font-light mb-16 reveal" style={{ color: 'var(--text-muted)' }}>
          {t.hero.eyebrow}
        </p>

        {/* Main layout */}
        <div className="flex-1 flex flex-col lg:flex-row lg:items-end">
          {/* Left: logo + content */}
          <div className="flex-1 flex flex-col justify-end">
            {/* Logo mark */}
            <div className="mb-10 reveal" style={{ animationDelay: '0.1s' }}>
              <div className="relative inline-block">
                <span className="block font-light leading-none tracking-[0.08em]"
                  style={{ fontSize: 'clamp(52px, 8vw, 96px)', fontFamily: 'Inter, sans-serif', color: 'var(--text-brand)' }}>
                  RAVES
                </span>
                <div className="h-px my-2" style={{ background: 'var(--border)' }} />
                <span className="block font-light tracking-[0.5em] text-sm" style={{ color: 'var(--text-muted)' }}>
                  C A P I T A L
                </span>
              </div>
            </div>

            {/* Tagline */}
            <div className="mb-6 reveal" style={{ animationDelay: '0.2s' }}>
              {t.hero.tagline.split('\n').map((line, i) => (
                <p key={i} className="font-light leading-tight"
                  style={{
                    fontSize: 'clamp(20px, 2.5vw, 28px)',
                    fontFamily: "'EB Garamond', serif",
                    color: i === 0 ? 'var(--text-primary)' : 'var(--text-muted)',
                    fontStyle: i === 1 ? 'italic' : 'normal',
                  }}>
                  {line}
                </p>
              ))}
            </div>

            {/* Body */}
            <p className="font-light leading-relaxed max-w-md mb-10 text-sm reveal" style={{ animationDelay: '0.3s', color: 'var(--text-secondary)' }}>
              {t.hero.body}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 reveal" style={{ animationDelay: '0.4s' }}>
              <button onClick={() => handleScroll('#approach')}
                style={{ borderColor: 'var(--border)', color: 'var(--text-body)' }}
                className="border hover:border-white/50 tracking-[0.2em] text-[10px] font-light px-8 py-3.5 transition-all duration-300 hover:bg-white/5"
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-body)')}>
                {t.hero.cta1}
              </button>
              <button onClick={() => handleScroll('#contact')}
                style={{ color: 'var(--text-secondary)' }}
                className="tracking-[0.2em] text-[10px] font-light px-4 py-3.5 transition-colors duration-300"
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}>
                {t.hero.cta2}
              </button>
            </div>
          </div>

          {/* Right: aside stats */}
          <div className="hidden lg:flex flex-col gap-10 pb-2 pl-20 reveal" style={{ animationDelay: '0.5s' }}>
            {t.hero.aside.map((item, i) => (
              <div key={i} className="text-right">
                <p className="tracking-[0.3em] text-[9px] font-light mb-1" style={{ color: 'var(--text-muted)' }}>{item.label}</p>
                <p className="font-light text-3xl" style={{ fontFamily: "'EB Garamond', serif", color: 'var(--text-body)' }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-16 pt-6 reveal" style={{ animationDelay: '0.6s', borderTop: '1px solid var(--border-light)' }}>
          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {t.hero.trustBar.map((item, i) => (
              <span key={i} className="tracking-[0.3em] text-[9px] font-light" style={{ color: 'var(--text-muted)' }}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
