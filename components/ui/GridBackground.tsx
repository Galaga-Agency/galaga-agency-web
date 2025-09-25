"use client";

interface GridBackgroundProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function GridBackground({
  className = "",
  style = {},
}: GridBackgroundProps) {
  return (
    <div
      data-animate="hero-grid"
      className={`absolute inset-0 pointer-events-none opacity-0 ${className} -z-10`}
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        ...style,
      }}
    />
  );
}
