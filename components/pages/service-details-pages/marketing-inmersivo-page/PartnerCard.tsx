"use client";

import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

type ThemeKey = "teal" | "azul-profundo" | "mandarina" | "violeta" | "skyblue";

const themeColors: Record<ThemeKey, { primary: string; glow: string }> = {
  teal: { primary: "#176161", glow: "76, 188, 197" },
  "azul-profundo": { primary: "#121c30", glow: "18, 28, 48" },
  mandarina: { primary: "#b03c18", glow: "238, 111, 69" },
  violeta: { primary: "#4e3a73", glow: "78, 58, 115" },
  skyblue: { primary: "#0d4a6d", glow: "67, 175, 230" },
};

function resolveTheme(raw?: ThemeKey): ThemeKey {
  return raw && themeColors[raw] ? raw : "teal";
}

export interface PartnerCardProps {
  /** i18n keys */
  titleText: string; // if you want a raw title instead, pass the brand name and skip t() below
  summaryKey: string;
  specialtiesKey: string;

  /** visual */
  logoSrc: string;
  logoAlt: string;
  theme?: ThemeKey;

  /** animation */
  isVisible?: boolean;
  delayMs?: number;
  titleColorHex?: string; // optional override (e.g., "#b03c18" for mandarina)
}

export default function PartnerCard({
  titleText,
  summaryKey,
  specialtiesKey,
  logoSrc,
  logoAlt,
  theme = "teal",
  isVisible,
  delayMs = 0,
  titleColorHex,
}: PartnerCardProps) {
  const { t } = useTranslation();
  const colors = themeColors[resolveTheme(theme)];

  return (
    <div
      className={`group relative transition-all duration-1000 h-full ${
        isVisible
          ? "opacity-100 translate-y-0 rotate-0 scale-100"
          : "opacity-0 translate-y-6 rotate-[0.5deg] scale-[0.98]"
      }`}
      style={{ transitionDelay: `${delayMs}ms` }}
      data-3d-card
    >
      {/* Depth / tilt container */}
      <div
        className="relative w-full h-full rounded-3xl"
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        data-3d-tilt
      >
        {/* Ambient outer glow */}
        <div
          className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl pointer-events-none"
          style={{
            background: `
              radial-gradient(520px 320px at 50% 50%,
                rgba(${colors.glow}, 0.55) 0%,
                rgba(${colors.glow}, 0.18) 40%,
                transparent 70%
              )
            `,
            animation: "pulse-glow 2s ease-in-out infinite alternate",
          }}
          data-3d-glow
        />

        {/* Card surface */}
        <div
          className="relative w-full h-full rounded-3xl overflow-hidden border flex flex-col"
          style={{
            background: `
              linear-gradient(135deg, rgba(255,255,255,0.92), rgba(255,255,255,0.82)),
              radial-gradient(1000px 520px at -10% -10%, rgba(${colors.glow},0.18), transparent 60%)
            `,
            borderColor: "rgba(0,0,0,0.06)",
            boxShadow:
              "0 8px 28px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)",
            backdropFilter: "saturate(120%) blur(6px)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Scan line */}
          <div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)",
              transform: "translateX(-100%)",
              animation: "scan-line 3s ease-in-out infinite",
              willChange: "transform",
            }}
            data-3d-scan
          />

          {/* Content */}
          <div
            className="relative z-10 p-6 lg:p-8 flex-1 flex flex-col"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Logo */}
            <div className="absolute top-4 right-4 opacity-60" data-3d-icon>
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* Title */}
            <h3
              data-3d-title
              className="text-2xl font-bold pb-4"
              style={{
                color: titleColorHex || colors.primary,
                textShadow: "0 1px 0 rgba(255,255,255,0.85)",
                willChange: "transform",
              }}
            >
              {titleText}
            </h3>

            {/* Summary */}
            <p
              data-3d-desc
              className="text-base text-[#0b1a28]/90"
              style={{ willChange: "transform" }}
            >
              {t(summaryKey)}
            </p>

            {/* Specialties */}
            <div
              data-3d-desc
              className="text-sm text-[#0b1a28]/70 mt-4"
              style={{ willChange: "transform" }}
            >
              {t(specialtiesKey)}
            </div>

            {/* Spacer to push content nicely and equalize height */}
            <div className="mt-auto" />
          </div>

          {/* Side data stream */}
          <div className="absolute top-0 right-0 w-1 h-full overflow-hidden opacity-30">
            <div
              className="w-full h-8 opacity-80"
              style={{
                background: `linear-gradient(180deg, rgba(${colors.glow}, 0.55) 0%, transparent 100%)`,
                willChange: "transform",
              }}
              data-3d-data
            />
          </div>
        </div>
      </div>
    </div>
  );
}
