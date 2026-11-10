import localPublication from "./publication.json";
import type { PublicationSettings } from "./types";
import { fromCms } from "./cms";

/**
 * Visibility of the prospectus and transaction documents. Managed in the CMS
 * ("Site settings"); `publication.json` is the fallback without Sanity.
 */
export const PUBLICATION: PublicationSettings = fromCms(
  "publication",
  localPublication
);
