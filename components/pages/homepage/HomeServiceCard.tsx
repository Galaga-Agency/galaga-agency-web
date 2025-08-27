"use client";

import { IconType } from "react-icons";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { getLocalizedRoute } from "@/utils/navigation";

interface HomeServiceCardProps {
  icon: IconType;
  title: string; // translation key
  description: string; // translation key
  theme: "teal" | "azul-profundo" | "mandarina" | "violeta";
  slug: string; // translation key for the slug path segment
  hasRedirection?: boolean;
  className?: string;
  index?: number;
}

const themeColors = {
  teal: {
    primary: "#4cbcc5",
    glow: "76, 188, 197",
  },
  "azul-profundo": {
    primary: "#121c30",
    glow: "18, 28, 48",
  },
  mandarina: {
    primary: "#ee6f45",
    glow: "238, 111, 69",
  },
  violeta: {
    primary: "#4e3a73",
    glow: "78, 58, 115",
  },
} as const;

export default function HomeServiceCard({
  icon: Icon,
  title,
  description,
  theme,
  slug,
  hasRedirection = true,
  className = "",
  index = 0,
}: HomeServiceCardProps) {
  const { t, language } = useTranslation();
  const colors = themeColors[theme];

  const cardHeight = "h-[380px]";
  const iconSize = 32;

  const translatedSlug = t(slug);
  const servicesRoute = getLocalizedRoute("services", language);
  const serviceUrl = `${servicesRoute}/${translatedSlug}`;

  return (
    <div
      data-3d-card
      className={`group relative ${cardHeight} cursor-pointer ${className}`}
    >
      {/* TILTING WRAPPER (GSAP controls this) */}
      <div
        data-3d-tilt
        className="relative w-full h-full rounded-3xl"
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      >
        {/* OUTER HOLOGRAPHIC GLOW */}
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

        {/* CARD */}
        <div
          className="relative w-full h-full rounded-3xl overflow-hidden backdrop-blur-xl border"
          style={{
            background: `
              linear-gradient(135deg, 
                rgba(255, 255, 255, 0.10) 0%,
                rgba(255, 255, 255, 0.05) 50%,
                rgba(${colors.glow}, 0.10) 100%
              )
            `,
            borderColor: "rgba(255, 255, 255, 0.12)",
            boxShadow: `
              inset 0 1px 0 rgba(255, 255, 255, 0.2),
              0 20px 40px rgba(0, 0, 0, 0.12)
            `,
            transformStyle: "preserve-3d",
          }}
        >
          {/* BG PATTERN */}
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

          {/* SCAN LINE */}
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

          {/* CONTENT */}
          <div
            className="relative z-10 h-full p-8 flex flex-col"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* ICON BUBBLE (spins as a whole on hover via GSAP util) */}
            <div className="pb-6 flex justify-center">
              <div
                data-3d-icon
                className="relative w-20 h-20 rounded-full flex items-center justify-center border"
                style={{
                  background: `
                    linear-gradient(135deg, 
                      rgba(${colors.glow}, 0.40) 0%, 
                      rgba(${colors.glow}, 0.08) 100%
                    )
                  `,
                  borderColor: `rgba(${colors.glow}, 0.30)`,
                  boxShadow: `
                    inset 0 0 20px rgba(${colors.glow}, 0.10),
                    0 0 40px rgba(${colors.glow}, 0.20)
                  `,
                  willChange: "transform",
                  transformStyle: "preserve-3d",
                }}
              >
                <Icon
                  size={iconSize}
                  style={{
                    color: colors.primary,
                    filter: `drop-shadow(0 0 20px #fff)`,
                  }}
                  className="relative z-10"
                />
                <div
                  className="absolute inset-0 rounded-2xl opacity-50"
                  style={{
                    background: `radial-gradient(circle, rgba(${colors.glow}, 0.3) 0%, transparent 70%)`,
                    filter: "blur(10px)",
                  }}
                />
              </div>
            </div>

            {/* TITLE */}
            <h3
              data-3d-title
              className="text-2xl font-black text-center mb-4 leading-tight"
              style={{
                color: "rgba(255, 255, 255, 0.92)",
                textShadow: `0 0 20px rgba(${colors.glow}, 0.35)`,
                willChange: "transform",
              }}
            >
              {t(title)}
            </h3>

            {/* DESCRIPTION */}
            <p
              data-3d-desc
              className="text-center text-base leading-relaxed flex-1 flex items-center"
              style={{
                color: "rgba(255, 255, 255, 0.75)",
                willChange: "transform",
              }}
            >
              {t(description)}
            </p>

            {/* CTA (optional) */}
            {hasRedirection && (
              <div className="mt-6 flex justify-center">
                <Link
                  href={serviceUrl}
                  aria-label={t(title)}
                  className="relative inline-flex items-center justify-center"
                >
                  <span
                    className="absolute inset-0 rounded-full blur-lg opacity-50"
                    style={{ background: `rgba(${colors.glow}, 0.5)` }}
                  />
                  <span className="relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-white">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    {t("homepage-cta.knowMore")}
                  </span>
                </Link>
              </div>
            )}
          </div>

          {/* DATA STREAM */}
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
