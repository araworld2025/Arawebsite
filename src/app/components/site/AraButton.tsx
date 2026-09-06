import * as React from "react";
import { ArrowRight } from "lucide-react";

/**
 * The single call-to-action button used across the site.
 *
 * There is one button style and one interaction — the ONLY thing that varies
 * is the colour. Add a new entry here to introduce another colour.
 */
export const ARA_BUTTON_COLORS = {
  teal: { bg: "#00a193", shadow: "#006057" },
  blue: { bg: "#0abded", shadow: "#0787ab" },
} as const;

export type AraButtonColor = keyof typeof ARA_BUTTON_COLORS;

type AraButtonProps = React.ComponentProps<"button"> & {
  /** Colour styling — the only supported variant. */
  color?: AraButtonColor;
  /** Show the trailing arrow icon. */
  showIcon?: boolean;
};

export function AraButton({
  children,
  color = "teal",
  showIcon = true,
  className = "",
  ...props
}: AraButtonProps) {
  const { bg, shadow } = ARA_BUTTON_COLORS[color];

  return (
    <button
      type="button"
      className={`relative rounded-[11px] shrink-0 cursor-pointer ${className}`}
      style={{ backgroundColor: bg, boxShadow: `0px 2.5px 0px 0px ${shadow}` }}
      {...props}
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center px-[43px] py-[23px] relative size-full">
          <span className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] not-italic relative shrink-0 text-[length:var(--ara-text-lead)] text-center text-white whitespace-nowrap">
            {children}
          </span>
          {showIcon && (
            <ArrowRight className="size-[24px] shrink-0 text-white" strokeWidth={2.75} aria-hidden />
          )}
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_4px_0px_0px_rgba(255,255,255,0.25)]" />
    </button>
  );
}
