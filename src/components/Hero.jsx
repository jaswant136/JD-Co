import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const line = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x, y });
  };

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero" ref={ref} onMouseMove={onMove}>
      <div className="hero__glow" style={{
        transform: `translate(${tilt.x * -20}px, ${tilt.y * -20}px)`,
      }} />
      <div className="container hero__grid">
        <div className="hero__copy">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            CSE Student / Developer / Builder
          </motion.p>

          <motion.h1 className="hero__headline" variants={container} initial="hidden" animate="show">
            <span className="hero__line">
              <motion.span variants={line} className="hero__line-inner">I BUILD</motion.span>
            </span>
            <span className="hero__line">
              <motion.span variants={line} className="hero__line-inner hero__line-inner--accent">WHAT'S NEXT.</motion.span>
            </span>
          </motion.h1>

          <motion.p
            className="hero__sub muted"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            I'm a Computer Science student building software, experimenting with AI
            and turning ideas into real products — while building my own startup, JD&Co.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <button className="btn btn-primary" onClick={() => goTo("projects")} data-cursor="VIEW">
              View My Work
            </button>
            <button className="btn btn-ghost" onClick={() => goTo("jdco")} data-cursor="EXPLORE">
              Explore JD&Co
            </button>
            <button className="hero__link" onClick={() => goTo("contact")} data-cursor="OPEN">
              Let's Connect <ArrowUpRight size={16} />
            </button>
          </motion.div>
        </div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            transform: `rotateX(${tilt.y * -8}deg) rotateY(${tilt.x * 8}deg)`,
          }}
        >
          <OrbitalSystem />
        </motion.div>
      </div>

      <motion.button
        className="hero__scroll mono"
        onClick={() => goTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        data-cursor="SCROLL"
      >
        SCROLL TO EXPLORE <ArrowDown size={14} />
      </motion.button>
    </section>
  );
}

function OrbitalSystem() {
  const nodes = [
    { label: "CODE", r: 150, dur: 22, delay: 0 },
    { label: "AI", r: 108, dur: 16, delay: -4 },
    { label: "BUILD", r: 66, dur: 11, delay: -2 },
  ];

  return (
    <svg viewBox="0 0 400 400" className="orbital" role="img" aria-label="Orbiting nodes representing code, AI and building">
      <defs>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f4e409" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#f4e409" stopOpacity="0" />
        </radialGradient>
      </defs>

      {nodes.map((n) => (
        <circle
          key={n.label}
          cx="200"
          cy="200"
          r={n.r}
          fill="none"
          stroke="#1e1e1c"
          strokeWidth="1"
        />
      ))}

      <circle cx="200" cy="200" r="60" fill="url(#coreGlow)" />
      <circle cx="200" cy="200" r="14" fill="#f4e409" />

      {nodes.map((n) => (
        <g key={n.label}>
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`0 200 200`}
              to={`360 200 200`}
              dur={`${n.dur}s`}
              repeatCount="indefinite"
            />
            <g transform={`translate(200,${200 - n.r})`}>
              <circle r="20" fill="#0f0f0e" stroke="#f4e409" strokeWidth="1.2" />
              <g>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="360 0 0"
                  to="0 0 0"
                  dur={`${n.dur}s`}
                  repeatCount="indefinite"
                />
                <text
                  x="0"
                  y="4"
                  textAnchor="middle"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="9"
                  fill="#f5f5f2"
                >
                  {n.label}
                </text>
              </g>
            </g>
          </g>
        </g>
      ))}
    </svg>
  );
}
