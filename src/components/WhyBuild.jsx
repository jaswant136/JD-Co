import Reveal from "./Reveal";

export default function WhyBuild() {
  return (
    <section className="section why-build">
      <div className="container why-build__grid">
        <Reveal as="h2" className="why-build__title">
          I DON'T WANT TO JUST USE TECHNOLOGY.
          <br />
          <span className="why-build__title-accent">I WANT TO BUILD WITH IT.</span>
        </Reveal>

        <div className="why-build__lines">
          <Reveal delay={0.1} className="why-build__line">
            I like learning by creating.
          </Reveal>
          <Reveal delay={0.18} className="why-build__line">
            Every project teaches me something new.
          </Reveal>
          <Reveal delay={0.26} className="why-build__line why-build__line--stack">
            Some projects become products.
            <br />
            Some become experiments.
            <br />
            Some fail.
            <br />
            <span className="why-build__accent">All of them move me forward.</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
