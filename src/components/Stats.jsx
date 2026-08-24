import Reveal from "./Reveal";

const STATS = [
  { top: "CSE", bottom: "Student" },
  { top: "AI", bottom: "Exploring" },
  { top: "Web", bottom: "Building" },
  { top: "JD&Co", bottom: "Startup" },
  { top: "Projects", bottom: "Always Building" },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {STATS.map((s, i) => (
          <Reveal key={s.top} delay={i * 0.06} className="stats__item">
            <span className="stats__top mono">{s.top}</span>
            <span className="stats__bottom">{s.bottom}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
