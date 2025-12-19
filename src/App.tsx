import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp,
  ShieldCheck,
  Zap,
  Wine,
  AlertCircle,
  Clock,
  MapPin,
  ChevronRight,
  Eye,
  Receipt,
  Type,
  Sparkles,
  ShieldAlert
} from 'lucide-react';

const TEAM = [
  {
    name: 'Aaron Bettany',
    role: 'Founder, CEO & Chief Vision Hallucinatory Officer',
    tagline: '“We don’t make products. We make presence. And occasionally, we make it to the airport on time.”',
    image: '/team/aaron.png',
    bullets: [
      'Founded the company after a 14-hour layover in Amsterdam and a "profound interaction" with a stroopwafel.',
      'Can explain the company mission in under 10 minutes, but chooses not to for strategic reasons.',
      'Currently "pivoting" his LinkedIn headline for the 4th time this week.',
      'Arrived tonight straight from a call with Singapore (actually just a wrong number from a takeaway in Slough).'
    ]
  },
  {
    name: 'Lisa Bettany',
    role: 'Chief Operations & High-Velocity Damage Control (COO/DC)',
    tagline: '“I spend 40% of my day saying ‘No’ and the other 60% explaining why ‘Maybe’ also means ‘No’.”',
    image: '/team/lisa.png',
    bullets: [
      'The only human being capable of translating Aaron’s "Visions" into actual tasks.',
      'Enforces the "No Slack Messages After Wine" policy with a terrifying efficiency.',
      'Once successfully expensed a "stress-relief holiday" as a market research trip to the fridge.',
      'Knows where the bodies are buried (mostly old CRM login details).'
    ]
  },
  {
    name: 'Neil Taylor',
    role: 'Head of Global Strategy & Professional Lunch-Haver',
    tagline: '“The deal isn’t closed until the dessert menu arrives.”',
    image: '/team/neil.png',
    bullets: [
      'Officially "Between Zurich and Oslo," which is corporate code for "The Pub."',
      'Speaks exclusively in triple-letter acronyms that he invents on the fly (e.g., "S.Y.N. - Synergy Yield Now").',
      'Has "nearly closed" the same deal since 2014. It’s a very long deal.',
      'Claims he’s "aligned," but his calendar suggests he’s actually just "asleep."'
    ]
  },
  {
    name: 'Angelique Taylor',
    role: 'Director of Culture, Wellness & Cosmic Energy Architect',
    tagline: '“You can’t hit Q4 targets if your chakras are misaligned with the WiFi.”',
    image: '/team/angelique.png',
    bullets: [
      'Once cancelled a Board Meeting because the office plants looked "judgmental."',
      'Promotes office mindfulness by ensuring nobody is ever fully conscious during Monday stand-ups.',
      'Designed the Christmas party vibe using a mood board made entirely of glitter and NDAs.',
      'Currently lobbying for a company retreat to a place that "doesn\'t believe in time."'
    ]
  },
  {
    name: 'Hayley Nicholls',
    role: 'Head of Client Experience & Professional Fire-Extinguisher',
    tagline: '“I don’t write emails, I write polite warnings.”',
    image: '/team/hayley.png',
    bullets: [
      'Can deliver a "Per My Last Email" that feels like a physical slap.',
      'The only person who can read the Color-Coded Spreadsheet of Doom (CCSD).',
      'Categorizes clients into "Difficult," "Impossible," and "The Reason I Drink."',
      'Regularly performs exorcisms on the company CRM.'
    ]
  },
  {
    name: 'Pete Nicholls',
    role: 'Chief Technology Officer & Keeper of the Legacy Spaghetti',
    tagline: '“It’s not a bug, it’s a bespoke feature that requires high-level intuition.”',
    image: '/team/pete.png',
    bullets: [
      'Maintains a system that is 40% code, 60% hope, and 100% "Pete only."',
      'Responds to all technical errors with "That’s a user-perspective error, not a system failure."',
      'Frequently disappears into "The Server Room" (The local cafe) when things break.',
      'Claims the current CRM is "blockchain-adjacent" because nobody can find anything on it.'
    ]
  },
  {
    name: 'James Leech',
    role: 'Senior Partnerships & Artisanal Handshake Specialist',
    tagline: '“I don’t need a business card. I have an aura.”',
    image: '/team/james.png',
    bullets: [
      'Responsible for 50% of company growth and 90% of the bar tab.',
      'Has "a guy" for everything—including a guy who specializes in finding other guys.',
      'Believes that a LinkedIn connection is legally binding if you’re both holding a pint.',
      'Considers "networking" a full-body contact sport.'
    ]
  },
  {
    name: 'Sam Leech',
    role: 'Junior Partnerships & Chief Relevance Liaison',
    tagline: '“Our brand sentiment is up, but our sanity is at an all-time low.”',
    image: '/team/sam.png',
    bullets: [
      'James’ protégé—currently learning how to expense a "strategic breakfast."',
      'Ensures the company stays "trending" by posting AI-generated quotes from Aaron.',
      'Measured "Engagement" once and accidentally found out nobody was actually reading the posts.',
      'In charge of convincing Gen Z that Slough is "The Silicon Valley of the Thames Valley."'
    ]
  },
  {
    name: 'Katrina Dawson',
    role: 'Chief Financial Officer (CFO) & Dream-Crusher General',
    tagline: '“Numbers don’t lie, but your expense reports certainly do.”',
    image: '/team/katrina.jpg',
    bullets: [
      'Has successfully throttled Aaron’s "Bold Ideas" budget to $0.00.',
      'The only person who knows where the money actually goes (clue: it’s the long lunches).',
      'Drinks wine like it’s a performance-enhancing drug for bookkeeping.',
      'Can calculate the ROI of a Christmas party in her head while crying.'
    ]
  },
  {
    name: 'Dan Dawson',
    role: 'Head of Compliance, Risk & Professional Skeptic',
    tagline: '“I’m not saying we’re breaking the law, but I am saying we should update the NDAs.”',
    image: '/team/dan.png',
    bullets: [
      'Arrives at every party with a sheaf of papers and a "Just so you know..."',
      'Enforces GDPR (Generally Disregarding Pete’s Reports).',
      'The human embodiment of a "Stop" sign, but with better tailoring.',
      'Maintains the "Black List" of things Aaron isn’t allowed to say on LinkedIn.'
    ]
  }
];

const SERVICES = [
  {
    title: 'Strategic Procrastination',
    desc: 'Aligning timelines by doing nothing until the last possible second, then calling it a "Sprint".',
    icon: <Clock size={40} color="var(--corporate-gold)" />
  },
  {
    title: 'Synergy Hallucination',
    desc: 'Visualizing growth patterns that defy the laws of economics using our proprietary 3D charts.',
    icon: <Eye size={40} color="var(--corporate-gold)" />
  },
  {
    title: 'Expense Optimization',
    desc: 'Turning a round of triple-gins into a "Multi-Stakeholder Global Engagement Forum".',
    icon: <Receipt size={40} color="var(--corporate-gold)" />
  },
  {
    title: 'Acronym Manufacturing',
    desc: 'Increasing corporate density by removing vowels from every important project name.',
    icon: <Type size={40} color="var(--corporate-gold)" />
  },
  {
    title: 'Vibe Architecture',
    desc: 'Stabilizing office morale with high-frequency glitter, scented candles, and mandatory fun.',
    icon: <Sparkles size={40} color="var(--corporate-gold)" />
  },
  {
    title: 'Crisis Camouflage',
    desc: 'Polishing fire-damaged projects until they look like "limited-edition disruptive opportunities".',
    icon: <ShieldAlert size={40} color="var(--corporate-gold)" />
  }
];


const STRATEGY_CONTENT = {
  header: "A. Bettany Global Inc. is performatively successful.",
  intro: "On paper (and in conversation), the company presents as a confident, internationally active consultancy with a full executive team, global reach, and a vocabulary rich in strategy, alignment, and pivots. It has survived for over a decade, which already places it ahead of many genuinely ambitious consultancies—suggesting a baseline level of operational competence and financial viability.",
  indicators: [
    { title: "Longevity", text: "Founded in 2014 and still operating, implying it makes enough money to continue existing." },
    { title: "Global theatre", text: "Regular international references, travel-heavy roles, and “calls with Singapore” create the appearance of scale and relevance." },
    { title: "Functional core", text: "The COO and CFO clearly keep the business solvent, compliant, and minimally chaotic—arguably the most important success metric." },
    { title: "Client retention (of sorts)", text: "While deals are “nearly closed” and markets occasionally “exited,” there are enough clients to justify crisis emails, spreadsheets, and a disliked CRM." },
    { title: "Cultural confidence", text: "Titles, roles, and internal language strongly suggest a company that believes in itself, which is half of consulting." }
  ],
  limitations: [
    "Growth appears more discussed than realised.",
    "Strategy is abundant; activation is pending.",
    "Operations rely heavily on a few key adults in the room.",
    "Much of the success is reputational, relational, or vibe-based rather than measurable."
  ],
  verdict: "A. Bettany Global Inc. is successful in the way many consultancies are: financially just stable enough, structurally over-described, strategically in motion, and existentially one rebrand away from greatness. It may not dominate markets, but it absolutely dominates meetings about dominating markets—and crucially, it’s still here."
};

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home', 'strategy', 'vibes'
  const [pivoted, setPivoted] = useState(false);
  const [synergy, setSynergy] = useState(85);
  const [retrograde] = useState(true);
  const [chaosMode, setChaosMode] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSynergy(prev => {
        const next = Math.min(110, Math.max(0, prev + (Math.random() * 20 - 10)));
        if (next > 100) setChaosMode(true);
        return next;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (chaosMode) {
      const timer = setTimeout(() => {
        setChaosMode(false);
        setSynergy(85);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [chaosMode]);

  return (
    <div className={`pivot-animation ${pivoted ? 'pivoted' : ''} ${chaosMode ? 'shake' : ''}`}>
      {/* Chaos Marquee */}
      <div className="marquee" style={{ background: 'var(--corporate-navy)', borderBottom: '1px solid var(--corporate-gold)' }}>
        <p>
          URGENT: SYNERGY OVERLOAD DETECTED • NEXT PIVOT SCHEDULED FOR 10:45 AM • BYOD (BRING YOUR OWN DATA) • COFFEE MACHINE IS CURRENTLY RUNNING ON LEGACY CODE • SLOUGH OFFICE HAS DECLARED INDEPENDENCE • AARON IS CURRENTLY IN THE AIRLIFT TO THE MOON (OR ZURICH) • NO SLACK MESSAGES AFTER WINE IS NOW ENFORCED BY AI LAW • GDPR COMPLIANCE IS AT 4% • PLEASE DON'T TOUCH THE SERVER (IT'S FRAGILE)
        </p>
      </div>

      {/* Navigation */}
      <nav style={{ padding: '0.8rem 2rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, background: chaosMode ? 'rgba(197, 160, 89, 0.2)' : 'rgba(10, 25, 47, 0.8)', backdropFilter: 'blur(10px)', zIndex: 100 }}>
        <div
          onClick={() => setCurrentView('home')}
          style={{ display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer' }}
        >
          <img src="/logo.jpg" alt="A. Bettany Global" className={`company-logo ${chaosMode ? 'flicker' : ''}`} />
          <span className="synergy-text" style={{ fontSize: '1.2rem' }}>A. Bettany Global {chaosMode ? '!!!' : ''}</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 600, alignItems: 'center' }}>
          <span
            onClick={() => setCurrentView('strategy')}
            style={{ cursor: 'pointer', color: currentView === 'strategy' ? 'var(--corporate-gold)' : 'inherit' }}
            className={chaosMode ? 'flicker' : ''}
          >
            STRATEGY
          </span>
          <span
            onClick={() => setCurrentView('vibes')}
            style={{ cursor: 'pointer', color: currentView === 'vibes' ? 'var(--corporate-gold)' : 'inherit' }}
            className={chaosMode ? 'shake' : ''}
          >
            VIBES
          </span>
          <button
            onClick={() => setPivoted(!pivoted)}
            className={chaosMode ? 'urgent-blink' : ''}
            style={{ padding: '0.5rem 1rem', fontSize: '0.7rem', background: chaosMode ? '#ff4d4d' : 'var(--corporate-gold)' }}
          >
            {pivoted ? 'UN-PIVOT' : 'PIVOT NOW'}
          </button>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {currentView === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Hero Section */}
            <header className="hero-gradient" style={{ textAlign: 'center', padding: '10rem 2rem', position: 'relative' }}>
              {chaosMode && (
                <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', fontSize: '10rem', opacity: 0.1, pointerEvents: 'none', color: 'var(--corporate-gold)' }}>
                  CHAOS
                </div>
              )}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className={`badge ${chaosMode ? 'shake' : ''}`}>
                  {chaosMode ? 'LEVEL 11 SYNERGY REACHED' : 'GLOBAL STRATEGIC VIBE LEADER 2024'}
                </span>
                <h1 className={chaosMode ? 'flicker' : ''}>
                  {chaosMode ? 'SYNERGY OVERLOAD' : 'Innovating Synergy'}<br />
                  {chaosMode ? 'MAXIMUM VIBES' : 'Across Borders'}
                </h1>
                <p style={{ maxWidth: '600px', margin: '2rem auto', fontSize: '1.5rem', color: 'var(--corporate-light)' }}>
                  (Mostly After {chaosMode ? 'Wine' : '6pm'})
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '3rem' }}>
                  <a href="tel:+447708803363" style={{ textDecoration: 'none' }}>
                    <button style={{ background: 'white', color: 'var(--corporate-navy)', border: 'none', padding: '1.2rem 2.5rem', fontSize: '1.1rem' }}>
                      Contact Us
                    </button>
                  </a>
                </div>
              </motion.div>
            </header>

            {/* Aaron Intelligence Section */}
            <section style={{ padding: '4rem 2rem', background: 'rgba(197, 160, 89, 0.05)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
              <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <span className="badge" style={{ marginBottom: '1.5rem' }}>BEYOND THE ALGORITHM</span>
                <h2 className="synergy-text" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>The Real AI: Aaron Intelligence</h2>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--corporate-light)', fontStyle: 'italic' }}>
                  "Traditional AI relies on Large Language Models. **Aaron Intelligence (AI)** relies on Large Lunch Menus.
                  While Silicon Valley chases predictable code, we thrive on unpredictable pivots,
                  3am epiphanies, and a complete disregard for the laws of traditional economics.
                  Don't ask for a prompt; ask for a vibe."
                </p>
                <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem', opacity: 0.6 }}>
                  <Zap size={16} color="var(--corporate-gold)" />
                  <span style={{ fontSize: '0.8rem', letterSpacing: '2px', fontWeight: 800 }}>ZERO CODE • 100% VIBE • ACCENTUATED INTELLIGENCE</span>
                </div>
              </div>
            </section>

            {/* Dashboard Section */}
            <section>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                <div className={`glass-card ${synergy > 100 ? 'shake' : ''}`} style={{ borderColor: synergy > 100 ? '#ff4d4d' : 'var(--glass-border)' }}>
                  <Zap className={synergy > 100 ? 'flicker' : ''} color={synergy > 100 ? '#ff4d4d' : "var(--corporate-gold)"} style={{ marginBottom: '1rem' }} />
                  <h3>{synergy > 100 ? 'SYSTEM OVERHEAT' : 'Real-time Synergy'}</h3>
                  <div style={{ fontSize: '3rem', fontWeight: 800, color: synergy > 100 ? '#ff4d4d' : 'inherit' }}>{synergy.toFixed(1)}%</div>
                  <p>{synergy > 100 ? 'CRITICAL: REDUCE LUNCH LENGTH' : 'Target: 110% (Post-Q1)'}</p>
                </div>
                <div className="glass-card">
                  <AlertCircle color={retrograde ? "#ff4d4d" : "var(--corporate-gold)"} style={{ marginBottom: '1rem' }} />
                  <h3>Mercury Status</h3>
                  <div style={{ fontSize: '2rem', fontWeight: 800 }}>{retrograde ? 'IN RETROGRADE' : 'ALIGNING'}</div>
                  <p className={retrograde ? 'urgent-blink' : ''} style={{ color: retrograde ? '#ff4d4d' : 'inherit' }}>
                    {retrograde ? 'WARNING: Delay all non-wine communications' : 'Safe to send invoices'}
                  </p>
                </div>
                <div className="glass-card">
                  <MapPin color="var(--corporate-gold)" style={{ marginBottom: '1rem' }} />
                  <h3>Global Footprint</h3>
                  <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>LONDON • SLOUGH • {chaosMode ? 'MARS' : 'ZURICH'}</div>
                  <p>+ Wherever Aaron's Wi-Fi connects</p>
                </div>
              </div>
            </section>

            {/* Team Section */}
            <section id="team" style={{ padding: '6rem 1.5rem' }}>
              <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }} className={chaosMode ? 'flicker' : ''}>
                {chaosMode ? 'THE OVERLORDS' : 'The Executive Board'}
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                {TEAM.map((member, i) => (
                  <motion.div
                    key={i}
                    className={`glass-card ${chaosMode && i % 2 === 0 ? 'shake' : ''}`}
                    whileHover={{ scale: 1.02 }}
                    style={{ padding: 0, overflow: 'hidden' }}
                  >
                    <div style={{ height: '300px', background: '#1c2e4a', position: 'relative' }}>
                      <img
                        src={member.image}
                        alt={member.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: chaosMode ? 0.4 : 0.8, filter: chaosMode ? 'grayscale(1) contrast(2)' : 'none' }}
                      />
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem', background: 'linear-gradient(to top, rgba(10, 25, 47, 1), transparent)' }}>
                        <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{chaosMode ? member.name.toUpperCase() : member.name}</h3>
                        <p style={{ color: chaosMode ? '#ff4d4d' : 'var(--corporate-gold)', fontSize: '0.85rem', fontWeight: 700 }}>{member.role}</p>
                      </div>
                    </div>
                    <div style={{ padding: '1.5rem' }}>
                      <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--corporate-light)', fontSize: '0.95rem' }}>{member.tagline}</p>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {member.bullets.map((b, j) => (
                          <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
                            <ChevronRight size={14} color="var(--corporate-gold)" />
                            {chaosMode ? b.replace(/synergy/gi, 'CHAOS').replace(/client/gi, 'VICTIM') : b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Services Section */}
            <section style={{ background: 'var(--corporate-blue)', maxWidth: '100%', margin: 0, padding: '6rem 1.5rem' }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                <h2 className="synergy-text" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Global Service Ecosystem</h2>
                <p style={{ marginBottom: '3rem', fontSize: '1.1rem' }}>Leveraging cross-functional disruption to maintain the status quo.</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                  {SERVICES.map((service, i) => (
                    <motion.div
                      key={i}
                      className="glass-card"
                      whileHover={{ y: -10, borderColor: 'var(--corporate-gold)' }}
                      style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem' }}
                    >
                      <div style={{ background: 'rgba(197, 160, 89, 0.1)', width: 'fit-content', padding: '1rem', borderRadius: '12px', marginBottom: '0.5rem' }}>
                        {service.icon}
                      </div>
                      <h3 style={{ margin: 0, fontSize: '1.3rem' }}>{chaosMode ? service.title.toUpperCase() : service.title}</h3>
                      <p style={{ color: 'var(--corporate-gray)', fontSize: '0.9rem' }}>
                        {chaosMode ? service.desc.replace(/economics/gi, 'FIRE').replace(/fun/gi, 'TERROR') : service.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer style={{ padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid var(--glass-border)' }}>
              <img src="/logo.jpg" alt="A. Bettany Global" className={`company-logo footer-logo ${chaosMode ? 'shake' : ''}`} style={{ margin: '0 auto 2rem', display: 'block' }} />
              <p style={{ fontSize: '0.9rem' }}>(c) 2024 A. Bettany Global Inc. All Rights Reserved. (Probably)</p>
              <p style={{ fontSize: '0.75rem', marginTop: '1rem' }}>
                Offices in: London • Remote • Behind Aaron at the airport • That one WeWork in Slough
              </p>
              <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                <ShieldCheck size={20} />
                <Wine size={20} className={chaosMode ? 'flicker' : ''} />
                <TrendingUp size={20} />
              </div>
            </footer>

          </motion.div>
        )}

        {currentView === 'strategy' && (
          <motion.div
            key="strategy"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            style={{ padding: '6rem 2rem', maxWidth: '800px', margin: '0 auto' }}
          >
            <h1 className="synergy-text" style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>{STRATEGY_CONTENT.header}</h1>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.8', marginBottom: '4rem', color: 'var(--corporate-light)' }}>
              {STRATEGY_CONTENT.intro}
            </p>

            <h2 style={{ color: 'var(--corporate-gold)', marginBottom: '2rem' }}>Key indicators of success:</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '4rem' }}>
              {STRATEGY_CONTENT.indicators.map((item, i) => (
                <div key={i} className="glass-card" style={{ padding: '1.5rem' }}>
                  <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--corporate-gold)' }}>{item.title}</h3>
                  <p style={{ margin: '0.5rem 0 0', fontSize: '1rem' }}>{item.text}</p>
                </div>
              ))}
            </div>

            <h2 style={{ color: 'var(--corporate-gold)', marginBottom: '2rem' }}>Limitations to success:</h2>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '4rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {STRATEGY_CONTENT.limitations.map((limit, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <TrendingUp size={18} color="var(--corporate-gold)" />
                  <span style={{ fontSize: '1.1rem' }}>{limit}</span>
                </li>
              ))}
            </ul>

            <div className="glass-card" style={{ background: 'rgba(197, 160, 89, 0.05)', borderStyle: 'dotted', borderColor: 'var(--corporate-gold)' }}>
              <h2 style={{ color: 'var(--corporate-gold)', marginBottom: '1rem' }}>Overall verdict:</h2>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.7', color: 'var(--corporate-light)', fontStyle: 'italic' }}>
                {STRATEGY_CONTENT.verdict}
              </p>
            </div>

            <button
              onClick={() => setCurrentView('home')}
              style={{ marginTop: '4rem' }}
            >
              Return to Base Operations
            </button>
          </motion.div>
        )}

        {currentView === 'vibes' && (
          <motion.div
            key="vibes"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            style={{ padding: '6rem 2rem', textAlign: 'center' }}
          >
            <h1 className="synergy-text" style={{ marginBottom: '3rem' }}>THE VIBE ARCHITECTURE</h1>
            <div className="glass-card" style={{ display: 'inline-block', padding: '1rem', background: 'white' }}>
              <img
                src="/vibes.png"
                alt="The Vibe"
                style={{ maxWidth: '100%', maxHeight: '70vh', borderRadius: '4px', display: 'block' }}
              />
            </div>
            <div style={{ marginTop: '3rem' }}>
              <p style={{ fontSize: '1.2rem', color: 'var(--corporate-gold)', fontWeight: 700 }}>"Vision requires curlers." - Aaron Bettany</p>
            </div>
            <button
              onClick={() => setCurrentView('home')}
              style={{ marginTop: '3rem' }}
            >
              Back to Reality
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Wine Alert Overlay */}
      <AnimatePresence>
        {(synergy < 20 || chaosMode) && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            style={{ position: 'fixed', bottom: '2rem', right: '2rem', background: chaosMode ? 'var(--corporate-gold)' : '#ff4d4d', color: chaosMode ? 'var(--corporate-navy)' : 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', zIndex: 1000 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <Wine className="urgent-blink" />
              <div>
                <h4 style={{ margin: 0 }}>{chaosMode ? 'SYNERGY CRITICAL' : 'CRITICAL SYNERGY DROP'}</h4>
                <p style={{ margin: 0, color: 'inherit', fontSize: '0.9rem' }}>{chaosMode ? 'VIBE OVERLOAD IN PROGRESS' : 'Initiating Emergency Wine Protocol'}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
