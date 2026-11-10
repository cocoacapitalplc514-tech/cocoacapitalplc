import { announcement } from "./announcement";
import { director } from "./director";
import { faqSection } from "./faqSection";
import { issuance } from "./issuance";
import { newsArticle } from "./newsArticle";
import { organisation } from "./organisation";
import { programme } from "./programme";
import { rating } from "./rating";
import { siteDocument } from "./siteDocument";
import { siteSettings } from "./siteSettings";
import { transactionDocument } from "./transactionDocument";

/** Types edited as a single fixed document (document ID = type name). */
export const SINGLETON_TYPES = new Set(["siteSettings", "programme", "organisation"]);

export const schemaTypes = [
  siteSettings,
  programme,
  organisation,
  announcement,
  newsArticle,
  siteDocument,
  transactionDocument,
  issuance,
  rating,
  director,
  faqSection,
];
