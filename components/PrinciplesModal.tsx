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
      <div className="absolute inset-0 backdrop-blur-sm" style={{ background: 'rgba(0,0,0,0.85)' }} onClick={onClose} />
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto" style={{ background: '#0C1520', border: '1px solid var(--border)' }}>
        <div className="sticky top-0 px-8 py-5 flex items-center justify-between z-10" style={{ background: '#0C1520', borderBottom: '1px solid var(--border-light)' }}>
          <span className="tracking-[0.3em] text-[10px] font-light" style={{ color: 'var(--text-secondary)' }}>{t.modal.title.toUpperCase()}</span>
          <button onClick={onClose}
            className="tracking-[0.2em] text-[10px] font-light transition-colors"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}>
            {t.modal.close}
          </button>
        </div>
        <div className="px-8 py-8 space-y-8">
          {t.modal.principles.map((p, i) => (
            <div key={i} className="pt-8 first:pt-0" style={{ borderTop: i > 0 ? '1px solid var(--border-light)' : 'none' }}>
              <h3 className="font-light mb-3 text-lg" style={{ fontFamily: "'EB Garamond', serif", color: 'var(--text-primary)' }}>{p.title}</h3>
              <p className="font-light text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
