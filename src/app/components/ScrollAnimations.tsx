import { useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

export function ScrollAnimations() {
  const { scrollYProgress } = useScroll();
  
  // Create smooth spring physics for scroll
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Add intersection observer for elements
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00a193] via-[#fd9e11] to-[#00a193] z-50 origin-left"
        style={{ scaleX: smoothProgress }}
      />

      {/* Add animation styles */}
      <style>{`
        [data-animate] {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        [data-animate].animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* Stagger delays for child elements */
        [data-animate-stagger] > * {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        [data-animate-stagger].animate-in > *:nth-child(1) {
          transition-delay: 0.1s;
        }

        [data-animate-stagger].animate-in > *:nth-child(2) {
          transition-delay: 0.2s;
        }

        [data-animate-stagger].animate-in > *:nth-child(3) {
          transition-delay: 0.3s;
        }

        [data-animate-stagger].animate-in > *:nth-child(4) {
          transition-delay: 0.4s;
        }

        [data-animate-stagger].animate-in > * {
          opacity: 1;
          transform: translateY(0);
        }

        /* Scale animation */
        [data-animate="scale"] {
          opacity: 0;
          transform: scale(0.9);
        }

        [data-animate="scale"].animate-in {
          opacity: 1;
          transform: scale(1);
        }

        /* Slide from left */
        [data-animate="slide-left"] {
          opacity: 0;
          transform: translateX(-50px);
        }

        [data-animate="slide-left"].animate-in {
          opacity: 1;
          transform: translateX(0);
        }

        /* Slide from right */
        [data-animate="slide-right"] {
          opacity: 0;
          transform: translateX(50px);
        }

        [data-animate="slide-right"].animate-in {
          opacity: 1;
          transform: translateX(0);
        }

        /* Fade in */
        [data-animate="fade"] {
          opacity: 0;
        }

        [data-animate="fade"].animate-in {
          opacity: 1;
        }

        /* Rotate animation */
        [data-animate="rotate"] {
          opacity: 0;
          transform: rotate(-5deg) scale(0.95);
        }

        [data-animate="rotate"].animate-in {
          opacity: 1;
          transform: rotate(0deg) scale(1);
        }
      `}</style>
    </>
  );
}

// Hook for parallax effect
export function useParallax() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  
  return { y, opacity };
}

// Scroll reveal component
interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: "default" | "scale" | "slide-left" | "slide-right" | "fade" | "rotate";
  delay?: number;
  className?: string;
}

export function ScrollReveal({ 
  children, 
  animation = "default",
  delay = 0,
  className = ""
}: ScrollRevealProps) {
  return (
    <div 
      data-animate={animation}
      className={className}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
