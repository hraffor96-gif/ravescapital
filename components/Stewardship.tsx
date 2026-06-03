"use client";
import { useEffect, useRef } from "react";
import { useLang } from "@/lib/LanguageContext";

export default function Stewardship() {
  const ref = useRef<HTMLElement>(null);
  const { t } = useLang();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { e.target.querySelectorAll(".reveal").forEach(el => el.classList.add("visible")); obs.disconnect(); }}, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="stewardship" ref={ref} style={{ padding: "160px 72px", background: "#F7F5F0", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
      <div className="reveal eyebrow dark" style={{ justifyContent: "center" }}>{t.stewardship.eyebrow}</div>
      <p className="reveal reveal-delay-1" style={{ fontFamily: "'EB Garamond',Georgia,serif", fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 400, lineHeight: 1.35, color: "#0A0A0A", letterSpacing: "-0.01em", marginBottom: "52px", maxWidth: "700px" }}>
        {t.stewardship.title}
      </p>
      <div className="reveal reveal-delay-2" style={{ maxWidth: "560px" }}>
        <p style={{ fontSize: "14px", fontWeight: 300, lineHeight: 2.1, color: "rgba(10,10,10,0.62)", letterSpacing: "0.025em", marginBottom: "24px" }}>{t.stewardship.p1}</p>
        <p style={{ fontSize: "14px", fontWeight: 300, lineHeight: 2.1, color: "rgba(10,10,10,0.48)", letterSpacing: "0.025em" }}>{t.stewardship.p2}</p>
      </div>
      <div className="reveal reveal-delay-3" style={{ marginTop: "72px", width: "1px", height: "60px", background: "rgba(10,10,10,0.14)" }} />
      <style>{`@media(max-width:768px){#stewardship{padding:100px 28px!important}}`}</style>
    </section>
  );
}
