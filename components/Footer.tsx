"use client";
import { useLang } from "@/lib/LanguageContext";
import Logo from "./Logo";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer style={{ background: "#0A0A0A", borderTop: "1px solid rgba(247,245,240,0.10)" }}>
      <div style={{ padding: "56px 72px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
        <div>
          <Logo variant="primary" height={44} />
          <div style={{ fontFamily: "'EB Garamond',Georgia,serif", fontStyle: "italic", fontSize: "13px", color: "rgba(247,245,240,0.48)", marginTop: "10px" }}>{t.footer.tagline}</div>
        </div>
        <div style={{ fontSize: "10px", color: "rgba(247,245,240,0.48)", letterSpacing: "0.08em" }}>
          © {new Date().getFullYear()} Raves Capital Holdings LLC. {t.footer.rights}
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(247,245,240,0.08)", padding: "24px 72px 36px" }}>
        <p style={{ fontSize: "11px", fontWeight: 300, lineHeight: 1.85, color: "rgba(247,245,240,0.45)", letterSpacing: "0.03em", maxWidth: "800px" }}>{t.footer.disclaimer}</p>
      </div>
      <style>{`@media(max-width:768px){footer>div:first-child{padding:44px 28px 32px!important;flex-direction:column;text-align:center}footer>div:last-child{padding:20px 28px 32px!important}}`}</style>
    </footer>
  );
}
