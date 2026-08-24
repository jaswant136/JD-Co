import { marqueeTech } from "../data/skills";

export default function TechMarquee() {
  const items = [...marqueeTech, ...marqueeTech];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((t, i) => (
          <span key={`${t}-${i}`} className="marquee__item">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
