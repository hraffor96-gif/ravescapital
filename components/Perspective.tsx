"use client";
import { useEffect, useRef } from "react";
import { useLang } from "@/lib/LanguageContext";

export default function Perspective() {
  const ref = useRef<HTMLElement>(null);
  const { t } = useLang();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { e.target.querySelectorAll(".reveal").forEach(el => el.classList.add("visible")); obs.disconnect(); }}, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="perspective" ref={ref} style={{ padding: "120px 72px", background: "#0A0A0A", borderTop: "1px solid rgba(247,245,240,0.10)" }}>
      <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
        <div className="reveal eyebrow" style={{ justifyContent: "center" }}>{t.perspective.eyebrow}</div>
        <p className="reveal reveal-delay-1" style={{ fontFamily: "'EB Garamond',Georgia,serif", fontSize: "clamp(22px,2.4vw,32px)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.55, color: "rgba(247,245,240,0.75)", letterSpacing: "0.005em" }}>{t.perspective.line1}</p>
        <p className="reveal reveal-delay-2" style={{ fontFamily: "'EB Garamond',Georgia,serif", fontSize: "clamp(22px,2.4vw,32px)", fontWeight: 400, lineHeight: 1.55, color: "rgba(247,245,240,0.50)", letterSpacing: "0.005em", marginTop: "12px" }}>{t.perspective.line2}</p>
        <p className="reveal reveal-delay-3" style={{ fontSize: "14px", fontWeight: 300, lineHeight: 2, color: "rgba(247,245,240,0.62)", letterSpacing: "0.03em", maxWidth: "480px", margin: "36px auto 0" }}>{t.perspective.body}</p>
      </div>
      <style>{`@media(max-width:768px){#perspective{padding:88px 28px!important}}`}</style>
    </section>
  );
}
