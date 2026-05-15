import { useState } from "react";
import { products } from "@/lib/products";
import { ProductCard } from "./ProductCard";

const tabs = ["Tops", "Bottoms", "Wear"] as const;

export function ProductSection() {
  const [active, setActive] = useState<(typeof tabs)[number]>("Tops");
  const filtered = products.filter((p) => p.category === active).slice(0, 3);

  return (
    <section id="shop" className="container-luxe py-16 md:py-24">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <div className="max-w-xl">
          <h2 className="font-serif text-4xl md:text-5xl">Choose the best everyday wear</h2>
          <p className="mt-3 text-muted-foreground">
            Discover a wide range of luxury clothing categories tailored to suit your fashion needs.
          </p>
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-full bg-ink/5 p-1.5 self-start md:self-auto border border-gold/30 shadow-md">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`px-6 py-2.5 text-sm font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${
                active === t
                  ? "bg-gold text-white shadow-lg shadow-gold/40 scale-105"
                  : "text-ink/70 hover:text-ink hover:bg-white/60"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p, i) => (
          <ProductCard key={p.id} product={p} dark={i === 1} />
        ))}
      </div>
    </section>
  );
}
