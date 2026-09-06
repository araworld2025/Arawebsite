import { FormEvent, useEffect, useState } from "react";
import { PRODUCT_CTA_EVENT, featuredProduct, featuredProductStage } from "@/config/featuredProduct";
import { childAgeRanges, countries, desiredLanguages, submitLead } from "@/services/leads";
import { NewsletterField, NewsletterSelectField, NewsletterSubmitButton } from "@/app/components/site/NewsletterFormFields";

export function ProductInterestDialog() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [language, setLanguage] = useState(featuredProduct.language);

  useEffect(() => {
    const show = () => { setOpen(true); setStatus("idle"); setMessage(""); };
    window.addEventListener(PRODUCT_CTA_EVENT, show);
    return () => window.removeEventListener(PRODUCT_CTA_EVENT, show);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");
    setMessage("");
    try {
      await submitLead({
        email: String(data.get("email") || ""),
        source: "product-interest",
        residenceCountry: String(data.get("residenceCountry") || ""),
        desiredLanguage: language,
        otherLanguage: String(data.get("otherLanguage") || ""),
        childAgeRange: String(data.get("childAgeRange") || ""),
        newsletterConsent: data.get("newsletterConsent") === "on",
        website: String(data.get("website") || ""),
      });
      setStatus("success");
      setMessage("Thanks — your interest has been recorded. We’ll email you when paid preorder opens.");
      form.reset();
      setLanguage(featuredProduct.language);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#07364a]/55 p-[16px]" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}>
      <div className="flex max-h-[92vh] w-full max-w-[680px] flex-col overflow-y-auto rounded-2xl bg-white pt-[48px] shadow-2xl" role="dialog" aria-modal="true" aria-labelledby="interest-title">
        <div className="mb-[16px] flex items-start justify-between gap-[16px] px-[24px]">
          <div className="min-w-0">
            <p className="mb-[12px] font-['Nunito:SemiBold',sans-serif] text-[length:var(--ara-text-small)] font-semibold uppercase leading-[1.5] tracking-[0.98px] text-[#00a193]">{featuredProduct.language} book</p>
            <h2 id="interest-title" className="font-['DM_Sans:Bold',sans-serif] text-[length:var(--ara-text-heading-medium)] font-bold leading-none tracking-[-2.16px] text-[#2d251d]">{featuredProductStage.cta}</h2>
            <p className="mt-[12px] font-['Nunito:Regular',sans-serif] text-[length:var(--ara-text-body)] leading-[1.5] text-[#554739]">{featuredProductStage.note}</p>
          </div>
          <button type="button" onClick={() => setOpen(false)} className="grid size-[48px] shrink-0 place-items-center rounded-full border border-[#dfdac9] font-['Inter:Regular',sans-serif] text-[length:var(--ara-text-heading-small)] leading-none" aria-label="Close">×</button>
        </div>
        {status === "success" ? <div className="mx-[24px] mb-[24px] rounded-xl bg-[#eaf8f5] p-[24px] font-['Nunito:Regular',sans-serif] text-[length:var(--ara-text-body)] leading-[1.5] text-[#006057]" role="status">{message}</div> : (
          <form onSubmit={handleSubmit}>
            <NewsletterField align="left" required name="email" type="email" autoComplete="email" aria-label="Email address" placeholder="Type your email address here" />
            <NewsletterSelectField align="left" required name="residenceCountry" defaultValue="" aria-label="Country of residence"><option value="" disabled>What&apos;s your Country of Residence</option>{countries.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}</NewsletterSelectField>
            <NewsletterSelectField align="left" required name="desiredLanguage" value={language} onChange={e => setLanguage(e.target.value)} aria-label="Language you want for your child">{desiredLanguages.map(item => <option key={item}>{item}</option>)}</NewsletterSelectField>
            {language === "Other" && <NewsletterField align="left" required name="otherLanguage" aria-label="Which language?" placeholder="Which language?" />}
            <NewsletterSelectField align="left" required name="childAgeRange" defaultValue="" aria-label="Child age range"><option value="" disabled>What&apos;s your Child age range</option>{childAgeRanges.map(item => <option key={item}>{item}</option>)}</NewsletterSelectField>
            <div className="flex flex-col gap-[8px] px-[24px] py-[16px]">
              <label className="flex items-start gap-[12px] font-['Nunito:Regular',sans-serif] text-[length:var(--ara-text-small)] leading-[1.5] text-[#554739]"><input name="newsletterConsent" type="checkbox" className="mt-[4px] size-[20px] accent-[#00a193]" /><span>Also send me Ara stories, resources and general updates. I can unsubscribe at any time.</span></label>
              <p className="font-['Nunito:Regular',sans-serif] text-[length:var(--ara-text-small)] leading-[1.5] text-[#7f694f]">By submitting, you agree to receive updates about this product. General Ara newsletters are sent only if you tick the optional box above.</p>
              {status === "error" && <p className="font-['Nunito:Regular',sans-serif] text-[length:var(--ara-text-small)] leading-[1.5] text-red-700" role="alert">{message}</p>}
            </div>
            <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <NewsletterSubmitButton type="submit" disabled={status === "submitting"}>{status === "submitting" ? "Saving…" : featuredProductStage.cta}</NewsletterSubmitButton>
          </form>
        )}
      </div>
    </div>
  );
}
