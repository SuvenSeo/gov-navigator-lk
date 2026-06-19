/**
 * Offline canned answers — demo-safety net.
 *
 * If every AI provider in the fallback chain is down (no keys, rate-limited,
 * outage), the chat would otherwise show only an error. These pre-written,
 * data-accurate answers (sourced from data/services.json — no invented fees)
 * are served client-side so the most common questions ALWAYS return a useful
 * response. Section headers match ColoredMarkdown so they stay color-coded.
 */

export interface FallbackAnswer {
  keywords: string[]
  content: string
}

const VERIFY = `*GovNav LK is not an official government site. Always verify documents and fees at the office before travelling — details change.*`

export const FALLBACK_ANSWERS: FallbackAnswer[] = [
  {
    keywords: ['nic', 'identity card', 'හැඳුනුම්', 'national id'],
    content: `**National Identity Card (NIC) — New Application**

Issued by the **Department for Registration of Persons (DRP)**. All Sri Lankan citizens aged 16+ are eligible.

## 📋 Documents Required
- Original **Birth Certificate**
- **ICAO-standard photograph** taken within the last 6 months (authorised provider)
- Completed **Form D.R.P/1** — from drp.gov.lk or your Divisional Secretariat
- Parent/Guardian's NIC (if applicant is under 18)
- School certificate / principal's letter (if aged 16–17)

## 💰 Fees
- First issue: **LKR 200**
- One-Day Service: **+LKR 2,000** (in addition to base fee)
- Late application penalty: **LKR 2,500**

## ✅ Steps
1. Download **Form D.R.P/1** (drp.gov.lk) or collect it at your Divisional Secretariat.
2. Gather all original documents and the ICAO photo.
3. Submit at your **nearest Divisional Secretariat** (primary service point).
4. Pay the fee and keep the receipt; collect or wait for postal delivery.

## 🏛️ Where
**Divisional Secretariat (island-wide)** or DRP Head Office — Suhurupaya, Battaramulla · ☎ +94 11 5226100

⏱️ Normal: ~3 months (mailed) · One-Day Service: ~3 hours · 🔗 drp.gov.lk

${VERIFY}`,
  },
  {
    keywords: ['passport', 'ගමන් බලපත්', 'travel document'],
    content: `**Passport — New / Renewal**

Issued by the **Department of Immigration & Emigration**. Adult passports are valid 10 years.

## 📋 Documents Required
- **National Identity Card (NIC)** — original (you must attend in person for fingerprints)
- **Birth Certificate** — original + photocopy (new applications)
- Current/expired passport — original (for renewals; returned cancelled)
- **Digital photograph** from an authorised studio (printed photos not accepted)
- Completed form **K35A** — from immigration.gov.lk or a Regional Office

## 💰 Fees
- Adult, normal (10 years): **LKR 10,000**
- Adult, one-day urgent: **LKR 20,000**
- Child under 16, normal: **LKR 3,000** · one-day: **LKR 9,000**

## ✅ Steps
1. Complete form **K35A** and gather originals + digital photo.
2. Pay the fee at the Department cashier and keep the receipt.
3. Attend in person at Head Office or a Regional Office for biometrics.
4. Collect same-day (urgent) or receive within ~30 working days.

## 🏛️ Where
**Head Office — Suhurupaya, Battaramulla**, or Regional Offices (Kandy, Matara, Kurunegala, Vavuniya, Jaffna) · ☎ 1962

⏱️ Normal: ~30 working days · One-Day: same day (Battaramulla or Jaffna only) · 🔗 immigration.gov.lk

${VERIFY}`,
  },
  {
    keywords: ['driving', 'licence', 'license', 'riya', 'රිය', 'learner'],
    content: `**Driving Licence — Learner's (Provisional)**

Issued by the **Department of Motor Traffic (DMT)**. Register for the written test from age 17 (18+ for the practical test).

## 📋 Documents Required
- **National Identity Card (NIC)** — original
- **Medical fitness certificate** from the National Transport Medical Institute (NTMI) — valid 6 months
- Completed DMT application forms
- Payment receipt for the learner permit / new licence levy

## 💰 Fees
- Learner + new licence, 1 class (normal): **LKR 2,500**
- 2 classes: **LKR 3,000** · 3+ classes: **LKR 3,500**
- Same-day service: **+LKR 1,000** per category
- Written test re-sit: **LKR 500**

## ✅ Steps
1. Book an appointment at **dmtappointments.dmt.gov.lk**.
2. Obtain your **NTMI medical certificate**.
3. Sit the **written test** at the DMT office.
4. On passing, pay the fee and receive your learner permit (same day).

## 🏛️ Where
**DMT Head Office** — 341, Dr. Danister De Silva Mw (Alvitigala Mw), Narahenpita, Colombo 05 · ☎ +94 11 2033333

⏱️ Same day upon passing the written test · 🔗 dmt.gov.lk

${VERIFY}`,
  },
  {
    keywords: ['birth certificate', 'birth', 'උප්පැන්න'],
    content: `**Birth Certificate — Certified Copy**

Issued by the **Registrar General's Department (RGD)** through your Divisional Secretariat.

## 📋 Documents Required
- **National Identity Card (NIC)** of the applicant
- Birth certificate **number and date of registration** (if known — this lowers the fee)
- Completed application form (at the DS office or online eBMD)

## 💰 Fees
- Certified copy (number known): **LKR 120 per copy**
- Search required (number unknown): **LKR 250** first copy, then LKR 120 each

## ✅ Steps
1. Visit your **Divisional Secretariat** or apply online at the eBMD portal.
2. Provide your NIC and the registration details (if you have them).
3. Pay the fee and collect the certified copy.

## 🏛️ Where
**Divisional Secretariat (island-wide)** or RGD Head Office — 234/A3, Denzil Kobbekaduwa Mw, Battaramulla · ☎ +94 11 288 9488

⏱️ Same day at the DS (if in database) · ~5 working days online · 🔗 online.ebmd.rgd.gov.lk

${VERIFY}`,
  },
  {
    keywords: ['police clearance', 'police', 'clearance', 'පොලිස්'],
    content: `**Police Clearance Certificate**

Issued by **Sri Lanka Police** — applied for online (commonly required for overseas jobs, visas, and migration).

## 📋 Documents Required
- Clear scan of your **NIC (both sides)**
- **Passport** copy (especially for overseas purposes)
- A correct **email address** for status updates
- Debit/credit card for online payment

## 💰 Fees
- Online application: as per the **police.lk** payment gateway (overseas applicants: **LKR 5,100** cited on police.lk)

## ✅ Steps
1. Go to **police.lk → E-Services → Clearance Certificates**.
2. Complete the online form and upload your NIC/passport scans.
3. Pay online and note your reference number.
4. Track status by email; the certificate is issued after processing.

## 🏛️ Where
**Online** — police.lk (E-Services) · ☎ 071 8592990 (WhatsApp support)

⏱️ Approximately 14 days (overseas); varies for local applications · 🔗 police.lk

${VERIFY}`,
  },
  {
    keywords: ['marriage', 'wedding', 'විවාහ'],
    content: `**Marriage Registration & Certificate**

Registered by your **Divisional Secretariat Marriage Registrar** (Registrar General's Department).

## 📋 Documents Required
- **NICs** of both parties — originals
- **Birth Certificates** of both parties — originals
- **Two witnesses** aged 18+ with their NICs
- Divorce/Death certificate of a previous spouse (if applicable)
- Notice of Marriage (in duplicate)

## 💰 Fees
- Notice of marriage: **LKR 120**
- Solemnisation at registrar office: **LKR 900**
- Registrar certificate: **LKR 120**

## ✅ Steps
1. Give **Notice of Marriage** to the registrar (14-day notice period applies).
2. Submit both parties' originals and arrange two witnesses.
3. Solemnise on the registration day and receive the certificate.

## 🏛️ Where
**Marriage Registrar — your Divisional Secretariat** (island-wide)

⏱️ Certificate issued on registration day (after the 14-day notice) · 🔗 rgd.gov.lk

${VERIFY}`,
  },
  {
    keywords: ['grama', 'niladhari', 'residence', 'residency', 'character', 'income certificate', 'ග්‍රාම'],
    content: `**Grama Niladhari Certificates** (residence, character, income, etc.)

Issued by your local **Grama Niladhari (GN)** officer via the Divisional Secretariat.

## 📋 Documents Required
- **National Identity Card (NIC)** — original
- A **written request** stating the certificate type and purpose
- Any supporting documents (e.g. birth certificate for a residence certificate)

## 💰 Fees
- Most certificates: **free or minimal stamp duty (LKR 20–50)**

## ✅ Steps
1. Find your **GN division** (ask at your nearest Divisional Secretariat).
2. Submit your NIC and a written request to the Grama Niladhari.
3. Collect the certificate once verified.

## 🏛️ Where
**Your local Grama Niladhari office** — ask at the nearest Divisional Secretariat

⏱️ 1–7 days depending on certificate type · 🔗 egov.lk

${VERIFY}`,
  },
]

/**
 * Match a user query to a canned answer by keyword.
 * Order matters: more specific phrases are listed first within each entry.
 */
export function getFallbackAnswer(query: string | undefined | null): string | null {
  if (!query) return null
  const q = query.toLowerCase()
  for (const entry of FALLBACK_ANSWERS) {
    if (entry.keywords.some((k) => q.includes(k))) return entry.content
  }
  return null
}

/** Generic offline message when no specific match is found. */
export const GENERIC_FALLBACK = `I'm having trouble reaching the live AI right now, but I can still point you in the right direction.

For most Sri Lankan government services you'll generally need your **NIC (original)**, the relevant **application form**, and any **supporting documents** — submitted at your **nearest Divisional Secretariat** or the responsible department.

Try one of the quick questions below (NIC, passport, driving licence, birth certificate, police clearance), or call **GIC 1919** for guidance.

*GovNav LK is not an official government site — always verify at the office before travelling.*`
