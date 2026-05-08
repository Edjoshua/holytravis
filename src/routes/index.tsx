import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductSection } from "@/components/ProductSection";
import { BestSelling } from "@/components/BestSelling";
import { PromoBanner } from "@/components/PromoBanner";
import { Trends } from "@/components/Trends";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Holy Travis Luxury — Stylish Fashion for Daily Life" },
      { name: "description", content: "Holy Travis Luxury Fashion House. Shop hoodies, tees, joggers, and accessories. Order via WhatsApp checkout." },
      { property: "og:title", content: "Holy Travis Luxury Fashion House" },
      { property: "og:description", content: "Luxury everyday wear — crafted for those who demand more." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ProductSection />
        <BestSelling />
        <PromoBanner />
        <Trends />
        <Testimonials />
      </main>
      <Footer />
      <CartDrawer />
      <Toaster position="top-center" />
    </div>
  );
}
