import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal__close" onClick={onClose} aria-label="Close project details" data-cursor="CLOSE">
              <X size={20} />
            </button>

            <div className="modal__head">
              <span className="mono modal__num">{project.number}</span>
              <span className="mono modal__status">{project.status}</span>
            </div>

            <h3 className="modal__title">{project.title}</h3>
            <p className="modal__summary muted">{project.summary}</p>

            <ul className="modal__tech mono">
              {project.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>

            <div className="modal__body">
              <div className="modal__block">
                <h4 className="mono modal__label">Problem</h4>
                <p>{project.problem}</p>
              </div>
              <div className="modal__block">
                <h4 className="mono modal__label">What I Built</h4>
                <p>{project.whatIBuilt}</p>
              </div>
              <div className="modal__block">
                <h4 className="mono modal__label">Key Features</h4>
                <ul className="modal__features">
                  {project.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
              <div className="modal__block modal__block--learned">
                <h4 className="mono modal__label">What I Learned</h4>
                <p>{project.learned}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
