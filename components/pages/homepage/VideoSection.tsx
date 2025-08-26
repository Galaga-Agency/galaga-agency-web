"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function VideoSection() {
  const { t } = useTranslation();

  return (
    <section className="video-section section relative overflow-hidden">
      {/* Background with your app's gradient system */}
      <div className="absolute inset-0 bg-darkblue-gradient"></div>

      {/* Diagonal layers matching your design system */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-azul-profundo/80 via-teal/20 to-negro"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 75%, 0 45%)",
          }}
        ></div>
        <div
          className="absolute inset-0 bg-gradient-to-br from-negro via-azul-profundo/40 to-negro"
          style={{
            clipPath: "polygon(0 45%, 100% 75%, 100% 100%, 0 100%)",
          }}
        ></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header using your typography classes */}
        <div className="text-center pb-16">
          <h2 className="fade-in-up opacity-0 section-title text-blanco leading-tight tracking-tight pb-6">
            {t("homepage.video-section.title")}
          </h2>
          <p className="fade-in-up opacity-0 text-subheading text-hielo/80 px-4">
            {t("homepage.video-section.subtitle")}
          </p>
        </div>

        {/* Video Container */}
        <div className="relative flex justify-center items-center min-h-[50vh] md:min-h-[60vh]">
          {/* Morphing Blob */}
          <div
            className="morphing-blob absolute bg-teal-gradient shadow-2xl"
            style={{
              width: "clamp(320px, 80vw, 600px)",
              height: "clamp(240px, 60vw, 450px)",
              borderRadius: "50%",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></div>

          {/* Floating Particles */}
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className={`video-particle absolute w-2 h-2 md:w-3 md:h-3 rounded-full ${
                index % 3 === 0
                  ? "bg-turquesa"
                  : index % 3 === 1
                  ? "bg-mandarina"
                  : "bg-hielo"
              }`}
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            ></div>
          ))}

          {/* Video Player */}
          <div
            className="video-player relative rounded-2xl overflow-hidden shadow-2xl"
            style={{
              width: "clamp(320px, 80vw, 600px)",
              height: "clamp(240px, 60vw, 450px)",
            }}
          >
            {/* Video Element */}
            <video
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source
                src="/assets/videos/galaga-presentation.mp4"
                type="video/mp4"
              />
              {t("homepage.video-section.videoNotSupported")}
            </video>

            {/* Subtle overlay matching your design */}
            <div className="absolute inset-0 bg-gradient-to-t from-azul-profundo/10 via-transparent to-azul-profundo/10 pointer-events-none"></div>
          </div>
        </div>

        {/* Video Description */}
        <div className="text-center pt-16">
          <p className="fade-in-up opacity-0 text-lg md:text-xl text-hielo/70 leading-relaxed px-4 max-w-3xl mx-auto">
            {t("homepage.video-section.description")}
          </p>
        </div>
      </div>
    </section>
  );
}
