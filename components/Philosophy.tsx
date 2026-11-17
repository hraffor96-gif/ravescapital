'use client'
import { useState } from 'react'
import { useLang } from '../lib/LanguageContext'
import PrinciplesModal from './PrinciplesModal'

export default function Philosophy() {
  const { t } = useLang()
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section id="philosophy" className="bg-[#091422] py-28 md:py-36 px-8 md:px-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 reveal">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-white/20" />
            <span className="tracking-[0.3em] text-white/30 text-[9px] font-light">{t.philosophy.eyebrow}</span>
          </div>
          <h2 className="font-light text-white mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontFamily: "'EB Garamond', serif" }}>
            {t.philosophy.headline.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
          </h2>
          <p className="text-white/35 font-light text-sm max-w-xl leading-relaxed">{t.philosophy.body}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {t.philosophy.principles.map((p, i) => (
            <div key={i} className="border border-white/5 p-8 hover:border-white/10 transition-colors reveal" style={{ animationDelay: `${i * 0.07}s` }}>
              <div className="w-4 h-px bg-white/20 mb-6" />
              <h3 className="text-white/70 font-light text-lg mb-3" style={{ fontFamily: "'EB Garamond', serif" }}>{p.title}</h3>
              <p className="text-white/30 font-light text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 reveal">
          <button onClick={() => setModalOpen(true)}
            className="text-white/30 hover:text-white/70 tracking-[0.2em] text-[10px] font-light transition-colors">
            {t.philosophy.modalCta}
          </button>
        </div>
      </div>

      {modalOpen && <PrinciplesModal onClose={() => setModalOpen(false)} />}
    </section>
  )
}
