"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  FaSearchengin,
  FaLaptopCode,
  FaUsersGear,
  FaWhatsapp,
  FaShopify,
  FaCartShopping,
  FaPalette,
  FaArrowRight,
} from "react-icons/fa6";
import { ensureGsapPlugins, gsap, ScrollTrigger } from "@/lib/gsap";

type ServiceItem = {
  slug: string;
  name: string;
  description: string;
  tag: string;
  accent: string;
  icon: React.ComponentType<{ className?: string }>;
};

const items: ServiceItem[] = [
  {
    slug: "seo-optimized-websites",
    name: "SEO Optimized Websites",
    description:
      "High-ranking, fast websites engineered for visibility, performance, and measurable growth.",
    tag: "Search & Performance",
    accent: "#7DD63A",
    icon: FaSearchengin,
  },
  {
    slug: "web-application-development",
    name: "Web Apps",
    description:
      "Scalable web applications built with Next.js and modern stacks for product-grade reliability.",
    tag: "Engineering",
    accent: "#5BBF1A",
    icon: FaLaptopCode,
  },
  {
    slug: "crm-application-development",
    name: "CRM Services",
    description:
      "Custom CRM systems that streamline pipelines, customer data, and sales velocity.",
    tag: "Operations",
    accent: "#9AE764",
    icon: FaUsersGear,
  },
  {
    slug: "whatsapp-automation-systems",
    name: "WhatsApp Automation",
    description:
      "Smart bots, campaign automation, and CRM-linked messaging for high response speed.",
    tag: "Automation",
    accent: "#7DD63A",
    icon: FaWhatsapp,
  },
  {
    slug: "shopify-development",
    name: "Shopify Development",
    description:
      "Custom Shopify storefronts, themes, and headless commerce builds optimized to sell.",
    tag: "Commerce",
    accent: "#5BBF1A",
    icon: FaShopify,
  },
  {
    slug: "ecommerce-development",
    name: "E-Commerce",
    description:
      "High-converting storefronts with secure checkout, inventory, and growth analytics.",
    tag: "Commerce",
    accent: "#9AE764",
    icon: FaCartShopping,
  },
  {
    slug: "ui-ux-design",
    name: "UI / UX Design",
    description:
      "Research-led, intuitive interfaces designed for conversion and product delight.",
    tag: "Design",
    accent: "#7DD63A",
    icon: FaPalette,
  },
];

const mobileSectionTouchStyle: React.CSSProperties = {
  WebkitOverflowScrolling: "touch",
  touchAction: "pan-y",
  willChange: "auto",
  transform: "translateZ(0)",
};

const mobileStackStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
};

export default function Services() {
  // Mobile detection (breakpoint <768 / Tailwind `md`): matches
  // `typeof window !== "undefined" && window.innerWidth < 768` — kept in `isMobile` state + resize listener.

  const sectionRef = useRef<HTMLElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [viewportReady, setViewportReady] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile =
        typeof window !== "undefined" && window.innerWidth < 768;
      setIsMobile(isMobile);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    setViewportReady(true);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!viewportReady) return;

    ensureGsapPlugins();

    if (isMobile) {
      ScrollTrigger.normalizeScroll(false);
      return;
    }

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".service-card");
      const indicators = gsap.utils.toArray<HTMLElement>(".service-indicator");
      if (!cards.length) return;

      gsap.set(cards[0], { yPercent: 0, opacity: 1, scale: 1 });
      cards.slice(1).forEach((card) => {
        gsap.set(card, { yPercent: 100, opacity: 1, scale: 1 });
      });
      indicators.forEach((dot, i) => {
        gsap.set(dot, {
          backgroundColor: i === 0 ? "#7DD63A" : "rgba(255,255,255,0.18)",
        });
      });

      const stepsCount = cards.length - 1;
      const stepDuration = 1;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${stepsCount * window.innerHeight}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, idx) => {
        if (idx === 0) return;

        const prev = cards[idx - 1];
        const startAt = (idx - 1) * stepDuration;

        tl.to(
          prev,
          {
            yPercent: -8,
            scale: 0.96,
            opacity: 0,
            ease: "power2.inOut",
            duration: stepDuration,
          },
          startAt,
        );

        tl.to(
          card,
          {
            yPercent: 0,
            ease: "power3.out",
            duration: stepDuration,
          },
          startAt,
        );

        tl.call(
          () => {
            indicators.forEach((dot, i) => {
              gsap.to(dot, {
                backgroundColor: i === idx ? "#7DD63A" : "rgba(255,255,255,0.18)",
                duration: 0.3,
              });
            });
          },
          [],
          startAt + stepDuration * 0.5,
        );
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [viewportReady, isMobile]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-[#0D0D0D]"
      style={isMobile ? mobileSectionTouchStyle : undefined}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(91,191,26,0.18),transparent_45%),radial-gradient(circle_at_85%_75%,rgba(125,214,58,0.12),transparent_45%)]" />

      {/* Mobile: vertical stack, no scroll-linked animation */}
      <div
        className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 md:hidden"
        style={mobileStackStyle}
      >
        {items.map((service, idx) => {
          const MobileIcon = service.icon;
          return (
            <article
              key={service.slug}
              className="relative flex w-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(160deg,#171923_0%,#0F1118_100%)] p-6 shadow-[0_30px_70px_rgba(0,0,0,0.5)] sm:p-9"
              style={{ willChange: "auto" }}
              data-hover
            >
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-30 blur-3xl"
              style={{ background: service.accent, willChange: "auto" }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-20 blur-3xl"
              style={{ background: service.accent, willChange: "auto" }}
              aria-hidden
            />

            <div className="relative flex items-start justify-between gap-6">
              <div>
                <span className="font-accent text-xs uppercase tracking-[0.22em] text-zinc-500">
                  {service.tag}
                </span>
                <p
                  className="mt-2 font-heading font-bold leading-none"
                  style={{
                    color: `${service.accent}40`,
                    fontSize: "clamp(3rem, 7vw, 6rem)",
                    willChange: "auto",
                  }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </p>
              </div>

              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 sm:h-20 sm:w-20"
                style={{ color: service.accent, willChange: "auto" }}
                aria-hidden
              >
                <MobileIcon className="text-2xl sm:text-3xl" />
              </div>
            </div>

            <div className="relative flex max-w-3xl flex-1 flex-col justify-center">
              <p className="font-accent text-xs uppercase tracking-[0.22em] text-[#7DD63A]">
                Service {String(idx + 1).padStart(2, "0")} /{" "}
                {String(items.length).padStart(2, "0")}
              </p>
              <h3
                className="mt-3 font-heading font-semibold text-white"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.75rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.05,
                  willChange: "auto",
                }}
              >
                {service.name}
              </h3>
              <p className="mt-4 font-body text-base text-zinc-400 sm:text-lg">
                {service.description}
              </p>

              <Link
                href="/#contact"
                data-hover
                className="mt-6 inline-flex w-fit items-center gap-3 rounded-full border border-white/15 px-5 py-2.5 font-body text-sm font-semibold text-white transition hover:border-[#7DD63A] hover:bg-[#7DD63A] hover:text-black sm:px-6 sm:py-3 sm:text-base"
              >
                Get Quote
                <FaArrowRight />
              </Link>
            </div>

            <div className="relative flex items-center justify-between text-xs text-zinc-500 sm:text-sm">
              <span className="font-accent uppercase tracking-[0.18em]">Codefynix Services</span>
              <span className="font-accent uppercase tracking-[0.18em]">
                {idx === items.length - 1 ? "End of services" : "Swipe for more"}
              </span>
            </div>
          </article>
          );
        })}
      </div>

      {/* Desktop (md+): unchanged scroll-stack animation */}
      <div className="relative hidden md:block">
        <div className="pointer-events-none absolute left-1/2 top-24 z-30 flex -translate-x-1/2 items-center gap-2 sm:top-28">
          {items.map((service, idx) => (
            <span
              key={service.slug}
              aria-hidden
              className="service-indicator h-1.5 w-6 rounded-full"
              style={{
                backgroundColor: idx === 0 ? "#7DD63A" : "rgba(255,255,255,0.18)",
                transition: "background-color 0.3s",
              }}
            />
          ))}
        </div>

        <div className="relative z-20 flex h-screen items-center justify-center overflow-hidden px-4 pt-28 pb-10 sm:px-6 sm:pt-32 sm:pb-12 lg:px-8">
          <div className="relative h-full w-full max-w-7xl">
            {items.map((service, idx) => {
              const Icon = service.icon;
              const number = String(idx + 1).padStart(2, "0");
              return (
                <article
                  key={service.slug}
                  className="service-card absolute inset-0 flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(160deg,#171923_0%,#0F1118_100%)] p-6 shadow-[0_30px_70px_rgba(0,0,0,0.5)] sm:p-9 lg:p-12"
                  style={{ zIndex: idx + 1 }}
                  data-hover
                >
                  <div
                    className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-30 blur-3xl"
                    style={{ background: service.accent }}
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-20 blur-3xl"
                    style={{ background: service.accent }}
                    aria-hidden
                  />

                  <div className="relative flex items-start justify-between gap-6">
                    <div>
                      <span className="font-accent text-xs uppercase tracking-[0.22em] text-zinc-500">
                        {service.tag}
                      </span>
                      <p
                        className="mt-2 font-heading font-bold leading-none"
                        style={{
                          color: `${service.accent}40`,
                          fontSize: "clamp(3rem, 7vw, 6rem)",
                        }}
                      >
                        {number}
                      </p>
                    </div>

                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 sm:h-20 sm:w-20"
                      style={{ color: service.accent }}
                      aria-hidden
                    >
                      <Icon className="text-2xl sm:text-3xl" />
                    </div>
                  </div>

                  <div className="relative flex max-w-3xl flex-1 flex-col justify-center">
                    <p className="font-accent text-xs uppercase tracking-[0.22em] text-[#7DD63A]">
                      Service {number} / {String(items.length).padStart(2, "0")}
                    </p>
                    <h3
                      className="mt-3 font-heading font-semibold text-white"
                      style={{
                        fontSize: "clamp(2rem, 5vw, 3.75rem)",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.05,
                      }}
                    >
                      {service.name}
                    </h3>
                    <p className="mt-4 font-body text-base text-zinc-400 sm:text-lg">
                      {service.description}
                    </p>

                    <Link
                      href="/#contact"
                      data-hover
                      className="mt-6 inline-flex w-fit items-center gap-3 rounded-full border border-white/15 px-5 py-2.5 font-body text-sm font-semibold text-white transition hover:border-[#7DD63A] hover:bg-[#7DD63A] hover:text-black sm:px-6 sm:py-3 sm:text-base"
                    >
                      Get Quote
                      <FaArrowRight />
                    </Link>
                  </div>

                  <div className="relative flex items-center justify-between text-xs text-zinc-500 sm:text-sm">
                    <span className="font-accent uppercase tracking-[0.18em]">
                      Codefynix Services
                    </span>
                    <span className="font-accent uppercase tracking-[0.18em]">
                      {idx === items.length - 1 ? "End of services" : "Scroll to continue"}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
