export const SITE = {
  name: "Cocoa Capital PLC",
  shortName: "Cocoa Capital",
  tagline: "Financing Ghana's Cocoa Future.",
  description:
    "Cocoa Capital PLC is a Ghanaian investment and structured finance company dedicated to financing the cocoa value chain—delivering institutional-grade capital solutions for investors and industry participants.",
  url: "https://www.cocoacapital.com",
  email: "info@cocoacapital.com",
  phone: "+233 30 266 4500",
  address: {
    street: "No. 15 Independence Avenue",
    city: "Accra",
    country: "Ghana",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/cocoa-capital-plc",
    twitter: "https://twitter.com/cocoacapitalgh",
    youtube: "https://www.youtube.com/@cocoacapitalplc",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Investments", href: "/investments" },
  { label: "Funding Solutions", href: "/funding" },
  { label: "Industry", href: "/industry" },
  { label: "Investor Centre", href: "/investor-centre" },
  { label: "News", href: "/news" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

export const STATS = [
  {
    value: 2.3,
    prefix: "GH₵ ",
    suffix: "B+",
    label: "Assets Under Management (2024)",
    decimals: 1,
  },
  {
    value: 5000,
    prefix: "",
    suffix: "+",
    label: "Investors Served",
    decimals: 0,
  },
  {
    value: 1.7,
    prefix: "GH₵ ",
    suffix: "B+",
    label: "Capital Deployed Since Inception",
    decimals: 1,
  },
  {
    value: 250000,
    prefix: "",
    suffix: "+ MT",
    label: "Cocoa Financed Since Inception",
    decimals: 0,
  },
] as const;

export const WHAT_WE_DO = [
  {
    title: "Investments",
    description:
      "Institutional investment products structured around Ghana's cocoa economy, designed for stable, long-horizon returns.",
    href: "/investments",
    icon: "trending-up",
  },
  {
    title: "Funding Solutions",
    description:
      "Working capital, warehouse, and trade finance facilities tailored to licensed buyers, LBCs, and exporters.",
    href: "/funding",
    icon: "building",
  },
  {
    title: "Structured Finance",
    description:
      "Bespoke capital structures that mobilise institutional capital into cocoa purchase, logistics, and processing.",
    href: "/investments/structured-finance",
    icon: "layers",
  },
  {
    title: "Risk Management",
    description:
      "Rigorous credit frameworks, collateral monitoring, and portfolio oversight across every financed transaction.",
    href: "/about/risk",
    icon: "shield",
  },
  {
    title: "Sustainability",
    description:
      "ESG-aligned capital deployment supporting responsible sourcing, farmer livelihoods, and climate resilience.",
    href: "/esg",
    icon: "leaf",
  },
] as const;

/** Three pillars shown on the homepage — the full set lives on inner pages. */
export const HOME_PILLARS = [
  {
    title: "Investments",
    description:
      "Cocoa-linked instruments structured for stable, long-horizon returns.",
    href: "/investments",
    icon: "trending-up",
  },
  {
    title: "Funding Solutions",
    description:
      "Working capital, warehouse, and trade finance for licensed buyers and exporters.",
    href: "/funding",
    icon: "building",
  },
  {
    title: "Investor Centre",
    description:
      "Reports, announcements, and shareholder information in one place.",
    href: "/investor-centre",
    icon: "layers",
  },
] as const;

/** Quiet credibility markers — replaces a noisy partner marquee. */
export const TRUST_SIGNALS = [
  "Incorporated in Ghana",
  "Accra · Independence Avenue",
  "Board-Governed",
  "Audited Annually",
  "Cocoa Value Chain Specialists",
] as const;

export const HIGHLIGHTS = [
  {
    title: "Essential Commodity",
    description:
      "Cocoa remains a cornerstone of Ghana's economy—backed by global demand and strategic national importance.",
    icon: "wheat",
  },
  {
    title: "Attractive Returns",
    description:
      "Carefully structured instruments designed to deliver competitive, risk-adjusted yields for investors.",
    icon: "bar-chart",
  },
  {
    title: "Strong Governance",
    description:
      "Board oversight, regulatory compliance, and transparent reporting standards across all activities.",
    icon: "landmark",
  },
  {
    title: "Impact Driven",
    description:
      "Capital that strengthens the value chain while creating measurable social and economic outcomes.",
    icon: "heart-handshake",
  },
] as const;

export const WHY_REASONS = [
  {
    title: "Strong Governance",
    description:
      "Independent board oversight and institutional controls aligned with regulated market standards.",
  },
  {
    title: "Institutional Expertise",
    description:
      "Decades of combined experience in capital markets, trade finance, and commodity risk.",
  },
  {
    title: "Trusted Investment Manager",
    description:
      "A proven track record deploying capital across Ghana's cocoa ecosystem with discipline.",
  },
  {
    title: "Industry Specialists",
    description:
      "Deep sector knowledge spanning farm gate to export—enabling sharper underwriting.",
  },
  {
    title: "Technology Driven",
    description:
      "Digital monitoring, collateral tracking, and portfolio analytics that enhance transparency.",
  },
] as const;

export const INVESTMENT_PRODUCTS = [
  {
    title: "Cocoa Bonds",
    description:
      "Medium-term debt instruments backed by cocoa-linked cash flows, designed for institutional and high-net-worth investors.",
    href: "/investments/cocoa-bonds",
    icon: "file-text",
  },
  {
    title: "Commercial Paper",
    description:
      "Short-term money market instruments providing liquidity and competitive returns within defined tenor windows.",
    href: "/investments/commercial-paper",
    icon: "scroll-text",
  },
  {
    title: "Private Placement",
    description:
      "Bespoke private offerings for qualified investors seeking exposure to selected cocoa finance programmes.",
    href: "/investments/private-placement",
    icon: "lock",
  },
  {
    title: "Institutional Investments",
    description:
      "Mandate-driven solutions for pension funds, insurers, and asset managers seeking sector-aligned allocation.",
    href: "/investments/institutional",
    icon: "briefcase",
  },
] as const;

export const FUNDING_STEPS = [
  {
    title: "Working Capital",
    description:
      "Seasonal liquidity for licensed buying companies and aggregators to finance cocoa purchases.",
  },
  {
    title: "Warehouse Finance",
    description:
      "Collateralised facilities secured against graded, insured cocoa stocks held in approved warehouses.",
  },
  {
    title: "Trade Finance",
    description:
      "Export and import trade solutions supporting documentation, logistics, and settlement cycles.",
  },
  {
    title: "Supply Chain Finance",
    description:
      "Programme finance that connects upstream producers with downstream processors and exporters.",
  },
] as const;

export const ESG_PILLARS = [
  {
    title: "Environmental",
    description:
      "Supporting climate-smart agriculture, deforestation-free sourcing, and responsible land stewardship.",
    icon: "tree-pine",
  },
  {
    title: "Social",
    description:
      "Advancing farmer livelihoods, community development, and inclusive participation across the value chain.",
    icon: "users",
  },
  {
    title: "Governance",
    description:
      "Upholding transparency, ethical conduct, and accountable decision-making in every capital deployment.",
    icon: "scale",
  },
] as const;

export const NEWS_ITEMS = [
  {
    date: "MAY 24, 2024",
    isoDate: "2024-05-24",
    title: "Cocoa Capital Announces GH₵500M Bond Programme for 2024 Season",
    href: "/news/bond-programme-2024",
    image: "/images/beans-drying.jpg",
    alt: "Fermented cocoa beans drying on raffia mats in rural Ghana",
  },
  {
    date: "APR 12, 2024",
    isoDate: "2024-04-12",
    title: "Expanding Warehouse Finance Capacity Across Ashanti and Western Regions",
    href: "/news/warehouse-finance-expansion",
    image: "/images/warehouse-cocoa.jpg",
    alt: "Jute sacks of cocoa stacked in a Ghanaian warehouse",
  },
  {
    date: "MAR 03, 2024",
    isoDate: "2024-03-03",
    title: "Strategic Partnership to Strengthen Cocoa Export Logistics Corridors",
    href: "/news/export-logistics-partnership",
    image: "/images/port-export.jpg",
    alt: "Container vessel loading at the port of Tema, Ghana",
  },
  {
    date: "FEB 18, 2024",
    isoDate: "2024-02-18",
    title: "ESG Framework Update: Financing Climate-Resilient Cocoa Communities",
    href: "/news/esg-framework-update",
    image: "/images/farmers-cocoa.jpg",
    alt: "Ghanaian cocoa farmers inspecting freshly harvested pods",
  },
] as const;

export const PARTNERS = [
  "Ghana Cocoa Board",
  "Bank of Ghana",
  "GSE",
  "SEC Ghana",
  "GCB Bank",
  "Ecobank",
  "Stanbic Bank",
  "CalBank",
  "GIPC",
  "AfDB",
] as const;

export const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Leadership", href: "/about/leadership" },
    { label: "Governance", href: "/about/governance" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  investments: [
    { label: "Cocoa Bonds", href: "/investments/cocoa-bonds" },
    { label: "Commercial Paper", href: "/investments/commercial-paper" },
    { label: "Investment Notes", href: "/investments/notes" },
    { label: "Institutional Investments", href: "/investments/institutional" },
    { label: "How to Invest", href: "/investments/how-to-invest" },
  ],
  funding: [
    { label: "Cocoa Purchase Finance", href: "/funding/purchase" },
    { label: "Working Capital", href: "/funding/working-capital" },
    { label: "Trade Finance", href: "/funding/trade" },
    { label: "Warehouse Financing", href: "/funding/warehouse" },
    { label: "Apply for Funding", href: "/funding/apply" },
  ],
  investor: [
    { label: "Financial Reports", href: "/investor-centre/reports" },
    { label: "Announcements", href: "/investor-centre/announcements" },
    { label: "AGM Information", href: "/investor-centre/agm" },
    { label: "Downloads", href: "/investor-centre/downloads" },
    { label: "Shareholder Info", href: "/investor-centre/shareholders" },
  ],
} as const;
