"use client";

import Link from "next/link";
import { IconType } from "react-icons";
import { useTranslation } from "@/hooks/useTranslation";
import { Service } from "@/types/service";
import { getLocalizedRoute } from "@/utils/navigation";

interface ServiceCardProps {
  service: Service;
  index: number;
}

/** Brand themes → CSS-friendly rgba triplets for glow + primary text color */
const themeColors = {
  teal: { primary: "#176161", glow: "76, 188, 197" }, // rgb triplet as string
  "azul-profundo": { primary: "#121c30", glow: "18, 28, 48" },
  mandarina: { primary: "#b03c18", glow: "238, 111, 69" },
  violeta: { primary: "#4e3a73", glow: "78, 58, 115" },
} as const;

type ThemeKey = keyof typeof themeColors;

/** Guard against unknown/missing themes */
function resolveThemeKey(raw?: string): ThemeKey {
  if (!raw) return "teal";
  return (raw in themeColors ? raw : "teal") as ThemeKey;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { t, language } = useTranslation();

  const themeKey = resolveThemeKey(service.theme as string);
  const colors = themeColors[themeKey];

  // icon safety: only use if it's a function/component
  const IconComp: IconType | null =
    typeof service.icon === "function" ? (service.icon as IconType) : null;

  const translatedSlug = t(service.slug);
  const servicesRoute = getLocalizedRoute("services", language);
  const serviceUrl = `${servicesRoute}/${translatedSlug}`;
  const hasLink = service.hasRedirection !== false;

  const cardHeight = "h-[400px]";
  const iconSize = 28;

  return (
    <div data-3d-card className={`group relative ${cardHeight} cursor-pointer`}>
      {/* Tilt / depth container (GSAP animates this) */}
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

        {/* Card surface (light / glassy) */}
        <div
          className="relative w-full h-full rounded-3xl overflow-hidden border"
          style={{
            background: `
              linear-gradient(135deg, rgba(255,255,255,0.85), rgba(255,255,255,0.76)),
              radial-gradient(1200px 600px at -10% -10%, rgba(${colors.glow},0.18), transparent 60%)
            `,
            borderColor: "rgba(0,0,0,0.06)",
            boxShadow:
              "0 8px 28px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)",
            backdropFilter: "saturate(120%) blur(6px)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Soft image wash */}
          {service.image && (
            <div
              data-3d-bg
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `url(${service.image}) center/cover no-repeat`,
                opacity: 0.22,
                WebkitMaskImage:
                  "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.4) 45%, rgba(0,0,0,0.05) 75%, transparent)",
                maskImage:
                  "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.4) 45%, rgba(0,0,0,0.05) 75%, transparent)",
                willChange: "transform",
              }}
            />
          )}

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
            className="relative z-10 h-full p-7 flex flex-col"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Icon bubble (spins + pops via GSAP util) */}
            <div className="pb-6 w-full flex justify-center">
              <div
                data-3d-icon
                className="relative w-16 h-16 rounded-full flex items-center justify-center border shadow-sm"
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
                {IconComp && (
                  <IconComp
                    size={iconSize}
                    style={{
                      color: colors.primary,
                      filter: `drop-shadow(0 0 12px #fff)`,
                    }}
                    className="relative z-10"
                  />
                )}
                <span
                  className="absolute inset-0 rounded-full opacity-50"
                  style={{
                    background: `radial-gradient(circle, rgba(${colors.glow},0.28) 0%, transparent 70%)`,
                    filter: "blur(8px)",
                  }}
                />
              </div>
            </div>

            <div className="w-full flex flex-col items-center">  {/* Title */}
            <h3
              data-3d-title
              className="text-[1.35rem] font-black leading-tight pb-4"
              style={{
                color: "#0c1b2a",
                textShadow: "0 1px 0 rgba(255,255,255,0.85)",
                willChange: "transform",
              }}
            >
              {t(service.title)}
            </h3>

            {/* Description */}
            <p
              data-3d-desc
              className="pb-6 text-center"
              style={{
                color: "rgba(10,20,30,0.72)",
                willChange: "transform",
              }}
            >
              {t(service.description)}
            </p></div>

  
            {/* Bullets */}
            <ul className="flex flex-col gap-2 mt-auto">
              {(service.features ?? []).slice(0, 4).map((featKey, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-2 inline-block w-2 h-2 rounded-full"
                    style={{ background: `rgba(${colors.glow},0.9)` }}
                  />
                  <span className="text-[0.95rem] text-[#0b1a28]">
                    {t(featKey)}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            {hasLink && (
              <div className="absolute bottom-6 right-6 mt-6 flex justify-end">
                <Link
                  href={serviceUrl}
                  className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-transform"
                  style={{
                    borderColor: "rgba(0,0,0,0.08)",
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.92), rgba(255,255,255,0.78))",
                    boxShadow:
                      "0 4px 14px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.95)",
                  }}
                >
                  <span className="text-[0.92rem] text-[#0c1b2a]">
                    {t("homepage-cta.knowMore")}
                  </span>
                  <svg
                    className="w-4 h-4 text-[#0c1b2a]"
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
                </Link>
              </div>
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
