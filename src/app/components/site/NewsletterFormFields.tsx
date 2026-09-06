import * as React from "react";

/**
 * The Ara "subscribe" form style, shared by the homepage newsletter form and
 * the product interest dialog so both stay visually in sync.
 *
 * A field is an edge-to-edge row with a dashed hairline divider and centred
 * DM Sans text; the submit button is a full-width row with `::` grip marks
 * either side of a centred label.
 */

const fieldClass =
  "w-full bg-transparent px-[36px] py-[24px] text-center font-['DM_Sans:Regular',sans-serif] text-[length:var(--ara-text-body-large)] font-normal leading-none text-[#554739] outline-none [font-variation-settings:'opsz'_14] placeholder:text-[#554739] placeholder:opacity-40 disabled:cursor-not-allowed disabled:opacity-60";

/** Row wrapper that draws the shared dashed top/bottom divider. */
function FieldRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full bg-white">
      {children}
      <div aria-hidden className="pointer-events-none absolute inset-[-1px_0] border-y border-dashed border-[#dfdac9]" />
    </div>
  );
}

export function NewsletterField({ className = "", ...props }: React.ComponentProps<"input">) {
  return (
    <FieldRow>
      <input {...props} className={`${fieldClass} ${className}`} />
    </FieldRow>
  );
}

export function NewsletterSelectField({ children, className = "", ...props }: React.ComponentProps<"select">) {
  return (
    <FieldRow>
      <select {...props} className={`${fieldClass} appearance-none ${className}`}>
        {children}
      </select>
    </FieldRow>
  );
}

type NewsletterSubmitButtonProps = React.ComponentProps<"button"> & {
  /** Centre-label tone — brown by default, teal for a success/confirmed state. */
  tone?: "default" | "success";
};

export function NewsletterSubmitButton({ children, tone = "default", className = "", ...props }: NewsletterSubmitButtonProps) {
  const labelColor = tone === "success" ? "text-[#00a193]" : "text-[#7f694f]";
  const grip = "shrink-0 font-['DM_Sans:Medium',sans-serif] font-medium tracking-[1.62px] text-[#dfdac9] [font-variation-settings:'opsz'_14]";
  return (
    <button
      {...props}
      className={`relative w-full cursor-pointer bg-white transition-colors hover:bg-[#fdfaf5] disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
    >
      <div className="flex w-full items-center justify-between whitespace-nowrap px-[24px] py-[30px] text-center text-[length:var(--ara-text-body-large)] leading-none [word-break:break-word]">
        <span aria-hidden className={grip}>::</span>
        <span className={`shrink-0 font-['DM_Sans:SemiBold',sans-serif] font-semibold tracking-[0.36px] transition-colors [font-variation-settings:'opsz'_14] ${labelColor}`}>{children}</span>
        <span aria-hidden className={grip}>::</span>
      </div>
    </button>
  );
}
