'use client'
import { useLang } from '../lib/LanguageContext'

export default function Hero() {
  const { t } = useLang()

  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen bg-[#0A0A0A] flex flex-col">
      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      {/* Left border line */}
      <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-white/5" />

      {/* Content */}
      <div className="relative flex-1 flex flex-col px-8 md:px-16 pt-32 pb-24">
        {/* Eyebrow */}
        <p className="tracking-[0.4em] text-white/30 text-[10px] font-light mb-16 reveal">
          {t.hero.eyebrow}
        </p>

        {/* Main layout */}
        <div className="flex-1 flex flex-col lg:flex-row lg:items-end">
          {/* Left: logo + content */}
          <div className="flex-1 flex flex-col justify-end">
            {/* Logo mark */}
            <div className="mb-10 reveal" style={{ animationDelay: '0.1s' }}>
              <div className="relative inline-block">
                <span className="block text-white font-light leading-none tracking-[0.08em]"
                  style={{ fontSize: 'clamp(52px, 8vw, 96px)', fontFamily: 'Inter, sans-serif' }}>
                  RAVES
                </span>
                <div className="h-px bg-white/20 my-2" />
                <span className="block text-white/40 font-light tracking-[0.5em] text-sm">
                  C A P I T A L
                </span>
              </div>
            </div>

            {/* Tagline */}
            <div className="mb-6 reveal" style={{ animationDelay: '0.2s' }}>
              {t.hero.tagline.split('\n').map((line, i) => (
                <p key={i} className={`font-light leading-tight ${i === 0 ? 'text-white' : 'text-white/50 italic'}`}
                  style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontFamily: "'EB Garamond', serif" }}>
                  {line}
                </p>
              ))}
            </div>

            {/* Body */}
            <p className="text-white/40 font-light leading-relaxed max-w-md mb-10 text-sm reveal" style={{ animationDelay: '0.3s' }}>
              {t.hero.body}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 reveal" style={{ animationDelay: '0.4s' }}>
              <button onClick={() => handleScroll('#approach')}
                className="border border-white/30 hover:border-white/60 text-white/70 hover:text-white tracking-[0.2em] text-[10px] font-light px-8 py-3.5 transition-all duration-300 hover:bg-white/5">
                {t.hero.cta1}
              </button>
              <button onClick={() => handleScroll('#contact')}
                className="text-white/30 hover:text-white/70 tracking-[0.2em] text-[10px] font-light px-4 py-3.5 transition-colors duration-300">
                {t.hero.cta2}
              </button>
            </div>
          </div>

          {/* Right: aside stats */}
          <div className="hidden lg:flex flex-col gap-10 pb-2 pl-20 reveal" style={{ animationDelay: '0.5s' }}>
            {t.hero.aside.map((item, i) => (
              <div key={i} className="text-right">
                <p className="tracking-[0.3em] text-white/20 text-[9px] font-light mb-1">{item.label}</p>
                <p className="text-white/50 font-light text-3xl" style={{ fontFamily: "'EB Garamond', serif" }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-16 pt-6 border-t border-white/5 reveal" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {t.hero.trustBar.map((item, i) => (
              <span key={i} className="tracking-[0.3em] text-white/20 text-[9px] font-light">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
