"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { Generic3DModel } from "@/components/3D/Generic3DModel";
import { HolographicCube3D } from "@/components/3D/HolographicCube3D";

export default function MarketingInmersivoProcessSection() {
  const { t } = useTranslation();

  const processSteps = [
    {
      number: "01",
      title: "service-details-pages.immersive-marketing.process.briefing.title",
      description:
        "service-details-pages.immersive-marketing.process.briefing.description",
      color: "violeta",
      tech: "Strategy",
      model: "/assets/models/callcenter-headset.glb",
      modelProps: {
        color: "#121c30",
        roughness: 0.1,
        metalness: 0.9,
        lightingPreset: "neon" as const,
        autoRotate: true,
        rotationSpeed: 0.015,
        floatingAnimation: true,
        floatingRange: 0.3,
        enableMouseInteraction: true,
        customLights: {
          hemisphere: {
            skyColor: "#0a0a0a",
            groundColor: "#001a1a",
            intensity: 0.2,
          },
          point: [
            {
              color: "#4cbcc5",
              intensity: 2.0,
              position: [4, 4, 4] as [number, number, number],
              distance: 20,
            },
            {
              color: "#00e5ff",
              intensity: 1.5,
              position: [-4, 2, -2] as [number, number, number],
              distance: 15,
            },
            {
              color: "#26c6da",
              intensity: 1.0,
              position: [0, 6, 0] as [number, number, number],
              distance: 12,
            },
          ],
        },
      },
    },
    {
      number: "02",
      title:
        "service-details-pages.immersive-marketing.process.creative-concept.title",
      description:
        "service-details-pages.immersive-marketing.process.creative-concept.description",
      color: "mandarina",
      tech: "Design",
      model: "holographic-cage",
      modelProps: {
        color: "#121c30",
        roughness: 0.1,
        metalness: 0.9,
        lightingPreset: "neon" as const,
        autoRotate: true,
        rotationSpeed: 0.015,
        floatingAnimation: true,
        floatingRange: 0.3,
        enableMouseInteraction: true,
        customLights: {
          hemisphere: {
            skyColor: "#0a0a0a",
            groundColor: "#001a1a",
            intensity: 0.2,
          },
          point: [
            {
              color: "#4cbcc5",
              intensity: 2.0,
              position: [4, 4, 4] as [number, number, number],
              distance: 20,
            },
            {
              color: "#00e5ff",
              intensity: 1.5,
              position: [-4, 2, -2] as [number, number, number],
              distance: 15,
            },
            {
              color: "#26c6da",
              intensity: 1.0,
              position: [0, 6, 0] as [number, number, number],
              distance: 12,
            },
          ],
        },
      },
    },
    {
      number: "03",
      title:
        "service-details-pages.immersive-marketing.process.technical-design.title",
      description:
        "service-details-pages.immersive-marketing.process.technical-design.description",
      color: "azul-profundo",
      tech: "Development",
      model: "/assets/models/double-gear-3D.glb",
      modelProps: {
        color: "#121c30",
        roughness: 0.1,
        metalness: 0.9,
        lightingPreset: "neon" as const,
        autoRotate: true,
        rotationSpeed: 0.015,
        floatingAnimation: true,
        floatingRange: 0.3,
        enableMouseInteraction: true,
        customLights: {
          hemisphere: {
            skyColor: "#0a0a0a",
            groundColor: "#001a1a",
            intensity: 0.2,
          },
          point: [
            {
              color: "#4cbcc5",
              intensity: 2.0,
              position: [4, 4, 4] as [number, number, number],
              distance: 20,
            },
            {
              color: "#00e5ff",
              intensity: 1.5,
              position: [-4, 2, -2] as [number, number, number],
              distance: 15,
            },
            {
              color: "#26c6da",
              intensity: 1.0,
              position: [0, 6, 0] as [number, number, number],
              distance: 12,
            },
          ],
        },
      },
    },
    {
      number: "04",
      title:
        "service-details-pages.immersive-marketing.process.implementation.title",
      description:
        "service-details-pages.immersive-marketing.process.implementation.description",
      color: "teal",
      tech: "Deploy",
      model: "/assets/models/rocket.glb",
      modelProps: {
        color: "#121c30",
        roughness: 0.01,
        metalness: 0.2,
        lightingPreset: "neon" as const,
        autoRotate: true,
        rotationSpeed: 0.5,
        floatingAnimation: true,
        floatingRange: 0.5,
        enableMouseInteraction: true,
        customLights: {
          hemisphere: {
            skyColor: "#0a0a0a",
            groundColor: "#001a1a",
            intensity: 0.2,
          },
          point: [
            {
              color: "#4cbcc5",
              intensity: 2.0,
              position: [4, 4, 4] as [number, number, number],
              distance: 20,
            },
            {
              color: "#00e5ff",
              intensity: 1.5,
              position: [-4, 2, -2] as [number, number, number],
              distance: 15,
            },
            {
              color: "#26c6da",
              intensity: 1.0,
              position: [0, 6, 0] as [number, number, number],
              distance: 12,
            },
          ],
        },
      },
    },
    {
      number: "05",
      title:
        "service-details-pages.immersive-marketing.process.optimization.title",
      description:
        "service-details-pages.immersive-marketing.process.optimization.description",
      color: "turquesa",
      tech: "Optimize",
      model: "/assets/models/single-gear-3D.glb",
      modelProps: {
        color: "#121c30",
        roughness: 0.1,
        metalness: 0.9,
        lightingPreset: "neon" as const,
        autoRotate: true,
        rotationSpeed: 0.015,
        floatingAnimation: true,
        floatingRange: 0.3,
        enableMouseInteraction: true,
        customLights: {
          hemisphere: {
            skyColor: "#0a0a0a",
            groundColor: "#001a1a",
            intensity: 0.2,
          },
          point: [
            {
              color: "#4cbcc5",
              intensity: 2.0,
              position: [4, 4, 4] as [number, number, number],
              distance: 20,
            },
            {
              color: "#00e5ff",
              intensity: 1.5,
              position: [-4, 2, -2] as [number, number, number],
              distance: 15,
            },
            {
              color: "#26c6da",
              intensity: 1.0,
              position: [0, 6, 0] as [number, number, number],
              distance: 12,
            },
          ],
        },
      },
    },
  ];

  return (
    <section className="marketing-inmersivo-process-section bg-blanco relative overflow-x-hidden md:overflow-visible mb-12 md:mb-24">
      <div className="horizontal-scroll-container">
        <div className="pt-16 md:pt-28 pb-8">
          <div className="text-center">
            <span className="text-teal font-medium tracking-wider uppercase text-sm pb-6 block fade-in-up opacity-0">
              {t("service-details-pages.immersive-marketing.process.eyebrow")}
            </span>

            <h2 className="section-title text-teal leading-tight pb-8 slide-in-up opacity-0">
              {t("service-details-pages.immersive-marketing.process.title")}
            </h2>

            <p className="text-lg md:text-xl text-azul-profundo leading-relaxed px-4 bounce-in-up opacity-0">
              {t("service-details-pages.immersive-marketing.process.subtitle")}
            </p>
          </div>
        </div>

        <div className="md:hidden">
          <div className="flex flex-col gap-6 px-4 py-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative stagger-bounce-in-up opacity-0 group"
              >
                <div className="absolute -inset-1 bg-teal/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-blanco border border-teal/20 rounded-xl p-6 shadow-xl backdrop-blur-sm group-hover:border-teal/40 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-teal/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-12 h-12 bg-teal rounded-lg flex items-center justify-center overflow-hidden">
                      <span className="text-blanco font-black text-2xl relative z-10">
                        {step.number}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-br from-turquesa via-teal to-azul-profundo opacity-90" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-teal uppercase tracking-wide">
                        {step.tech}
                      </div>
                      <h3 className="text-lg font-bold text-negro">
                        {t(step.title)}
                      </h3>
                    </div>
                  </div>
                  <p className="text-negro leading-relaxed">
                    {t(step.description)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <div className="relative h-auto overflow-visible py-16">
            <div className="horizontal-scroll-wrapper flex items-center h-full">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="process-item flex-shrink-0 w-screen h-full flex items-center justify-center px-16 relative"
                >
                  <div className="grid grid-cols-2 gap-20 items-center w-full max-w-7xl">
                    <div className="process-content relative">
                      <div className="absolute -top-16 -left-8 text-[180px] font-black text-teal/5 leading-none pointer-events-none">
                        {step.number}
                      </div>

                      <div className="relative z-10">
                        <div className="inline-flex items-center px-4 py-2 bg-teal/10 border border-teal/20 text-teal rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
                          <span className="relative z-10">{step.tech}</span>
                        </div>

                        <h3 className="text-4xl font-bold text-negro mb-6 leading-tight">
                          {t(step.title)}
                        </h3>

                        <p className="text-xl text-negro leading-relaxed">
                          {t(step.description)}
                        </p>
                      </div>
                    </div>

                    <div className="process-image">
                      <div className="relative group cursor-pointer">
                        <div className="absolute -inset-6 bg-gradient-to-r from-teal/20 via-turquesa/20 to-teal/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 process-glow-pulse" />
                        <div className="absolute -inset-3 bg-gradient-to-br from-teal/30 to-turquesa/30 rounded-xl blur-lg opacity-0 group-hover:opacity-80 transition-opacity duration-500" />

                        <div className="relative w-96 h-96 bg-blanco/90 backdrop-blur-xl border border-teal/20 rounded-xl overflow-hidden shadow-2xl group-hover:border-teal/50 group-hover:shadow-3xl group-hover:shadow-teal/10 transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
                          <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-teal/40 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-teal/40 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-teal/40 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-teal/40 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

                          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-teal to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan-line" />

                          <div className="absolute inset-0 flex items-center justify-center p-8">
                            <div className="w-64 h-64 relative group-hover:scale-110 transition-transform duration-700">
                              {step.number === "02" ? (
                                <HolographicCube3D  />
                              ) : (
                                <Generic3DModel
                                  modelPath={step.model}
                                  className="w-full h-full drop-shadow-2xl"
                                  materialType="standard"
                                  toneMappingExposure={1.4}
                                  enableShadows={false}
                                  {...step.modelProps}
                                />
                              )}
                            </div>
                          </div>

                          <div className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-xl font-black text-teal bg-blanco/90 backdrop-blur-sm border border-teal/30 rounded-full shadow-lg group-hover:scale-110 group-hover:border-teal/60 transition-all duration-300">
                            <span className="relative z-10">{step.number}</span>
                          </div>

                          <div className="absolute bottom-6 left-6 px-3 py-1.5 bg-teal/10 backdrop-blur-sm border border-teal/20 rounded-full text-xs font-medium text-teal uppercase tracking-wide group-hover:bg-teal/20 group-hover:border-teal/40 transition-all duration-300">
                            {step.tech}
                          </div>

                          <div className="absolute top-1/4 left-0 w-16 h-px bg-gradient-to-r from-teal/0 via-teal/40 to-teal/0 opacity-40 group-hover:opacity-80 transition-opacity duration-300 process-data-flow-left" />
                          <div className="absolute top-1/2 right-0 w-20 h-px bg-gradient-to-l from-teal/0 via-teal/40 to-teal/0 opacity-40 group-hover:opacity-80 transition-opacity duration-300 process-data-flow-right" />
                          <div className="absolute bottom-1/3 left-0 w-12 h-px bg-gradient-to-r from-teal/0 via-teal/30 to-teal/0 opacity-30 group-hover:opacity-70 transition-opacity duration-300 process-data-flow-left-slow" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
