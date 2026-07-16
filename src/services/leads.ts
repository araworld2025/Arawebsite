import { featuredProduct, featuredProductStage } from "@/config/featuredProduct";

export const desiredLanguages = ["Yoruba", "Igbo", "Hausa", "Akan / Twi", "Swahili", "Amharic", "Somali", "Zulu", "Xhosa", "Other"] as const;
export const childAgeRanges = ["0–2", "3–5", "6–8", "9–12", "13+"] as const;

const isoCodes = "AD AE AF AG AI AL AM AO AR AS AT AU AW AX AZ BA BB BD BE BF BG BH BI BJ BL BM BN BO BQ BR BS BT BW BY BZ CA CC CD CF CG CH CI CK CL CM CN CO CR CU CV CW CX CY CZ DE DJ DK DM DO DZ EC EE EG EH ER ES ET FI FJ FK FM FO FR GA GB GD GE GF GG GH GI GL GM GN GP GQ GR GS GT GU GW GY HK HM HN HR HT HU ID IE IL IM IN IO IQ IR IS IT JE JM JO JP KE KG KH KI KM KN KP KR KW KY KZ LA LB LC LI LK LR LS LT LU LV LY MA MC MD ME MF MG MH MK ML MM MN MO MP MQ MR MS MT MU MV MW MX MY MZ NA NC NE NF NG NI NL NO NP NR NU NZ OM PA PE PF PG PH PK PL PM PN PR PS PT PW PY QA RE RO RS RU RW SA SB SC SD SE SG SH SI SJ SK SL SM SN SO SR SS ST SV SX SY SZ TC TD TF TG TH TJ TK TL TM TN TO TR TT TV TW TZ UA UG UM US UY UZ VA VC VE VG VI VN VU WF WS YE YT ZA ZM ZW".split(" ");
const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
export const countries = isoCodes
  .map((code) => ({ code, name: regionNames.of(code) ?? code }))
  .sort((a, b) => a.name.localeCompare(b.name));

export type LeadPayload = {
  email: string;
  source: "product-interest" | "newsletter-footer";
  residenceCountry?: string;
  desiredLanguage?: string;
  otherLanguage?: string;
  childAgeRange?: string;
  newsletterConsent: boolean;
  website?: string;
};

export async function submitLead(payload: LeadPayload) {
  const response = await fetch("/api/leads.php", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      ...payload,
      email: payload.email.trim().toLowerCase(),
      productId: payload.source === "product-interest" ? featuredProduct.id : null,
      intent: payload.source === "product-interest" ? featuredProductStage.intent : "newsletter",
    }),
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.message || "We could not save your details. Please try again.");
  return body;
}
