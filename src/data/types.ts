export type InstrumentType = "commercial-paper" | "bond";

export type IssuanceStatus =
  | "upcoming"
  | "open"
  | "closed"
  | "outstanding"
  | "matured"
  | "redeemed";

export type DocumentType =
  | "prospectus"
  | "pricing-supplement"
  | "financial-statement"
  | "credit-rating"
  | "investor-presentation"
  | "announcement"
  | "payment-notice"
  | "corporate-document";

export type AnnouncementCategory =
  | "issuance"
  | "investor-notice"
  | "payment-notice"
  | "corporate"
  | "press-release"
  | "general";

export interface DocumentReference {
  id: string;
  title: string;
  type: DocumentType;
  publicationDate?: string;
  year?: number;
  instrument?: InstrumentType;
  series?: string;
  fileUrl?: string;
  fileSize?: string;
  description?: string;
  /** In-site page that opens this file in the document viewer. */
  viewerHref?: string;
}

export interface Issuance {
  id: string;
  slug: string;
  instrumentType: InstrumentType;
  series: string;
  tranche?: string;
  issueDate?: string;
  maturityDate?: string;
  tenor?: string;
  issueAmount?: number;
  currency?: string;
  couponRate?: number;
  interestFrequency?: string;
  issuePrice?: string;
  listing?: string;
  status: IssuanceStatus;
  documents: DocumentReference[];
  paymentSchedule?: PaymentScheduleItem[];
}

export interface PaymentScheduleItem {
  paymentDate?: string;
  type: string;
  amountOrRate?: string;
  status?: "scheduled" | "paid" | "upcoming" | "tbd";
}

export interface ProgrammeMetric {
  label: string;
  value: string | null;
  detail?: string;
}

export interface ProgrammeFrameworkItem {
  title: string;
  description: string;
}

export interface ProgrammeParty {
  role: string;
  organisations: string[];
}

export interface ProgrammeInstrument {
  name: string;
  tenor: string;
  purpose: string;
}

export interface ProgrammeInfo {
  name: string;
  sizeLabel: string;
  sizeShort: string;
  listing: string;
  listingFull: string;
  purpose: string;
  summary: string;
  instruments: ProgrammeInstrument[];
}

export interface PurposePanel extends ProgrammeFrameworkItem {
  href: string;
}

export interface PageSectionCopy {
  title: string;
  description?: string;
}

/** Editable copy on /investor-relations/programme. */
export interface ProgrammePageCopy {
  heroTitle: string;
  overview: PageSectionCopy;
  instruments: PageSectionCopy & { note: string };
  useOfProceeds: PageSectionCopy & {
    commercialPaperText: string;
    bondText: string;
  };
  howItWorks: PageSectionCopy;
  repayment: PageSectionCopy;
  risk: PageSectionCopy;
}

export interface CorporateEntity {
  name: string;
  role: string;
}

export interface CorporateStructure {
  sponsor: CorporateEntity;
  issuer: CorporateEntity;
  corporateManager: CorporateEntity;
}

/** Controls whether the prospectus and transaction documents are public. */
export interface PublicationSettings {
  prospectus: boolean;
  transactionDocuments: boolean;
}

export interface Director {
  id: string;
  name: string;
  role: string;
  /** Statutory appointment date, as stated in the directors disclosure. */
  appointmentDate?: string;
  nominatingParty?: string;
  otherRoles?: string[];
  /** Profile paragraphs, in source order. */
  biography?: string[];
  committees?: string[];
  image?: string;
}

export interface Rating {
  id: string;
  agency: string;
  rating?: string;
  outlook?: string;
  ratingDate?: string;
  reportUrl?: string;
}

export interface Announcement {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: AnnouncementCategory;
  summary: string;
  body: string;
  pinned?: boolean;
  attachments?: DocumentReference[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  /** Supporting list rendered after the answer, when the source FAQ uses one. */
  points?: string[];
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: AnnouncementCategory;
  summary: string;
  body: string;
  image?: string;
  alt?: string;
  pinned?: boolean;
}
