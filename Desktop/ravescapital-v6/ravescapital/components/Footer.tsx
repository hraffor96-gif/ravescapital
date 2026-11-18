'use client'
import { useLang } from '../lib/LanguageContext'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer style={{ background: '#050C14', borderTop: '1px solid var(--border)' }} className="px-8 md:px-16 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <div>
            <span className="block font-light tracking-[0.3em] text-lg mb-1" style={{ fontFamily: 'Inter, sans-serif', color: 'var(--text-brand)' }}>RAVES</span>
            <div className="w-20 h-px my-1.5" style={{ background: 'var(--border)' }} />
            <span className="block font-light tracking-[0.4em] text-[8px]" style={{ color: 'var(--text-muted)' }}>C A P I T A L</span>
            <p className="font-light text-xs mt-4 italic" style={{ fontFamily: "'EB Garamond', serif", color: 'var(--text-body)' }}>{t.footer.tagline}</p>
          </div>
          <div className="lg:text-right">
            <p className="font-light text-xs leading-relaxed max-w-md lg:ml-auto" style={{ color: 'var(--text-body)' }}>{t.footer.disclaimer}</p>
          </div>
        </div>
        <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4" style={{ borderTop: '1px solid var(--border-light)' }}>
          <p className="font-light text-[10px] tracking-[0.1em]" style={{ color: 'var(--text-muted)' }}>{t.footer.legal}</p>
          <div className="flex gap-6">
            {t.footer.links.map((link, i) => (
              <a key={i} href="#"
                className="font-light text-[10px] tracking-[0.1em] transition-colors"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-body)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
