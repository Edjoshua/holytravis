import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import logo from "@/assets/logo.png";

export function Navbar() {
  const { open, totalCount } = useCart();
  const count = totalCount();
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/60">
      <div className="container-luxe flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Holy Travis Luxury" className="h-10 w-10 rounded-full object-cover ring-1 ring-gold/40" />
          <div className="leading-tight">
            <div className="font-serif text-base font-semibold tracking-wide">HOLY TRAVIS</div>
            <div className="text-[10px] tracking-[0.3em] text-gold uppercase">Luxury</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-sm">
          <a href="#home" className="text-foreground font-medium">Home</a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition">About</a>
          <a href="#shop" className="text-muted-foreground hover:text-foreground transition">Shop</a>
          <a href="#collection" className="text-muted-foreground hover:text-foreground transition">Collection</a>
        </nav>
        <button
          onClick={open}
          aria-label="Open cart"
          className="relative p-2 rounded-full hover:bg-muted transition"
        >
          <ShoppingBag className="h-5 w-5" />
          {count > 0 && (
            <span className="absolute -top-1 -right-1 bg-gold text-white text-[10px] font-semibold rounded-full h-5 min-w-5 px-1 flex items-center justify-center">
              {count}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
