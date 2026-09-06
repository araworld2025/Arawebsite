import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

const ProgressContext = createContext(0);

type ScrollRevealGroupProps = {
  children: ReactNode;
  className?: string;
  /**
   * Where reveal starts/finishes as the group travels up the viewport,
   * expressed as a fraction of the viewport height measured from the top.
   * The group's top crossing `start` begins the reveal; crossing `end` completes it.
   */
  start?: number;
  end?: number;
};

/**
 * Provides a 0..1 scroll progress to descendant <ScrollRevealItem>s based on the
 * group's position in the viewport. Progress is tied directly to scroll offset, so
 * scrolling back down dims the items out again (fully reversible).
 */
export function ScrollRevealGroup({ children, className, start = 0.85, end = 0.4 }: ScrollRevealGroupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const startPx = vh * start;
      const endPx = vh * end;
      const p = (startPx - rect.top) / (startPx - endPx);
      setProgress(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [start, end]);

  return (
    <ProgressContext.Provider value={progress}>
      <div ref={ref} className={className}>
        {children}
      </div>
    </ProgressContext.Provider>
  );
}

type ScrollRevealItemProps = {
  index: number;
  count: number;
  children: ReactNode;
  /** Portion of each item's slice used to fade in; smaller = snappier per-item reveal. */
  overlap?: number;
};

/**
 * Reveals its children one-by-one as the group's scroll progress advances.
 * Item N owns the progress slice [N/count, (N+1)/count]; opacity/translate map
 * linearly across that slice, so items appear in order and dim in reverse.
 */
export function ScrollRevealItem({ index, count, children, overlap = 1 }: ScrollRevealItemProps) {
  const progress = useContext(ProgressContext);
  const slice = 1 / count;
  const localStart = index * slice;
  const span = slice * overlap;
  const t = Math.min(1, Math.max(0, (progress - localStart) / span));

  return (
    <div
      className="w-full"
      style={{
        opacity: t,
        transform: `translateY(${(1 - t) * 16}px)`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
