import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/section-heading";
import { IssuanceStatusBadge } from "@/components/ui/issuance-status-badge";
import { DocumentTable } from "@/components/documents/DocumentTable";
import { PublicationNotice } from "@/components/ui/publication-notice";
import { LegalDisclaimer } from "@/components/ui/legal-disclaimer";
import {
  ISSUANCES,
  formatIssuanceAmount,
  formatRate,
  getIssuanceBySlug,
} from "@/data/issuances";
import { formatPublishedDate, statusLabel } from "@/lib/format";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  if (!ISSUANCES.length) {
    return [{ slug: "_placeholder" }];
  }
  return ISSUANCES.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "_placeholder") {
    return { title: "Issuance" };
  }
  const issuance = getIssuanceBySlug(slug);
  if (!issuance) return { title: "Issuance" };
  return {
    title: `${issuance.instrumentType === "bond" ? "Bond" : "Commercial Paper"} ${issuance.series}`,
  };
}

export default async function IssuanceDetailPage({ params }: Props) {
  const { slug } = await params;
  if (slug === "_placeholder") {
    notFound();
  }
  const issuance = getIssuanceBySlug(slug);
  if (!issuance) notFound();

  const instrumentLabel =
    issuance.instrumentType === "bond" ? "Bond" : "Commercial Paper";

  const terms = [
    { label: "Instrument", value: instrumentLabel },
    { label: "Issue Amount", value: formatIssuanceAmount(issuance) },
    { label: "Issue Date", value: formatPublishedDate(issuance.issueDate) },
    { label: "Maturity", value: formatPublishedDate(issuance.maturityDate) },
    { label: "Coupon / Rate", value: formatRate(issuance.couponRate) },
    {
      label: "Interest Frequency",
      value: issuance.interestFrequency ?? "Not yet published",
    },
    { label: "Issue Price", value: issuance.issuePrice ?? "Not yet published" },
    { label: "Listing", value: issuance.listing ?? "Not yet published" },
  ];

  return (
    <main id="main-content">
      <PageHero
        eyebrow={instrumentLabel}
        title={`${instrumentLabel} ${issuance.series}`}
        description={`Series ${issuance.series}${issuance.tranche ? ` · Tranche ${issuance.tranche}` : ""}`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Investor Relations", href: "/investor-relations" },
          { label: "Issuances", href: "/investor-relations/issuances" },
          { label: issuance.series },
        ]}
      />
      <section className="section-pad bg-cream">
        <div className="container-site">
          <div className="mb-8">
            <IssuanceStatusBadge status={issuance.status} />
          </div>
          <SectionHeading eyebrow="Key Terms" title="Issuance terms" />
          <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {terms.map((term) => (
              <div
                key={term.label}
                className="border border-border bg-white px-5 py-4"
              >
                <dt className="label text-forest">{term.label}</dt>
                <dd className="mt-2 font-medium text-cocoa">{term.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section className="section-pad bg-soft-grey">
        <div className="container-site">
          <SectionHeading eyebrow="Documents" title="Related documents" />
          <div className="mt-8">
            <DocumentTable documents={issuance.documents} />
          </div>
        </div>
      </section>
      <section className="section-pad bg-cream">
        <div className="container-site">
          <SectionHeading eyebrow="Payments" title="Payment Schedule" />
          <div className="mt-8">
            {issuance.paymentSchedule?.length ? (
              <div className="overflow-x-auto border border-border">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead className="bg-soft-grey">
                    <tr>
                      <th className="px-4 py-3 font-medium">Payment Date</th>
                      <th className="px-4 py-3 font-medium">Type</th>
                      <th className="px-4 py-3 font-medium">Amount / Rate</th>
                      <th className="px-4 py-3 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {issuance.paymentSchedule.map((row, i) => (
                      <tr key={i} className="border-t border-border">
                        <td className="px-4 py-3">
                          {formatPublishedDate(row.paymentDate)}
                        </td>
                        <td className="px-4 py-3">{row.type}</td>
                        <td className="px-4 py-3">
                          {row.amountOrRate ?? "Not yet published"}
                        </td>
                        <td className="px-4 py-3">
                          {row.status ? statusLabel(row.status) : "Not yet published"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <PublicationNotice title="No payment schedule has been published for this issuance." />
            )}
          </div>
          <div className="mt-10">
            <LegalDisclaimer />
          </div>
        </div>
      </section>
    </main>
  );
}
