import Reveal from "./Reveal";

const HIGHLIGHTS = ["CSE", "CODE", "AI", "PRODUCTS", "STARTUP"];

export default function Intro() {
  return (
    <section className="section intro">
      <div className="container">
        <Reveal as="h2" className="intro__statement">
          I'M NOT JUST LEARNING TO CODE.
          <br />
          <span className="intro__statement-accent">I'M LEARNING TO BUILD.</span>
        </Reveal>

        <div className="intro__body">
          <Reveal delay={0.1} className="intro__para">
            I'm currently studying Computer Science and Engineering while working on
            personal projects, software systems, AI experiments and startup ideas.
          </Reveal>
          <Reveal delay={0.2} className="intro__para">
            I enjoy taking an idea that exists only in my head and turning it into
            something people can actually interact with.
          </Reveal>
        </div>

        <Reveal delay={0.25} className="intro__tags mono">
          {HIGHLIGHTS.map((tag, i) => (
            <span key={tag} className="intro__tag">
              {tag}
              {i < HIGHLIGHTS.length - 1 && <span className="intro__tag-plus">+</span>}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
