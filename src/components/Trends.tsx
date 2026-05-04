import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/lib/products";
import { ProductCard } from "./ProductCard";

export function Trends() {
  const scroller = useRef<HTMLDivElement>(null);
  const items = products.filter((p) => ["cap", "joggers-normal", "tees-white"].includes(p.id));
  const scroll = (dir: 1 | -1) => {
    scroller.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };
  return (
    <section id="collection" className="container-luxe py-16 md:py-24">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
        <h2 className="font-serif text-4xl md:text-5xl">The latest fashion trends</h2>
        <div className="text-sm text-gold font-medium">Wear</div>
        <p className="text-sm text-muted-foreground max-w-xs md:text-right">
          Stay ahead of the fashion curve with our new arrivals.
        </p>
      </div>
      <div className="relative">
        <button onClick={() => scroll(-1)} aria-label="Previous" className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-gold text-white items-center justify-center shadow-lg hover:bg-gold-light transition">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button onClick={() => scroll(1)} aria-label="Next" className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-gold text-white items-center justify-center shadow-lg hover:bg-gold-light transition">
          <ChevronRight className="h-5 w-5" />
        </button>
        <div ref={scroller} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto scroll-smooth">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
