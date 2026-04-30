"use client";

import Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export function initLenis() {
  if (typeof window === "undefined" || window.__lenis) {
    return window.__lenis;
  }

  const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    touchMultiplier: 1.3,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  window.__lenis = lenis;

  return lenis;
}
