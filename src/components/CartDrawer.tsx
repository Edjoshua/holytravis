import { X, Minus, Plus, Trash2, MessageCircle, Copy, ArrowLeft, CheckCircle2 } from "lucide-react";
import { useCart, buildWhatsAppUrl } from "@/lib/cart-store";
import { formatNaira, colorSwatch } from "@/lib/products";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const BANK = {
  account: "5729934213",
  name: "Travis Samuel Boateng",
  bank: "Moniepoint MFB",
};

export function CartDrawer() {
  const { isOpen, close, items, remove, updateQty, totalPrice, clear } = useCart();
  const [step, setStep] = useState<"cart" | "pay">("cart");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) setStep("cart");
  }, [isOpen]);

  const total = totalPrice();

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied");
  };

  const confirmPaid = () => {
    if (items.length === 0) return;
    const url = buildWhatsAppUrl(items, total);
    window.open(url, "_blank");
    toast.success("Order sent to seller via WhatsApp");
    clear();
    close();
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
          <div className="flex items-center gap-2">
            {step === "pay" && (
              <button onClick={() => setStep("cart")} aria-label="Back" className="p-2 rounded-full hover:bg-muted">
                <ArrowLeft className="h-5 w-5" />
              </button>
            )}
            <h3 className="font-serif text-2xl">{step === "cart" ? "Your Bag" : "Payment"}</h3>
          </div>
          <button onClick={close} aria-label="Close" className="p-2 rounded-full hover:bg-muted">
            <X className="h-5 w-5" />
          </button>
        </header>

        {step === "cart" ? (
          <>
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
                onClick={() => setStep("pay")}
                disabled={items.length === 0}
                className="w-full inline-flex items-center justify-center gap-2 bg-gold text-white rounded-full py-3.5 font-medium hover:opacity-90 transition disabled:opacity-40"
              >
                Proceed to Checkout
              </button>
            </footer>
          </>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-5 space-y-5">
              <div>
                <h4 className="font-serif text-lg mb-3">Order Summary</h4>
                <div className="space-y-2">
                  {items.map((it) => (
                    <div key={it.id} className="flex items-center justify-between text-sm bg-muted/50 rounded-xl px-3 py-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="h-3 w-3 rounded-full border border-border shrink-0" style={{ backgroundColor: colorSwatch[it.color] }} />
                        <span className="truncate">{it.name} × {it.quantity}</span>
                      </div>
                      <span className="font-medium ml-2">{formatNaira(it.price * it.quantity)}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex items-center justify-between border-t pt-3">
                  <span className="text-muted-foreground">Total to pay</span>
                  <span className="font-serif text-2xl text-gold">{formatNaira(total)}</span>
                </div>
              </div>

              <div className="rounded-2xl border-2 border-gold/40 bg-gold/5 p-5 space-y-4">
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Pay to</p>
                  <p className="font-serif text-xl mt-1">{BANK.name}</p>
                </div>
                <div className="flex items-center justify-between bg-background rounded-xl px-4 py-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Account Number</p>
                    <p className="font-mono text-lg font-semibold">{BANK.account}</p>
                  </div>
                  <button onClick={() => copy(BANK.account)} className="p-2 rounded-full hover:bg-muted" aria-label="Copy account number">
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
                <div className="bg-background rounded-xl px-4 py-3">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Bank</p>
                  <p className="font-medium">{BANK.bank}</p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Transfer the exact total above to the account. Once you've completed the transfer, tap "I have paid" and your order will be sent to the seller on WhatsApp for confirmation and delivery.
                </p>
              </div>
            </div>

            <footer className="border-t p-5 space-y-3">
              <button
                onClick={confirmPaid}
                className="w-full inline-flex items-center justify-center gap-2 bg-ink text-white rounded-full py-3.5 font-medium hover:bg-gold transition"
              >
                <CheckCircle2 className="h-5 w-5" />
                I have paid
              </button>
              <p className="text-[11px] text-center text-muted-foreground inline-flex items-center justify-center gap-1">
                <MessageCircle className="h-3 w-3" /> Your order details will be sent to the seller via WhatsApp.
              </p>
            </footer>
          </>
        )}
      </aside>
    </>
  );
}
