"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";
import ServiceCTASection from "../ServiceCTASection";

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

  // Different blob shapes for variety
  const blobShapes = [
    // Blob 1 - Rounded organic
    "M150,-260C220,-220,300,-140,300,-50C300,40,220,120,150,180C80,240,20,280,-60,280C-140,280,-240,240,-270,170C-300,100,-260,0,-210,-80C-160,-160,-100,-220,-20,-260C60,-300,120,-300,150,-260Z",
    // Blob 2 - Flowing wave
    "M180,-200C240,-160,300,-80,280,0C260,80,160,160,60,180C-40,200,-140,160,-200,80C-260,0,-280,-120,-220,-180C-160,-240,-80,-280,0,-260C80,-240,120,-240,180,-200Z",
    // Blob 3 - Angular modern
    "M200,-180C250,-120,280,-40,260,20C240,80,180,120,100,140C20,160,-80,160,-160,120C-240,80,-300,0,-280,-80C-260,-160,-160,-240,-60,-240C40,-240,150,-240,200,-180Z",
    // Blob 4 - Smooth curves
    "M160,-220C200,-180,220,-120,220,-60C220,0,200,60,160,100C120,140,60,160,0,160C-60,160,-120,140,-160,100C-200,60,-220,0,-220,-60C-220,-120,-200,-180,-160,-220C-120,-260,-60,-280,0,-280C60,-280,120,-260,160,-220Z",
    // Blob 5 - Elongated flowing
    "M220,-160C280,-100,320,-20,300,60C280,140,200,200,100,220C0,240,-120,220,-200,160C-280,100,-320,0,-300,-100C-280,-200,-200,-280,-100,-300C0,-320,120,-300,220,-160Z",
  ];

  return (
    <section className="horizontal-scroll-container marketing-inmersivo-process-section bg-gradient-to-br from-blanco via-hielo/20 to-blanco relative overflow-visible">
      {/* Diagonal background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-hielo/50 via-turquesa/20 to-blanco"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blanco via-hielo/30 to-blanco"></div>
      </div>

      {/* Section Header - Fixed */}
      <div className="pt-16 md:pt-28">
        <div className="text-center">
          <span className="text-teal font-medium tracking-wider uppercase text-sm pb-6 block">
            {t("service-details-pages.immersive-marketing.process.eyebrow")}
          </span>

          <h2 className="section-title text-teal leading-tight pb-8">
            {t("service-details-pages.immersive-marketing.process.title")}
          </h2>

          <p className="text-lg md:text-xl text-negro leading-relaxed px-4">
            {t("service-details-pages.immersive-marketing.process.subtitle")}
          </p>
        </div>
      </div>

      {/* Mobile: Vertical Stack | Desktop: Horizontal Scroll */}
      <div className="md:hidden">
        {/* Mobile Layout - Vertical Stack */}
        <div className="flex flex-col gap-16 px-4 py-8">
          {processSteps.map((step, index) => {
            const theme = colorThemes[step.color as keyof typeof colorThemes];

            return (
              <div key={index} className="relative mb-16">
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

      {/* Desktop Layout - Horizontal Scroll */}
      <div className="hidden md:block">
        <div className="relative h-auto overflow-visible py-16">
          <div className="horizontal-scroll-wrapper flex items-center h-full">
            {processSteps.map((step, index) => {
              const theme = colorThemes[step.color as keyof typeof colorThemes];

              return (
                <div
                  key={index}
                  className="process-item flex-shrink-0 w-screen h-full flex items-center justify-center px-8 md:px-16 relative"
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

                    {/* Visual - Frame with image */}
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
      <ServiceCTASection serviceKey="immersive-marketing" />
    </section>
  );
}