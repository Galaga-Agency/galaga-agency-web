"use client";

import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      icon: "🎯",
      title: "key.services.strategy.title",
      description: "key.services.strategy.description",
      features: [
        "key.services.strategy.feature1",
        "key.services.strategy.feature2",
        "key.services.strategy.feature3",
      ],
      color: "primary",
    },
    {
      icon: "⚙️",
      title: "key.services.automation.title",
      description: "key.services.automation.description",
      features: [
        "key.services.automation.feature1",
        "key.services.automation.feature2",
        "key.services.automation.feature3",
      ],
      color: "accent",
    },
    {
      icon: "🚀",
      title: "key.services.innovation.title",
      description: "key.services.innovation.description",
      features: [
        "key.services.innovation.feature1",
        "key.services.innovation.feature2",
        "key.services.innovation.feature3",
      ],
      color: "creative",
    },
    {
      icon: "🎮",
      title: "key.services.immersive.title",
      description: "key.services.immersive.description",
      features: [
        "key.services.immersive.feature1",
        "key.services.immersive.feature2",
        "key.services.immersive.feature3",
      ],
      color: "primary",
    },
    {
      icon: "🎓",
      title: "key.services.training.title",
      description: "key.services.training.description",
      features: [
        "key.services.training.feature1",
        "key.services.training.feature2",
        "key.services.training.feature3",
      ],
      color: "accent",
    },
    {
      icon: "💰",
      title: "key.services.grants.title",
      description: "key.services.grants.description",
      features: [
        "key.services.grants.feature1",
        "key.services.grants.feature2",
        "key.services.grants.feature3",
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
        };
      case "accent":
        return {
          bg: "bg-accent/5",
          border: "border-accent/20",
          text: "text-accent",
          hover: "hover:bg-accent/10",
        };
      case "creative":
        return {
          bg: "bg-creative/5",
          border: "border-creative/20",
          text: "text-creative",
          hover: "hover:bg-creative/10",
        };
      default:
        return {
          bg: "bg-gray-50",
          border: "border-gray-200",
          text: "text-gray-700",
          hover: "hover:bg-gray-100",
        };
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              key.services.title
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              key.services.subtitle
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color);
              return (
                <div
                  key={index}
                  className={`bg-white p-8 rounded-xl border-2 ${colors.border} ${colors.hover} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                >
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center text-2xl mb-6`}
                  >
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  {/* Features list */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-2 text-sm text-gray-600"
                      >
                        <div
                          className={`w-1.5 h-1.5 ${colors.bg} rounded-full mt-2 flex-shrink-0`}
                        ></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Call to action */}
          <div className="text-center bg-white p-8 md:p-12 rounded-xl shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              key.services.cta.title
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              key.services.cta.description
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-300"
              >
                key.services.cta.contact
              </Link>
              <Link
                href="/services"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-primary hover:text-primary transition-colors duration-300"
              >
                key.services.cta.learnMore
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
