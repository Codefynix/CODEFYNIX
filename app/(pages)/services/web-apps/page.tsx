import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Application Development Kochi | Next.js Experts — Codefynix",
  description: "Scalable web applications built with Next.js and modern stacks by Codefynix, a leading web app development company in Kochi, Kerala.",
};

export default function WebAppsPage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#7DD63A]">Web Application Development in Kochi, Kerala</h1>
      <p className="text-lg text-gray-300 mb-6">
        Codefynix is a premier web application development company in Kochi, specializing in scalable, high-performance web apps using modern frameworks like React, Next.js, and Node.js.
      </p>
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Custom Web Apps for Your Business</h2>
      <p className="text-gray-400 mb-6">
        We transform complex business requirements into intuitive, reliable web applications. From SaaS products to enterprise dashboards, our developers build solutions that scale with your growth across India and beyond.
      </p>
      <h3 className="text-xl font-semibold mt-8 mb-4 text-white">Our Tech Stack</h3>
      <ul className="list-disc list-inside text-gray-400 space-y-2 mb-12">
        <li>Next.js & React for dynamic frontend experiences</li>
        <li>Node.js & Python for robust backend services</li>
        <li>PostgreSQL, MongoDB, and modern cloud databases</li>
        <li>AWS & Vercel for seamless deployments</li>
      </ul>
      <Link href="/contact" className="inline-block px-8 py-3 bg-gradient-to-r from-[#5BBF1A] to-[#3D8A0E] text-white font-bold rounded-lg">
        Discuss Your App Idea
      </Link>
    </div>
  );
}
