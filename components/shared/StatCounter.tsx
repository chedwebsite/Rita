'use client'

import { useEffect, useRef, useState } from 'react'

function parseNumber(raw: string): { value: number; suffix: string } {
  const match = raw.match(/^(\d+)(.*)$/)
  if (!match) return { value: 0, suffix: raw }
  return { value: parseInt(match[1], 10), suffix: match[2] }
}

export function StatCounter({ raw, className }: { raw: string; className?: string }) {
  const { value, suffix } = parseNumber(raw)
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 900
        const steps = 40
        const increment = value / steps
        let current = 0
        let step = 0
        const timer = setInterval(() => {
          step++
          current = Math.min(Math.round(increment * step), value)
          setDisplay(current)
          if (current >= value) clearInterval(timer)
        }, duration / steps)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return <span ref={ref} className={className}>{display}{suffix}</span>
}
