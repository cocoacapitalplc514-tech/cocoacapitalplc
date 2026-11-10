import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { ISSUANCES } from "@/data/issuances";
import { NEWS } from "@/data/news";
import { ANNOUNCEMENTS } from "@/data/announcements";
import { TRANSACTION_DOCUMENTS } from "@/data/transaction-documents";
import { PUBLICATION } from "@/data/site-settings";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;

  const staticRoutes = [
    "",
    "/about",
    "/about/mandate",
    "/about/corporate-structure",
    "/about/board",
    "/about/corporate-manager",
    "/about/programme-parties",
    "/investor-relations",
    "/investor-relations/programme",
    "/investor-relations/issuances",
    "/investor-relations/pricing-supplements",
    "/investor-relations/financial-statements",
    "/investor-relations/credit-ratings",
    "/investor-relations/presentations",
    "/investor-relations/announcements",
    "/investor-relations/faqs",
    "/news",
    "/downloads",
    "/contact",
    "/privacy",
    "/terms",
    "/disclaimer",
  ];


  const issuanceRoutes = ISSUANCES.map(
    (item) => `/investor-relations/issuances/${item.slug}`
  );
  const transactionDocumentRoutes = PUBLICATION.transactionDocuments
    ? [
        "/investor-relations/transaction-documents",
        ...TRANSACTION_DOCUMENTS.map(
          (document) =>
            `/investor-relations/transaction-documents/${document.slug}`
        ),
      ]
    : [];
  const prospectusRoutes = PUBLICATION.prospectus
    ? ["/investor-relations/prospectus"]
    : [];
  const newsRoutes = [
    ...NEWS.map((n) => `/news/${n.slug}`),
    ...ANNOUNCEMENTS.map((a) => `/news/${a.slug}`),
  ];

  return [
    ...staticRoutes,
    ...issuanceRoutes,
    ...prospectusRoutes,
    ...transactionDocumentRoutes,
    ...newsRoutes,
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
