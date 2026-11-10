import { PricingSupplements } from "@/components/documents/PricingSupplements";
import { getDocumentsByType } from "@/data/documents";

// Server component: only the published supplements are sent to the browser.
export default function PricingSupplementsPage() {
  return <PricingSupplements documents={getDocumentsByType("pricing-supplement")} />;
}
