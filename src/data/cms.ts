import snapshot from "../generated/cms.json";
import type {
  Announcement,
  CorporateStructure,
  Director,
  DocumentReference,
  Issuance,
  NewsArticle,
  ProgrammeFrameworkItem,
  ProgrammeInfo,
  ProgrammeMetric,
  ProgrammePageCopy,
  ProgrammeParty,
  PublicationSettings,
  PurposePanel,
  Rating,
} from "./types";
import type { FAQSection } from "./faqs";
import type { TransactionDocumentDetails } from "./transaction-documents";

/**
 * Content synced from Sanity by `scripts/sync-sanity.mjs` at build time.
 * When `source` is "local" (no Sanity project configured), every data module
 * falls back to its hard-coded `LOCAL_*` content. A key missing from a Sanity
 * snapshot (e.g. a singleton that has not been created yet) also falls back.
 */
interface CmsSnapshot {
  source: "sanity" | "local";
  announcements?: Announcement[];
  news?: NewsArticle[];
  documents?: DocumentReference[];
  directors?: Director[];
  faqSections?: FAQSection[];
  issuances?: Issuance[];
  ratings?: Rating[];
  publication?: PublicationSettings;
  programme?: ProgrammeInfo;
  programmeMetrics?: ProgrammeMetric[];
  frameworkItems?: ProgrammeFrameworkItem[];
  purposePanels?: PurposePanel[];
  riskCategories?: ProgrammeFrameworkItem[];
  repaymentConcepts?: ProgrammeFrameworkItem[];
  programmePage?: ProgrammePageCopy;
  programmeParties?: ProgrammeParty[];
  corporateStructure?: CorporateStructure;
  transactionDocuments?: TransactionDocumentDetails[];
}

const CMS = snapshot as CmsSnapshot;

export function fromCms<K extends Exclude<keyof CmsSnapshot, "source">>(
  key: K,
  fallback: NonNullable<CmsSnapshot[K]>
): NonNullable<CmsSnapshot[K]> {
  if (CMS.source !== "sanity") return fallback;
  return (CMS[key] ?? fallback) as NonNullable<CmsSnapshot[K]>;
}
