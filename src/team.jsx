import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import './styles.css';
import './join.css';

const teamNavItems = [
  { label: 'About', href: '/#about' },
  { label: 'Team', href: '/team.html' },
  { label: 'Contact', href: '/#contact' },
];

function TeamPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle');

  const handleApplication = async (event) => {
    event.preventDefault();
    setFormStatus('sending');

    const form = event.currentTarget;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEAM_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setFormStatus('configuration-error');
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, form, { publicKey });
      form.reset();
      setFormStatus('success');
    } catch (error) {
      console.error('Unable to send team application:', error);
      setFormStatus('error');
    }
  };

  return (
    <div className="site-shell team-page">
      <header className="site-header">
        <a className="wordmark" href="/" aria-label="JANA Labs home">
          <span className="wordmark-mark">J</span>
          <span>JANA <em>Labs</em></span>
        </a>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          {teamNavItems.map((item) => <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
          <a className="nav-cta" href="/#contact" onClick={() => setMenuOpen(false)}>Start a conversation <ArrowUpRight size={16} /></a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main>
        <section className="team-hero">
          <p className="eyebrow light-eyebrow"><span /> The people behind the possibilities</p>
          <h1>Built by people<br /><span>who care deeply.</span></h1>
          <div className="team-hero-meta"><span>01</span><i /> One clear Goal. A growing team of curious builders.</div>
          <a className="hero-link team-hero-link" href="#join-team">Join the team <ArrowUpRight size={17} /></a>
        </section>
        <section className="founder-section section-pad">
          <div className="founder-image">
            <div className="portrait-placeholder"><span>J</span></div>
            <div className="image-caption"><span>Founder profile</span><span>JANA / 01</span></div>
            <div className="profile-tags"><span>Strategy</span><span>Engineering</span><span>Vision</span></div>
          </div>
          <div className="founder-copy">
            <div className="section-label"><span>01</span><i /> Message from Founder</div>
            <blockquote>“We started JANA Labs with a simple belief: the best technology doesn’t just solve today’s problems — it opens the door to what comes next.”</blockquote>
            <p>I believe great engineering begins with curiosity — asking better questions, challenging assumptions, and having the courage to build something new.</p>
            <p>JANA Labs is our attempt to bring that mindset into everything we do: understand the problem deeply, build with purpose, and keep pushing until an idea becomes something real.</p>
            <p>We’re starting small, but the ambition is much bigger.</p>
            <div className="signature">Sanjay Jayakumar</div>
            <p className="founder-name">Founder and Director, JANA Labs</p>
            <a className="text-link team-back-link" href="/"><ArrowLeft size={17} /> Back to JANA Labs</a>
          </div>
        </section>
        <section className="join-section section-pad" id="join-team">
          <div className="section-label"><span>02</span><i /> Join the team</div>
          <div className="join-heading">
            <h2>Bring your<br /><span>curiosity.</span></h2>
            <p>We’re always interested in meeting thoughtful people who care about the work they put into the world.</p>
          </div>
          <form className="contact-form join-form" onSubmit={handleApplication}>
            <div className="join-form-grid">
              <label>Full name<input required name="from_name" type="text" placeholder="Your name" /></label>
              <label>Email<input required name="reply_to" type="email" placeholder="you@email.com" /></label>
              <label>Area of interest<input required name="role" type="text" placeholder="Engineering, design, strategy..." /></label>
              <label>Portfolio or LinkedIn<input name="portfolio" type="url" placeholder="https://..." /></label>
            </div>
            <label>Tell us about yourself<textarea required name="message" rows="4" placeholder="What are you curious about? What would you love to build?" /></label>
            <button type="submit" className="submit-button" disabled={formStatus === 'sending'}>
              {formStatus === 'sending' ? 'Sending application' : 'Send application'} <ArrowUpRight size={17} />
            </button>
            {formStatus === 'success' && <p className="form-success">Application received — thank you for reaching out.</p>}
            {formStatus === 'error' && <p className="form-error">We couldn’t send your application. Please try again or email us directly.</p>}
            {formStatus === 'configuration-error' && <p className="form-error">The application form is not configured yet. Please add the EmailJS environment variables.</p>}
          </form>
        </section>
      </main>
      <footer><div className="wordmark footer-mark"><span className="wordmark-mark">J</span><span>JANA <em>Labs</em></span></div><span>Building beyond possibilities.</span><span>© 2024 JANA Labs</span></footer>
    </div>
  );
}

export default TeamPage;

import { createRoot } from 'react-dom/client';
createRoot(document.getElementById('root')).render(<TeamPage />);
