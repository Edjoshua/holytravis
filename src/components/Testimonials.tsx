import { Quote, Star } from "lucide-react";
import a1 from "@/assets/avatar-1.jpg";
import a2 from "@/assets/avatar-2.jpg";

const items = [
  { name: "Iya Hectoria", rating: 5, avatar: a1, text: "I've never been disappointed with my purchases from Holy Travis. The clothing is not only fashionable but also made with excellent craftsmanship." },
  { name: "Sarah", rating: 4.8, avatar: a2, text: "Holy Travis has become my go-to online store for all apparel. The quality of the clothing is exceptional, and the prices are reasonable." },
];

export function Testimonials() {
  return (
    <section className="bg-beige-soft py-16 md:py-24">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-4xl md:text-5xl">Hear what our happy customers say</h2>
          <p className="mt-3 text-muted-foreground text-sm">
            Read the testimonials below to see what they have to say about their experience with our luxury clothing store.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((t) => (
            <div key={t.name} className="bg-beige/40 rounded-2xl p-8 relative">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-gold/40" />
              <p className="text-foreground/90 leading-relaxed">{t.text}</p>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} loading="lazy" className="h-10 w-10 rounded-full object-cover" />
                  <span className="font-medium">{t.name}</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <span className="font-medium">{t.rating}</span>
                  <Star className="h-4 w-4 fill-gold text-gold" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
