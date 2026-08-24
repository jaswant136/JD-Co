import Reveal from "./Reveal";

const TAGS = ["CSE Student", "Developer", "Builder", "AI Explorer", "Entrepreneur", "Product Thinker"];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div>
          <Reveal className="eyebrow">About</Reveal>
          <Reveal delay={0.05} as="h2" className="about__title">
            WHO'S BEHIND
            <br />
            THE CODE?
          </Reveal>

          <div className="about__body">
            <Reveal delay={0.1} className="about__para">
              I'm a Computer Science and Engineering student interested in software
              development, AI/ML, product development and entrepreneurship.
            </Reveal>
            <Reveal delay={0.16} className="about__para">
              I like working across the stack — from frontend interfaces and backend
              APIs to databases, automation and intelligent systems.
            </Reveal>
            <Reveal delay={0.22} className="about__para">
              I don't want to only learn technologies. I want to use them to build
              things.
            </Reveal>
          </div>

          <Reveal delay={0.3} className="about__tags">
            {TAGS.map((t) => (
              <span key={t} className="about__tag mono">
                {t}
              </span>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.15} className="about__visual" y={0}>
          <AbstractIdentity />
        </Reveal>
      </div>
    </section>
  );
}

function AbstractIdentity() {
  return (
    <svg viewBox="0 0 320 380" className="identity-svg" role="img" aria-label="Abstract geometric representation of Jaswant">
      <defs>
        <linearGradient id="idFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4e409" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#f4e409" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="0.5" y="0.5" width="319" height="379" fill="none" stroke="#1e1e1c" />
      <polygon points="160,40 260,110 230,240 90,240 60,110" fill="none" stroke="#f4e409" strokeWidth="1.4" />
      <polygon points="160,90 220,135 200,220 120,220 100,135" fill="none" stroke="#f5f5f2" strokeWidth="1" opacity="0.5" />
      <circle cx="160" cy="150" r="6" fill="#f4e409" />
      <rect x="60" y="240" width="200" height="110" fill="url(#idFade)" />
      <line x1="160" y1="40" x2="160" y2="0" stroke="#1e1e1c" />
      <line x1="60" y1="110" x2="10" y2="90" stroke="#1e1e1c" />
      <line x1="260" y1="110" x2="310" y2="90" stroke="#1e1e1c" />
      <text x="160" y="330" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" letterSpacing="2" fill="#858580">
        J.D. / CSE
      </text>
    </svg>
  );
}
