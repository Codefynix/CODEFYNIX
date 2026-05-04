import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Codefynix | IT Company in Kochi — Get a Free Quote",
  description: "Contact Codefynix in Kochi, Kerala for a free project quote. We build websites, web apps, CRM systems, and automation solutions.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#7DD63A]">Get in Touch with Codefynix</h1>
      <p className="text-lg text-gray-300 mb-12">
        Ready to accelerate your business growth? Contact us today to discuss your project requirements, request a free quote, or explore our IT solutions.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
        {/* Email Card */}
        <a href="mailto:codefynix@gmail.com" className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#7DD63A]/50 transition-all flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 rounded-full bg-[#5BBF1A]/20 flex items-center justify-center mb-4 text-[#7DD63A] group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
          <p className="text-gray-400">codefynix@gmail.com</p>
        </a>

        {/* Phone Card */}
        <a href="tel:+919400035616" className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#7DD63A]/50 transition-all flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 rounded-full bg-[#5BBF1A]/20 flex items-center justify-center mb-4 text-[#7DD63A] group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
          <p className="text-gray-400">+91 94000 35616</p>
        </a>

        {/* LinkedIn Card */}
        <a href="https://www.linkedin.com/in/codefynix-technologies" target="_blank" rel="noopener noreferrer" className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#7DD63A]/50 transition-all flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 rounded-full bg-[#5BBF1A]/20 flex items-center justify-center mb-4 text-[#7DD63A] group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
          <p className="text-gray-400">@codefynix</p>
        </a>

        {/* Instagram Card */}
        <a href="https://instagram.com/codefynix" target="_blank" rel="noopener noreferrer" className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#7DD63A]/50 transition-all flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 rounded-full bg-[#5BBF1A]/20 flex items-center justify-center mb-4 text-[#7DD63A] group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Instagram</h3>
          <p className="text-gray-400">@codefynix</p>
        </a>
      </div>
    </div>
  );
}
