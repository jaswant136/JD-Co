import Reveal from "./Reveal";
import { products } from "../data/products";

export default function Products() {
  return (
    <div className="products">
      <Reveal as="h3" className="products__title mono">
        IDEAS I'M EXPLORING
      </Reveal>
      <div className="products__grid">
        {products.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.04} className="product-card">
            <span className="mono product-card__status">{p.status}</span>
            <h4 className="product-card__title">{p.category}</h4>
            <p className="product-card__desc muted">{p.description}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
