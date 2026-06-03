"use client";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import PrinciplesModal from "./PrinciplesModal";

export default function Philosophy() {
  const ref = useRef<HTMLElement>(null);
  const { t } = useLang();
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { e.target.querySelectorAll(".reveal").forEach(el => el.classList.add("visible")); obs.disconnect(); }}, { threshold: 0.06 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <section id="principles" ref={ref} style={{ padding: "140px 72px", background: "#091422" }}>
        <div className="reveal eyebrow">{t.philosophy.eyebrow}</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "80px", flexWrap: "wrap", gap: "24px" }}>
          <h2 className="reveal reveal-delay-1 display" style={{ color: "#F7F5F0" }}>{t.philosophy.title}</h2>
          <button className="reveal reveal-delay-2" onClick={() => setModalOpen(true)}
            style={{ background: "none", border: "1px solid rgba(247,245,240,0.28)", color: "rgba(247,245,240,0.72)", cursor: "pointer", fontFamily: "'Inter',sans-serif", fontSize: "9px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", padding: "12px 28px", transition: "all 0.4s", whiteSpace: "nowrap" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(247,245,240,0.6)"; e.currentTarget.style.color = "#F7F5F0"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(247,245,240,0.28)"; e.currentTarget.style.color = "rgba(247,245,240,0.72)"; }}
          >{t.philosophy.cta}</button>
        </div>
        <div className="reveal reveal-delay-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }} id="phil-grid">
          {t.philosophy.items.map((p, i) => (
            <div key={p.title} style={{ padding: "44px 0", borderTop: "1px solid rgba(247,245,240,0.10)", paddingRight: i % 2 === 0 ? "64px" : "0", paddingLeft: i % 2 === 1 ? "64px" : "0", borderLeft: i % 2 === 1 ? "1px solid rgba(247,245,240,0.10)" : "none" }}>
              <div style={{ fontSize: "9.5px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(247,245,240,0.72)", marginBottom: "16px" }}>{p.title}</div>
              <p style={{ fontSize: "13.5px", fontWeight: 300, lineHeight: 1.95, color: "rgba(247,245,240,0.62)", letterSpacing: "0.025em" }}>{p.body}</p>
            </div>
          ))}
        </div>
      </section>
      <PrinciplesModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <style>{`@media(max-width:768px){#principles{padding:100px 28px!important}#phil-grid{grid-template-columns:1fr!important}#phil-grid>div{border-left:none!important;padding-left:0!important;padding-right:0!important}}`}</style>
    </>
  );
}
