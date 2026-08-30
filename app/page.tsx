'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ChartNoAxesCombined,
  Check,
  ChevronLeft,
  ChevronRight,
  Crown,
  Headphones,
  PenLine,
  ShieldCheck,
  UsersRound,
  X,
} from 'lucide-react'
import { Navbar } from '@/components/shared/Navbar'
import { Eyebrow } from '@/components/shared/Eyebrow'
import { Reveal } from '@/components/shared/Reveal'
import { SiteFooter } from '@/components/shared/SiteFooter'

const services = [
  { title: 'Ghostwriting', subtitle: 'Your Story, Our Words', copy: 'Books, blogs, speeches and executive content written for you.', icon: PenLine, href: '/services/ghostwriting' },
  { title: 'Cyber Security', subtitle: 'Protecting What Matters Most', copy: 'Penetration testing, monitoring and compliance consulting.', icon: ShieldCheck, href: '/services/cyber-security' },
  { title: 'Human Resources', subtitle: 'People-First HR Solutions', copy: 'Recruitment, payroll, employee relations and HR consulting.', icon: UsersRound, href: '/services/human-resources' },
]

const faqs = [
  ['What does RIRI Group actually do?', 'We are a parent company operating three specialized divisions: RIRI Ink, RIRI Shield and RIRI People. You can engage one division or all three through a single accountable partner.'],
  ['How do the three divisions work together?', 'Our specialists collaborate around your goals, giving you one clear point of contact while bringing the right expertise to every part of the challenge.'],
  ['How do I get started with a project?', 'Tell us what you are working toward through our contact form. We will listen, recommend the right division, and outline the next best step.'],
  ['Is my information kept confidential?', 'Yes. Confidentiality is our baseline. We treat your ideas, systems and people with care from the first conversation.'],
  ['Are you a global company?', 'We work with leaders and teams across regions, with a distributed network of trusted specialists ready to support your work.'],
]

const testimonials = [
  { quote: 'RIRI Group handled everything from my book launch to securing our company network. It’s rare to find three specialist teams under one accountable roof.', name: 'Sarah Whitmore', role: 'CEO, Whitmore Holdings' },
  { quote: 'Their team brought clarity to a complex people challenge and gave us a plan we could actually use.', name: 'Marcus Chen', role: 'Founder, Northstar Labs' },
  { quote: 'Our security posture changed completely. We finally have a partner who explains the why, not just the what.', name: 'Elena Rodriguez', role: 'COO, Meridian Co.' },
]

const values = [
  ['Trusted Partnership', 'One accountable partner across your most sensitive needs — writing, security and people.', Headphones],
  ['Deep Specialization', 'Each division is led by seasoned experts in its field, so you get senior-level craft.', Crown],
  ['Measurable Results', 'We tie every engagement to outcomes you can see — published work, fewer breaches, stronger retention.', ChartNoAxesCombined],
  ['White-Glove Support', 'A dedicated point of contact, transparent timelines and proactive communication.', Headphones],
]

const divisions = [
  ['RIRI Ink', 'Turns your ideas and story into published, on-voice written work.', PenLine, '/services/ghostwriting'],
  ['RIRI Shield', 'Protects your business with proactive, expert-led cyber security.', ShieldCheck, '/services/cyber-security'],
  ['RIRI People', 'Builds, supports and strengthens your team and culture.', UsersRound, '/services/human-resources'],
]

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-glow" />
      <div className="container hero-content">
        <Reveal><Eyebrow>ONE COMPANY · THREE DIVISIONS</Eyebrow></Reveal>
        <Reveal className="reveal-delay-1"><h1>Expertise in <span>&</span><br /><em>one roof.</em></h1></Reveal>
        <Reveal className="reveal-delay-2">
          <p className="hero-copy">RIRI Group is a trusted parent company connecting business leaders with specialized ghostwriting, cyber security and human resources experts who deliver real, measurable results.</p>
        </Reveal>
        <Reveal className="reveal-delay-3">
          <div className="hero-actions">
            <Link className="button" href="#services">Explore Our Services <ArrowRight size={18} /></Link>
            <Link className="button button-light" href="/contact">Talk to Our Team</Link>
          </div>
        </Reveal>
        <Reveal className="reveal-delay-4">
          <div className="trust-list">
            {['Trusted expertise', 'Confidential by default', 'End-to-end delivery', 'Global reach'].map(item => (
              <span key={item}><Check size={14} /> {item}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Stats() {
  const stats = [
    ['12+', 'Years of combined expertise'],
    ['480+', 'Clients served worldwide'],
    ['3', 'Specialized divisions'],
    ['98%', 'Client satisfaction rate'],
  ] as const
  return (
    <section className="stats">
      <div className="container stats-grid">
        {stats.map(([number, label]) => (
          <Reveal key={label}><div className="stat"><strong>{number}</strong><span>{label}</span></div></Reveal>
        ))}
      </div>
    </section>
  )
}
function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <Reveal className="about-visual">
          <div className="image-frame">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fullpage_snapshot_readdy_ai_2026-08-28-16-49-53-mwFgPPuoUhovktpox6bXkp8OFmbtze.png"
              alt="RIRI Group team collaborating in a glass meeting room"
            />
          </div>
          <div className="experience-badge"><strong>12+</strong><span>Years of trusted expertise</span></div>
        </Reveal>
        <Reveal className="about-copy">
          <Eyebrow>ABOUT RIRI GROUP</Eyebrow>
          <h2>A parent company built on specialization</h2>
          <p>We founded RIRI Group on a simple belief: complex challenges deserve focused experts. Rather than diluting talent across one broad agency, we operate three dedicated divisions — each led by senior specialists in its field.</p>
          <div className="division-list">
            {divisions.map(([title, copy, Icon, href]) => (
              <Link href={href as string} key={title as string} className="division">
                <span className="division-icon"><Icon size={18} /></span>
                <span><b>{title as string}</b><small>{copy as string}</small></span>
                <ArrowRight size={15} />
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="section pale" id="services">
      <div className="container">
        <Reveal className="section-heading">
          <Eyebrow>OUR DIVISIONS</Eyebrow>
          <h2>Three specialized services.<br />One accountable partner.</h2>
          <p>Choose the division you need — or combine them for a holistic approach to your business.</p>
        </Reveal>
        <div className="services-grid">
          {services.map(({ title, subtitle, copy, icon: Icon, href }, i) => (
            <Reveal key={title} className={`reveal-delay-${i + 1}`}>
              <Link className="service-card" href={href}>
                <div className="service-icon"><Icon size={23} /></div>
                <div><h3>{title}</h3><b>{subtitle}</b><p>{copy}</p></div>
                <span className="learn-more">Learn More <ArrowRight size={15} /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Values() {
  return (
    <section className="section values">
      <div className="container">
        <Reveal className="section-heading">
          <Eyebrow>WHY CHOOSE US</Eyebrow>
          <h2>A partner you can trust with what matters</h2>
          <p>From your confidential manuscript to your network’s security to your people’s wellbeing — we hold everything to the same standard.</p>
        </Reveal>
        <div className="values-grid">
          {values.map(([title, copy, Icon]) => (
            <Reveal key={title as string}>
              <article className="value-card">
                <div className="value-icon"><Icon size={20} /></div>
                <h3>{title as string}</h3>
                <p>{copy as string}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
function Stories() {
  const [index, setIndex] = useState(0)
  const current = testimonials[index]
  return (
    <section className="section stories">
      <div className="container">
        <Reveal className="section-heading">
          <Eyebrow>CLIENT STORIES</Eyebrow>
          <h2>Trusted by leaders who expect results</h2>
        </Reveal>
        <Reveal>
          <div className="testimonial-wrap">
            <button className="circle-button" onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)} aria-label="Previous testimonial"><ChevronLeft /></button>
            <blockquote>
              <span className="quote-mark">“</span>
              <p>{current.quote}</p>
              <footer><strong>{current.name}</strong><small>{current.role}</small></footer>
            </blockquote>
            <button className="circle-button" onClick={() => setIndex((index + 1) % testimonials.length)} aria-label="Next testimonial"><ChevronRight /></button>
          </div>
          <div className="dots">
            {testimonials.map((_, i) => (
              <button key={i} className={i === index ? 'active' : ''} onClick={() => setIndex(i)} aria-label={`Show testimonial ${i + 1}`} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function FAQ() {
  const [active, setActive] = useState(0)
  return (
    <section className="section pale faq">
      <div className="container faq-container">
        <Reveal className="section-heading">
          <Eyebrow>FAQ</Eyebrow>
          <h2>Frequently asked questions</h2>
          <p>Everything you need to know about working with RIRI Group.</p>
        </Reveal>
        <Reveal className="faq-list">
          {faqs.map(([question, answer], i) => (
            <div className={`faq-item ${active === i ? 'faq-active' : ''}`} key={question}>
              <button onClick={() => setActive(active === i ? -1 : i)} aria-expanded={active === i}>
                <span>{question}</span>
                <span className="faq-toggle">{active === i ? <X size={15} /> : '+'}</span>
              </button>
              {active === i && <p>{answer}</p>}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export default function Page() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible') }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar ctaLabel="Get Started" ctaHref="/contact" />
      <main>
        <Hero /><Stats /><About /><Services /><Values /><Stories /><FAQ />
      </main>
      <SiteFooter />
    </>
  )
}