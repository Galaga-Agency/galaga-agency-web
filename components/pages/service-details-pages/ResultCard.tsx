// components/pages/marketing/ResultCard.tsx
"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { IconType } from "react-icons";

interface Result {
  icon: IconType;
  percentage: string;
  title: string;
  description: string;
  detail: string;
  color: string;
}

interface ResultCardProps {
  result: Result;
  index: number;
}

const themeColors = {
  teal: { primary: "#176161", glow: "76, 188, 197" },
  "azul-profundo": { primary: "#121c30", glow: "18, 28, 48" },
  mandarina: { primary: "#b03c18", glow: "238, 111, 69" },
  violeta: { primary: "#4e3a73", glow: "78, 58, 115" },
  skyblue: { primary: "#0d4a6d", glow: "67, 175, 230" },
} as const;

type ThemeKey = keyof typeof themeColors;
const resolveThemeKey = (raw?: string): ThemeKey =>
  raw && raw in themeColors ? (raw as ThemeKey) : "teal";

export default function ResultCard({ result }: ResultCardProps) {
  const { t } = useTranslation();

  const themeKey = resolveThemeKey(result.color);
  const colors = themeColors[themeKey];

  const Icon = result.icon;
  const iconSize = 26;

  return (
    <div data-3d-card className="group h-full relative cursor-pointer">
      {/* Tilt / depth container */}
      <div
        data-3d-tilt
        className="relative w-full h-full rounded-3xl"
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      >
        {/* Ambient outer glow */}
        <div
          data-3d-glow
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
        />

        {/* Card surface */}
        <div
          className="relative w-full h-full rounded-3xl overflow-hidden border flex flex-col"
          style={{
            background: `
              linear-gradient(135deg, rgba(255,255,255,0.88), rgba(255,255,255,0.78)),
              radial-gradient(1000px 520px at -10% -10%, rgba(${colors.glow},0.18), transparent 60%)
            `,
            borderColor: "rgba(0,0,0,0.06)",
            boxShadow:
              "0 8px 28px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)",
            backdropFilter: "saturate(120%) blur(6px)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Optional BG wash */}
          <div
            data-3d-bg
            className="absolute inset-0 pointer-events-none"
            style={{ opacity: 0, willChange: "transform" }}
          />

          {/* Subtle scan line */}
          <div
            data-3d-scan
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)",
              transform: "translateX(-100%)",
              animation: "scan-line 3s ease-in-out infinite",
              willChange: "transform",
            }}
          />

          {/* Content */}
          <div
            className="relative z-10 p-6 lg:p-8 flex flex-col items-center text-center gap-3 flex-1"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Icon bubble */}
            <div className="w-full flex items-center justify-center gap-4 pb-2">
              <div
                data-3d-icon
                className="relative w-14 h-14 rounded-full flex items-center justify-center border shadow-sm"
                style={{
                  background: `
                    linear-gradient(135deg,
                      rgba(${colors.glow},0.25) 0%,
                      rgba(${colors.glow},0.06) 100%
                    )
                  `,
                  borderColor: `rgba(${colors.glow},0.30)`,
                  boxShadow: `inset 0 0 12px rgba(${colors.glow},0.10)`,
                  willChange: "transform",
                }}
              >
                <Icon
                  size={iconSize}
                  style={{
                    color: colors.primary,
                    filter: `drop-shadow(0 0 10px #fff)`,
                  }}
                  className="relative z-10"
                />
                <span
                  className="absolute inset-0 rounded-full opacity-50"
                  style={{
                    background: `radial-gradient(circle, rgba(${colors.glow},0.28) 0%, transparent 70%)`,
                    filter: "blur(8px)",
                  }}
                />
              </div>
            </div>

            <h3
              data-3d-title
              className="text-[1.15rem] font-bold leading-tight"
              style={{
                color: "#0c1b2a",
                textShadow: "0 1px 0 rgba(255,255,255,0.85)",
                willChange: "transform",
              }}
            >
              {t(result.title)}
            </h3>

            <p
              data-3d-desc
              className="text-[0.98rem] leading-relaxed text-[#0b1a28]/80 max-w-[54ch]"
              style={{ willChange: "transform" }}
            >
              {t(result.description)}
            </p>

            {result.detail && (
              <p
                data-3d-desc
                className="text-sm text-[#0b1a28]/60 max-w-[58ch] mt-auto"
                style={{ willChange: "transform" }}
              >
                {t(result.detail)}
              </p>
            )}
          </div>

          {/* Side data stream */}
          <div className="absolute top-0 right-0 w-1 h-full overflow-hidden opacity-30">
            <div
              data-3d-data
              className="w-full h-8 opacity-80"
              style={{
                background: `linear-gradient(180deg, rgba(${colors.glow}, 0.55) 0%, transparent 100%)`,
                willChange: "transform",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
