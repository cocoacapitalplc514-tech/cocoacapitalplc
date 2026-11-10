import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { ViewOnlyDocument } from "@/components/documents/ViewOnlyDocument";
import { LegalDisclaimer } from "@/components/ui/legal-disclaimer";
import { PublicationNotice } from "@/components/ui/publication-notice";
import {
  TRANSACTION_DOCUMENTS,
  getTransactionDocument,
} from "@/data/transaction-documents";
import { PUBLICATION } from "@/data/site-settings";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  // Static export needs at least one path; the placeholder renders as not found.
  if (!TRANSACTION_DOCUMENTS.length) return [{ slug: "_placeholder" }];
  return TRANSACTION_DOCUMENTS.map((document) => ({ slug: document.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!PUBLICATION.transactionDocuments) notFound();
  const { slug } = await params;
  const document = getTransactionDocument(slug);
  if (!document) return { title: "Transaction Documents" };
  return {
    title: document.title,
    description: `${document.description} Available for on-screen viewing only.`,
    robots: { index: true, follow: true },
  };
}

export default async function TransactionDocumentPage({ params }: Props) {
  if (!PUBLICATION.transactionDocuments) notFound();
  const { slug } = await params;
  const document = getTransactionDocument(slug);
  if (!document) notFound();

  return (
    <main id="main-content">
      <PageHero
        eyebrow="Transaction Documents"
        title={document.title}
        description="This document is provided for on-screen viewing only. It cannot be downloaded or printed."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Investor Relations", href: "/investor-relations" },
          {
            label: "Transaction Documents",
            href: "/investor-relations/transaction-documents",
          },
          { label: document.title },
        ]}
      />
      <section className="section-pad bg-cream">
        <div className="container-site max-w-5xl">
          <p className="mb-6 text-sm leading-relaxed text-muted">
            {document.description} Use the page controls to read it here.
            Downloading and printing are not available.
          </p>
          {document.pages > 0 ? (
            <ViewOnlyDocument
              title={document.title}
              slug={document.slug}
              pages={document.pages}
            />
          ) : (
            <PublicationNotice
              title="This document is not available to view yet."
              description="The on-screen copy will appear here once it has been published."
            />
          )}
          <LegalDisclaimer className="mt-10" />
        </div>
      </section>
    </main>
  );
}
