import Reveal from "./Reveal";

const TAGS = [
  "CSE Student",
  "Developer",
  "Builder",
  "AI Explorer",
  "Entrepreneur",
  "Product Thinker",
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        {/* LEFT — ABOUT CONTENT */}
        <div>
          <Reveal className="eyebrow">About</Reveal>

          <Reveal delay={0.05} as="h2" className="about__title">
            WHO'S BEHIND
            <br />
            THE CODE?
          </Reveal>

          <div className="about__body">
            <Reveal delay={0.1} className="about__para">
              I'm a Computer Science and Engineering student interested in
              software development, AI/ML, product development and
              entrepreneurship.
            </Reveal>

            <Reveal delay={0.16} className="about__para">
              I like working across the stack — from frontend interfaces and
              backend APIs to databases, automation and intelligent systems.
            </Reveal>

            <Reveal delay={0.22} className="about__para">
              I don't want to only learn technologies. I want to use them to
              build things.
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

        {/* RIGHT — YOUR FULL PHOTO */}
        <Reveal delay={0.15} className="about__visual" y={0}>
          <div className="about__photo">
            <img
              src="/images/jaswant.jpg"
              alt="Jaswant - CSE Student, Developer and Builder"
            />

            {/* Decorative overlay */}
            <div className="about__photo-grid"></div>

            <div className="about__photo-label mono">
              <span>J.D.</span>
              <span>CSE / BUILDER</span>
            </div>

            <div className="about__photo-corner about__photo-corner--tl"></div>
            <div className="about__photo-corner about__photo-corner--tr"></div>
            <div className="about__photo-corner about__photo-corner--bl"></div>
            <div className="about__photo-corner about__photo-corner--br"></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}