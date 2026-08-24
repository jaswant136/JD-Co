import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import TechMarquee from "./TechMarquee";
import { skillGroups } from "../data/skills";

export default function Skills() {
  const [active, setActive] = useState(skillGroups[0].id);
  const activeGroup = skillGroups.find((g) => g.id === active);

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <Reveal className="eyebrow">Skills</Reveal>
        <Reveal delay={0.05} as="h2" className="section-title">
          THE TOOLKIT.
        </Reveal>

        <div className="skills__tabs mono" role="tablist">
          {skillGroups.map((g) => (
            <button
              key={g.id}
              role="tab"
              aria-selected={active === g.id}
              className={`skills__tab${active === g.id ? " skills__tab--active" : ""}`}
              onClick={() => setActive(g.id)}
              data-cursor="VIEW"
            >
              {g.label}
            </button>
          ))}
        </div>

        <div className="skills__panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="skills__chips"
            >
              {activeGroup.skills.map((s, i) => (
                <motion.span
                  key={s}
                  className="skills__chip"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                >
                  {s}
                </motion.span>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <TechMarquee />
    </section>
  );
}
