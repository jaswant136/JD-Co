# Jaswant — Portfolio & JD&Co

A premium, dark, interactive personal portfolio for Jaswant — CSE student,
developer, builder, and founder of JD&Co. Built with React, Vite and Framer
Motion.

## Tech stack

- React 19 + Vite
- React Router (installed, ready for multi-page use — the site currently runs
  as a single scrolling page)
- Framer Motion (animations, reveals, page transitions)
- Lucide React (icons)
- Plain CSS with design tokens (no CSS framework) — colors, type and spacing
  are all defined as CSS variables in `src/styles/globals.css`

No TypeScript, no 3D engine dependency — the "3D" visuals (hero orbital
system, AI core network, identity graphic) are hand-built animated SVG, which
keeps the project dependency-light and fast while still delivering the
interactive, technical feel the brief called for.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Production build

```bash
npm run build
```

Output goes to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Project structure

```
src/
  components/     UI building blocks, one per section/feature
  data/           Content as plain JS arrays/objects (projects, services, skills, agents, products, social)
  pages/
    Home.jsx      Composes every section in order
  styles/
    globals.css   Design tokens + all component styles
  config.js       Editable personal info (name, email, social links)
  App.jsx         App shell: navbar, cursor, page, footer
  main.jsx        Entry point
```

Content lives in `src/data/` and `src/config.js`, separate from components —
edit those files and the whole site updates.

## How to change things

**Personal info & social links** → `src/config.js`
Update `name`, `email`, `resumeUrl`, `jdco`, and the `social` object
(`github`, `linkedin`, `instagram`, `twitter`). These are placeholder URLs —
replace them with your real profiles. The Contact section and footer both
read from this file automatically.

**Projects** → `src/data/projects.js`
Each project is one object: `title`, `category`, `status`, `tech`, `summary`,
plus the modal content (`problem`, `whatIBuilt`, `features`, `learned`). Add,
remove or edit entries — the grid and modal update automatically. Keep
`status` honest (`PERSONAL PROJECT`, `ACADEMIC PROJECT`, `EXPERIMENT`,
`STARTUP`) rather than implying professional/client work that didn't happen.

**JD&Co services** → `src/data/services.js`
Each service needs an `id` matching an icon key in
`src/components/Services.jsx`'s `ICONS` map, plus `title`, `description`,
`tech`.

**AI Lab agents & core nodes** → `src/data/agents.js`
`agents` powers the agent concept cards; `coreNodes` powers the interactive
network diagram (`src/components/AICore.jsx`). Keep the `tag` field
(`CONCEPT` / `EXPERIMENT` / `PRODUCT IDEA`) truthful — don't relabel these as
live systems unless they actually are.

**Skills** → `src/data/skills.js`
`skillGroups` powers the tabbed skills section, `marqueeTech` powers the
scrolling tech marquee, `buildWorld` powers the "What I Build" interactive
category list.

**Product/idea lab** → `src/data/products.js`
Each entry has a `status` of `EXPLORING`, `CONCEPT`, or `COMING LATER` —
these are intentionally not "live products."

**Colors & typography** → `src/styles/globals.css`, top `:root` block.
Change `--bg`, `--text`, `--accent`, etc. Fonts are loaded from Google Fonts
in `index.html` (`Space Grotesk`, `Inter`, `JetBrains Mono`) and referenced
via `--font-display`, `--font-body`, `--font-mono`.

## Connecting things for real

**Contact form** (`src/components/Contact.jsx`)
The form currently just shows a "Message Ready" state on submit — it is not
wired to a backend. To make it functional, either:
- Point the `submit` handler at a form service (Formspree, Resend, etc.) with
  a `fetch()` POST call, or
- Build a small backend/serverless function that accepts the form payload
  (`name`, `email`, `type`, `message`) and forwards it by email or to a
  database.

**AI Lab demo** (`src/components/AIDemo.jsx`)
This is a scripted, front-end-only animation and is explicitly labeled
"SIMULATED DEMO — NOT CONNECTED TO A LIVE AI SYSTEM." To connect a real
model, replace the `setTimeout` sequence in `run()` with an actual API call
(e.g. to the Anthropic API) and drive the step list from the real response.

**Analytics**
No analytics are included. To add some, drop your provider's snippet into
`index.html` or wire up a package (e.g. Plausible, Vercel Analytics) in
`main.jsx`.

**Database**
Not used anywhere in this project — it's fully static/client-side. If a
future feature needs persistence (e.g. saved leads from the contact form),
add a backend of your choice and call it from `Contact.jsx`.

## Accessibility & motion

- Semantic HTML, labeled form fields, visible focus states
- `prefers-reduced-motion` is respected globally in `globals.css`
- Custom cursor is disabled automatically on touch/coarse-pointer devices

## Honesty by design

Per the brief, this site intentionally avoids fabricated clients, revenue,
employee counts, testimonials, or metrics. Project statuses, JD&Co's
early-stage framing, and AI Lab "concept" labels are all meant to stay
accurate — please keep them that way as you customize the content.
