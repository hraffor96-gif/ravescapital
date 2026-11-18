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

  const inputStyle = {
    background: 'transparent',
    borderBottom: '1px solid var(--border)',
    color: 'var(--text-primary)',
    fontSize: '14px',
    fontWeight: 300,
    padding: '12px 0',
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.2s',
  }

  const labelStyle = {
    display: 'block',
    letterSpacing: '0.2em',
    color: 'var(--text-muted)',
    fontSize: '9px',
    fontWeight: 300,
    marginBottom: '8px',
  }

  return (
    <section id="contact" className="py-28 md:py-36 px-8 md:px-16" style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border-light)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div className="reveal">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px" style={{ background: 'var(--border)' }} />
              <span className="tracking-[0.3em] text-[9px] font-light" style={{ color: 'var(--text-muted)' }}>{t.contact.eyebrow}</span>
            </div>
            <h2 className="font-light mb-5" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontFamily: "'EB Garamond', serif", color: 'var(--text-primary)' }}>
              {t.contact.headline}
            </h2>
            <p className="font-light text-sm leading-relaxed mb-14" style={{ color: 'var(--text-secondary)' }}>{t.contact.body}</p>

            <div className="space-y-5">
              {[
                { label: 'ENTITY', value: t.contact.address.entity },
                { label: 'LOCATION', value: t.contact.address.location },
                { label: 'WEBSITE', value: t.contact.address.website },
                { label: 'EMAIL', value: t.contact.address.email },
              ].map(item => (
                <div key={item.label}>
                  <p className="tracking-[0.2em] text-[9px] font-light mb-1" style={{ color: 'var(--text-muted)' }}>{item.label}</p>
                  <p className="font-light text-sm" style={{ color: 'var(--text-body)' }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal" style={{ animationDelay: '0.15s' }}>
            {status === 'success' ? (
              <div className="p-10 text-center" style={{ border: '1px solid var(--border)' }}>
                <p className="font-light text-sm" style={{ color: 'var(--text-body)' }}>{f.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div>
                    <label style={labelStyle}>{f.name} *</label>
                    <input required value={form.name} onChange={e => set('name', e.target.value)}
                      style={inputStyle} placeholder="—"
                      onFocus={e => (e.target.style.borderBottomColor = 'var(--text-secondary)')}
                      onBlur={e => (e.target.style.borderBottomColor = 'var(--border)')} />
                  </div>
                  <div>
                    <label style={labelStyle}>{f.company}</label>
                    <input value={form.company} onChange={e => set('company', e.target.value)}
                      style={inputStyle} placeholder="—"
                      onFocus={e => (e.target.style.borderBottomColor = 'var(--text-secondary)')}
                      onBlur={e => (e.target.style.borderBottomColor = 'var(--border)')} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div>
                    <label style={labelStyle}>{f.email} *</label>
                    <input required type="email" value={form.email} onChange={e => set('email', e.target.value)}
                      style={inputStyle} placeholder="—"
                      onFocus={e => (e.target.style.borderBottomColor = 'var(--text-secondary)')}
                      onBlur={e => (e.target.style.borderBottomColor = 'var(--border)')} />
                  </div>
                  <div>
                    <label style={labelStyle}>{f.country} *</label>
                    <input required value={form.country} onChange={e => set('country', e.target.value)}
                      style={inputStyle} placeholder="—"
                      onFocus={e => (e.target.style.borderBottomColor = 'var(--text-secondary)')}
                      onBlur={e => (e.target.style.borderBottomColor = 'var(--border)')} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div>
                    <label style={labelStyle}>{f.type} *</label>
                    <select required value={form.type} onChange={e => set('type', e.target.value)}
                      style={{ ...inputStyle, background: 'var(--bg-primary)', appearance: 'none' as const }}>
                      <option value="">—</option>
                      {f.types.map(tp => <option key={tp} value={tp}>{tp}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>{f.sector}</label>
                    <select value={form.sector} onChange={e => set('sector', e.target.value)}
                      style={{ ...inputStyle, background: 'var(--bg-primary)', appearance: 'none' as const }}>
                      <option value="">—</option>
                      {f.sectors.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>{f.message} *</label>
                  <textarea required value={form.message} onChange={e => set('message', e.target.value)} rows={4}
                    style={{ ...inputStyle, resize: 'none' }} placeholder="—"
                    onFocus={e => (e.target.style.borderBottomColor = 'var(--text-secondary)')}
                    onBlur={e => (e.target.style.borderBottomColor = 'var(--border)')} />
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="consent" checked={form.consent} onChange={e => set('consent', e.target.checked)}
                    className="mt-1 cursor-pointer" style={{ accentColor: 'var(--text-secondary)' }} />
                  <label htmlFor="consent" className="font-light text-xs leading-relaxed cursor-pointer" style={{ color: 'var(--text-secondary)' }}>{f.consent}</label>
                </div>
                {status === 'error' && <p className="text-xs font-light" style={{ color: '#E07070' }}>{f.error}</p>}
                <button type="submit" disabled={status === 'sending' || !form.consent}
                  className="w-full tracking-[0.2em] text-[10px] font-light py-4 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{ border: '1px solid var(--border)', color: 'var(--text-body)' }}
                  onMouseEnter={e => { if (!e.currentTarget.disabled) { e.currentTarget.style.borderColor = 'var(--text-secondary)'; e.currentTarget.style.color = 'var(--text-primary)' } }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-body)' }}>
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
