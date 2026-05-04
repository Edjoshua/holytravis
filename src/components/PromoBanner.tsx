import promo from "@/assets/promo-gallery.jpg";

export function PromoBanner() {
  return (
    <section className="container-luxe py-12">
      <div className="grid md:grid-cols-5 rounded-3xl overflow-hidden">
        <div className="md:col-span-2 bg-beige-soft p-6 flex items-center justify-center">
          <div className="rounded-3xl overflow-hidden w-full max-w-sm aspect-[4/3]">
            <img src={promo} alt="Holy Travis lifestyle" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="md:col-span-3 bg-beige p-10 md:p-16 flex flex-col justify-center">
          <h3 className="font-serif text-4xl md:text-5xl text-white">Luxury at it Best</h3>
          <p className="font-serif text-2xl mt-3 text-white/90">Holy Travis</p>
          <a href="#shop" className="mt-6 inline-flex bg-white text-ink rounded-full px-6 py-3 text-sm font-medium w-fit hover:bg-ink hover:text-white transition">
            Buy now
          </a>
        </div>
      </div>
    </section>
  );
}
