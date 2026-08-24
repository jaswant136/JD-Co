import Reveal from "./Reveal";
import Services from "./Services";

const FLOW = ["Brand", "Website", "Marketing", "Leads", "AI", "Automation", "Growth"];

export default function JDCo() {
  return (
    <section id="jdco" className="section jdco">
      <div className="container">
        <Reveal className="eyebrow">JD&Co</Reveal>
        <Reveal delay={0.05} as="h2" className="jdco__title">
          ONE IDEA.
          <br />
          <span className="jdco__title-accent">MANY DIRECTIONS.</span>
        </Reveal>

        <Reveal delay={0.1} className="jdco__lede">
          <span className="mono jdco__lede-tag">A startup I'm building.</span>
          <p className="muted">
            JD&Co started as an idea around building websites and digital
            experiences. I'm developing it into something broader — a digital
            studio focused on websites, branding, digital growth, AI agents and
            automation.
          </p>
          <span className="mono jdco__stage">EARLY-STAGE STARTUP / STUDIO</span>
        </Reveal>

        <Reveal delay={0.15} className="jdco__flow" aria-label="JD&Co growth flow">
          {FLOW.map((step, i) => (
            <span key={step} className="jdco__flow-step">
              <span className="mono">{step}</span>
              {i < FLOW.length - 1 && <span className="jdco__flow-arrow">→</span>}
            </span>
          ))}
        </Reveal>

        <Services />
      </div>
    </section>
  );
}
