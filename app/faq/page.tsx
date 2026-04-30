import type { Metadata } from "next";
import { faqs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Codefynix services, delivery process, timelines, and support.",
  alternates: { canonical: "https://codefynix.com/faq" },
};

export default function FAQPage() {
  return (
    <section className="section-wrap bg-[#F5F5F5] pt-36">
      <div className="section-inner max-w-4xl">
        <p className="section-tag">FAQ</p>
        <h1 className="section-title">Frequently Asked Questions</h1>

        <div className="mt-8 space-y-4">
          {faqs.map((item) => (
            <details key={item.question} className="rounded-xl bg-white p-5">
              <summary className="cursor-pointer font-heading text-lg font-semibold text-[#111111]">{item.question}</summary>
              <p className="mt-3 font-body text-sm text-[#666666]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
