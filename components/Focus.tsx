'use client'
import { useLang } from '../lib/LanguageContext'

export default function Focus() {
  const { t } = useLang()
  return (
    <section id="investments" className="bg-[#111111] py-28 md:py-36 px-8 md:px-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 reveal">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-white/20" />
            <span className="tracking-[0.3em] text-white/30 text-[9px] font-light">{t.focus.eyebrow}</span>
          </div>
          <h2 className="font-light text-white" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontFamily: "'EB Garamond', serif" }}>
            {t.focus.headline}
          </h2>
        </div>

        <div className="space-y-0">
          {t.focus.items.map((item, i) => (
            <div key={i} className="border-t border-white/5 py-8 grid grid-cols-1 md:grid-cols-[80px_200px_1fr] gap-4 md:gap-8 items-start reveal group hover:border-white/10 transition-colors" style={{ animationDelay: `${i * 0.08}s` }}>
              <span className="text-white/15 text-xs tracking-[0.2em] font-light pt-1">{item.num}</span>
              <div>
                <p className="text-white/80 font-light text-lg mb-1" style={{ fontFamily: "'EB Garamond', serif" }}>{item.title}</p>
                <p className="text-white/25 text-[10px] tracking-[0.2em] font-light">{item.subtitle}</p>
              </div>
              <p className="text-white/35 font-light text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
          <div className="border-t border-white/5" />
        </div>

        <p className="mt-8 text-white/15 text-[10px] tracking-[0.1em] font-light reveal">{t.focus.note}</p>
      </div>
    </section>
  )
}
