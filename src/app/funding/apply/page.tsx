import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Apply for Funding",
  description:
    "Apply for working capital, warehouse finance, or trade finance from Cocoa Capital PLC.",
};

const REQUIREMENTS = [
  "Certificate of incorporation and relevant operating licences",
  "Audited financial statements for the last two years",
  "Details of warehousing, grading, and offtake arrangements",
  "Proposed facility size, tenor, and security",
];

export default function ApplyPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Funding"
        title="Apply for funding."
        description="Tell us about your operation. Our credit team reviews every complete application within five business days."
      />

      <section className="section-pad bg-cream">
        <div className="container-site grid gap-10 sm:gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal x={-20}>
            <div>
              <span className="gold-rule mb-6 block" aria-hidden />
              <h2 className="font-serif text-2xl text-cocoa">
                What you&apos;ll need
              </h2>
              <ul className="mt-8 space-y-4">
                {REQUIREMENTS.map((item) => (
                  <li
                    key={item}
                    className="copy flex gap-3 text-muted"
                  >
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
