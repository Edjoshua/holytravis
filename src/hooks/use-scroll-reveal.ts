import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll("main section");
    sections.forEach((sec) => {
      if (!sec.classList.contains("reveal")) sec.classList.add("reveal");
      sec.querySelectorAll<HTMLElement>('[class*="grid-cols"]').forEach((g) => {
        if (g.children.length > 1) g.classList.add("reveal-stagger");
      });
      sec.querySelectorAll("h1, h2").forEach((h) => h.classList.add("reveal-left"));
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document
      .querySelectorAll(".reveal,.reveal-left,.reveal-scale,.reveal-stagger")
      .forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);
}
