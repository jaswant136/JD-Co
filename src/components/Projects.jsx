import { useState } from "react";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "../data/projects";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Reveal className="eyebrow">Projects</Reveal>
        <Reveal delay={0.05} as="h2" className="section-title">
          THINGS I'VE BUILT.
        </Reveal>
        <Reveal delay={0.1} className="projects__intro muted">
          Personal projects, academic work and early experiments — no fabricated
          clients or metrics, just what I actually built and what it taught me.
        </Reveal>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} onOpen={setSelected} delay={i * 0.05} />
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
