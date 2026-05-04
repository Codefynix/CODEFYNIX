import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { navLinks } from "@/lib/site-data";

const socials = [
  { href: "https://www.linkedin.com/in/codefynix-technologies/", label: "LinkedIn", icon: FaLinkedinIn },
  { href: "https://www.instagram.com/codefynix?igsh=MWw5dWFkODJ1Zmk3bw%3D%3D&utm_source=qr", label: "Instagram", icon: FaInstagram },
  // { href: "https://x.com/codefynix", label: "X", icon: FaXTwitter },
  // { href: "https://facebook.com/codefynix", label: "Facebook", icon: FaFacebookF },
  // { href: "https://youtube.com/@codefynix", label: "YouTube", icon: FaYoutube },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] pt-16 text-zinc-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
          <Image src="/LOGO-Black-png.png" alt="Codefynix logo" width={150} height={150} className="rounded-md" />            {/* <span className="font-heading text-2xl font-bold text-white">Codefynix</span> */}
          </div>
          <p className="mt-4 font-body text-sm text-zinc-400">
            Crafting digital experiences that power business growth.
          </p>
          <div className="mt-5 flex gap-2">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="rounded-full border border-zinc-700 p-2 text-zinc-300 transition hover:border-[#5BBF1A] hover:text-[#5BBF1A]"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold text-white">Useful Links</h3>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-body text-sm text-zinc-400 hover:text-[#5BBF1A]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold text-white">Contact</h3>
          <ul className="mt-4 space-y-2 font-body text-sm text-zinc-400">
            <li>+91 94000 35616</li>
            <li>codefynix@gmail.com</li>
            <li>Kochi, Kerala, India</li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold text-white">Instagram Feed</h3>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="relative aspect-square overflow-hidden rounded-md">
                <Image
                  src={`https://picsum.photos/seed/codefynix-${idx}/300/300`}
                  alt={`Codefynix instagram preview ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="120px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-zinc-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 Codefynix. All rights reserved.</p>
          {/* <div className="flex gap-4">
            <Link href="/#contact" className="hover:text-[#5BBF1A]">
              Terms & Conditions
            </Link>
            <Link href="/#about" className="hover:text-[#5BBF1A]">
              Privacy Policy
            </Link>
            <Link href="/#contact" className="hover:text-[#5BBF1A]">
              Careers
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
