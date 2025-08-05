"use client";

import ValuePropCard from "@/components/ValuePropCard";
import { useTranslation } from "@/hooks/useTranslation";
import { FaRobot, FaHandshake, FaLightbulb } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";

export default function HomepageAboutSection() {
  const { t } = useTranslation();

  const valueProps = [
    {
      icon: <FaShuffle />,
      titleKey: "hero.organize",
      descriptionKey: "hero.organizeDesc",
      use3DRobot: false,
    },
    {
      icon: <FaRobot />,
      titleKey: "hero.automate",
      descriptionKey: "hero.automateDesc",
      use3DRobot: true,
    },
    {
      icon: <FaHandshake />,
      titleKey: "hero.connect",
      descriptionKey: "hero.connectDesc",
      use3DRobot: false,
    },
  ];

  return (
    <section className="homepage-about-section section relative bg-gradient-to-br from-blanco to-hielo overflow-y-visible">
      {/* Diagonal background layers */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-hielo/40 via-turquesa/10 to-white"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 50%)",
          }}
        ></div>

        <div
          className="absolute inset-0 bg-gradient-to-br from-white via-hielo/20 to-white"
          style={{
            clipPath: "polygon(0 50%, 100% 70%, 100% 100%, 0 100%)",
          }}
        ></div>
      </div>

      {/* Overflowing cards */}
      <div className="absolute top-32 md:top-0 left-0 right-0 -translate-y-1/4 md:-translate-y-1/3 z-30 overflow-visible w-full">
        <div className="px-12 overflow-visible">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-visible">
            {valueProps.map((item, idx) => (
              <ValuePropCard
                key={idx}
                icon={item.icon}
                titleKey={item.titleKey}
                descriptionKey={item.descriptionKey}
                index={idx}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container pt-[850px] md:pt-56 lg:pt-48 relative z-10">
        <div className="text-center pb-12">
          <h2 className="section-title text-teal tracking-tight py-8">
            {t("homepage.about.poeticHeading")}
          </h2>

          <div className="px-4 md:px-8">
            <p className="text-large text-azul-profundo font-light leading-relaxed">
              <span className="font-semibold text-negro text-2xl">
                {t("homepage.about.galagaAgency")}
              </span>{" "}
              <span className="text-grafito text-xl">
                {t("homepage.about.mainDescription")}
              </span>
            </p>
          </div>
        </div>

        {/* First Block - Focus */}
        <div className="relative h-[500px] md:h-[450px] mb-32 md:mb-40 lg:mb-48">
          {/* Icon bubble */}
          <div className="absolute -top-6 left-4 md:left-0 z-30">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-lg border-2 border-turquesa bg-gradient-to-br from-hielo via-white to-hielo">
              <FaHandshake className="text-turquesa text-2xl md:text-4xl -rotate-12" />
            </div>
          </div>

          {/* Title bubble */}
          <div className="absolute top-4 left-[30vw] md:left-[14vw] lg:left-[13vw] -translate-x-1/2 z-20">
            <div className="w-40 h-40 md:w-52 md:h-52 lg:w-72 lg:h-72 rounded-full flex items-center justify-center text-center shadow-xl bg-gradient-to-br from-teal to-turquesa text-white p-6">
              <h3 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                {t("homepage.about.focusTitle")}
              </h3>
            </div>
          </div>

          {/* Description bubble */}
          <div className="absolute top-36 -right-6 md:-right-12 lg:-right-48 md:top-16 z-10">
            <div className="h-80 md:h-80 lg:h-72 w-auto md:w-[70vw] lg:w-[78vw] glass-effect border border-white/30 rounded-l-[3rem] shadow-xl px-8 flex items-center justify-center text-center">
              <p className="text-xl lg:text-2xl text-azul-profundo leading-relaxed max-w-4xl mx-auto">
                {t("homepage.about.ourFocus")}
              </p>
            </div>
          </div>
        </div>

        {/* Second Block - Offer */}
        <div className="relative h-[540px] md:h-[480px] mb-32 md:mb-40 lg:mb-48">
          {/* Description bubble */}
          <div className="absolute top-36 -left-6 md:-left-12 lg:-left-48 md:top-16 z-10">
            <div className="h-80 md:h-80 lg:h-72 w-auto md:w-[70vw] lg:w-[78vw] glass-effect border border-white/30 rounded-r-[3rem] shadow-xl px-8 flex items-center justify-center text-center">
              <p className="text-xl lg:text-2xl text-azul-profundo leading-relaxed max-w-4xl mx-auto text-left">
                {t("homepage.about.whatWeOffer")}
              </p>
            </div>
          </div>

          {/* Title bubble */}
          <div className="absolute top-4 right-[30vw] md:right-[16vw] lg:right-[13vw] translate-x-1/2 z-20">
            <div className="w-40 h-40 md:w-52 md:h-52 lg:w-72 lg:h-72 rounded-full flex items-center justify-center text-center shadow-xl bg-gradient-to-br from-teal to-turquesa text-white p-6">
              <h3 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                {t("homepage.about.offerTitle")}
              </h3>
            </div>
          </div>

          {/* Icon bubble */}
          <div className="absolute -top-6 right-4 md:right-8 z-30">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-lg border-2 border-turquesa bg-gradient-to-br from-hielo via-white to-hielo">
              <FaLightbulb className="text-turquesa text-2xl md:text-4xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
