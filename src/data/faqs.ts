import type { FAQ } from "./types";
import { fromCms } from "./cms";

export interface FAQSection {
  id: string;
  title: string;
  faqs: FAQ[];
}

/**
 * Public and investor FAQ, taken from Cocoa Capital PLC’s
 * “GHS 16.3 Billion Domestic Debt Issuance Programme” FAQ (28 September 2026).
 * Wording follows that document. Obvious typographical errors in the source
 * (misspellings and a dropped word) are corrected; the substance is unchanged.
 */
export const LOCAL_FAQ_SECTIONS: FAQSection[] = [
  {
    id: "programme-overview",
    title: "Programme overview",
    faqs: [
      {
        id: "what-is-the-programme",
        question: "What is the COCOBOD Domestic Debt Issuance Programme?",
        answer:
          "The COCOBOD Domestic Debt Issuance Programme (the “Programme”) is a GHS 16.3 billion Note issuance programme established by the Ghana Cocoa Board (COCOBOD) through a special purpose vehicle called Cocoa Capital PLC (“Cocoa Capital”). The Programme permits Cocoa Capital to issue Commercial Papers and Bonds to (i) finance COCOBOD’s cocoa beans purchase programme and (ii) refinance designated COCOBOD legacy debt.",
      },
      {
        id: "why-domestic-funding",
        question:
          "Why is COCOBOD moving to a domestic capital-market funding model?",
        answer:
          "COCOBOD historically relied on offshore syndicated pre-export finance, domestic cocoa bills, and more recently buyer financing for its cocoa purchases. While these have worked well in the past, the new domestic funding programme is intended to diversify funding sources, reduce dependence on offshore and buyer-funded arrangements, raise structured cedi funding for cedi-denominated purchasing needs, align drawdowns more closely with seasonal requirements, enhance domestic cocoa bean processing (value addition) and support development of Ghana’s domestic debt capital market.",
      },
      {
        id: "why-an-spv",
        question: "Why is a special purpose vehicle (SPV) being used?",
        answer:
          "As acknowledged in the Prospectus, COCOBOD has faced financial and liquidity challenges over the years which its comprehensive reform programme announced by the Minister of Finance in February 2026 is intended to address. Cocoa Capital does not necessarily resolve those challenges, nor is it intended to conceal those challenges. Instead, COCOBOD established Cocoa Capital as a financing vehicle to leverage the ring-fenced approach used successfully in COCOBOD’s longstanding offshore pre-export financing model by assigning selected cocoa-sale receivables to controlled accounts and prioritising debt service before surplus funds are released. The SPV has its own independent Board and operates independently of COCOBOD.",
      },
      {
        id: "independence",
        question: "How independent is Cocoa Capital from COCOBOD?",
        answer:
          "While sponsored by COCOBOD, Cocoa Capital has its own Board and governance framework, with KPMG serving as Corporate Manager and oversight provided by an independent governing council. Investors lend directly to Cocoa Capital, not COCOBOD, through a ring-fenced structured finance vehicle specifically mandated to mobilise capital for COCOBOD’s cocoa procurement programme. The SPV’s independence is further reinforced by its five-member Board, of which only one member represents COCOBOD, ensuring broad-based governance and independent oversight of the vehicle’s financing mandate. The key stakeholder groups represented on the Board are as follows:",
        points: [
          "Mr. John Awuah, Chairman — Chief Executive, Ghana Association of Banks",
          "Dr. Kofi Anokye Owusu-Darko, Independent Director — Former CEO, National Pension Regulatory Authority",
          "Prof. Joshua Yindenaba Abor, Independent Director — Professor of Finance, University of Ghana Business School",
          "Madam Yaa Asantewaa Asante, Ministry of Finance Representative — Head, Public Debt Management Office, Ministry of Finance",
          "Mr. Ato Boateng, COCOBOD Representative — Deputy Chief Executive, Finance & Administration, COCOBOD",
        ],
      },
      {
        id: "ownership",
        question: "Who owns Cocoa Capital?",
        answer:
          "COCOBOD is the sole shareholder of Cocoa Capital. However, it is governed by an independent Board with only one representative from COCOBOD, thereby promoting independent oversight, sound corporate governance, and accountability.",
      },
      {
        id: "paid-up-capital",
        question: "What is Cocoa Capital’s paid-up capital?",
        answer:
          "Cocoa Capital has a stated capital of GHS 5 million, which has been fully paid for by COCOBOD, the sponsor and sole shareholder of the SPV. The related stamp duty on the stated capital has been duly paid and this can be confirmed from the Office of the Registrar of Companies.",
      },
      {
        id: "cocoa-business",
        question: "Does Cocoa Capital operate a cocoa business?",
        answer:
          "No. The published Prospectus for the Note Programme describes Cocoa Capital as a dedicated financing vehicle that will not conduct nor operate cocoa business. Its activities will be carried out through its Board, the Corporate Manager and contracted service providers.",
      },
      {
        id: "day-to-day-management",
        question: "Who manages the day-to-day affairs of Cocoa Capital?",
        answer:
          "KPMG acts as the Corporate Manager under the Management Services Agreement and is responsible for management and supervisory services for the Issuer.",
      },
      {
        id: "programme-size",
        question: "What is the maximum size of the Programme?",
        answer:
          "The maximum aggregate principal amount of Commercial Papers and Notes outstanding at any one time under the Programme shall not exceed GHS 16,300,000,000. This is a programme ceiling, and not necessarily the amount that will be borrowed immediately. Each issuance requires an issue-specific Applicable Pricing Supplement.",
      },
      {
        id: "pricing-supplement",
        question: "What is an Applicable Pricing Supplement?",
        answer:
          "It is the document issued for a particular Series or Tranche that sets out the final offer price, principal amount, interest and other transaction terms applicable to that issue. It is subject to SEC approval. Where its terms conflict with the Prospectus, the Applicable Pricing Supplement prevails for that issue.",
      },
      {
        id: "instruments",
        question: "What instruments can be issued under the Programme?",
        answer:
          "The Programme permits the issuance of both Commercial Papers and Bonds. Commercial Papers may be issued either at a discount or with interest, while Bonds may be issued on either a fixed-rate or floating-rate basis, as specified in the applicable Pricing Supplement for each issuance.",
      },
      {
        id: "non-resident-investors",
        question: "Can non-resident investors participate?",
        answer:
          "The final Prospectus restricts distribution of the commercial paper to Ghanaian investors only, in line with the practice of issuance of short-term government treasury bills of up to 364 days. Subject to existing market rules and guidelines, non-resident investors may subscribe or purchase the bonds through the permitted market channels.",
      },
    ],
  },
  {
    id: "offer-terms",
    title: "Offer terms and use of proceeds",
    faqs: [
      {
        id: "salient-dates",
        question:
          "What are the salient dates and times for the first issuance under the Programme?",
        answer:
          "Where there are differences in dates contained in the final Prospectus and other public materials, investors should rely only on the final approved Applicable Pricing Supplement and formal Issuer announcement for the final confirmed issuance timetable.",
        points: [
          "Offer open: Monday, 28 September 2026",
          "Offer close: Wednesday, 30 September 2026",
          "Settlement / issue date: Thursday, 1 October 2026",
        ],
      },
      {
        id: "cp-proceeds",
        question: "What will the Commercial Paper proceeds be used for?",
        answer:
          "Commercial Paper proceeds are to be transferred to COCOBOD under a Financing Agreement between the SPV and COCOBOD for seed fund distribution to qualified Licensed Buying Companies against bank guarantees, and for onward payment for delivered cocoa beans against Cocoa Taken Over Receipts (CTORs) issued by the Cocoa Marketing Company. Where permitted and bridge funding was used for the same approved purpose before an issuance, the relevant Commercial Paper proceeds may first repay that bridge, with the details disclosed in the Applicable Pricing Supplement.",
      },
      {
        id: "bond-proceeds",
        question: "What will the Bond proceeds be used for?",
        answer:
          "Bond proceeds are intended to be used to redeem designated COCOBOD legacy debt (restructured cocoa bills). Where permitted and bridge funding was used for the same approved purpose before an issuance, the relevant Bond proceeds may first repay that bridge, with the details disclosed in the Applicable Pricing Supplement.",
      },
      {
        id: "legacy-debt-paid",
        question: "Has the legacy debt already been paid?",
        answer:
          "All due and payable obligations under the restructured cocoa bills have been settled by COCOBOD. The final Prospectus permits issuance proceeds to repay bridge funding obtained before an issuance, provided that the bridge financed a permitted use and is disclosed in the relevant Applicable Pricing Supplement.",
      },
      {
        id: "proceeds-control",
        question: "How are subscription proceeds controlled and applied?",
        answer:
          "Commercial Paper and Bond subscription proceeds are credited to their respective Subscription Accounts held by appointed subscription account banks. Following SEC approval and satisfaction of applicable conditions precedent, the proceeds are transferred to the relevant Proceeds Utilisation Account for the Commercial Paper and Bond and applied first to approved issuance expenses and then to the permitted cocoa purchase or legacy debt purpose. Accounts are kept separately per security to avoid commingling of funds.",
      },
      {
        id: "expenses-first",
        question:
          "Are programme expenses paid before the main use of proceeds?",
        answer:
          "Yes. The Prospectus provides that approved Programme and issuance-related expenses for the relevant Series or Tranche are paid first. The remaining net proceeds are then applied to the permitted purposes of the transaction.",
      },
    ],
  },
  {
    id: "working-party",
    title: "Transaction working party",
    faqs: [
      {
        id: "transaction-advisers",
        question: "Who are the transaction advisers?",
        answer:
          "The transaction advisers comprise the Joint Lead Managers: Absa Ghana Ltd, CalBank PLC, Fincap Securities Ltd, GCB Bank PLC, One Africa Securities Ltd and Stanbic Bank Ghana Ltd. In addition, Fincap Securities and One Africa Securities are acting as Co-Sponsoring Brokers. SEM Capital is the Transaction Adviser.",
      },
      {
        id: "adviser-fees",
        question: "How much are the transaction advisers being paid?",
        answer:
          "The transaction advisers on the transaction include the Joint Lead Managers, the Co-Sponsoring Brokers and the Transaction Adviser. Together, they are being paid a collective sum of 0.5% of the sum raised. This is purely a success-based fee payable only when funds have been duly raised, with no arranging fees or milestone-based fees. For context, the 0.5% total fees compare favourably to two previous quasi-SPV financing transactions: E.S.L.A. PLC paid arrangers 0.885%, whereas Daakye PLC paid its arranger a weighted average fee of 1.1254%.",
      },
      {
        id: "service-providers",
        question:
          "Who are the principal transaction advisers and service providers?",
        answer:
          "The Prospectus identifies Absa Bank Ghana, CalBank, GCB Bank, Stanbic Bank, Fincap Securities and One Africa Securities in lead-manager and broker roles; GCB and CalBank as Note Trustees and Paying Agents; SEM Capital as Transaction Adviser; the Central Securities Depository as Registrar, Transfer Agent and Calculation Agent; KPMG as Corporate Manager; PwC as Reporting Accountant; Beacon Ratings as Credit Rating Agency; and Sory & Partners@Law as Legal Advisers.",
      },
    ],
  },
  {
    id: "transaction-structure",
    title: "Transaction structure",
    faqs: [
      {
        id: "receivables-and-repayment",
        question:
          "How are the cocoa-sale receivables connected to repayment?",
        answer:
          "Selected executed cocoa forward contracts, together with the receivables arising from those forward cocoa sales contracts, have been assigned to Cocoa Capital. These assigned cocoa receivables constitute the primary source of repayment for the Notes issued under the Programme.",
      },
      {
        id: "status-of-notes",
        question: "What is the status of Notes issued under the Programme?",
        answer:
          "Notes issued under the Programme shall constitute senior unsecured notes (Commercial Papers or Bonds) obligations of Cocoa Capital. However, the Notes will be backed by cocoa receivables arising from executed forward sales contracts, which shall be irrevocably and unconditionally assigned to Cocoa Capital.",
      },
      {
        id: "collections",
        question: "Where are collections from assigned receivables paid?",
        answer:
          "Collections from assigned forward sales contracts are deposited into dedicated Collection Escrow Accounts maintained with the appointed account banks. Funds in these accounts are applied in accordance with the agreed account structure, including debt service obligations and other permitted payments. These accounts are separate from COCOBOD’s accounts and are subject to the control and oversight of the SPV.",
      },
      {
        id: "after-debt-service",
        question: "What happens when debt service requirements have been met?",
        answer:
          "Subject to the applicable account arrangements and Trustee consent, surplus cash may be transferred to the Operations Account controlled by the SPV for permitted operational uses and liability management.",
      },
      {
        id: "cp-tenor",
        question: "What is the tenor of the Commercial Paper?",
        answer:
          "Commercial Paper may have a minimum tenor of 15 calendar days and a maximum tenor of 270 calendar days, subject to the Ghana Stock Exchange’s Commercial Paper Issuance and Admission Rules. The Applicable Pricing Supplement for the contemplated issue specifies a 270-day maturity.",
      },
      {
        id: "cp-early-redemption",
        question: "Is the Commercial Paper redeemable before maturity?",
        answer:
          "No. Commercial Paper under the Programme, as governed by the Ghana Stock Exchange’s Commercial Paper Issuance and Admission Rules, is option-free and redeemable only at maturity. Early redemption, call options, put options, instalment redemption and issuer purchases do not apply to Commercial Paper.",
      },
      {
        id: "what-is-dscr",
        question: "What is the Debt Service Coverage Ratio (DSCR)?",
        answer:
          "The DSCR is a measure comparing specified cash balances in the relevant debt service, collections and buffer accounts with principal, interest and other obligations due on the next repayment date.",
      },
      {
        id: "minimum-dscr",
        question: "What DSCR must Cocoa Capital maintain?",
        answer:
          "The Programme requires a minimum DSCR of 1.20x. For the Bonds, the ratio is calculated using balances in the Bond Debt Service Account, Bond Collections Account and Bond Buffer Account against obligations due on the next repayment date.",
      },
      {
        id: "debt-service-account",
        question: "What is the purpose of the Debt Service Account?",
        answer:
          "The Debt Service Account is used to hold amounts required for scheduled Note repayments and to transfer repayment funds into the relevant Trust Account for payment to Noteholders.",
      },
      {
        id: "bond-buffer-account",
        question: "What is the Bond Buffer Account?",
        answer:
          "It is a GHS-denominated account designed to provide additional funds for debt service and certain permitted purposes. The transaction structure provides for the Bond Buffer Account to be funded with 0.2x of the Debt Service Amount.",
      },
      {
        id: "debt-service-amount",
        question: "What is the Debt Service Amount?",
        answer:
          "For the relevant funding period, it is the amount required to be maintained in the Debt Service Account. The initial transfer is at least 1.2x of the next Note repayment, while subsequent transfers are at least equal to the next Note repayment, subject to the terms of the Prospectus.",
      },
      {
        id: "assigned-receivables",
        question: "What are Assigned Cocoa Receivables?",
        answer:
          "They are specified payment rights, arising from eligible cocoa sales and assigned to the Issuer under the Programme Documents. The assignment of these receivables is documented through the Assignment Agreement and forms part of the Programme’s structural arrangements for supporting the repayment of amounts due under the Programme.",
      },
      {
        id: "financing-agreement",
        question: "What is the role of the Financing Agreement?",
        answer:
          "The Financing Agreement governs the financing provided by the Issuer (Cocoa Capital) to COCOBOD, including repayment terms, approved use of funds and the security structure involving assigned rights and receivables, as well as funds-return mechanisms.",
      },
      {
        id: "note-trustees",
        question: "What is the role of the Note Trustees?",
        answer:
          "CalBank PLC is the Lead Note Trustee while GCB Bank PLC acts as Co-Trustee. The Trustees perform the functions assigned under the Trust Deed and the Programme Conditions for the benefit of Noteholders, subject to the terms of those documents.",
      },
      {
        id: "credit-rated",
        question: "Has the transaction been credit rated?",
        answer:
          "Yes. The Prospectus includes Beacon Credit Rating Agency’s initial rating assessment covering COCOBOD, Cocoa Capital and the structured finance obligations relating to the Bond and Commercial Paper Programme.",
      },
      {
        id: "cocoa-capital-ratings",
        question: "What ratings are stated for Cocoa Capital?",
        answer:
          "The Beacon Ratings letter states an initial medium-term issuer rating of A with a stable outlook for Cocoa Capital and a short-term rating of ST1. The Bonds and Commercial Papers issued under the Programme are separately rated as structured finance obligations.",
      },
      {
        id: "rating-not-a-guarantee",
        question: "Does a credit rating guarantee repayment?",
        answer:
          "No. A credit rating is an assessment of credit quality and credit risk; it does not constitute a guarantee of payment or eliminate the risks described in the Prospectus.",
      },
      {
        id: "cocobod-financials",
        question: "Why are COCOBOD’s financials not incorporated into the Prospectus?",
        answer:
          "COCOBOD’s financial statements for the last two financial years are currently undergoing external audit by EY. However, as this is a structured finance transaction, primary reliance is placed on the assigned cocoa forward contracts and the receivables arising thereunder, which constitute the principal source of repayment for the Notes. Investors should therefore primarily assess the quality of the assigned receivables, together with the underlying cocoa production assumptions and world cocoa price outlook.",
      },
      {
        id: "role-of-sec",
        question: "What is the role of the SEC in the transaction?",
        answer:
          "The Securities and Exchange Commission is the relevant capital-market regulator. The Prospectus and Applicable Pricing Supplements are subject to SEC approval, and the Prospectus describes the regulatory framework applicable to the Programme.",
      },
      {
        id: "gse-approval",
        question: "Does GSE approval mean that the investment is endorsed?",
        answer:
          "No. The Prospectus expressly states that SEC or GSE approval of an issue or listing should not be taken as an indication of the merits of the Issuer or the Notes.",
      },
      {
        id: "gfim-listing",
        question: "Is the Programme listed on the Ghana Fixed Income Market?",
        answer:
          "The Prospectus states that provisional approval has been obtained for listing and trading on the Ghana Fixed Income Market (GFIM), subject to satisfaction of the Ghana Stock Exchange’s listing requirements. The Applicable Pricing Supplement also provides for GFIM listing.",
      },
      {
        id: "how-notes-are-held",
        question: "How are the Notes held by investors?",
        answer:
          "The Notes are held in dematerialised form and electronically registered with the Central Securities Depository (GH) Ltd, subject to the Global Note Certificate arrangements.",
      },
      {
        id: "register",
        question: "Who maintains the register of Noteholders?",
        answer:
          "The Central Securities Depository (GH) Ltd acts as Registrar and maintains the Register of Noteholders in electronic form.",
      },
      {
        id: "principal-repayment-risk",
        question:
          "What is the principal repayment risk identified in the Prospectus?",
        answer:
          "The Prospectus states that timely payment of principal and interest depends substantially on the timely and full collection of the Assigned Cocoa Receivables, which are the primary source of repayment for the Notes. Payment delays, contractual disputes, set-off claims, counterparty defaults, insolvency events, sales-volume changes and shipment or customer-payment delays may affect the availability and timing of cash flows required to meet principal and interest payment obligations.",
      },
      {
        id: "delayed-collections",
        question:
          "What happens if assigned receivables are collected later than expected?",
        answer:
          "Delayed collections may reduce the cash available to Cocoa Capital to meet its obligations when due. The transaction therefore incorporates controlled collection and debt service accounts and a minimum DSCR as structural protections.",
      },
      {
        id: "events-of-default",
        question: "What are Events of Default?",
        answer:
          "Events of Default are specified in Condition 17 of the Prospectus. Following an applicable Event of Default, the relevant Note Trustee may, at its discretion or when properly directed by the required Noteholder resolution and subject to the applicable conditions, declare affected Notes immediately due and repayable.",
      },
      {
        id: "default-consequence",
        question: "What is the consequence of an Event of Default?",
        answer:
          "Where the relevant conditions are satisfied, affected Notes may become immediately due and repayable at the Principal Amount together with accrued interest, in accordance with the Conditions.",
      },
      {
        id: "debt-service-shortfall",
        question: "What happens if there is a debt service shortfall?",
        answer:
          "A Debt Service Shortfall arises where the cash balances in the relevant Issuer Accounts are or will be insufficient to meet the specified Debt Service Amount and DSCR. COCOBOD, under the relevant Programme Documents, has undertaken to fund any Debt Service Shortfall arising while Notes remain outstanding under the Programme through the assignment of additional cocoa forward contracts.",
      },
      {
        id: "non-petition",
        question:
          "Can investors petition to wind up or reorganise the Issuer individually?",
        answer:
          "The Conditions contain a non-petition provision restricting individual insolvency, liquidation or similar proceedings against the Issuer in relation to Programme obligations, subject to the specific exception stated for a liquidation initiated by the Note Trustee following an applicable Event of Default.",
      },
      {
        id: "governing-law",
        question: "What law governs the Notes and Trust Deed?",
        answer:
          "The Conditions, Notes and Trust Deed are governed by Ghanaian law.",
      },
      {
        id: "disputes",
        question: "How are disputes resolved?",
        answer:
          "Disputes arising from or connected with the Conditions, Notes or Trust Deed are to be finally resolved by arbitration under the Alternative Dispute Resolution Act, 2010 (Act 798). The arbitration is in Accra, in English, under the rules of the Ghana Arbitration Centre, with one arbitrator unless otherwise agreed.",
      },
      {
        id: "withholding-tax",
        question: "Is interest on the Notes subject to withholding tax?",
        answer:
          "The Applicable Pricing Supplement states that interest earned on Notes is subject to 8% withholding tax unless exempted by law, in which case the applicable exemption certificate should be provided.",
      },
      {
        id: "transferable",
        question: "Are Notes transferable?",
        answer: "Yes.",
      },
      {
        id: "when-notes-credited",
        question: "When will successful investors receive their Notes?",
        answer:
          "For the contemplated Bond issue, fully paid Notes are to be credited to successful applicants’ Central Securities Depository accounts within two Business Days of the Issue Date, subject to receipt of cleared funds.",
      },
      {
        id: "listing-timing",
        question: "When are the Bonds expected to be listed after issue?",
        answer:
          "The Applicable Pricing Supplement states that the issued Bonds will be listed for trading on the Ghana Fixed Income Market within five Business Days of the Issue Date.",
      },
      {
        id: "allotment-notice",
        question: "How are investors notified of allotment?",
        answer:
          "The Bond Applicable Pricing Supplement states that applicants will be notified of their allotment by email by the stated allotment deadline.",
      },
      {
        id: "pay-for-bonds",
        question: "How does an investor pay for the Bonds?",
        answer:
          "Payment is to be made in full by bank transfer or remittance to the Issuer’s designated GHS Bond Subscription Account, by the applicable payment deadline.",
      },
      {
        id: "pay-for-cp",
        question: "How does an investor pay for the Commercial Paper?",
        answer:
          "The Commercial Paper Applicable Pricing Supplement provides for payment by bank transfer or remittance to the Issuer’s designated Commercial Paper Subscription Account, in accordance with the settlement instructions and applicable deadline.",
      },
      {
        id: "final-terms",
        question:
          "Does the Prospectus itself contain the final terms for every future issue?",
        answer:
          "No. The Programme Prospectus establishes the framework, while the Applicable Pricing Supplement for each Series or Tranche contains the final issue-specific terms such as amount, price, interest, maturity and redemption arrangements.",
      },
      {
        id: "what-to-read",
        question: "What should an investor read before subscribing?",
        answer:
          "The investor should read the Prospectus together with the relevant Applicable Pricing Supplement and the incorporated Programme Documents, paying particular attention to the Conditions, risk factors, repayment structure, tax provisions, financial covenants and issue-specific terms. The Prospectus also recommends obtaining independent legal, financial and tax advice.",
      },
      {
        id: "funding-strategy-change",
        question:
          "Why did COCOBOD change its funding strategy from the buyer-financed model?",
        answer:
          "The new domestic funding was part of the reforms approved by Cabinet in February 2026 to address the issues arising from the buyer-funded model. Under the buyer-funded model, the cocoa industry in Ghana was exposed to various risks, such as access to sustainable liquidity, support for local Licensed Buying Companies (LBCs), support for local processing, and control over cocoa marketing and pricing. The domestic funding is expected to address the challenges faced by the indigenous LBCs, particularly those that lacked access to direct financing, and restore their participation by improving access to working capital (seed funds).",
      },
    ],
  },
];

export const FAQ_SECTIONS: FAQSection[] = fromCms("faqSections", LOCAL_FAQ_SECTIONS);

export const FAQS: FAQ[] = FAQ_SECTIONS.flatMap((section) => section.faqs);
