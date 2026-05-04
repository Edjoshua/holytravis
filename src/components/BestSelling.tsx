import { products } from "@/lib/products";
import { ProductCard } from "./ProductCard";

export function BestSelling() {
  const items = products.filter((p) => ["joggers", "shorts", "tank"].includes(p.id));
  return (
    <section className="bg-beige-soft py-16 md:py-24">
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <h2 className="font-serif text-4xl md:text-5xl">Shop our best-selling</h2>
          <div className="text-sm text-gold font-medium">Bottoms</div>
          <p className="text-sm text-muted-foreground max-w-xs md:text-right">
            Be inspired by our carefully curated selection of the season's hottest fashion picks.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
