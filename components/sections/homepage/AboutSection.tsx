"use client";

import ValuePropCard from "@/components/ValuePropCard";
import { useTranslation } from "@/hooks/useTranslation";
import { FaRobot, FaHandshake } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import Image from "next/image";

export default function AboutSection() {
  const { t } = useTranslation();

  const valueProps = [
    {
      icon: <FaShuffle />,
      titleKey: "hero.organize",
      descriptionKey: "hero.organizeDesc",
    },
    {
      icon: <FaRobot />,
      titleKey: "hero.automate",
      descriptionKey: "hero.automateDesc",
    },
    {
      icon: <FaHandshake />,
      titleKey: "hero.connect",
      descriptionKey: "hero.connectDesc",
    },
  ];

  return (
    <section className="about-section section relative bg-gradient-to-br from-neutral-50 to-neutral-100">
      {/* Overflowing cards at the top */}
      <div className="absolute top-0 left-0 right-0 -translate-y-1/4 z-30">
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
      <div className="container pt-56">
        {/* Main heading section */}
        <div className="text-center mb-32">
          <h2 className="section-title text-primary-600 tracking-tight pb-12">
            {t("about.poeticHeading")}
          </h2>
          
          <div className="pb-12">
            <p className="text-large text-secondary-600 font-light">
              <span className="font-semibold text-secondary-900">
                {t("about.galagaAgency")}
              </span>{" "}
              <span className="text-secondary-700">
                {t("about.mainDescription")}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Content blocks - Use break-section class */}
      <div className="break-section space-y-12 lg:space-y-24">
        
        {/* First block: Text left, Image right */}
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0">
          {/* Text content with shadow shape - extends to left edge */}
          <div className="w-full lg:w-1/2 relative">
            <div className="bg-white/90 backdrop-blur-sm rounded-r-3xl lg:rounded-l-none p-8 lg:p-12 shadow-lg border border-primary-100/50 mx-4 lg:ml-0 lg:mr-16 lg:pl-[clamp(1rem,5vw,4rem)]">
              <div className="flex items-center space-x-4 pb-6">
                <h3 className="secondary-title text-primary-600">
                  {t("about.focusTitle")}
                </h3>
              </div>
              <p className="text-base text-secondary-700">
                {t("about.ourFocus")}
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center px-4 lg:px-16">
            <div className="w-full max-w-md aspect-square bg-primary-100 rounded-2xl flex items-center justify-center">
              <Image
                src="/assets/img/logos/logo-mobile.webp"
                alt="Galaga Agency"
                width={200}
                height={200}
                className="opacity-60"
              />
            </div>
          </div>
        </div>

        {/* Second block: Image left, Text right */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-0">
          {/* Text content with shadow shape - extends to right edge */}
          <div className="w-full lg:w-1/2 relative">
            <div className="bg-white/90 backdrop-blur-sm rounded-l-3xl lg:rounded-r-none p-8 lg:p-12 shadow-lg border border-secondary-100/50 mx-4 lg:mr-0 lg:ml-16 lg:pr-[clamp(1rem,5vw,4rem)]">
              <div className="flex items-center space-x-4 pb-6">
                <h3 className="secondary-title text-primary-600">
                  {t("about.offerTitle")}
                </h3>
              </div>
              <p className="text-base text-secondary-700">
                {t("about.whatWeOffer")}
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center px-4 lg:px-16">
            <div className="w-full max-w-md aspect-square bg-secondary-100 rounded-2xl flex items-center justify-center">
              <Image
                src="/assets/img/logos/logo-mobile.webp"
                alt="Galaga Agency"
                width={200}
                height={200}
                className="opacity-60"
              />
            </div>
          </div>
        </div>
        
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary-100 rounded-full opacity-30 blur-xl hidden lg:block"></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-secondary-200 rounded-full opacity-40 blur-lg hidden lg:block"></div>
    </section>
  );
}