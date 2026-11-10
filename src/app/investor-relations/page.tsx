import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/section-heading";
import { PublicationNotice } from "@/components/ui/publication-notice";
import { LegalDisclaimer } from "@/components/ui/legal-disclaimer";
import { SITE } from "@/lib/constants";
import { ISSUANCES } from "@/data/issuances";
import { DOCUMENTS } from "@/data/documents";
import { ANNOUNCEMENTS } from "@/data/announcements";
import { RATINGS } from "@/data/ratings";
import { FAQS } from "@/data/faqs";
import { formatPublishedDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Investor Relations",
  description:
    "Issuances, financial statements, ratings and announcements for Cocoa Capital PLC.",
};

/**
 * A single index of every investor disclosure, each showing whether it is
 * published. This replaced six sections that each rendered their own empty
 * table, empty list or "TBD" metric tile for the same underlying fact.
 */
const DISCLOSURES: Array<{
  href: string;
  title: string;
  description: string;
  count: number;
}> = [
  {
    href: "/investor-relations/issuances",
    title: "Current Issuances",
    description: "Commercial Paper and Bond series issued to date.",
    count: ISSUANCES.length,
  },
  {
    href: "/investor-relations/pricing-supplements",
    title: "Pricing Supplements",
    description: "Commercial terms for each Series and Tranche.",
    count: DOCUMENTS.filter((d) => d.type === "pricing-supplement").length,
  },
  {
    href: "/investor-relations/financial-statements",
    title: "Financial Statements",
    description: "Audited and interim statements of the issuer.",
    count: DOCUMENTS.filter((d) => d.type === "financial-statement").length,
  },
  {
    href: "/investor-relations/credit-ratings",
    title: "Credit Ratings",
    description: "Ratings and outlooks from the appointed agency.",
    count: RATINGS.length,
  },
  {
    href: "/investor-relations/presentations",
    title: "Investor Presentations",
    description: "Materials prepared for investors and market participants.",
    count: DOCUMENTS.filter((d) => d.type === "investor-presentation").length,
  },
  {
    href: "/investor-relations/announcements",
    title: "Announcements",
    description: "Issuance notices, payment notices and corporate notices.",
    count: ANNOUNCEMENTS.length,
  },
  {
    href: "/investor-relations/faqs",
    title: "Investor FAQs",
    description:
      "Public and investor questions on the issuer, the Programme and the offer.",
    count: FAQS.length,
  },
];

export default function InvestorRelationsPage() {
  const announcements = ANNOUNCEMENTS.slice(0, 4);

  return (
    <main id="main-content">
      <PageHero
        eyebrow="Investor Relations"
        title="Investor Relations Centre"
        description="Programme disclosures, issuance records and official documentation for institutional investors and market participants."
        image="/images/boardroom-accra.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Investor Relations" }]}
      />

      <section className="section-pad bg-cream">
        <div className="container-site">
          <SectionHeading
            eyebrow="Disclosure index"
            title="Programme disclosures"
            description="Each disclosure is listed below with its current publication status. Documents are added as the issuer releases them."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {DISCLOSURES.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col border border-border bg-white px-5 py-6 transition-colors hover:border-cocoa/40"
                >
                  <h3 className="font-serif text-lg text-cocoa">{item.title}</h3>
                  <p className="mt-2 grow text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                  <span
                    className={
                      item.count > 0
                        ? "mt-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-forest"
                        : "mt-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-muted/70"
                    }
                  >
                    {item.count > 0 ? "Published" : "Awaiting publication"}
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Latest" title="Announcements" />
            <div className="mt-8">
              {announcements.length ? (
                <ul className="divide-y divide-border border border-border">
                  {announcements.map((item) => (
                    <li key={item.id} className="px-5 py-4">
                      <p className="text-xs text-muted">
                        {formatPublishedDate(item.date)}
                      </p>
                      <Link
                        href={`/news/${item.slug}`}
                        className="mt-1 block font-medium text-cocoa hover:underline"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <PublicationNotice
                  title="No investor announcements have been released."
                  description="Issuance notices, payment notices and corporate announcements will appear here and in News when published."
                />
              )}
            </div>
          </div>

          <div className="border-l-2 border-gold bg-cream px-6 py-7">
            <h2 className="label font-sans text-forest">Investor enquiries</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              For prospectus, issuance and documentation enquiries, contact the
              investor relations team directly.
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-4 inline-flex font-medium text-forest underline-offset-4 hover:underline"
            >
              {SITE.email}
            </a>
            <p className="mt-6 text-sm">
              <Link
                href="/contact"
                className="text-forest underline-offset-4 hover:underline"
              >
                All contact details
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-site">
          <LegalDisclaimer />
        </div>
      </section>
    </main>
  );
}
