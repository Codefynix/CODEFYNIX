"use client";

import { useEffect, useRef, useState } from "react";
import { ensureGsapPlugins, gsap } from "@/lib/gsap";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useWordReveal } from "@/hooks/useWordReveal";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import CTABanner from "@/components/CTABanner";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);

  useScrollAnimation();
  useWordReveal(".word-reveal-heading");

  useEffect(() => {
    ensureGsapPlugins();
    const ctx = gsap.context(() => {
      gsap.from(".hero-word", {
        y: "115%",
        opacity: 0,
        stagger: 0.07,
        duration: 0.85,
        ease: "power4.out",
        delay: 0.5,
      });
      gsap.from(".hero-sub-text", {
        opacity: 0,
        y: 28,
        duration: 0.9,
        delay: 1.2,
        ease: "power3.out",
      });
      gsap.from(".hero-cta-group", {
        opacity: 0,
        scale: 0.88,
        duration: 0.7,
        delay: 1.5,
        ease: "back.out(1.5)",
      });
      gsap.from(".hero-badge", {
        opacity: 0,
        x: -28,
        duration: 0.7,
        delay: 1,
        ease: "power3.out",
      });

      gsap.to(".hero-content-wrap", {
        y: -110,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.6,
        },
      });

      gsap.to(".hero-glow", {
        scale: 1.35,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2.2,
        },
      });

      gsap.from(".service-card", {
        y: 90,
        opacity: 0,
        stagger: { amount: 0.7, from: "start" },
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#services",
          start: "top 78%",
          end: "center 50%",
          scrub: 1.2,
        },
      });

      gsap.to(".about-img-back", {
        y: -65,
        ease: "none",
        scrollTrigger: {
          trigger: "#about",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(".about-img-front", {
        y: -130,
        ease: "none",
        scrollTrigger: {
          trigger: "#about",
          start: "top bottom",
          end: "bottom top",
          scrub: 2.2,
        },
      });

      document.querySelectorAll<HTMLElement>(".skill-bar-fill").forEach((bar) => {
        const target = bar.dataset.target ?? "80%";
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: target,
            ease: "none",
            scrollTrigger: {
              trigger: bar.closest(".skill-bar-wrap") ?? bar,
              start: "top 80%",
              end: "bottom 40%",
              scrub: 1.5,
            },
          },
        );
      });

      gsap.from(".process-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: { trigger: "#process", start: "top 72%" },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Loader onComplete={() => setLoaded(true)} />
      <Hero ready={loaded} heroRef={heroRef} />
      <Services />
      <About />
      <Projects />
      <CTABanner />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <Blog />
    </>
  );
}
