import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-ink text-white/80 py-12">
      <div className="container-luxe grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="Holy Travis" className="h-10 w-10 rounded-full object-cover" />
            <div>
              <div className="font-serif text-base text-white">HOLY TRAVIS</div>
              <div className="text-[10px] tracking-[0.3em] text-gold uppercase">Luxury</div>
            </div>
          </div>
          <p className="text-sm mt-4 max-w-xs">Luxury fashion house — est. 2024. Crafted for those who demand more.</p>
        </div>
        <div>
          <h4 className="text-white font-medium mb-3">Shop</h4>
          <ul className="space-y-2 text-sm"><li>Tops</li><li>Bottoms</li><li>Wear</li></ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-3">Company</h4>
          <ul className="space-y-2 text-sm"><li>About</li><li>Collection</li><li>Contact</li></ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-3">Contact</h4>
          <p className="text-sm">WhatsApp: +44 7951 349655</p>
        </div>
      </div>
      <div className="container-luxe mt-10 pt-6 border-t border-white/10 text-xs text-white/50 text-center">
        © {new Date().getFullYear()} Holy Travis Luxury. All rights reserved.
      </div>
    </footer>
  );
}
