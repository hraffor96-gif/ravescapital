'use client'
import { useLang } from '../lib/LanguageContext'

export default function Approach() {
  const { t } = useLang()
  return (
    <section id="approach" className="py-28 md:py-36 px-8 md:px-16" style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border-light)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 reveal">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px" style={{ background: 'var(--border)' }} />
            <span className="tracking-[0.3em] text-[9px] font-light" style={{ color: 'var(--text-muted)' }}>{t.approach.eyebrow}</span>
          </div>
          <h2 className="font-light mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontFamily: "'EB Garamond', serif", color: 'var(--text-primary)' }}>
            {t.approach.headline}
          </h2>
          <p className="font-light text-sm max-w-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{t.approach.body}</p>
        </div>

        <div className="space-y-0">
          {t.approach.steps.map((step, i) => (
            <div key={i} className="py-8 grid grid-cols-1 md:grid-cols-[80px_240px_1fr] gap-4 md:gap-8 items-start reveal"
              style={{ borderTop: '1px solid var(--border-light)', animationDelay: `${i * 0.08}s` }}>
              <span className="text-xs tracking-[0.2em] font-light pt-1" style={{ color: 'var(--text-muted)' }}>{step.num}</span>
              <p className="font-light text-xl" style={{ fontFamily: "'EB Garamond', serif", color: 'var(--text-primary)' }}>{step.title}</p>
              <p className="font-light text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{step.body}</p>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--border-light)' }} />
        </div>
      </div>
    </section>
  )
}
