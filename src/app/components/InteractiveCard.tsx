import { motion } from "motion/react";
import { useState } from "react";

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
  tapScale?: number;
}

export function InteractiveCard({
  children,
  className = "",
  hoverScale = 1.05,
  tapScale = 0.98,
}: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`cursor-pointer ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: hoverScale, y: -5 }}
      whileTap={{ scale: tapScale }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {children}

      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-full blur-xl -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.2 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: "radial-gradient(circle, rgba(0,161,147,0.3) 0%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}

// Floating animation component
interface FloatingElementProps {
  children: React.ReactNode;
  duration?: number;
  distance?: number;
  delay?: number;
}

export function FloatingElement({
  children,
  duration = 3,
  distance = 10,
  delay = 0,
}: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [-distance, distance, -distance],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

// Pulse animation component
interface PulseElementProps {
  children: React.ReactNode;
  duration?: number;
  scale?: number;
}

export function PulseElement({
  children,
  duration = 2,
  scale = 1.1,
}: PulseElementProps) {
  return (
    <motion.div
      animate={{
        scale: [1, scale, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

// Rotate animation component
interface RotateElementProps {
  children: React.ReactNode;
  duration?: number;
  clockwise?: boolean;
}

export function RotateElement({
  children,
  duration = 20,
  clockwise = true,
}: RotateElementProps) {
  return (
    <motion.div
      animate={{
        rotate: clockwise ? 360 : -360,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {children}
    </motion.div>
  );
}

// Shimmer effect component
export function ShimmerEffect() {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      initial={{ x: "-100%" }}
      animate={{ x: "100%" }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatDelay: 3,
        ease: "easeInOut",
      }}
    >
      <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </motion.div>
  );
}

// Tilt on hover component
interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}

export function TiltCard({
  children,
  className = "",
  maxTilt = 10,
}: TiltCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -maxTilt;
    const rotateYValue = ((x - centerX) / centerX) * maxTilt;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
    >
      {children}
    </motion.div>
  );
}
