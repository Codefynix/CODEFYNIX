"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { ensureGsapPlugins, gsap } from "@/lib/gsap";

const slides = [
  {
    tag: "Innovative IT, Real Results.",
    title: "Premium IT Solutions, Crafted for You",
    sub: "We build cutting-edge digital products that drive real business growth.",
  },
  {
    tag: "Code. Create. Automate.",
    title: "Smart Web & App Development for Modern Businesses",
    sub: "From dynamic websites to WhatsApp automation — we power your digital journey.",
  },
  {
    tag: "Your Digital Growth Partner",
    title: "Your Trusted Partner in Tech & Strategy",
    sub: "Graphic design, SEO, CRM, video editing — all under one roof at Codefynix.",
  },
];

export default function Hero({ ready }: { ready: boolean }) {
  const [active, setActive] = useState(0);
  const current = useMemo(() => slides[active], [active]);

  useEffect(() => {
    if (!ready) return;
    ensureGsapPlugins();
    gsap.fromTo(
      ".hero-content > *",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.7,
        ease: "power2.out",
      },
    );
  }, [ready, active]);

  const goUp = () => setActive((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const goDown = () => setActive((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0D0D0D] pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(91,191,26,0.24),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(125,214,58,0.14),transparent_40%)]" />
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:px-8">
        <div className="hero-content relative z-10 max-w-4xl">
          <p className="hero-tag font-accent text-sm uppercase tracking-[0.25em] text-[#5BBF1A]">
            {current.tag}
          </p>
          {active === 0 ? (
            <h1 className="hero-h1 mt-5 font-heading text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              {current.title}
            </h1>
          ) : (
            <h2 className="hero-h1 mt-5 font-heading text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              {current.title}
            </h2>
          )}
          <p className="hero-sub mt-5 max-w-2xl font-body text-lg text-zinc-300">{current.sub}</p>
          <div className="hero-btns mt-8 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="rounded-full bg-[#5BBF1A] px-6 py-3 font-body font-semibold text-white transition hover:bg-[#3D8A0E]"
            >
              Discover More
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-white px-6 py-3 font-body font-semibold text-white transition hover:border-[#5BBF1A] hover:text-[#5BBF1A]"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute right-4 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-2 md:right-8">
        <button
          onClick={goUp}
          aria-label="Previous hero slide"
          className="rounded-full border border-white/30 bg-black/30 p-3 text-white transition hover:border-[#5BBF1A] hover:text-[#5BBF1A]"
        >
          <FaArrowUp />
        </button>
        <button
          onClick={goDown}
          aria-label="Next hero slide"
          className="rounded-full border border-white/30 bg-black/30 p-3 text-white transition hover:border-[#5BBF1A] hover:text-[#5BBF1A]"
        >
          <FaArrowDown />
        </button>
      </div>
    </section>
  );
}
