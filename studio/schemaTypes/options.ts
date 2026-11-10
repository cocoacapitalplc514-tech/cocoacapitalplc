/** Option lists shared by several schemas. Values must match src/data/types.ts. */

export const DOCUMENT_TYPES = [
  { title: "Prospectus", value: "prospectus" },
  { title: "Pricing Supplement", value: "pricing-supplement" },
  { title: "Financial Statement", value: "financial-statement" },
  { title: "Credit Rating", value: "credit-rating" },
  { title: "Investor Presentation", value: "investor-presentation" },
  { title: "Announcement", value: "announcement" },
  { title: "Payment Notice", value: "payment-notice" },
  { title: "Corporate Document", value: "corporate-document" },
];

export const INSTRUMENT_TYPES = [
  { title: "Commercial Paper", value: "commercial-paper" },
  { title: "Bond", value: "bond" },
];

export const ANNOUNCEMENT_CATEGORIES = [
  { title: "Issuance", value: "issuance" },
  { title: "Investor Notice", value: "investor-notice" },
  { title: "Payment Notice", value: "payment-notice" },
  { title: "Corporate", value: "corporate" },
  { title: "Press Release", value: "press-release" },
  { title: "General", value: "general" },
];

export const ISSUANCE_STATUSES = [
  { title: "Upcoming", value: "upcoming" },
  { title: "Open", value: "open" },
  { title: "Closed", value: "closed" },
  { title: "Outstanding", value: "outstanding" },
  { title: "Matured", value: "matured" },
  { title: "Redeemed", value: "redeemed" },
];

export const PAYMENT_STATUSES = [
  { title: "Scheduled", value: "scheduled" },
  { title: "Paid", value: "paid" },
  { title: "Upcoming", value: "upcoming" },
  { title: "TBD", value: "tbd" },
];
