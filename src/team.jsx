import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import './styles.css';

const teamNavItems = [
  { label: 'About', href: '/#about' },
  { label: 'Team', href: '/teams' },
  { label: 'Contact', href: '/#contact' },
];

function TeamPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell team-page">
      <header className="site-header">
        <a className="wordmark" href="/" aria-label="JANA Labs home">
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
      </main>
      <footer><div className="wordmark footer-mark"><span className="wordmark-mark">J</span><span>JANA <em>Labs</em></span></div><span>Building beyond possibilities.</span><span>© 2026 JANA Labs</span></footer>
    </div>
  );
}

export default TeamPage;

import { createRoot } from 'react-dom/client';
createRoot(document.getElementById('root')).render(<TeamPage />);
