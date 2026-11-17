'use client'
import { useLang } from '../lib/LanguageContext'

export default function StrategicPartnerships() {
  const { t } = useLang()

  const handleContact = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="strategic-partnerships" className="bg-[#0A0A0A] py-28 md:py-36 px-8 md:px-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 reveal">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-white/20" />
            <span className="tracking-[0.3em] text-white/30 text-[9px] font-light">{t.strategicPartnerships.eyebrow}</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <h2 className="font-light text-white leading-tight" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontFamily: "'EB Garamond', serif" }}>
              {t.strategicPartnerships.headline.split('\n').map((line, i) => (
                <span key={i}>{line}{i < t.strategicPartnerships.headline.split('\n').length - 1 && <br />}</span>
              ))}
            </h2>
            <p className="text-white/45 font-light text-sm leading-relaxed">{t.strategicPartnerships.body}</p>
          </div>
        </div>

        {/* Three audience types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {t.strategicPartnerships.items.map((item, i) => (
            <div key={i} className="border border-white/8 p-10 hover:border-white/15 transition-colors duration-500 reveal" style={{ animationDelay: `${i * 0.1}s` }}>
              <span className="tracking-[0.3em] text-white/20 text-[8px] font-light block mb-6">0{i + 1}</span>
              <h3 className="font-light text-white mb-4 text-lg" style={{ fontFamily: "'EB Garamond', serif" }}>{item.title}</h3>
              <p className="text-white/40 font-light text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 reveal">
          <button
            onClick={handleContact}
            className="border border-white/30 hover:border-white/60 text-white/60 hover:text-white tracking-[0.2em] text-[10px] font-light px-8 py-4 transition-all duration-300 hover:bg-white/5"
          >
            {t.strategicPartnerships.cta}
          </button>
          <p className="text-white/15 text-[10px] font-light leading-relaxed max-w-lg">{t.strategicPartnerships.note}</p>
        </div>

      </div>
    </section>
  )
}
