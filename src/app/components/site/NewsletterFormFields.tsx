import * as React from "react";
import { ChevronDown } from "lucide-react";

/**
 * The Ara "subscribe" form style, shared by the homepage newsletter form and
 * the product interest dialog so both stay visually in sync.
 *
 * A field is an edge-to-edge row with a dashed hairline divider and DM Sans
 * text; the submit button is a full-width row with `::` grip marks either side
 * of a centred label.
 *
 * Alignment variant:
 *  - "center" (default) — the newsletter form's single centred email field.
 *  - "left" — used by the preorder dialog; left-aligned, and selects show a
 *    dropdown chevron.
 *
 * Interaction: text rests at 80% with no fill; hovering washes the row with a
 * very light pale brown (#dfdac9 at 40%) while the text holds at 80%; clicking
 * in (focus) lifts the text to 100% and keeps the same pale wash. Focus reveals
 * a single rounded teal ring (see FieldRow) that reads clearly around the field
 * and is never cropped by the card's clipping edge.
 */

type FieldAlign = "center" | "left";

function fieldClass(align: FieldAlign) {
  return [
    "w-full py-[24px] font-['DM_Sans:Regular',sans-serif] text-[length:var(--ara-text-body-large)] font-normal leading-none text-[#554739] opacity-80 outline-none transition [font-variation-settings:'opsz'_14]",
    align === "left" ? "text-left" : "text-center",
    "placeholder:text-[#554739]",
    "hover:bg-[#dfdac9]/40 focus:bg-[#dfdac9]/40 focus:opacity-100",
    "focus:outline-none focus-visible:outline-none",
    "disabled:cursor-not-allowed disabled:opacity-60",
  ].join(" ");
}

/**
 * Row wrapper that draws the shared dashed top/bottom divider plus, on focus, a
 * single rounded teal ring that hugs the field with a ~2px margin. The dashed
 * divider fades out on focus so only ONE border is ever visible (no double
 * border). The ring sits just inside the row edges so it reads as wrapping the
 * field closely and is never cropped by the card's clipping edge.
 */
function FieldRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="group/field relative w-full bg-white">
      {children}
      <div aria-hidden className="pointer-events-none absolute inset-[-1px_0] border-y border-dashed border-[#dfdac9] transition-opacity group-focus-within/field:opacity-0" />
      <div aria-hidden className="pointer-events-none absolute inset-[2px] rounded-[10px] border-2 border-[#00a193] opacity-0 transition-opacity group-focus-within/field:opacity-100" />
    </div>
  );
}

export function NewsletterField({ align = "center", className = "", ...props }: React.ComponentProps<"input"> & { align?: FieldAlign }) {
  return (
    <FieldRow>
      <input {...props} className={`${fieldClass(align)} px-[36px] ${className}`} />
    </FieldRow>
  );
}

export function NewsletterSelectField({ align = "center", children, className = "", ...props }: React.ComponentProps<"select"> & { align?: FieldAlign }) {
  return (
    <FieldRow>
      <div className="group relative w-full">
        <select {...props} className={`${fieldClass(align)} appearance-none pl-[36px] pr-[52px] ${className}`}>
          {children}
        </select>
        <ChevronDown
          aria-hidden
          className="pointer-events-none absolute right-[24px] top-1/2 size-[20px] -translate-y-1/2 text-[#554739] opacity-80 transition group-focus-within:opacity-100"
        />
      </div>
    </FieldRow>
  );
}

type NewsletterSubmitButtonProps = React.ComponentProps<"button"> & {
  /** Centre-label tone — brown by default, teal for a success/confirmed state. */
  tone?: "default" | "success";
};

export function NewsletterSubmitButton({ children, tone = "default", className = "", ...props }: NewsletterSubmitButtonProps) {
  const labelColor = tone === "success" ? "text-[#00a193]" : "text-[#7f694f]";
  const grip = "shrink-0 font-['DM_Sans:Medium',sans-serif] font-medium tracking-[var(--ara-tracking-grip)] text-[#dfdac9] [font-variation-settings:'opsz'_14]";
  return (
    <button
      {...props}
      className={`relative w-full cursor-pointer bg-white transition-colors hover:bg-[#fdfaf5] disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
    >
      <div className="flex w-full items-center justify-between whitespace-nowrap px-[24px] py-[30px] text-center text-[length:var(--ara-text-body-large)] leading-none [word-break:break-word]">
        <span aria-hidden className={grip}>::</span>
        <span className={`shrink-0 font-['DM_Sans:SemiBold',sans-serif] font-semibold tracking-[var(--ara-tracking-label)] transition-colors [font-variation-settings:'opsz'_14] ${labelColor}`}>{children}</span>
        <span aria-hidden className={grip}>::</span>
      </div>
    </button>
  );
}
