"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ensureGsapPlugins, gsap } from "@/lib/gsap";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    ensureGsapPlugins();
    const tl = gsap.timeline({
      onComplete: () => {
        setHidden(true);
        onComplete();
      },
    });

    tl.to(".loader-logo", {
      scale: 1.2,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
    })
      .to(".loader", { opacity: 0, duration: 0.6, delay: 0.8 })
      .set(".loader", { display: "none" });
  }, [onComplete]);

  if (hidden) return null;

  return (
    <div className="loader fixed inset-0 z-[120] flex items-center justify-center bg-[#0D0D0D]">
      <div className="loader-logo relative opacity-60">
        <div className="absolute inset-0 blur-2xl bg-[#5BBF1A]/40 rounded-full" />
        <Image
          src="/logo.jpeg"
          alt="Codefynix logo"
          width={160}
          height={160}
          className="relative z-10 rounded-xl"
          priority
        />
      </div>
    </div>
  );
}
