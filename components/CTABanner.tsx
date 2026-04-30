"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { ensureGsapPlugins, gsap } from "@/lib/gsap";

export default function CTABanner() {
  useEffect(() => {
    ensureGsapPlugins();
    gsap.to(".cta-parallax", {
      yPercent: -12,
      ease: "none",
      scrollTrigger: {
        trigger: "#cta-home",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section id="cta-home" className="section-wrap bg-[#0D0D0D] py-16">
      <div className="section-inner grid items-center gap-8 rounded-3xl border border-[#1d1d1d] bg-[#131313] p-8 lg:grid-cols-2 lg:p-10">
        <div>
          <h2 className="font-heading text-3xl font-bold text-white lg:text-4xl">
            From Planning to Launch - We&apos;ve Got You Covered.
          </h2>
          <p className="mt-4 max-w-2xl font-body text-zinc-300">
            Whether it&apos;s a startup idea or an enterprise project, our expert team ensures
            seamless execution, every step of the way.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-full bg-[#5BBF1A] px-6 py-3 font-semibold text-white transition hover:bg-[#3D8A0E]"
          >
            Contact With Us →
          </Link>
        </div>
        <div className="relative h-72 overflow-hidden rounded-2xl">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1300&q=80"
            alt="Codefynix technology consulting team"
            fill
            className="cta-parallax object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          <div className="absolute inset-0 bg-[#5BBF1A]/20" />
        </div>
      </div>
    </section>
  );
}
