import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import DesktopFrame from "@/imports/Frame13640/index";
import MobileFrame from "@/imports/Frame13641/index";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <div className="size-full bg-white overflow-x-hidden" style={{ overflowX: "hidden" }}>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00a193] via-[#fd9e11] to-[#00a193] z-[100] origin-left"
        style={{ scaleX: smoothProgress }}
      />

      {/* Animated background blobs */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 bg-yellow-200 rounded-full blur-3xl opacity-20"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-15"
          animate={{ scale: [1, 1.1, 1], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Desktop layout — md and up */}
      <div className="hidden md:block relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <DesktopFrame />
        </motion.div>
      </div>

      {/* Mobile layout — below md */}
      <div className="block md:hidden relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <MobileFrame />
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 z-50 bg-[#00a193] text-white p-4 rounded-full shadow-lg hover:bg-[#008b7f] transition-colors"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0, scale: isScrolled ? 1 : 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>

      <style>{`
        html, body { overflow-x: hidden; max-width: 100vw; }
        html { scroll-behavior: smooth; }

        /* Custom scrollbar */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: #00a193; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #008b7f; }

        /* Focus states */
        button:focus-visible, a:focus-visible, input:focus-visible {
          outline: 2px solid #00a193;
          outline-offset: 2px;
        }

        /* Button hover lift */
        button, [role="button"] { transition: all 0.3s ease; }
        button:hover:not(:disabled), [role="button"]:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.12);
        }
        button:active:not(:disabled), [role="button"]:active { transform: translateY(0); }

        /* Card hover lift */
        [data-name="country-tag"] {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        [data-name="country-tag"]:hover {
          transform: translateY(-4px) scale(1.04);
          box-shadow: 0 6px 16px rgba(0,0,0,0.1);
        }

        /* Image hover zoom */
        img { transition: transform 0.3s ease; }

        /* Carousel auto-scroll via CSS animation */
        [data-name="flag-swipe-section"] {
          animation: flagScroll 60s linear infinite;
        }
        [data-name="flag-swipe-section"]:hover {
          animation-play-state: paused;
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
          .hidden.md\\:block p[class*="text-[66px]"],
          .hidden.md\\:block p[class*="text-[58px]"] { font-size: 42px !important; }
          .hidden.md\\:block p[class*="text-[36px]"] { font-size: 28px !important; }
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
