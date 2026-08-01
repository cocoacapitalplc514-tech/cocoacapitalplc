import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/reveal";
import { FOOTER_LINKS } from "@/lib/constants";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Investor Centre",
  description:
    "Financial reports, announcements, AGM information, and shareholder resources from Cocoa Capital PLC.",
};

const DOCUMENTS = [
  { title: "Annual Report 2024", meta: "PDF · 4.2 MB" },
  { title: "Half-Year Financial Statements 2024", meta: "PDF · 1.8 MB" },
  { title: "Bond Programme Information Memorandum", meta: "PDF · 3.1 MB" },
  { title: "Notice of Annual General Meeting", meta: "PDF · 620 KB" },
];

export default function InvestorCentrePage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Investor Centre"
        title="Transparency, on the record."
        description="Reports, announcements, and shareholder information—published consistently and available to all investors."
      />

      <section className="section-pad bg-cream">
        <div className="container-site grid gap-10 sm:gap-16 lg:grid-cols-[1.3fr_1fr] lg:gap-24">
          <div>
            <span className="gold-rule mb-6 block" aria-hidden />
            <h2 className="heading-lg text-cocoa">Latest Publications</h2>
            <ul className="mt-10 divide-y divide-border border-y border-border">
              {DOCUMENTS.map((doc, index) => (
                <Reveal key={doc.title} delay={index * 0.06} y={18}>
                  <li>
                    <Link
                      href="/investor-centre/downloads"
                      className="group flex items-center justify-between gap-6 py-6 transition-colors"
                    >
                      <span className="flex items-center gap-4">
                        <FileText
                          className="h-5 w-5 shrink-0 text-gold"
                          strokeWidth={1.25}
                          aria-hidden
                        />
                        <span>
                          <span className="block font-serif text-lg text-cocoa transition-colors group-hover:text-forest">
                            {doc.title}
                          </span>
                          <span className="label mt-1 block text-muted">
                            {doc.meta}
                          </span>
                        </span>
                      </span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-gold transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="label font-sans text-gold">
              Quick Links
            </h2>
            <ul className="mt-6 space-y-4">
              {FOOTER_LINKS.investor.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="tap-target group gap-2 text-sm text-muted transition-colors hover:text-cocoa"
                  >
                    {link.label}
                    <ArrowRight className="h-3.5 w-3.5 text-gold opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
