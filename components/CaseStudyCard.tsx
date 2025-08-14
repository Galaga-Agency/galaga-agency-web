"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";
import Image from "next/image";
import { Monitor, Megaphone, Calendar, ChevronRight } from "lucide-react";

interface CaseStudy {
  titleKey: string;
  categoryKey: string;
  introKey: string;
  challengeKey: string;
  solutionKey: string;
  resultKey: string;
  metrics: Array<{
    value: string;
    labelKey: string;
  }>;
  image: string;
  theme: "digital" | "marketing" | "events";
  slug: string;
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
  size?: string;
  isHovered?: boolean;
  isNeighborHovered?: boolean;
  onHover?: (isHovered: boolean) => void;
}

export default function CaseStudyCard({
  caseStudy,
  index,
  size,
  isHovered = false,
  isNeighborHovered = false,
  onHover,
}: CaseStudyCardProps) {
  const { t } = useTranslation();

  // Dynamic theme assignment based on index
  const colorThemes: ("digital" | "marketing" | "events")[] = [
    "digital",
    "marketing",
    "events",
    "digital",
    "marketing",
    "events",
    "digital",
    "events",
  ];

  const theme = colorThemes[index] || "digital";

  const getThemeConfig = (theme: string) => {
    const configs = {
      digital: {
        accent: "teal",
        gradient: "from-teal via-teal to-azul-profundo",
        iconBg: "bg-gradient-to-br from-white/90 to-teal/20",
        icon: Monitor,
        border: "border-teal/20",
        glow: "hover:shadow-teal/50",
        overlay: "bg-gradient-to-t from-teal/10 to-transparent",
      },
      marketing: {
        accent: "mandarina",
        gradient: "from-mandarina via-mandarina to-naranja-tostado",
        iconBg: "bg-gradient-to-br from-white/90 to-mandarina/20",
        icon: Megaphone,
        border: "border-mandarina/20",
        glow: "hover:shadow-mandarina/50",
        overlay: "bg-gradient-to-t from-mandarina/10 to-transparent",
      },
      events: {
        accent: "violeta",
        gradient: "from-violeta via-violeta to-azul-profundo",
        iconBg: "bg-gradient-to-br from-white/90 to-violeta/20",
        icon: Calendar,
        border: "border-violeta/20",
        glow: "hover:shadow-violeta/50",
        overlay: "bg-gradient-to-t from-violeta/10 to-transparent",
      },
    };
    return configs[theme as keyof typeof configs] || configs.digital;
  };

  const config = getThemeConfig(theme);
  const IconComponent = config.icon;

  // Responsive size-based configurations
  const getSizeConfig = () => {
    switch (size) {
      case "hero":
        return {
          imageHeight: "h-[300px] md:h-[390px] lg:h-[385px]",
          contentPadding: "p-4 md:p-6 lg:p-8",
          titleSize: "text-lg md:text-xl lg:text-2xl",
          descriptionSize: "text-sm md:text-base lg:text-lg",
          maxLines: 3,
          categorySize: "text-xs md:text-sm",
          ctaSize: "w-10 h-10 md:w-14 md:h-14",
          ctaIconSize: "w-4 h-4 md:w-6 md:h-6",
        };
      case "wide":
        return {
          imageHeight: "h-[300px] md:h-[390px] lg:h-[385px]",
          contentPadding: "p-4 md:p-6 lg:p-7",
          titleSize: "text-lg md:text-xl lg:text-2xl",
          descriptionSize: "text-sm md:text-base",
          maxLines: 3,
          categorySize: "text-xs md:text-sm",
          ctaSize: "w-10 h-10 md:w-14 md:h-14",
          ctaIconSize: "w-4 h-4 md:w-6 md:h-6",
        };
      case "large":
        return {
          imageHeight: "h-[300px] md:h-[390px] lg:h-[385px]",
          contentPadding: "p-4 md:p-6",
          titleSize: "text-lg md:text-xl lg:text-2xl",
          descriptionSize: "text-sm md:text-base",
          maxLines: 3,
          categorySize: "text-xs md:text-sm",
          ctaSize: "w-10 h-10 md:w-14 md:h-14",
          ctaIconSize: "w-4 h-4 md:w-6 md:h-6",
        };
      default: // medium
        return {
          imageHeight: "h-[300px] md:h-[390px] lg:h-[385px]",
          contentPadding: "p-4 md:p-6",
          titleSize: "text-lg md:text-xl lg:text-2xl",
          descriptionSize: "text-sm md:text-base",
          maxLines: 2,
          categorySize: "text-xs md:text-sm",
          ctaSize: "w-10 h-10 md:w-14 md:h-14",
          ctaIconSize: "w-4 h-4 md:w-6 md:h-6",
        };
    }
  };

  const sizeConfig = getSizeConfig();

  // Truncate text based on word count to prevent overflow
  const truncateText = (text: string, maxLines: number) => {
    const words = text.split(' ');
    const wordsPerLine = size === 'medium' ? 8 : size === 'hero' ? 12 : 10;
    const maxWords = maxLines * wordsPerLine;
    
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(' ') + '...';
  };

  return (
    <div className="case-study-card group h-full w-full">
      <Link href={`/casos-de-exito/${caseStudy.slug}`} className="block h-full w-full">
        <div
          className={`
          h-full w-full rounded-xl lg:rounded-2xl overflow-hidden 
          bg-white shadow-lg hover:shadow-xl ${config.glow}
          border ${config.border} hover:border-${config.accent}/40
          transform transition-all duration-500 ease-out relative
          ${
            isHovered
              ? "scale-[1.03] -translate-y-2 shadow-xl"
              : isNeighborHovered
              ? "scale-[0.97] opacity-80"
              : "hover:scale-[1.02] hover:-translate-y-1"
          }
          group flex flex-col
        `}
        >
          {/* Image Section with Theme Enhancement */}
          <div className={`relative ${sizeConfig.imageHeight} overflow-hidden flex-shrink-0`}>
            <Image
              src={caseStudy.image}
              alt={t(caseStudy.titleKey)}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />

            {/* Theme overlay for visual enhancement */}
            <div
              className={`absolute inset-0 ${config.overlay} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}
            ></div>

            {/* Category Badge */}
            <div className="absolute top-3 left-3 md:top-4 md:left-4 z-20">
              <div
                className={`bg-white/90 backdrop-blur-xl px-2 md:px-3 lg:px-4 py-1 md:py-1.5 lg:py-2 rounded-full border border-white/50 shadow-sm`}
              >
                <div className="flex items-center gap-1 md:gap-2">
                  <div
                    className={`w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 bg-${config.accent} rounded-full flex items-center justify-center`}
                  >
                    <IconComponent className="w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 text-white" />
                  </div>
                  <span
                    className={`${sizeConfig.categorySize} font-bold text-${config.accent} uppercase tracking-wider`}
                  >
                    {t(caseStudy.categoryKey)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div
            className={`flex-1 ${sizeConfig.contentPadding} flex flex-col justify-between bg-gradient-to-t from-white to-transparent  min-h-0`}
          >
            <div className="flex-1 min-h-0 flex flex-col gap-3">
              <h3
                className={`${sizeConfig.titleSize} font-black text-${config.accent} leading-tight group-hover:scale-105 group-hover:translate-x-3 transition-all duration-300 flex-shrink-0`}
              >
                {t(caseStudy.titleKey)}
              </h3>

              <p
                className={`${sizeConfig.descriptionSize} text-neutral-600 leading-relaxed font-medium group-hover:text-negro transition-colors duration-300 flex-1 overflow-hidden`}
              >
                {truncateText(t(caseStudy.introKey), sizeConfig.maxLines)}
              </p>
            </div>

            {/* CTA Section */}
            <div className="flex items-center justify-end gap-3 pt-4 flex-shrink-0">
           <div className={`w-8 h-8 bg-gradient-to-r ${config.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg`}>
            <svg className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </div>
            </div>
          </div>

          {/* Enhanced Glow Border Effect */}
          <div className={`absolute inset-0 rounded-xl lg:rounded-2xl bg-gradient-to-r ${config.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none blur-sm`}></div>
        </div>
      </Link>
    </div>
  );
}