import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import Frame63 from "../../imports/Frame13575";

// Animation variants for scroll reveals
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Enhanced wrapper component that adds interactivity
export function InteractiveLanding() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isCarouselPlaying, setIsCarouselPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const missionInView = useInView(missionRef, { once: true, amount: 0.2 });
  const productInView = useInView(productRef, { once: true, amount: 0.2 });

  // Auto-scroll carousel
  useEffect(() => {
    if (!carouselRef.current || !isCarouselPlaying) return;

    const carousel = carouselRef.current;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      if (carousel) {
        scrollPosition += scrollSpeed;
        if (scrollPosition >= carousel.scrollWidth / 2) {
          scrollPosition = 0;
        }
        carousel.scrollLeft = scrollPosition;
      }
    };

    const intervalId = setInterval(scroll, 20);

    return () => clearInterval(intervalId);
  }, [isCarouselPlaying]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <div className="relative w-full">
      {/* Hero Section with Parallax */}
      <motion.div
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="relative"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 right-20 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-2xl"
            animate={{
              y: [0, 30, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>

      {/* Country Carousel with Pause on Hover */}
      <div
        ref={carouselRef}
        className="relative overflow-hidden"
        onMouseEnter={() => setIsCarouselPlaying(false)}
        onMouseLeave={() => setIsCarouselPlaying(true)}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {/* Carousel will be rendered by Frame63 */}
        </motion.div>
      </div>

      {/* Mission Section with Stagger Animation */}
      <motion.div
        ref={missionRef}
        initial="hidden"
        animate={missionInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="relative"
      >
        <motion.div variants={fadeInUp}>
          {/* Mission cards will be rendered by Frame63 */}
        </motion.div>
      </motion.div>

      {/* Product Section with Scale Animation */}
      <motion.div
        ref={productRef}
        initial="hidden"
        animate={productInView ? "visible" : "hidden"}
        variants={scaleIn}
        className="relative"
      >
        {/* Product showcase will be rendered by Frame63 */}
      </motion.div>

      {/* Enhanced Newsletter Form */}
      <div className="relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {/* Newsletter form will be enhanced via CSS */}
        </motion.div>
      </div>

      {/* The actual Figma component */}
      <div className="interactive-landing">
        <Frame63 />
      </div>

      {/* Custom styles for interactivity */}
      <style>{`
        .interactive-landing button,
        .interactive-landing [role="button"] {
          transition: all 0.3s ease;
        }

        .interactive-landing button:hover,
        .interactive-landing [role="button"]:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
        }

        .interactive-landing button:active,
        .interactive-landing [role="button"]:active {
          transform: translateY(0);
        }

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

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .interactive-landing {
            font-size: 14px;
          }
        }

        /* Card hover effects */
        .interactive-landing [data-name="parent-fill"],
        .interactive-landing [data-name="country-tag"] {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .interactive-landing [data-name="parent-fill"]:hover,
        .interactive-landing [data-name="country-tag"]:hover {
          transform: translateY(-5px) scale(1.05);
        }

        /* Image hover effects */
        .interactive-landing img {
          transition: transform 0.3s ease;
        }

        .interactive-landing img:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
}
