import type { CSSProperties } from "react";

type HeroHeadlineSegment = { text: string; className?: string };

interface HeroHeadlineProps {
  className?: string;
  style?: CSSProperties;
  /** Each inner array is one visual line; segments allow per-run styling (e.g. the accent period). */
  lines: HeroHeadlineSegment[][];
  /** Plain-text version announced to screen readers, since the visible text is split into spans. */
  ariaLabel: string;
}

/**
 * Renders the hero headline split into per-character spans so the intro can
 * breeze the copy in one letter at a time. Each character carries its running
 * index as a CSS variable; the stagger and easing live in the stylesheet
 * (`.ara-hero-headline-char`) so reduced-motion users simply see the full text.
 */
export function HeroHeadline({ className, style, lines, ariaLabel }: HeroHeadlineProps) {
  let charIndex = 0;

  return (
    <p className={className} style={style} aria-label={ariaLabel}>
      {lines.map((segments, lineIndex) => (
        <span key={lineIndex} aria-hidden className="ara-hero-headline-line">
          {segments.map((segment, segmentIndex) => (
            <span key={segmentIndex} className={segment.className}>
              {Array.from(segment.text).map((char, localIndex) => {
                const charStyle = {
                  "--ara-hero-char-index": String(charIndex++),
                } as CSSProperties;
                return (
                  <span key={localIndex} className="ara-hero-headline-char" style={charStyle}>
                    {char === " " ? " " : char}
                  </span>
                );
              })}
            </span>
          ))}
        </span>
      ))}
    </p>
  );
}
