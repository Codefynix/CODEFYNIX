"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Service", href: "/#services" },
  { label: "Projects", href: "/#projects-home" },
  { label: "About", href: "/#about" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 64);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    if (!sections.length || pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { threshold: 0.35 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    gsap.from(headerRef.current, {
      y: -56,
      opacity: 0,
      duration: 0.85,
      delay: 0.2,
      ease: "power3.out",
    });
  }, []);

  const smoothScroll = (e: React.MouseEvent, anchor: string) => {
    if (pathname !== "/" || !anchor.startsWith("#")) return;
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(anchor);
    if (target) {
      gsap.to(window, {
        duration: 1.1,
        scrollTo: { y: target, offsetY: 72 },
        ease: "power3.inOut",
      });
    }
  };

  return (
    <header
      ref={headerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
      }}
      aria-label="Main navigation"
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          maxWidth: "80rem",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 8,
            left: "8%",
            width: 74,
            height: 74,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 30% 30%, rgba(91,191,26,0.86), rgba(61,138,14,0.75))",
            filter: "blur(22px)",
            opacity: scrolled ? 0.45 : 0.56,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -8,
            right: "4%",
            width: 132,
            height: 132,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 32% 32%, rgba(125,214,58,0.70), rgba(91,191,26,0.52))",
            filter: "blur(28px)",
            opacity: scrolled ? 0.4 : 0.5,
          }}
        />
      </div>

      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 18,
          width: "100%",
          maxWidth: "80rem",
          borderRadius: 9999,
          border: scrolled
            ? "1px solid rgba(125,214,58,0.28)"
            : "1px solid rgba(125,214,58,0.2)",
          background: scrolled
            ? "linear-gradient(120deg, rgba(8,10,16,0.86), rgba(17,24,17,0.76))"
            : "linear-gradient(120deg, rgba(8,10,16,0.72), rgba(17,24,17,0.64))",
          backdropFilter: "blur(18px) saturate(150%)",
          boxShadow: scrolled
            ? "0 16px 46px rgba(0,0,0,0.42), inset 0 0 0 1px rgba(125,214,58,0.12)"
            : "0 12px 36px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(125,214,58,0.08)",
          padding: scrolled ? "8px 16px" : "11px 18px",
          animation: "headerFloatAlt 6.8s ease-in-out infinite",
          transition:
            "padding 0.35s, transform 0.35s, background 0.35s, border-color 0.35s, box-shadow 0.35s",
        }}
        role="navigation"
      >
        <Link
          href="/#home"
          style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}
          onClick={(e) => smoothScroll(e, "#home")}
          data-hover
        >
          <Image
            src="/Logo-Black-png.png"
            alt="Codefynix logo"
            width={150}
            height={150}
            className="h-6 w-auto sm:h-6 lg:h-8"
            style={{ borderRadius: 8, objectFit: "contain" }}
          />
        </Link>

        <ul
          className="hidden-mobile"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {LINKS.map(({ label, href }) => {
            const isHash = href.includes("#");
            const id = href.split("#")[1] ?? "";
            const routeOnly = href.split("#")[0];
            const isActive =
              isHash && pathname === "/" ? activeId === id : routeOnly === pathname;

            return (
              <li key={href}>
                <a
                  href={href}
                  data-hover
                  onClick={isHash ? (e) => smoothScroll(e, `#${id}`) : undefined}
                  aria-current={isActive ? "page" : undefined}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: 78,
                    padding: "8px 12px",
                    borderRadius: 8,
                    border: "none",
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: "none",
                    color: isActive ? "#7DD63A" : "#F8F8F8",
                    background: "transparent",
                    textShadow: isActive ? "0 0 16px rgba(125,214,58,0.45)" : "none",
                    letterSpacing: isActive ? "0.03em" : "0.01em",
                    transform: isActive ? "translateY(-1px)" : "translateY(0)",
                    transition: "all 0.24s ease",
                  }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.transform = "translateY(-2px)";
                    event.currentTarget.style.color = "#7DD63A";
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.transform = isActive ? "translateY(-1px)" : "translateY(0)";
                    event.currentTarget.style.color = isActive ? "#7DD63A" : "#F8F8F8";
                  }}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Link
            href="/#contact"
            className="cta-pill"
            data-hover
            onClick={(e) => smoothScroll(e, "#contact")}
            style={{
              background: "linear-gradient(90deg, #5BBF1A, #3D8A0E)",
              border: "1px solid rgba(125,214,58,0.38)",
              color: "white",
              boxShadow: "0 8px 26px rgba(91,191,26,0.35)",
            }}
          >
            Get Quote
          </Link>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            style={{
              background: "none",
              border: "none",
              padding: 6,
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
            className="show-mobile"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 22,
                  height: 2,
                  borderRadius: 2,
                  background: "#F5F5F5",
                  transition: "transform 0.3s, opacity 0.3s",
                  transform: menuOpen
                    ? i === 0
                      ? "rotate(45deg) translate(5px, 5px)"
                      : i === 2
                        ? "rotate(-45deg) translate(5px, -5px)"
                        : "scaleX(0)"
                    : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            left: 16,
            right: 16,
            background: "rgba(8,10,16,0.78)",
            backdropFilter: "blur(22px)",
            border: "1px solid rgba(125,214,58,0.24)",
            borderRadius: 20,
            padding: 12,
            boxShadow: "0 18px 44px rgba(0,0,0,0.45)",
          }}
        >
          {LINKS.map(({ label, href }) => {
            const id = href.split("#")[1] ?? "";
            const isHash = href.includes("#");
            return (
              <a
                key={href}
                href={href}
                data-hover
                onClick={isHash ? (e) => smoothScroll(e, `#${id}`) : undefined}
                style={{
                  display: "block",
                  padding: "12px 16px",
                  borderRadius: 12,
                  fontSize: 14,
                    fontWeight: 600,
                  textDecoration: "none",
                    color: "#F5F5F5",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(125,214,58,0.22)",
                    marginBottom: 8,
                }}
              >
                {label}
              </a>
            );
          })}
          <Link
            href="/#contact"
            data-hover
            onClick={(e) => smoothScroll(e, "#contact")}
            style={{
              display: "block",
              padding: "12px 16px",
              borderRadius: 12,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
              color: "white",
              background: "linear-gradient(90deg, #5BBF1A, #3D8A0E)",
              marginTop: 8,
            }}
          >
            Get Quote
          </Link>
        </div>
      )}
    </header>
  );
}
