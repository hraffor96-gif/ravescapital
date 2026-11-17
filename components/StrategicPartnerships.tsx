'use client'
import { useLang } from '../lib/LanguageContext'

export default function StrategicPartnerships() {
  const { t } = useLang()

  const handleContact = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="strategic-partnerships" className="py-28 md:py-36 px-8 md:px-16" style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border-light)' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 reveal">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px" style={{ background: 'var(--border)' }} />
            <span className="tracking-[0.3em] text-[9px] font-light" style={{ color: 'var(--text-muted)' }}>{t.strategicPartnerships.eyebrow}</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <h2 className="font-light leading-tight" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontFamily: "'EB Garamond', serif", color: 'var(--text-primary)' }}>
              {t.strategicPartnerships.headline.split('\n').map((line, i) => (
                <span key={i}>{line}{i < t.strategicPartnerships.headline.split('\n').length - 1 && <br />}</span>
              ))}
            </h2>
            <p className="font-light text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>{t.strategicPartnerships.body}</p>
          </div>
        </div>

        {/* Three audience types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {t.strategicPartnerships.items.map((item, i) => (
            <div key={i} className="p-10 transition-colors duration-500 reveal"
              style={{ border: '1px solid var(--border-light)', animationDelay: `${i * 0.1}s` }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border-light)')}>
              <span className="tracking-[0.3em] text-[8px] font-light block mb-6" style={{ color: 'var(--text-subtle)' }}>0{i + 1}</span>
              <h3 className="font-light mb-4 text-lg" style={{ fontFamily: "'EB Garamond', serif", color: 'var(--text-primary)' }}>{item.title}</h3>
              <p className="font-light text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.body}</p>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 reveal">
          <button
            onClick={handleContact}
            className="tracking-[0.2em] text-[10px] font-light px-8 py-4 transition-all duration-300"
            style={{ border: '1px solid var(--border)', color: 'var(--text-body)' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--text-secondary)'; e.currentTarget.style.color = 'var(--text-primary)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-body)' }}
          >
            {t.strategicPartnerships.cta}
          </button>
          <p className="text-[10px] font-light leading-relaxed max-w-lg" style={{ color: 'var(--text-subtle)' }}>{t.strategicPartnerships.note}</p>
        </div>

      </div>
    </section>
  )
}
