import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState("");
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (isTouch) return;
    setEnabled(true);

    const pos = { x: 0, y: 0 };
    const ring = { x: 0, y: 0 };

    const move = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      }
    };

    let raf;
    const tick = () => {
      ring.x += (pos.x - ring.x) * 0.18;
      ring.y += (pos.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const over = (e) => {
      const target = e.target.closest("[data-cursor]");
      if (target) {
        setHovering(true);
        setLabel(target.getAttribute("data-cursor") || "");
      } else {
        setHovering(false);
        setLabel("");
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ opacity: hovering ? 0 : 1 }}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className={`cursor-ring${hovering ? " cursor-ring--active" : ""}`}
        aria-hidden="true"
      >
        {label && <span className="cursor-label">{label}</span>}
      </div>
    </>
  );
}
