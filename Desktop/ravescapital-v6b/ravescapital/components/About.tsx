'use client'
import { useLang } from '../lib/LanguageContext'

export default function About() {
  const { t } = useLang()
  return (
    <section id="about" className="py-28 md:py-36 px-8 md:px-16" style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border-light)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div className="reveal">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-px" style={{ background: 'var(--border)' }} />
              <span className="tracking-[0.3em] text-[9px] font-light" style={{ color: 'var(--text-muted)' }}>{t.about.eyebrow}</span>
            </div>
            <h2 className="font-light leading-tight" style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontFamily: "'EB Garamond', serif", color: 'var(--text-primary)' }}>
              {t.about.headline.split('\n').map((line, i) => (
                <span key={i}>
                  {i === 1 ? <em style={{ color: 'var(--text-secondary)', fontStyle: 'normal' }}>{line}</em> : line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h2>
          </div>

          {/* Right */}
          <div className="reveal" style={{ animationDelay: '0.15s' }}>
            <p className="font-light leading-relaxed text-base mb-6" style={{ color: 'var(--text-body)' }}>{t.about.body1}</p>
            <p className="font-light leading-relaxed text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>{t.about.body2}</p>
            <p className="font-light leading-relaxed text-sm italic" style={{ fontFamily: "'EB Garamond', serif", color: 'var(--text-secondary)' }}>{t.about.body3}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
