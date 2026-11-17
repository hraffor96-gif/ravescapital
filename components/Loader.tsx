'use client'
import { useEffect, useState } from 'react'

export default function Loader() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), 1600)
    const t2 = setTimeout(() => setVisible(false), 2200)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (!visible) return null

  return (
    <div className={`fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center transition-opacity duration-600 ${fading ? 'opacity-0' : 'opacity-100'}`}>
      <div className="flex flex-col items-center gap-3">
        <span className="tracking-[0.5em] text-white/80 text-sm font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
          RAVES
        </span>
        <div className="w-16 h-px bg-white/20 origin-left animate-[expand_0.8s_ease-out_0.3s_forwards] scale-x-0" />
        <span className="tracking-[0.4em] text-white/30 text-[9px] font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
          CAPITAL
        </span>
      </div>
    </div>
  )
}
