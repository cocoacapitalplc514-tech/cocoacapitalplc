import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { LegalDisclaimer } from "@/components/ui/legal-disclaimer";
import { TRANSACTION_DOCUMENTS } from "@/data/transaction-documents";
import { PUBLICATION } from "@/data/site-settings";

export async function generateMetadata(): Promise<Metadata> {
  if (!PUBLICATION.transactionDocuments) notFound();
  return {
    title: "Transaction Documents",
    description:
      "Read the Assignment Agreement, Financing Agreement and Trust Deed for the Cocoa Capital PLC Programme. These documents are available for on-screen viewing only.",
  };
}

export default function TransactionDocumentsPage() {
  if (!PUBLICATION.transactionDocuments) notFound();

  return (
    <main id="main-content">
      <PageHero
        eyebrow="Investor Relations"
        title="Transaction Documents"
        description="The Assignment Agreement, Financing Agreement and Trust Deed are available here for investors to read on screen. Downloading and printing are not permitted."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Investor Relations", href: "/investor-relations" },
          { label: "Transaction Documents" },
        ]}
      />
      <section className="section-pad bg-cream">
        <div className="container-site">
          <ul className="grid gap-4 lg:grid-cols-3">
            {TRANSACTION_DOCUMENTS.map((document) => (
              <li key={document.slug}>
                <article className="flex h-full flex-col border border-border bg-white px-5 py-6">
                  <p className="label text-forest">View only</p>
                  <h2 className="mt-2 font-serif text-2xl text-cocoa">
                    {document.title}
                  </h2>
                  <p className="mt-3 grow text-sm leading-relaxed text-muted">
                    {document.description}
                  </p>
                  {document.pages > 0 ? (
                    <p className="mt-4 text-sm text-muted">
                      {document.pages} pages
                    </p>
                  ) : null}
                  <Link
                    href={`/investor-relations/transaction-documents/${document.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-forest underline-offset-4 hover:underline"
                  >
                    Read document
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </article>
              </li>
            ))}
          </ul>
          <LegalDisclaimer className="mt-10" />
        </div>
      </section>
    </main>
  );
}
