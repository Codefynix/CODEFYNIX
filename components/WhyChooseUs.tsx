"use client";

import { useEffect, useRef } from "react";
import {
  FaBriefcase,
  FaPeopleGroup,
  FaStar,
  FaHourglassHalf,
} from "react-icons/fa6";
import { ensureGsapPlugins, gsap } from "@/lib/gsap";

type Stat = {
  label: string;
  value: number;
  suffix: string;
  icon: React.ComponentType<{ className?: string }>;
  caption: string;
};

const stats: Stat[] = [
  {
    label: "Projects Completed",
    value: 20,
    suffix: "+",
    icon: FaBriefcase,
    caption: "Delivered across web, CRM, and automation.",
  },
  {
    label: "Happy Clients",
    value: 20,
    suffix: "+",
    icon: FaPeopleGroup,
    caption: "Brands trusting us with their digital growth.",
  },
  {
    label: "Five-Star Reviews",
    value: 20,
    suffix: "+",
    icon: FaStar,
    caption: "Consistently rated for quality and delivery.",
  },
  {
    label: "Years of Experience",
    value: 2,
    suffix: "+",
    icon: FaHourglassHalf,
    caption: "Shipping production-grade systems since day one.",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    ensureGsapPlugins();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stat-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
          },
        },
      );

      gsap.utils
        .toArray<HTMLElement>(".stat-counter")
        .forEach((node) => {
          const target = Number(node.dataset.target ?? "0");
          const counter = { value: 0 };
          gsap.to(counter, {
            value: target,
            duration: 1.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: node,
              start: "top 85%",
              once: true,
            },
            onUpdate: () => {
              node.textContent = String(Math.round(counter.value));
            },
          });
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why-us-home"
      ref={sectionRef}
      className="section-wrap relative overflow-hidden bg-[#F5F5F5]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(91,191,26,0.10),transparent_45%),radial-gradient(circle_at_10%_85%,rgba(125,214,58,0.08),transparent_45%)]" />

      <div className="section-inner relative grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="section-tag">Why Choose Us</p>
          <h2 className="section-title word-reveal-heading">
            Numbers That Reflect Real Impact
          </h2>
          <p className="mt-4 max-w-xl font-body text-[#666666]">
            We combine strategic thinking, modern engineering, and creative execution
            to ship digital products that move the needle. Here&apos;s a quick look at
            what we&apos;ve delivered so far.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="inline-flex h-2 w-2 rounded-full bg-[#5BBF1A]" />
            <span className="font-accent text-xs uppercase tracking-[0.22em] text-[#3D8A0E]">
              Trusted by ambitious brands worldwide
            </span>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <article
                  key={stat.label}
                  className="stat-card group relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#5BBF1A] hover:shadow-[0_14px_30px_rgba(91,191,26,0.16)] sm:p-5"
                  data-hover
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-5 -top-5 h-20 w-20 rounded-full bg-[#5BBF1A]/10 blur-2xl transition duration-500 group-hover:bg-[#5BBF1A]/25"
                  />

                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#5BBF1A]/30 bg-[#5BBF1A]/10 text-[#3D8A0E] transition duration-300 group-hover:bg-[#5BBF1A] group-hover:text-white">
                      <Icon className="text-base" />
                    </div>
                    <p className="flex items-end gap-0.5 font-heading font-bold leading-none text-[#111111]">
                      <span
                        className="stat-counter"
                        data-target={stat.value}
                        style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.1rem)" }}
                      >
                        0
                      </span>
                      <span
                        className="text-[#5BBF1A]"
                        style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)" }}
                      >
                        {stat.suffix}
                      </span>
                    </p>
                  </div>

                  <h3 className="mt-3 font-heading text-sm font-semibold text-[#111111] sm:text-base">
                    {stat.label}
                  </h3>

                  <span className="mt-3 block h-[2px] w-8 rounded-full bg-linear-to-r from-[#5BBF1A] to-[#7DD63A] opacity-70 transition duration-300 group-hover:w-14" />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
