import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { coreNodes } from "../data/agents";

const RADIUS = 155;
const CENTER = 200;

function pointOn(i, total) {
  const angle = (i / total) * Math.PI * 2 - Math.PI / 2;
  return {
    x: CENTER + RADIUS * Math.cos(angle),
    y: CENTER + RADIUS * Math.sin(angle),
  };
}

export default function AICore() {
  const [active, setActive] = useState(null);

  return (
    <div className="ai-core">
      <svg viewBox="0 0 400 400" className="ai-core__svg" role="img" aria-label="JD AI Core network diagram">
        <defs>
          <radialGradient id="aiCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f4e409" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#f4e409" stopOpacity="0" />
          </radialGradient>
        </defs>

        {coreNodes.map((n, i) => {
          const p = pointOn(i, coreNodes.length);
          return (
            <line
              key={`line-${n.id}`}
              x1={CENTER}
              y1={CENTER}
              x2={p.x}
              y2={p.y}
              stroke={active === n.id ? "#f4e409" : "#1e1e1c"}
              strokeWidth={active === n.id ? 1.5 : 1}
              className="ai-core__line"
            />
          );
        })}

        <circle cx={CENTER} cy={CENTER} r="46" fill="url(#aiCoreGlow)" />
        <circle cx={CENTER} cy={CENTER} r="30" fill="#0f0f0e" stroke="#f4e409" strokeWidth="1.4" />
        <text x={CENTER} y={CENTER - 2} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#f4e409">JD AI</text>
        <text x={CENTER} y={CENTER + 10} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#f4e409">CORE</text>

        {coreNodes.map((n, i) => {
          const p = pointOn(i, coreNodes.length);
          const isActive = active === n.id;
          return (
            <g
              key={n.id}
              transform={`translate(${p.x},${p.y})`}
              className="ai-core__node"
              onMouseEnter={() => setActive(n.id)}
              onMouseLeave={() => setActive((a) => (a === n.id ? null : a))}
              onClick={() => setActive((a) => (a === n.id ? null : n.id))}
              tabIndex={0}
              role="button"
              aria-label={n.label}
              onFocus={() => setActive(n.id)}
            >
              <circle r={isActive ? 26 : 22} fill="#0f0f0e" stroke={isActive ? "#f4e409" : "#1e1e1c"} strokeWidth="1.2" />
              <text
                textAnchor="middle"
                y="4"
                fontFamily="JetBrains Mono, monospace"
                fontSize="8.5"
                fill={isActive ? "#f4e409" : "#f5f5f2"}
              >
                {n.label.toUpperCase()}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="ai-core__panel" aria-live="polite">
        <AnimatePresence mode="wait">
          {active ? (
            <motion.p
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="mono"
            >
              <span className="ai-core__panel-label">{coreNodes.find((n) => n.id === active)?.label}</span>
              {coreNodes.find((n) => n.id === active)?.info}
            </motion.p>
          ) : (
            <motion.p
              key="default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mono muted"
            >
              Hover or tap a node to see what it does.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
