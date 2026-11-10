# Cocoa Capital PLC

Official website for Cocoa Capital PLC — a dedicated financing special-purpose vehicle established by the Ghana Cocoa Board (COCOBOD) to raise financing through Commercial Paper and Bonds for approved cocoa-sector financing and refinancing purposes.

The site is an institutional debt-issuer and investor-relations platform. It is not a trading, asset-management or retail-investment site — see `spec.md` for the positioning rules the content must follow.

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Lucide React
- React Hook Form + Zod

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — development server (Turbopack)
- `npm run build` — production build (syncs CMS content first)
- `npm run start` — start production server
- `npm run lint` — ESLint
- `npm run cms:sync` — pull published Sanity content into `src/generated/cms.json`
- `npm run studio` — run the Sanity Studio locally (http://localhost:3333)
- `npm run studio:deploy` — deploy the Studio to `https://<host>.sanity.studio`
- `npm run deploy` — build and upload `out/` to Bluehost over FTPS (see Deployment)

## Content management (Sanity)

All editable site content is managed in [Sanity Studio](https://www.sanity.io)
(free plan). The Studio lives in `studio/` with its own dependencies:

- **Site settings** — publish/hide the Programme Prospectus and the transaction documents
- **Programme** — key facts, instruments, metrics, purpose panels, framework,
  repayment concepts, risk categories and the programme page copy
- **Organisation** — corporate structure and programme parties
- Announcements, news, documents, transaction documents, issuances, credit
  ratings, directors and FAQs

Because the site is a static export, content is read at **build time**:
`scripts/sync-sanity.mjs` writes published content to `src/generated/cms.json`,
and each module in `src/data` uses it instead of its hard-coded `LOCAL_*`
content. When `SANITY_PROJECT_ID` is not set, the committed snapshot is used
(by default `{"source": "local"}`, i.e. the hard-coded content).

Transaction documents stay view-only: PDFs uploaded in the Studio are
downloaded into `.cms-cache/` during the sync and rendered to page images by
`scripts/render-transaction-documents.mjs`. Their URLs are never written to the
site. Without an upload, `content/transaction-documents/<slug>.pdf` is used.
Sanity file URLs are public to anyone who has them, so make the dataset
**private** (sanity.io/manage → Datasets) and set `SANITY_API_READ_TOKEN`. That
stops anyone from listing uploaded files.

### One-time setup

The Sanity project is `1jndvjps` (dataset `production`); the Studio is
deployed at https://cocoacapital.sanity.studio.

1. Install the Studio and log in: `npm --prefix studio install` then
   `cd studio && npx sanity login`.
2. Import the current site content (already done; re-running overwrites the
   seeded documents): `cd studio && npm run seed`
   (preview first with `npx sanity exec scripts/seed.ts -- --dry-run`).
3. Deploy Studio changes: `npm run studio:deploy` (invite editors under
   sanity.io/manage → Members).
4. Local builds: copy `.env.example` to `.env.local` (plus
   `SANITY_API_READ_TOKEN` if the dataset is private).

## Deployment (Bluehost)

Bluehost serves static files with Apache; it cannot build the site. There are
two ways to deploy, and both upload `out/` over FTPS. The build writes a
`.htaccess` with the 301 redirects, the 404 page and the view-only headers.

- **Automatic — GitHub Actions** (`.github/workflows/deploy.yml`): runs on every
  push to `main`, every Sanity publish, or manually (Actions → "Build and
  deploy to Bluehost" → Run workflow). Free for this public repository
  (standard runners); private repositories get 2,000 free minutes a month.
- **Manual — from your computer:** `npm run deploy` builds and uploads;
  `npm run deploy:upload` uploads an existing `out/`. Needs the `FTP_*`
  values in `.env.local` (see `.env.example`). It only adds and overwrites
  files and never deletes anything on the server.

**1. FTP account (Bluehost cPanel → Files → FTP Accounts).** Create an account
whose directory is the site root. Use the server hostname from **Configure FTP
Client** (e.g. `boxNNNN.bluehost.com`): both deploy methods verify the TLS
certificate, which is issued for that name rather than `ftp.<your-domain>`.

**2. GitHub secrets and variables (repo → Settings → Secrets and variables → Actions).**

| Name | Type | Value |
| --- | --- | --- |
| `FTP_SERVER` | secret | Bluehost server hostname, e.g. `boxNNNN.bluehost.com` |
| `FTP_USERNAME` | secret | the FTP account, e.g. `deploy@cocoacapital.com` |
| `FTP_PASSWORD` | secret | the FTP password |
| `SANITY_API_READ_TOKEN` | secret | Viewer token — required once the dataset is private |
| `FTP_SERVER_DIR` | variable (optional) | remote folder, default `public_html/`; use `./` if the FTP account is rooted at the site folder. Must end with `/` |

**3. Rebuild on publish (sanity.io/manage → API → Webhooks → Create webhook).**

- URL: `https://api.github.com/repos/BrightArhin/cocoaplc/dispatches`
- Dataset: `production`; Trigger on: Create, Update, Delete; Drafts: off
- Filter: `!(_type in ["sanity.imageAsset", "sanity.fileAsset"])` (skips
  image/file uploads, which go live together with the document using them)
- HTTP method: `POST`
- HTTP headers:
  - `Authorization`: `Bearer <GitHub token>` — a fine-grained personal access
    token limited to this repository with **Contents: Read and write**
  - `Accept`: `application/vnd.github+json`
- Projection: `{"event_type": "sanity-publish"}`

Publishing in the Studio then redeploys the site within a few minutes.

**Unpublished PDFs.** This repository is public, so `content/` (prospectus and
transaction agreements) is git-ignored and is not available to CI builds.
Before publishing them on the site, make the Sanity dataset private, add
`SANITY_API_READ_TOKEN`, then upload the PDFs in the Studio: the prospectus on
its **Documents** entry, and each agreement on its **Transaction documents**
entry.

Uploaded PDFs and images are served from `cdn.sanity.io`; existing files can
also be referenced by their site path (e.g. `/documents/report.pdf`).

## Project Structure

```
src/
  app/                 # App Router pages & layout
  components/
    layout/            # Navbar, Footer
    sections/          # Contact form
    documents/         # Document card + table
    issuance/          # Issuance table
    news/              # Shared dated-notice list
    partners/          # Programme party groups
    programme/         # Transaction flow diagrams
    ui/                # Shared UI primitives
    seo/               # Schema.org JSON-LD
  data/                # Programme, document and issuance data
  lib/                 # Constants & utilities
```
# cocoaplc
