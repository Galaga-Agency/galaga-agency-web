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
        {/* Top diagonal - Subtle teal light */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-hielo/40 via-turquesa/10 to-white"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 50%)",
          }}
        ></div>

        {/* Bottom diagonal - Pure white */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-white via-hielo/20 to-white"
          style={{
            clipPath: "polygon(0 50%, 100% 70%, 100% 100%, 0 100%)",
          }}
        ></div>
      </div>

      {/* Overflowing cards at the top */}
      <div className="absolute top-32 md:top-0 left-0 right-0 -translate-y-1/4 md:-translate-y-1/3 z-30 overflow-visible w-full">
        <div className="px-12 overflow-visible">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-visible ">
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
        {/* Main heading section */}
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

        {/* First Block - Focus - Horizontal layout */}
        <div className="relative h-[500px] md:h-96 mb-32 md:mb-40 lg:mb-48">
          {/* Icon bubble */}
          <div className="absolute -top-4 left-4 md:left-8 z-30">
            <div className="shadow-lg w-20 h-20 md:w-24 md:h-24 bg-azul-profundo rounded-full flex items-center justify-center">
              <FaHandshake className="text-turquesa text-3xl -rotate-12 md:text-5xl" />
            </div>
          </div>

          {/* Title bubble - center, overlapping with icon */}
          <div className="absolute top-2 left-[30vw] md:left-[20vw] lg:left-[13vw] lg:-top-4 -translate-x-1/2 md:top-8 z-20">
            <div className="shadow-lg w-36 h-36 md:w-48 md:h-48 lg:w-72 lg:h-72 bg-turquesa rounded-full flex items-center justify-center text-center">
              <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white px-8">
                {t("homepage.about.focusTitle")}
              </h3>
            </div>
          </div>

          {/* Description bubble - right side, overlapping with title */}
          <div className="absolute top-28 -right-6 md:-right-12 lg:-right-48 md:top-16 z-10">
            <div className="shadow-lg w-auto h-80 md:w-[70vw] md:h-80 lg:w-[78vw] lg:h-72 bg-white/20 backdrop-blur-md border border-white/30 rounded-l-3xl flex items-center justify-center text-center">
              <p className="text-xl lg:text-2xl text-azul-profundo text-right lg:max-w-[85%] leading-relaxed px-8">
                {t("homepage.about.ourFocus")}
              </p>
            </div>
          </div>
        </div>

        {/* Second Block - Offer - Horizontal layout (mirrored) */}
        <div className="relative h-[500px] md:h-96 mb-32 md:mb-40 lg:mb-48">
          {/* Description bubble - left side */}
          <div className="absolute top-28 -left-6 md:-left-12 lg:-left-48 md:top-16 z-10">
            <div className="shadow-lg w-auto h-80 md:w-[70vw] md:h-80 lg:w-[78vw] lg:h-72 bg-white/20 backdrop-blur-md border border-white/30 rounded-r-3xl flex items-center justify-center text-center">
              <p className="text-xl lg:text-2xl text-azul-profundo text-left lg:max-w-[85%] leading-relaxed px-8">
                {t("homepage.about.whatWeOffer")}
              </p>
            </div>
          </div>

          {/* Title bubble - center, overlapping with description */}
          <div className="absolute top-2 right-[30vw] md:right-[20vw] lg:right-[13vw] lg:-top-4 translate-x-1/2 md:top-8 z-20">
            <div className="shadow-lg w-36 h-36 md:w-48 md:h-48 lg:w-72 lg:h-72 bg-teal rounded-full flex items-center justify-center text-center">
              <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white px-8">
                {t("homepage.about.offerTitle")}
              </h3>
            </div>
          </div>

          {/* Icon bubble - right side, overlapping with title */}
          <div className="absolute -top-4 right-4 md:right-8 z-30">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-azul-profundo rounded-full flex items-center justify-center">
              <FaLightbulb className="text-turquesa text-2xl md:text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}