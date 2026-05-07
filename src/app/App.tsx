import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { EditableFrame63 } from "./components/EditableFrame63";
import { ResponsiveWrapper } from "./components/ResponsiveWrapper";
import { ScrollAnimations } from "./components/ScrollAnimations";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="size-full bg-white overflow-x-hidden">
      {/* Scroll Progress Bar and Animations */}
      <ScrollAnimations />

      {/* Animated Background Elements */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 bg-yellow-200 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-15"
          animate={{
            scale: [1, 1.1, 1],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Main Content Wrapper with Scroll Animations and Responsiveness */}
      <div className="relative z-10 w-full max-w-full">
        <ResponsiveWrapper>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <EditableFrame63 />
          </motion.div>
        </ResponsiveWrapper>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 z-50 bg-[#00a193] text-white p-4 rounded-full shadow-lg hover:bg-[#008b7f] transition-colors"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isScrolled ? 1 : 0,
          scale: isScrolled ? 1 : 0,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>

      {/* Global Styles for Interactivity */}
      <style>{`
        /* Smooth scroll */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #00a193;
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #008b7f;
        }

        /* Button hover effects */
        button,
        [role="button"] {
          transition: all 0.3s ease;
        }

        button:hover:not(:disabled),
        [role="button"]:hover {
          transform: translateY(-2px);
        }

        button:active:not(:disabled),
        [role="button"]:active {
          transform: translateY(0);
        }

        /* Image hover effects */
        img {
          transition: transform 0.3s ease;
        }

        /* Accessibility - Focus states */
        button:focus-visible,
        a:focus-visible,
        input:focus-visible {
          outline: 2px solid #00a193;
          outline-offset: 2px;
        }

        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}