"use client";

import Image from "next/image";
import { useEffect } from "react";
import { ensureGsapPlugins, gsap } from "@/lib/gsap";

const skills = [
  { label: "Web Design & Development", value: 92 },
  { label: "SEO & Digital Marketing", value: 88 },
  { label: "WhatsApp Automation", value: 85 },
  { label: "Graphic Design & Video", value: 80 },
];

export default function WhyChooseUs() {
  useEffect(() => {
    ensureGsapPlugins();
    gsap.utils.toArray<HTMLElement>(".skill-progress").forEach((bar) => {
      const target = bar.dataset.width ?? "0";
      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: `${target}%`,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#why-us-home",
            start: "top 70%",
          },
        },
      );
    });
  }, []);

  return (
    <section id="why-us-home" className="section-wrap bg-[#F5F5F5]">
      <div className="section-inner grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="section-tag">Why Choose Us</p>
          <h2 className="section-title word-reveal-heading">IT Solutions Designed to Drive Results</h2>
          <p className="mt-4 max-w-xl font-body text-[#666666]">
            We combine strategic thinking, modern engineering, and creative execution to help
            businesses ship better digital products, improve customer experience, and scale
            sustainably.
          </p>

          <div className="mt-7 space-y-5">
            {skills.map((skill) => (
              <div key={skill.label} className="skill-bar-wrap">
                <div className="mb-2 flex items-center justify-between">
                  <p className="font-body text-sm font-semibold text-[#111111]">{skill.label}</p>
                  <p className="font-body text-sm text-[#3D8A0E]">{skill.value}%</p>
                </div>
                <div className="h-2 rounded-full bg-zinc-200">
                  <div
                    data-width={skill.value}
                    data-target={`${skill.value}%`}
                    className="skill-progress skill-bar-fill h-full rounded-full bg-[#5BBF1A]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative col-span-2 h-48 overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
              alt="Codefynix project planning session"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <div className="relative h-52 overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80"
              alt="Developer writing code at workstation"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 20vw"
            />
          </div>
          <div className="relative mt-6 h-52 overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
              alt="Codefynix team collaboration"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 20vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
