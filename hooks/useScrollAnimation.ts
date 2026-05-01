"use client";

import { useEffect } from "react";

export function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          const delay = Number(element.dataset.delay ?? 0);
          setTimeout(() => element.classList.add("in"), delay);
          observer.unobserve(element);
        });
      },
      { threshold: 0.13, rootMargin: "0px 0px -32px 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}
