import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/reveal";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "How to Invest",
  description:
    "A clear, four-step process to begin investing with Cocoa Capital PLC.",
};

const STEPS = [
  {
    title: "Enquire",
    description:
      "Contact our investor relations team to discuss objectives, tenor, and suitable instruments.",
  },
  {
    title: "Onboard",
    description:
      "Complete KYC and account documentation. Institutional investors receive a dedicated relationship manager.",
  },
  {
    title: "Subscribe",
    description:
      "Review the offer terms and information memorandum, then confirm your subscription amount.",
  },
  {
    title: "Monitor",
    description:
      "Receive periodic statements, portfolio reporting, and access to Investor Centre disclosures.",
  },
];

export default function HowToInvestPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Investments"
        title="How to invest with us."
        description="A straightforward process, governed by documentation and disclosure at every stage."
      />

      <section className="section-pad bg-cream">
        <div className="container-site max-w-3xl">
          <ol className="space-y-14">
            {STEPS.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08} y={24}>
                <li className="grid gap-4 sm:grid-cols-[auto_1fr] sm:gap-8">
                  <span className="font-serif text-4xl text-gold/60">
                    0{index + 1}
                  </span>
                  <div className="border-t border-border pt-4 sm:pt-3">
                    <h2 className="font-serif text-2xl text-cocoa lg:text-3xl">
                      {step.title}
                    </h2>
                    <p className="copy mt-3 text-muted">
                      {step.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          <p className="copy mt-10 border-l-2 md:mt-16 border-gold/40 pl-6 text-muted">
            Investments carry risk, including possible loss of capital. Past
            performance is not indicative of future results. Please read all
            offer documentation before subscribing.
          </p>
        </div>
      </section>

      <CTA />
    </main>
  );
}
