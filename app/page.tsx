'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Check,
  Headphones,
  Menu,
  PenLine,
  ShieldCheck,
  Sparkles,
  UsersRound,
  X,
  Crown,
  ChartNoAxesCombined,
  MapPin,
  Phone,
  Mail,
  CircleUserRound,
  Star,
} from 'lucide-react'

const services = [
  { title: 'Ghostwriting', subtitle: 'Your Story, Our Words', copy: 'Books, blogs, speeches and executive content written for you.', icon: PenLine, href: '/services/ghostwriting' },
  { title: 'Cyber Security', subtitle: 'Protecting What Matters Most', copy: 'Penetration testing, monitoring and compliance consulting.', icon: ShieldCheck, href: '/services/cyber-security' },
  { title: 'Human Resources', subtitle: 'People-First HR Solutions', copy: 'Recruitment, payroll, employee relations and HR consulting.', icon: UsersRound, href: '/services/human-resources' },
]

const faqs = [
  ['What does Veridian Group actually do?', 'We are a parent company operating three specialized divisions: Veridian Ink, Veridian Shield and Veridian People. You can engage one division or all three through a single accountable partner.'],
  ['How do the three divisions work together?', 'Our specialists collaborate around your goals, giving you one clear point of contact while bringing the right expertise to every part of the challenge.'],
  ['How do I get started with a project?', 'Tell us what you are working toward through our contact form. We will listen, recommend the right division, and outline the next best step.'],
  ['Is my information kept confidential?', 'Yes. Confidentiality is our baseline. We treat your ideas, systems and people with care from the first conversation.'],
  ['Are you a global company?', 'We work with leaders and teams across regions, with a distributed network of trusted specialists ready to support your work.'],
]

function Logo({ footer = false }: { footer?: boolean }) {
  return <Link href="#top" className={`logo ${footer ? 'logo-footer' : ''}`} aria-label="Veridian Group home"><span className="logo-mark">◆</span><span>Veridian{footer ? ' Group' : ''}</span></Link>
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll(); window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <header className={`site-nav ${scrolled ? 'nav-scrolled' : ''}`}>
    <div className="container nav-inner"><Logo />
      <nav className={`nav-links ${open ? 'nav-open' : ''}`} aria-label="Primary navigation">
        <Link href="#top" onClick={() => setOpen(false)}>Home</Link><Link href="#about" onClick={() => setOpen(false)}>About</Link>
        <div className="nav-service-menu"><button type="button" className="nav-services" aria-haspopup="true">Services <ChevronDown size={14} /></button><div className="service-dropdown" role="menu">{services.map(service => <Link key={service.title} href={service.href} role="menuitem" onClick={() => setOpen(false)}>{service.title}<ArrowRight size={14} /></Link>)}</div></div><Link href="#contact" onClick={() => setOpen(false)}>Contact</Link>
        <Link className="button button-small nav-cta" href="#contact" onClick={() => setOpen(false)}>Get Started <ArrowRight size={15} /></Link>
      </nav>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
    </div>
  </header>
}

function Eyebrow({ children }: { children: React.ReactNode }) { return <div className="eyebrow"><Sparkles size={12} /> {children}</div> }
function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) { return <div className={`reveal ${className}`}>{children}</div> }

function Hero() {
  return <section className="hero" id="top"><div className="hero-glow" /><div className="container hero-content">
    <Reveal><Eyebrow>ONE COMPANY · THREE DIVISIONS</Eyebrow></Reveal>
    <Reveal className="reveal-delay-1"><h1>Expertise in <span>&</span><br /><em>one roof.</em></h1></Reveal>
    <Reveal className="reveal-delay-2"><p className="hero-copy">Veridian Group is a trusted parent company connecting business leaders with specialized ghostwriting, cyber security and human resources experts who deliver real, measurable results.</p></Reveal>
    <Reveal className="reveal-delay-3"><div className="hero-actions"><Link className="button" href="#services">Explore Our Services <ArrowRight size={18} /></Link><Link className="button button-light" href="#contact">Talk to Our Team</Link></div></Reveal>
    <Reveal className="reveal-delay-4"><div className="trust-list">{['Trusted expertise', 'Confidential by default', 'End-to-end delivery', 'Global reach'].map(item => <span key={item}><Check size={14} /> {item}</span>)}</div></Reveal>
  </div></section>
}

function Stats() { return <section className="stats"><div className="container stats-grid">{[['12+', 'Years of combined expertise'], ['480+', 'Clients served worldwide'], ['3', 'Specialized divisions'], ['98%', 'Client satisfaction rate']].map(([number, label]) => <Reveal key={label}><div className="stat"><strong>{number}</strong><span>{label}</span></div></Reveal>)}</div></section> }

function About() { return <section className="section about" id="about"><div className="container about-grid"><Reveal className="about-visual"><div className="image-frame"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fullpage_snapshot_readdy_ai_2026-08-28-16-49-53-mwFgPPuoUhovktpox6bXkp8OFmbtze.png" alt="Veridian Group team collaborating in a glass meeting room" /></div><div className="experience-badge"><strong>12+</strong><span>Years of trusted expertise</span></div></Reveal><Reveal className="about-copy"><Eyebrow>ABOUT VERIDIAN GROUP</Eyebrow><h2>A parent company built on specialization</h2><p>We founded Veridian Group on a simple belief: complex challenges deserve focused experts. Rather than diluting talent across one broad agency, we operate three dedicated divisions — each led by senior specialists in its field.</p><div className="division-list">{[['Veridian Ink', 'Turns your ideas and story into published, on-voice written work.', PenLine], ['Veridian Shield', 'Protects your business with proactive, expert-led cyber security.', ShieldCheck], ['Veridian People', 'Builds, supports and strengthens your team and culture.', UsersRound]].map(([title, copy, Icon]) => <Link href="#services" key={title as string} className="division"><span className="division-icon"><Icon size={18} /></span><span><b>{title as string}</b><small>{copy as string}</small></span><ArrowRight size={15} /></Link>)}</div></Reveal></div></section> }

function Services() { return <section className="section pale" id="services"><div className="container"><Reveal className="section-heading"><Eyebrow>OUR DIVISIONS</Eyebrow><h2>Three specialized services.<br />One accountable partner.</h2><p>Choose the division you need — or combine them for a holistic approach to your business.</p></Reveal><div className="services-grid">{services.map(({ title, subtitle, copy, icon: Icon, href }, i) => <Reveal key={title} className={`reveal-delay-${i + 1}`}><Link className="service-card" href={href}><div className="service-icon"><Icon size={23} /></div><div><h3>{title}</h3><b>{subtitle}</b><p>{copy}</p></div><span className="learn-more">Learn More <ArrowRight size={15} /></span></Link></Reveal>)}</div></div></section> }

function Values() { const values = [['Trusted Partnership', 'One accountable partner across your most sensitive needs — writing, security and people.', Headphones], ['Deep Specialization', 'Each division is led by seasoned experts in its field, so you get senior-level craft.', Crown], ['Measurable Results', 'We tie every engagement to outcomes you can see — published work, fewer breaches, stronger retention.', ChartNoAxesCombined], ['White-Glove Support', 'A dedicated point of contact, transparent timelines and proactive communication.', Headphones]]; return <section className="section values"><div className="container"><Reveal className="section-heading"><Eyebrow>WHY CHOOSE US</Eyebrow><h2>A partner you can trust with what matters</h2><p>From your confidential manuscript to your network&apos;s security to your people&apos;s wellbeing — we hold everything to the same standard.</p></Reveal><div className="values-grid">{values.map(([title, copy, Icon]) => <Reveal key={title as string}><article className="value-card"><div className="value-icon"><Icon size={20} /></div><h3>{title as string}</h3><p>{copy as string}</p></article></Reveal>)}</div></div></section> }

function Stories() { const stories = ['Veridian Group handled everything from my book launch to securing our company network. It’s rare to find three specialist teams under one accountable roof.', 'Their team brought clarity to a complex people challenge and gave us a plan we could actually use.', 'Our security posture changed completely. We finally have a partner who explains the why, not just the what.']; const [index, setIndex] = useState(0); return <section className="section stories"><div className="container"><Reveal className="section-heading"><Eyebrow>CLIENT STORIES</Eyebrow><h2>Trusted by leaders who expect results</h2></Reveal><Reveal><div className="testimonial-wrap"><button className="circle-button" onClick={() => setIndex((index - 1 + stories.length) % stories.length)} aria-label="Previous testimonial"><ChevronLeft /></button><blockquote><span className="quote-mark">“</span><p>{stories[index]}</p><footer><strong>{['Sarah Whitmore', 'Marcus Chen', 'Elena Rodriguez'][index]}</strong><small>{['CEO, Whitmore Holdings', 'Founder, Northstar Labs', 'COO, Meridian Co.'][index]}</small></footer></blockquote><button className="circle-button" onClick={() => setIndex((index + 1) % stories.length)} aria-label="Next testimonial"><ChevronRight /></button></div><div className="dots">{stories.map((_, i) => <button key={i} className={i === index ? 'active' : ''} onClick={() => setIndex(i)} aria-label={`Show testimonial ${i + 1}`} />)}</div></Reveal></div></section> }

function FAQ() { const [active, setActive] = useState(0); return <section className="section pale faq"><div className="container faq-container"><Reveal className="section-heading"><Eyebrow>FAQ</Eyebrow><h2>Frequently asked questions</h2><p>Everything you need to know about working with Veridian Group.</p></Reveal><Reveal className="faq-list">{faqs.map(([question, answer], i) => <div className={`faq-item ${active === i ? 'faq-active' : ''}`} key={question}><button onClick={() => setActive(active === i ? -1 : i)} aria-expanded={active === i}><span>{question}</span><span className="faq-toggle">{active === i ? <X size={15} /> : '+'}</span></button>{active === i && <p>{answer}</p>}</div>)}</Reveal></div></section> }

function Footer() { return <footer className="footer" id="contact"><div className="container"><div className="footer-grid"><div><Logo footer /><p>One trusted parent company, three specialized divisions. Ghostwriting, cyber security and human resources expertise delivered under one accountable roof.</p><div className="socials"><Link href="#contact" aria-label="LinkedIn"><CircleUserRound size={15} /></Link><Link href="#contact" aria-label="Instagram"><Star size={15} /></Link><Link href="#contact" aria-label="Phone"><Phone size={15} /></Link></div></div><div><h4>Company</h4><Link href="#top">Home</Link><Link href="#about">About</Link><Link href="#contact">Contact</Link></div><div><h4>Our Divisions</h4>{services.map(s => <Link href={s.href} key={s.title}>{s.title}</Link>)}</div><div><h4>Contact</h4><p className="contact-line"><MapPin size={15} /> 1200 Corporate Plaza, Suite 400<br />Austin, TX 78701</p><p className="contact-line"><Phone size={15} /> +1 (512) 555-0134</p><p className="contact-line"><Mail size={15} /> hello@veridiangroup.com</p></div></div><div className="footer-bottom"><span>© 2026 Veridian Group. All rights reserved.</span><span><Link href="#contact">Privacy Policy</Link><Link href="#contact">Terms of Service</Link></span></div></div></footer> }

export default function Page() { useEffect(() => { const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible') }), { threshold: 0.12 }); document.querySelectorAll('.reveal').forEach(el => observer.observe(el)); return () => observer.disconnect() }, []); return <><Navbar /><main><Hero /><Stats /><About /><Services /><Values /><Stories /><FAQ /></main><Footer /></> }
