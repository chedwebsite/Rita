'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { Navbar } from '@/components/shared/Navbar'
import { Eyebrow } from '@/components/shared/Eyebrow'
import { Reveal } from '@/components/shared/Reveal'
import { SiteFooter } from '@/components/shared/SiteFooter'

const offices = [
  { city: 'Austin', address: '1200 Corporate Plaza, Suite 400\nAustin, TX 78701', phone: '+1 (512) 555-0134', email: 'hello@veridiangroup.com' },
  { city: 'London', address: '22 Bishopsgate, Level 18\nLondon, EC2N 4BQ', phone: '+44 20 7946 0321', email: 'uk@veridiangroup.com' },
]

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', division: '', message: '' })

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <Navbar ctaLabel="Get Started" ctaHref="/contact" />
      <main>

        {/* Hero */}
        <section className="contact-hero">
          <div className="container contact-hero-content">
            <Reveal><Eyebrow>GET IN TOUCH</Eyebrow></Reveal>
            <Reveal className="reveal-delay-1"><h1>Let's start a<br /><em>conversation.</em></h1></Reveal>
            <Reveal className="reveal-delay-2"><p className="hero-copy">Tell us what you're working toward. We'll listen, recommend the right division, and outline the clearest path forward.</p></Reveal>
          </div>
        </section>

        {/* Form + Info */}
        <section className="section contact-section">
          <div className="container contact-grid">

            {/* Form */}
            <Reveal className="contact-form-wrap">
              {sent ? (
                <div className="contact-success">
                  <span className="success-icon">✓</span>
                  <h3>Message received</h3>
                  <p>Thanks for reaching out. A member of our team will be in touch within one business day.</p>
                  <button className="button" onClick={() => setSent(false)}>Send another message</button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h2>Send us a message</h2>
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="name">Full name</label>
                      <input id="name" type="text" placeholder="Jane Smith" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div className="form-field">
                      <label htmlFor="email">Email address</label>
                      <input id="email" type="email" placeholder="jane@company.com" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                    </div>
                  </div>
                  <div className="form-field">
                    <label htmlFor="division">Which division can we help with?</label>
                    <select id="division" value={form.division} onChange={e => setForm({ ...form, division: e.target.value })}>
                      <option value="">Select a division…</option>
                      <option value="ghostwriting">Veridian Ink — Ghostwriting</option>
                      <option value="cyber-security">Veridian Shield — Cyber Security</option>
                      <option value="human-resources">Veridian People — Human Resources</option>
                      <option value="general">General enquiry</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label htmlFor="message">Your message</label>
                    <textarea id="message" rows={5} placeholder="Tell us about your project or challenge…" required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                  </div>
                  <button type="submit" className="button">Send Message <ArrowRight size={17} /></button>
                </form>
              )}
            </Reveal>

            {/* Info */}
            <div className="contact-info">
              {offices.map(o => (
                <Reveal key={o.city} className="contact-office">
                  <h4>{o.city}</h4>
                  <p className="contact-line"><MapPin size={14} /> {o.address.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}</p>
                  <p className="contact-line"><Phone size={14} /> {o.phone}</p>
                  <p className="contact-line"><Mail size={14} /> <Link href={`mailto:${o.email}`}>{o.email}</Link></p>
                </Reveal>
              ))}
              <Reveal className="contact-divisions">
                <h4>Our Divisions</h4>
                <Link href="/services/ghostwriting" className="contact-division-link">Veridian Ink — Ghostwriting <ArrowRight size={13} /></Link>
                <Link href="/services/cyber-security" className="contact-division-link">Veridian Shield — Cyber Security <ArrowRight size={13} /></Link>
                <Link href="/services/human-resources" className="contact-division-link">Veridian People — Human Resources <ArrowRight size={13} /></Link>
              </Reveal>
            </div>

          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  )
}
