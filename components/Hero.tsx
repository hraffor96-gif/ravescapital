"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import Logo from "./Logo";

const anim = (loaded: boolean, delay: number): React.CSSProperties => ({
  opacity: loaded ? 1 : 0,
  transform: loaded ? "none" : "translateY(20px)",
  transition: "opacity 1.4s cubic-bezier(0.16,1,0.3,1), transform 1.4s cubic-bezier(0.16,1,0.3,1)",
  transitionDelay: `${delay}s`,
});

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const { t } = useLang();
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section style={{ minHeight: "100vh", background: "#0A0A0A", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "0 72px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: "72px", top: 0, bottom: 0, width: "1px", background: "rgba(247,245,240,0.04)" }} className="v-rule" />
      <div style={{ position: "absolute", right: "72px", top: 0, bottom: 0, width: "1px", background: "rgba(247,245,240,0.04)" }} className="v-rule" />
      <div style={{ height: "120px" }} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", paddingBottom: "60px" }}>

        {/* Eyebrow */}
        <div style={anim(loaded, 0.1)}>
          <div style={{ fontSize: "8.5px", fontWeight: 400, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(247,245,240,0.22)", marginBottom: "52px" }}>
            {t.hero.eyebrow}
          </div>
        </div>

        {/* Logo mark — primary large version */}
        <div style={{ ...anim(loaded, 0.25), marginBottom: "52px" }}>
          <Logo variant="primary" height={88} />
        </div>

        {/* Tagline + body + CTA */}
        <div style={{ ...anim(loaded, 0.45), maxWidth: "400px" }}>
          <p style={{ fontFamily: "'EB Garamond',Georgia,serif", fontSize: "clamp(17px,1.6vw,21px)", fontWeight: 400, fontStyle: "italic", color: "rgba(247,245,240,0.36)", lineHeight: 1.6, marginBottom: "20px" }}>
            {t.hero.tagline}
          </p>
          <p style={{ fontSize: "13px", fontWeight: 300, lineHeight: 2, color: "rgba(247,245,240,0.28)", letterSpacing: "0.03em", marginBottom: "52px" }}>
            {t.hero.body}
          </p>
          <button
            onClick={() => scrollTo("contact")}
            style={{ display: "inline-flex", alignItems: "center", gap: "16px", padding: "15px 44px", border: "1px solid rgba(247,245,240,0.16)", background: "transparent", fontFamily: "'Inter',sans-serif", fontSize: "9px", fontWeight: 500, letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(247,245,240,0.55)", cursor: "pointer", transition: "all 0.45s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(247,245,240,0.45)"; e.currentTarget.style.color = "#F7F5F0"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(247,245,240,0.16)"; e.currentTarget.style.color = "rgba(247,245,240,0.55)"; }}
          >
            {t.hero.cta} →
          </button>
        </div>
      </div>

      {/* Aside stats */}
      <div style={{ ...anim(loaded, 0.6), position: "absolute", right: "72px", bottom: "100px", textAlign: "right" }} className="hero-aside">
        {t.hero.aside.map(s => (
          <div key={s.label} style={{ marginBottom: "32px" }}>
            <div style={{ fontSize: "8px", letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(247,245,240,0.18)", marginBottom: "6px" }}>{s.label}</div>
            <div style={{ fontFamily: "'EB Garamond',serif", fontSize: "24px", fontWeight: 400, color: "rgba(247,245,240,0.18)" }}>{s.val}</div>
          </div>
        ))}
      </div>

      {/* Trust signals */}
      <div style={{ ...anim(loaded, 0.75), borderTop: "1px solid rgba(247,245,240,0.06)", padding: "28px 0", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "4px" }}>
        {t.hero.signals.map((s, i) => (
          <div key={s} style={{ display: "flex", alignItems: "center" }}>
            {i > 0 && <span style={{ color: "rgba(247,245,240,0.1)", fontSize: "10px", margin: "0 18px" }}>·</span>}
            <span style={{ fontSize: "8.5px", fontWeight: 400, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(247,245,240,0.18)" }}>{s}</span>
          </div>
        ))}
      </div>

      <style>{`
        @media(max-width:768px){
          section[style*="minHeight"]{padding:0 28px!important}
          .v-rule,.hero-aside{display:none!important}
        }
      `}</style>
    </section>
  );
}
