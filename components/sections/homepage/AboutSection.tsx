"use client";

import ValuePropCard from "@/components/ValuePropCard";
import { useTranslation } from "@/hooks/useTranslation";
import { FaRobot, FaHandshake } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";

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
    <section className="about-section  relative bg-gradient-to-br from-neutral-50 to-neutral-100">
      <div className="section-container">
        {/* Overflowing cards at the top - properly centered */}
        <div className="absolute top-0 left-0 right-0 -translate-y-1/4 -translatex-1/2 z-30">
          <div className=" px-4 lg:px-8">
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

        {/* Main content - now properly centered */}
        <div className="w-full pt-48 pb-24 ">
          {/* Hero heading section */}
          <div className="text-center mb-20 lg:mb-28">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-600 leading-tight tracking-tight mb-8">
              {t("about.poeticHeading")}
            </h2>

            {/* Description with proper centering */}
            <div className="max-w-5xl mx-auto">
              <p className="text-lg sm:text-xl lg:text-2xl text-secondary-600 leading-relaxed">
                <span className="font-semibold text-secondary-900">
                  {t("about.galagaAgency")}
                </span>{" "}
                <span className="text-secondary-700">
                  {t("about.mainDescription")}
                </span>
              </p>
            </div>
          </div>

          {/* Two-column content section */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left column - Our Focus */}
              <div className="space-y-6 text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-primary-600 leading-tight">
                  {t("about.focusTitle")}
                </h3>
                <p className="text-base lg:text-lg text-secondary-700 leading-relaxed">
                  {t("about.ourFocus")}
                </p>
              </div>

              {/* Right column - Our Offer */}
              <div className="space-y-6 text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-primary-600 leading-tight">
                  {t("about.offerTitle")}
                </h3>
                <p className="text-base lg:text-lg text-secondary-700 leading-relaxed">
                  {t("about.whatWeOffer")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle decorative elements */}
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary-100 rounded-full opacity-30 blur-xl hidden lg:block"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-secondary-200 rounded-full opacity-40 blur-lg hidden lg:block"></div>
      </div>
    </section>
  );
}
