"use client";
import { useEffect, useRef } from "react";
import { useLang } from "@/lib/LanguageContext";

export default function Focus() {
  const ref = useRef<HTMLElement>(null);
  const { t } = useLang();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { e.target.querySelectorAll(".reveal").forEach(el => el.classList.add("visible")); obs.disconnect(); }}, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="focus" ref={ref} style={{ padding: "140px 72px", background: "#F7F5F0" }}>
      <div className="reveal eyebrow dark">{t.focus.eyebrow}</div>
      <h2 className="reveal reveal-delay-1 display" style={{ color: "#0A0A0A", marginBottom: "20px" }}>{t.focus.title}</h2>
      <p className="reveal reveal-delay-2 body-text" style={{ color: "rgba(10,10,10,0.42)", maxWidth: "440px", marginBottom: "72px" }}>{t.focus.body}</p>
      <div className="reveal reveal-delay-2" style={{ borderTop: "1px solid rgba(10,10,10,0.1)" }}>
        {t.focus.items.map((a) => (
          <div key={a.num}
            style={{ display: "grid", gridTemplateColumns: "80px 1fr auto", alignItems: "center", padding: "36px 0", borderBottom: "1px solid rgba(10,10,10,0.08)", transition: "opacity 0.35s", cursor: "default" }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.55")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            <div style={{ fontFamily: "'EB Garamond',serif", fontSize: "12px", color: "rgba(10,10,10,0.22)", letterSpacing: "0.08em" }}>{a.num}</div>
            <div style={{ fontFamily: "'EB Garamond',serif", fontSize: "clamp(22px,2.2vw,30px)", fontWeight: 400, color: "#0A0A0A" }}>{a.title}</div>
            <div style={{ fontSize: "11px", fontWeight: 300, color: "rgba(10,10,10,0.36)", letterSpacing: "0.03em", textAlign: "right" }} className="focus-sub">{a.sub}</div>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:768px){#focus{padding:100px 28px!important}.focus-sub{display:none!important}#focus .reveal>div{grid-template-columns:56px 1fr!important}}`}</style>
    </section>
  );
}
