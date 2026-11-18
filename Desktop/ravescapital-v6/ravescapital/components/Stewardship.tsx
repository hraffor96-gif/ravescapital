'use client'
import { useLang } from '../lib/LanguageContext'

export default function Stewardship() {
  const { t } = useLang()
  return (
    <section className="py-28 md:py-36 px-8 md:px-16" style={{ background: '#F7F5F0', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
      <div className="max-w-4xl mx-auto text-center reveal">
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="w-8 h-px" style={{ background: 'rgba(0,0,0,0.2)' }} />
          <span className="tracking-[0.3em] text-[9px] font-light" style={{ color: 'rgba(0,0,0,0.5)' }}>{t.stewardship.eyebrow}</span>
          <div className="w-8 h-px" style={{ background: 'rgba(0,0,0,0.2)' }} />
        </div>
        <p className="font-light leading-relaxed mb-8" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontFamily: "'EB Garamond', serif", color: 'rgba(0,0,0,0.75)' }}>
          &ldquo;{t.stewardship.statement}&rdquo;
        </p>
        <p className="tracking-[0.4em] text-[10px] font-light" style={{ color: 'rgba(0,0,0,0.45)' }}>{t.stewardship.sub.toUpperCase()}</p>
      </div>
    </section>
  )
}
