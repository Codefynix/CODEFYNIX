"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ensureGsapPlugins, gsap } from "@/lib/gsap";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [hidden, setHidden] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ringsRef = useRef<SVGSVGElement>(null);
  const dot1Ref = useRef<SVGCircleElement>(null);
  const dot2Ref = useRef<SVGCircleElement>(null);
  const dot3Ref = useRef<SVGCircleElement>(null);
  const scanRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!root || !wrap || !canvas) return;

    ensureGsapPlugins();

    // --- Particle canvas ---
    const ctx2d = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    const particles = Array.from({ length: 50 }, () => {
      const angle = Math.random() * Math.PI * 2;
      const r = 80 + Math.random() * 120;
      return {
        x: cx + Math.cos(angle) * r,
        y: cy + Math.sin(angle) * r,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
      };
    });

    let animId: number;
    const drawParticles = () => {
      ctx2d.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.pulse += p.pulseSpeed;
        p.x += p.vx;
        p.y += p.vy;
        const a = p.alpha * (0.5 + 0.5 * Math.sin(p.pulse));
        ctx2d.beginPath();
        ctx2d.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx2d.fillStyle = `rgba(91,191,26,${a})`;
        ctx2d.fill();
      }
      animId = requestAnimationFrame(drawParticles);
    };
    drawParticles();

    // --- GSAP context ---
    const gsapCtx = gsap.context(() => {
      const SVG_CX = 130, SVG_CY = 130;
      const orbitXY = (angleDeg: number, r: number) => ({
        x: SVG_CX + Math.cos((angleDeg * Math.PI) / 180) * r,
        y: SVG_CY + Math.sin((angleDeg * Math.PI) / 180) * r,
      });

      // Entrance
      gsap.set(wrap, { opacity: 0, scale: 0.7 });
      const tl = gsap.timeline({
        onComplete: () => {
          cancelAnimationFrame(animId);
          setHidden(true);
          onComplete();
        },
      });

      tl.to(wrap, { opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.5)" })
        .to(glowRef.current, { opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.4");

      // Spinning ring arcs
      const ring1 = ringsRef.current?.querySelector("#r1");
      const ring2 = ringsRef.current?.querySelector("#r2");
      const ring3 = ringsRef.current?.querySelector("#r3");
      tl.to(ring1, { strokeDashoffset: -540, duration: 2.5, ease: "power1.inOut", repeat: -1 }, 0);
      tl.to(ring2, { strokeDashoffset: -640, duration: 3.5, ease: "none", repeat: -1 }, 0);
      tl.to(ring3, { strokeDashoffset: -460, duration: 1.8, ease: "power1.inOut", repeat: -1, yoyo: true }, 0);

      // Orbiting dots
      const orbitState1 = { angle: 0 };
      const orbitState2 = { angle: 180 };
      const orbitState3 = { angle: 90 };
      gsap.to(orbitState1, { angle: 360, duration: 3, ease: "none", repeat: -1, onUpdate() {
        const p = orbitXY(orbitState1.angle, 108);
        dot1Ref.current?.setAttribute("cx", String(p.x));
        dot1Ref.current?.setAttribute("cy", String(p.y));
      }});
      gsap.to(orbitState2, { angle: 540, duration: 4.5, ease: "none", repeat: -1, onUpdate() {
        const p = orbitXY(orbitState2.angle, 108);
        dot2Ref.current?.setAttribute("cx", String(p.x));
        dot2Ref.current?.setAttribute("cy", String(p.y));
      }});
      gsap.to(orbitState3, { angle: 450, duration: 2.2, ease: "none", repeat: -1, onUpdate() {
        const p = orbitXY(orbitState3.angle, 72);
        dot3Ref.current?.setAttribute("cx", String(p.x));
        dot3Ref.current?.setAttribute("cy", String(p.y));
      }});

      // Scan line sweep
      gsap.to(scanRef.current, { opacity: 1, duration: 0.3, delay: 0.6 });
      gsap.to(scanRef.current, { top: "20%", duration: 1.2, delay: 0.6, ease: "power1.inOut", yoyo: true, repeat: 2 });
      gsap.to(scanRef.current, { opacity: 0, duration: 0.3, delay: 3.0 });

      // Progress bar
      gsap.to(progressRef.current, { width: "100%", duration: 2.8, delay: 0.5, ease: "power1.inOut" });

      // Exit
      setTimeout(() => {
        gsap.timeline()
          .to(wrap, { scale: 1.08, duration: 0.25, ease: "power2.out" })
          .to(wrap, { scale: 0, opacity: 0, duration: 0.45, ease: "back.in(2)" })
          .to(root, { opacity: 0, duration: 0.4, ease: "power2.in",
            onComplete: () => { cancelAnimationFrame(animId); setHidden(true); onComplete(); }
          });
      }, 3600);
    });

    return () => {
      cancelAnimationFrame(animId);
      gsapCtx.revert();
    };
  }, [onComplete]);

  if (hidden) return null;

  return (
    <div
      ref={rootRef}
      className="pointer-events-none fixed inset-0 z-[120] flex items-center justify-center bg-[#0D0D0D]"
    >
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Animated wrap */}
      <div ref={wrapRef} className="relative flex items-center justify-center opacity-0">

        {/* SVG Rings + orbiting dots */}
        <svg ref={ringsRef} className="absolute" width="260" height="260" viewBox="0 0 260 260">
          <circle id="r1" cx="130" cy="130" r="90" fill="none" stroke="#5BBF1A"
            strokeWidth="1.5" strokeDasharray="40 520" strokeLinecap="round" opacity="0.6" />
          <circle id="r2" cx="130" cy="130" r="108" fill="none" stroke="#5BBF1A"
            strokeWidth="1" strokeDasharray="20 620" strokeLinecap="round" opacity="0.35" />
          <circle id="r3" cx="130" cy="130" r="72" fill="none" stroke="#5BBF1A"
            strokeWidth="2" strokeDasharray="60 400" strokeLinecap="round" opacity="0.45" />
          <circle ref={dot1Ref} cx="238" cy="130" r="4" fill="#5BBF1A" opacity="0.9" />
          <circle ref={dot2Ref} cx="22" cy="130" r="3" fill="#5BBF1A" opacity="0.7" />
          <circle ref={dot3Ref} cx="130" cy="22" r="2.5" fill="#a3e070" opacity="0.8" />
        </svg>

        {/* Glow */}
        <div ref={glowRef}
          className="absolute w-[140px] h-[140px] rounded-full opacity-0"
          style={{ background: "radial-gradient(circle, rgba(91,191,26,0.35) 0%, transparent 70%)", filter: "blur(16px)" }}
        />

        {/* Logo */}
        <div className="relative z-10">
          <Image
            src="/logo-nobg.png"
            alt="Codefynix logo"
            width={120}
            height={120}
            className="relative z-10 rounded-xl"
            style={{ width: "auto", height: "auto", maxWidth: 120, maxHeight: 120 }}
            priority
          />
        </div>

        {/* Scan line */}
        <div ref={scanRef}
          className="absolute z-20 opacity-0"
          style={{
            width: 120, height: 2,
            background: "linear-gradient(90deg, transparent, rgba(91,191,26,0.8), transparent)",
            borderRadius: 1, top: "50%", transform: "translateY(-50%)"
          }}
        />
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-40">
        <div className="h-[2px] rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
          <div ref={progressRef} className="h-full rounded-full" style={{ width: 0, background: "#5BBF1A" }} />
        </div>
        <p className="text-center mt-2 text-[10px] font-mono tracking-[3px]" style={{ color: "rgba(91,191,26,0.6)" }}>
          LOADING
        </p>
      </div>
    </div>
  );
}