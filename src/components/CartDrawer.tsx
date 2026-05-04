import { X, Minus, Plus, Trash2, MessageCircle } from "lucide-react";
import { useCart, buildWhatsAppUrl } from "@/lib/cart-store";
import { formatNaira, colorSwatch } from "@/lib/products";
import { useEffect } from "react";

export function CartDrawer() {
  const { isOpen, close, items, remove, updateQty, totalPrice } = useCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const total = totalPrice();

  const checkout = () => {
    if (items.length === 0) return;
    const url = buildWhatsAppUrl(items, total);
    window.open(url, "_blank");
  };

  return (
    <>
      <div
        onClick={close}
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />
      <aside
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-background z-50 shadow-2xl transform transition-transform duration-300 flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <header className="flex items-center justify-between p-5 border-b">
          <h3 className="font-serif text-2xl">Your Bag</h3>
          <button onClick={close} aria-label="Close" className="p-2 rounded-full hover:bg-muted">
            <X className="h-5 w-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 && (
            <div className="text-center text-muted-foreground py-20">
              <p>Your bag is empty.</p>
              <p className="text-xs mt-2">Pick a color and add a piece you love.</p>
            </div>
          )}
          {items.map((it) => (
            <div key={it.id} className="flex gap-4 bg-muted/50 rounded-2xl p-3">
              <img src={it.image} alt={it.name} className="h-20 w-20 rounded-xl object-cover" />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="font-serif text-base leading-tight">{it.name}</h4>
                    <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                      <span className="h-3 w-3 rounded-full border border-border" style={{ backgroundColor: colorSwatch[it.color] }} />
                      {it.color}
                    </div>
                  </div>
                  <button onClick={() => remove(it.id)} aria-label="Remove" className="text-muted-foreground hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQty(it.id, it.quantity - 1)} className="h-7 w-7 rounded-full bg-background border flex items-center justify-center"><Minus className="h-3 w-3" /></button>
                    <span className="w-6 text-center text-sm font-medium">{it.quantity}</span>
                    <button onClick={() => updateQty(it.id, it.quantity + 1)} className="h-7 w-7 rounded-full bg-background border flex items-center justify-center"><Plus className="h-3 w-3" /></button>
                  </div>
                  <span className="text-sm font-semibold">{formatNaira(it.price * it.quantity)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer className="border-t p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Total</span>
            <span className="font-serif text-2xl">{formatNaira(total)}</span>
          </div>
          <button
            onClick={checkout}
            disabled={items.length === 0}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white rounded-full py-3.5 font-medium hover:opacity-90 transition disabled:opacity-40"
          >
            <MessageCircle className="h-5 w-5" />
            Checkout via WhatsApp
          </button>
          <p className="text-[11px] text-center text-muted-foreground">You'll be redirected to WhatsApp to confirm your order.</p>
        </footer>
      </aside>
    </>
  );
}
