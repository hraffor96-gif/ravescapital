'use client'
import { useLang } from '../lib/LanguageContext'

export default function Focus() {
  const { t } = useLang()
  return (
    <section id="investments" className="py-28 md:py-36 px-8 md:px-16" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 reveal">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px" style={{ background: 'var(--border)' }} />
            <span className="tracking-[0.3em] text-[9px] font-light" style={{ color: 'var(--text-muted)' }}>{t.focus.eyebrow}</span>
          </div>
          <h2 className="font-light" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontFamily: "'EB Garamond', serif", color: 'var(--text-primary)' }}>
            {t.focus.headline}
          </h2>
        </div>

        <div className="space-y-0">
          {t.focus.items.map((item, i) => (
            <div key={i} className="py-8 grid grid-cols-1 md:grid-cols-[80px_200px_1fr] gap-4 md:gap-8 items-start reveal group transition-colors"
              style={{ borderTop: '1px solid var(--border-light)', animationDelay: `${i * 0.08}s` }}>
              <span className="text-xs tracking-[0.2em] font-light pt-1" style={{ color: 'var(--text-muted)' }}>{item.num}</span>
              <div>
                <p className="font-light text-lg mb-1" style={{ fontFamily: "'EB Garamond', serif", color: 'var(--text-primary)' }}>{item.title}</p>
                <p className="text-[10px] tracking-[0.2em] font-light" style={{ color: 'var(--text-muted)' }}>{item.subtitle}</p>
              </div>
              <p className="font-light text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.body}</p>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--border-light)' }} />
        </div>

        <p className="mt-8 text-[10px] tracking-[0.1em] font-light reveal" style={{ color: 'var(--text-muted)' }}>{t.focus.note}</p>
      </div>
    </section>
  )
}
