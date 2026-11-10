import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ContactDetails } from "@/components/layout/ContactDetails";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Cocoa Capital PLC at KPMG Ghana, Marlin House, Abelemkpe, Accra.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Contact"
        title="Contact Cocoa Capital PLC"
        description="Correspondence address, telephone and office hours."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section-pad bg-cream">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <div className="border-l-2 border-gold bg-white px-6 py-7">
              <h2 className="label font-sans text-forest">Contact</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Investor relations, media and general enquiries — including
                prospectus, issuance and documentation requests — are handled
                at this address.
              </p>
              <ContactDetails className="mt-6" />
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-cocoa">Send an enquiry</h2>
            <p className="mb-6 mt-2 text-sm text-muted">
              Complete the form and we will open a pre-addressed message in your
              email application.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
