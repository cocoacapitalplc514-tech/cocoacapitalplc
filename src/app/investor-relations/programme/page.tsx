import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/section-heading";
import { MetricCard } from "@/components/ui/metric-card";
import { InfoCard } from "@/components/ui/info-card";
import { LegalDisclaimer } from "@/components/ui/legal-disclaimer";
import {
  ProgrammeFlow,
  ProceedsFlow,
  RepaymentFlow,
} from "@/components/programme/ProgrammeFlow";
import {
  PROGRAMME,
  PROGRAMME_METRICS,
  PROGRAMME_PAGE,
  REPAYMENT_CONCEPTS,
  RISK_CATEGORIES,
} from "@/data/programme";

export const metadata: Metadata = {
  title: "The Programme",
  description: PROGRAMME.summary,
};

/**
 * The Note Issuance Programme on one page.
 *
 * This replaced seven separate pages (overview, how it works, use of proceeds,
 * commercial paper, bonds, repayment structure, risk management). Split across
 * a nav section of its own, the disclosure read as a product catalogue; as one
 * document with a contents list it reads as what it is — a description of the
 * securities the issuer has registered.
 */
const CONTENTS = [
  { id: "overview", label: "Overview" },
  { id: "instruments", label: "Instruments" },
  { id: "use-of-proceeds", label: "Use of proceeds" },
  { id: "how-it-works", label: "How it works" },
  { id: "repayment", label: "Repayment structure" },
  { id: "risk", label: "Risk factors" },
];

export default function ProgrammePage() {
  const copy = PROGRAMME_PAGE;

  return (
    <main id="main-content">
      <PageHero
        eyebrow="Investor Relations"
        title={copy.heroTitle}
        description={PROGRAMME.summary}
        image="/images/port-export.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Investor Relations", href: "/investor-relations" },
          { label: "The Programme" },
        ]}
      />

      <nav
        aria-label="On this page"
        className="border-b border-border bg-white"
      >
        <div className="container-site flex flex-wrap gap-x-6 gap-y-2 py-4 text-sm">
          <span className="label text-forest">On this page</span>
          {CONTENTS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-cocoa/75 underline-offset-4 transition-colors hover:text-cocoa hover:underline"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="overview" className="section-pad bg-cream">
        <div className="container-site">
          <SectionHeading
            eyebrow="Overview"
            title={copy.overview.title}
            description={copy.overview.description}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROGRAMME_METRICS.map((m) => (
              <MetricCard
                key={m.label}
                label={m.label}
                value={m.value}
                detail={m.detail}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="instruments" className="section-pad bg-white">
        <div className="container-site">
          <SectionHeading
            eyebrow="Instruments"
            title={copy.instruments.title}
            description={copy.instruments.description ?? PROGRAMME.purpose}
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {PROGRAMME.instruments.map((instrument) => (
              <article
                key={instrument.name}
                className="border border-border bg-cream px-6 py-7"
              >
                <h3 className="font-serif text-2xl text-cocoa">
                  {instrument.name}
                </h3>
                <p className="mt-2 text-sm text-forest">{instrument.tenor}</p>
                <p className="mt-4 leading-relaxed text-muted">
                  {instrument.purpose}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm text-muted">
            {copy.instruments.note}{" "}
            <Link
              href="/investor-relations/issuances"
              className="font-medium text-forest underline-offset-4 hover:underline"
            >
              View current issuances
            </Link>
            .
          </p>
        </div>
      </section>

      <section id="use-of-proceeds" className="section-pad bg-cream">
        <div className="container-site">
          <SectionHeading
            eyebrow="Use of proceeds"
            title={copy.useOfProceeds.title}
            description={copy.useOfProceeds.description}
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="border border-border bg-white px-5 py-8 md:px-8">
              <ProceedsFlow
                title="CP proceeds"
                endpoint="Approved cocoa purchase financing"
              />
              <p className="mt-6 text-sm leading-relaxed text-muted">
                {copy.useOfProceeds.commercialPaperText}
              </p>
            </div>
            <div className="border border-border bg-white px-5 py-8 md:px-8">
              <ProceedsFlow
                title="Bond proceeds"
                endpoint="Approved refinancing"
              />
              <p className="mt-6 text-sm leading-relaxed text-muted">
                {copy.useOfProceeds.bondText}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section-pad bg-white">
        <div className="container-site">
          <SectionHeading
            eyebrow="How it works"
            title={copy.howItWorks.title}
            description={copy.howItWorks.description}
          />
          <div className="mt-8 border border-border bg-cream px-5 py-8 md:px-10 md:py-10">
            <ProgrammeFlow />
          </div>
        </div>
      </section>

      <section id="repayment" className="section-pad bg-cream">
        <div className="container-site grid gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
          <div className="border border-border bg-white px-5 py-8 md:px-8 lg:w-[22rem]">
            <RepaymentFlow />
          </div>
          <div>
            <SectionHeading
              eyebrow="Repayment structure"
              title={copy.repayment.title}
              description={copy.repayment.description}
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {REPAYMENT_CONCEPTS.map((item) => (
                <InfoCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="risk" className="section-pad bg-white">
        <div className="container-site">
          <SectionHeading
            eyebrow="Risk factors"
            title={copy.risk.title}
            description={copy.risk.description}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {RISK_CATEGORIES.map((risk) => (
              <InfoCard
                key={risk.title}
                title={risk.title}
                description={risk.description}
              />
            ))}
          </div>
          <LegalDisclaimer className="mt-10" />
        </div>
      </section>
    </main>
  );
}
