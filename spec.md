# Cocoa Capital PLC Website Redesign — Implementation Specification

## 1. Project Objective

Redesign and implement the Cocoa Capital PLC website as a modern institutional issuer website based on the company’s actual mandate in the prospectus.

The website must not present Cocoa Capital PLC as:

* a cocoa trader
* a cocoa buyer
* an asset manager
* a retail investment platform
* a lender accepting funding applications
* an agricultural company

Cocoa Capital PLC is a dedicated financing special-purpose vehicle established by COCOBOD. Its core purpose is to raise financing through Commercial Paper and Bonds for approved cocoa-sector financing and refinancing purposes.

The programme is intended to raise up to GHS 16.3 billion for cocoa purchase financing and refinancing of COCOBOD legacy debt.

The redesigned website must therefore feel like:

> a credible institutional debt issuer and investor-relations platform

The visual and information architecture should take inspiration from:

* ESLA PLC
* Daakye Trust PLC

but should feel more modern, cleaner and easier to use.

---

# 2. Product Positioning

The central positioning should be:

## Cocoa Capital PLC

### Structured capital for Ghana’s cocoa sector.

The website should communicate four ideas immediately:

1. Cocoa Capital is a financing vehicle.
2. It issues debt securities.
3. The financing supports Ghana’s cocoa sector.
4. Investors can access transparent information about the programme, securities, documents and repayment framework.

Avoid presenting the company as a general investment institution.

---

# 3. Technology Stack

Use the existing project stack where possible.

If no frontend stack has been established, use:

* React
* TypeScript
* Vite
* React Router
* Tailwind CSS
* shadcn/ui where useful
* Framer Motion for restrained transitions
* Lucide React for icons
* React Hook Form
* Zod

Do not introduce unnecessary libraries.

The website must be:

* fully responsive
* SEO-friendly
* accessible
* performant
* easy to maintain
* data-driven where appropriate

---

# 4. Visual Direction

## Overall Personality

The design should communicate:

* institutional credibility
* trust
* financial discipline
* transparency
* stability
* Ghanaian cocoa-sector relevance
* seriousness expected from a debt issuer

Avoid overly “luxury” styling.

This is not a lifestyle or wealth-management website.

## Colour Palette

Use the Cocoa Capital brand palette:

```text
Deep Cocoa
#3B2418

Forest Green
#203D2A

Muted Gold
#B88A35

Warm Ivory
#FAF8F2

White
#FFFFFF

Charcoal
#161616

Soft Grey
#F4F3F0

Border Grey
#DDD9D2
```

Usage rules:

* White / warm ivory should dominate page backgrounds.
* Deep cocoa is the principal institutional brand colour.
* Forest green should be secondary.
* Gold should only be used as an accent.
* Avoid large gold backgrounds.
* Avoid gradients unless exceptionally subtle.

---

# 5. Typography

Use a restrained corporate serif + sans-serif combination.

Recommended:

Headings:

```text
Cormorant Garamond
```

or

```text
DM Serif Display
```

Body/UI:

```text
Manrope
```

or

```text
Source Sans 3
```

Avoid overly generic combinations where possible.

Typography must prioritise readability over visual drama.

Suggested desktop scale:

```text
Hero: 64px
H1: 52px
H2: 40px
H3: 28px
H4: 22px
Body large: 18px
Body: 16px
Small: 14px
Metadata: 12px
```

---

# 6. Global Navigation

Implement the following navigation:

```text
Home

About
 ├── About Cocoa Capital
 ├── Our Mandate
 ├── Corporate Structure
 ├── Board of Directors
 ├── Corporate Manager
 └── Programme Parties

The Programme
 ├── Programme Overview
 ├── How It Works
 ├── Use of Proceeds
 ├── Commercial Paper
 ├── Bonds
 ├── Repayment Structure
 └── Risk Management

Investor Relations
 ├── Current Issuances
 ├── Pricing Supplements
 ├── Prospectus
 ├── Financial Statements
 ├── Credit Ratings
 ├── Investor Presentations
 ├── Announcements
 └── Investor FAQs

Market & Cocoa
 ├── Ghana Cocoa Sector
 ├── Ghana Capital Markets
 └── Market Insights

News & Announcements

Downloads

Contact
```

Do not include:

```text
Invest Now
Apply for Funding
Funding Solutions
Our Investments
```

unless future official requirements explicitly introduce these functions.

---

# 7. Header Behaviour

Desktop:

* logo on left
* main navigation centered/right
* Investor Relations or Downloads as optional highlighted action
* sticky header after scroll
* white background
* subtle lower border
* no heavy shadow

Mobile:

* logo left
* hamburger right
* full-screen or drawer menu
* nested navigation should be expandable

Acceptance Criteria:

* Menu is keyboard accessible.
* Active page state is visible.
* Dropdown menus work on hover and keyboard focus.
* Mobile navigation supports all nested items.

---

# 8. Homepage

## Section 1 — Hero

Headline:

```text
Financing Ghana’s Cocoa Future
```

Supporting copy should describe Cocoa Capital as a dedicated financing vehicle using domestic capital-market instruments to support cocoa-sector financing.

Primary CTA:

```text
Explore the Programme
```

Secondary CTA:

```text
Investor Relations
```

Tertiary text link:

```text
Download Prospectus
```

Visual:

Use a premium Ghanaian cocoa-sector image or sophisticated abstract composition.

The hero must not show:

* smiling investors
* fake stock traders
* giant financial charts
* retail investment imagery

Keep the imagery contextual rather than dominant.

Acceptance Criteria:

* Hero immediately explains what Cocoa Capital does.
* At least one CTA routes to the Programme.
* At least one CTA routes to Investor Relations.
* Hero works at 320px screen width without breaking.

---

# 9. Homepage — Programme At A Glance

Display four key institutional metrics.

Suggested cards:

```text
GHS 16.3bn
Programme Size

Commercial Paper
Short-term financing

Bonds
Longer-term financing

GFIM
Capital market listing
```

Do not fabricate:

* outstanding amount
* total investor count
* total cocoa financed
* coupon rates
* asset values

unless actual data is available.

The prospectus establishes the GHS 16.3 billion programme and issuance of Notes in Series and Tranches.

Acceptance Criteria:

* All numeric data comes from configuration/data files.
* No hardcoded unsupported financial statistics.
* Add support for “TBD” or unpublished metrics.

---

# 10. Homepage — Purpose of the Programme

Create two major panels.

## Cocoa Purchase Financing

Explain that Commercial Paper proceeds support cocoa purchase financing.

The prospectus states that relevant CP proceeds are intended to support payments relating to cocoa beans delivered by Licensed Buying Companies.

## Legacy Debt Refinancing

Explain that relevant Bond proceeds may be used to refinance COCOBOD legacy obligations.

Do not simplify this into:

```text
We lend to cocoa farmers
```

That would be incorrect.

---

# 11. Homepage — How the Programme Works

This is a major feature.

Implement a clear visual transaction flow.

Desktop layout:

```text
INVESTORS

   ↓

COCOA CAPITAL PLC
Issues Notes

   ↓

SUBSCRIPTION ACCOUNTS

   ↓

┌───────────────────┬───────────────────┐
│                   │                   │
Commercial Paper    Bonds
│                   │
Cocoa purchase      Approved refinancing
financing           purposes
│                   │
└──────────────┬────┴───────────────────┘
               ↓
            COCOBOD
```

Then show repayment separately:

```text
COCOA SALES

   ↓

ASSIGNED RECEIVABLES

   ↓

COLLECTIONS / ESCROW ACCOUNTS

   ↓

DEBT SERVICE ACCOUNTS

   ↓

TRUST / PAYING AGENT

   ↓

NOTEHOLDERS
```

The prospectus states that repayments are primarily funded through Cocoa Receivables and routed through designated controlled accounts before payments to Noteholders.

Implementation:

* SVG or HTML/CSS diagram
* responsive
* accessible labels
* no image-only flow diagram
* on mobile, convert into vertical steps

---

# 12. Homepage — Structural Framework

Create a section called:

```text
A Structured Framework
```

Cards:

* Assigned Receivables
* Controlled Accounts
* Debt Service Framework
* Trustee Oversight
* Calculation & Paying Agents
* Applicable Pricing Supplements

Each card should provide a short plain-language explanation.

Do not market them as “guarantees”.

Use language such as:

```text
Programme structure
Payment controls
Investor protection mechanisms
```

Avoid:

```text
Guaranteed repayment
Risk-free
Fully secured
Safe investment
```

---

# 13. Homepage — Current Issuances

Create a reusable issuance table.

Columns:

```text
Instrument
Series
Issue Date
Maturity
Amount
Rate
Status
```

Possible statuses:

```text
Upcoming
Open
Closed
Outstanding
Matured
Redeemed
```

Clicking a row should open the issuance detail page.

If no live issuance data exists:

Show:

```text
No current issuance information has been published.
```

Do not fabricate sample financial data in production.

---

# 14. Homepage — Latest Documents

Show the five most recent investor documents.

Examples:

```text
Programme Prospectus
Pricing Supplement
Credit Rating Report
Financial Statement
Investor Notice
```

Each item should display:

* title
* document type
* publication date
* PDF file size
* download button

---

# 15. Homepage — Programme Parties

Do not use an infinite marquee.

Create an orderly institutional section grouped by responsibility.

Examples:

```text
Corporate Manager
KPMG

Joint Lead Managers
Absa
CalBank
GCB
Stanbic
Fincap Securities
One Africa

Reporting Accountant
PwC

Registrar / Calculation Agent
Central Securities Depository

Credit Rating Agency
Beacon Ratings

Legal Adviser
Sory & Partners

Transaction Adviser
SEM Capital Advisors
```

The prospectus identifies the broader institutional programme structure and service providers.
Do not hardcode organisations that have not been finally confirmed.

Structure them in a data file.

---

# 16. About Page

Route:

```text
/about
```

Sections:

## About Cocoa Capital PLC

Explain that Cocoa Capital PLC is a Ghanaian public company established as a financing SPV.

## Our Mandate

Represent visually:

```text
Raise Capital
      ↓
Issue Debt Securities
      ↓
Support Approved Cocoa Financing
      +
Refinance Approved Obligations
```

## What Cocoa Capital Does

* issues debt securities
* administers issue proceeds
* holds and administers programme assets
* manages relevant controlled accounts
* pays amounts due under issued securities

## What Cocoa Capital Does Not Do

Use a subtle explanatory section:

```text
Cocoa Capital PLC is not established to operate as a cocoa buyer,
trader, exporter, processor or farmer.
```

This distinction comes directly from the issuer description in the prospectus.

---

# 17. Corporate Structure Page

Route:

```text
/about/corporate-structure
```

Display:

```text
Ghana Cocoa Board
Sole Shareholder / Sponsor

          ↓

Cocoa Capital PLC
Issuer / Financing SPV

          ↓

Corporate Manager
KPMG
```

Then add relevant service-provider relationships below.

Do not imply that service providers are subsidiaries.

---

# 18. Board of Directors

Route:

```text
/about/board
```

Each member card:

* headshot
* name
* role
* short biography
* optional committee membership

Do not invent biographies.

If only names and positions are available, show those only.

The prospectus identifies the issuer’s directors in the corporate information section.

---

# 19. Corporate Manager Page

Route:

```text
/about/corporate-manager
```

Explain:

* role of the Corporate Manager
* administrative responsibilities
* governance relationship

The prospectus identifies KPMG as the Corporate Manager.

Do not describe KPMG as owner, sponsor or investor.

---

# 20. Programme Overview Page

Route:

```text
/programme
```

Sections:

* Programme overview
* Purpose
* Programme size
* Instruments
* Series and Tranches
* Listing
* Use of proceeds
* Repayment framework
* Programme parties
* Associated documents

Use a clean information architecture.

Avoid long prospectus-style walls of text.

---

# 21. Commercial Paper Page

Route:

```text
/programme/commercial-paper
```

Sections:

## Overview

Explain Commercial Paper in plain language.

## Purpose

Explain how CP may be used for cocoa purchase financing.

## Current CP Issues

Table:

```text
Series
Issue Date
Maturity
Tenor
Amount
Rate
Status
```

## Documents

* pricing supplements
* announcements
* payment notices
* maturity notices

The prospectus defines CP as a debt instrument with a tenor of at least 15 calendar days and up to 270 calendar days.

---

# 22. Bonds Page

Route:

```text
/programme/bonds
```

Sections:

* Programme overview
* Outstanding Bonds
* Matured Bonds
* Upcoming issuance
* Pricing supplements
* Payment notices

Bond table:

```text
Series
Issue Date
Coupon
Maturity
Amount
Status
```

Do not populate unsupported financial terms.

---

# 23. Issuance Detail Page

Route pattern:

```text
/investor-relations/issuances/:slug
```

Example:

```text
/investor-relations/issuances/bond-series-01
```

Page layout:

## Header

```text
Bond Series 01
Outstanding
```

## Key Terms

```text
Instrument
Issue Amount
Issue Date
Maturity
Coupon / Rate
Interest Frequency
Issue Price
Listing
```

## Documents

* pricing supplement
* prospectus
* rating report
* announcement
* application form

## Payment Schedule

```text
Payment Date
Type
Amount / Rate
Status
```

All fields must support null/unpublished state.

---

# 24. Use of Proceeds Page

Route:

```text
/programme/use-of-proceeds
```

Explain separate use cases.

## Commercial Paper

Show:

```text
Note Proceeds
     ↓
Subscription Account
     ↓
Proceeds Utilisation Account
     ↓
Approved cocoa purchase financing
```

## Bonds

Show:

```text
Bond Proceeds
     ↓
Subscription Account
     ↓
Proceeds Utilisation Account
     ↓
Approved refinancing
```

Base wording on the prospectus, not marketing interpretation.

---

# 25. Repayment Structure Page

Route:

```text
/programme/repayment-structure
```

Create an interactive diagram.

```text
Cocoa Sales
    ↓
Assigned Cocoa Receivables
    ↓
Collections Escrow Account
    ↓
Debt Service Account
    ↓
Trust Account
    ↓
Noteholders
```

Also explain:

* Debt Service Coverage Ratio
* Debt service accounts
* payment agent role
* trustee role

The prospectus requires maintenance of the Debt Service Coverage Ratio while Notes remain outstanding.

Do not present this as a simplified legal summary replacing the prospectus.

Include:

```text
For full legal terms, refer to the Programme Prospectus
and applicable Pricing Supplement.
```

---

# 26. Risk Management Page

Route:

```text
/programme/risk-management
```

Sections:

* transaction risks
* receivables risk
* sponsor-related risks
* market risks
* interest-rate risk
* regulatory risk
* operational risks

Do not attempt to reproduce the entire prospectus.

Provide high-level categories and link to the full Risk Factors section.

The prospectus explicitly notes that investors should carefully consider programme risks before investing.

---

# 27. Investor Relations Landing Page

Route:

```text
/investor-relations
```

This should feel like a dashboard.

Top summary cards:

```text
Programme Size
GHS 16.3bn

Outstanding Notes
Dynamic / TBD

Commercial Paper
Dynamic / TBD

Bonds
Dynamic / TBD

Next Scheduled Payment
Dynamic / TBD
```

Below:

## Current Issuances

## Latest Documents

## Latest Announcements

## Credit Ratings

## Key Dates

---

# 28. Prospectus Page

Route:

```text
/investor-relations/prospectus
```

Display:

```text
Programme Prospectus 2026

[View Prospectus]
[Download PDF]
```

Include:

* issue date
* document version
* file size
* short description
* related amendments/supplements

---

# 29. Pricing Supplements

Route:

```text
/investor-relations/pricing-supplements
```

Filterable table:

```text
Instrument
Series
Tranche
Date
Status
Document
```

Filters:

* year
* instrument
* series
* status

---

# 30. Financial Statements

Route:

```text
/investor-relations/financial-statements
```

Group by year.

Example:

```text
2027
Annual Financial Statements
Interim Financial Statements

2026
Annual Financial Statements
```

Do not display placeholder PDFs as if official.

---

# 31. Credit Ratings

Route:

```text
/investor-relations/credit-ratings
```

Show:

* rating agency
* current rating
* outlook
* rating date
* report download

If not finalised:

Show:

```text
Rating information will be published when available.
```

Never fabricate a credit rating.

---

# 32. Investor FAQs

Route:

```text
/investor-relations/faqs
```

Questions may include:

* What is Cocoa Capital PLC?
* What is the Note Issuance Programme?
* What instruments may be issued?
* What is Commercial Paper?
* What are Bonds?
* Where are the Notes listed?
* Where can I find Pricing Supplements?
* How are payments made?
* Who is the Trustee?
* Where can I find Risk Factors?

Do not provide personalised investment advice.

---

# 33. Market & Cocoa Section

Route:

```text
/market-cocoa
```

This should provide context, not dominate the website.

Pages:

```text
/market-cocoa/ghana-cocoa-sector
/market-cocoa/capital-markets
/market-cocoa/insights
```

---

# 34. Ghana Cocoa Sector Page

Explain:

* role of cocoa in Ghana
* sector structure
* COCOBOD’s role
* Licensed Buying Companies
* cocoa marketing
* financing requirements

Use verified source content only.

---

# 35. Evolution of Cocoa Financing

Create a visually strong feature section:

```text
Traditional syndicated financing

           ↓

Buyer-financed model

           ↓

Domestic capital-market financing
```

The prospectus describes a transition from offshore syndicated funding to buyer financing and toward a domestic capital market model designed to diversify funding and better align financing with cocoa purchasing needs.

This can be used on:

```text
/market-cocoa/capital-markets
```

and referenced on the homepage.

---

# 36. News & Announcements

Route:

```text
/news
```

Categories:

* Issuance Announcements
* Investor Notices
* Payment Notices
* Corporate Announcements
* Press Releases
* General News

Each article:

```text
Title
Date
Category
Summary
Body
Attachments
```

Support pinned announcements.

---

# 37. Downloads Centre

Route:

```text
/downloads
```

This is a core feature.

Implement a searchable/filterable document library.

Fields:

```text
Title
Document Type
Year
Instrument
Series
Publication Date
File
File Size
```

Filters:

```text
All
Prospectuses
Pricing Supplements
Financial Statements
Credit Ratings
Investor Presentations
Announcements
Payment Notices
Corporate Documents
```

Also filter by:

* year
* instrument
* series

The prospectus anticipates Note documents being made available on the issuer’s website.

---

# 38. Contact Page

Route:

```text
/contact
```

Separate:

## Registered Office

Cocoa House

## Administrative Correspondence

Corporate Manager / administrative address

## Investor Relations

Separate contact details if available.

## General Enquiries

Contact form.

The prospectus identifies Cocoa House as the registered office and the KPMG administrative correspondence address separately.

Do not merge them into one office.

---

# 39. Footer

Footer structure:

```text
COCOA CAPITAL PLC

About
About Cocoa Capital
Board
Corporate Structure

Programme
Overview
Commercial Paper
Bonds
Risk Management

Investor Relations
Current Issuances
Prospectus
Financial Statements
Credit Ratings

Resources
Downloads
Announcements
Contact

Legal
Privacy Policy
Terms of Use
Disclaimer
```

Include:

```text
© Cocoa Capital PLC
```

No social media icons unless official accounts exist.

---

# 40. Mandatory Legal Disclaimer

Add a short website disclaimer near investor-sensitive sections.

Example principle:

```text
Information on this website is provided for general information only
and does not constitute investment, legal, tax or financial advice.

Prospective investors should review the relevant Prospectus and
Applicable Pricing Supplement and obtain professional advice before
making an investment decision.
```

The prospectus states that investors should read the relevant documents and seek appropriate professional advice.

Do not write disclaimer wording that contradicts official legal documentation.

---

# 41. Content Architecture

Create structured data models rather than hardcoding content.

Recommended data objects:

```ts
Programme
Issuance
Document
Director
ProgrammeParty
Announcement
Rating
PaymentSchedule
FAQ
```

Example:

```ts
interface Issuance {
  id: string
  slug: string
  instrumentType: "commercial-paper" | "bond"
  series: string
  tranche?: string
  issueDate?: string
  maturityDate?: string
  issueAmount?: number
  currency?: string
  couponRate?: number
  status:
    | "upcoming"
    | "open"
    | "closed"
    | "outstanding"
    | "matured"
    | "redeemed"
  documents: DocumentReference[]
}
```

---

# 42. Content Source of Truth

Until a CMS is introduced, create:

```text
/src/data/
```

Suggested files:

```text
programme.ts
issuances.ts
documents.ts
directors.ts
partners.ts
announcements.ts
ratings.ts
faqs.ts
```

Avoid financial content scattered throughout React components.

---

# 43. CMS Readiness

Design the application so static data can later be replaced by:

* Sanity
* Strapi
* Payload
* headless WordPress
* custom backend

Components must consume typed data models.

Do not couple components tightly to static text.

---

# 44. Document Handling

PDF documents should:

* open in a new tab
* support direct download
* show file type
* show file size where available
* have descriptive accessible labels

Never use:

```text
Click here
```

Use:

```text
Download Programme Prospectus
```

---

# 45. Search

Implement site search or at minimum document search.

Search should index:

* documents
* announcements
* issuances
* pages

Downloads page search is mandatory.

---

# 46. Responsive Behaviour

Support:

```text
320px+
375px
430px
768px
1024px
1280px
1440px+
```

Tables on mobile should:

* become horizontal scroll areas, or
* intelligently convert into cards

Do not shrink financial tables until text becomes unreadable.

---

# 47. Accessibility

Target WCAG 2.1 AA.

Mandatory:

* proper semantic HTML
* keyboard navigation
* visible focus states
* sufficient contrast
* ARIA only when required
* labelled links/buttons
* meaningful alt text
* accessible tables
* reduced-motion support

---

# 48. Motion

Animation should be restrained.

Allowed:

* fade-in
* short slide-up
* subtle number reveal
* diagram progression
* menu transitions
* hover underline transitions

Avoid:

* magnetic buttons
* excessive parallax
* floating cards
* large entrance animations
* continuous animated backgrounds
* overly “Awwwards” interactions

This is an institutional issuer site.

Trust is more important than visual spectacle.

---

# 49. Performance

Target:

```text
Lighthouse Performance > 90
Accessibility > 95
Best Practices > 95
SEO > 95
```

Use:

* WebP / AVIF imagery
* responsive images
* lazy loading
* code splitting
* font subsetting where possible

---

# 50. SEO

Every route should have:

* unique page title
* meta description
* canonical URL
* OpenGraph metadata

Implement:

```text
sitemap.xml
robots.txt
structured data
```

Suggested organisation schema:

```json
Organization
```

Do not add unsupported financial product structured data.

---

# 51. Empty States

Every data-driven component must handle empty content.

Examples:

```text
No active issuances are currently published.

No rating reports are currently available.

No announcements have been published.

Financial statements will appear here when released.
```

Never leave blank components.

---

# 52. Loading and Error States

Data-heavy pages must support:

```text
loading
error
empty
success
```

Especially:

* issuances
* documents
* announcements
* credit ratings

---

# 53. Security

If there is no backend, do not create fake authentication.

Contact forms must:

* validate input
* sanitise text
* rate-limit once backend exists
* avoid exposing sensitive API keys

Investor documents intended to be public should remain public.

Do not create “secure investor portal” functionality unless specifically required.

---

# 54. Data Integrity Rule

Critical:

Do not invent:

* coupon rates
* issue dates
* maturity dates
* credit ratings
* outstanding balances
* investor counts
* payment dates
* financial statements
* transaction values

If data is unknown, use:

```text
TBD
Not yet published
To be announced
```

or hide the field.

---

# 55. Prospectus Consistency Rule

All material financial and legal website content must be traceable to an official source.

Priority:

```text
1. Final Prospectus
2. Applicable Pricing Supplement
3. SEC-approved announcements
4. Published financial statements
5. Official Cocoa Capital communications
```

Do not override prospectus terminology because an alternative sounds more marketable.

---

# 56. Reusable Components

Create reusable components such as:

```text
Navbar
MegaMenu
MobileMenu
Footer

PageHero
Breadcrumbs

MetricCard
SectionHeading
InfoCard

ProgrammeFlow
RepaymentFlow

IssuanceTable
IssuanceCard
IssuanceStatusBadge
IssuanceTerms

DocumentTable
DocumentCard
DocumentFilters

PartnerGroup
PartnerLogo

DirectorCard

AnnouncementCard
AnnouncementList

RatingCard

FAQAccordion

LegalDisclaimer

EmptyState
ErrorState
LoadingSkeleton
```

---

# 57. Suggested Route Structure

```text
/

/about
/about/mandate
/about/corporate-structure
/about/board
/about/corporate-manager
/about/programme-parties

/programme
/programme/how-it-works
/programme/use-of-proceeds
/programme/commercial-paper
/programme/bonds
/programme/repayment-structure
/programme/risk-management

/investor-relations
/investor-relations/issuances
/investor-relations/issuances/:slug
/investor-relations/pricing-supplements
/investor-relations/prospectus
/investor-relations/financial-statements
/investor-relations/credit-ratings
/investor-relations/presentations
/investor-relations/announcements
/investor-relations/faqs

/market-cocoa
/market-cocoa/ghana-cocoa-sector
/market-cocoa/capital-markets
/market-cocoa/insights

/news
/news/:slug

/downloads

/contact
```

---

# 58. Homepage Acceptance Criteria

The homepage is complete when:

* [ ] Cocoa Capital is clearly identified as a financing issuer/SPV.
* [ ] Programme size is displayed correctly.
* [ ] Commercial Paper and Bonds are distinguished.
* [ ] Use of proceeds is explained.
* [ ] The programme flow is understandable without reading the prospectus.
* [ ] Repayment structure is visually represented.
* [ ] Investor Relations is prominent.
* [ ] Latest documents are accessible.
* [ ] Programme parties are represented professionally.
* [ ] No misleading “Invest Now” or “Apply for Funding” CTA exists.
* [ ] No fabricated financial statistics exist.
* [ ] Mobile layout is complete.
* [ ] Accessibility requirements are met.

---

# 59. Investor Relations Acceptance Criteria

Investor Relations is complete when:

* [ ] Current issuances can be listed.
* [ ] Issuances can be filtered by instrument.
* [ ] Each issuance has a detail page.
* [ ] Pricing Supplements are downloadable.
* [ ] Prospectus is easily accessible.
* [ ] Financial Statements section exists.
* [ ] Credit Ratings section exists.
* [ ] Latest announcements are shown.
* [ ] Missing data is represented safely.
* [ ] Unsupported financial information is never fabricated.

---

# 60. Downloads Acceptance Criteria

Downloads is complete when:

* [ ] Documents can be searched.
* [ ] Documents can be filtered by type.
* [ ] Documents can be filtered by year.
* [ ] Documents can optionally be filtered by issuance.
* [ ] Each record shows publication date.
* [ ] PDF download works.
* [ ] Empty states work.
* [ ] Mobile layout remains usable.

---

# 61. Final Visual Quality Criteria

The final website should look like:

> ESLA PLC and Daakye Trust PLC redesigned for a modern institutional capital-markets issuer.

It should NOT look like:

* fintech mobile app
* asset-management startup
* crypto platform
* agriculture NGO
* cocoa exporter
* chocolate company
* generic Ghana government site
* luxury investment landing page

The overall visual hierarchy should be:

```text
Institutional
↓
Financial
↓
Transparent
↓
Cocoa-sector relevance
```

not:

```text
Cocoa photography
↓
Marketing
↓
Finance
```

---

# 62. Implementation Sequence

Implement in this order:

```text
PHASE 1
Design system
Header
Footer
Routing
Responsive layout

PHASE 2
Homepage

PHASE 3
About
Programme pages

PHASE 4
Investor Relations

PHASE 5
Issuance detail system

PHASE 6
Downloads/document centre

PHASE 7
Market & Cocoa
News
Contact

PHASE 8
Accessibility
SEO
Performance
QA
```

Do not implement all pages as shallow placeholders.

Finish each phase to production quality before moving to the next.

---

# 63. Exit Criteria

The redesign is complete when:

* [ ] Website positioning matches the prospectus.
* [ ] Information architecture is issuer/investor focused.
* [ ] All primary routes are implemented.
* [ ] Mobile, tablet and desktop views are complete.
* [ ] Programme flow can be understood visually.
* [ ] Investor documents are easy to discover.
* [ ] Current issuances support dynamic content.
* [ ] No unsupported financial claims exist.
* [ ] No misleading CTA exists.
* [ ] Legal/investment disclaimers are present.
* [ ] Accessibility tests pass.
* [ ] Lighthouse targets are substantially met.
* [ ] No console errors exist.
* [ ] All broken links are fixed.
* [ ] All document downloads work.
* [ ] Empty/error/loading states are implemented.
* [ ] UI feels cohesive across every page.

---

## Final Instruction to Cursor

Before changing the implementation, audit the existing Cocoa Capital website against this specification.

For every page/component:

1. Identify what already exists.
2. Identify what conflicts with the new issuer positioning.
3. Identify what can be reused.
4. Identify what must be redesigned.
5. Implement only after understanding existing dependencies.

Do not retain old sections simply because they are already implemented.

In particular, remove or redesign any language or UI that positions Cocoa Capital PLC as:

* a general investment company
* an asset manager
* a direct lender
* a cocoa trader
* a retail investment product

The prospectus is the primary source of truth for the company’s mandate and programme structure.

The completed website must make the following understandable within approximately 30 seconds:

> Who is Cocoa Capital PLC?

> Why was it established?

> What does it issue?

> What is the GHS 16.3 billion programme for?

> How are proceeds used?

> How is the repayment structure organised?

> Where can an investor find the Prospectus, Pricing Supplements, ratings and other official documents?
