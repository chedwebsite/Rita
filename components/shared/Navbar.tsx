'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'

const serviceLinks = [
  { title: 'Ghostwriting', href: '/services/ghostwriting' },
  { title: 'Cyber Security', href: '/services/cyber-security' },
  { title: 'Human Resources', href: '/services/human-resources' },
]

export function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      href="/"
      className={`logo ${footer ? 'logo-footer' : ''}`}
      aria-label="RIRI Group home"
    >
      <span className="logo-mark">◆</span>
      <span>RIRI{footer ? ' Group' : ''}</span>
    </Link>
  )
}

export function Navbar({
  ctaLabel = 'Get Started',
  ctaHref = '/#contact',
  extraLinks,
}: {
  ctaLabel?: string
  ctaHref?: string
  extraLinks?: { label: string; href: string }[]
}) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-inner">

        {/* Logo — left */}
        <Logo />

        {/* Nav links — centered absolutely */}
        <nav className={`nav-links ${open ? 'nav-open' : ''}`} aria-label="Primary navigation">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/#about" onClick={() => setOpen(false)}>About</Link>
          <div className="nav-service-menu">
            <button type="button" className="nav-services" aria-haspopup="true">
              Services <ChevronDown size={14} />
            </button>
            <div className="service-dropdown" role="menu">
              {serviceLinks.map(s => (
                <Link key={s.title} href={s.href} role="menuitem" onClick={() => setOpen(false)}>
                  {s.title} <ArrowRight size={14} />
                </Link>
              ))}
            </div>
          </div>
          {extraLinks?.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>

        {/* CTA — right */}
        <div className="nav-right">
          <Link className="button button-small nav-cta" href={ctaHref}>
            {ctaLabel} <ArrowRight size={15} />
          </Link>
          <button
            className="menu-button"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

      </div>
    </header>
  )
}
