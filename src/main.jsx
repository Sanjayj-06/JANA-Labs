import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Check, Mail, Menu, MoveUpRight, X } from 'lucide-react';
import './styles.css';
import janaLogo from '../jana-logo/jana.png';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Team', href: '/team.html' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="JANA Labs home">
          
          <span>JANA <em>Labs</em></span>
        </a>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
            Start a conversation <ArrowUpRight size={16} />
          </a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-grid" />
          <div className="hero-content">
            <p className="eyebrow light-eyebrow"><span /> Technology & Product Engineering</p>
            <div className="logo-frame">
              <img src={janaLogo} alt="JANA Labs" />
            </div>
            <h1>Building the <span>next Gen</span> of<br /> Engineering Solutions</h1>
            <p className="hero-copy">We turn complex challenges into clear, capable products that move people and businesses forward.</p>
            <a className="hero-link" href="#about">Discover our approach <MoveUpRight size={17} /></a>
          </div>
          
        </section>
        
        <section className="intro-section section-pad" id="about">
          <div className="section-label"><span>01</span><i /> About JANA Labs</div>
          <div className="intro-grid">
            <h2>Good engineering is<br /><span>quietly transformative.</span></h2>
            <div className="intro-copy">
              <p>JANA Labs is an independent technology and engineering studio built around a simple belief: the right technology can turn difficult problems into meaningful possibilities.</p>
              <p>We work from the problem first — understanding what needs to change, exploring what could work, and engineering solutions that are practical today and ready to evolve tomorrow.</p>
              <p>From early ideas and prototypes to production-ready systems, we combine engineering, design, and emerging technology to build things that matter.</p>
              <a className="text-link" href="#contact">Let’s build something meaningful <ArrowUpRight size={17} /></a>
            </div>
          </div>
          <div className="principles">
            {['Clarity over complexity', 'Curiosity in every detail', 'Progress with purpose'].map((principle, index) => (
              <div className="principle" key={principle}>
                <span>0{index + 1}</span><p>{principle}</p><Check size={17} />
              </div>
            ))}
          </div>
        </section>

        <section className="build-section section-pad" id="how-we-build">
          <div className="section-label"><span>02</span><i /> How We Build</div>
          <div className="build-heading">
            <h2>From the first question<br /><span>to what comes next.</span></h2>
            <p>Our process keeps every idea grounded in purpose, tested through curiosity, and built to keep moving.</p>
          </div>
          <div className="process-grid">
            {[
              ['Understand', 'We start with the problem, not the technology.'],
              ['Explore', 'We challenge assumptions and identify the simplest path forward.'],
              ['Engineer', 'We turn validated ideas into reliable, scalable systems.'],
              ['Evolve', 'We design for change, because good products should not stop at version one.'],
            ].map(([title, description], index) => (
              <div className="process-step" key={title}>
                <div className="process-number">0{index + 1}<span>{index < 3 ? '→' : '↗'}</span></div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
          <div className="philosophy">
            <span className="philosophy-mark">“</span>
            <p>We don't believe every problem needs more software.<br /><strong>We believe the right problem deserves the right technology.</strong></p>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="contact-header">
            <div className="section-label light-label"><span>03</span><i /> Contact</div>
            <h2>Have a bold idea?<br /><span>Let’s make it move.</span></h2>
          </div>
          <div className="contact-layout">
            <div className="contact-aside">
              <p>Tell us a little about what you’re building. We’ll get back to you with some thoughtful next steps.</p>
              <a className="email-link" href="mailto:director.janalabs@gmail.com"><Mail size={17} /> director.janalabs@gmail.com</a>
              <div className="availability"><span /> Currently accepting select projects</div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="join-invite-inline">
                <div className="section-label light-label"><span>04</span><i /> Join the team</div>
                <h3>Want to build what <span>comes next?</span></h3>
                <a className="email-link" href="mailto:director.janalabs@gmail.com"><Mail size={17} /> director.janalabs@gmail.com</a>
              </div>
              <label>Name<input required type="text" placeholder="Your name" /></label>
              <label>Email<input required type="email" placeholder="you@company.com" /></label>
              <label>How can we help?<textarea required rows="3" placeholder="A few words about your project..." /></label>
              <button type="submit" className="submit-button">{submitted ? 'Message received' : 'Send enquiry'} <ArrowUpRight size={17} /></button>
              {submitted && <p className="form-success">Thanks — we’ll be in touch soon.</p>}
            </form>
          </div>
        </section>
      </main>
      <footer><div className="wordmark footer-mark"><span className="wordmark-mark">J</span><span>JANA <em>Labs</em></span></div><span>Building beyond possibilities.</span><span>© 2026 JANA Labs</span></footer>
    </div>
  );
}

export default App;

createRoot(document.getElementById('root')).render(<App />);
