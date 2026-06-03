"use client";
import { useEffect, useRef } from "react";
import { useLang } from "@/lib/LanguageContext";

export default function Approach() {
  const ref = useRef<HTMLElement>(null);
  const { t } = useLang();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { e.target.querySelectorAll(".reveal").forEach(el => el.classList.add("visible")); obs.disconnect(); }}, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="approach" ref={ref} style={{ padding: "140px 72px", background: "#0A0A0A" }}>
      <div className="reveal eyebrow">{t.approach.eyebrow}</div>
      <h2 className="reveal reveal-delay-1 display" style={{ color: "#F7F5F0", marginBottom: "20px" }}>{t.approach.title}</h2>
      <p className="reveal reveal-delay-2 body-text" style={{ color: "rgba(247,245,240,0.68)", maxWidth: "440px", marginBottom: "88px" }}>{t.approach.body}</p>
      <div className="reveal reveal-delay-2">
        {t.approach.steps.map((s) => (
          <div key={s.num} style={{ display: "grid", gridTemplateColumns: "80px 220px 1fr", alignItems: "start", padding: "44px 0", borderTop: "1px solid rgba(247,245,240,0.10)", gap: "40px" }} className="approach-row">
            <div style={{ fontFamily: "'EB Garamond',serif", fontSize: "13px", color: "rgba(247,245,240,0.45)", letterSpacing: "0.08em", paddingTop: "3px" }}>{s.num}</div>
            <div style={{ fontFamily: "'EB Garamond',serif", fontSize: "clamp(22px,2vw,28px)", fontWeight: 400, color: "#F7F5F0", lineHeight: 1.15 }}>{s.title}</div>
            <div style={{ fontSize: "13.5px", fontWeight: 300, lineHeight: 1.9, color: "rgba(247,245,240,0.65)", letterSpacing: "0.025em", maxWidth: "480px" }}>{s.body}</div>
          </div>
        ))}
        <div style={{ height: "1px", background: "rgba(247,245,240,0.10)" }} />
      </div>
      <style>{`@media(max-width:768px){#approach{padding:100px 28px!important}.approach-row{grid-template-columns:48px 1fr!important;gap:16px!important}.approach-row>div:last-child{grid-column:2;margin-top:-8px}}`}</style>
    </section>
  );
}
