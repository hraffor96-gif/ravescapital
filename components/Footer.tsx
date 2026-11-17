'use client'
import { useLang } from '../lib/LanguageContext'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="bg-[#050505] border-t border-white/5 px-8 md:px-16 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <div>
            <span className="block text-white/60 font-light tracking-[0.3em] text-lg mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>RAVES</span>
            <div className="w-20 h-px bg-white/10 my-1.5" />
            <span className="block text-white/20 font-light tracking-[0.4em] text-[8px]">C A P I T A L</span>
            <p className="text-white/20 font-light text-xs mt-4 italic" style={{ fontFamily: "'EB Garamond', serif" }}>{t.footer.tagline}</p>
          </div>
          <div className="lg:text-right">
            <p className="text-white/15 font-light text-xs leading-relaxed max-w-md lg:ml-auto">{t.footer.disclaimer}</p>
          </div>
        </div>
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-white/15 font-light text-[10px] tracking-[0.1em]">{t.footer.legal}</p>
          <div className="flex gap-6">
            {t.footer.links.map((link, i) => (
              <a key={i} href="#" className="text-white/15 hover:text-white/35 font-light text-[10px] tracking-[0.1em] transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
