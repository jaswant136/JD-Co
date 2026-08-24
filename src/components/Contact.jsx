import { useState } from "react";
import { Code2, Users, Camera, Mail, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import config from "../config";

const PROJECT_TYPES = [
  "Website",
  "Web App",
  "AI",
  "Automation",
  "Branding",
  "Digital Marketing",
  "Product",
  "Startup Idea",
  "Other",
];

const SOCIALS = [
  { id: "github", label: "GitHub", icon: Code2, href: config.social.github },
  { id: "linkedin", label: "LinkedIn", icon: Users, href: config.social.linkedin },
  { id: "email", label: "Email", icon: Mail, href: `mailto:${config.email}` },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", type: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sent

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e) => {
  e.preventDefault();

  const phone = "919363979419"; // YOUR WhatsApp number

  const message = `
Hello Jaswant,

Name: ${form.name}
Email: ${form.email}
Project Type: ${form.type}

Message:
${form.message}
  `.trim();

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");

  setStatus("sent");
};

  return (
    <section id="contact" className="section contact">
      <div className="container contact__grid">
        <div>
          <Reveal className="eyebrow">Contact</Reveal>
          <Reveal delay={0.05} as="h2" className="contact__title">
            LET'S BUILD
            <br />
            SOMETHING.
          </Reveal>
          <Reveal delay={0.1} className="contact__text muted">
            Have an idea, project, startup concept or something you want to
            experiment with? Let's talk.
          </Reveal>

          <Reveal delay={0.18} className="contact__socials">
            {SOCIALS.map((s) => (
              <a
                key={s.id}
                href={s.href}
                target={s.id === "email" ? undefined : "_blank"}
                rel="noreferrer"
                className="contact__social"
                data-cursor="OPEN"
              >
                <s.icon size={16} />
                {s.label}
                <ArrowUpRight size={13} />
              </a>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.15} y={0} as="form" className="contact__form" onSubmit={submit}>
          <div className="contact__field">
            <label htmlFor="name" className="mono">Name</label>
            <input id="name" required value={form.name} onChange={update("name")} placeholder="Your name" />
          </div>
          <div className="contact__field">
            <label htmlFor="email" className="mono">Email</label>
            <input id="email" type="email" required value={form.email} onChange={update("email")} placeholder="you@email.com" />
          </div>
          <div className="contact__field">
            <label htmlFor="type" className="mono">Project Type</label>
            <select id="type" required value={form.type} onChange={update("type")}>
              <option value="" disabled>Select one</option>
              {PROJECT_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div className="contact__field">
            <label htmlFor="message" className="mono">Message</label>
            <textarea id="message" required rows={5} value={form.message} onChange={update("message")} placeholder="Tell me about it..." />
          </div>

          <button type="submit" className="btn btn-primary contact__submit" data-cursor="SEND">
            {status === "sent" ? "Message Ready ✓" : "Send Message"}
          </button>
          {status === "sent" && (
            <p className="contact__note mono">
              This form isn't connected to a backend yet — see the README for how to wire it up.
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
