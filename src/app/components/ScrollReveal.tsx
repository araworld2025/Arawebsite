import { useEffect } from "react";

/**
 * SectionReveal — a runtime scroll-reveal engine.
 *
 * It gives every content section the same interaction as the hero intro, but
 * triggered progressively as each element scrolls into view:
 *
 *   - Headers   (DM Sans display/heading type) breeze in character-by-character.
 *   - Subtitles + bullets (Nunito body type)   rise in one visual line at a time.
 *   - Images                                    fade and lift in as they appear.
 *
 * The engine reads the rendered DOM rather than requiring every generated node
 * to be hand-wrapped: it classifies text by font family, splits it into the
 * span structure the stylesheet expects (`.ara-reveal-char` / `.ara-reveal-word`
 * / `.ara-reveal-image`), and reveals each element with its own
 * IntersectionObserver. `prefers-reduced-motion` users skip the whole thing.
 */

// Elements that manage their own motion, are interactive, or belong to the
// looping hero/marquee — none of these should be re-animated.
const EXCLUDE_SELECTOR = [
  ".ara-hero-shell",
  ".ara-hero-copy",
  ".ara-hero-headline",
  ".ara-hero-subcopy",
  ".ara-new-product-wordmark",
  '[data-name="section 01"]',
  '[data-name="country-tag"]',
  '[data-name="flag-swipe-section"]',
  "[data-noreveal]",
  "button",
  "a",
  "input",
  "textarea",
].join(", ");

const REVEAL_OBSERVER_OPTIONS: IntersectionObserverInit = {
  rootMargin: "0px 0px -12% 0px",
  threshold: 0.15,
};

type RevealType = "heading" | "text" | "image";

/** Wrap each character of a text node in an animatable span, preserving the
 *  surrounding element structure (e.g. accent-coloured `<span>`s). */
function splitChars(root: Node, counter: { value: number }) {
  const children = Array.from(root.childNodes);
  for (const node of children) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent ?? "";
      if (!text) continue;
      const fragment = document.createDocumentFragment();
      for (const token of text.split(/(\s+)/)) {
        if (token === "") continue;
        if (/^\s+$/.test(token)) {
          fragment.appendChild(document.createTextNode(" "));
          continue;
        }
        const word = document.createElement("span");
        word.className = "ara-reveal-word";
        for (const char of Array.from(token)) {
          const span = document.createElement("span");
          span.className = "ara-reveal-char";
          span.style.setProperty("--ara-reveal-char-index", String(counter.value++));
          span.textContent = char;
          word.appendChild(span);
        }
        fragment.appendChild(word);
      }
      root.replaceChild(fragment, node);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      splitChars(node, counter);
    }
  }
}

/** Wrap each word of a text node in an animatable span so paragraphs can be
 *  revealed one visual line at a time (line grouping happens at reveal). */
function splitWords(root: Node) {
  const children = Array.from(root.childNodes);
  for (const node of children) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent ?? "";
      if (!text) continue;
      const fragment = document.createDocumentFragment();
      for (const token of text.split(/(\s+)/)) {
        if (token === "") continue;
        if (/^\s+$/.test(token)) {
          fragment.appendChild(document.createTextNode(" "));
          continue;
        }
        const word = document.createElement("span");
        word.className = "ara-reveal-word";
        word.textContent = token;
        fragment.appendChild(word);
      }
      root.replaceChild(fragment, node);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      splitWords(node);
    }
  }
}

/** Group the already-split words by vertical offset and stamp each with its
 *  line index, so the stylesheet staggers real (post-wrap) lines. */
function assignLineIndices(el: HTMLElement) {
  const words = el.querySelectorAll<HTMLElement>(".ara-reveal-word");
  let lineIndex = -1;
  let lastTop: number | null = null;
  words.forEach((word) => {
    const top = word.offsetTop;
    if (lastTop === null || Math.abs(top - lastTop) > 1) {
      lineIndex += 1;
      lastTop = top;
    }
    word.style.setProperty("--ara-reveal-line-index", String(lineIndex));
  });
}

export function SectionReveal() {
  useEffect(() => {
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver((entries, obs) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        if (el.dataset.revealType === "text") assignLineIndices(el);
        el.classList.add("is-revealed");
        obs.unobserve(el);
      }
    }, REVEAL_OBSERVER_OPTIONS);

    const prepare = (el: HTMLElement, type: RevealType) => {
      if (el.dataset.revealReady) return;
      el.dataset.revealReady = "1";
      el.dataset.revealType = type;
      if (type === "heading") {
        el.classList.add("ara-reveal-headline");
        splitChars(el, { value: 0 });
      } else if (type === "text") {
        el.classList.add("ara-reveal-text");
        splitWords(el);
      } else {
        el.classList.add("ara-reveal-image");
      }
      observer.observe(el);
    };

    const scan = () => {
      // Text: headers (DM Sans) split by character, body copy (Nunito) by line.
      document.querySelectorAll<HTMLElement>("p").forEach((p) => {
        if (p.dataset.revealReady || p.closest(EXCLUDE_SELECTOR)) return;
        if (!p.textContent || !p.textContent.trim()) return;
        const cls = p.className;
        if (cls.includes("DM_Sans")) prepare(p, "heading");
        else if (cls.includes("Nunito")) prepare(p, "text");
      });

      // Images: reveal the sized wrapper (keeps object-fit/layout intact).
      document.querySelectorAll<HTMLElement>("img").forEach((img) => {
        if (img.closest(EXCLUDE_SELECTOR)) return;
        const target = (img.closest<HTMLElement>('[data-name^="image"]') ?? img.parentElement ?? img) as HTMLElement;
        if (target.dataset.revealReady) return;
        prepare(target, "image");
      });
    };

    scan();

    // Re-scan when the desktop/mobile frame swap makes new nodes visible.
    let resizeRaf = 0;
    const onResize = () => {
      cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(scan);
    };
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(resizeRaf);
      observer.disconnect();
    };
  }, []);

  return null;
}
