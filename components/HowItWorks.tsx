"use client";

import { useEffect } from "react";
import { FiClipboard, FiCode, FiSearch, FiTarget } from "react-icons/fi";
import { ensureGsapPlugins, gsap } from "@/lib/gsap";

const steps = [
  {
    num: "STEP - 01",
    title: "Select a Project",
    description: "We discuss your goals and identify the right scope.",
    icon: FiTarget,
  },
  {
    num: "STEP - 02",
    title: "Project Analysis",
    description: "We research, plan, and architect the perfect solution.",
    icon: FiSearch,
  },
  {
    num: "STEP - 03",
    title: "Start Development",
    description: "Our team builds, tests, and iterates with precision.",
    icon: FiCode,
  },
  {
    num: "STEP - 04",
    title: "Deliver Results",
    description: "We launch, monitor, and provide ongoing support.",
    icon: FiClipboard,
  },
];

export default function HowItWorks() {
  useEffect(() => {
    ensureGsapPlugins();

    gsap.fromTo(
      ".process-step",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.14,
        duration: 0.6,
        scrollTrigger: {
          trigger: "#process",
          start: "top 70%",
        },
      },
    );

    gsap.fromTo(
      ".process-line",
      { strokeDashoffset: 1000 },
      {
        strokeDashoffset: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#process",
          start: "top 72%",
        },
      },
    );
  }, []);

  return (
    <section id="process" className="section-wrap bg-white">
      <div className="section-inner">
        <p className="section-tag">Our Process</p>
        <h2 className="section-title word-reveal-heading">How It Works!</h2>

        <div className="relative mt-10">
          <svg
            className="absolute left-0 top-8 hidden h-12 w-full lg:block"
            viewBox="0 0 1200 80"
            fill="none"
            aria-hidden="true"
          >
            <path
              className="process-line"
              d="M40 40 H1160"
              stroke="#5BBF1A"
              strokeWidth="3"
              strokeDasharray="1000"
              strokeDashoffset="1000"
            />
          </svg>
          <div className="grid gap-6 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.num}
                  className="process-step reveal relative rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
                  data-hover
                >
                  <p className="font-accent text-xs uppercase tracking-[0.2em] text-[#5BBF1A]">{step.num}</p>
                  <Icon className="mt-4 text-3xl text-[#5BBF1A]" />
                  <h3 className="mt-4 font-heading text-xl font-semibold text-[#111111]">{step.title}</h3>
                  <p className="mt-2 font-body text-sm text-[#666666]">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
