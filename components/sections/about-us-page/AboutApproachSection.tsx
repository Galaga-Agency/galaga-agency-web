"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { FaUser, FaCog, FaClock } from "react-icons/fa";
import ApproachCard from "./ApproachCard";

export default function AboutApproachSection() {
  const { t } = useTranslation();

  const approaches = [
    {
      icon: <FaUser className="w-8 h-8 md:w-10 md:h-10" />,
      titleKey: "about-page.approach.human.title",
      descriptionKey: "about-page.approach.human.description",
      color: "teal" as const
    },
    {
      icon: <FaCog className="w-8 h-8 md:w-10 md:h-10" />,
      titleKey: "about-page.approach.practical.title", 
      descriptionKey: "about-page.approach.practical.description",
      color: "orange" as const
    },
    {
      icon: <FaClock className="w-8 h-8 md:w-10 md:h-10" />,
      titleKey: "about-page.approach.longterm.title",
      descriptionKey: "about-page.approach.longterm.description",
      color: "purple" as const
    }
  ];

  return (
    <section className="about-approach-section relative bg-gradient-to-br from-slate-900 via-slate-800 to-black overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-orange-500/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center pb-16 md:pb-20">
          <div className="inline-flex items-center gap-3 pb-6">
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300 font-semibold tracking-wider uppercase text-sm">
              {t("about-page.approach.eyebrow")}
            </span>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
          </div>
          
          <h2 className="about-approach-title text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight pb-6">
            {t("about-page.approach.title")}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed px-4">
            {t("about-page.approach.subtitle")}
          </p>
        </div>

        {/* Approach Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {approaches.map((approach, index) => (
            <ApproachCard
              key={index}
              icon={approach.icon}
              titleKey={approach.titleKey}
              descriptionKey={approach.descriptionKey}
              color={approach.color}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="text-center pt-16 md:pt-20">
          <blockquote className="about-approach-quote text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 leading-relaxed italic px-4">
            <span className="text-teal-400 font-semibold">"</span>
            {t("about-page.approach.quote")}
            <span className="text-orange-400 font-semibold">"</span>
          </blockquote>
          <div className="flex justify-center pt-8">
            <div className="flex items-center gap-4">
              <div className="quote-line w-12 h-0.5 bg-gradient-to-r from-transparent to-teal-400"></div>
              <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
              <div className="quote-line w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-400"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}