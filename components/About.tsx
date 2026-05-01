"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FiShield, FiTrendingUp } from "react-icons/fi";
import { ensureGsapPlugins, gsap } from "@/lib/gsap";

export default function About() {
  useEffect(() => {
    ensureGsapPlugins();
    gsap.fromTo(
      ".about-images",
      { x: -60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: { trigger: "#about", start: "top 70%" },
      },
    );
    gsap.fromTo(
      ".about-content",
      { x: 60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: { trigger: "#about", start: "top 70%" },
      },
    );
  }, []);

  return (
    <section id="about" className="section-wrap bg-white">
      <div className="section-inner grid items-center gap-10 lg:grid-cols-5">
        <div className="about-images reveal-left relative lg:col-span-3">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="about-img-back relative h-72 overflow-hidden rounded-2xl sm:h-80">
              <Image
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80"
                alt="Codefynix team planning project strategy"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
            </div>
            <div className="about-img-front relative mt-8 h-72 overflow-hidden rounded-2xl sm:mt-14 sm:h-80">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80"
                alt="Developers collaborating in office"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
            </div>
          </div>
          <div className="absolute bottom-3 left-3 rounded-xl bg-[#5BBF1A] px-4 py-3 text-white shadow-xl sm:bottom-6 sm:left-6">
            <p className="font-heading text-2xl font-bold">20+</p>
            <p className="font-body text-sm">Projects Delivered</p>
          </div>
        </div>

        <div className="about-content reveal-right lg:col-span-2">
          <p className="section-tag">About Us</p>
          <h2 className="section-title word-reveal-heading">Empowering Businesses with Smart Digital Solutions</h2>
          <p className="mt-5 font-body text-[#666666]">
            Codefynix helps ambitious brands launch and scale with modern websites, web apps,
            automation systems, and creative design support. We blend strategy, development, and
            growth marketing to build measurable digital outcomes that last.
          </p>
          <div className="mt-7 space-y-5">
            <article className="flex gap-4">
              <FiShield className="mt-1 text-2xl text-[#5BBF1A]" />
              <div>
                <h3 className="font-heading text-lg font-semibold text-[#111111]">Boost Operational Efficiency</h3>
                <p className="font-body text-sm text-[#666666]">
                  We automate your processes and build optimized digital systems.
                </p>
              </div>
            </article>
            <article className="flex gap-4">
              <FiTrendingUp className="mt-1 text-2xl text-[#5BBF1A]" />
              <div>
                <h3 className="font-heading text-lg font-semibold text-[#111111]">Stay Ahead with Innovation</h3>
                <p className="font-body text-sm text-[#666666]">
                  From Next.js apps to WhatsApp bots, we implement future-ready technology.
                </p>
              </div>
            </article>
          </div>
          <Link
            href="/#contact"
            data-hover
            className="mt-8 inline-flex rounded-full border border-[#5BBF1A] px-5 py-2.5 font-body font-semibold text-[#5BBF1A] transition hover:bg-[#5BBF1A] hover:text-white"
          >
            Get Quote →
          </Link>
        </div>
      </div>
    </section>
  );
}
