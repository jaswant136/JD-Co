import { Code2, Palette, Megaphone, Bot, Workflow, Rocket, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { services } from "../data/services";

const ICONS = {
  "web-development": Code2,
  branding: Palette,
  "digital-marketing": Megaphone,
  "ai-agents": Bot,
  automation: Workflow,
  "product-building": Rocket,
};

export default function Services() {
  return (
    <div className="services">
      <Reveal as="h3" className="services__title mono">
        SERVICES
      </Reveal>
      <div className="services__grid">
        {services.map((s, i) => {
          const Icon = ICONS[s.id];
          return (
            <Reveal key={s.id} delay={i * 0.05} className="service-card" data-cursor="BUILD">
              <Icon size={22} className="service-card__icon" />
              <h4 className="service-card__title">{s.title}</h4>
              <p className="service-card__desc muted">{s.description}</p>
              <ul className="service-card__tech mono">
                {s.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <span className="service-card__cta mono">
                Build with JD&Co <ArrowUpRight size={14} />
              </span>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
