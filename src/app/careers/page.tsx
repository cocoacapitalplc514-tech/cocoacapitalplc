import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/reveal";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build a career at the intersection of capital markets and Ghana's cocoa economy.",
};

const ROLES = [
  { title: "Credit Analyst", location: "Accra", type: "Full-time" },
  { title: "Investment Associate", location: "Accra", type: "Full-time" },
  { title: "Collateral Monitoring Officer", location: "Kumasi", type: "Full-time" },
];

export default function CareersPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Careers"
        title="Work where capital meets cocoa."
        description="We hire people who bring rigour, integrity, and a genuine interest in Ghana's real economy."
      />

      <section className="section-pad bg-cream">
        <div className="container-site max-w-3xl">
          <span className="gold-rule mb-6 block" aria-hidden />
          <h2 className="heading-lg text-cocoa">Open Positions</h2>

          <ul className="mt-12 divide-y divide-border border-y border-border">
            {ROLES.map((role, index) => (
              <Reveal key={role.title} delay={index * 0.06} y={18}>
                <li className="flex flex-wrap items-center justify-between gap-4 py-7">
                  <div>
                    <h3 className="font-serif text-xl text-cocoa">
                      {role.title}
                    </h3>
                    <p className="label mt-1.5 text-muted">
                      {role.location} · {role.type}
                    </p>
                  </div>
                  <a
                    href={`mailto:${SITE.email}?subject=Application: ${role.title}`}
                    className="tap-target group gap-2 text-sm font-medium text-cocoa transition-colors hover:text-forest"
                  >
                    Apply
                    <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
                  </a>
                </li>
              </Reveal>
            ))}
          </ul>

          <p className="copy mt-12 text-muted">
            Not seeing the right role? Send your CV to{" "}
            <Link
              href={`mailto:${SITE.email}`}
              className="text-gold underline-offset-4 hover:underline"
            >
              {SITE.email}
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
