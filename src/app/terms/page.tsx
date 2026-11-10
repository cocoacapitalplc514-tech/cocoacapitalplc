import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the Cocoa Capital PLC website.",
};

export default function TermsPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms of Use" },
        ]}
      />
      <section className="section-pad bg-cream">
        <div className="container-site max-w-3xl space-y-5 text-muted leading-relaxed">
          <p>
            By using the {SITE.name} website, you agree to these terms. Content
            is provided for general information about the issuer and its Note
            Issuance Programme.
          </p>
          <p>
            Documents and data on this site may be updated or withdrawn without
            notice. In the event of any inconsistency between website content and
            the Programme Prospectus or Applicable Pricing Supplement, the
            official programme documents prevail.
          </p>
          <p>
            Unauthorised reproduction of website materials is prohibited except
            as permitted by applicable law.
          </p>
        </div>
      </section>
    </main>
  );
}
