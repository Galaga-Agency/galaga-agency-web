"use client";

import ValuePropCard from "@/components/ValuePropCard";
import { useTranslation } from "@/hooks/useTranslation";
import { FaRobot, FaHandshake, FaLightbulb, FaGamepad, FaCode } from "react-icons/fa";
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
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-primary-300/10 rounded-full blur-2xl"></div>
      </div>

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
      <div className="container pt-56 relative z-10">
        {/* Main heading section */}
        <div className="text-center mb-24">
          <h2 className="section-title text-primary-600 tracking-tight pb-8">
            {t("about.poeticHeading")}
          </h2>
          
          <div>
            <p className="text-large text-secondary-600 font-light leading-relaxed">
              <span className="font-semibold text-secondary-900 text-2xl">
                {t("about.galagaAgency")}
              </span>{" "}
              <span className="text-secondary-700 text-xl">
                {t("about.mainDescription")}
              </span>
            </p>
          </div>

          {/* What makes us different - visual elements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
            <div className="group">
              <div className="bg-gradient-to-br from-primary-500/20 to-primary-600/30 rounded-3xl p-8 backdrop-blur-sm border border-primary-200/50 hover:scale-105 transition-all duration-500">
                <div className="mb-6">
                  <FaGamepad className="text-4xl text-primary-600 mx-auto group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-bold text-secondary-800 mb-3">Gaming DNA</h3>
                <p className="text-sm text-secondary-600">Traemos la creatividad y engagement del mundo gaming a tu negocio</p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-secondary-500/20 to-secondary-600/30 rounded-3xl p-8 backdrop-blur-sm border border-secondary-200/50 hover:scale-105 transition-all duration-500">
                <div className="mb-6">
                  <FaCode className="text-4xl text-secondary-600 mx-auto group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-bold text-secondary-800 mb-3">Tech que funciona</h3>
                <p className="text-sm text-secondary-600">Soluciones tecnológicas prácticas, no experimentos complicados</p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-primary-400/20 to-secondary-500/30 rounded-3xl p-8 backdrop-blur-sm border border-primary-100/50 hover:scale-105 transition-all duration-500">
                <div className="mb-6">
                  <FaLightbulb className="text-4xl text-primary-500 mx-auto group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-bold text-secondary-800 mb-3">100% Humano</h3>
                <p className="text-sm text-secondary-600">Enfoque personal y cercano, nada de respuestas automáticas</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced content blocks */}
      <div className="break-section relative z-10">
        
        {/* First block: Enhanced with visual elements */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0 mb-20">
          {/* Text content */}
          <div className="w-full lg:w-1/2 relative">
            <div className="bg-gradient-to-br from-white/95 to-primary-50/50 backdrop-blur-sm rounded-r-3xl lg:rounded-l-none p-12 lg:p-16 shadow-xl border border-primary-200/50 mx-4 lg:ml-0 lg:mr-16 lg:pl-[clamp(2rem,8vw,6rem)] relative overflow-hidden">
              {/* Floating elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-200/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary-200/30 rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 pb-8">
                  <div className="p-4 bg-primary-100 rounded-2xl">
                    <FaLightbulb className="text-3xl text-primary-600" />
                  </div>
                  <h3 className="secondary-title text-primary-600">
                    {t("about.focusTitle")}
                  </h3>
                </div>
                <p className="text-lg text-secondary-700 leading-relaxed">
                  {t("about.ourFocus")}
                </p>
              </div>
            </div>
          </div>
          
          {/* Enhanced image section */}
          <div className="w-full lg:w-1/2 flex justify-center px-4 lg:px-16">
            <div className="relative group">
              <div className="w-full max-w-lg aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-[3rem] flex items-center justify-center relative overflow-hidden shadow-2xl">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-300/20 to-secondary-300/20 group-hover:scale-110 transition-transform duration-700"></div>
                <Image
                  src="/assets/img/logos/logo-mobile.webp"
                  alt="Galaga Agency"
                  width={250}
                  height={250}
                  className="opacity-80 group-hover:scale-110 transition-transform duration-500 relative z-10"
                />
                {/* Floating particles */}
                <div className="absolute top-8 right-8 w-6 h-6 bg-white/40 rounded-full animate-pulse"></div>
                <div className="absolute bottom-12 left-12 w-4 h-4 bg-primary-400/60 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/3 left-8 w-3 h-3 bg-secondary-400/50 rounded-full animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Second block: Enhanced */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-0">
          {/* Enhanced text content */}
          <div className="w-full lg:w-1/2 relative">
            <div className="bg-gradient-to-bl from-white/95 to-secondary-50/50 backdrop-blur-sm rounded-l-3xl lg:rounded-r-none p-12 lg:p-16 shadow-xl border border-secondary-200/50 mx-4 lg:mr-0 lg:ml-16 lg:pr-[clamp(2rem,8vw,6rem)] relative overflow-hidden">
              {/* Floating elements */}
              <div className="absolute top-0 left-0 w-28 h-28 bg-secondary-200/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-primary-300/20 rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 pb-8">
                  <div className="p-4 bg-secondary-100 rounded-2xl">
                    <FaHandshake className="text-3xl text-secondary-600" />
                  </div>
                  <h3 className="secondary-title text-primary-600">
                    {t("about.offerTitle")}
                  </h3>
                </div>
                <p className="text-lg text-secondary-700 leading-relaxed">
                  {t("about.whatWeOffer")}
                </p>
              </div>
            </div>
          </div>
          
          {/* Enhanced second image */}
          <div className="w-full lg:w-1/2 flex justify-center px-4 lg:px-16">
            <div className="relative group">
              <div className="w-full max-w-lg aspect-square bg-gradient-to-br from-secondary-100 to-primary-200 rounded-[3rem] flex items-center justify-center relative overflow-hidden shadow-2xl">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-300/20 to-primary-300/30 group-hover:scale-110 transition-transform duration-700"></div>
                <Image
                  src="/assets/img/logos/logo-mobile.webp"
                  alt="Galaga Agency"
                  width={250}
                  height={250}
                  className="opacity-80 group-hover:scale-110 transition-transform duration-500 relative z-10"
                />
                {/* Different floating elements */}
                <div className="absolute top-12 left-8 w-5 h-5 bg-white/50 rounded-full animate-pulse delay-500"></div>
                <div className="absolute bottom-8 right-8 w-7 h-7 bg-secondary-400/50 rounded-full animate-pulse delay-1500"></div>
                <div className="absolute top-2/3 right-12 w-3 h-3 bg-primary-400/60 rounded-full animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}