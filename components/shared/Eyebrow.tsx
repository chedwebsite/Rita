'use client'

import { Sparkles } from 'lucide-react'

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow">
      <Sparkles size={12} /> {children}
    </div>
  )
}
