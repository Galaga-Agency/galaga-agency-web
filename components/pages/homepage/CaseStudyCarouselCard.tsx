"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import {
  CardContainer,
  CardBody,
  CardBackFrame,
  CardGlow,
  CardImageLayer,
  CardContentLayer,
} from "@/components/ui/3DCard";

interface CaseStudyCarouselCardProps {
  titleKey: string;
  categoryKey: string;
  challengeKey: string;
  metrics: {
    value: string;
    label: string;
  }[];
  image: string;
  theme: "digital" | "marketing" | "events";
  slug: string;
}

export default function CaseStudyCarouselCard({
  titleKey,
  categoryKey,
  challengeKey,
  metrics,
  image,
  theme,
  slug,
}: CaseStudyCarouselCardProps) {
  const { t } = useTranslation();

  const colors =
    theme === "digital"
      ? {
          gradient: "from-teal/80 via-teal to-azul-profundo",
          accent: "teal",
          glow: "shadow-teal/50",
          ctaGradient: "from-teal via-teal to-azul-profundo",
        }
      : theme === "marketing"
      ? {
          gradient: "from-mandarina/80 via-mandarina to-naranja-tostado",
          accent: "mandarina",
          glow: "shadow-mandarina/50",
          ctaGradient: "from-mandarina via-mandarina to-naranja-tostado",
        }
      : {
          gradient: "from-violeta/80 via-violeta to-azul-profundo",
          accent: "violeta",
          glow: "shadow-violeta/50",
          ctaGradient: "from-violeta via-violeta to-azul-profundo",
        };

  return (
    <div className="w-full max-w-lg xl:max-w-xl mx-auto">
      <Link href={`/casos-de-exito/${slug}`} className="block h-full">
        <CardContainer containerClassName="h-full [perspective:2000px]">
          <CardBody
            className={`relative bg-white rounded-2xl md:rounded-3xl shadow-xl ${colors.glow} md:h-[650px] overflow-hidden border border-white/20 group`}
          >
            {/* --- BACK BEVEL FRAME --- */}
            <CardBackFrame className="absolute -inset-1 rounded-2xl md:rounded-3xl border border-white/20" />

            {/* --- GLOW LAYER --- */}
            <CardGlow>
              <div
                className={`absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none blur-sm`}
              />
            </CardGlow>

            {/* --- IMAGE LAYER --- */}
            <CardImageLayer className="relative h-[320px] md:h-[400px] overflow-hidden">
              {/* Overlay gradient */}
              <div
                className={`absolute inset-0 ${colors.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-400`}
              />
              {/* Hero image */}
              <Image
                src={image}
                alt={t(titleKey)}
                fill
                sizes="900px"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />

              {/* Category badge */}
              <div className="absolute top-3 md:top-6 left-3 md:left-6 z-20 group-hover:scale-105 transition-all duration-500">
                <div className="bg-white/90 backdrop-blur-xl px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/50 shadow-sm">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 md:w-2.5 md:h-2.5 bg-${colors.accent} rounded-full`}
                    />
                    <span
                      className={`text-xs font-semibold text-${colors.accent} uppercase tracking-wide`}
                    >
                      {t(categoryKey)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="absolute bottom-3 md:bottom-6 left-3 md:left-6 right-3 md:right-6 z-20 transition-transform duration-500 group-hover:-translate-y-1 md:group-hover:-translate-y-1.5">
                <div className="flex gap-2 md:gap-3">
                  {metrics.slice(0, 2).map((metric, idx) => (
                    <div
                      key={idx}
                      className="flex-1 bg-black/20 backdrop-blur-xl rounded-lg md:rounded-xl p-2.5 md:p-4 border border-white/20 shadow-lg group-hover:bg-black/10 transition-all duration-300"
                    >
                      <div className="text-xl md:text-3xl font-black text-white mb-0.5 md:mb-1 drop-shadow-lg leading-none">
                        {metric.value}
                      </div>
                      <div className="text-[9px] md:text-xs text-white/80 font-medium uppercase tracking-wide leading-tight">
                        {t(metric.label)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-black/40 via-black/20 to-transparent z-10" />
            </CardImageLayer>

            {/* --- CONTENT LAYER --- */}
            <CardContentLayer className="p-8 md:p-12 h-[200px] md:h-[230px] flex flex-col justify-between bg-gradient-to-b from-white to-gray-50/50">
              <div className="flex-1">
                <h3
                  className={`text-xl md:text-2xl font-black text-${colors.accent} leading-tight pb-3 md:pb-4 transition-transform duration-300 group-hover:scale-[1.03]`}
                >
                  {t(titleKey)}
                </h3>
                <p className="text-sm text-grafito/70 leading-relaxed line-clamp-3 font-medium">
                  {t(challengeKey).substring(0, 355)}...
                </p>
              </div>

              <div className="flex items-center justify-end pt-3 md:pt-4">
                <div
                  className={`w-8 h-8 bg-gradient-to-r ${colors.ctaGradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg`}
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
            </CardContentLayer>
          </CardBody>
        </CardContainer>
      </Link>
    </div>
  );
}
