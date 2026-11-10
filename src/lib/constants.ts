export const SITE = {
  name: "Cocoa Capital PLC",
  shortName: "Cocoa Capital",
  tagline: "Structured capital for Ghana’s cocoa sector.",
  description:
    "Cocoa Capital PLC is a dedicated financing special-purpose vehicle established by COCOBOD. It raises financing through Commercial Paper and Bonds for approved cocoa-sector financing and refinancing purposes under a programme of up to GHS 16.3 billion.",
  url: "https://www.cocoacapital.com",
  /** Single point of contact — investor, media and general enquiries. */
  email: "info@cocoacapital.com",
  /** The (0) is the national trunk prefix and is omitted from the dial string. */
  phones: [
    { label: "+233 (0)302 770 454", tel: "+233302770454" },
    { label: "777 173", tel: "+233302777173" },
    { label: "770 618", tel: "+233302770618" },
  ],
  hours: "Mon-Fri, 8:00am - 5:00pm",
  address: {
    organisation: "KPMG Ghana",
    street: "Marlin House, 13 Yiyiwa Drive, Abelemkpe",
    poBox: "P.O. Box GP 242",
    city: "Accra",
    country: "Ghana",
    digitalAddress: "6CQXJQ6P+CW",
    coordinates: "5.6111° N, -0.21268° W",
    latitude: 5.6111,
    longitude: -0.21268,
  },
} as const;

/** Opens the published office location. */
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${SITE.address.latitude},${SITE.address.longitude}`;

export type NavChild = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

/**
 * Three sections plus a Downloads action, following the structure of the
 * institutional issuer sites this site is benchmarked against (E.S.L.A. PLC:
 * Home / About us / Statistics & Downloads / Investor relations / News).
 *
 * The Programme sits under Investor Relations rather than as a section of its
 * own: describing the securities on offer is a disclosure obligation, not a
 * product catalogue.
 */
export const NAV_ITEMS: NavItem[] = [
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "About Cocoa Capital", href: "/about" },
      { label: "Our Mandate", href: "/about/mandate" },
      { label: "Corporate Structure", href: "/about/corporate-structure" },
      { label: "Board of Directors", href: "/about/board" },
      { label: "Corporate Manager", href: "/about/corporate-manager" },
      { label: "Programme Parties", href: "/about/programme-parties" },
    ],
  },
  {
    label: "Investor Relations",
    href: "/investor-relations",
    children: [
      { label: "Investor Relations", href: "/investor-relations" },
      { label: "The Programme", href: "/investor-relations/programme" },
      { label: "Current Issuances", href: "/investor-relations/issuances" },
      {
        label: "Pricing Supplements",
        href: "/investor-relations/pricing-supplements",
      },
      {
        label: "Financial Statements",
        href: "/investor-relations/financial-statements",
      },
      { label: "Credit Ratings", href: "/investor-relations/credit-ratings" },
      {
        label: "Investor Presentations",
        href: "/investor-relations/presentations",
      },
      { label: "Announcements", href: "/investor-relations/announcements" },
      { label: "Investor FAQs", href: "/investor-relations/faqs" },
    ],
  },
  { label: "News", href: "/news" },
];

/** Highlighted header action — the document library is the most-requested page. */
export const NAV_ACTION = { label: "Downloads", href: "/downloads" };

export const FOOTER_LINKS = {
  about: [
    { label: "About Cocoa Capital", href: "/about" },
    { label: "Our Mandate", href: "/about/mandate" },
    { label: "Corporate Structure", href: "/about/corporate-structure" },
    { label: "Board of Directors", href: "/about/board" },
    { label: "Programme Parties", href: "/about/programme-parties" },
  ],
  investor: [
    { label: "Investor Relations", href: "/investor-relations" },
    { label: "The Programme", href: "/investor-relations/programme" },
    { label: "Current Issuances", href: "/investor-relations/issuances" },
    { label: "Investor FAQs", href: "/investor-relations/faqs" },
  ],
  resources: [
    { label: "Downloads", href: "/downloads" },
    { label: "News & Announcements", href: "/news" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
} as const;

/**
 * Sector and market information is not maintained on this site — the issuer
 * should not carry responsibility for cocoa-sector data that may become stale.
 * Visitors are directed to the official sources instead.
 */
export const EXTERNAL_LINKS = [
  { label: "Ghana Cocoa Board (COCOBOD)", href: "https://cocobod.gh" },
  { label: "Ghana Fixed Income Market", href: "https://gfim.com.gh" },
] as const;

/**
 * Standing site-wide notice. Rendered once, in the footer.
 * Wording covers each of the four negations required of an SPV issuer — offer,
 * invitation, advice, guarantee — and directs reliance solely to the approved
 * offer documents.
 */
export const LEGAL_DISCLAIMER =
  "Information on this website is provided for general information only. It does not constitute an offer, an invitation to subscribe for or purchase any securities, investment advice, or any guarantee or assurance as to future performance or returns. Any investment decision should be based solely on the relevant approved offer document, including the Programme Prospectus and the Applicable Pricing Supplement.";

/**
 * Securities-specific notice for pages that carry issuance or offer terms.
 * Deliberately distinct from LEGAL_DISCLAIMER so the two never read as the
 * same paragraph printed twice on one screen.
 */
export const SECURITIES_NOTICE =
  "Securities are offered solely pursuant to the Programme Prospectus and the Applicable Pricing Supplement, and only in jurisdictions where such offers are lawful. Those documents prevail over website content in the event of any inconsistency.";
