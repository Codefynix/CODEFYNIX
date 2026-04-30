"use client";

import { useState } from "react";
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

  return (
    <>
      <Loader onComplete={() => setLoaded(true)} />
      <Hero ready={loaded} />
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
