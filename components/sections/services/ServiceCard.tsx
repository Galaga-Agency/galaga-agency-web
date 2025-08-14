"use client";

import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

interface ServiceConfig {
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
  featuresKeys: string[];
  slug: string;
  image?: string;
  theme: string;
}

interface ServiceCardProps {
  service: ServiceConfig;
  index: number;
  isHovered?: boolean;
  isNeighborHovered?: boolean;
}

export default function ServiceCard({ 
  service, 
  index, 
  isHovered = false, 
  isNeighborHovered = false 
}: ServiceCardProps) {
  const { t } = useTranslation();

  const themes = {
    teal: {
      gradient: "from-teal/80 via-teal to-azul-profundo",
      glow: "hover:shadow-teal/50",
      title: "text-teal",
      bullet: "bg-teal/60",
      bulletOn: "bg-teal",
      text: "text-azul-profundo",
      ctaGradient: "from-teal via-teal to-azul-profundo",
      border: "border-teal/20",
    },
    violeta: {
      gradient: "from-violeta/80 via-violeta to-azul-profundo",
      glow: "hover:shadow-violeta/50",
      title: "text-violeta",
      bullet: "bg-violeta/60",
      bulletOn: "bg-violeta",
      text: "text-azul-profundo",
      ctaGradient: "from-violeta via-violeta to-azul-profundo",
      border: "border-violeta/20",
    },
    mandarina: {
      gradient: "from-mandarina/80 via-mandarina to-naranja-tostado",
      glow: "hover:shadow-mandarina/50",
      title: "text-mandarina",
      bullet: "bg-mandarina/60",
      bulletOn: "bg-mandarina",
      text: "text-azul-profundo",
      ctaGradient: "from-mandarina via-mandarina to-naranja-tostado",
      border: "border-mandarina/20",
    },
    "azul-profundo": {
      gradient: "from-azul-profundo/80 via-azul-profundo to-negro",
      glow: "hover:shadow-azul-profundo/50",
      title: "text-azul-profundo",
      bullet: "bg-azul-profundo/60",
      bulletOn: "bg-azul-profundo",
      text: "text-azul-profundo",
      ctaGradient: "from-azul-profundo via-azul-profundo to-negro",
      border: "border-azul-profundo/20",
    },
  } as const;

  type ThemeKey = keyof typeof themes;

  const theme =
    themes[service.theme as ThemeKey] ?? {
      gradient: "from-teal/80 via-teal to-azul-profundo",
      glow: "hover:shadow-teal/50",
      title: "text-teal",
      bullet: "bg-teal/60",
      bulletOn: "bg-teal",
      text: "text-azul-profundo",
      ctaGradient: "from-teal via-teal to-azul-profundo",
      border: "border-teal/20",
    };

  return (
    <div
      className={`
        relative overflow-hidden h-full cursor-pointer rounded-2xl md:rounded-3xl
        bg-white shadow-lg hover:shadow-xl ${theme.glow}
        border ${theme.border} hover:border-${service.theme}/40
        transition-all duration-500 ease-out group
        ${isHovered ? "shadow-xl" : isNeighborHovered ? "opacity-80" : ""}
      `}
    >
      {/* Background image + whitish overlay */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl md:rounded-3xl">
        {service.image && (
          <img
            src={service.image}
            alt={t(service.titleKey)}
            className="absolute inset-0 w-full h-full object-cover opacity-20 transition-transform duration-1000 ease-out group-hover:scale-110"
          />
        )}
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
        {service.icon}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-6 lg:p-8">
        
        {/* Themed Icon Bubble */}
        <div className={`
          w-16 h-16 rounded-full
          bg-gradient-to-br ${theme.gradient}
          flex items-center justify-center
          text-blanco text-2xl
          transform transition-all duration-300 
          group-hover:scale-105 group-hover:shadow-lg
          shadow-lg
        `}>
          {service.icon}
        </div>
        
        <h3
          className={`
            text-xl lg:text-2xl
            font-black leading-tight py-6
            ${theme.title}
            transition-transform duration-300 group-hover:scale-[1.02] group-hover:translate-x-1
          `}
        >
          {t(service.titleKey)}
        </h3>

        <p className={`text-sm lg:text-base font-semibold pb-6 leading-relaxed flex-1 ${theme.text} group-hover:text-negro transition-colors duration-300`}>
          {t(service.descriptionKey)}
        </p>

        <div className="mt-auto flex flex-col gap-3">
          {service.featuresKeys.map((feature, i) => (
            <div key={i} className={`flex items-center gap-3 font-semibold text-sm ${theme.text}`}>
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

        {/* CTA - Small Circle with Arrow */}
        <Link
          href={`/servicios/${service.slug}`}
          className="mt-6 flex items-center justify-end"
        >
          <div className={`w-8 h-8 bg-gradient-to-r ${theme.ctaGradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg`}>
            <svg className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      </div>

      {/* Enhanced Glow Border Effect */}
      <div
        className={`
          pointer-events-none absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r
          ${theme.gradient}
          opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-sm
        `}
      />
    </div>
  );
}