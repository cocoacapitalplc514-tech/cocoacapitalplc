import fs from "node:fs";
import path from "node:path";
import { createClient } from "@sanity/client";

/**
 * Pulls published content from Sanity into src/generated/cms.json, which the
 * modules in src/data read at build time (the site is a static export).
 *
 * Without SANITY_PROJECT_ID the committed snapshot is left untouched, so the
 * site still builds from its hard-coded content.
 *
 * Run with: node scripts/sync-sanity.mjs
 */

const ROOT = process.cwd();
const OUTPUT = path.join(ROOT, "src", "generated", "cms.json");
const TRANSACTION_CACHE = path.join(ROOT, ".cms-cache", "transaction-documents");

for (const file of [".env.local", ".env"]) {
  const envPath = path.join(ROOT, file);
  if (fs.existsSync(envPath)) process.loadEnvFile(envPath);
}

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || "production";
const token = process.env.SANITY_API_READ_TOKEN || undefined;

if (!projectId) {
  console.log("SANITY_PROJECT_ID not set — keeping existing CMS snapshot.");
  process.exit(0);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2025-01-01",
  useCdn: false,
  perspective: "published",
});

const IMAGE_PARAMS = "?w=800&fit=max&auto=format";

const DOCUMENT = `{
  "id": _id,
  title,
  type,
  publicationDate,
  year,
  instrument,
  series,
  "fileUrl": coalesce(file.asset->url, filePath),
  "assetSize": file.asset->size,
  fileSize,
  description,
  viewerHref
}`;

const QUERY = `{
  "announcements": *[_type == "announcement" && defined(slug.current)] | order(date desc) {
    "id": _id,
    "slug": slug.current,
    title,
    date,
    category,
    summary,
    body,
    pinned,
    "attachments": attachments[]->${DOCUMENT}
  },
  "news": *[_type == "newsArticle" && defined(slug.current)] | order(date desc) {
    "id": _id,
    "slug": slug.current,
    title,
    date,
    category,
    summary,
    body,
    "image": image.asset->url + "${IMAGE_PARAMS}",
    "alt": image.alt,
    pinned
  },
  "documents": *[_type == "siteDocument"] | order(publicationDate desc) ${DOCUMENT},
  "directors": *[_type == "director"] | order(order asc) {
    "id": _id,
    name,
    role,
    "image": coalesce(photo.asset->url + "${IMAGE_PARAMS}", imagePath),
    appointmentDate,
    nominatingParty,
    otherRoles,
    biography,
    committees
  },
  "faqSections": *[_type == "faqSection" && defined(sectionId.current)] | order(order asc) {
    "id": sectionId.current,
    title,
    "faqs": coalesce(faqs[]{ "id": _key, question, answer, points }, [])
  },
  "issuances": *[_type == "issuance" && defined(slug.current)] | order(issueDate desc) {
    "id": _id,
    "slug": slug.current,
    instrumentType,
    series,
    tranche,
    issueDate,
    maturityDate,
    tenor,
    issueAmount,
    currency,
    couponRate,
    interestFrequency,
    issuePrice,
    listing,
    status,
    "documents": coalesce(documents[]->${DOCUMENT}, []),
    "paymentSchedule": paymentSchedule[]{ paymentDate, type, amountOrRate, status }
  },
  "ratings": *[_type == "rating"] | order(ratingDate desc) {
    "id": _id,
    agency,
    rating,
    outlook,
    ratingDate,
    "reportUrl": coalesce(report.asset->url, reportUrl)
  },
  "siteSettings": *[_id == "siteSettings"][0] {
    "prospectus": coalesce(showProspectus, false),
    "transactionDocuments": coalesce(showTransactionDocuments, false)
  },
  "programme": *[_id == "programme"][0] {
    "info": {
      name, sizeLabel, sizeShort, listing, listingFull, purpose, summary,
      "instruments": coalesce(instruments[]{ name, tenor, purpose }, [])
    },
    "metrics": coalesce(metrics[]{ label, value, detail }, []),
    "purposePanels": coalesce(purposePanels[]{ title, description, href }, []),
    "frameworkItems": coalesce(frameworkItems[]{ title, description }, []),
    "repaymentConcepts": coalesce(repaymentConcepts[]{ title, description }, []),
    "riskCategories": coalesce(riskCategories[]{ title, description }, []),
    "page": page {
      heroTitle,
      overview { title, description },
      instruments { title, description, note },
      useOfProceeds { title, description, commercialPaperText, bondText },
      howItWorks { title, description },
      repayment { title, description },
      risk { title, description }
    }
  },
  "organisation": *[_id == "organisation"][0] {
    "corporateStructure": corporateStructure {
      sponsor { name, role },
      issuer { name, role },
      corporateManager { name, role }
    },
    "programmeParties": coalesce(programmeParties[]{ role, "organisations": coalesce(organisations, []) }, [])
  },
  "transactionDocuments": *[_type == "transactionDocument" && defined(slug.current)] | order(order asc) {
    "slug": slug.current,
    title,
    description,
    "fileUrl": file.asset->url
  }
}`;

function formatBytes(bytes) {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${Math.max(1, Math.round(bytes / 1024))} KB`;
}

/** GROQ returns null for missing fields; the site types expect them absent. */
function stripNulls(value) {
  if (Array.isArray(value)) {
    return value.filter((item) => item != null).map(stripNulls);
  }
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value)
        .filter(([, item]) => item != null)
        .map(([key, item]) => [key, stripNulls(item)])
    );
  }
  return value;
}

function normaliseDocument({ assetSize, ...doc }) {
  return {
    ...doc,
    fileSize: assetSize ? formatBytes(assetSize) : doc.fileSize,
    year: doc.year ?? (doc.publicationDate ? Number(doc.publicationDate.slice(0, 4)) : undefined),
  };
}

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/**
 * Transaction PDFs are downloaded for scripts/render-transaction-documents.mjs
 * and their URLs are kept out of the snapshot so they never reach the site.
 */
async function downloadTransactionDocuments(documents) {
  await fs.promises.rm(TRANSACTION_CACHE, { recursive: true, force: true });
  await fs.promises.mkdir(TRANSACTION_CACHE, { recursive: true });
  for (const { slug, fileUrl } of documents) {
    if (!fileUrl) continue;
    const response = await fetch(fileUrl);
    if (!response.ok) {
      throw new Error(`Failed to download transaction document "${slug}": ${response.status}`);
    }
    const target = path.join(TRANSACTION_CACHE, `${slug}.pdf`);
    await fs.promises.writeFile(target, Buffer.from(await response.arrayBuffer()));
    console.log(`Downloaded transaction document: ${slug}`);
  }
}

const SITE_TYPES = [
  "siteSettings", "programme", "organisation", "announcement", "newsArticle",
  "siteDocument", "transactionDocument", "issuance", "rating", "director", "faqSection",
];

// An empty dataset (e.g. before `npm run seed`) would otherwise wipe the site.
const contentCount = await client.fetch("count(*[_type in $types])", { types: SITE_TYPES });
if (contentCount === 0) {
  console.warn(
    `Sanity dataset ${projectId}/${dataset} has no site content yet — keeping existing CMS snapshot. Run the seed (see README).`
  );
  process.exit(0);
}

const result = stripNulls(await client.fetch(QUERY));

// News and announcements share /news/<slug>; a clash would silently hide one.
const newsSlugs = [...result.news, ...result.announcements].map((item) => item.slug);
const clashes = [...new Set(newsSlugs.filter((slug, index) => newsSlugs.indexOf(slug) !== index))];
if (clashes.length) {
  throw new Error(
    `These slugs are used by more than one news article/announcement: ${clashes.join(", ")}. Give each a unique slug in the Studio.`
  );
}

const transactionDocuments = result.transactionDocuments.filter(({ slug }) => {
  if (SLUG_PATTERN.test(slug)) return true;
  console.warn(`Skipping transaction document with invalid slug: ${slug}`);
  return false;
});
await downloadTransactionDocuments(transactionDocuments);

const { programme, organisation } = result;

// A hidden prospectus keeps its PDF URL out of the snapshot (which may be
// committed to the public repository) until it is published.
const prospectusPublished = result.siteSettings?.prospectus ?? false;
const normaliseSiteDocument = (doc) => {
  const normalised = normaliseDocument(doc);
  if (normalised.type === "prospectus" && !prospectusPublished) {
    delete normalised.fileUrl;
    delete normalised.fileSize;
  }
  return normalised;
};

const snapshot = {
  source: "sanity",
  announcements: result.announcements.map((item) => ({
    ...item,
    attachments: item.attachments?.map(normaliseSiteDocument),
  })),
  news: result.news,
  documents: result.documents.map(normaliseSiteDocument),
  directors: result.directors,
  faqSections: result.faqSections,
  issuances: result.issuances.map((item) => ({
    ...item,
    documents: item.documents.map(normaliseSiteDocument),
  })),
  ratings: result.ratings,
  // Singletons that have not been created yet are omitted, so the site falls
  // back to its local content for them.
  publication: result.siteSettings,
  programme: programme?.info,
  programmeMetrics: programme?.metrics,
  purposePanels: programme?.purposePanels,
  frameworkItems: programme?.frameworkItems,
  repaymentConcepts: programme?.repaymentConcepts,
  riskCategories: programme?.riskCategories,
  programmePage: programme?.page,
  corporateStructure: organisation?.corporateStructure,
  programmeParties: organisation?.programmeParties,
  transactionDocuments: transactionDocuments.map(({ slug, title, description }) => ({
    slug,
    title,
    description,
  })),
};

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
fs.writeFileSync(OUTPUT, `${JSON.stringify(stripNulls(snapshot), null, 2)}\n`);

const counts = Object.entries(snapshot)
  .filter(([, value]) => Array.isArray(value))
  .map(([key, value]) => `${key}: ${value.length}`)
  .join(", ");
console.log(`Synced Sanity ${projectId}/${dataset} → ${path.relative(ROOT, OUTPUT)} (${counts})`);
