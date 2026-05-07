import { useState, useEffect } from "react";
import { motion } from "motion/react";

interface ResponsiveWrapperProps {
  children: React.ReactNode;
}

export function ResponsiveWrapper({ children }: ResponsiveWrapperProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`responsive-container ${isMobile ? "mobile" : ""} ${
        isTablet ? "tablet" : ""
      }`}
    >
      {children}

      <style>{`
        /* Mobile Responsive Styles */
        @media (max-width: 767px) {
          .responsive-container {
            --scale-factor: 0.6;
          }

          /* Scale down large sections for mobile */
          .responsive-container > div > div {
            transform-origin: top center;
          }

          /* Adjust font sizes */
          .responsive-container p[class*="text-[66px]"],
          .responsive-container p[class*="text-[58px]"] {
            font-size: 32px !important;
            line-height: 1.2 !important;
          }

          .responsive-container p[class*="text-[36px]"] {
            font-size: 24px !important;
          }

          .responsive-container p[class*="text-[27px]"] {
            font-size: 20px !important;
          }

          .responsive-container p[class*="text-[22px]"] {
            font-size: 16px !important;
          }

          .responsive-container p[class*="text-[20px]"] {
            font-size: 14px !important;
          }

          /* Adjust padding and margins */
          .responsive-container [class*="px-[139px]"] {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }

          .responsive-container [class*="px-[122px]"] {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }

          .responsive-container [class*="py-[188px]"],
          .responsive-container [class*="py-[183px]"] {
            padding-top: 40px !important;
            padding-bottom: 40px !important;
          }

          /* Adjust gap spacing */
          .responsive-container [class*="gap-[148px]"] {
            gap: 30px !important;
            flex-direction: column !important;
          }

          .responsive-container [class*="gap-[80px]"] {
            gap: 40px !important;
          }

          .responsive-container [class*="gap-[64px]"] {
            gap: 30px !important;
          }

          /* Make flex containers responsive */
          .responsive-container [class*="w-[1520px]"],
          .responsive-container [class*="w-[1680px]"] {
            width: 100% !important;
            max-width: 100vw !important;
          }

          .responsive-container [class*="w-[884px]"],
          .responsive-container [class*="w-[756px]"],
          .responsive-container [class*="w-[611px]"],
          .responsive-container [class*="w-[500px]"] {
            width: 90% !important;
            max-width: 90vw !important;
          }

          /* Adjust image sizes */
          .responsive-container [class*="h-[572px]"] {
            height: auto !important;
            aspect-ratio: 1 !important;
          }

          .responsive-container [class*="h-[704px]"] {
            height: auto !important;
          }

          /* Hide decorative elements on mobile */
          .responsive-container [class*="blur-[38.5px]"] {
            display: none;
          }

          /* Carousel adjustments */
          .responsive-container [data-name="country-courosel"] {
            overflow-x: auto !important;
            -webkit-overflow-scrolling: touch;
          }

          .responsive-container [data-name="flag-swipe-section"] {
            width: auto !important;
          }
        }

        /* Tablet Responsive Styles */
        @media (min-width: 768px) and (max-width: 1023px) {
          .responsive-container p[class*="text-[66px]"],
          .responsive-container p[class*="text-[58px]"] {
            font-size: 42px !important;
          }

          .responsive-container p[class*="text-[36px]"] {
            font-size: 28px !important;
          }

          .responsive-container [class*="px-[139px]"],
          .responsive-container [class*="px-[122px]"] {
            padding-left: 40px !important;
            padding-right: 40px !important;
          }

          .responsive-container [class*="gap-[148px]"] {
            gap: 60px !important;
          }

          .responsive-container [class*="w-[1520px]"],
          .responsive-container [class*="w-[1680px]"] {
            width: 100% !important;
            max-width: 100vw !important;
          }
        }

        /* Desktop optimizations */
        @media (min-width: 1024px) {
          .responsive-container {
            width: 100%;
          }
        }

        /* Smooth transitions for responsive changes */
        .responsive-container * {
          transition-property: font-size, padding, margin, width, height;
          transition-duration: 0.3s;
          transition-timing-function: ease-in-out;
        }

        /* Prevent horizontal scroll */
        .responsive-container {
          overflow-x: hidden;
          width: 100%;
        }

        /* Better touch targets for mobile */
        @media (max-width: 767px) {
          .responsive-container button,
          .responsive-container [role="button"] {
            min-height: 44px;
            min-width: 44px;
          }
        }
      `}</style>
    </div>
  );
}