'use client'
import { useLang } from '../lib/LanguageContext'

export default function Leadership() {
  const { t } = useLang()
  const isPlaceholder = t.leadership.founder.placeholder

  return (
    <section id="leadership" className="py-28 md:py-36 px-8 md:px-16" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 reveal">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px" style={{ background: 'var(--border)' }} />
            <span className="tracking-[0.3em] text-[9px] font-light" style={{ color: 'var(--text-muted)' }}>{t.leadership.eyebrow}</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <h2 className="font-light leading-tight" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontFamily: "'EB Garamond', serif", color: 'var(--text-primary)' }}>
              {t.leadership.headline.split('\n').map((line, i) => (
                <span key={i}>{line}{i < t.leadership.headline.split('\n').length - 1 && <br />}</span>
              ))}
            </h2>
            <p className="font-light text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>{t.leadership.body}</p>
          </div>
        </div>

        {/* Founder card */}
        <div className="reveal" style={{ border: '1px solid var(--border-light)' }}>
          <div className="grid grid-cols-1 md:grid-cols-3">

            {/* Photo placeholder */}
            <div className="flex items-center justify-center min-h-[320px] md:min-h-[400px]"
              style={{ background: 'var(--bg-primary)', borderBottom: '1px solid var(--border-light)' }}
              // On md+, change border direction via className below
            >
              {isPlaceholder ? (
                <div className="text-center px-8">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ border: '1px solid var(--border)' }}>
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}
                      style={{ color: 'var(--text-subtle)' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-[10px] tracking-[0.2em] font-light" style={{ color: 'var(--text-subtle)' }}>PHOTO PENDING</p>
                </div>
              ) : (
                <img
                  src="/founder.jpg"
                  alt={t.leadership.founder.name}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Bio */}
            <div className="col-span-1 md:col-span-2 p-10 md:p-14 flex flex-col justify-center"
              style={{ borderLeft: '1px solid var(--border-light)' }}>
              {isPlaceholder ? (
                <div className="space-y-5">
                  <div>
                    <div className="w-32 h-px mb-4" style={{ background: 'var(--border)' }} />
                    <p className="font-light mb-1" style={{ fontSize: 'clamp(20px, 2vw, 26px)', fontFamily: "'EB Garamond', serif", color: 'var(--text-secondary)' }}>
                      {t.leadership.founder.name}
                    </p>
                    <p className="tracking-[0.2em] text-[10px] font-light" style={{ color: 'var(--text-muted)' }}>{t.leadership.founder.title}</p>
                  </div>
                  <div className="p-6 mt-6" style={{ border: '1px solid var(--border-light)' }}>
                    <p className="text-xs font-light leading-relaxed italic" style={{ color: 'var(--text-secondary)' }}>{t.leadership.founder.bio}</p>
                  </div>
                  <p className="text-[10px] font-light tracking-[0.15em]" style={{ color: 'var(--text-subtle)' }}>{t.leadership.note}</p>
                </div>
              ) : (
                <div className="space-y-5">
                  <div>
                    <div className="w-32 h-px mb-4" style={{ background: 'var(--border)' }} />
                    <p className="font-light mb-1" style={{ fontSize: 'clamp(22px, 2vw, 30px)', fontFamily: "'EB Garamond', serif", color: 'var(--text-primary)' }}>
                      {t.leadership.founder.name}
                    </p>
                    <p className="tracking-[0.2em] text-[10px] font-light mb-8" style={{ color: 'var(--text-muted)' }}>{t.leadership.founder.title}</p>
                  </div>
                  <p className="font-light text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>{t.leadership.founder.bio}</p>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
