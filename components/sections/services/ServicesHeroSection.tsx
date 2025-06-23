"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { FiTarget, FiZap, FiStar, FiChevronDown } from "react-icons/fi";

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
      bgFrom: "mandarina",
      bgTo: "naranja-tostado",
    },
    {
      key: "innovation",
      icon: <FiStar className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-lg" />,
      titleKey: "service-page.hero.areas.innovation",
      descKey: "service-page.hero.areas.innovationDesc",
      bgFrom: "violeta",
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
      <div className="absolute inset-0 bg-gradient-to-br from-azul-profundo/85 via-teal/75 to-negro/80 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-negro/60 via-transparent to-azul-profundo/40 z-15" />
      <div className="absolute inset-0 bg-gradient-to-r from-teal/30 via-transparent to-violeta/20 z-15" />

      {/* Decorative orbs */}
      <div className="absolute inset-0 z-18">
        <div className="services-hero-bg-top absolute top-1/4 right-1/3 w-96 h-96 bg-turquesa/10 rounded-full blur-3xl animate-pulse" />
        <div className="services-hero-bg-bottom absolute bottom-1/3 left-1/4 w-80 h-80 bg-mandarina/8 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-white/3 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-20 w-full py-20">
        <div className="services-hero-content flex flex-col items-center justify-center min-h-[70vh]">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 pb-8">
            <div className="w-2 h-2 bg-turquesa rounded-full animate-pulse" />
            <span className="text-hielo font-semibold uppercase text-sm drop-shadow-lg">
              {t("service-page.eyebrow")}
            </span>
            <div className="w-2 h-2 bg-mandarina rounded-full animate-pulse delay-500" />
          </div>

          {/* Headline */}
          <h1 className="services-hero-title text-center text-4xl md:text-6xl lg:text-8xl font-black text-blanco leading-[0.9] tracking-tight drop-shadow-2xl px-4 pb-8">
            <span className="block">
              <span className="services-hero-word-1 text-turquesa opacity-0 translate-y-24 block drop-shadow-xl">
                {t("service-page.hero.nuestros")}
              </span>
            </span>
            <span className="block">
              <span className="services-hero-word-2 bg-clip-text text-transparent bg-gradient-to-r from-mandarina via-naranja-tostado to-verde-azulado opacity-0 translate-y-24 block drop-shadow-xl">
                {t("service-page.hero.servicios")}
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="services-hero-subtitle text-center text-lg md:text-2xl lg:text-3xl text-hielo leading-relaxed font-light drop-shadow-xl opacity-0 translate-y-12 px-4 pb-12">
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
                  className={`services-hero-area-icon w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-${area.bgFrom} to-${area.bgTo} rounded-2xl flex items-center justify-center shadow-2xl scale-0`}
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
