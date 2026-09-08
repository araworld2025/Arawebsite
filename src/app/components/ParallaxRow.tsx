import { useEffect, useRef, type ReactNode } from "react";

/**
 * ParallaxRow — scroll-driven staggered rise for a row (or stack) of cards.
 *
 * Each child starts pushed down and translates up as the row scrolls through
 * the viewport. The rise is staggered left-to-right: the first child finishes
 * rising earliest, and every child has settled into its final position by the
 * time the row's centre reaches the middle of the viewport. Because the motion
 * is bound directly to scroll position, it tracks the scroll like a parallax
 * rather than firing once on entry.
 *
 * `prefers-reduced-motion` users get the static, final layout.
 */

// How far below its resting spot each child begins, in pixels.
const MAX_OFFSET = 240;

// Scroll progress (0 = row centre at viewport bottom, 1 = at viewport middle)
// at which each child has fully arrived. Earlier index → arrives sooner, so the
// left-most card leads and the last one lands exactly at the halfway point.
// Wider gaps between values = looser stagger between cards.
const FINISH_POINTS = [0.28, 0.52, 0.76, 1];

export function ParallaxRow({
  children,
  className,
  itemClassName,
}: {
  children: ReactNode[];
  className?: string;
  itemClassName?: string;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const scroller = rowRef.current?.closest<HTMLElement>(".ara-page-scroll") ?? null;
    let raf = 0;

    const update = () => {
      raf = 0;
      const row = rowRef.current;
      if (!row) return;

      const rect = row.getBoundingClientRect();
      const vh = window.innerHeight;
      const rowCentre = rect.top + rect.height / 2;

      // t: 0 when the row centre sits at the viewport bottom, 1 at the middle.
      const t = Math.max(0, Math.min(1, (vh - rowCentre) / (vh / 2)));

      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const finish = FINISH_POINTS[Math.min(i, FINISH_POINTS.length - 1)];
        const p = Math.max(0, Math.min(1, t / finish));
        el.style.transform = `translateY(${((1 - p) * MAX_OFFSET).toFixed(2)}px)`;
        el.style.opacity = (0.25 + 0.75 * p).toFixed(3);
      });
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
    <div ref={rowRef} className={className} data-noreveal>
      {children.map((child, i) => (
        <div
          key={i}
          ref={(el) => {
            itemRefs.current[i] = el;
          }}
          className={itemClassName}
          style={{ willChange: "transform, opacity" }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
