import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { FAQ_SECTIONS, FAQS } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Investor FAQs",
  description:
    "Public and investor questions on Cocoa Capital PLC and the GHS 16.3 billion COCOBOD Domestic Debt Issuance Programme.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: [faq.answer, ...(faq.points ?? [])].join(" "),
    },
  })),
};

export default function FAQsPage() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        eyebrow="Investor Relations"
        title="Public and investor FAQs"
        description="This FAQ explains the GHS 16.3 billion COCOBOD Domestic Debt Issuance Programme in accessible language and addresses the principal questions of the investing public. It is general information only and does not constitute investment advice."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Investor Relations", href: "/investor-relations" },
          { label: "FAQs" },
        ]}
      />
      <section className="section-pad bg-cream">
        <div className="container-site max-w-3xl">
          <nav aria-label="FAQ sections" className="mb-12">
            <ol className="grid gap-2 sm:grid-cols-2">
              {FAQ_SECTIONS.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="flex h-full items-baseline gap-3 border border-border bg-white px-4 py-3 text-sm text-cocoa transition-colors hover:border-cocoa/40"
                  >
                    <span className="font-serif text-lg text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block font-medium">{section.title}</span>
                      <span className="mt-0.5 block text-xs text-muted">
                        {section.faqs.length} questions
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-14">
            {FAQ_SECTIONS.map((section, index) => (
              <div key={section.id}>
                <h2
                  id={section.id}
                  className="scroll-mt-32 font-serif text-2xl text-cocoa md:text-3xl"
                >
                  {section.title}
                </h2>
                <div className="gold-rule mt-4 mb-6" />
                <FAQAccordion
                  faqs={section.faqs}
                  defaultOpenId={index === 0 ? section.faqs[0]?.id : null}
                />
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm leading-relaxed text-muted">
            Where dates or terms in this FAQ differ from the final approved
            documents, rely on the Applicable Pricing Supplement and the formal
            Issuer announcement. Read the Programme Prospectus and the relevant
            Pricing Supplement before subscribing, or{" "}
            <Link
              href="/contact"
              className="text-forest underline-offset-2 hover:underline"
            >
              contact investor relations
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
