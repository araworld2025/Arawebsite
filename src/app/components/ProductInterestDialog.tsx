import { FormEvent, useEffect, useState } from "react";
import { PRODUCT_CTA_EVENT, featuredProduct, featuredProductStage } from "@/config/featuredProduct";
import { childAgeRanges, countries, desiredLanguages, submitLead } from "@/services/leads";

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
    const data = new FormData(event.currentTarget);
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
      setMessage("Check your inbox to confirm your email. We’ll keep you updated about this book.");
      event.currentTarget.reset();
      setLanguage(featuredProduct.language);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#07364a]/55 p-[16px]" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}>
      <div className="max-h-[92vh] w-full max-w-[680px] overflow-y-auto rounded-2xl bg-[#fffdf8] p-[24px] shadow-2xl md:p-[48px]" role="dialog" aria-modal="true" aria-labelledby="interest-title">
        <div className="mb-[24px] flex items-start justify-between gap-[16px]">
          <div className="min-w-0"><p className="mb-[12px] font-['Nunito:SemiBold',sans-serif] text-[14px] font-semibold uppercase leading-[1.5] tracking-[0.98px] text-[#00a193]">{featuredProduct.language} book</p><h2 id="interest-title" className="font-['DM_Sans:Bold',sans-serif] text-[36px] font-bold leading-none tracking-[-2.16px] text-[#2d251d]">{featuredProductStage.cta}</h2></div>
          <button type="button" onClick={() => setOpen(false)} className="grid size-[48px] shrink-0 place-items-center rounded-full border border-[#dfdac9] font-['Inter:Regular',sans-serif] text-[24px] leading-none" aria-label="Close">×</button>
        </div>
        <p className="mb-[24px] font-['Nunito:Regular',sans-serif] text-[20.349px] leading-[1.5] text-[#554739]">{featuredProductStage.note}</p>
        {status === "success" ? <div className="rounded-xl bg-[#eaf8f5] p-[24px] font-['Nunito:Regular',sans-serif] text-[20.349px] leading-[1.5] text-[#006057]" role="status">{message}</div> : (
          <form className="grid gap-[24px]" onSubmit={handleSubmit}>
            <label className="grid gap-[12px] font-['Nunito:SemiBold',sans-serif] text-[16px] font-semibold leading-[1.5] text-[#2d251d]">Email address<input required name="email" type="email" autoComplete="email" className="rounded-xl border border-[#cfc6b5] bg-white px-[24px] py-[16px] font-['Nunito:Regular',sans-serif] font-normal leading-[1.5]" /></label>
            <label className="grid gap-[12px] font-['Nunito:SemiBold',sans-serif] text-[16px] font-semibold leading-[1.5] text-[#2d251d]">Country of residence<select required name="residenceCountry" defaultValue="" className="rounded-xl border border-[#cfc6b5] bg-white px-[24px] py-[16px] font-['Nunito:Regular',sans-serif] font-normal leading-[1.5]"><option value="" disabled>Select a country</option>{countries.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}</select></label>
            <label className="grid gap-[12px] font-['Nunito:SemiBold',sans-serif] text-[16px] font-semibold leading-[1.5] text-[#2d251d]">Language you want for your child<select required name="desiredLanguage" value={language} onChange={e => setLanguage(e.target.value)} className="rounded-xl border border-[#cfc6b5] bg-white px-[24px] py-[16px] font-['Nunito:Regular',sans-serif] font-normal leading-[1.5]">{desiredLanguages.map(item => <option key={item}>{item}</option>)}</select></label>
            {language === "Other" && <label className="grid gap-[12px] font-['Nunito:SemiBold',sans-serif] text-[16px] font-semibold leading-[1.5] text-[#2d251d]">Which language?<input required name="otherLanguage" className="rounded-xl border border-[#cfc6b5] bg-white px-[24px] py-[16px] font-['Nunito:Regular',sans-serif] font-normal leading-[1.5]" /></label>}
            <label className="grid gap-[12px] font-['Nunito:SemiBold',sans-serif] text-[16px] font-semibold leading-[1.5] text-[#2d251d]">Child age range<select required name="childAgeRange" defaultValue="" className="rounded-xl border border-[#cfc6b5] bg-white px-[24px] py-[16px] font-['Nunito:Regular',sans-serif] font-normal leading-[1.5]"><option value="" disabled>Select an age range</option>{childAgeRanges.map(item => <option key={item}>{item}</option>)}</select></label>
            <label className="flex items-start gap-[12px] font-['Nunito:Regular',sans-serif] text-[14px] leading-[1.5] text-[#554739]"><input name="newsletterConsent" type="checkbox" className="mt-[4px] size-[20px] accent-[#00a193]" /><span>Also send me Ara stories, resources and general updates. I can unsubscribe at any time.</span></label>
            <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            {status === "error" && <p className="font-['Nunito:Regular',sans-serif] text-[14px] leading-[1.5] text-red-700" role="alert">{message}</p>}
            <button disabled={status === "submitting"} className="rounded-[11px] bg-[#00a193] px-[43px] py-[23px] font-['Inter:Semi_Bold',sans-serif] text-[22.125px] font-semibold leading-[1.2] text-white shadow-[0_4px_0_#006057] disabled:opacity-60">{status === "submitting" ? "Saving…" : featuredProductStage.cta}</button>
            <p className="text-center font-['Nunito:Regular',sans-serif] text-[14px] leading-[1.5] text-[#7f694f]">By submitting, you agree to receive messages about this product. Double opt-in confirmation is required.</p>
          </form>
        )}
      </div>
    </div>
  );
}
