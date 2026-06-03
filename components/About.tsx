"use client";
import { useEffect, useRef } from "react";
import { useLang } from "@/lib/LanguageContext";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { t } = useLang();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { e.target.querySelectorAll(".reveal").forEach(el => el.classList.add("visible")); obs.disconnect(); }}, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} style={{ padding: "140px 72px", background: "#0A0A0A" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "100px", alignItems: "start" }} className="two-col">
        <div>
          <div className="reveal eyebrow">{t.about.eyebrow}</div>
          <h2 className="reveal reveal-delay-1 display" style={{ color: "#F7F5F0" }}>
            {t.about.title[0]}<br />
            {t.about.title[1]}<br />
            <em style={{ fontStyle: "italic", color: "rgba(247,245,240,0.32)" }}>{t.about.title[2]}</em>
          </h2>
        </div>
        <div style={{ borderLeft: "1px solid rgba(247,245,240,0.07)", paddingLeft: "80px" }} className="about-right">
          <p className="reveal reveal-delay-1 body-text" style={{ color: "rgba(247,245,240,0.48)", marginBottom: "36px" }}>{t.about.p1}</p>
          <p className="reveal reveal-delay-2 body-text" style={{ color: "rgba(247,245,240,0.26)" }}>{t.about.p2}</p>
        </div>
      </div>
      <style>{`@media(max-width:900px){#about{padding:100px 28px!important}#about .two-col{grid-template-columns:1fr!important;gap:48px!important}.about-right{border-left:none!important;border-top:1px solid rgba(247,245,240,0.07);padding-left:0!important;padding-top:36px!important}}`}</style>
    </section>
  );
}
