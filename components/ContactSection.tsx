"use client";

import { FiMail, FiMapPin, FiArrowUpRight, FiPhone } from "react-icons/fi";
import {
  SiNodedotjs,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiDotnet,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

const contactLinks = [
  {
    label: "Call us",
    value: "+91 7025152628",
    href: "tel:+917025152628",
    icon: FiPhone,
  },
  {
    label: "Email us",
    value: "codefynix@gmail.com",
    href: "mailto:codefynix@gmail.com",
    icon: FiMail,
  },
  {
    label: "Visit us",
    value: "Kochi, Kerala, India",
    href: "https://www.google.com/maps/search/?api=1&query=Kochi+Kerala+India",
    icon: FiMapPin,
    external: true,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-wrap bg-white">
      <div className="section-inner grid gap-8 rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-8 lg:grid-cols-2 lg:p-10">
        <div>
          <p className="section-tag">Contact Us</p>
          <h2 className="section-title">Let&apos;s Build Something Great Together</h2>
          <p className="mt-4 font-body text-[#666666]">
            Share your goals and project scope. Our team will get back with a tailored roadmap,
            timeline, and quote.
          </p>

          <ul className="mt-8 grid gap-3">
            {contactLinks.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    data-hover
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:border-[#5BBF1A] hover:shadow-[0_10px_30px_rgba(91,191,26,0.18)]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#5BBF1A]/25 bg-[#5BBF1A]/10 text-[#3D8A0E] transition duration-300 group-hover:bg-[#5BBF1A] group-hover:text-white">
                      <Icon className="text-lg" />
                    </span>
                    <span className="flex flex-1 flex-col">
                      <span className="font-accent text-[0.7rem] uppercase tracking-[0.18em] text-[#666666]">
                        {item.label}
                      </span>
                      <span className="font-body text-sm font-semibold text-[#111111] sm:text-base">
                        {item.value}
                      </span>
                    </span>
                    <FiArrowUpRight className="shrink-0 text-lg text-[#666666] transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#5BBF1A]" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="relative min-h-[360px] overflow-hidden rounded-2xl bg-[linear-gradient(160deg,#0D0D0D_0%,#15171F_100%)] sm:min-h-[440px] lg:min-h-[480px]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(91,191,26,0.25),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(125,214,58,0.18),transparent_45%)]"
          />

          {[
            { Icon: SiNextdotjs, top: "10%", left: "12%", delay: "0s", size: 30 },
            { Icon: SiReact, top: "18%", left: "70%", delay: "1.2s", size: 32 },
            { Icon: SiNodedotjs, top: "42%", left: "18%", delay: "0.6s", size: 32 },
            { Icon: SiDotnet, top: "55%", left: "62%", delay: "1.8s", size: 30 },
            { Icon: SiTypescript, top: "62%", left: "42%", delay: "2.4s", size: 28 },
            { Icon: SiTailwindcss, top: "78%", left: "75%", delay: "0.9s", size: 30 },
            { Icon: SiMongodb, top: "30%", left: "42%", delay: "1.5s", size: 30 },
            { Icon: SiPostgresql, top: "42%", left: "75%", delay: "2.1s", size: 26 },
          ].map(({ Icon, top, left, delay, size }, idx) => (
            <span
              key={idx}
              className="contact-tech-icon absolute flex items-center justify-center rounded-2xl border border-white/10 bg-white/4 text-white shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur"
              style={{
                top,
                left,
                width: size + 22,
                height: size + 22,
                animationDelay: delay,
              }}
              aria-hidden
            >
              <Icon style={{ fontSize: size, color: "#9AE764" }} />
            </span>
          ))}

          <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-8">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/6 px-3 py-1.5 font-accent text-[0.7rem] uppercase tracking-[0.2em] text-white backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7DD63A]/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7DD63A]" />
              </span>
              Tech Stack
            </span>
            <h3 className="mt-4 font-heading text-2xl font-semibold text-white sm:text-3xl">
              Built with modern tools.
            </h3>
            <p className="mt-2 max-w-md font-body text-sm text-white/75">
              Next.js, Node, React, .NET, TypeScript and more — engineered for speed, scale, and reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
