"use client";

import { useTranslation } from "@/hooks/useTranslation";
import {
  useScrollIndicator,
  useMousePosition,
} from "@/hooks/useHeroInteractions";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import GridBackground from "@/components/ui/GridBackground";
import { VRHeadset3D } from "@/components/3D/VRHeadset3D";

export default function MarketingInmersivoHeroSection() {
  const { t } = useTranslation();
  const showScrollIndicator = useScrollIndicator();
  const mousePosition = useMousePosition();

  return (
    <section
      className="immersive-marketing-hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-teal"
      style={{ perspective: "1000px" }}
    >
      <div
        className="absolute inset-0 opacity-50 transition-all duration-700 ease-out"
        style={{
          backgroundImage: `
            radial-gradient(circle at ${mousePosition.x}% ${
            mousePosition.y
          }%, rgba(76,188,197,0.9) 0%, transparent 50%),
            radial-gradient(circle at ${100 - mousePosition.x}% ${
            100 - mousePosition.y
          }%, rgba(18,28,48,0.7) 0%, transparent 60%)
          `,
        }}
      />

      <GridBackground />

      <div className="absolute top-20 left-20 w-32 h-32 bg-turquesa/30 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-32 right-32 w-40 h-40 bg-azul-profundo/40 rounded-full blur-3xl animate-float-slower" />

      <div className="container relative z-20 w-full py-20">
        <div className="immersive-marketing-hero-content w-full flex flex-col justify-center items-start text-center min-h-[70vh]">
          <div className="flex items-center gap-3 pl-2 pb-8 md:pb-12">
            <span className="hero-eyebrow text-blanco font-bold tracking-widest uppercase text-sm md:text-base opacity-0 fade-in-down">
              {t(
                "service-details-pages.immersive-marketing.hero-section.eyebrow"
              )}
            </span>
          </div>

          {/* Main content block: title + VR model */}
          <div className="flex flex-col lg:flex-row items-center justify-center pb-8 md:pb-12 w-full">
            {/* Title */}
            <div className="text-center lg:text-left">
              <h1 className="hero-title text-blanco leading-[0.85] tracking-tighter">
                <span className="block">
                  <span className="hero-word-1 w-fit opacity-0">
                    {t(
                      "service-details-pages.immersive-marketing.hero-section.title"
                    )}
                  </span>
                </span>
              </h1>
            </div>

            {/* VR Model */}
            <div className="flex-shrink-0">
              <div
                data-animate="hero-3d-grow"
                className="relative pointer-events-none"
                style={{
                  width: "400px",
                  height: "400px",
                }}
              >
                <VRHeadset3D />
              </div>
            </div>
          </div>

          {/* Subtitle below the main block */}
          <div className="text-center pb-12 md:pb-16 w-full px-4">
            <p className="hero-subtitle text-lg md:text-2xl lg:text-3xl text-blanco/90 leading-relaxed font-light opacity-0">
              {t(
                "service-details-pages.immersive-marketing.hero-section.subtitle"
              )}
            </p>
          </div>
        </div>
      </div>

      <div
        className={`hero-scroll-indicator absolute bottom-16 left-1/2 z-50 transform -translate-x-1/2 transition-all duration-600 ${
          showScrollIndicator ? "opacity-100" : "opacity-0 translate-y-5"
        }`}
      >
        <ScrollIndicator />
      </div>
    </section>
  );
}
