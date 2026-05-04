import heroModel from "@/assets/hero-model.jpg";
import heroShorts from "@/assets/hero-shorts.jpg";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="container-luxe pt-12 md:pt-20 pb-16 md:pb-24">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground">
            Find stylish<br />clothes for<br />your daily life
          </h1>
          <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
            Shop our wide selection of stylish luxury clothing and accessories
            in our online store crafted by Holy Travis.
          </p>
          <a href="#shop" className="btn-dark mt-8 inline-flex">Shop now</a>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2">
              <div className="h-2 w-6 rounded-full bg-gold" />
              <div className="h-2 w-2 rounded-full bg-border" />
              <div className="h-2 w-2 rounded-full bg-border" />
            </div>
            <div className="flex items-center gap-3 ml-4">
              <Sparkles className="h-5 w-5 text-gold" />
              <div>
                <div className="font-serif text-lg font-semibold">20K+</div>
                <div className="text-xs text-muted-foreground">Happy customers</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto w-full max-w-md aspect-[4/5] overflow-hidden bg-beige" style={{ borderRadius: "9999px 9999px 1.5rem 1.5rem" }}>
            <img src={heroModel} alt="Model wearing Holy Travis luxury cap and tee" className="w-full h-full object-cover" width={1024} height={1280} />
          </div>
          <div className="absolute bottom-8 -left-2 md:left-8 w-32 md:w-40 aspect-[4/5] rounded-2xl overflow-hidden ring-4 ring-background shadow-[var(--shadow-card)] bg-white">
            <img src={heroShorts} alt="Luxury white shorts" loading="lazy" className="w-full h-full object-cover" width={512} height={640} />
          </div>
          <Sparkles className="absolute top-4 right-4 h-6 w-6 text-gold" />
        </div>
      </div>
    </section>
  );
}
