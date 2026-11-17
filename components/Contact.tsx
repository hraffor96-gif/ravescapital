'use client'
import { useState } from 'react'
import { useLang } from '../lib/LanguageContext'

export default function Contact() {
  const { t } = useLang()
  const f = t.contact.form
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({
    name: '', company: '', email: '', country: '', phone: '',
    type: '', sector: '', message: '', consent: false,
  })

  const set = (k: string, v: string | boolean) => setForm(prev => ({ ...prev, [k]: v }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.consent) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const inputClass = "w-full bg-transparent border-b border-white/10 focus:border-white/30 text-white/70 font-light text-sm py-3 px-0 outline-none transition-colors placeholder-white/20 tracking-wide"
  const labelClass = "block tracking-[0.2em] text-white/25 text-[9px] font-light mb-2"
  const selectClass = "w-full bg-[#0A0A0A] border-b border-white/10 focus:border-white/30 text-white/50 font-light text-sm py-3 px-0 outline-none transition-colors tracking-wide appearance-none"

  return (
    <section id="contact" className="bg-[#0A0A0A] py-28 md:py-36 px-8 md:px-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div className="reveal">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-white/20" />
              <span className="tracking-[0.3em] text-white/30 text-[9px] font-light">{t.contact.eyebrow}</span>
            </div>
            <h2 className="font-light text-white mb-5" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontFamily: "'EB Garamond', serif" }}>
              {t.contact.headline}
            </h2>
            <p className="text-white/35 font-light text-sm leading-relaxed mb-14">{t.contact.body}</p>

            <div className="space-y-5">
              <div>
                <p className="tracking-[0.2em] text-white/15 text-[9px] font-light mb-1">ENTITY</p>
                <p className="text-white/50 font-light text-sm">{t.contact.address.entity}</p>
              </div>
              <div>
                <p className="tracking-[0.2em] text-white/15 text-[9px] font-light mb-1">LOCATION</p>
                <p className="text-white/50 font-light text-sm">{t.contact.address.location}</p>
              </div>
              <div>
                <p className="tracking-[0.2em] text-white/15 text-[9px] font-light mb-1">WEBSITE</p>
                <p className="text-white/50 font-light text-sm">{t.contact.address.website}</p>
              </div>
              <div>
                <p className="tracking-[0.2em] text-white/15 text-[9px] font-light mb-1">EMAIL</p>
                <p className="text-white/50 font-light text-sm">{t.contact.address.email}</p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal" style={{ animationDelay: '0.15s' }}>
            {status === 'success' ? (
              <div className="border border-white/10 p-10 text-center">
                <p className="text-white/60 font-light text-sm">{f.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div>
                    <label className={labelClass}>{f.name} *</label>
                    <input required value={form.name} onChange={e => set('name', e.target.value)} className={inputClass} placeholder="—" />
                  </div>
                  <div>
                    <label className={labelClass}>{f.company}</label>
                    <input value={form.company} onChange={e => set('company', e.target.value)} className={inputClass} placeholder="—" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div>
                    <label className={labelClass}>{f.email} *</label>
                    <input required type="email" value={form.email} onChange={e => set('email', e.target.value)} className={inputClass} placeholder="—" />
                  </div>
                  <div>
                    <label className={labelClass}>{f.country} *</label>
                    <input required value={form.country} onChange={e => set('country', e.target.value)} className={inputClass} placeholder="—" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div>
                    <label className={labelClass}>{f.type} *</label>
                    <select required value={form.type} onChange={e => set('type', e.target.value)} className={selectClass}>
                      <option value="">—</option>
                      {f.types.map(tp => <option key={tp} value={tp}>{tp}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>{f.sector}</label>
                    <select value={form.sector} onChange={e => set('sector', e.target.value)} className={selectClass}>
                      <option value="">—</option>
                      {f.sectors.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className={labelClass}>{f.message} *</label>
                  <textarea required value={form.message} onChange={e => set('message', e.target.value)} rows={4}
                    className={`${inputClass} resize-none`} placeholder="—" />
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="consent" checked={form.consent} onChange={e => set('consent', e.target.checked)}
                    className="mt-1 accent-white/50 cursor-pointer" />
                  <label htmlFor="consent" className="text-white/25 font-light text-xs leading-relaxed cursor-pointer">{f.consent}</label>
                </div>
                {status === 'error' && <p className="text-red-400/60 text-xs font-light">{f.error}</p>}
                <button type="submit" disabled={status === 'sending' || !form.consent}
                  className="w-full border border-white/20 hover:border-white/40 text-white/50 hover:text-white/80 tracking-[0.2em] text-[10px] font-light py-4 transition-all duration-300 hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed">
                  {status === 'sending' ? f.sending : f.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
