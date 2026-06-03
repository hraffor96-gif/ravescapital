"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/LanguageContext";

interface Props { open: boolean; onClose: () => void; }

export default function PrinciplesModal({ open, onClose }: Props) {
  const { t } = useLang();
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = open ? "hidden" : "";
    return () => { window.removeEventListener("keydown", handler); document.body.style.overflow = ""; };
  }, [open, onClose]);

  return (
    <div className={`modal-overlay${open ? " open" : ""}`} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-box">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "56px" }}>
          <div>
            <div style={{ fontSize: "8.5px", fontWeight: 500, letterSpacing: "0.38em", textTransform: "uppercase", color: "rgba(247,245,240,0.28)", marginBottom: "16px" }}>{t.modal.eyebrow}</div>
            <h2 style={{ fontFamily: "'EB Garamond',Georgia,serif", fontSize: "clamp(28px,3vw,40px)", fontWeight: 400, color: "#F7F5F0", lineHeight: 1.1 }}>{t.modal.title}</h2>
          </div>
          <button onClick={onClose}
            style={{ background: "none", border: "1px solid rgba(247,245,240,0.12)", color: "rgba(247,245,240,0.4)", cursor: "pointer", fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", padding: "10px 20px", fontFamily: "'Inter',sans-serif", transition: "all 0.3s", flexShrink: 0, marginLeft: "24px" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(247,245,240,0.3)"; e.currentTarget.style.color = "#F7F5F0"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(247,245,240,0.12)"; e.currentTarget.style.color = "rgba(247,245,240,0.4)"; }}
          >{t.modal.close}</button>
        </div>

        {t.modal.items.map((p, i) => (
          <div key={p.title} style={{ paddingTop: "40px", paddingBottom: "40px", borderTop: "1px solid rgba(247,245,240,0.07)" }}>
            <div style={{ display: "flex", gap: "40px", alignItems: "start" }}>
              <div style={{ fontFamily: "'EB Garamond',serif", fontSize: "11px", color: "rgba(247,245,240,0.2)", minWidth: "24px", paddingTop: "3px" }}>{String(i + 1).padStart(2, "0")}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "9.5px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(247,245,240,0.5)", marginBottom: "16px" }}>{p.title}</div>
                {p.body.split("\n\n").map((para, j) => (
                  <p key={j} style={{ fontSize: "13px", fontWeight: 300, lineHeight: 1.95, color: "rgba(247,245,240,0.32)", letterSpacing: "0.025em", marginBottom: j === 0 ? "16px" : "0" }}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div style={{ borderTop: "1px solid rgba(247,245,240,0.07)", paddingTop: "32px", marginTop: "8px" }}>
          <p style={{ fontSize: "10.5px", fontWeight: 300, lineHeight: 1.85, color: "rgba(247,245,240,0.15)", letterSpacing: "0.03em" }}>{t.modal.disclaimer}</p>
        </div>
      </div>
    </div>
  );
}
