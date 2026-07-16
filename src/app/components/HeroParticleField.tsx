import { useEffect, useRef, useState, type CSSProperties } from "react";

type ParticleShape = "circle" | "ring" | "capsule" | "diamond";

type Particle = {
  color: string;
  delay: number;
  duration: number;
  rise: number;
  rotation: number;
  shape: ParticleShape;
  side: -1 | 1;
  size: number;
  spread: number;
};

const PARTICLES: Particle[] = [
  { side: -1, shape: "capsule", color: "#fc6f6d", size: 22, duration: 10.8, delay: -1.1, rise: -86, spread: 0, rotation: -520 },
  { side: 1, shape: "ring", color: "#c8f526", size: 28, duration: 12.4, delay: -7.7, rise: -142, spread: 5, rotation: 410 },
  { side: -1, shape: "circle", color: "#64cb52", size: 16, duration: 11.6, delay: -5.2, rise: 72, spread: 3, rotation: -260 },
  { side: 1, shape: "diamond", color: "#34d1fc", size: 15, duration: 9.8, delay: -3.4, rise: 108, spread: 7, rotation: 650 },
  { side: -1, shape: "ring", color: "#1de4cb", size: 19, duration: 13.2, delay: -10.1, rise: -118, spread: 8, rotation: -390 },
  { side: 1, shape: "capsule", color: "#f4c58f", size: 20, duration: 11.1, delay: -8.9, rise: 54, spread: 2, rotation: 540 },
  { side: -1, shape: "diamond", color: "#ffbb1d", size: 13, duration: 10.2, delay: -6.6, rise: 126, spread: 6, rotation: -720 },
  { side: 1, shape: "circle", color: "#0096c0", size: 11, duration: 12.8, delay: -2.2, rise: -94, spread: 9, rotation: 290 },
  { side: -1, shape: "capsule", color: "#34d1fc", size: 14, duration: 9.4, delay: -8.1, rise: 36, spread: 10, rotation: -610 },
  { side: 1, shape: "ring", color: "#fc6f6d", size: 18, duration: 13.6, delay: -11.8, rise: 142, spread: 4, rotation: 470 },
  { side: -1, shape: "circle", color: "#00a193", size: 9, duration: 11.9, delay: -4.5, rise: -154, spread: 1, rotation: -320 },
  { side: 1, shape: "diamond", color: "#dcfe58", size: 17, duration: 10.6, delay: -6.1, rise: -48, spread: 12, rotation: 760 },
  { side: -1, shape: "ring", color: "#fd9e11", size: 24, duration: 14.1, delay: -12.7, rise: 96, spread: 11, rotation: -440 },
  { side: 1, shape: "capsule", color: "#1de4cb", size: 12, duration: 9.6, delay: -1.8, rise: -128, spread: 6, rotation: 590 },
  { side: -1, shape: "diamond", color: "#ef7192", size: 19, duration: 12.2, delay: -9.4, rise: -62, spread: 4, rotation: -680 },
  { side: 1, shape: "circle", color: "#64cb52", size: 14, duration: 11.3, delay: -5.7, rise: 118, spread: 10, rotation: 380 },
  { side: -1, shape: "capsule", color: "#f4c58f", size: 18, duration: 13.4, delay: -2.9, rise: 154, spread: 7, rotation: -560 },
  { side: 1, shape: "ring", color: "#34d1fc", size: 21, duration: 12.7, delay: -10.6, rise: -172, spread: 3, rotation: 430 },
];

type ParticleStyle = CSSProperties & Record<`--${string}`, string>;

function particleStyle(particle: Particle, index: number): ParticleStyle {
  const direction = particle.side;
  const arc = particle.rise;
  const jitter = (index % 4) * 7 - 10;

  return {
    "--particle-color": particle.color,
    "--particle-delay": `${particle.delay}s`,
    "--particle-duration": `${particle.duration}s`,
    "--particle-size": `${particle.size}px`,
    "--particle-x1": `${direction * (28 + particle.spread * 2)}px`,
    "--particle-x2": `${direction * (14 + particle.spread * 0.5)}vw`,
    "--particle-x3": `${direction * (33 + particle.spread * 0.7)}vw`,
    "--particle-x4": `${direction * (56 + particle.spread * 0.8)}vw`,
    "--particle-y1": `${jitter}px`,
    "--particle-y2": `${arc * 0.68}px`,
    "--particle-y3": `${arc * 0.42 + 38}px`,
    "--particle-y4": `${arc + 88}px`,
    "--particle-r1": `${particle.rotation * 0.08}deg`,
    "--particle-r2": `${particle.rotation * 0.38}deg`,
    "--particle-r3": `${particle.rotation * 0.72}deg`,
    "--particle-r4": `${particle.rotation}deg`,
  };
}

export function HeroParticleField() {
  const fieldRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const field = fieldRef.current;
    if (!field) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting),
      { rootMargin: "120px 0px", threshold: 0.05 },
    );

    observer.observe(field);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={fieldRef}
      aria-hidden="true"
      className="ara-hero-particle-field"
      data-active={isActive ? "true" : "false"}
    >
      {PARTICLES.map((particle, index) => (
        <span
          key={`${particle.shape}-${index}`}
          className="ara-hero-particle"
          data-shape={particle.shape}
          style={particleStyle(particle, index)}
        />
      ))}
    </div>
  );
}
