"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function ServicesHeroSection() {
  const { t } = useTranslation();

  return (
    <section className="services-hero-section relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/img/servicios/hero.png')",
          backgroundPosition: "center center"
        }}
      ></div>

      {/* Multi-layer gradient overlay for perfect blend */}
      <div className="absolute inset-0 bg-gradient-to-br from-azul-profundo/85 via-teal/75 to-negro/80 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-negro/60 via-transparent to-azul-profundo/40 z-15"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-teal/30 via-transparent to-violeta/20 z-15"></div>

      {/* Background decorative elements - kept but more subtle */}
      <div className="absolute inset-0 z-18">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-turquesa/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-mandarina/8 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-white/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-20 w-full py-20">
        <div className="services-hero-content w-full flex flex-col justify-center items-center min-h-[70vh]">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 pb-8 md:pb-12">
            <div className="w-2 h-2 bg-turquesa rounded-full animate-pulse"></div>
            <span className="text-hielo font-semibold tracking-wider uppercase text-sm md:text-base drop-shadow-lg">
              {t("servicesPage.eyebrow")}
            </span>
            <div className="w-2 h-2 bg-mandarina rounded-full animate-pulse delay-500"></div>
          </div>

          {/* Main Headline */}
          <div className="text-center pb-8 md:pb-12 w-full">
            <h1 className="services-hero-title text-4xl md:text-6xl lg:text-8xl font-black text-blanco leading-[0.9] tracking-tight drop-shadow-2xl px-4">
              <span className="block pb-2 md:pb-4">
                <span className="text-turquesa services-hero-word-1 drop-shadow-xl">
                  {t("servicesPage.hero.nuestros")}
                </span>
              </span>
              <span className="block">
                <span className="bg-gradient-to-r from-mandarina via-naranja-tostado to-verde-azulado bg-clip-text text-transparent services-hero-word-2 drop-shadow-xl">
                  {t("servicesPage.hero.servicios")}
                </span>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="text-center pb-12 md:pb-16 w-full px-4">
            <p className="services-hero-subtitle text-lg md:text-2xl lg:text-3xl text-hielo leading-relaxed font-light drop-shadow-xl">
              {t("servicesPage.hero.subtitle")}
            </p>
          </div>

          {/* Key Service Areas */}
          <div className="services-hero-areas grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl">
            <div className="text-center services-hero-area" data-index="0">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-teal to-azul-profundo rounded-2xl flex items-center justify-center mx-auto pb-4 shadow-2xl">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-turquesa pb-2 drop-shadow-lg">
                {t("servicesPage.hero.areas.strategy")}
              </h3>
              <p className="text-sm md:text-base text-hielo/90 drop-shadow-lg">
                {t("servicesPage.hero.areas.strategyDesc")}
              </p>
            </div>
            
            <div className="text-center services-hero-area" data-index="1">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-mandarina to-naranja-tostado rounded-2xl flex items-center justify-center mx-auto pb-4 shadow-2xl">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-mandarina pb-2 drop-shadow-lg">
                {t("servicesPage.hero.areas.automation")}
              </h3>
              <p className="text-sm md:text-base text-hielo/90 drop-shadow-lg">
                {t("servicesPage.hero.areas.automationDesc")}
              </p>
            </div>

            <div className="text-center services-hero-area" data-index="2">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-violeta to-azul-profundo rounded-2xl flex items-center justify-center mx-auto pb-4 shadow-2xl">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-violeta pb-2 drop-shadow-lg">
                {t("servicesPage.hero.areas.innovation")}
              </h3>
              <p className="text-sm md:text-base text-hielo/90 drop-shadow-lg">
                {t("servicesPage.hero.areas.innovationDesc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}