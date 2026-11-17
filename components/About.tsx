'use client'
import { useLang } from '../lib/LanguageContext'

export default function About() {
  const { t } = useLang()
  return (
    <section id="about" className="bg-[#0A0A0A] py-28 md:py-36 px-8 md:px-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div className="reveal">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-px bg-white/20" />
              <span className="tracking-[0.3em] text-white/30 text-[9px] font-light">{t.about.eyebrow}</span>
            </div>
            <h2 className="font-light leading-tight text-white" style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontFamily: "'EB Garamond', serif" }}>
              {t.about.headline.split('\n').map((line, i) => (
                <span key={i}>
                  {i === 1 ? <em className="text-white/40 not-italic">{line}</em> : line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h2>
          </div>

          {/* Right */}
          <div className="reveal" style={{ animationDelay: '0.15s' }}>
            <div className="w-px h-full bg-white/5 hidden lg:block absolute left-1/2" />
            <p className="text-white/60 font-light leading-relaxed text-base mb-6">{t.about.body1}</p>
            <p className="text-white/40 font-light leading-relaxed text-sm mb-6">{t.about.body2}</p>
            <p className="text-white/30 font-light leading-relaxed text-sm italic" style={{ fontFamily: "'EB Garamond', serif" }}>{t.about.body3}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
