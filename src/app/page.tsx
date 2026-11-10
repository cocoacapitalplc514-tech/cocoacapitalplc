import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";
import {
  FRAMEWORK_ITEMS,
  PROGRAMME_METRICS,
  PURPOSE_PANELS,
} from "@/data/programme";
import { PROGRAMME_PARTIES } from "@/data/partners";
import { SectionHeading } from "@/components/ui/section-heading";
import { InfoCard } from "@/components/ui/info-card";
import { Button } from "@/components/ui/button";
import { EngravedCocoa } from "@/components/ui/engraved-cocoa";
import { formatMetric } from "@/lib/format";
import { ProgrammeFlow } from "@/components/programme/ProgrammeFlow";
import { PartnerGroup } from "@/components/partners/PartnerGroup";
import { ANNOUNCEMENTS } from "@/data/announcements";
import { formatPublishedDate, statusLabel } from "@/lib/format";

export const metadata: Metadata = {
  title: `${SITE.name} | Financing Ghana’s Cocoa Future`,
  description: SITE.description,
};

/**
 * What the issuer actually does, in three statements. Mirrors the pattern used
 * by comparable Ghanaian SPV issuers, which lead with the entity's specific
 * activities rather than with products or services.
 */
const ISSUER_ACTIVITIES = [
  {
    title: "Issues securities",
    description:
      "Issues Commercial Paper and Bonds in Series and Tranches under the Note Issuance Programme, listed on the Ghana Fixed Income Market.",
  },
  {
    title: "Administers proceeds",
    description:
      "Receives and applies issue proceeds through designated controlled accounts, only for approved programme purposes.",
  },
  {
    title: "Pays Noteholders",
    description:
      "Administers the assigned cocoa receivables and debt service arrangements from which amounts due under the Notes are paid.",
  },
];

/** Investor entry points, in the order an institutional visitor needs them. */
const INVESTOR_LINKS = [
  {
    href: "/investor-relations/issuances",
    title: "Current Issuances",
    description: "Series and tranches issued under the Programme.",
  },
  {
    href: "/downloads",
    title: "Downloads Centre",
    description: "Pricing supplements, statements and notices.",
  },
];

export default function HomePage() {
  return (
    <main id="main-content">
      {/* Hero */}
      <section className="relative overflow-hidden bg-cocoa pt-[var(--header-h)] text-white">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="/images/hero-cocoa.jpg"
            alt=""
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          {/* Right side stays dark: the hero illustration sits there and carries
              no backdrop of its own. */}
          <div className="absolute inset-0 bg-gradient-to-r from-cocoa via-cocoa/92 to-cocoa/85" />
        </div>
        <div className="container-site relative grid items-center gap-10 py-16 sm:py-20 md:py-24 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16 lg:py-28">
          <div>
            <p className="label text-gold">{SITE.name}</p>
            <h1 className="heading-xl mt-4 max-w-3xl text-balance text-white md:mt-5">
              Financing Ghana’s Cocoa Future
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:mt-6 md:text-lg">
              A dedicated financing special-purpose vehicle established by the
              Ghana Cocoa Board, raising capital through Commercial Paper and
              Bonds for approved cocoa-sector financing and refinancing under a
              programme of up to GHS 16.3 billion.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 md:mt-10">
              <Button asChild variant="gold" size="lg">
                <Link href="/investor-relations/programme">
                  About the Programme
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:bg-white/10"
              >
                <Link href="/investor-relations">Investor Relations</Link>
              </Button>
            </div>
          </div>

          {/* Desktop only. It belongs to the two-column hero, and the hairline
              engraving degrades below roughly 20rem. */}
          <EngravedCocoa className="hidden lg:block lg:w-[20rem] xl:w-[22rem]" />
        </div>

        {/*
          Programme facts sit on the hero rather than in a section of their own.
          The four values are fixed programme features, not live figures.
        */}
        <div className="relative border-t border-white/15">
          <dl className="container-site grid divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
            {PROGRAMME_METRICS.map((metric, index) => (
              <div
                key={metric.label}
                className={
                  index > 0
                    ? "py-5 sm:border-l sm:border-white/10 sm:py-6 sm:pl-6 lg:pl-8"
                    : "py-5 sm:py-6 sm:pr-6"
                }
              >
                <dt className="label text-gold">{metric.label}</dt>
                <dd className="mt-2 font-serif text-xl text-white md:text-2xl">
                  {formatMetric(metric.value)}
                </dd>
                {metric.detail && (
                  <p className="mt-1 text-sm text-white/60">{metric.detail}</p>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Latest official announcements. Hidden when none have been published. */}
      {ANNOUNCEMENTS.length > 0 && (
        <section className="section-pad bg-white">
          <div className="container-site">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Announcements"
                title="Latest announcements"
                description="Official issuance notices and press statements."
              />
              <Button asChild variant="outline-cocoa">
                <Link href="/investor-relations/announcements">
                  All announcements
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {[...ANNOUNCEMENTS]
                .sort((a, b) => b.date.localeCompare(a.date))
                .map((item) => (
                  <article
                    key={item.id}
                    className="flex flex-col border border-border bg-cream px-6 py-7 md:px-8"
                  >
                    <p className="text-xs text-muted">
                      <time dateTime={item.date}>
                        {formatPublishedDate(item.date)}
                      </time>
                      <span aria-hidden> · </span>
                      <span>{statusLabel(item.category)}</span>
                    </p>
                    <h3 className="mt-3 font-serif text-2xl text-cocoa">
                      {item.title}
                    </h3>
                    <p className="mt-4 grow leading-relaxed text-muted">
                      {item.summary}
                    </p>
                    <Link
                      href={`/news/${item.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-forest underline-offset-4 hover:underline"
                    >
                      Read more
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </article>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* Who we are — the explicit SPV statement, on the homepage. */}
      <section className="section-pad bg-cream">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <h2 className="label font-sans text-forest">Who we are</h2>
            <div className="gold-rule mt-5" />
            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              <p>
                Cocoa Capital PLC is a special-purpose vehicle incorporated as a
                public limited company in Ghana. It was established by the Ghana
                Cocoa Board (COCOBOD), which is its sole shareholder and
                sponsor, for the single purpose of raising financing for
                approved cocoa-sector funding requirements and administering the
                related payment, reporting and compliance obligations.
              </p>
              <p>
                Cocoa Capital PLC does not trade cocoa, manage investment
                portfolios, provide funding to customers or accept deposits.
              </p>
            </div>
            <p className="mt-6 text-sm">
              <Link
                href="/about"
                className="font-medium text-forest underline-offset-4 hover:underline"
              >
                More about the company
              </Link>
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {ISSUER_ACTIVITIES.map((item) => (
              <InfoCard
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <SectionHeading
            eyebrow="Purpose of the Programme"
            title="Two approved financing purposes"
            description="Proceeds are applied only for the two approved financing purposes."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
            {PURPOSE_PANELS.map((panel) => (
              <article
                key={panel.title}
                className="border border-border bg-cream px-7 py-8 md:px-8"
              >
                <h3 className="font-serif text-2xl text-cocoa">{panel.title}</h3>
                <p className="mt-4 leading-relaxed text-muted">
                  {panel.description}
                </p>
                <Link
                  href={panel.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-forest underline-offset-4 hover:underline"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-pad bg-cream">
        <div className="container-site">
          <SectionHeading
            eyebrow="How the Programme works"
            title="From issuance to repayment"
          />
          <div className="mt-10 border border-border bg-white px-6 py-9 md:px-10 md:py-10">
            <ProgrammeFlow />
          </div>
          <p className="mt-6 text-sm">
            <Link
              href="/investor-relations/programme#how-it-works"
              className="font-medium text-forest underline-offset-4 hover:underline"
            >
              View the full programme flow
            </Link>
          </p>
        </div>
      </section>

      {/* Structured framework */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <SectionHeading
            eyebrow="A structured framework"
            title="Programme structure and payment controls"
            description="Investor protection mechanisms under the programme — not guarantees of repayment."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {FRAMEWORK_ITEMS.map((item) => (
              <InfoCard
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Investor entry points */}
      <section className="section-pad bg-cream">
        <div className="container-site">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Investor information"
              title="Programme documents and disclosures"
            />
            <Button asChild variant="outline-cocoa">
              <Link href="/investor-relations">Investor Relations Centre</Link>
            </Button>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
            {INVESTOR_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group border border-border bg-white px-6 py-7 transition-colors hover:border-cocoa/40"
              >
                <h3 className="font-serif text-xl text-cocoa">{link.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {link.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-forest">
                  Open
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Programme parties */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <SectionHeading
            eyebrow="Programme parties"
            title="Institutional service providers"
            description="Institutional service providers grouped by responsibility."
          />
          <div className="mt-10">
            <PartnerGroup parties={PROGRAMME_PARTIES.slice(0, 3)} />
          </div>
          <p className="mt-6 text-sm">
            <Link
              href="/about/programme-parties"
              className="font-medium text-forest underline-offset-4 hover:underline"
            >
              Full list of programme parties
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
