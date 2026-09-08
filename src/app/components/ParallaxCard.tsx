import { useEffect, useRef, type ReactNode } from "react";

/**
 * ParallaxCard — scroll-driven parallax lift for a single card.
 *
 * The card starts pushed a little below its resting spot and rises as it
 * scrolls up through the viewport. The motion is bound directly to scroll
 * position (not fired once on entry) and uses an ease-in curve so it begins
 * gently, then speeds up — travelling slightly faster than the page scroll to
 * give that layered parallax feel. It settles at its natural position by the
 * time the card's centre reaches the middle of the viewport.
 *
 * `prefers-reduced-motion` users get the static, final layout.
 */

// How far below its resting spot the card begins, in pixels.
const START_OFFSET = 0;

// Extra lift applied once settled, so the card drifts up a touch faster than
// the scroll for the parallax offset. Higher = more pronounced depth.
const PARALLAX_LEAD = 60;

export function ParallaxCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    if (!el) return;

    const scroller = el.closest<HTMLElement>(".ara-page-scroll") ?? null;
    let raf = 0;

    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const centre = rect.top + rect.height / 2;

      // t: 0 when the card centre sits at the viewport bottom, 1 at the middle.
      const t = Math.max(0, Math.min(1, (vh - centre) / (vh / 2)));

      // Ease-in (t^2): starts slow, then speeds up as it rises.
      const eased = t * t;

      // Rises from START_OFFSET below its spot, then leads slightly past zero
      // so it outpaces the scroll for the parallax effect.
      const y = (1 - eased) * START_OFFSET - eased * PARALLAX_LEAD;
      el.style.transform = `translateY(${y.toFixed(2)}px)`;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    const target = scroller ?? window;
    target.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      target.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }} data-noreveal>
      {children}
    </div>
  );
}
