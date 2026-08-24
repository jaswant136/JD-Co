import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function ProjectCard({ project, onOpen, delay = 0 }) {
  return (
    <Reveal
      as="button"
      delay={delay}
      className="project-card"
      onClick={() => onOpen(project)}
      data-cursor="OPEN"
    >
      <div className="project-card__top">
        <span className="mono project-card__num">{project.number}</span>
        <span className="mono project-card__status">{project.status}</span>
      </div>

      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__summary muted">{project.summary}</p>

      <div className="project-card__foot">
        <ul className="project-card__tech mono">
          {project.tech.slice(0, 3).map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <ArrowUpRight size={20} className="project-card__arrow" />
      </div>
    </Reveal>
  );
}
