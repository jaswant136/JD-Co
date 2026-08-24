import Reveal from "./Reveal";

const FLOW = ["Code", "Product", "AI", "Startup", "Impact"];

export default function Vision() {
  return (
    <section className="section vision">
      <div className="vision__glow" aria-hidden="true" />
      <div className="container">
        <Reveal as="h2" className="vision__title">
          THIS IS JUST
          <br />
          <span className="vision__title-accent">THE BEGINNING.</span>
        </Reveal>

        <div className="vision__body">
          <Reveal delay={0.1} className="vision__para">
            I'm currently a CSE student.
          </Reveal>
          <Reveal delay={0.16} className="vision__para">
            I'm learning. I'm building. I'm experimenting.
          </Reveal>
          <Reveal delay={0.22} className="vision__para">
            JD&Co is the beginning of the entrepreneurial side of that journey.
          </Reveal>
          <Reveal delay={0.28} className="vision__para">
            The long-term goal is to build useful digital products, intelligent
            systems and technology businesses.
          </Reveal>
        </div>

        <Reveal delay={0.36} className="vision__flow mono">
          {FLOW.map((step, i) => (
            <span key={step} className="vision__flow-step">
              {step.toUpperCase()}
              {i < FLOW.length - 1 && <span className="vision__flow-arrow">→</span>}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
