"use client";

import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import ValuePropCard from "@/components/ValuePropCard";
import MetricCard from "@/components/MetricCard";
import { FaRobot } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";

const valueProps = [
  {
    icon: <FaShuffle/>,
    titleKey: "hero.organize",
    descriptionKey: "hero.organizeDesc",
    delay: 0.4 // Left - third
  },
  {
    icon: <FaRobot/>, 
    titleKey: "hero.automate",
    descriptionKey: "hero.automateDesc",
    delay: 0 // Middle - first
  },
  {
    icon: <FaHandshake/>,
    titleKey: "hero.connect", 
    descriptionKey: "hero.connectDesc",
    delay: 0.2 // Right - second
  }
];

const metrics = [
  { value: "100+", labelKey: "hero.companiesTransformed" },
  { value: "35+", labelKey: "hero.yearsExperience" },
  { value: "24h", labelKey: "hero.guaranteedResponse" },
  { value: "100%", labelKey: "hero.humanApproach" }
];

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="section relative min-h-screen bg-gradient-to-br from-primary to-accent overflow-hidden">
                     
      {/* Trust Badge */}
      <div className="text-center pb-8">
        <span className="inline-block bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-semibold border border-white/30">
          🚀  {t("hero.trustedBy")} 100+ {t("hero.companies")}
        </span>
      </div>

      {/* Main Headline */}
      <div className="text-center pb-20">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter">
          <span className="block mb-8">
            <span data-anim="transformamos">{t("hero.transformamos")}</span>{" "}
            <span data-anim="negocios">{t("hero.negocios")}</span>
          </span>
          <span className="block">
            <span data-anim="sinComplicaciones">{t("hero.sinComplicaciones")}</span>
          </span>
        </h1>
      </div>

      {/* Subtitle */}
      <div className="text-center pb-16">
        <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 leading-relaxed font-medium">
          {t("hero.subtitle")}
        </p>
      </div>

      {/* Value Proposition Cards */}
      <div className="pb-16 mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8">
          {valueProps.map((item, index) => (
            <ValuePropCard 
              key={index}
              icon={item.icon}
              titleKey={item.titleKey}
              descriptionKey={item.descriptionKey}
              index={index}
              delay={item.delay}
            />
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="text-center pb-16">
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
          <Link
            href="/contact"
            className="bg-white text-primary px-16 py-6 rounded-2xl text-2xl font-black hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-110 shadow-xl"
          >
            🚀 {t("hero.startTransformation")}
          </Link>
          <Link
            href="/about"
            className="border-4 border-white/50 text-white px-16 py-6 rounded-2xl text-2xl font-black hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-md"
          >
            {t("hero.learnMore")} →
          </Link>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 px-8">
        {metrics.map((metric, index) => (
          <MetricCard 
            key={index}
            value={metric.value}
            labelKey={metric.labelKey}
          />
        ))}
      </div>
    </section>
  );
}