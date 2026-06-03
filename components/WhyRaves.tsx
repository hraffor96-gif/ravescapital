"use client";
import { useEffect, useRef } from "react";
import { useLang } from "@/lib/LanguageContext";

export default function WhyRaves() {
  const ref = useRef<HTMLElement>(null);
  const { t } = useLang();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { e.target.querySelectorAll(".reveal").forEach(el => el.classList.add("visible")); obs.disconnect(); }}, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ padding: "140px 72px", background: "#0A0A0A" }}>
      <div className="reveal eyebrow">{t.whyRaves.eyebrow}</div>
      <h2 className="reveal reveal-delay-1 display" style={{ color: "#F7F5F0", marginBottom: "20px" }}>{t.whyRaves.title}</h2>
      <p className="reveal reveal-delay-2 body-text" style={{ color: "rgba(247,245,240,0.65)", maxWidth: "440px", marginBottom: "80px" }}>{t.whyRaves.body}</p>
      <div className="reveal reveal-delay-2">
        {t.whyRaves.items.map(item => (
          <div key={item.num} style={{ display: "grid", gridTemplateColumns: "80px 200px 1fr", alignItems: "start", padding: "40px 0", borderTop: "1px solid rgba(247,245,240,0.10)", gap: "40px" }} className="why-row">
            <div style={{ fontFamily: "'EB Garamond',serif", fontSize: "20px", fontWeight: 400, color: "rgba(247,245,240,0.28)", paddingTop: "2px" }}>{item.num}</div>
            <div style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(247,245,240,0.75)", paddingTop: "4px" }}>{item.title}</div>
            <p style={{ fontSize: "13.5px", fontWeight: 300, lineHeight: 1.9, color: "rgba(247,245,240,0.62)", letterSpacing: "0.025em" }}>{item.body}</p>
          </div>
        ))}
        <div style={{ height: "1px", background: "rgba(247,245,240,0.10)" }} />
      </div>
      <style>{`@media(max-width:768px){.why-row{grid-template-columns:48px 1fr!important;gap:16px!important}.why-row>div:last-child{grid-column:2}}`}</style>
    </section>
  );
}
