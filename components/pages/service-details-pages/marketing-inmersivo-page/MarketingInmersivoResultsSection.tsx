"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import {
  FaArrowUp,
  FaEye,
  FaShoppingCart,
  FaClock,
  FaUsers,
  FaHeart,
} from "react-icons/fa";
import Image from "next/image";
import ResultCard from "../ResultCard";

export default function MarketingInmersivoResultsSection() {
  const { t } = useTranslation();
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const results = [
    {
      icon: FaHeart,
      percentage: "+42%",
      title:
        "service-details-pages.immersive-marketing.results.emotional-connection.title",
      description:
        "service-details-pages.immersive-marketing.results.emotional-connection.description",
      detail:
        "service-details-pages.immersive-marketing.results.emotional-connection.detail",
      color: "mandarina",
    },
    {
      icon: FaShoppingCart,
      percentage: "+30%",
      title:
        "service-details-pages.immersive-marketing.results.conversion-increase.title",
      description:
        "service-details-pages.immersive-marketing.results.conversion-increase.description",
      detail:
        "service-details-pages.immersive-marketing.results.conversion-increase.detail",
      color: "teal",
    },
    {
      icon: FaEye,
      percentage: "x3",
      title:
        "service-details-pages.immersive-marketing.results.engagement-time.title",
      description:
        "service-details-pages.immersive-marketing.results.engagement-time.description",
      detail:
        "service-details-pages.immersive-marketing.results.engagement-time.detail",
      color: "violeta",
    },
    {
      icon: FaUsers,
      percentage: "+65%",
      title:
        "service-details-pages.immersive-marketing.results.space-optimization.title",
      description:
        "service-details-pages.immersive-marketing.results.space-optimization.description",
      detail:
        "service-details-pages.immersive-marketing.results.space-optimization.detail",
      color: "skyblue",
    },
    {
      icon: FaClock,
      percentage: "Real-time",
      title:
        "service-details-pages.immersive-marketing.results.personalization.title",
      description:
        "service-details-pages.immersive-marketing.results.personalization.description",
      detail:
        "service-details-pages.immersive-marketing.results.personalization.detail",
      color: "azul-profundo",
    },
    {
      icon: FaArrowUp,
      percentage: "+85%",
      title:
        "service-details-pages.immersive-marketing.results.competitive-advantage.title",
      description:
        "service-details-pages.immersive-marketing.results.competitive-advantage.description",
      detail:
        "service-details-pages.immersive-marketing.results.competitive-advantage.detail",
      color: "teal",
    },
  ];

  return (
    <section
      ref={elementRef}
      className="relative marketing-inmersivo-results-section section overflow-x-hidden"
    >
      {/* Diagonal background layers */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-gradient-to-br from-azul-profundo via-teal to-negro"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 45%)",
          }}
        ></div>

        <div
          className="absolute inset-0 bg-gradient-to-br from-blanco via-hielo/30 to-blanco"
          style={{
            clipPath: "polygon(0 45%, 100% 65%, 100% 100%, 0 100%)",
          }}
        ></div>
      </div>
      <div className="container">
        {/* Section Header */}
        <div className="text-center pb-16">
          <span className="text-blanco font-semibold tracking-wider uppercase text-sm">
            {t("service-details-pages.immersive-marketing.results.eyebrow")}
          </span>

          <h2 className="section-title text-blanco pt-4 pb-6">
            {t("service-details-pages.immersive-marketing.results.title")}
          </h2>

          <p className="text-lg md:text-xl text-blanco/70 w-full max-w-full container-tablet">
            {t("service-details-pages.immersive-marketing.results.subtitle")}
          </p>
        </div>

        {/* Results Grid - 2 columns of 3 rows + Images */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 xl:gap-16">
          {/* Results Cards - 2x3 grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {results.map((result, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-10 scale-95"
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <ResultCard result={result} index={index} />
              </div>
            ))}
          </div>

          {/* Images on the side */}
          <div className="relative h-132 md:h-96 lg:h-full xl:min-h-[600px]">
            {/* Mobile + Desktop XL: Stacked images */}
            <div className="block md:hidden xl:block relative h-full">
              {/* Top image */}
              <div
                className={`absolute top-0 left-1/2 transform -translate-x-1/2 xl:-translate-x-1/3 w-4/5 md:max-w-[70%] h-1/3 z-10 rotate-4 rounded-2xl shadow-2xl border-4 border-white transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-x-0 -translate-y-0 scale-100"
                    : "opacity-0 -translate-x-10 -translate-y-10 scale-90"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <Image
                  src="/assets/img/casos-de-exito/toyota/toyota-cover-cut.png"
                  alt="QR Experience Case Study"
                  width={300}
                  height={200}
                  className="w-full h-full rounded-xl object-cover shadow-xl"
                />
              </div>

              {/* Middle image */}
              <div
                className={`absolute top-1/3 left-1/2 transform -translate-x-1/2 xl:-translate-x-1/2 w-4/5 md:max-w-[70%] h-1/3 z-20 -rotate-4 rounded-2xl shadow-2xl border-4 border-white transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-x-0 translate-y-0 scale-100"
                    : "opacity-0 translate-x-10 translate-y-5 scale-90"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <Image
                  src="/assets/img/servicios/immersive-marketing/alsios.png"
                  alt="Retail Experience Case Study"
                  width={300}
                  height={200}
                  className="w-full h-full rounded-xl object-cover shadow-xl"
                />
              </div>

              {/* Bottom image */}
              <div
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 xl:-translate-x-1/3 w-4/5 md:max-w-[70%] h-1/3 z-15 rotate-4 rounded-2xl shadow-2xl border-4 border-white transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-x-0 translate-y-0 scale-100"
                    : "opacity-0 -translate-x-10 translate-y-10 scale-90"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <Image
                  src="/assets/img/casos-de-exito/alisios/alisios.jpg"
                  alt="AR Displays"
                  width={300}
                  height={200}
                  className="w-full h-full rounded-xl object-cover shadow-xl"
                />
              </div>
            </div>

            {/* MD and LG ONLY: Flex row */}
            <div className="hidden md:flex lg:flex xl:hidden gap-14 justify-center items-center h-full">
              <div
                className={`transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-10 scale-95"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <Image
                  src="/assets/img/casos-de-exito/toyota/toyota-cover-cut.png"
                  alt="QR Experience Case Study"
                  width={200}
                  height={150}
                  className="flex-1 max-w-[180px] h-full rounded-xl object-cover shadow-xl border-2 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
