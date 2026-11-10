/**
 * One-time import of the content currently hard-coded in src/data into Sanity.
 *
 * Run from the studio folder (after `npx sanity login`):
 *   npm run seed
 * Preview the payload without writing:
 *   npx sanity exec scripts/seed.ts -- --dry-run
 *
 * Uses createOrReplace with stable IDs, so re-running overwrites the seeded
 * documents with the local versions. Files and images keep pointing at the
 * paths already shipped in /public.
 */
import { getCliClient } from "sanity/cli";
import { LOCAL_ANNOUNCEMENTS } from "../../src/data/announcements";
import { LOCAL_DIRECTORS } from "../../src/data/directors";
import { LOCAL_DOCUMENTS } from "../../src/data/documents";
import { LOCAL_FAQ_SECTIONS } from "../../src/data/faqs";
import { LOCAL_ISSUANCES } from "../../src/data/issuances";
import { LOCAL_NEWS } from "../../src/data/news";
import { LOCAL_RATINGS } from "../../src/data/ratings";
import {
  LOCAL_CORPORATE_STRUCTURE,
  LOCAL_PROGRAMME_PARTIES,
} from "../../src/data/partners";
import {
  LOCAL_FRAMEWORK_ITEMS,
  LOCAL_PROGRAMME,
  LOCAL_PROGRAMME_METRICS,
  LOCAL_PROGRAMME_PAGE,
  LOCAL_PURPOSE_PANELS,
  LOCAL_REPAYMENT_CONCEPTS,
  LOCAL_RISK_CATEGORIES,
} from "../../src/data/programme";
import { LOCAL_TRANSACTION_DOCUMENTS } from "../../src/data/transaction-documents";
import localPublication from "../../src/data/publication.json";
import type { DocumentReference } from "../../src/data/types";

const client = getCliClient({ apiVersion: "2025-01-01" });

type SanityDoc = { _id: string; _type: string } & Record<string, unknown>;

const ref = (id: string, key: string) => ({ _type: "reference", _ref: id, _key: key });
const slug = (current: string) => ({ _type: "slug", current });
/** Objects inside Sanity arrays need a unique `_key`. */
const withKeys = <T extends object>(items: readonly T[], type: string) =>
  items.map((item, index) => ({ _key: `${type}-${index}`, _type: type, ...item }));

function toSiteDocument(doc: DocumentReference): SanityDoc {
  return {
    _id: doc.id,
    _type: "siteDocument",
    title: doc.title,
    type: doc.type,
    publicationDate: doc.publicationDate,
    year: doc.year,
    instrument: doc.instrument,
    series: doc.series,
    filePath: doc.fileUrl,
    fileSize: doc.fileSize,
    description: doc.description,
    viewerHref: doc.viewerHref,
  };
}

const documents = new Map<string, SanityDoc>();
const addDocument = (doc: DocumentReference) => {
  if (!documents.has(doc.id)) documents.set(doc.id, toSiteDocument(doc));
};
LOCAL_DOCUMENTS.forEach(addDocument);
LOCAL_ANNOUNCEMENTS.forEach((a) => a.attachments?.forEach(addDocument));
LOCAL_ISSUANCES.forEach((i) => i.documents.forEach(addDocument));

const docs: SanityDoc[] = [
  {
    _id: "siteSettings",
    _type: "siteSettings",
    showProspectus: localPublication.prospectus,
    showTransactionDocuments: localPublication.transactionDocuments,
  },
  {
    _id: "programme",
    _type: "programme",
    ...LOCAL_PROGRAMME,
    instruments: withKeys(LOCAL_PROGRAMME.instruments, "instrument"),
    metrics: withKeys(LOCAL_PROGRAMME_METRICS, "metric"),
    purposePanels: withKeys(LOCAL_PURPOSE_PANELS, "purposePanel"),
    frameworkItems: withKeys(LOCAL_FRAMEWORK_ITEMS, "frameworkItem"),
    repaymentConcepts: withKeys(LOCAL_REPAYMENT_CONCEPTS, "repaymentConcept"),
    riskCategories: withKeys(LOCAL_RISK_CATEGORIES, "riskCategory"),
    page: LOCAL_PROGRAMME_PAGE,
  },
  {
    _id: "organisation",
    _type: "organisation",
    corporateStructure: LOCAL_CORPORATE_STRUCTURE,
    programmeParties: withKeys(LOCAL_PROGRAMME_PARTIES, "programmeParty"),
  },
  // PDFs are not uploaded: the build falls back to content/transaction-documents/<slug>.pdf.
  ...LOCAL_TRANSACTION_DOCUMENTS.map((d, index) => ({
    _id: `transaction-${d.slug}`,
    _type: "transactionDocument",
    title: d.title,
    slug: slug(d.slug),
    description: d.description,
    order: index,
  })),
  ...documents.values(),
  ...LOCAL_ANNOUNCEMENTS.map((a) => ({
    _id: a.id,
    _type: "announcement",
    title: a.title,
    slug: slug(a.slug),
    date: a.date,
    category: a.category,
    summary: a.summary,
    body: a.body,
    pinned: a.pinned ?? false,
    attachments: a.attachments?.map((d) => ref(d.id, d.id)),
  })),
  ...LOCAL_NEWS.map((n) => ({
    _id: n.id,
    _type: "newsArticle",
    title: n.title,
    slug: slug(n.slug),
    date: n.date,
    category: n.category,
    summary: n.summary,
    body: n.body,
    pinned: n.pinned ?? false,
  })),
  ...LOCAL_DIRECTORS.map((d, index) => ({
    _id: d.id,
    _type: "director",
    name: d.name,
    role: d.role,
    order: index,
    imagePath: d.image,
    appointmentDate: d.appointmentDate,
    nominatingParty: d.nominatingParty,
    otherRoles: d.otherRoles,
    biography: d.biography,
    committees: d.committees,
  })),
  ...LOCAL_FAQ_SECTIONS.map((section, index) => ({
    _id: `faq-${section.id}`,
    _type: "faqSection",
    title: section.title,
    sectionId: slug(section.id),
    order: index,
    faqs: section.faqs.map((faq) => ({
      _key: faq.id,
      _type: "faq",
      question: faq.question,
      answer: faq.answer,
      points: faq.points,
    })),
  })),
  ...LOCAL_ISSUANCES.map((i) => ({
    _id: i.id,
    _type: "issuance",
    slug: slug(i.slug),
    instrumentType: i.instrumentType,
    series: i.series,
    tranche: i.tranche,
    issueDate: i.issueDate,
    maturityDate: i.maturityDate,
    tenor: i.tenor,
    issueAmount: i.issueAmount,
    currency: i.currency,
    couponRate: i.couponRate,
    interestFrequency: i.interestFrequency,
    issuePrice: i.issuePrice,
    listing: i.listing,
    status: i.status,
    documents: i.documents.map((d) => ref(d.id, d.id)),
    paymentSchedule: i.paymentSchedule?.map((p, index) => ({
      _key: `payment-${index}`,
      _type: "payment",
      ...p,
    })),
  })),
  ...LOCAL_RATINGS.map((r) => ({
    _id: r.id,
    _type: "rating",
    agency: r.agency,
    rating: r.rating,
    outlook: r.outlook,
    ratingDate: r.ratingDate,
    reportUrl: r.reportUrl,
  })),
];

// Drop undefined fields so they are not stored as empty values.
const clean = JSON.parse(JSON.stringify(docs)) as SanityDoc[];

async function main() {
  const counts = clean.reduce<Record<string, number>>((acc, doc) => {
    acc[doc._type] = (acc[doc._type] ?? 0) + 1;
    return acc;
  }, {});

  if (process.argv.includes("--dry-run")) {
    console.log(JSON.stringify(clean, null, 2));
    console.log("Dry run — nothing written:", counts);
    return;
  }

  const transaction = client.transaction();
  clean.forEach((doc) => transaction.createOrReplace(doc));
  await transaction.commit();
  console.log("Seeded Sanity dataset:", counts);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
