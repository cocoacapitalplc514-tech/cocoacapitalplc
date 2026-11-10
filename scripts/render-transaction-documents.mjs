import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";
import * as mupdf from "mupdf";
import localPublication from "../src/data/publication.json" with { type: "json" };
import cms from "../src/generated/cms.json" with { type: "json" };

/**
 * Rasterises the view-only transaction documents.
 *
 * The source PDFs stay in `content/` (or are downloaded from Sanity into
 * `.cms-cache/` by scripts/sync-sanity.mjs) and are never copied into
 * `public/`. Investors see page images in the on-site viewer, so the site has
 * no PDF file to download and no browser PDF toolbar (download / print).
 *
 * MuPDF is used because these agreements include JBIG2 images that the
 * pdf.js renderer cannot decode.
 *
 * Run with: node scripts/render-transaction-documents.mjs
 */

const ROOT = process.cwd();
const SOURCE_DIR = path.join(ROOT, "content", "transaction-documents");
const CMS_SOURCE_DIR = path.join(ROOT, ".cms-cache", "transaction-documents");
const OUT_DIR = path.join(ROOT, "public", "documents", "view-only");
const MANIFEST_PATH = path.join(
  ROOT,
  "src",
  "generated",
  "transaction-documents.json"
);

/** 144 dpi. Sharp enough to read the agreements on screen. */
const SCALE = 2;

const fromSanity = cms.source === "sanity";
const publication = (fromSanity && cms.publication) || localPublication;

const LOCAL_DOCUMENTS = [
  { slug: "assignment-agreement" },
  { slug: "financing-agreement" },
  { slug: "trust-deed" },
];

const DOCUMENTS =
  fromSanity && cms.transactionDocuments
    ? cms.transactionDocuments.map(({ slug }) => ({ slug }))
    : LOCAL_DOCUMENTS;

/** A PDF uploaded in the CMS wins over the copy in content/. */
function sourceFor(slug) {
  const candidates = [
    ...(fromSanity ? [path.join(CMS_SOURCE_DIR, `${slug}.pdf`)] : []),
    path.join(SOURCE_DIR, `${slug}.pdf`),
  ];
  return candidates.find((candidate) => existsSync(candidate));
}

async function renderDocument({ slug }) {
  const source = sourceFor(slug);
  const dest = path.join(OUT_DIR, slug);
  await fs.rm(dest, { recursive: true, force: true });
  if (!source) {
    console.warn(`${slug}: no PDF found — the page will show "not available"`);
    return 0;
  }
  await fs.mkdir(dest, { recursive: true });

  const doc = mupdf.Document.openDocument(await fs.readFile(source), "application/pdf");
  const pages = doc.countPages();
  console.log(`${slug}: ${pages} pages`);

  for (let index = 0; index < pages; index += 1) {
    const page = doc.loadPage(index);
    const pixmap = page.toPixmap(
      mupdf.Matrix.scale(SCALE, SCALE),
      mupdf.ColorSpace.DeviceRGB,
      false
    );
    const name = `page-${String(index + 1).padStart(3, "0")}.webp`;
    await sharp(pixmap.asPNG()).webp({ quality: 80 }).toFile(path.join(dest, name));
    pixmap.destroy();
    page.destroy();
    if (index === 0 || (index + 1) % 10 === 0) {
      console.log(`  ${slug} page ${index + 1}`);
    }
  }

  doc.destroy();
  console.log(`${slug}: wrote ${pages} pages`);
  return pages;
}

const PROSPECTUS_PUBLIC = path.join(
  ROOT,
  "public",
  "documents",
  "cocoa-capital-programme-prospectus.pdf"
);
const PROSPECTUS_SOURCE = path.join(
  ROOT,
  "content",
  "documents",
  "cocoa-capital-programme-prospectus.pdf"
);

if (publication.prospectus && existsSync(PROSPECTUS_SOURCE)) {
  await fs.mkdir(path.dirname(PROSPECTUS_PUBLIC), { recursive: true });
  await fs.copyFile(PROSPECTUS_SOURCE, PROSPECTUS_PUBLIC);
  console.log("Published programme prospectus");
} else if (publication.prospectus) {
  // e.g. CI builds: content/ is not in git, so the PDF must be uploaded in the CMS.
  await fs.rm(PROSPECTUS_PUBLIC, { force: true });
  console.log("Programme prospectus is published — using the PDF uploaded in the CMS");
} else {
  await fs.rm(PROSPECTUS_PUBLIC, { force: true });
  console.log("Programme prospectus is hidden");
}

if (!publication.transactionDocuments) {
  await fs.rm(OUT_DIR, { recursive: true, force: true });
  console.log("Transaction documents are hidden");
  process.exit(0);
}

const manifest = {};

// Clear page images of documents that were removed or renamed in the CMS.
await fs.rm(OUT_DIR, { recursive: true, force: true });

for (const document of DOCUMENTS) {
  manifest[document.slug] = await renderDocument(document);
}

await fs.mkdir(path.dirname(MANIFEST_PATH), { recursive: true });
await fs.writeFile(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Wrote ${path.relative(ROOT, MANIFEST_PATH)}`);
