import { useEffect, useRef, useState, type CSSProperties } from "react";
import svgPaths from "@/imports/Frame13640/svg-4bw8vxn8mh";

type ParticleGlyphName =
  | "lime-ring"
  | "peach-line"
  | "cyan-line"
  | "green-dot"
  | "blue-line"
  | "coral-line"
  | "teal-arc";

type Particle = {
  delay: number;
  duration: number;
  glyph: ParticleGlyphName;
  rise: number;
  rotation: number;
  scale: number;
  side: -1 | 1;
  spread: number;
};

const GLYPH_METRICS: Record<ParticleGlyphName, { width: number; height: number; rotation: number }> = {
  "lime-ring": { width: 81.004, height: 81.004, rotation: 111.31 },
  "peach-line": { width: 52.138, height: 17.324, rotation: 175.15 },
  "cyan-line": { width: 52.138, height: 17.324, rotation: 145.37 },
  "green-dot": { width: 41.251, height: 41.251, rotation: 111.31 },
  "blue-line": { width: 28.295, height: 9.401, rotation: -14.85 },
  "coral-line": { width: 75.475, height: 25.078, rotation: 58.45 },
  "teal-arc": { width: 42.635, height: 31.66, rotation: -31.55 },
};

const PARTICLES: Particle[] = [
  { side: -1, glyph: "coral-line", scale: 1, duration: 10.8, delay: -1.1, rise: -86, spread: 0, rotation: -520 },
  { side: 1, glyph: "lime-ring", scale: 0.92, duration: 12.4, delay: -7.7, rise: -142, spread: 5, rotation: 410 },
  { side: -1, glyph: "green-dot", scale: 0.88, duration: 11.6, delay: -5.2, rise: 72, spread: 3, rotation: -260 },
  { side: 1, glyph: "cyan-line", scale: 0.78, duration: 9.8, delay: -3.4, rise: 108, spread: 7, rotation: 650 },
  { side: -1, glyph: "teal-arc", scale: 1.08, duration: 13.2, delay: -10.1, rise: -118, spread: 8, rotation: -390 },
  { side: 1, glyph: "peach-line", scale: 1.04, duration: 11.1, delay: -8.9, rise: 54, spread: 2, rotation: 540 },
  { side: -1, glyph: "blue-line", scale: 1.14, duration: 10.2, delay: -6.6, rise: 126, spread: 6, rotation: -720 },
  { side: 1, glyph: "green-dot", scale: 0.74, duration: 12.8, delay: -2.2, rise: -94, spread: 9, rotation: 290 },
  { side: -1, glyph: "cyan-line", scale: 1.12, duration: 9.4, delay: -8.1, rise: 36, spread: 10, rotation: -610 },
  { side: 1, glyph: "coral-line", scale: 0.76, duration: 13.6, delay: -11.8, rise: 142, spread: 4, rotation: 470 },
  { side: -1, glyph: "blue-line", scale: 0.84, duration: 11.9, delay: -4.5, rise: -154, spread: 1, rotation: -320 },
  { side: 1, glyph: "lime-ring", scale: 0.7, duration: 10.6, delay: -6.1, rise: -48, spread: 12, rotation: 760 },
  { side: -1, glyph: "peach-line", scale: 0.86, duration: 14.1, delay: -12.7, rise: 96, spread: 11, rotation: -440 },
  { side: 1, glyph: "teal-arc", scale: 0.82, duration: 9.6, delay: -1.8, rise: -128, spread: 6, rotation: 590 },
  { side: -1, glyph: "coral-line", scale: 1.14, duration: 12.2, delay: -9.4, rise: -62, spread: 4, rotation: -680 },
  { side: 1, glyph: "green-dot", scale: 1.06, duration: 11.3, delay: -5.7, rise: 118, spread: 10, rotation: 380 },
  { side: -1, glyph: "lime-ring", scale: 1.1, duration: 13.4, delay: -2.9, rise: 154, spread: 7, rotation: -560 },
  { side: 1, glyph: "blue-line", scale: 1.16, duration: 12.7, delay: -10.6, rise: -172, spread: 3, rotation: 430 },
];

type ParticleStyle = CSSProperties & Record<`--${string}`, string>;

function particleStyle(particle: Particle, index: number): ParticleStyle {
  const direction = particle.side;
  const arc = particle.rise;
  const jitter = (index % 4) * 7 - 10;
  const metrics = GLYPH_METRICS[particle.glyph];
  const rotationAt = (progress: number) => metrics.rotation + particle.rotation * progress;

  return {
    "--particle-delay": `${particle.delay}s`,
    "--particle-duration": `${particle.duration}s`,
    "--particle-height": `${metrics.height * particle.scale}px`,
    "--particle-width": `${metrics.width * particle.scale}px`,
    "--particle-x1": `${direction * (28 + particle.spread * 2)}px`,
    "--particle-x2": `${direction * (14 + particle.spread * 0.5)}vw`,
    "--particle-x3": `${direction * (33 + particle.spread * 0.7)}vw`,
    "--particle-x4": `${direction * (56 + particle.spread * 0.8)}vw`,
    "--particle-y1": `${jitter}px`,
    "--particle-y2": `${arc * 0.68}px`,
    "--particle-y3": `${arc * 0.42 + 38}px`,
    "--particle-y4": `${arc + 88}px`,
    "--particle-r0": `${metrics.rotation}deg`,
    "--particle-r1": `${rotationAt(0.08)}deg`,
    "--particle-r2": `${rotationAt(0.38)}deg`,
    "--particle-r3": `${rotationAt(0.72)}deg`,
    "--particle-r4": `${rotationAt(1)}deg`,
  };
}

function ParticleGlyph({ glyph }: { glyph: ParticleGlyphName }) {
  switch (glyph) {
    case "lime-ring":
      return (
        <svg fill="none" preserveAspectRatio="none" viewBox="0 0 81.0039 81.0039">
          <circle cx="40.502" cy="40.502" r="29.6486" stroke="#C8F526" strokeWidth="21.7068" />
        </svg>
      );
    case "peach-line":
      return (
        <svg fill="none" preserveAspectRatio="none" viewBox="0 0 52.1376 17.3235">
          <path d={svgPaths.p2e557480} stroke="#F4C58F" strokeWidth="14.9949" />
        </svg>
      );
    case "cyan-line":
      return (
        <svg fill="none" preserveAspectRatio="none" viewBox="0 0 52.1376 17.3235">
          <path d={svgPaths.p2e557480} stroke="#34D1FC" strokeWidth="14.9949" />
        </svg>
      );
    case "green-dot":
      return (
        <svg fill="none" preserveAspectRatio="none" viewBox="0 0 41.2505 41.2505">
          <circle cx="20.6252" cy="20.6252" fill="#64CB52" r="20.6252" />
        </svg>
      );
    case "blue-line":
      return (
        <svg fill="none" preserveAspectRatio="none" viewBox="0 0 28.2949 9.4014">
          <path d={svgPaths.pf6fac80} stroke="#0096C0" strokeWidth="8.13769" />
        </svg>
      );
    case "coral-line":
      return (
        <svg fill="none" preserveAspectRatio="none" viewBox="0 0 75.475 25.0777">
          <path d={svgPaths.p2c1e7080} stroke="#FC6F6D" strokeWidth="21.7068" />
        </svg>
      );
    case "teal-arc":
      return (
        <svg fill="none" preserveAspectRatio="none" viewBox="0 0 42.6354 31.6596">
          <path d={svgPaths.p797fac0} stroke="#1DE4CB" strokeWidth="16.426" />
        </svg>
      );
  }
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
          key={`${particle.glyph}-${index}`}
          className="ara-hero-particle"
          style={particleStyle(particle, index)}
        >
          <ParticleGlyph glyph={particle.glyph} />
        </span>
      ))}
    </div>
  );
}
