"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";

export default function MarketingInmersivoProcessSection() {
  const { t } = useTranslation();

  const processSteps = [
    {
      number: "01",
      title: "service-details-pages.immersive-marketing.process.briefing.title",
      description:
        "service-details-pages.immersive-marketing.process.briefing.description",
      color: "violeta",
      image: "/assets/img/servicios/immersive-marketing/briefing.png",
      backgroundShapes: (
        <>
          <div className="absolute top-12 left-16">
            <div className="w-24 h-24 rounded-full bg-bg-teal/10"></div>
          </div>
          <div className="absolute top-1/3 right-20">
            <div className="w-40 h-40 rounded-full bg-teal/30"></div>
          </div>
          <div className="absolute bottom-20 left-1/3">
            <div className="w-16 h-16 rounded-full bg-teal/20"></div>
          </div>
          <div className="absolute top-2/3 right-1/4">
            <div className="w-28 h-28 rounded-full bg-teal/30"></div>
          </div>
        </>
      ),
    },
    {
      number: "02",
      title:
        "service-details-pages.immersive-marketing.process.creative-concept.title",
      description:
        "service-details-pages.immersive-marketing.process.creative-concept.description",
      color: "mandarina",
      image: "/assets/img/servicios/immersive-marketing/design.png",
      backgroundShapes: (
        <>
          <div className="absolute top-8 left-8">
            <div className="w-32 h-32 rounded-full bg-teal/20"></div>
          </div>
          <div className="absolute bottom-16 right-12">
            <div className="w-48 h-48 rounded-full bg-teal/30"></div>
          </div>
          <div className="absolute top-1/2 left-2/3">
            <div className="w-20 h-20 rounded-full bg-teal/20"></div>
          </div>
          <div className="absolute top-20 right-1/3">
            <div className="w-36 h-36 rounded-full bg-teal/30"></div>
          </div>
          <div className="absolute bottom-1/3 left-12">
            <div className="w-12 h-12 rounded-full bg-teal/20"></div>
          </div>
        </>
      ),
    },
    {
      number: "03",
      title:
        "service-details-pages.immersive-marketing.process.technical-design.title",
      description:
        "service-details-pages.immersive-marketing.process.technical-design.description",
      color: "azul-profundo",
      image: "/assets/img/servicios/immersive-marketing/conceptualization.png",
      backgroundShapes: (
        <>
          <div className="absolute top-16 right-8">
            <div className="w-44 h-44 rounded-full bg-teal/30"></div>
          </div>
          <div className="absolute bottom-12 left-16">
            <div className="w-28 h-28 rounded-full bg-teal/20"></div>
          </div>
          <div className="absolute top-1/3 left-1/2">
            <div className="w-16 h-16 rounded-full bg-teal/20"></div>
          </div>
          <div className="absolute bottom-1/4 right-1/3">
            <div className="w-52 h-52 rounded-full bg-teal/30"></div>
          </div>
          <div className="absolute top-2/3 left-8">
            <div className="w-20 h-20 rounded-full bg-teal/20"></div>
          </div>
          <div className="absolute top-12 left-1/3">
            <div className="w-8 h-8 rounded-full bg-teal/20"></div>
          </div>
        </>
      ),
    },
    {
      number: "04",
      title:
        "service-details-pages.immersive-marketing.process.implementation.title",
      description:
        "service-details-pages.immersive-marketing.process.implementation.description",
      color: "teal",
      image: "/assets/img/servicios/immersive-marketing/implementation.png",
      backgroundShapes: (
        <>
          <div className="absolute top-8 right-24">
            <div className="w-36 h-36 rounded-full bg-teal/20"></div>
          </div>
          <div className="absolute bottom-8 left-8">
            <div className="w-56 h-56 rounded-full bg-teal/30"></div>
          </div>
          <div className="absolute top-1/2 right-8">
            <div className="w-24 h-24 rounded-full bg-teal/20"></div>
          </div>
          <div className="absolute top-24 left-1/3">
            <div className="w-12 h-12 rounded-full bg-teal/20"></div>
          </div>
          <div className="absolute bottom-1/3 right-1/2">
            <div className="w-32 h-32 rounded-full bg-teal/30"></div>
          </div>
        </>
      ),
    },
    {
      number: "05",
      title:
        "service-details-pages.immersive-marketing.process.optimization.title",
      description:
        "service-details-pages.immersive-marketing.process.optimization.description",
      color: "turquesa",
      image: "/assets/img/servicios/immersive-marketing/optimization.png",
      backgroundShapes: (
        <>
          <div className="absolute top-4 left-20">
            <div className="w-20 h-20 rounded-full bg-teal/20"></div>
          </div>
          <div className="absolute top-20 right-12">
            <div className="w-32 h-32 rounded-full bg-teal/30"></div>
          </div>
          <div className="absolute top-40 left-8">
            <div className="w-16 h-16 rounded-full bg-teal/20"></div>
          </div>
          <div className="absolute bottom-16 right-20">
            <div className="w-40 h-40 rounded-full bg-teal/30"></div>
          </div>
          <div className="absolute bottom-8 left-1/2">
            <div className="w-60 h-60 rounded-full bg-teal/20"></div>
          </div>
          <div className="absolute top-1/2 right-1/3">
            <div className="w-24 h-24 rounded-full bg-teal/30"></div>
          </div>
          <div className="absolute bottom-1/3 left-1/4">
            <div className="w-8 h-8 rounded-full bg-teal/20"></div>
          </div>
        </>
      ),
    },
  ];

  const colorThemes = {
    violeta: {
      numberBg: "bg-purple-gradient",
      titleText: "text-violeta",
    },
    mandarina: {
      numberBg: "bg-orange-gradient",
      titleText: "text-mandarina",
    },
    "azul-profundo": {
      numberBg: "bg-darkblue-gradient",
      titleText: "text-azul-profundo",
    },
    teal: {
      numberBg: "bg-teal-gradient",
      titleText: "text-teal",
    },
    turquesa: {
      numberBg: "bg-skyblue-gradient",
      titleText: "text-turquesa",
    },
  };

  return (
    <section className="marketing-inmersivo-process-section bg-transparent relative overflow-x-hidden md:overflow-visible">
      <div className="horizontal-scroll-container">
        {/* Section Header - Animated entrance */}
        <div className="pt-16 md:pt-28">
          <div className="text-center">
            <span className="text-teal font-medium tracking-wider uppercase text-sm pb-6 block fade-in-up opacity-0">
              {t("service-details-pages.immersive-marketing.process.eyebrow")}
            </span>

            <h2 className="section-title text-teal leading-tight pb-8 slide-in-up opacity-0">
              {t("service-details-pages.immersive-marketing.process.title")}
            </h2>

            <p className="text-lg md:text-xl text-negro leading-relaxed px-4 bounce-in-up opacity-0">
              {t("service-details-pages.immersive-marketing.process.subtitle")}
            </p>
          </div>
        </div>

        {/* Mobile: Vertical Stack | Desktop: Horizontal Scroll */}
        <div className="md:hidden">
          {/* Mobile Layout - Staggered animations */}
          <div className="flex flex-col gap-16 px-4 py-8">
            {processSteps.map((step, index) => {
              const theme = colorThemes[step.color as keyof typeof colorThemes];

              return (
                <div key={index} className="relative mb-16 stagger-bounce-in-up opacity-0">
                  {/* Decorative background shapes */}
                  <div className="absolute inset-0 -z-10 opacity-40">
                    {step.backgroundShapes}
                  </div>

                  <div className="relative z-10 flex flex-col gap-6">
                    {/* Step Header */}
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-16 h-16 ${theme.numberBg} rounded-full flex items-center justify-center shadow-xl flex-shrink-0`}
                      >
                        <span className="text-blanco font-black text-xl">
                          {step.number}
                        </span>
                      </div>
                      <h3
                        className={`text-xl font-bold ${theme.titleText} leading-tight flex-1`}
                      >
                        {t(step.title)}
                      </h3>
                    </div>

                    {/* Step Image */}
                    <div className="relative">
                      <div className="relative w-full aspect-[1/1] rounded-xl overflow-visible">
                        <Image
                          src={step.image}
                          alt={t(step.title)}
                          fill
                          className="object-cover opacity-80"
                        />
                      </div>
                    </div>

                    {/* Step Description */}
                    <p className="text-base text-negro leading-relaxed">
                      {t(step.description)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop Layout - Individual step animations */}
        <div className="hidden md:block">
          <div className="relative h-auto overflow-visible py-16">
            <div className="horizontal-scroll-wrapper flex items-center h-full">
              {processSteps.map((step, index) => {
                const theme =
                  colorThemes[step.color as keyof typeof colorThemes];

                // Alternate animation patterns for variety
                const animations = [
                  "fade-in-left", // Step 1
                  "fade-in-right", // Step 2  
                  "drift-right", // Step 3
                  "drift-left", // Step 4
                  "bounce-in-up", // Step 5
                ];

                return (
                  <div
                    key={index}
                    className={`process-item flex-shrink-0 w-screen h-full flex items-center justify-center px-8 md:px-16 relative ${animations[index]} opacity-0`}
                  >
                    {/* Decorative background shapes */}
                    <div className="absolute inset-0 -z-10 opacity-40">
                      {step.backgroundShapes}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full max-w-6xl relative z-10">
                      {/* Content */}
                      <div className="process-content px-4 lg:px-0">
                        <div className="flex items-center gap-6 pb-8">
                          {/* Step Number */}
                          <div
                            className={`w-20 h-20 md:w-24 md:h-24 ${theme.numberBg} rounded-full flex items-center justify-center shadow-xl flex-shrink-0`}
                          >
                            <span className="text-blanco font-black text-2xl md:text-3xl">
                              {step.number}
                            </span>
                          </div>

                          {/* Step Title */}
                          <div className="flex-1">
                            <h3
                              className={`text-2xl md:text-4xl font-bold ${theme.titleText} leading-tight`}
                            >
                              {t(step.title)}
                            </h3>
                          </div>
                        </div>

                        {/* Step Description */}
                        <div className="pl-0">
                          <p className="text-lg md:text-xl text-negro leading-relaxed">
                            {t(step.description)}
                          </p>
                        </div>
                      </div>

                      {/* Visual */}
                      <div className="process-image px-4 lg:px-0 overflow-visible">
                        <div className="relative">
                          <div className="relative w-[90%] aspect-[1/1] rounded-2xl overflow-visible">
                            <Image
                              src={step.image}
                              alt={t(step.title)}
                              fill
                              className="object-cover opacity-80"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}