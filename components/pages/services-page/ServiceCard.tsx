"use client";

import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { Service } from "@/types/service";
import { getLocalizedRoute } from "@/utils/navigation";

interface ServiceCardProps {
  service: Service;
  index: number;
  isHovered?: boolean;
  isNeighborHovered?: boolean;
}

export default function ServiceCard({
  service,
  index,
  isHovered = false,
  isNeighborHovered = false,
}: ServiceCardProps) {
  const { t, language } = useTranslation();

  const themes = {
    teal: {
      gradient: "bg-teal-gradient",
      glow: "hover:shadow-teal/50",
      title: "text-teal",
      bullet: "bg-teal/60",
      bulletOn: "bg-teal",
      text: "text-azul-profundo",
      ctaGradient: "bg-teal-gradient",
      border: "border-teal/20",
    },
    skyblue: {
      gradient: "bg-skyblue-gradient",
      glow: "hover:shadow-turquesa/50",
      title: "text-turquesa",
      bullet: "bg-turquesa/60",
      bulletOn: "bg-turquesa",
      text: "text-azul-profundo",
      ctaGradient: "bg-skyblue-gradient",
      border: "border-turquesa/20",
    },
    violeta: {
      gradient: "bg-purple-gradient",
      glow: "hover:shadow-violeta/50",
      title: "text-violeta",
      bullet: "bg-violeta/60",
      bulletOn: "bg-violeta",
      text: "text-azul-profundo",
      ctaGradient: "bg-purple-gradient",
      border: "border-violeta/20",
    },
    mandarina: {
      gradient: "bg-orange-gradient",
      glow: "hover:shadow-mandarina/50",
      title: "text-mandarina",
      bullet: "bg-mandarina/60",
      bulletOn: "bg-mandarina",
      text: "text-azul-profundo",
      ctaGradient: "bg-orange-gradient",
      border: "border-mandarina/20",
    },
    "azul-profundo": {
      gradient: "bg-darkblue-gradient",
      glow: "hover:shadow-azul-profundo/50",
      title: "text-azul-profundo",
      bullet: "bg-azul-profundo/60",
      bulletOn: "bg-azul-profundo",
      text: "text-azul-profundo",
      ctaGradient: "bg-darkblue-gradient",
      border: "border-azul-profundo/20",
    },
  } as const;

  type ThemeKey = keyof typeof themes;

  const theme = themes[service.theme as ThemeKey] ?? {
    gradient: "bg-teal-gradient",
    glow: "hover:shadow-teal/50",
    title: "text-teal",
    bullet: "bg-teal/60",
    bulletOn: "bg-teal",
    text: "text-azul-profundo",
    ctaGradient: "bg-teal-gradient",
    border: "border-teal/20",
  };

  const translatedSlug = t(service.slug);
  const servicesRoute = getLocalizedRoute("services", language);
  const serviceUrl = `${servicesRoute}/${translatedSlug}`;

  // Check if this service has a link using the hasRedirection field
  const hasLink = service.hasRedirection;

  // Card content component
  const CardContent = () => (
    <>
      {/* Background image + whitish overlay */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl md:rounded-3xl">
        <div className="absolute inset-0 bg-white/60 transition-colors duration-500 group-hover:bg-white/50" />
      </div>

      {/* Floating icon */}
      <div
        className={`
          absolute -top-4 -right-4
          text-[10rem]
          text-white/10 rotate-6 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:text-white/30
        `}
      >
        <service.icon />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-6 lg:p-8">
        {/* Themed Icon Bubble */}
        <div
          className={`
          w-16 h-16 rounded-full
          ${theme.gradient}
          flex items-center justify-center
          text-blanco text-2xl
          transform transition-all duration-300 
          group-hover:scale-105 group-hover:shadow-lg
          shadow-lg
        `}
        >
          <service.icon />
        </div>

        <h3
          className={`
            text-xl lg:text-2xl
            font-black leading-tight py-6
            ${theme.title}
            transition-transform duration-300 group-hover:scale-[1.02] group-hover:translate-x-1
          `}
        >
          {t(service.title)}
        </h3>

        <p
          className={`text-sm lg:text-base font-semibold pb-6 leading-relaxed flex-1 ${theme.text} group-hover:text-negro transition-colors duration-300`}
        >
          {t(service.description)}
        </p>

        <div className="mt-auto flex flex-col gap-3">
          {service.features.map((feature, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 font-semibold text-sm ${theme.text}`}
            >
              <div
                className={`
                  w-2.5 h-2.5 rounded-full flex-shrink-0 shadow-sm transition-colors
                  ${theme.bullet}
                  group-hover:${theme.bulletOn}
                `}
              />
              <span className="leading-relaxed">{t(feature)}</span>
            </div>
          ))}
        </div>

        {/* CTA - Small Circle with Arrow - Only show if has link */}
        {hasLink && (
          <div className="mt-6 flex items-center justify-end">
            <div
              className={`w-8 h-8 ${theme.ctaGradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg`}
            >
              <svg
                className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        )}

        {/* Spacer for cards without CTA to maintain consistent height */}
        {!hasLink && <div className="mt-6 h-8" />}
      </div>

      {/* Enhanced Glow Border Effect */}
      <div
        className={`
          pointer-events-none absolute inset-0 rounded-2xl md:rounded-3xl
          ${theme.gradient}
          opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-sm
        `}
      />
    </>
  );

  const baseClasses = `
    relative overflow-hidden h-full rounded-2xl md:rounded-3xl
    bg-white shadow-lg hover:shadow-xl ${theme.glow}
    border ${theme.border} hover:border-${service.theme}/40
    transition-all duration-500 ease-out group
    ${isHovered ? "shadow-xl" : isNeighborHovered ? "opacity-80" : ""}
  `;

  // If has link, wrap entire card in Link component
  if (hasLink) {
    return (
      <Link href={serviceUrl} className={`${baseClasses} cursor-pointer block`}>
        <CardContent />
      </Link>
    );
  }

  // If no link, render as regular div
  return (
    <div className={baseClasses}>
      <CardContent />
    </div>
  );
}
