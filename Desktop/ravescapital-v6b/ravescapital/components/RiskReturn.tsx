'use client'
import { useLang } from '../lib/LanguageContext'

export default function RiskReturn() {
  const { t } = useLang()
  return (
    <section className="py-28 md:py-36 px-8 md:px-16" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 reveal">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px" style={{ background: 'var(--border)' }} />
            <span className="tracking-[0.3em] text-[9px] font-light" style={{ color: 'var(--text-muted)' }}>{t.riskReturn.eyebrow}</span>
          </div>
          <blockquote className="font-light mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontFamily: "'EB Garamond', serif", color: 'var(--text-primary)' }}>
            {t.riskReturn.quote}
          </blockquote>
          <p className="font-light text-sm max-w-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{t.riskReturn.quoteBody}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {t.riskReturn.criteria.map((c, i) => (
            <div key={i} className="py-8 pr-8 reveal" style={{ borderTop: '1px solid var(--border-light)', animationDelay: `${i * 0.07}s` }}>
              <p className="font-light text-base mb-2" style={{ fontFamily: "'EB Garamond', serif", color: 'var(--text-primary)' }}>{c.label}</p>
              <p className="font-light text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
