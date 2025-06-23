"use client";

import ValuePropCard from "@/components/ValuePropCard";
import { useTranslation } from "@/hooks/useTranslation";
import { FaRobot, FaHandshake, FaLightbulb } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import Image from "next/image";

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
    <section className="homepage-about-section section relative bg-gradient-to-br from-blanco to-hielo ">
      {/* Diagonal background layers */}
      <div className="absolute inset-0">
        {/* Top diagonal - Subtle teal light */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-hielo/40 via-turquesa/10 to-white"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 50%)"
          }}
        ></div>
        
        {/* Bottom diagonal - Pure white */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-white via-hielo/20 to-white"
          style={{
            clipPath: "polygon(0 50%, 100% 70%, 100% 100%, 0 100%)"
          }}
        ></div>
      </div>

      {/* Overflowing cards at the top */}
      <div className="absolute top-32 md:top-0 left-0 right-0 -translate-y-1/4 md:-translate-y-1/3 z-30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
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
      <div className="container pt-[750px] md:pt-56 lg:pt-48 relative z-10">
        {/* Main heading section */}
        <div className="text-center pb-16 md:pb-20 lg:pb-24">
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

        {/* Content blocks */}
        <div className="relative">

          {/* First block content */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-start py-0">
            <div className="px-4 md:px-0">
              <div className="flex items-center gap-6 pb-6">
                <div className="p-5 bg-turquesa/20 rounded-2xl flex-shrink-0">
                  <FaLightbulb className="lightbulb-icon text-3xl md:text-4xl lg:text-5xl text-teal" />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-teal leading-tight">
                  {t("homepage.about.focusTitle")}
                </h3>
              </div>
              <p className="text-lg md:text-xl lg:text-2xl text-grafito leading-relaxed">
                {t("homepage.about.ourFocus")}
              </p>
            </div>
            <div className="hidden md:block"></div>
          </div>
        </div>

        {/* Second block */}
        <div className="relative pt-16 md:pt-20 lg:pt-24">
          {/* Background single chevron */}
          <div className="absolute top-8 md:top-12 lg:top-4 -left-24 pointer-events-none z-0">
            <Image
              src="/assets/img/symbols/single-chevron.png"
              alt="Single Chevron"
              width={500}
              height={500}
              className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px]"
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-start">
            <div className="hidden md:block md:order-1"></div>
            
            <div className="md:order-2 px-4 md:px-0">
              <div className="flex items-center gap-6 pb-10">
                <div className="p-5 bg-mandarina/20 rounded-2xl flex-shrink-0">
                  <FaHandshake className="handshake-icon text-3xl md:text-4xl lg:text-5xl text-naranja-tostado" />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-teal leading-tight">
                  {t("homepage.about.offerTitle")}
                </h3>
              </div>
              <p className="text-lg md:text-xl lg:text-2xl text-grafito leading-relaxed">
                {t("homepage.about.whatWeOffer")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}