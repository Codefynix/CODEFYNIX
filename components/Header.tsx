"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ThemeToggle from "@/components/ThemeToggle";

gsap.registerPlugin(ScrollToPlugin);

const LINKS = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
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

  const pillStyle: React.CSSProperties = {
    background: scrolled ? "var(--header-bg)" : "transparent",
    borderColor: scrolled ? "var(--header-border)" : "transparent",
    backdropFilter: scrolled ? "blur(22px) saturate(160%)" : "none",
    boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.14)" : "none",
    transition:
      "background 0.45s, border-color 0.45s, backdrop-filter 0.45s, box-shadow 0.45s, padding 0.35s",
    border: "1px solid",
    borderRadius: "9999px",
    padding: scrolled ? "8px 22px" : "12px 26px",
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
        paddingTop: 14,
        paddingLeft: 16,
        paddingRight: 16,
      }}
      aria-label="Main navigation"
    >
      <nav
        style={{
          ...pillStyle,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 32,
          width: "100%",
          maxWidth: 1100,
        }}
        role="navigation"
      >
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}
          data-hover
        >
          <Image
            src="/logo.jpeg"
            alt="Codefynix logo"
            width={32}
            height={32}
            style={{ borderRadius: 6, objectFit: "contain" }}
          />
          <span
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 800,
              fontSize: 17,
              color: "var(--text)",
              letterSpacing: "-0.02em",
            }}
          >
            code<span style={{ color: "var(--accent)" }}>fynix</span>
          </span>
        </Link>

        <ul className="hidden-mobile" style={{ display: "flex", alignItems: "center", gap: 4, listStyle: "none", margin: 0, padding: 0 }}>
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
                    gap: 6,
                    padding: "6px 14px",
                    borderRadius: 9999,
                    fontSize: 13.5,
                    fontWeight: 500,
                    textDecoration: "none",
                    color: isActive ? "var(--accent)" : "var(--text-muted)",
                    background: isActive ? "rgba(91,191,26,0.10)" : "transparent",
                    transition: "color 0.2s, background 0.2s",
                  }}
                >
                  {isActive && (
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: "var(--accent)",
                        display: "inline-block",
                      }}
                    />
                  )}
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <ThemeToggle />
          <Link href="/contact" className="cta-pill" data-hover>
            Get a Quote
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
                  background: "var(--text)",
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
            background: "var(--header-bg)",
            backdropFilter: "blur(22px)",
            border: "1px solid var(--header-border)",
            borderRadius: 20,
            padding: 12,
            boxShadow: "var(--shadow)",
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
                  fontWeight: 500,
                  textDecoration: "none",
                  color: "var(--text)",
                }}
              >
                {label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
