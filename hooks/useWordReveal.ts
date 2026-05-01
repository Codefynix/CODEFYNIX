"use client";

import { useEffect } from "react";

export function useWordReveal(selector: string) {
  useEffect(() => {
    const headings = document.querySelectorAll<HTMLElement>(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const inners = entry.target.querySelectorAll<HTMLElement>(".word-inner");
          inners.forEach((element, index) => {
            setTimeout(() => element.classList.add("in"), index * 80);
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2 },
    );

    headings.forEach((heading) => {
      if (heading.dataset.wordReveal) return;
      heading.dataset.wordReveal = "done";

      const text = heading.innerText;
      heading.innerHTML = text
        .split(" ")
        .map(
          (word) =>
            `<span class="word-wrap"><span class="word-inner">${word}</span></span>`,
        )
        .join(" ");

      observer.observe(heading);
    });

    return () => observer.disconnect();
  }, [selector]);
}
