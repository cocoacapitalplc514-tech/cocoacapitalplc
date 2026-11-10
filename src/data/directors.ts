import type { Director } from "./types";
import { fromCms } from "./cms";

/**
 * Board of Cocoa Capital PLC, from the ownership-structure and directors
 * disclosure. Appointment dates are statutory appointment dates.
 * Chairman is listed first; the remaining directors follow the profile order
 * in that disclosure.
 */
export const LOCAL_DIRECTORS: Director[] = [
  {
    id: "john-awuah",
    name: "Mr John Awuah",
    role: "Chairman",
    image: "/images/directors/john-awuah.png",
    appointmentDate: "28 July 2026",
    nominatingParty: "Ministry of Finance",
    otherRoles: [
      "Chief Executive Officer, Ghana Association of Banks",
      "Director, GAB Health Insurance",
      "Director, GETFUND",
      "Director, Ghana Investment Promotion Authority",
      "Director, SANLAM General Insurance",
    ],
    biography: [
      "John Awuah is the Chief Executive Officer of the Ghana Association of Banks, with an executive management track record spanning over two and a half decades across the financial services sector. He previously served as Chief Executive Officer of Universal Merchant Bank and held senior leadership roles including Finance Director at GCB Bank, Group Chief Finance Officer at Ecobank Capital, Financial Controller at Barclays Bank of Ghana (now Absa Bank), Chief Finance Officer at UBA Ghana and Finance Business Partner at Standard Chartered Bank Ghana. He is a Fellow of the Association of Chartered Certified Accountants (UK) and a member of the Institute of Chartered Accountants, Ghana, and holds a Bachelor of Commerce degree from the University of Cape Coast and an MBA from the Oxford Institute of International Finance, Oxford Brookes University.",
      "He serves on the Boards and National Committees of, among others, the Chartered Institute of Bankers Ghana, the Private Enterprise Federation, the Ghana Investment Promotion Centre, the Ghana Education Trust Fund and the Cocoa Sector Marketing Committee (COSMARC), and is a member of the Payments Systems Advisory Council of the Bank of Ghana.",
    ],
  },
  {
    id: "ato-boateng",
    name: "Mr Ato Boateng",
    role: "Non-Executive Director",
    image: "/images/directors/ato-boateng.png",
    appointmentDate: "28 July 2026",
    nominatingParty: "COCOBOD",
    otherRoles: [
      "Ag. Deputy Chief Executive (Finance & Administration), COCOBOD",
    ],
    biography: [
      "Ato Boateng is the Acting Deputy Chief Executive (Finance & Administration) at Ghana Cocoa Board, which he joined in February 2025, where he oversees finance, administration, treasury, risk management and institutional reforms. He holds a BSc in Business Administration (accounting option) from the University of Ghana Business School and a master's degree in public administration from Harvard University, focused on change management and leadership. He is a Chartered Accountant (2005) and a CFA Charter holder (2011).",
      "He began his career at PricewaterhouseCoopers as an Audit Trainee in 2004, leaving as a Corporate Finance Consultant in 2007, before joining the International Finance Corporation, the private-sector arm of the World Bank Group, as an analyst and leaving as an Investment Officer in 2016. During this period he led the financing of the Aboadze Thermal Plant, Ghana's first Independent Power Producer, the Tullow Oil and Kosmos Energy funding of the Jubilee Oil Project, and Vodafone's refinancing of Ghana Telecom's infrastructure acquisition and upgrade. He subsequently advised the Board of Volta Aluminium Company (VALCO) from 2016 to 2018, advised the National Investment Bank on a Trade Finance facility and Axis Pensions on equity financing, and was mandated to assist the Government of Zambia with sovereign debt restructuring. He has also managed Liger Capital Management, a private-equity and financial-advisory firm, and Atlas Commodities Limited, a licensed buying company.",
    ],
  },
  {
    id: "joshua-yindenaba-abor",
    name: "Prof. Joshua Yindenaba Abor",
    role: "Non-Executive Director",
    image: "/images/directors/joshua-yindenaba-abor.png",
    appointmentDate: "28 July 2026",
    nominatingParty: "KPMG",
    otherRoles: [
      "Director, Internal Audit Agency",
      "Director, University of Ghana Enterprises Ltd",
    ],
    biography: [
      "Professor Joshua Yindenaba Abor is a financial economist and Professor of Finance at the University of Ghana Business School, of which he is a former Dean. He holds a PhD in Finance from Stellenbosch University, having completed PhD coursework in Financial Economics at Harvard University, and is a Fellow of the Association of Chartered Certified Accountants (UK). He serves as an External Fellow at the Centre for Global Finance, SOAS University of London, an Adjunct Professor of Development Finance at Stellenbosch University, and a member of the Bank of Ghana's Monetary Policy Committee since 2015.",
      "He is currently a Senior Consultant at the ECOWAS Bank for Investment and Development and has previously served as a Consultant and Senior Research Fellow at the African Export-Import Bank and as a Visiting Scholar at the International Monetary Fund. He has held board and committee positions including Chair of the Board of the Internal Audit Agency, member of the Board of Directors of University of Ghana Enterprises Ltd, and Chairman of the Boards of Best Western Premier Hotel, SIC Life Company Ltd and Allianz Life Insurance Company, Ghana. He has authored and edited numerous books and journal articles in finance and development finance.",
    ],
  },
  {
    id: "kofi-anokye-owusu-darko",
    name: "Dr Kofi Anokye Owusu-Darko",
    role: "Non-Executive Director",
    image: "/images/directors/kofi-anokye-owusu-darko.png",
    appointmentDate: "28 July 2026",
    nominatingParty: "National Pensions Regulatory Authority",
    otherRoles: ["Director, Inclusion Ghana"],
    biography: [
      "Dr Kofi Anokye Owusu-Darko is a distinguished executive and process consultant with over three decades of experience in banking operations, finance, organisational development and dispute resolution. He has held senior executive roles including Chief Operating Officer at Ideal Finance, Senior Vice President at The Royal Bank Ghana, and Head of Consumer Banking Operations and Head of Operational Risk at Merchant Bank (now UMB Bank). He served as Chief Executive Officer of the National Pensions Regulatory Authority, where he facilitated the development of new pensions investment guidelines for Ghana, achieved financial autonomy for the Authority and developed its five-year strategic plan.",
      "He holds a Doctorate in Business Administration (Leadership & Organisational Change), an LLB, an LLM in Information Technology & Telecommunications, an Executive MBA in Information Technology Management, and professional qualifications including Chartered Banker (ACIB) and Certified Management Consultant (CMC). He is a facilitator with the China Europe International Business School and a consulting partner at BAAF Mediation & ADR Consultants.",
    ],
  },
  {
    id: "yaa-asantewa-asante",
    name: "Ms Yaa Asantewa Asante",
    role: "Non-Executive Director",
    image: "/images/directors/yaa-asantewa-asante.png",
    appointmentDate: "28 July 2026",
    nominatingParty: "Ministry of Finance",
    otherRoles: [
      "Director, Public Debt Management Office, Ministry of Finance",
    ],
    biography: [
      "Yaa Asantewa Asante is a Chief Economics Officer and Director of the Public Debt Management Office at the Ministry of Finance, Ghana, with over 20 years' experience as an economist at the Ministry. She previously served as Group Head of Budget Monitoring and Reporting (2024–2025) and Head of the Public Expenditure Management Unit (2016–2024), and headed the Investor Relations Unit and the Domestic Debt Management Unit within the Public Debt Management Office. She is a member of the National Bond Market Committee II and led the development of Ghana's first domestic debt issuance calendar.",
      "She holds a BA in Economics and an MSc in Accounting and Finance from the University of Ghana, and an MSc in Financial Economics from the University of Leicester. She is a member of the Institute of Certified Economists of Ghana and was awarded the British Chevening Scholarship in 2005.",
    ],
  },
];

export const DIRECTORS: Director[] = fromCms("directors", LOCAL_DIRECTORS);
