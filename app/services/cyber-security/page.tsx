'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Check, LockKeyhole, ShieldCheck, X, Bug, Radio, FileCheck2, Globe2, Wifi, GraduationCap } from 'lucide-react'
import { Navbar } from '@/components/shared/Navbar'
import { Eyebrow } from '@/components/shared/Eyebrow'
import { Reveal } from '@/components/shared/Reveal'
import { SiteFooter } from '@/components/shared/SiteFooter'

const process = [
  ['01', 'Assessment', 'We map your environment, assets and current posture to understand your risk landscape.'],
  ['02', 'Strategy', 'A prioritized roadmap of controls and fixes tailored to your industry, budget and goals.'],
  ['03', 'Implementation', 'We deploy defenses, harden systems and integrate monitoring with minimal disruption.'],
  ['04', 'Monitoring', 'Continuous vigilance, reporting and improvement keep you protected as threats evolve.'],
]
const services = [
  ['Penetration Testing', 'Simulated attacks against your systems and apps to uncover vulnerabilities before criminals do.', Bug],
  ['Threat Monitoring', '24/7 detection and response across your network, endpoints and cloud to catch threats in real time.', Radio],
  ['Compliance Consulting', 'Achieve and maintain standards like ISO 27001, SOC 2 and GDPR with clear, audit-ready guidance.', FileCheck2],
  ['Incident Response', 'Rapid containment and recovery when a breach happens — minimize damage and downtime.', Globe2],
  ['Network Security', 'Firewalls, segmentation and secure architecture designed to protect your infrastructure.', Wifi],
  ['Employee Training', 'Engaging security awareness programs that turn your team into your strongest first line of defense.', GraduationCap],
]
const faqs = [
  ['How quickly do you respond to a security incident?', 'Our median incident response time is 15 minutes for active engagements. Clients on managed monitoring plans get prioritized escalation and direct access to our response team.'],
  ['Which industries do you serve?', 'We support technology, finance, healthcare, professional services and growing businesses with security needs at every stage.'],
  ['What compliance standards can you help with?', 'Our team supports ISO 27001, SOC 2, GDPR, PCI DSS, NIST and HIPAA readiness programs.'],
  ['How is your pricing structured?', 'We scope every engagement around your environment, risk profile and goals, then provide a clear fixed or managed-service proposal.'],
  ['Do I need a security team already in place?', 'No. We can complement an existing team or act as your dedicated security partner from assessment through monitoring.'],
  ['Will security work disrupt my operations?', 'Our approach is designed around your business rhythm, with staged implementation and clear communication throughout.'],
]

function Hero() {
  return (
    <section className="security-hero">
      <div className="security-orbit security-orbit-one" />
      <div className="security-orbit security-orbit-two" />
      <div className="container security-hero-content">
        <div className="security-copy">
          <Reveal><Eyebrow><ShieldCheck size={12} /> RIRI SHIELD · CYBER SECURITY</Eyebrow></Reveal>
          <Reveal className="reveal-delay-1"><h1>Protecting what <span>matters</span></h1></Reveal>
          <Reveal className="reveal-delay-2"><p className="hero-copy">Proactive security that finds and fixes vulnerabilities before criminals do — so your business stays up, compliant and out of the headlines.</p></Reveal>
          <Reveal className="reveal-delay-3"><div className="hero-actions"><Link className="button" href="/contact">Request a Security Audit <ArrowRight size={18} /></Link><Link className="button button-light" href="#services">Explore Services</Link></div></Reveal>
          <Reveal className="reveal-delay-4"><div className="trust-list"><span><Check size={14} /> 24/7 monitoring</span><span><Check size={14} /> 15-min response</span><span><Check size={14} /> Compliance-ready</span></div></Reveal>
        </div>
        <Reveal className="shield-visual">
          <div className="shield-ring"><ShieldCheck size={76} strokeWidth={1.5} /></div>
          <div className="security-node node-lock"><LockKeyhole size={15} /></div>
          <div className="security-node node-eye"><Radio size={15} /></div>
        </Reveal>
      </div>
    </section>
  )
}

function Approach() {
  return (
    <section className="section approach">
      <div className="container">
        <Reveal className="section-heading"><Eyebrow>OUR APPROACH</Eyebrow><h2>A proven process from risk to resilience</h2></Reveal>
        <div className="security-process-grid">
          {process.map(([number, title, copy], i) => (
            <Reveal key={number} className={`reveal-delay-${i + 1}`}>
              <article className="security-process-card">
                <strong>{number}</strong>
                <h3>{title}</h3>
                <p>{copy}</p>
                {i < 3 && <ArrowRight className="security-process-arrow" size={18} />}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="section pale" id="services">
      <div className="container">
        <Reveal className="section-heading"><Eyebrow>OUR SERVICES</Eyebrow><h2>Full-spectrum security, tailored to your risk</h2><p>From one-off audits to fully managed protection, we cover the entire lifecycle of your security.</p></Reveal>
        <div className="security-services-grid">
          {services.map(([title, copy, Icon], i) => (
            <Reveal key={title as string} className={`reveal-delay-${(i % 3) + 1}`}>
              <article className="security-service-card">
                <div className="security-icon"><Icon size={21} /></div>
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

function Compliance() {
  return (
    <section className="section compliance">
      <div className="container">
        <Reveal className="section-heading"><Eyebrow>TRUST &amp; COMPLIANCE</Eyebrow><h2>Aligned with the standards your auditors expect</h2><p>We help you achieve and maintain the frameworks that build confidence with customers and regulators.</p></Reveal>
        <Reveal><div className="standards">{['ISO 27001', 'SOC 2', 'GDPR', 'PCI DSS', 'NIST', 'HIPAA'].map(s => <span key={s}>{s}</span>)}</div></Reveal>
        <div className="security-story-grid">
          {([['The Challenge', 'A fintech client faced a rising wave of phishing and a looming SOC 2 audit with no in-house security team.', '!', 'challenge'], ['Our Solution', 'We ran a full penetration test, deployed 24/7 monitoring and guided them to SOC 2 certification in 5 months.', '⚒', 'solution'], ['The Result', 'Zero successful breaches since onboarding, audit passed first time, and a 40% reduction in security tool spend.', '↗', 'result']] as const).map(([title, copy, icon, kind]) => (
            <Reveal key={title}>
              <article className={`security-story-card ${kind}`}>
                <div className="security-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const [active, setActive] = useState(0)
  return (
    <section className="section security-faq">
      <div className="container faq-container">
        <Reveal className="section-heading"><Eyebrow>FAQ</Eyebrow><h2>Security questions, answered</h2><p>Response times, industries, compliance and pricing — here&apos;s what to expect.</p></Reveal>
        <Reveal className="faq-list">
          {faqs.map(([q, a], i) => (
            <div className={`faq-item ${active === i ? 'faq-active' : ''}`} key={q}>
              <button onClick={() => setActive(active === i ? -1 : i)} aria-expanded={active === i}>
                <span>{q}</span>
                <span className="faq-toggle">{active === i ? <X size={15} /> : '+'}</span>
              </button>
              {active === i && <p>{a}</p>}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

function Footer() { return <SiteFooter /> }

export default function CyberSecurityPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return (
    <>
      <Navbar ctaLabel="Request a Security Audit" ctaHref="/contact" />
      <main><Hero /><Approach /><Services /><Compliance /><FAQ /></main>
      <Footer />
    </>
  )
}
