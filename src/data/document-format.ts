import type { DocumentType } from "./types";

/**
 * Display helpers for documents. Kept free of CMS data so client components can
 * import them without bundling the content snapshot.
 */
export const DOCUMENT_TYPE_LABELS: Record<DocumentType, string> = {
  prospectus: "Prospectuses",
  "pricing-supplement": "Pricing Supplements",
  "financial-statement": "Financial Statements",
  "credit-rating": "Credit Ratings",
  "investor-presentation": "Investor Presentations",
  announcement: "Announcements",
  "payment-notice": "Payment Notices",
  "corporate-document": "Corporate Documents",
};

/** Em dash, not "Not yet published" — the Action cell already carries status. */
export function formatDocumentDate(date?: string): string {
  if (!date) return "—";
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
