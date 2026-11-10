import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Supplements",
  description:
    "Applicable Pricing Supplements for Cocoa Capital PLC Note issuances.",
};

export default function PricingSupplementsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
