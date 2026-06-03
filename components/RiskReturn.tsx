"use client";
import { useEffect, useRef } from "react";
import { useLang } from "@/lib/LanguageContext";

export default function RiskReturn() {
  const ref = useRef<HTMLElement>(null);
  const { t } = useLang();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { e.target.querySelectorAll(".reveal").forEach(el => el.classList.add("visible")); obs.disconnect(); }}, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ padding: "140px 72px", background: "#111111" }}>
      <div className="reveal eyebrow">{t.riskReturn.eyebrow}</div>
      <h2 className="reveal reveal-delay-1 display" style={{ color: "#F7F5F0", marginBottom: "80px" }}>{t.riskReturn.title[0]}<br />{t.riskReturn.title[1]}</h2>
      <div className="reveal reveal-delay-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "100px", alignItems: "start" }} id="risk-grid">
        <div>
          <p style={{ fontFamily: "'EB Garamond',Georgia,serif", fontSize: "clamp(20px,1.9vw,27px)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.65, color: "rgba(247,245,240,0.78)", marginBottom: "36px" }}>"{t.riskReturn.quote}"</p>
          <p style={{ fontSize: "13.5px", fontWeight: 300, lineHeight: 2, color: "rgba(247,245,240,0.62)", letterSpacing: "0.025em" }}>{t.riskReturn.body}</p>
        </div>
        <div>
          <div style={{ fontSize: "8.5px", letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(247,245,240,0.52)", marginBottom: "32px" }}>{t.riskReturn.criteriaLabel}</div>
          {t.riskReturn.criteria.map(f => (
            <div key={f.label} style={{ padding: "24px 0", borderTop: "1px solid rgba(247,245,240,0.10)" }}>
              <div style={{ fontSize: "9.5px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(247,245,240,0.72)", marginBottom: "10px" }}>{f.label}</div>
              <p style={{ fontSize: "13px", fontWeight: 300, lineHeight: 1.85, color: "rgba(247,245,240,0.55)", letterSpacing: "0.02em" }}>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){section[style*="#111111"]{padding:100px 28px!important}#risk-grid{grid-template-columns:1fr!important;gap:60px!important}}`}</style>
    </section>
  );
}
