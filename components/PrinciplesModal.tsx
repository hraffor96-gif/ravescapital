'use client'
import { useEffect } from 'react'
import { useLang } from '../lib/LanguageContext'

export default function PrinciplesModal({ onClose }: { onClose: () => void }) {
  const { t } = useLang()

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', esc)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', esc) }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-8">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-[#0F0F0F] border border-white/10 w-full max-w-2xl max-h-[85vh] overflow-y-auto">
        <div className="sticky top-0 bg-[#0F0F0F] border-b border-white/5 px-8 py-5 flex items-center justify-between z-10">
          <span className="tracking-[0.3em] text-white/50 text-[10px] font-light">{t.modal.title.toUpperCase()}</span>
          <button onClick={onClose} className="text-white/30 hover:text-white tracking-[0.2em] text-[10px] font-light transition-colors">{t.modal.close}</button>
        </div>
        <div className="px-8 py-8 space-y-8">
          {t.modal.principles.map((p, i) => (
            <div key={i} className="border-t border-white/5 pt-8 first:border-0 first:pt-0">
              <h3 className="text-white/70 font-light mb-3 text-lg" style={{ fontFamily: "'EB Garamond', serif" }}>{p.title}</h3>
              <p className="text-white/40 font-light text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
