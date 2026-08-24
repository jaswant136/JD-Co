import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import { buildWorld } from "../data/skills";

export default function BuildWorld() {
  const [active, setActive] = useState(buildWorld[0].number);
  const activeItem = buildWorld.find((b) => b.number === active);

  return (
    <section className="section build-world">
      <div className="container">
        <Reveal className="eyebrow">What I Build</Reveal>
        <Reveal delay={0.05} as="h2" className="section-title">
          WHERE MY TIME
          <br /> ACTUALLY GOES.
        </Reveal>

        <div className="build-world__layout">
          <div className="build-world__list" role="tablist" aria-label="Areas I build in">
            {buildWorld.map((item, i) => (
              <Reveal
                key={item.number}
                delay={0.05 * i}
                as="button"
                role="tab"
                aria-selected={active === item.number}
                className={`build-world__row${active === item.number ? " build-world__row--active" : ""}`}
                onMouseEnter={() => setActive(item.number)}
                onClick={() => setActive(item.number)}
                data-cursor="VIEW"
              >
                <span className="mono build-world__num">{item.number}</span>
                <span className="build-world__row-title">{item.title}</span>
              </Reveal>
            ))}
          </div>

          <div className="build-world__panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.number}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="build-world__use muted">{activeItem.use}</p>
                <ul className="build-world__tech">
                  {activeItem.tech.map((t) => (
                    <li key={t} className="mono">{t}</li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
