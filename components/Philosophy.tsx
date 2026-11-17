'use client'
import { useState } from 'react'
import { useLang } from '../lib/LanguageContext'
import PrinciplesModal from './PrinciplesModal'

export default function Philosophy() {
  const { t } = useLang()
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section id="philosophy" className="py-28 md:py-36 px-8 md:px-16" style={{ background: 'var(--bg-navy)', borderTop: '1px solid var(--border-light)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 reveal">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px" style={{ background: 'var(--border)' }} />
            <span className="tracking-[0.3em] text-[9px] font-light" style={{ color: 'var(--text-muted)' }}>{t.philosophy.eyebrow}</span>
          </div>
          <h2 className="font-light mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontFamily: "'EB Garamond', serif", color: 'var(--text-primary)' }}>
            {t.philosophy.headline.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
          </h2>
          <p className="font-light text-sm max-w-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{t.philosophy.body}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {t.philosophy.principles.map((p, i) => (
            <div key={i} className="p-8 transition-colors reveal"
              style={{ border: '1px solid var(--border-light)', animationDelay: `${i * 0.07}s` }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border-light)')}>
              <div className="w-4 h-px mb-6" style={{ background: 'var(--border)' }} />
              <h3 className="font-light text-lg mb-3" style={{ fontFamily: "'EB Garamond', serif", color: 'var(--text-primary)' }}>{p.title}</h3>
              <p className="font-light text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 reveal">
          <button onClick={() => setModalOpen(true)}
            className="tracking-[0.2em] text-[10px] font-light transition-colors"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}>
            {t.philosophy.modalCta}
          </button>
        </div>
      </div>

      {modalOpen && <PrinciplesModal onClose={() => setModalOpen(false)} />}
    </section>
  )
}
