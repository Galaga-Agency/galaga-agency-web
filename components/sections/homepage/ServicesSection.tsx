"use client";

import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

export default function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    {
      icon: "🎯",
      title: "services.strategy.title",
      description: "services.strategy.description",
      features: [
        "services.strategy.feature1",
        "services.strategy.feature2",
        "services.strategy.feature3",
      ],
      color: "primary",
    },
    {
      icon: "⚙️",
      title: "services.automation.title",
      description: "services.automation.description",
      features: [
        "services.automation.feature1",
        "services.automation.feature2",
        "services.automation.feature3",
      ],
      color: "accent",
    },
    {
      icon: "🚀",
      title: "services.innovation.title",
      description: "services.innovation.description",
      features: [
        "services.innovation.feature1",
        "services.innovation.feature2",
        "services.innovation.feature3",
      ],
      color: "creative",
    },
    {
      icon: "🎮",
      title: "services.immersive.title",
      description: "services.immersive.description",
      features: [
        "services.immersive.feature1",
        "services.immersive.feature2",
        "services.immersive.feature3",
      ],
      color: "primary",
    },
    {
      icon: "🎓",
      title: "services.training.title",
      description: "services.training.description",
      features: [
        "services.training.feature1",
        "services.training.feature2",
        "services.training.feature3",
      ],
      color: "accent",
    },
    {
      icon: "💰",
      title: "services.grants.title",
      description: "services.grants.description",
      features: [
        "services.grants.feature1",
        "services.grants.feature2",
        "services.grants.feature3",
      ],
      color: "creative",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary/5",
          border: "border-primary/20",
          text: "text-primary",
          hover: "hover:bg-primary/10",
          button: "bg-primary hover:bg-primary-dark",
        };
      case "accent":
        return {
          bg: "bg-accent/5",
          border: "border-accent/20",
          text: "text-accent",
          hover: "hover:bg-accent/10",
          button: "bg-accent hover:bg-accent-dark",
        };
      case "creative":
        return {
          bg: "bg-creative/5",
          border: "border-creative/20",
          text: "text-creative",
          hover: "hover:bg-creative/10",
          button: "bg-creative hover:bg-creative-dark",
        };
      default:
        return {
          bg: "bg-gray-50",
          border: "border-gray-200",
          text: "text-gray-700",
          hover: "hover:bg-gray-100",
          button: "bg-gray-600 hover:bg-gray-700",
        };
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gray-50">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            {t("services.title")}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 mb-16 lg:mb-20">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <div
                key={index}
                className={`bg-white p-8 lg:p-10 rounded-2xl border-2 ${colors.border} ${colors.hover} transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:scale-105`}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 lg:w-20 lg:h-20 ${colors.bg} rounded-2xl flex items-center justify-center text-2xl lg:text-3xl mb-6 shadow-sm`}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                  {t(service.title)}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t(service.description)}
                </p>

                {/* Features list */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-3 text-gray-600"
                    >
                      <div
                        className={`w-2 h-2 ${colors.bg} rounded-full mt-2 flex-shrink-0 shadow-sm`}
                      ></div>
                      <span className="leading-relaxed">{t(feature)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center bg-gradient-to-br from-white to-gray-50 p-8 md:p-12 lg:p-16 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            {t("services.cta.title")}
          </h3>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 lg:mb-12 leading-relaxed">
            {t("services.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="bg-primary text-white px-8 md:px-12 py-4 md:py-6 rounded-xl text-lg md:text-xl font-black hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg"
            >
              {t("services.cta.contact")}
            </Link>
            <Link
              href="/services"
              className="border-2 border-gray-300 text-gray-700 px-8 md:px-12 py-4 md:py-6 rounded-xl text-lg md:text-xl font-black hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 transform hover:-translate-y-1"
            >
              {t("services.cta.learnMore")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
