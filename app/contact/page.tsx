import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Codefynix for web development, SEO, CRM, design, and automation consulting.",
  alternates: { canonical: "https://codefynix.com/contact" },
};

export default function ContactPage() {
  return (
    <section className="section-wrap bg-white pt-36">
      <div className="section-inner grid gap-10 lg:grid-cols-2">
        <div>
          <p className="section-tag">Contact Us</p>
          <h1 className="section-title">Let&apos;s Build Something Great Together</h1>
          <p className="mt-4 font-body text-[#666666]">
            Share your goals and project scope. Our team will get back with a tailored roadmap,
            timeline, and quote.
          </p>
          <ul className="mt-8 space-y-2 font-body text-sm text-[#666666]">
            <li>Phone: +91 90000 12345</li>
            <li>Email: hello@codefynix.com</li>
            <li>Address: Tech Park, Hyderabad, India</li>
          </ul>
        </div>

        <form className="rounded-2xl border border-zinc-200 p-6">
          <div className="grid gap-4">
            <label className="text-sm font-semibold text-[#111111]">
              Name
              <input className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2" type="text" name="name" />
            </label>
            <label className="text-sm font-semibold text-[#111111]">
              Email
              <input className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-2" type="email" name="email" />
            </label>
            <label className="text-sm font-semibold text-[#111111]">
              Message
              <textarea className="mt-1 min-h-32 w-full rounded-lg border border-zinc-300 px-4 py-2" name="message" />
            </label>
            <button
              type="submit"
              className="rounded-full bg-[#5BBF1A] px-5 py-2.5 font-semibold text-white transition hover:bg-[#3D8A0E]"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
