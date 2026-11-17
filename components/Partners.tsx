'use client'
import { useLang } from '../lib/LanguageContext'

export default function Partners() {
  const { t } = useLang()

  const handleContact = (type: string) => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="partners" className="bg-[#0A0A0A] py-28 md:py-36 px-8 md:px-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 reveal">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-white/20" />
            <span className="tracking-[0.3em] text-white/30 text-[9px] font-light">{t.partners.eyebrow}</span>
          </div>
          <h2 className="font-light text-white" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontFamily: "'EB Garamond', serif" }}>
            {t.partners.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/5">
          {/* Investors */}
          <div className="p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-white/5 reveal">
            <span className="tracking-[0.3em] text-white/20 text-[9px] font-light block mb-8">{t.partners.investors.label}</span>
            <h3 className="font-light text-white mb-5 leading-tight" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', fontFamily: "'EB Garamond', serif" }}>
              {t.partners.investors.headline}
            </h3>
            <p className="text-white/40 font-light text-sm leading-relaxed mb-10">{t.partners.investors.body}</p>
            <button onClick={() => handleContact('investor')}
              className="border border-white/20 hover:border-white/50 text-white/40 hover:text-white/80 tracking-[0.2em] text-[10px] font-light px-7 py-3 transition-all duration-300 hover:bg-white/5">
              {t.partners.investors.cta}
            </button>
          </div>

          {/* Business Owners */}
          <div className="p-10 md:p-14 reveal" style={{ animationDelay: '0.15s' }}>
            <span className="tracking-[0.3em] text-white/20 text-[9px] font-light block mb-8">{t.partners.owners.label}</span>
            <h3 className="font-light text-white mb-5 leading-tight" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', fontFamily: "'EB Garamond', serif" }}>
              {t.partners.owners.headline}
            </h3>
            <p className="text-white/40 font-light text-sm leading-relaxed mb-10">{t.partners.owners.body}</p>
            <button onClick={() => handleContact('opportunity')}
              className="border border-white/20 hover:border-white/50 text-white/40 hover:text-white/80 tracking-[0.2em] text-[10px] font-light px-7 py-3 transition-all duration-300 hover:bg-white/5">
              {t.partners.owners.cta}
            </button>
          </div>
        </div>

        <p className="mt-6 text-white/15 text-[10px] font-light leading-relaxed reveal">{t.partners.note}</p>
      </div>
    </section>
  )
}
