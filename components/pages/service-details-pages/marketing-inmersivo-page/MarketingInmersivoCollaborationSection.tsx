"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Image from "next/image";
import PartnerCard from "./PartnerCard";

export default function MarketingInmersivoCollaborationSection() {
  const { t } = useTranslation();
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      ref={elementRef}
      className="marketing-inmersivo-collaboration-section bg-transparent overflow-x-hidden"
      style={{
        paddingBottom: "clamp(4rem, 8vw, 4rem)",
        paddingInline: "clamp(1rem, 5vw, 2rem)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center pb-16">
          <span className="fade-up text-teal font-semibold tracking-wider uppercase text-sm">
            {t(
              "service-details-pages.immersive-marketing.collaboration.eyebrow"
            )}
          </span>
          <h2 className="fade-up section-title text-teal pt-4 pb-6">
            {t("service-details-pages.immersive-marketing.collaboration.title")}
          </h2>
          <p className="fade-up text-lg text-negro/70">
            {t(
              "service-details-pages.immersive-marketing.collaboration.subtitle"
            )}
          </p>
        </div>

        {/* Two-column: Overlapping Images + Partnership Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pb-20">
          {/* Left: Overlapping images */}
          <div className="relative h-96">
            <div
              className={`absolute inset-0 w-4/5 h-full transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0 rotate-0 scale-100"
                  : "opacity-0 -translate-x-20 -rotate-2 scale-95"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              <Image
                src="/assets/img/casos-de-exito/base-eleague/base.png"
                alt="Joint Vision"
                width={600}
                height={500}
                className="w-full h-full rounded-2xl object-cover shadow-2xl border-4 border-white"
              />
            </div>

            <div
              className={`absolute top-8 right-0 w-3/5 h-3/4 z-10 rotate-3 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 -translate-x-20 scale-95"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <Image
                src="/assets/img/servicios/immersive-marketing/collaboration-vision.png"
                alt="Digital Integration"
                width={400}
                height={350}
                className="w-full h-full rounded-2xl object-cover shadow-2xl border-4 border-white"
              />
            </div>
          </div>

          {/* Right: Partnership cards (equal height) */}
          <div className="flex flex-col gap-6 h-96 justify-between items-stretch">
            <PartnerCard
              titleText="Dos x Dos"
              summaryKey="service-details-pages.immersive-marketing.collaboration.dos-summary"
              specialtiesKey="service-details-pages.immersive-marketing.collaboration.dos-specialties"
              logoSrc="/assets/img/partners/dosxdos-mini-logo.png"
              logoAlt="Dos x Dos Logo"
              theme="mandarina"
              isVisible={isVisible}
              delayMs={400}
              titleColorHex="#b03c18"
            />

            <PartnerCard
              titleText="Galaga Agency"
              summaryKey="service-details-pages.immersive-marketing.collaboration.galaga-summary"
              specialtiesKey="service-details-pages.immersive-marketing.collaboration.galaga-specialties"
              logoSrc="/assets/img/logos/logo-mobile.webp"
              logoAlt="Galaga Agency Logo"
              theme="teal"
              isVisible={isVisible}
              delayMs={600}
              titleColorHex="#176161"
            />
          </div>
        </div>

        {/* Result highlight */}
        <div className="w-full flex justify-center">
          <div
            className={`bg-gradient-to-r from-teal/10 to-turquesa/5 rounded-xl p-6 w-fit text-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-75 rotate-6"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <p className="text-lg font-semibold text-teal">
              {t(
                "service-details-pages.immersive-marketing.collaboration.result"
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
