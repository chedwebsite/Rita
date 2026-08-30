'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Check, LockKeyhole, PenLine, X } from 'lucide-react'
import { Navbar } from '@/components/shared/Navbar'
import { Eyebrow } from '@/components/shared/Eyebrow'
import { Reveal } from '@/components/shared/Reveal'
import { SiteFooter } from '@/components/shared/SiteFooter'

const process = [
  ['01', 'Consultation', 'We learn your story, goals and voice through deep interviews and discovery calls.'],
  ['02', 'Draft', 'Your writer produces a complete first draft, structured and shaped around your message.'],
  ['03', 'Revisions', 'We refine collaboratively — tightening structure, tone and detail until it sounds like you.'],
  ['04', 'Delivery', 'You receive a polished, publication-ready manuscript plus guidance for publishing support.'],
]
const services = [
  ['Books & Memoirs', 'Full-length nonfiction, business books and personal memoirs written from your interviews and notes.'],
  ['Blogs & Articles', 'Consistent, on-voice editorial that builds your authority and keeps your audience engaged week after week.'],
  ['Speeches & Keynotes', 'Persuasive speeches and keynote scripts that land with impact, tailored to your audience and moment.'],
  ['Executive Content', 'Thought leadership, LinkedIn content and bylined articles that make your point of view impossible to miss.'],
  ['Brand Storytelling', 'A clear, compelling narrative for your company, founder story or next chapter of growth.'],
  ['Editing & Proofreading', 'A sharp final pass for structure, clarity, flow and the details that make great writing feel effortless.'],
]
const faqs = [
  ['Is everything kept confidential?', 'Yes. Every project is covered by a strict non-disclosure agreement. Your name, story and manuscript remain entirely yours — we never claim authorship or share your material.'],
  ['What is the typical turnaround time?', 'Most projects begin with a focused discovery phase and move through a clear milestone plan tailored to your scope.'],
  ['How many revisions are included?', 'Every engagement includes collaborative revision rounds, with additional support available for larger projects.'],
  ['Who owns the rights to the finished work?', 'You do. Once the project is complete, all agreed rights transfer to you.'],
  ['How do you capture my authentic voice?', 'We use interviews, examples and a voice guide to make every page sound unmistakably like you.'],
  ['Can you help with publishing after the manuscript?', 'Yes. We can connect you with trusted publishing, editorial and launch support when you are ready.'],
]

function Hero() {
  return (
    <section className="ghost-hero">
      <div className="container ghost-hero-content">
        <Reveal><Eyebrow>RIRI INK · GHOSTWRITING</Eyebrow></Reveal>
        <Reveal className="reveal-delay-1"><h1>Your Story.</h1></Reveal>
        <Reveal className="reveal-delay-2"><p className="hero-copy">Professional ghostwriting for books, blogs, speeches and executive content — written invisibly in your authentic voice, with your name on the cover.</p></Reveal>
        <Reveal className="reveal-delay-3"><div className="hero-actions"><Link className="button" href="#contact">Get a Free Quote <ArrowRight size={18} /></Link><Link className="button button-light" href="#offer">See What We Offer</Link></div></Reveal>
        <Reveal className="reveal-delay-4"><div className="trust-list"><span><LockKeyhole size={14} /> 100% confidential</span><span><PenLine size={14} /> Your authentic voice</span><span><Check size={14} /> Full rights transfer</span></div></Reveal>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="section process-section">
      <div className="container">
        <Reveal className="section-heading"><Eyebrow>HOW IT WORKS</Eyebrow><h2>A clear path from conversation to publication</h2></Reveal>
        <div className="process-grid">
          {process.map(([number, title, copy], i) => (
            <Reveal key={number} className={`reveal-delay-${i + 1}`}>
              <article className="process-card">
                <strong>{number}</strong>
                <h3>{title}</h3>
                <p>{copy}</p>
                {i < 3 && <ArrowRight className="process-arrow" size={20} />}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Offer() {
  return (
    <section id="offer" className="section pale">
      <div className="container">
        <Reveal className="section-heading"><Eyebrow>WHAT WE OFFER</Eyebrow><h2>Writing services that sound unmistakably like you</h2><p>From your first idea to a publication-ready manuscript, we shape the words while you keep the credit.</p></Reveal>
        <div className="offer-grid">
          {services.map(([title, copy], i) => (
            <Reveal key={title} className={`reveal-delay-${(i % 3) + 1}`}>
              <article className="offer-card">
                <div className="service-icon"><PenLine size={22} /></div>
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

function Pricing() {
  return (
    <section className="section pricing">
      <div className="container">
        <Reveal className="section-heading"><Eyebrow>PACKAGES</Eyebrow><h2>Transparent pricing for every project</h2><p>Every engagement starts with a scoped quote. Choose a package or let us tailor one to your goals.</p></Reveal>
        <div className="pricing-grid">
          {([['Essentials', '$2,400', 'Up to 8,000 words'], ['Signature', '$6,900', 'Up to 35,000 words'], ['Full Book', 'Custom', 'Complete book or memoir']] as const).map(([title, price, feature], i) => (
            <Reveal key={title}>
              <article className={`price-card ${i === 1 ? 'featured' : ''}`}>
                {i === 1 && <span className="popular">Most Popular</span>}
                <h3>{title}</h3>
                <small>{i === 2 ? 'tailored quote' : 'per project'}</small>
                <strong>{price}</strong>
                <div className="price-features">
                  <p><Check size={15} /> {feature}</p>
                  <p><Check size={15} /> Voice discovery session</p>
                  <p><Check size={15} /> Dedicated project support</p>
                </div>
                <Link className={`button ${i === 1 ? 'button-green' : 'button-outline'}`} href="#contact">Get Started</Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Work() {
  return (
    <section className="section pale">
      <div className="container">
        <Reveal className="section-heading"><Eyebrow>SELECTED WORK</Eyebrow><h2>Writing that helped clients publish with confidence</h2><p>A taste of the projects our authors have brought to life across industries.</p></Reveal>
        <div className="work-grid">
          {([['BUSINESS BOOK', 'Leading Through Uncertainty'], ['MEMOIR', 'Lessons from the Factory Floor'], ['SPEECH', 'The 2025 Global Keynote'], ['EXECUTIVE BRAND', '90-Day Thought Leadership']] as const).map(([type, title]) => (
            <Reveal key={title}>
              <article className="work-card">
                <div className="work-icon"><PenLine size={18} /></div>
                <b>{type}</b>
                <h3>{title}</h3>
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
    <section className="section ghost-faq">
      <div className="container faq-container">
        <Reveal className="section-heading"><Eyebrow>FAQ</Eyebrow><h2>Ghostwriting questions, answered</h2><p>Confidentiality, ownership, revisions and turnaround — here&apos;s what to expect.</p></Reveal>
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

export default function GhostwritingPage() {
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
      <Navbar ctaLabel="Get a Free Quote" ctaHref="#contact" />
      <main><Hero /><HowItWorks /><Offer /><Pricing /><Work /><FAQ /></main>
      <Footer />
    </>
  )
}
