'use client'
import { useLang } from '../lib/LanguageContext'

export default function RiskReturn() {
  const { t } = useLang()
  return (
    <section className="bg-[#111111] py-28 md:py-36 px-8 md:px-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 reveal">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-white/20" />
            <span className="tracking-[0.3em] text-white/30 text-[9px] font-light">{t.riskReturn.eyebrow}</span>
          </div>
          <blockquote className="font-light text-white/80 mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontFamily: "'EB Garamond', serif" }}>
            {t.riskReturn.quote}
          </blockquote>
          <p className="text-white/35 font-light text-sm max-w-xl leading-relaxed">{t.riskReturn.quoteBody}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {t.riskReturn.criteria.map((c, i) => (
            <div key={i} className="border-t border-white/5 py-8 pr-8 reveal" style={{ animationDelay: `${i * 0.07}s` }}>
              <p className="text-white/60 font-light text-base mb-2" style={{ fontFamily: "'EB Garamond', serif" }}>{c.label}</p>
              <p className="text-white/25 font-light text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
