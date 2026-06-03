"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/lib/LanguageContext";
import { Locale } from "@/lib/translations";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const links = [
    { id: "about", label: t.nav.about },
    { id: "focus", label: t.nav.investments },
    { id: "approach", label: t.nav.approach },
    { id: "principles", label: t.nav.philosophy },
    { id: "contact", label: t.nav.contact },
  ];

  const langBtn = (code: Locale, label: string): React.CSSProperties => ({
    background: "none", border: "none",
    fontFamily: "'Inter',sans-serif",
    fontSize: "9px", fontWeight: locale === code ? 500 : 300,
    letterSpacing: "0.18em", textTransform: "uppercase",
    color: locale === code ? "rgba(247,245,240,0.75)" : "rgba(247,245,240,0.28)",
    cursor: locale === code ? "default" : "pointer",
    transition: "color 0.35s", padding: 0,
  });

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(10,10,10,0.97)" : "transparent",
      borderBottom: scrolled ? "1px solid rgba(247,245,240,0.07)" : "1px solid transparent",
      padding: "20px 72px",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      transition: "background 0.6s, border-color 0.6s",
    }}>

      {/* Logo */}
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
      >
        <Logo variant="compact" height={20} />
      </div>

      {/* Desktop nav + language */}
      <div style={{ display: "flex", alignItems: "center", gap: "44px" }} className="nav-desktop">
        <ul style={{ display: "flex", gap: "44px", listStyle: "none" }}>
          {links.map(({ id, label }) => (
            <li key={id}>
              <button onClick={() => scrollTo(id)}
                style={{ background: "none", border: "none", fontFamily: "'Inter',sans-serif", fontSize: "9.5px", fontWeight: 400, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(247,245,240,0.4)", cursor: "pointer", transition: "color 0.35s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(247,245,240,0.85)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(247,245,240,0.4)")}
              >{label}</button>
            </li>
          ))}
        </ul>

        {/* Language selector */}
        <div style={{ display: "flex", alignItems: "center", borderLeft: "1px solid rgba(247,245,240,0.1)", paddingLeft: "28px" }}>
          <button style={langBtn("en", "EN")} onClick={() => setLocale("en")}
            onMouseEnter={e => { if (locale !== "en") e.currentTarget.style.color = "rgba(247,245,240,0.55)"; }}
            onMouseLeave={e => { if (locale !== "en") e.currentTarget.style.color = "rgba(247,245,240,0.28)"; }}
          >EN</button>
          <span style={{ color: "rgba(247,245,240,0.14)", fontSize: "10px", margin: "0 8px" }}>|</span>
          <button style={langBtn("es", "ES")} onClick={() => setLocale("es")}
            onMouseEnter={e => { if (locale !== "es") e.currentTarget.style.color = "rgba(247,245,240,0.55)"; }}
            onMouseLeave={e => { if (locale !== "es") e.currentTarget.style.color = "rgba(247,245,240,0.28)"; }}
          >ES</button>
        </div>
      </div>

      {/* Mobile right */}
      <div style={{ display: "none", alignItems: "center", gap: "16px" }} className="nav-mobile-right">
        <div style={{ display: "flex", alignItems: "center" }}>
          <button style={langBtn("en", "EN")} onClick={() => setLocale("en")}>EN</button>
          <span style={{ color: "rgba(247,245,240,0.14)", fontSize: "10px", margin: "0 6px" }}>|</span>
          <button style={langBtn("es", "ES")} onClick={() => setLocale("es")}>ES</button>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", color: "rgba(247,245,240,0.6)", fontSize: "16px", cursor: "pointer" }}
          aria-label="Menu">{menuOpen ? "✕" : "☰"}</button>
      </div>

      {menuOpen && (
        <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "rgba(10,10,10,0.98)", borderBottom: "1px solid rgba(247,245,240,0.07)", padding: "16px 0" }}>
          {links.map(({ id, label }) => (
            <button key={id} onClick={() => scrollTo(id)}
              style={{ display: "block", width: "100%", textAlign: "left", padding: "14px 28px", background: "none", border: "none", fontFamily: "'Inter',sans-serif", fontSize: "9.5px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(247,245,240,0.5)", cursor: "pointer" }}>
              {label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media(max-width:768px){
          .nav-desktop{display:none!important}
          .nav-mobile-right{display:flex!important}
          nav{padding:18px 28px!important}
        }
      `}</style>
    </nav>
  );
}
