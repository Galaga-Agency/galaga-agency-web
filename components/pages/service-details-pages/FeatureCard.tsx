"use client";

import { IconType } from "react-icons";
import SecondaryButton from "@/components/ui/SecondaryButton";
import { getLocalizedRoute } from "@/utils/navigation";
import { useTranslation } from "@/hooks/useTranslation";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
  image: string;
  theme: "teal" | "azul-profundo" | "mandarina" | "violeta";
  className?: string;
  isCTA?: boolean;
  ctaButtonText?: string;
  index?: number;
}

const themeColors = {
  teal: {
    primary: "#4cbcc5",
    secondary: "#176161",
    glow: "76, 188, 197",
    accent: "#c3e5ef",
  },
  "azul-profundo": {
    primary: "#121c30",
    secondary: "#000000",
    glow: "18, 28, 48",
    accent: "#4cbcc5",
  },
  mandarina: {
    primary: "#ee6f45",
    secondary: "#b03c18",
    glow: "238, 111, 69",
    accent: "#f7b69f",
  },
  violeta: {
    primary: "#4e3a73",
    secondary: "#121c30",
    glow: "78, 58, 115",
    accent: "#c3e5ef",
  },
};

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  image,
  theme,
  className = "",
  isCTA = false,
  ctaButtonText = "Solicitar demo",
  index = 0,
}: FeatureCardProps) {
  const { language } = useTranslation();
  const colors = themeColors[theme];

  // unified sizing
  const cardHeight = "h-[380px]";
  const iconSize = 32;

  return (
    <div
      data-3d-card
      className={`group relative ${cardHeight} cursor-pointer ${className}`}
    >
      {/* Rotating/tilting container (GSAP controls rotate/translateZ here) */}
      <div
        data-3d-tilt
        className="relative w-full h-full rounded-3xl"
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      >
        {/* Holographic glow effect */}
        <div
          data-3d-glow
          className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl pointer-events-none"
          style={{
            background: `
              radial-gradient(circle at 50% 50%,
                rgba(${colors.glow}, 0.6) 0%,
                rgba(${colors.glow}, 0.2) 40%,
                transparent 70%
              )
            `,
            animation: "pulse-glow 2s ease-in-out infinite alternate",
          }}
        />

        {/* Main card container (original visuals) */}
        <div
          className="relative w-full h-full rounded-3xl overflow-hidden backdrop-blur-xl border"
          style={{
            background: `
              linear-gradient(135deg, 
                rgba(255, 255, 255, 0.1) 0%,
                rgba(255, 255, 255, 0.05) 50%,
                rgba(${colors.glow}, 0.1) 100%
              )
            `,
            borderColor: "rgba(255, 255, 255, 0.1)",
            boxShadow: `
              inset 0 1px 0 rgba(255, 255, 255, 0.2),
              0 20px 40px rgba(0, 0, 0, 0.1)
            `,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Animated background pattern */}
          <div
            data-3d-bg
            className="absolute inset-0 opacity-30"
            style={{
              background: `
                radial-gradient(circle at 50% 50%, 
                  rgba(${colors.glow}, 0.15) 0%, 
                  transparent 50%
                ),
                linear-gradient(45deg, 
                  transparent 30%, 
                  rgba(${colors.glow}, 0.05) 50%, 
                  transparent 70%
                )
              `,
              willChange: "transform",
            }}
          />

          {/* Holographic scan line */}
          <div
            data-3d-scan
            className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
            style={{
              background: `linear-gradient(90deg, 
                transparent 0%, 
                rgba(${colors.glow}, 0.5) 50%, 
                transparent 100%
              )`,
              transform: "translateX(-100%)",
              animation: "scan-line 3s ease-in-out infinite",
              willChange: "transform",
            }}
          />

          {/* Content container */}
          <div
            className="relative z-10 h-full p-8 flex flex-col"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Icon bubble (spins as a whole on hover via GSAP) */}
            <div className="pb-6 flex justify-center">
              <div
                data-3d-icon
                className="relative w-20 h-20 rounded-full flex items-center justify-center border"
                style={{
                  background: `
                    linear-gradient(135deg, 
                      rgba(${colors.glow}, 0.4) 0%, 
                      rgba(${colors.glow}, 0.08) 100%
                    )
                  `,
                  borderColor: `rgba(${colors.glow}, 0.3)`,
                  boxShadow: `
                    inset 0 0 20px rgba(${colors.glow}, 0.1),
                    0 0 40px rgba(${colors.glow}, 0.2)
                  `,
                  willChange: "transform",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Icon */}
                <Icon
                  size={iconSize}
                  style={{
                    color: colors.primary,
                    filter: `drop-shadow(0 0 20px #fff)`,
                  }}
                  className="relative z-10"
                />

                {/* Icon background glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-50"
                  style={{
                    background: `radial-gradient(circle, rgba(${colors.glow}, 0.3) 0%, transparent 70%)`,
                    filter: "blur(10px)",
                  }}
                />
              </div>
            </div>

            {/* Title */}
            <h3
              data-3d-title
              className="text-2xl font-black text-center mb-4 leading-tight"
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                textShadow: `0 0 20px rgba(${colors.glow}, 0.3)`,
                willChange: "transform",
              }}
            >
              {title}
            </h3>

            {/* Description */}
            <p
              data-3d-desc
              className="text-center text-base leading-relaxed flex-1 flex items-center"
              style={{
                color: "rgba(255, 255, 255, 0.7)",
                willChange: "transform",
              }}
            >
              {description}
            </p>

            {/* CTA Button (unchanged) */}
            {isCTA && (
              <div className="mt-6 flex justify-center">
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-full blur-lg opacity-50"
                    style={{
                      background: `rgba(${colors.glow}, 0.5)`,
                    }}
                  />
                  <SecondaryButton
                    href={getLocalizedRoute("/contacto", language)}
                    bubbleTransition={true}
                    bubbleColor="var(--color-teal)"
                    transitionDuration={0.8}
                    borderColor="teal"
                    size="md"
                    className="relative z-10"
                  >
                    {ctaButtonText}
                  </SecondaryButton>
                </div>
              </div>
            )}
          </div>

          {/* Data stream effect */}
          <div className="absolute top-0 right-0 w-1 h-full overflow-hidden opacity-30">
            <div
              data-3d-data
              className="w-full h-8 opacity-80"
              style={{
                background: `linear-gradient(180deg, rgba(${colors.glow}, 0.8) 0%, transparent 100%)`,
                willChange: "transform",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
