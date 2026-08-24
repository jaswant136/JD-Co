import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "jdco", label: "JD&Co" },
  { id: "ai-lab", label: "AI Lab" },
  { id: "skills", label: "Skills" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const goTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
        <div className="container navbar__inner">
          <button
            className="navbar__logo mono"
            onClick={() => goTo("home")}
            data-cursor="HOME"
            aria-label="Jaswant, go to home"
          >
            JASWANT <span className="navbar__logo-sep">/</span> <span className="navbar__logo-jdco">JD&Co</span>
          </button>

          <nav className="navbar__links" aria-label="Primary">
            {LINKS.map((l) => (
              <button key={l.id} onClick={() => goTo(l.id)} data-cursor="GO">
                {l.label}
              </button>
            ))}
          </nav>

          <div className="navbar__actions">
            <button className="btn btn-primary navbar__cta" onClick={() => goTo("contact")} data-cursor="OPEN">
              Let's Build
            </button>
            <button
              className="navbar__burger"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="mobile-menu__links" aria-label="Mobile primary">
              {LINKS.map((l, i) => (
                <motion.button
                  key={l.id}
                  onClick={() => goTo(l.id)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="mono mobile-menu__num">0{i + 1}</span>
                  {l.label}
                </motion.button>
              ))}
            </nav>
            <button className="btn btn-primary" onClick={() => goTo("contact")}>
              Let's Build
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
