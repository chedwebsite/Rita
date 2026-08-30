'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, BriefcaseBusiness, Check, Download, FileCheck2, Heart, Users, X } from 'lucide-react'
import { Navbar } from '@/components/shared/Navbar'
import { Eyebrow } from '@/components/shared/Eyebrow'
import { Reveal } from '@/components/shared/Reveal'
import { SiteFooter } from '@/components/shared/SiteFooter'

const services = [
  { title: 'Recruitment', copy: 'End-to-end hiring that attracts, screens and places the right talent — from job description to offer.', icon: Users },
  { title: 'Payroll Management', copy: 'Accurate, on-time payroll with tax compliance and employee self-service, handled entirely for you.', icon: FileCheck2 },
  { title: 'Employee Relations', copy: 'Fair, documented handling of grievances, performance issues and workplace culture.', icon: Heart },
  { title: 'HR Compliance', copy: 'Stay compliant with labor laws, handbooks and policies that protect your business.', icon: FileCheck2 },
  { title: 'Training & Development', copy: 'Skill-building programs and leadership development that grow your people and your business.', icon: BriefcaseBusiness },
  { title: 'HR Consulting', copy: 'Strategic advice on structure, culture, compensation and organizational design.', icon: Users },
]
const process = [
  ['01', 'Discover', 'We assess your culture, workforce and the people challenges you want to solve.'],
  ['02', 'Design', 'A tailored plan covering the right mix of recruitment, policies, payroll and programs.'],
  ['03', 'Deliver', 'We implement on the ground — hiring, training, payroll and compliance handled for you.'],
  ['04', 'Support', 'Ongoing consultation and optimization as your team grows and evolves.'],
]
const resources = [
  ['TEMPLATE', 'Employee Handbook Template', 'A customizable, compliance-ready handbook your company can adopt today.', 'PDF · 28 pages'],
  ['CHECKLIST', '2026 HR Compliance Checklist', 'A practical, audit-style checklist covering the essentials of HR compliance.', 'PDF · 12 pages'],
  ['GUIDE', 'Interview Question Guide', 'Structured behavioral and role-fit questions to hire more confidently.', 'PDF · 22 pages'],
  ['WHITEPAPER', 'Compensation Benchmark Report', 'Market salary data and structuring guidance to stay competitive and fair.', 'PDF · 40 pages'],
]
const roles = ['Senior HR Business Partner', 'Talent Acquisition Specialist', 'Payroll & Compliance Analyst', 'Learning & Development Consultant']
const faqs = [
  ['Which HR services does your team cover?', 'We cover recruitment, payroll management, employee relations, compliance, training & development and strategic HR consulting — either as a full outsourced function or targeted services.'],
  ['How is HR consulting priced?', 'We scope every engagement around your team size, goals and support model, then provide a clear proposal with no surprise fees.'],
  ['How do the downloadable resources work?', 'Choose a resource and download it instantly. Each guide is designed to be practical, editable and ready to use.'],
  ['What does the consultation process look like?', 'We begin with a discovery call, review your current people operations and recommend a focused path forward.'],
  ['Can you help if we already have an internal HR team?', 'Yes. We regularly support internal teams with specialist capacity, compliance reviews and strategic guidance.'],
  ['Do you handle compliance in specific countries?', 'Our consultants can advise on the jurisdictions where we operate and coordinate local specialists when needed.'],
]

function Hero() {
  return (
    <section className="hr-hero">
      <div className="container hr-hero-content">
        <Reveal><Eyebrow>RIRI PEOPLE · HUMAN RESOURCES</Eyebrow></Reveal>
        <Reveal className="reveal-delay-1"><h1>People-first <span>for</span><br />growing teams</h1></Reveal>
        <Reveal className="reveal-delay-2"><p className="hero-copy">Recruitment, payroll, compliance, training and culture — handled by senior HR consultants who put your people at the heart of everything.</p></Reveal>
        <Reveal className="reveal-delay-3"><div className="hero-actions"><Link className="button" href="/contact">Talk to an HR Consultant <ArrowRight size={18} /></Link><Link className="button button-light" href="#careers">See Open Roles</Link></div></Reveal>
        <Reveal className="reveal-delay-4"><div className="trust-list"><span><Check size={14} /> Compliance-first</span><span><Check size={14} /> Senior consultants</span><span><Check size={14} /> Scalable support</span></div></Reveal>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="section pale">
      <div className="container">
        <Reveal className="section-heading"><Eyebrow>OUR SERVICES</Eyebrow><h2>Everything your people need, handled by experts</h2><p>From hiring your first team member to full HR outsourcing for a scaling workforce.</p></Reveal>
        <div className="hr-services-grid">
          {services.map(({ title, copy, icon: Icon }, i) => (
            <Reveal key={title} className={`reveal-delay-${(i % 3) + 1}`}>
              <article className="hr-service-card">
                <div className="hr-icon"><Icon size={21} /></div>
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

function Process() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="section-heading"><Eyebrow>HOW IT WORKS</Eyebrow><h2>A simple engagement from first call to ongoing support</h2></Reveal>
        <div className="hr-process-grid">
          {process.map(([number, title, copy], i) => (
            <Reveal key={number} className={`reveal-delay-${i + 1}`}>
              <article className="hr-process-card">
                <strong>{number}</strong>
                <h3>{title}</h3>
                <p>{copy}</p>
                {i < 3 && <ArrowRight className="hr-process-arrow" size={18} />}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Resources() {
  return (
    <section id="resources" className="section pale">
      <div className="container">
        <Reveal className="section-heading"><Eyebrow>RESOURCES</Eyebrow><h2>Free HR resources for your business</h2><p>Download practical templates, checklists and guides to put great people practices in place today.</p></Reveal>
        <div className="hr-resources-grid">
          {resources.map(([type, title, copy, meta]) => (
            <Reveal key={title}>
              <article className="hr-resource-card">
                <div className="resource-icon"><Download size={19} /></div>
                <b>{type}</b>
                <h3>{title}</h3>
                <p>{copy}</p>
                <small>{meta}</small>
                <button type="button" className="button button-outline"><Download size={15} /> Download</button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Careers() {
  return (
    <section id="careers" className="section hr-careers">
      <div className="container">
        <Reveal className="section-heading"><Eyebrow>CAREERS</Eyebrow><h2>Build a career that puts people first</h2><p>We&apos;re always looking for driven HR professionals. Here are a few of our current openings.</p></Reveal>
        <div className="roles-grid">
          {roles.map((role, i) => (
            <Reveal key={role}>
              <article className="role-card">
                <div className="role-top">
                  <div className="role-icon"><BriefcaseBusiness size={18} /></div>
                  <b>{(['PEOPLE OPS', 'RECRUITMENT', 'OPERATIONS', 'CONSULTING'] as const)[i]}</b>
                </div>
                <h3>{role}</h3>
                <p>{i === 1 ? 'Remote · Full-time' : i === 2 ? 'Hybrid · Full-time' : 'Remote / Hybrid · Full-time'}</p>
                <div className="role-tags">
                  <span>{i % 2 ? 'Hiring' : 'Recruitment'}</span>
                  <span>{i % 2 ? 'Sourcing' : 'Employee Relations'}</span>
                </div>
                <Link className="button button-light button-small" href="mailto:careers@RIRIgroup.com">Apply Now <ArrowRight size={15} /></Link>
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
    <section className="section hr-faq">
      <div className="container faq-container">
        <Reveal className="section-heading"><Eyebrow>FAQ</Eyebrow><h2>HR questions, answered</h2><p>Services, pricing, downloads and consultations — here&apos;s what to expect.</p></Reveal>
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

export default function HumanResourcesPage() {
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
      <Navbar
        ctaLabel="Talk to an HR Consultant"
        ctaHref="/contact"
        extraLinks={[{ label: 'Careers', href: '#careers' }, { label: 'Resources', href: '#resources' }]}
      />
      <main><Hero /><Services /><Process /><Resources /><Careers /><FAQ /></main>
      <Footer />
    </>
  )
}
