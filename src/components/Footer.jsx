import config from "../config";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "jdco", label: "JD&Co" },
  { id: "ai-lab", label: "AI Lab" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo mono">JD&Co</span>
          <p className="muted">Built by {config.name}.</p>
          <p className="mono footer__role">CSE Student • Developer • Founder / Builder</p>
          <p className="footer__tagline">Still learning. Still building.</p>
        </div>

        <nav className="footer__links mono" aria-label="Footer">
          {LINKS.map((l) => (
            <button key={l.id} onClick={() => goTo(l.id)}>
              {l.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="container footer__bottom mono">
        <span>© {config.year} {config.name} / JD&Co</span>
      </div>
    </footer>
  );
}
