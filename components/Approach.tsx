'use client'
import { useLang } from '../lib/LanguageContext'

export default function Approach() {
  const { t } = useLang()
  return (
    <section id="approach" className="bg-[#0A0A0A] py-28 md:py-36 px-8 md:px-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 reveal">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-white/20" />
            <span className="tracking-[0.3em] text-white/30 text-[9px] font-light">{t.approach.eyebrow}</span>
          </div>
          <h2 className="font-light text-white mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontFamily: "'EB Garamond', serif" }}>
            {t.approach.headline}
          </h2>
          <p className="text-white/35 font-light text-sm max-w-xl leading-relaxed">{t.approach.body}</p>
        </div>

        <div className="space-y-0">
          {t.approach.steps.map((step, i) => (
            <div key={i} className="border-t border-white/5 py-8 grid grid-cols-1 md:grid-cols-[80px_240px_1fr] gap-4 md:gap-8 items-start reveal" style={{ animationDelay: `${i * 0.08}s` }}>
              <span className="text-white/15 text-xs tracking-[0.2em] font-light pt-1">{step.num}</span>
              <p className="text-white/70 font-light text-xl" style={{ fontFamily: "'EB Garamond', serif" }}>{step.title}</p>
              <p className="text-white/35 font-light text-sm leading-relaxed">{step.body}</p>
            </div>
          ))}
          <div className="border-t border-white/5" />
        </div>
      </div>
    </section>
  )
}
