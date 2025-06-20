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
    <div className="carousel-slide absolute w-[90vw] md:w-[50vw] lg:w-[35vw] h-[700px] cursor-pointer group" data-index={index}>
      <Link href={`/cases/${slug}`} className="block h-full">
        <div className={`relative bg-white rounded-3xl shadow-2xl ${colors.glow} h-full overflow-hidden group-hover:scale-[1.05] group-hover:shadow-3xl transition-all duration-700 border border-white/20`}>
          
          {/* MASSIVE Hero Image - Adjusted for taller card */}
          <div className="relative h-[480px] overflow-hidden">
            {/* Dynamic Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-70 z-10 group-hover:opacity-50 transition-all duration-700`}></div>
            
            <Image
              src={image}
              alt={t(titleKey)}
              fill
              className="object-cover group-hover:scale-125 transition-transform duration-1200 ease-out"
            />
            
            {/* Floating Category Badge - More Prominent */}
            <div className="absolute top-6 left-6 z-20 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
              <div className="bg-white/95 backdrop-blur-2xl px-6 py-3 rounded-full border-2 border-white/70 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 bg-${colors.accent} rounded-full animate-pulse shadow-xl`}></div>
                  <span className={`text-sm font-black text-${colors.accent} uppercase tracking-widest`}>
                    {t(categoryKey)}
                  </span>
                </div>
              </div>
            </div>

            {/* STUNNING Metrics Display */}
            <div className="absolute bottom-6 left-6 right-6 z-20 group-hover:translate-y-[-8px] transition-all duration-500">
              <div className="flex gap-4">
                {metrics.slice(0, 2).map((metric, idx) => (
                  <div key={idx} className="flex-1 bg-black/25 backdrop-blur-2xl rounded-2xl p-6 border border-white/40 shadow-2xl group-hover:bg-black/15 group-hover:scale-105 transition-all duration-300">
                    <div className="text-4xl font-black text-white mb-2 drop-shadow-2xl leading-none">
                      {metric.value}
                    </div>
                    <div className="text-xs text-white/90 font-bold uppercase tracking-wider leading-tight">
                      {t(metric.labelKey)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Magnetic Hover Effect */}
            <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0 group-hover:rotate-12">
              <div className="bg-white/20 backdrop-blur-2xl rounded-full p-4 border-2 border-white/50 shadow-2xl">
                <svg className="w-7 h-7 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>

            {/* Gradient Overlay for Better Text Contrast */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-15"></div>
          </div>

          {/* Expanded Content Section */}
          <div className="p-8 h-[170px] flex flex-col justify-between bg-gradient-to-b from-white to-gray-50/50">
            {/* Title & Brief Text */}
            <div>
              <h3 className={`text-xl font-black text-${colors.accent} leading-tight pb-2 group-hover:scale-105 transition-transform duration-300`}>
                {t(titleKey)}
              </h3>
              <p className="text-sm text-grafito/70 leading-relaxed line-clamp-2 font-medium">
                {t(challengeKey).substring(0, 355)}...
              </p>
            </div>

            {/* Compelling CTA */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 bg-${colors.accent} rounded-full animate-pulse shadow-lg`}></div>
                <span className="text-sm font-bold text-grafito">
                  {t("caseStudies.readMore")}
                </span>
              </div>
              
              <div className={`w-14 h-14 bg-gradient-to-r ${colors.gradient} rounded-full flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-xl`}>
                <svg className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Subtle Glow Border Effect */}
          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none blur-sm`}></div>
        </div>
      </Link>
    </div>
  );
}