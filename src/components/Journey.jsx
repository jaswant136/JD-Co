import Reveal from "./Reveal";

const STEPS = [
  "CSE Student",
  "Learning",
  "Building Projects",
  "Exploring AI",
  "Building JD&Co",
  "Building Products",
  "Future",
];

export default function Journey() {
  return (
    <section id="journey" className="section journey">
      <div className="container">
        <Reveal className="eyebrow">Journey</Reveal>
        <Reveal delay={0.05} as="h2" className="section-title">
          THE JOURNEY.
        </Reveal>

        <div className="journey__timeline">
          {STEPS.map((step, i) => (
            <Reveal key={step} delay={i * 0.07} className="journey__step">
              <span className="journey__dot" />
              {i < STEPS.length - 1 && <span className="journey__connector" />}
              <span className={`journey__label${i === STEPS.length - 1 ? " journey__label--accent" : ""}`}>
                {step}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4} className="journey__statement">
          "I'm still early in the journey — and that's the point."
        </Reveal>
      </div>
    </section>
  );
}
