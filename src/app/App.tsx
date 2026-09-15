import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import DesktopFrame from "@/imports/Frame13640/index";
import MobileFrame from "@/imports/Frame13641/index";
import { ProductInterestDialog } from "@/app/components/ProductInterestDialog";
import { SectionReveal } from "@/app/components/ScrollReveal";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollContainerRef });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => setIsScrolled(scrollContainer.scrollTop > 50);
    handleScroll();
    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection observer for scroll-reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-in");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
    );
    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      data-name="app-scroll-container"
      className="ara-page-scroll size-full bg-white overflow-x-hidden overflow-y-auto"
    >
      {/* Invisible helper — runs the scroll-into-view reveal animations, renders no markup */}
      <SectionReveal />

      {/* Thin gradient bar pinned to the top that fills as you scroll */}
      <motion.div
        data-name="scroll-progress-bar"
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00a193] via-[#fd9e11] to-[#00a193] z-[100] origin-left"
        style={{ scaleX: smoothProgress }}
      />

      {/* Desktop layout — shown from md (768px) and up */}
      <div data-name="desktop-layout" className="hidden md:block relative z-10">
        <DesktopFrame />
      </div>

      {/* Mobile layout — shown below md (768px) */}
      <div data-name="mobile-layout" className="block md:hidden relative z-10">
        <MobileFrame />
      </div>

      {/* Preorder / product-interest popup dialog */}
      <ProductInterestDialog />

      {/* Round button, bottom-right, that scrolls back to the top (appears once scrolled) */}
      <motion.button
        data-name="scroll-to-top-button"
        className="fixed bottom-8 right-8 z-50 bg-[#00a193] text-white p-4 rounded-full shadow-lg hover:bg-[#008b7f] transition-colors"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0, scale: isScrolled ? 1 : 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => scrollContainerRef.current?.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>

      <style>{`
        html, body, #root { overflow: hidden; max-width: 100vw; }
        html { scroll-behavior: smooth; }

        /* Keep wheel, touch and keyboard scrolling while removing the visual rail. */
        .ara-page-scroll { scrollbar-width: none; }
        .ara-page-scroll::-webkit-scrollbar { display: none; height: 0; width: 0; }

        /* Gentle fade-in of the whole page on first load */
        .ara-page-scroll { animation: araPageFadeIn 0.8s ease-out both; }
        @keyframes araPageFadeIn { from { opacity: 0; } to { opacity: 1; } }

        /* Focus states */
        button:focus-visible, a:focus-visible, input:focus-visible {
          outline: 2px solid #00a193;
          outline-offset: 2px;
        }

        /* Newsletter / preorder fields draw their own single focus ring
           (see NewsletterFormFields.tsx), so suppress the generic outline here
           to avoid a double border. */
        .group\\/field input:focus,
        .group\\/field input:focus-visible,
        .group\\/field select:focus,
        .group\\/field select:focus-visible {
          outline: none;
        }

        /* Button hover lift */
        button, [role="button"] { transition: all 0.3s ease; }
        button:hover:not(:disabled), [role="button"]:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.12);
        }
        button:active:not(:disabled), [role="button"]:active { transform: translateY(0); }

        /* Country tags are flat and inert — no hover effect, marquee never pauses */

        /* Image hover zoom */
        img { transition: transform 0.3s ease; }

        /* Carousel auto-scroll via CSS animation — keeps running on hover */
        [data-name="flag-swipe-section"] {
          animation: flagScroll 60s linear infinite;
        }
        @keyframes flagScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Scroll reveal animations */
        [data-animate] {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        [data-animate].animate-in { opacity: 1; transform: translateY(0); }
        [data-animate="scale"] { opacity: 0; transform: scale(0.9); }
        [data-animate="scale"].animate-in { opacity: 1; transform: scale(1); }
        [data-animate="slide-left"] { opacity: 0; transform: translateX(-50px); }
        [data-animate="slide-left"].animate-in { opacity: 1; transform: translateX(0); }
        [data-animate="slide-right"] { opacity: 0; transform: translateX(50px); }
        [data-animate="slide-right"].animate-in { opacity: 1; transform: translateX(0); }
        [data-animate="fade"] { opacity: 0; }
        [data-animate="fade"].animate-in { opacity: 1; }

        /* Tablet responsive overrides for desktop frame */
        @media (min-width: 768px) and (max-width: 1023px) {
          .hidden.md\\:block [class*="w-[1680px]"],
          .hidden.md\\:block [class*="w-[1753px]"] { width: 100% !important; max-width: 100vw !important; }
        }

        /* Reduce motion */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}
