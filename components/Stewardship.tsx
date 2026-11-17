'use client'
import { useLang } from '../lib/LanguageContext'

export default function Stewardship() {
  const { t } = useLang()
  return (
    <section className="bg-[#F7F5F0] py-28 md:py-36 px-8 md:px-16 border-t border-black/5">
      <div className="max-w-4xl mx-auto text-center reveal">
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="w-8 h-px bg-black/15" />
          <span className="tracking-[0.3em] text-black/25 text-[9px] font-light">{t.stewardship.eyebrow}</span>
          <div className="w-8 h-px bg-black/15" />
        </div>
        <p className="font-light text-black/70 leading-relaxed mb-8" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontFamily: "'EB Garamond', serif" }}>
          "{t.stewardship.statement}"
        </p>
        <p className="tracking-[0.4em] text-black/25 text-[10px] font-light">{t.stewardship.sub.toUpperCase()}</p>
      </div>
    </section>
  )
}
