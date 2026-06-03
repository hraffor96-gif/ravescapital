"use client";
import { useEffect, useState } from "react";

export default function Loader() {
  const [lineActive, setLineActive] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setLineActive(true), 120);
    const t2 = setTimeout(() => setHidden(true), 1800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (hidden) return null;

  return (
    <div id="page-loader" className={hidden ? "hidden" : ""}>
      <div className="loader-wordmark">Raves Capital</div>
      <div className={`loader-line${lineActive ? " active" : ""}`} />
    </div>
  );
}
