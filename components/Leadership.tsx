'use client'
import { useLang } from '../lib/LanguageContext'

export default function Leadership() {
  const { t } = useLang()

  // Don't render if still placeholder — remove this condition when founder info is ready
  const isPlaceholder = t.leadership.founder.placeholder

  return (
    <section id="leadership" className="bg-[#111111] py-28 md:py-36 px-8 md:px-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 reveal">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-white/20" />
            <span className="tracking-[0.3em] text-white/30 text-[9px] font-light">{t.leadership.eyebrow}</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <h2 className="font-light text-white leading-tight" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontFamily: "'EB Garamond', serif" }}>
              {t.leadership.headline.split('\n').map((line, i) => (
                <span key={i}>{line}{i < t.leadership.headline.split('\n').length - 1 && <br />}</span>
              ))}
            </h2>
            <p className="text-white/45 font-light text-sm leading-relaxed">{t.leadership.body}</p>
          </div>
        </div>

        {/* Founder card */}
        <div className="border border-white/8 reveal">
          <div className="grid grid-cols-1 md:grid-cols-3">

            {/* Photo placeholder */}
            <div className="bg-[#0D0D0D] border-b md:border-b-0 md:border-r border-white/8 flex items-center justify-center min-h-[320px] md:min-h-[400px]">
              {isPlaceholder ? (
                <div className="text-center px-8">
                  <div className="w-20 h-20 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-white/15 text-[10px] tracking-[0.2em] font-light">PHOTO PENDING</p>
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
            <div className="col-span-1 md:col-span-2 p-10 md:p-14 flex flex-col justify-center">
              {isPlaceholder ? (
                <div className="space-y-5">
                  <div>
                    <div className="w-32 h-px bg-white/10 mb-4" />
                    <p className="font-light text-white/25 mb-1" style={{ fontSize: 'clamp(20px, 2vw, 26px)', fontFamily: "'EB Garamond', serif" }}>
                      {t.leadership.founder.name}
                    </p>
                    <p className="text-white/20 tracking-[0.2em] text-[10px] font-light">{t.leadership.founder.title}</p>
                  </div>
                  <div className="border border-white/5 p-6 mt-6">
                    <p className="text-white/20 text-xs font-light leading-relaxed italic">{t.leadership.founder.bio}</p>
                  </div>
                  <p className="text-white/15 text-[10px] font-light tracking-[0.15em]">{t.leadership.note}</p>
                </div>
              ) : (
                <div className="space-y-5">
                  <div>
                    <div className="w-32 h-px bg-white/15 mb-4" />
                    <p className="font-light text-white mb-1" style={{ fontSize: 'clamp(22px, 2vw, 30px)', fontFamily: "'EB Garamond', serif" }}>
                      {t.leadership.founder.name}
                    </p>
                    <p className="text-white/40 tracking-[0.2em] text-[10px] font-light mb-8">{t.leadership.founder.title}</p>
                  </div>
                  <p className="text-white/55 font-light text-sm leading-relaxed">{t.leadership.founder.bio}</p>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
