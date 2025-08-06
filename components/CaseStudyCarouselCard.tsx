"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

interface CaseStudyCarouselCardProps {
  titleKey: string;
  categoryKey: string;
  challengeKey: string;
  metrics: {
    value: string;
    labelKey: string;
  }[];
  image: string;
  theme: 'digital' | 'marketing' | 'events';
  index: number;
  slug: string;
}

export default function CaseStudyCarouselCard({
  titleKey,
  categoryKey,
  challengeKey,
  metrics,
  image,
  theme,
  index,
  slug
}: CaseStudyCarouselCardProps) {
  const { t } = useTranslation();

  const getThemeColors = () => {
    switch (theme) {
      case 'digital':
        return { 
          gradient: 'from-teal/80 via-teal to-azul-profundo', 
          accent: 'teal',
          glow: 'shadow-teal/50'
        };
      case 'marketing':
        return { 
          gradient: 'from-mandarina/80 via-mandarina to-naranja-tostado', 
          accent: 'mandarina',
          glow: 'shadow-mandarina/50'
        };
      case 'events':
        return { 
          gradient: 'from-violeta/80 via-violeta to-azul-profundo', 
          accent: 'violeta',
          glow: 'shadow-violeta/50'
        };
      default:
        return { 
          gradient: 'from-teal/80 via-teal to-azul-profundo', 
          accent: 'teal',
          glow: 'shadow-teal/50'
        };
    }
  };

  const colors = getThemeColors();

  return (
    <div className="w-full max-w-lg xl:max-w-xl mx-auto">
      <Link href={`/casos-de-exito/${slug}`} className="block h-full">
        <div className={`relative bg-white rounded-2xl md:rounded-3xl shadow-xl ${colors.glow} md:h-[650px] overflow-hidden group-hover:scale-[1.02] group-hover:shadow-2xl transition-all duration-500 border border-white/20 group`}>
          
          {/* Hero Image - Less aggressive overlay */}
          <div className="relative h-[320px] md:h-[400px] overflow-hidden">
            {/* Subtle Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-30 z-10 group-hover:opacity-20 transition-all duration-700`}></div>
            
            {/* Responsive Image */}
            <Image
              src={image}
              alt={t(titleKey)}
              fill
              sizes="900px"
              className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
            />
            
            {/* Subtle Category Badge */}
            <div className="absolute top-3 md:top-6 left-3 md:left-6 z-20 group-hover:scale-105 transition-all duration-500">
              <div className="bg-white/90 backdrop-blur-xl px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/50 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 md:w-2.5 md:h-2.5 bg-${colors.accent} rounded-full`}></div>
                  <span className={`text-xs font-semibold text-${colors.accent} uppercase tracking-wide`}>
                    {t(categoryKey)}
                  </span>
                </div>
              </div>
            </div>

            {/* Subtle Metrics Display */}
            <div className="absolute bottom-3 md:bottom-6 left-3 md:left-6 right-3 md:right-6 z-20 group-hover:translate-y-[-2px] md:group-hover:translate-y-[-4px] transition-all duration-500">
              <div className="flex gap-2 md:gap-3">
                {metrics.slice(0, 2).map((metric, idx) => (
                  <div key={idx} className="flex-1 bg-black/20 backdrop-blur-xl rounded-lg md:rounded-xl p-2.5 md:p-4 border border-white/20 shadow-lg group-hover:bg-black/10 transition-all duration-300">
                    <div className="text-xl md:text-3xl font-black text-white mb-0.5 md:mb-1 drop-shadow-lg leading-none">
                      {metric.value}
                    </div>
                    <div className="text-[9px] md:text-xs text-white/80 font-medium uppercase tracking-wide leading-tight">
                      {t(metric.labelKey)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gradient Overlay for Text Contrast - Lighter */}
            <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-black/40 via-black/20 to-transparent z-15"></div>
          </div>

          {/* Content Section - MUCH MORE SPACE */}
          <div className="p-8 md:p-12 h-[200px] md:h-[230px] flex flex-col justify-between bg-gradient-to-b from-white to-gray-50/50">
            {/* Title & Brief Text */}
            <div className="flex-1">
              <h3 className={`text-xl md:text-2xl font-black text-${colors.accent} leading-tight pb-3 md:pb-4 group-hover:scale-105 transition-transform duration-300`}>
                {t(titleKey)}
              </h3>
              <p className="text-sm text-grafito/70 leading-relaxed line-clamp-3 font-medium">
                {t(challengeKey).substring(0, 355)}...
              </p>
            </div>

            {/* CTA - Responsive */}
            <div className="flex items-center justify-between pt-3 md:pt-4">
              <div className="flex items-center gap-2 md:gap-3">
                <div className={`w-2.5 h-2.5 md:w-3 md:h-3 bg-${colors.accent} rounded-full animate-pulse shadow-lg`}></div>
                <span className="text-xs md:text-sm font-bold text-grafito">
                  {t("caseStudies.readMore")}
                </span>
              </div>
              
              <div className={`w-10 h-10 md:w-14 md:h-14 bg-gradient-to-r ${colors.gradient} rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg md:shadow-xl`}>
                <svg className="w-4 h-4 md:w-6 md:h-6 text-white group-hover:translate-x-0.5 md:group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Subtle Glow Border Effect */}
          <div className={`absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none blur-sm`}></div>
        </div>
      </Link>
    </div>
  );
}