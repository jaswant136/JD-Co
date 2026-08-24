import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Play } from "lucide-react";
import Reveal from "./Reveal";

const STEPS = [
  "Request detected",
  "Business type identified",
  "Service matched",
  "Requirements extracted",
  "Lead classified",
  "Next action generated",
];

export default function AIDemo() {
  const [running, setRunning] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState(0);
  const [done, setDone] = useState(false);

  const run = () => {
    if (running) return;
    setRunning(true);
    setDone(false);
    setVisibleSteps(0);

    STEPS.forEach((_, i) => {
      setTimeout(() => {
        setVisibleSteps(i + 1);
        if (i === STEPS.length - 1) {
          setTimeout(() => {
            setDone(true);
            setRunning(false);
          }, 500);
        }
      }, 550 * (i + 1));
    });
  };

  return (
    <Reveal className="ai-demo">
      <div className="ai-demo__header">
        <span className="mono ai-demo__title">JD AI AGENT</span>
        <span className="mono ai-demo__status">
          <span className="ai-demo__dot" /> ONLINE
        </span>
      </div>

      <div className="ai-demo__body">
        <div className="ai-demo__msg ai-demo__msg--user mono">
          "I need a website for my business."
        </div>

        <div className="ai-demo__analysis">
          <span className="mono ai-demo__analysis-title">AI ANALYSIS</span>
          <ul>
            {STEPS.map((step, i) => (
              <AnimatePresence key={step} mode="popLayout">
                {i < visibleSteps && (
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Check size={14} className="ai-demo__check" /> {step}
                  </motion.li>
                )}
              </AnimatePresence>
            ))}
          </ul>
        </div>

        <AnimatePresence>
          {done && (
            <motion.div
              className="ai-demo__complete mono"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              WORKFLOW COMPLETE
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button className="btn btn-primary ai-demo__run" onClick={run} disabled={running} data-cursor="RUN">
        <Play size={14} /> {running ? "Running…" : "Run Demo"}
      </button>

      <p className="ai-demo__note mono">SIMULATED DEMO — NOT CONNECTED TO A LIVE AI SYSTEM</p>
    </Reveal>
  );
}
