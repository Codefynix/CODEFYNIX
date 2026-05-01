"use client";

import { useEffect, useRef } from "react";

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export default function HaloCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -300, y: -300 });
  const spring = useRef({ x: -300, y: -300 });
  const raf = useRef(0);
  const hover = useRef(false);
  const visible = useRef(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current;
    const orb = orbRef.current;
    if (!dot || !orb) return;

    const show = () => {
      if (visible.current) return;
      visible.current = true;
      dot.style.opacity = "1";
      orb.style.opacity = "1";
    };

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      show();
    };

    const onLeave = () => {
      dot.style.opacity = "0";
      orb.style.opacity = "0";
      visible.current = false;
    };

    const onOver = (e: MouseEvent) => {
      hover.current = Boolean((e.target as HTMLElement).closest("a,button,[data-hover]"));
    };

    const onClick = () => {
      orb.style.transition = "transform 0.1s ease, opacity 0.1s";
      orb.style.transform = `translate(${spring.current.x}px,${spring.current.y}px) translate(-50%,-50%) scale(2.8)`;
      orb.style.opacity = "0.25";
      setTimeout(() => {
        orb.style.opacity = "1";
      }, 140);
    };

    const tick = () => {
      spring.current.x = lerp(spring.current.x, mouse.current.x, 0.1);
      spring.current.y = lerp(spring.current.y, mouse.current.y, 0.1);

      const scale = hover.current ? 2.4 : 1;
      dot.style.transform = `translate(${mouse.current.x}px,${mouse.current.y}px) translate(-50%,-50%)`;
      orb.style.transform = `translate(${spring.current.x}px,${spring.current.y}px) translate(-50%,-50%) scale(${scale})`;
      raf.current = requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mousedown", onClick);
    raf.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf.current);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  const base: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    borderRadius: "50%",
    pointerEvents: "none",
    zIndex: 99999,
    opacity: 0,
    willChange: "transform",
  };

  return (
    <>
      <div
        ref={dotRef}
        style={{
          ...base,
          width: 8,
          height: 8,
          background: "var(--accent)",
          transition: "opacity 0.2s",
          zIndex: 99999,
        }}
      />
      <div
        ref={orbRef}
        style={{
          ...base,
          width: 44,
          height: 44,
          background: "var(--halo-color)",
          border: "1.5px solid var(--halo-ring)",
          boxShadow: "0 0 20px 6px var(--halo-color)",
          backdropFilter: "blur(2px)",
          transition: "opacity 0.3s, transform 0.15s ease-out",
          zIndex: 99998,
        }}
      />
    </>
  );
}
