"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ensureGsapPlugins, gsap } from "@/lib/gsap";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [hidden, setHidden] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const logoWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const logoWrap = logoWrapRef.current;
    if (!root || !logoWrap) return;

    ensureGsapPlugins();
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setHidden(true);
          onComplete();
        },
      });

      tl.to(logoWrap, {
        scale: 1.2,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      }).to(root, { opacity: 0, duration: 0.6, delay: 0.8 });
    });

    return () => ctx.revert();
  }, [onComplete]);

  if (hidden) return null;

  return (
    <div
      ref={rootRef}
      className="pointer-events-none fixed inset-0 z-120 flex items-center justify-center bg-[#0D0D0D]"
    >
      <div ref={logoWrapRef} className="relative opacity-60">
        <div className="absolute inset-0 rounded-full bg-[#5BBF1A]/40 blur-2xl" />
        <Image
          src="/LOGO-Black-png.png"
          alt="Codefynix logo"
          width={150}
          height={150}
          className="relative z-10 rounded-xl"
          style={{ width: "auto", height: "auto", maxWidth: 150, maxHeight: 150 }}
          priority
        />
      </div>
    </div>
  );
}
