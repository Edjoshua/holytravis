import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ColorOption } from "./products";

export type CartItem = {
  id: string;
  productId: string;
  name: string;
  price: number;
  image: string;
  color: ColorOption;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  addItems: (items: Omit<CartItem, "id">[]) => void;
  remove: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clear: () => void;
  totalCount: () => number;
  totalPrice: () => number;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      toggle: () => set({ isOpen: !get().isOpen }),
      addItems: (newItems) =>
        set((s) => {
          const items = [...s.items];
          for (const ni of newItems) {
            const existing = items.find((i) => i.productId === ni.productId && i.color === ni.color);
            if (existing) existing.quantity += ni.quantity;
            else items.push({ ...ni, id: `${ni.productId}-${ni.color}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}` });
          }
          return { items, isOpen: true };
        }),
      remove: (id) => set((s) => ({ items: s.items.filter((i) => i.id !== id) })),
      updateQty: (id, qty) =>
        set((s) => ({
          items: s.items.map((i) => (i.id === id ? { ...i, quantity: Math.max(1, qty) } : i)),
        })),
      clear: () => set({ items: [] }),
      totalCount: () => get().items.reduce((a, i) => a + i.quantity, 0),
      totalPrice: () => get().items.reduce((a, i) => a + i.price * i.quantity, 0),
    }),
    { name: "holy-travis-cart" }
  )
);

export const WHATSAPP_NUMBER = "447951349655";

export function buildWhatsAppUrl(items: CartItem[], total: number) {
  // Group by product to show colors aggregated
  const grouped = new Map<string, { name: string; price: number; colors: { color: string; qty: number }[] }>();
  for (const it of items) {
    const g = grouped.get(it.productId) ?? { name: it.name, price: it.price, colors: [] };
    g.colors.push({ color: it.color, qty: it.quantity });
    grouped.set(it.productId, g);
  }
  let msg = "Hello, I want to order the following items:\n\n";
  let i = 1;
  for (const [, g] of grouped) {
    const colorStr = g.colors.map((c) => `${c.color} (${c.qty})`).join(", ");
    msg += `${i}. ${g.name}\n   Colors: ${colorStr}\n   Price: ₦${g.price.toLocaleString("en-NG")}\n\n`;
    i++;
  }
  msg += `Total: ₦${total.toLocaleString("en-NG")}\n\nName:\nAddress:`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}
