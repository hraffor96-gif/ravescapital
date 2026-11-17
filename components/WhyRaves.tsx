'use client'
import { useLang } from '../lib/LanguageContext'

export default function WhyRaves() {
  const { t } = useLang()
  return (
    <section className="bg-[#111111] py-28 md:py-36 px-8 md:px-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 reveal">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-white/20" />
            <span className="tracking-[0.3em] text-white/30 text-[9px] font-light">{t.whyRaves.eyebrow}</span>
          </div>
          <h2 className="font-light text-white" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontFamily: "'EB Garamond', serif" }}>
            {t.whyRaves.headline}
          </h2>
        </div>

        <div className="space-y-0">
          {t.whyRaves.items.map((item, i) => (
            <div key={i} className="border-t border-white/5 py-8 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4 md:gap-16 items-start reveal" style={{ animationDelay: `${i * 0.08}s` }}>
              <p className="text-white/60 font-light text-lg" style={{ fontFamily: "'EB Garamond', serif" }}>{item.title}</p>
              <p className="text-white/30 font-light text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
          <div className="border-t border-white/5" />
        </div>
      </div>
    </section>
  )
}
