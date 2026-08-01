import type { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Speak with the Cocoa Capital PLC team in Accra about investment products or structured funding.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Contact"
        title="Speak with our team."
        description="Our Accra office responds to investor and funding enquiries within two business days."
      />

      <section className="section-pad bg-cream">
        <div className="container-site grid gap-10 sm:gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <span className="gold-rule mb-6 block" aria-hidden />
            <h2 className="font-serif text-2xl text-cocoa">Head Office</h2>
            <ul className="copy mt-8 space-y-6 text-muted">
              <li className="flex gap-4">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  {SITE.address.street}
                  <br />
                  {SITE.address.city}, {SITE.address.country}
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="tap-target hover:text-cocoa"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <a href={`mailto:${SITE.email}`} className="tap-target hover:text-cocoa">
                  {SITE.email}
                </a>
              </li>
            </ul>
            <p className="copy mt-10 text-muted">
              Office hours: Monday to Friday, 08:30–17:00 GMT.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
