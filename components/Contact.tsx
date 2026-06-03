"use client";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/LanguageContext";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { e.target.querySelectorAll(".reveal").forEach(el => el.classList.add("visible")); obs.disconnect(); }}, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setForm({ name: "", email: "", phone: "", message: "" });
    } catch { setStatus("error"); }
  };

  const lbl = (text: string) => (
    <label style={{ display: "block", fontSize: "8.5px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(247,245,240,0.28)", marginBottom: "12px" }}>{text}</label>
  );

  const c = t.contact;

  return (
    <section id="contact" ref={ref} style={{ padding: "140px 72px", background: "#0A0A0A" }}>
      <div className="reveal eyebrow">{c.eyebrow}</div>
      <h2 className="reveal reveal-delay-1 display" style={{ color: "#F7F5F0", marginBottom: "20px" }}>
        {c.title[0]}<br />{c.title[1]}
      </h2>
      <div className="reveal reveal-delay-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "100px", marginTop: "72px", alignItems: "start" }} id="contact-grid">
        <div>
          <p style={{ fontSize: "14px", fontWeight: 300, lineHeight: 2.1, color: "rgba(247,245,240,0.38)", marginBottom: "56px", letterSpacing: "0.025em" }}>{c.body}</p>
          <div style={{ fontSize: "9px", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(247,245,240,0.3)", marginBottom: "12px" }}>{c.firm}</div>
          <div style={{ fontSize: "13px", fontWeight: 300, color: "rgba(247,245,240,0.2)", lineHeight: 2, letterSpacing: "0.025em" }}>{c.country}<br />ravescapital.com</div>
          <div style={{ width: "20px", height: "1px", background: "rgba(247,245,240,0.1)", marginTop: "48px" }} />
        </div>
        <form onSubmit={handleSubmit}>
          {[
            { key: "name", label: c.labels.name, type: "text", ph: c.placeholders.name },
            { key: "email", label: c.labels.email, type: "email", ph: c.placeholders.email },
            { key: "phone", label: c.labels.phone, type: "tel", ph: c.placeholders.phone },
          ].map(f => (
            <div key={f.key} style={{ marginBottom: "36px" }}>
              {lbl(f.label)}
              <input type={f.type} required={f.key !== "phone"} placeholder={f.ph}
                value={form[f.key as keyof typeof form]}
                onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                className="form-input"
                onFocus={e => (e.target.style.borderBottomColor = "rgba(247,245,240,0.38)")}
                onBlur={e => (e.target.style.borderBottomColor = "rgba(247,245,240,0.1)")}
              />
            </div>
          ))}
          <div style={{ marginBottom: "40px" }}>
            {lbl(c.labels.message)}
            <textarea rows={4} required placeholder={c.placeholders.message}
              value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
              className="form-input" style={{ resize: "none" }}
              onFocus={e => (e.target.style.borderBottomColor = "rgba(247,245,240,0.38)")}
              onBlur={e => (e.target.style.borderBottomColor = "rgba(247,245,240,0.1)")}
            />
          </div>
          <button type="submit" disabled={status === "loading"}
            style={{ display: "inline-flex", alignItems: "center", gap: "16px", padding: "15px 44px", border: "1px solid rgba(247,245,240,0.15)", background: "transparent", fontFamily: "'Inter',sans-serif", fontSize: "9px", fontWeight: 500, letterSpacing: "0.24em", textTransform: "uppercase", color: status === "loading" ? "rgba(247,245,240,0.25)" : "rgba(247,245,240,0.55)", cursor: status === "loading" ? "not-allowed" : "pointer", transition: "all 0.45s" }}
            onMouseEnter={e => { if (status !== "loading") { e.currentTarget.style.borderColor = "rgba(247,245,240,0.4)"; e.currentTarget.style.color = "#F7F5F0"; }}}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(247,245,240,0.15)"; e.currentTarget.style.color = status === "loading" ? "rgba(247,245,240,0.25)" : "rgba(247,245,240,0.55)"; }}
          >{status === "loading" ? c.sending : c.submit}</button>
          {status === "success" && <p style={{ marginTop: "24px", fontSize: "12px", fontWeight: 300, color: "rgba(247,245,240,0.35)", letterSpacing: "0.05em", lineHeight: 1.8 }}>{c.success}</p>}
          {status === "error" && <p style={{ marginTop: "24px", fontSize: "12px", fontWeight: 300, color: "rgba(247,245,240,0.28)" }}>{c.error}</p>}
        </form>
      </div>
      <style>{`@media(max-width:900px){#contact{padding:100px 28px!important}#contact-grid{grid-template-columns:1fr!important;gap:48px!important}}`}</style>
    </section>
  );
}
