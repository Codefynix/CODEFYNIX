"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { ensureGsapPlugins, ScrollTrigger } from "@/lib/gsap";
import { navLinks } from "@/lib/site-data";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    ensureGsapPlugins();
    const trigger = ScrollTrigger.create({
      start: 80,
      end: 99999,
      onUpdate: (self) => setScrolled(self.scroll() > 80),
    });

    return () => trigger.kill();
  }, []);

  const scrollTop = () => {
    if (typeof window !== "undefined" && window.__lenis) {
      window.__lenis.scrollTo(0);
    } else if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setOpen(false);
  };

  const navClass = scrolled
    ? "bg-white/95 shadow-lg backdrop-blur border-b border-zinc-200"
    : "bg-transparent";

  return (
    <header className="fixed top-0 left-0 right-0 z-[90]">
      <nav
        aria-label="Main navigation"
        className={`transition-all duration-300 ${navClass}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2" aria-label="Go to home page">
            <Image src="/logo.jpeg" alt="Codefynix logo" width={42} height={42} className="rounded-md" />
            {/* <Image src="/logo.jpeg" alt="Codefynix logo" width={42} height={42} className="rounded-md" /> */}
            {/* <span className="font-heading text-xl font-bold text-[#111111]">Codefynix</span> */}
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative font-body text-sm ${
                      active ? "text-[#5BBF1A]" : "text-[#111111]"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-2 left-0 h-0.5 bg-[#5BBF1A] transition-all ${
                        active ? "w-full" : "w-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-full bg-[#5BBF1A] px-5 py-2.5 font-body text-sm font-semibold text-white transition hover:bg-[#3D8A0E] lg:inline-flex"
            >
              Get a Quote
            </Link>
            <button
              className="inline-flex rounded-md border border-zinc-300 p-2 text-[#111111] lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? <HiOutlineX size={22} /> : <HiOutlineMenuAlt3 size={22} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-zinc-200 bg-white px-4 py-4 lg:hidden">
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-md px-2 py-2 font-body text-[#111111] hover:bg-zinc-100"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  className="mt-2 w-full rounded-full bg-[#5BBF1A] px-4 py-2.5 font-semibold text-white"
                  onClick={scrollTop}
                >
                  Back To Top
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
