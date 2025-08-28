"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { useDeviceDetect } from "@/hooks/useDeviceDetect";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { ThreeDMarquee } from "@/components/ui/3DMarquee";

export default function ServicesHeroSection() {
  const { t } = useTranslation();
  const { isTouchDevice } = useDeviceDetect();

  return (
    <section className="services-hero-section bg-gradient-to-br from-azul-profundo via-teal to-negro relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background 3D marquee layer */}
      <div className="absolute inset-0 z-0">
        <ThreeDMarquee
          images={[
            "/assets/img/features/automatizacion.jpg",
            "/assets/img/features/base.png",
            "/assets/img/features/canary-islands-games.jpg",
            "/assets/img/features/cloud-collab.png",
            "/assets/img/features/consultoria.jpg",
            "/assets/img/features/crm-erp.jpg",
            "/assets/img/features/crm.png",
            "/assets/img/features/dos-x-dos-grupo-imagen-web.png",
            "/assets/img/features/dynamic-furniture.png",
            "/assets/img/features/gaming.png",
            "/assets/img/features/innovacion.png",
            "/assets/img/features/interactive-corners.png",
            "/assets/img/features/subvenciones.png",
          ]}
          className="opacity-40 pointer-events-none will-change-transform"
          baseDuration={50}
        />
      </div>

      {/* Gradient overlay that blends with the image */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(18, 28, 48, 0.85) 0%, rgba(23, 97, 97, 0.75) 50%, rgba(76, 188, 197, 0.65) 100%)",
        }}
      />

      {/* Additional gradient for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(18, 28, 48, 0.3) 0%, transparent 30%, transparent 70%, rgba(0, 0, 0, 0.4) 100%)",
        }}
      />

      <div className="container relative z-20 w-full">
        <div className="services-hero-content w-full flex flex-col justify-center items-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 pb-8 md:pb-12">
            <span className="text-blanco font-semibold tracking-wider uppercase text-sm md:text-base drop-shadow-lg">
              {t("services-page.hero-section.eyebrow")}
            </span>
          </div>

          {/* Main Headline */}
          <div className="text-center pb-8 md:pb-12 w-full">
            <h1 className="hero-title text-blanco leading-[0.9] tracking-tight drop-shadow-2xl px-4 text-center">
              <span className="block pb-2 md:pb-4">
                <span className="hero-word-1 drop-shadow-xl opacity-0 translate-y-24">
                  {t("services-page.hero-section.creamos")}
                </span>
              </span>
              <span className="block">
                <span className="hero-word-2 drop-shadow-xl opacity-0 translate-y-24">
                  {t("services-page.hero-section.elFuturo")}
                </span>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="text-center w-full px-4">
            <p className="hero-subtitle text-lg md:text-2xl lg:text-3xl text-blanco leading-relaxed font-light drop-shadow-xl opacity-0 translate-y-12">
              {t("services-page.hero-section.subtitle")}
            </p>
          </div>
        </div>
      </div>

      <ScrollIndicator className="hero-scroll-indicator absolute bottom-16 left-1/2 opacity-0 z-50 transform -translate-x-1/2" />
    </section>
  );
}
