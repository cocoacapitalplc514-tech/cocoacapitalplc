import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the Cocoa Capital PLC website.",
};

export default function PrivacyPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />
      <section className="section-pad bg-cream">
        <div className="container-site max-w-3xl space-y-5 text-muted leading-relaxed">
          <p>
            {SITE.name} respects your privacy. This policy describes how we
            handle personal information submitted through this website,
            including contact forms.
          </p>
          <p>
            Information you provide (such as name, email address and message
            content) is used only to respond to your enquiry and to administer
            related correspondence. We do not sell personal data.
          </p>
          <p>
            For privacy enquiries, contact{" "}
            <a href={`mailto:${SITE.email}`} className="text-forest hover:underline">
              {SITE.email}
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
