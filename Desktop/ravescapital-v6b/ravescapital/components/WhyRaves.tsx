'use client'
import { useLang } from '../lib/LanguageContext'

export default function WhyRaves() {
  const { t } = useLang()
  return (
    <section className="py-28 md:py-36 px-8 md:px-16" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 reveal">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px" style={{ background: 'var(--border)' }} />
            <span className="tracking-[0.3em] text-[9px] font-light" style={{ color: 'var(--text-muted)' }}>{t.whyRaves.eyebrow}</span>
          </div>
          <h2 className="font-light" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontFamily: "'EB Garamond', serif", color: 'var(--text-primary)' }}>
            {t.whyRaves.headline}
          </h2>
        </div>

        <div className="space-y-0">
          {t.whyRaves.items.map((item, i) => (
            <div key={i} className="py-8 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4 md:gap-16 items-start reveal"
              style={{ borderTop: '1px solid var(--border-light)', animationDelay: `${i * 0.08}s` }}>
              <p className="font-light text-lg" style={{ fontFamily: "'EB Garamond', serif", color: 'var(--text-primary)' }}>{item.title}</p>
              <p className="font-light text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.body}</p>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--border-light)' }} />
        </div>
      </div>
    </section>
  )
}
