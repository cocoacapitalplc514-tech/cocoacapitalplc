import type {
  ProgrammeFrameworkItem,
  ProgrammeInfo,
  ProgrammeMetric,
  ProgrammePageCopy,
  PurposePanel,
} from "./types";
import { fromCms } from "./cms";

export const LOCAL_PROGRAMME: ProgrammeInfo = {
  name: "Note Issuance Programme",
  sizeLabel: "GHS 16.3 billion",
  sizeShort: "GHS 16.3bn",
  listing: "GFIM",
  listingFull: "Ghana Fixed Income Market (GFIM)",
  purpose:
    "Cocoa Capital PLC raises financing through Commercial Paper and Bonds for approved cocoa-sector financing and refinancing purposes.",
  summary:
    "Cocoa Capital PLC is a dedicated financing special-purpose vehicle established by COCOBOD. Its Note Issuance Programme is intended to raise up to GHS 16.3 billion for cocoa purchase financing and refinancing of COCOBOD legacy debt.",
  instruments: [
    {
      name: "Commercial Paper",
      tenor: "At least 15 calendar days and up to 270 calendar days",
      purpose: "Cocoa purchase financing relating to cocoa beans delivered by Licensed Buying Companies.",
    },
    {
      name: "Bonds",
      tenor: "Longer-term tenors specified in the applicable Pricing Supplement",
      purpose: "Approved refinancing of COCOBOD legacy obligations and related programme purposes.",
    },
  ],
};

export const LOCAL_PROGRAMME_METRICS: ProgrammeMetric[] = [
  {
    label: "Programme Size",
    value: "GHS 16.3bn",
    detail: "Maximum programme size",
  },
  {
    label: "Commercial Paper",
    value: "Short-term financing",
    detail: "15–270 calendar days",
  },
  {
    label: "Bonds",
    value: "Longer-term financing",
    detail: "Series and tranches",
  },
  {
    label: "Capital market listing",
    value: "GFIM",
    detail: "Ghana Fixed Income Market",
  },
];

export const LOCAL_FRAMEWORK_ITEMS: ProgrammeFrameworkItem[] = [
  {
    title: "Assigned Receivables",
    description:
      "Repayments are primarily funded through assigned cocoa receivables arising from cocoa sales.",
  },
  {
    title: "Controlled Accounts",
    description:
      "Proceeds and collections are routed through designated subscription, utilisation, collections and escrow accounts.",
  },
  {
    title: "Debt Service Framework",
    description:
      "Debt service accounts and coverage requirements support orderly payment of amounts due under the Notes.",
  },
  {
    title: "Trustee Oversight",
    description:
      "A trustee provides oversight of programme structure and investor protection mechanisms.",
  },
  {
    title: "Calculation & Paying Agents",
    description:
      "Independent agents calculate amounts due and facilitate payments to Noteholders in accordance with the programme.",
  },
  {
    title: "Applicable Pricing Supplements",
    description:
      "Each series or tranche is governed by an Applicable Pricing Supplement setting out commercial terms and conditions.",
  },
];

export const LOCAL_PURPOSE_PANELS: PurposePanel[] = [
  {
    title: "Cocoa Purchase Financing",
    description:
      "Commercial Paper proceeds support payments relating to cocoa beans delivered by Licensed Buying Companies, providing seasonal financing aligned with Ghana’s cocoa purchasing cycle.",
    href: "/investor-relations/programme#use-of-proceeds",
  },
  {
    title: "Legacy Debt Refinancing",
    description:
      "Relevant Bond proceeds may be used to refinance approved COCOBOD legacy obligations, supporting a more sustainable domestic capital-market funding structure.",
    href: "/investor-relations/programme#use-of-proceeds",
  },
];

export const LOCAL_RISK_CATEGORIES: ProgrammeFrameworkItem[] = [
  {
    title: "Transaction risks",
    description:
      "Risks arising from the structure of the Note Issuance Programme, including documentation, account arrangements and fulfilment of conditions precedent.",
  },
  {
    title: "Receivables risk",
    description:
      "Repayment depends primarily on cocoa receivables. Timing, volume and collectability of those receivables may affect debt service.",
  },
  {
    title: "Sponsor-related risks",
    description:
      "The programme relies on COCOBOD as sponsor and sole shareholder. Operational or financial developments affecting COCOBOD may influence programme performance.",
  },
  {
    title: "Market risks",
    description:
      "Cocoa prices, foreign exchange conditions and broader capital-market conditions may affect financing outcomes and refinancing capacity.",
  },
  {
    title: "Interest-rate risk",
    description:
      "Interest rates applicable to particular series or tranches may vary. Changes in market rates can affect pricing of future issuances.",
  },
  {
    title: "Regulatory risk",
    description:
      "Securities, cocoa-sector and related regulatory requirements may change and could affect issuance, listing or programme administration.",
  },
  {
    title: "Operational risks",
    description:
      "Programme administration depends on the Corporate Manager, agents, trustees and account banks performing their roles.",
  },
];

export const LOCAL_REPAYMENT_CONCEPTS: ProgrammeFrameworkItem[] = [
  {
    title: "Debt Service Coverage Ratio",
    description:
      "A Debt Service Coverage Ratio is maintained while Notes remain outstanding.",
  },
  {
    title: "Debt service accounts",
    description:
      "Designated accounts accumulate amounts required for scheduled interest and principal payments under the Notes.",
  },
  {
    title: "Paying Agent",
    description:
      "The paying agent facilitates payments to Noteholders in accordance with the terms of each issuance.",
  },
  {
    title: "Trustee role",
    description:
      "The Trustee provides oversight of programme structure and investor protection mechanisms under the trust arrangements.",
  },
];

export const LOCAL_PROGRAMME_PAGE: ProgrammePageCopy = {
  heroTitle: "The Note Issuance Programme",
  overview: { title: "Programme size, instruments and listing" },
  instruments: {
    title: "Approved use of programme financing",
    note: "Notes may be issued in Series and Tranches. Commercial terms for each issuance are published in the Applicable Pricing Supplement.",
  },
  useOfProceeds: {
    title: "Two approved financing pathways",
    description:
      "Proceeds follow controlled account pathways before application to approved programme purposes.",
    commercialPaperText:
      "Relevant Commercial Paper proceeds are intended to support payments relating to cocoa beans delivered by Licensed Buying Companies.",
    bondText:
      "Relevant Bond proceeds may be used to refinance approved COCOBOD legacy obligations and related programme purposes.",
  },
  howItWorks: { title: "From issuance to repayment" },
  repayment: {
    title: "Debt service framework",
    description:
      "Repayments are primarily funded through Cocoa Receivables and routed through designated controlled accounts before payments to Noteholders.",
  },
  risk: {
    title: "Areas investors should consider",
    description:
      "Categories only. Full risk disclosures are in the Programme Prospectus and the Applicable Pricing Supplement, which investors should read before making any investment decision.",
  },
};

export const PROGRAMME: ProgrammeInfo = fromCms("programme", LOCAL_PROGRAMME);
export const PROGRAMME_METRICS: ProgrammeMetric[] = fromCms(
  "programmeMetrics",
  LOCAL_PROGRAMME_METRICS
);
export const FRAMEWORK_ITEMS: ProgrammeFrameworkItem[] = fromCms(
  "frameworkItems",
  LOCAL_FRAMEWORK_ITEMS
);
export const PURPOSE_PANELS: PurposePanel[] = fromCms(
  "purposePanels",
  LOCAL_PURPOSE_PANELS
);
export const RISK_CATEGORIES: ProgrammeFrameworkItem[] = fromCms(
  "riskCategories",
  LOCAL_RISK_CATEGORIES
);
export const REPAYMENT_CONCEPTS: ProgrammeFrameworkItem[] = fromCms(
  "repaymentConcepts",
  LOCAL_REPAYMENT_CONCEPTS
);
export const PROGRAMME_PAGE: ProgrammePageCopy = fromCms(
  "programmePage",
  LOCAL_PROGRAMME_PAGE
);
