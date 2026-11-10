import type { CorporateStructure, ProgrammeParty } from "./types";
import { fromCms } from "./cms";

/**
 * Programme parties identified in the prospectus corporate information.
 * Do not hardcode organisations that have not been finally confirmed.
 */
export const LOCAL_PROGRAMME_PARTIES: ProgrammeParty[] = [
  {
    role: "Corporate Manager",
    organisations: ["KPMG"],
  },
  {
    role: "Joint Lead Managers",
    organisations: [
      "Absa",
      "CalBank",
      "GCB",
      "Stanbic",
      "Fincap Securities",
      "One Africa",
    ],
  },
  {
    role: "Reporting Accountant",
    organisations: ["PwC"],
  },
  {
    role: "Registrar / Calculation Agent",
    organisations: ["Central Securities Depository"],
  },
  {
    role: "Credit Rating Agency",
    organisations: ["Beacon Ratings"],
  },
  {
    role: "Legal Adviser",
    organisations: ["Sory & Partners"],
  },
  {
    role: "Transaction Adviser",
    organisations: ["SEM Capital Advisors"],
  },
];

export const LOCAL_CORPORATE_STRUCTURE: CorporateStructure = {
  sponsor: {
    name: "Ghana Cocoa Board",
    role: "Sole Shareholder / Sponsor",
  },
  issuer: {
    name: "Cocoa Capital PLC",
    role: "Issuer / Financing SPV",
  },
  corporateManager: {
    name: "KPMG",
    role: "Corporate Manager",
  },
};

export const PROGRAMME_PARTIES: ProgrammeParty[] = fromCms(
  "programmeParties",
  LOCAL_PROGRAMME_PARTIES
);

export const CORPORATE_STRUCTURE: CorporateStructure = fromCms(
  "corporateStructure",
  LOCAL_CORPORATE_STRUCTURE
);
