'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'

const serviceLinks = [
  { title: 'Ghostwriting', href: '/services/ghostwriting', tag: 'RIRI Ink' },
  { title: 'Cyber Security', href: '/services/cyber-security', tag: 'RIRI Shield' },
  { title: 'Human Resources', href: '/services/human-resources', tag: 'RIRI People' },
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
  ctaHref = '/contact',
  extraLinks,
}: {
  ctaLabel?: string
  ctaHref?: string
  extraLinks?: { label: string; href: string }[]
}) {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock background scroll + close on Escape while the menu is open.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header className={`site-nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-inner">

        {/* Logo — left */}
        <Logo />

        {/* Desktop nav links — centered absolutely */}
        <nav className="nav-links" aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="/#about">About</Link>
          <div className="nav-service-menu">
            <button type="button" className="nav-services" aria-haspopup="true">
              Services <ChevronDown size={14} />
            </button>
            <div className="service-dropdown" role="menu">
              {serviceLinks.map(s => (
                <Link key={s.title} href={s.href} role="menuitem">
                  {s.title} <ArrowRight size={14} />
                </Link>
              ))}
            </div>
          </div>
          {extraLinks?.map(l => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
          <Link href="/contact">Contact</Link>
        </nav>

        {/* CTA + toggle — right */}
        <div className="nav-right">
          <Link className="button button-small nav-cta" href={ctaHref}>
            {ctaLabel} <ArrowRight size={15} />
          </Link>
          <button
            className="menu-button"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

      </div>

      {/* Full-width menu panel — drops down below the header */}
      <nav
        id="mobile-menu"
        className={`mobile-menu ${open ? 'open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        <div className="container mobile-menu-inner ">
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/#about" onClick={closeMenu}>About</Link>

          <div className="mobile-service">
            <button
              type="button"
              className={`mobile-service-toggle ${servicesOpen ? 'active' : ''}`}
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
            >
              Services
              <ChevronDown size={18} />
            </button>
            <div className={`mobile-service-body ${servicesOpen ? 'open' : ''}`}>
              <div className="mobile-service-links">
                {serviceLinks.map(s => (
                  <Link key={s.title} href={s.href} onClick={closeMenu}>
                    <span className="mobile-service-name">{s.title}</span>
                    <small className="mobile-service-tag">{s.tag}</small>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {extraLinks?.map(l => (
            <Link key={l.href} href={l.href} onClick={closeMenu}>{l.label}</Link>
          ))}
          <Link href="/contact" onClick={closeMenu}>Contact</Link>

          <div className="mobile-menu-cta">
            <Link className="button" href={ctaHref} onClick={closeMenu}>
              {ctaLabel} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}