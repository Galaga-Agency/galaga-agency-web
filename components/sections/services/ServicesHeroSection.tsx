"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { FiTarget, FiZap, FiStar } from "react-icons/fi";

export default function ServicesHeroSection() {
  const { t } = useTranslation();

  const areas = [
    {
      key: "strategy",
      icon: <FiTarget className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-lg" />,
      titleKey: "service-page.hero.areas.strategy",
      descKey: "service-page.hero.areas.strategyDesc",
      bgFrom: "teal",
      bgTo: "azul-profundo",
    },
    {
      key: "automation",
      icon: <FiZap className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-lg" />,
      titleKey: "service-page.hero.areas.automation",
      descKey: "service-page.hero.areas.automationDesc",
      bgFrom: "turquesa",
      bgTo: "verde-azulado",
    },
    {
      key: "innovation",
      icon: <FiStar className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-lg" />,
      titleKey: "service-page.hero.areas.innovation",
      descKey: "service-page.hero.areas.innovationDesc",
      bgFrom: "verde-azulado",
      bgTo: "azul-profundo",
    },
  ];

  return (
    <section className="services-hero-section relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/img/servicios/hero.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-azul-profundo/90 via-teal/80 to-verde-azulado/85 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-negro/70 via-transparent to-azul-profundo/50 z-15" />

      <div className="container relative z-20 w-full py-20">
        <div className="services-hero-content flex flex-col items-center justify-center min-h-[70vh]">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 pb-8">
            <div className="w-2 h-2 bg-turquesa rounded-full animate-pulse" />
            <span className="text-hielo font-semibold uppercase text-sm drop-shadow-lg">
              {t("service-page.eyebrow")}
            </span>
            <div className="w-2 h-2 bg-verde-azulado rounded-full animate-pulse delay-500" />
          </div>

          {/* Headline */}
          <h1 className="hero-title text-center text-blanco leading-[0.9] tracking-tight drop-shadow-2xl px-4 pb-8">
            <span className="block">
              <span className="services-hero-word-1 text-turquesa opacity-0 translate-y-24 block drop-shadow-xl">
                {t("service-page.hero.nuestros")}
              </span>
            </span>
            <span className="block">
              <span className="services-hero-word-2 bg-clip-text text-transparent bg-gradient-to-r from-turquesa to-verde-azulado opacity-0 translate-y-24 block drop-shadow-xl">
                {t("service-page.hero.servicios")}
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-large text-hielo leading-relaxed font-light drop-shadow-xl opacity-0 translate-y-12 px-4 pb-12 text-center">
            {t("service-page.hero.subtitle")}
          </p>

          {/* Areas grid */}
          <div className="services-hero-areas grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
            {areas.map((area, i) => (
              <div
                key={area.key}
                className="services-hero-area opacity-0 translate-y-20 flex flex-col items-center text-center"
                data-index={i}
              >
                <div
                  className={`services-hero-area-icon w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-${area.bgFrom} to-${area.bgTo} rounded-full flex items-center justify-center shadow-2xl scale-0`}
                >
                  {area.icon}
                </div>
                <h3 className={`text-lg md:text-xl font-bold text-${area.bgFrom} pt-6 pb-2 drop-shadow-lg`}>
                  {t(area.titleKey)}
                </h3>
                <p className="text-sm md:text-base text-hielo/90 drop-shadow-lg">
                  {t(area.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}