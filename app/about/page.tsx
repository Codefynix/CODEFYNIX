import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Codefynix and how our team delivers modern digital products, automation, and growth-focused IT solutions.",
  alternates: { canonical: "https://codefynix.com/about" },
};

export default function AboutPage() {
  return (
    <section className="section-wrap bg-white pt-36">
      <div className="section-inner max-w-4xl">
        <p className="section-tag">About Codefynix</p>
        <h1 className="section-title">Your Growth Partner for Smart IT Solutions</h1>
        <div className="mt-6 space-y-4 font-body text-[#666666]">
          <p>
            Codefynix is an IT solutions company focused on crafting high-performance websites,
            web applications, CRM platforms, and automation systems for growing businesses.
          </p>
          <p>
            Our team combines strategy, design, and engineering to build products that look
            premium, perform at scale, and support long-term business goals.
          </p>
          <p>
            Whether you are launching a startup, modernizing your digital stack, or expanding your
            online presence, we deliver practical and measurable outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
