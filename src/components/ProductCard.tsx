import { useState } from "react";
import { Heart, Minus, Plus } from "lucide-react";
import { type Product, formatNaira, colorSwatch } from "@/lib/products";
import { useCart } from "@/lib/cart-store";
import { toast } from "sonner";

export function ProductCard({ product, dark = false }: { product: Product; dark?: boolean }) {
  const [selections, setSelections] = useState<Record<string, number>>({});
  const [wished, setWished] = useState(false);
  const addItems = useCart((s) => s.addItems);

  const toggleColor = (c: string) => {
    setSelections((prev) => {
      const next = { ...prev };
      if (next[c]) delete next[c];
      else next[c] = 1;
      return next;
    });
  };

  const setQty = (c: string, q: number) => {
    setSelections((prev) => ({ ...prev, [c]: Math.max(1, q) }));
  };

  const handleShop = () => {
    const entries = Object.entries(selections);
    if (entries.length === 0) {
      toast.error("Please select at least one color");
      return;
    }
    addItems(
      entries.map(([color, quantity]) => ({
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        color: color as never,
        quantity,
      }))
    );
    toast.success(`${product.name} added to cart`);
    setSelections({});
  };

  return (
    <article className={`card-hover relative rounded-2xl overflow-hidden ${dark ? "bg-ink text-white" : "bg-card"}`}>
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={1000}
          className={`w-full h-full transition-transform duration-500 hover:scale-105 ${product.id === "cap" ? "object-contain bg-ink" : "object-cover"}`}
        />
        <button
          onClick={() => setWished((w) => !w)}
          aria-label="Add to wishlist"
          className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-white transition"
        >
          <Heart className={`h-4 w-4 ${wished ? "fill-gold text-gold" : "text-foreground"}`} />
        </button>

        <div className="absolute bottom-0 inset-x-0 p-4 flex items-end justify-between bg-gradient-to-t from-black/70 via-black/20 to-transparent">
          <div className="text-white">
            <h3 className="font-serif text-lg leading-tight">{product.name}</h3>
            <p className="text-sm opacity-90">{formatNaira(product.price)}</p>
          </div>
          <button onClick={handleShop} className="bg-white text-ink rounded-full px-4 py-2 text-xs font-medium hover:bg-gold hover:text-white transition">
            Shop now
          </button>
        </div>
      </div>

      <div className={`p-4 ${dark ? "bg-ink" : "bg-card"}`}>
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs ${dark ? "text-white/70" : "text-muted-foreground"}`}>Colors:</span>
          {product.colors.map((c) => {
            const active = !!selections[c];
            return (
              <button
                key={c}
                onClick={() => toggleColor(c)}
                aria-label={`Select ${c}`}
                className={`h-6 w-6 rounded-full border-2 transition ${active ? "border-gold scale-110 ring-2 ring-gold/30" : "border-border"}`}
                style={{ backgroundColor: colorSwatch[c] }}
              />
            );
          })}
        </div>
        {Object.keys(selections).length > 0 && (
          <div className="space-y-2">
            {Object.entries(selections).map(([c, q]) => (
              <div key={c} className={`flex items-center justify-between text-xs rounded-lg px-3 py-2 ${dark ? "bg-white/10" : "bg-muted"}`}>
                <span className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full border border-border" style={{ backgroundColor: colorSwatch[c as never] }} />
                  {c}
                </span>
                <div className="flex items-center gap-2">
                  <button onClick={() => setQty(c, q - 1)} className="h-6 w-6 rounded-full bg-background text-foreground flex items-center justify-center"><Minus className="h-3 w-3" /></button>
                  <span className="w-5 text-center font-medium">{q}</span>
                  <button onClick={() => setQty(c, q + 1)} className="h-6 w-6 rounded-full bg-background text-foreground flex items-center justify-center"><Plus className="h-3 w-3" /></button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
