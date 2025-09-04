"use client";

import Link from "next/link";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";
import { init404Animations } from "@/utils/animations/404-animations";
import { init3DCardAnimations } from "@/utils/animations/3D-card-animations";

export default function NotFound() {
  useGSAPAnimations({
    animations: [init404Animations, init3DCardAnimations],
    delay: 40,
  });

  const glow = "76, 188, 197"; // teal
  const primary = "#176161";

  return (
    <section className="section relative" aria-labelledby="nf-title">
      {/* Gradient background (same as localized) */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, var(--color-teal) 0%, rgba(23,97,97,0.4) 40%, var(--color-blanco) 100%)",
          }}
        />
      </div>

      <div className="container">
        <div className="min-h-[70vh] grid place-items-center">
          <div data-3d-card className="group relative w-full max-w-3xl">
            <div
              data-3d-tilt
              className="relative w-full h-full rounded-3xl will-change-transform"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Ambient outer glow */}
              <div
                data-3d-glow
                className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl pointer-events-none"
                style={{
                  background: `
                    radial-gradient(520px 320px at 50% 50%,
                      rgba(${glow}, 0.55) 0%,
                      rgba(${glow}, 0.18) 40%,
                      transparent 70%
                    )
                  `,
                  animation: "pulse-glow 2s ease-in-out infinite alternate",
                }}
              />

              <div
                className="nf-card opacity-0 relative w-full rounded-3xl overflow-hidden border px-8 py-10 md:px-12 md:py-12"
                style={{
                  background: `
                    linear-gradient(135deg, rgba(255,255,255,0.85), rgba(255,255,255,0.76)),
                    radial-gradient(1200px 600px at -10% -10%, rgba(${glow},0.18), transparent 60%)
                  `,
                  borderColor: "rgba(0,0,0,0.06)",
                  boxShadow:
                    "0 8px 28px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)",
                  backdropFilter: "saturate(120%) blur(6px)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Teal scan line on hover */}
                <div
                  data-3d-scan
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(23,97,97,0.20), transparent)",
                    transform: "translateX(-100%)",
                    animation: "scan-line 3s ease-in-out infinite",
                    willChange: "transform",
                  }}
                />

                {/* Content */}
                <div
                  className="relative z-10 flex flex-col items-center text-center gap-4"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Rotating bubble with 404 */}
                  <div className="pb-2 w-full flex justify-center">
                    <div
                      data-3d-icon
                      className="relative w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center border shadow-sm"
                      style={{
                        background: `
                          linear-gradient(135deg,
                            rgba(${glow},0.25) 0%,
                            rgba(${glow},0.06) 100%
                          )
                        `,
                        borderColor: `rgba(${glow},0.30)`,
                        boxShadow: `inset 0 0 12px rgba(${glow},0.10)`,
                        willChange: "transform",
                      }}
                    >
                      <span
                        id="nf-404"
                        className="opacity-0 text-2xl md:text-3xl font-black"
                        style={{
                          color: primary,
                          filter: "drop-shadow(0 0 12px #ffffffcc)",
                        }}
                      >
                        404
                      </span>
                      <span
                        className="absolute inset-0 rounded-full opacity-50"
                        style={{
                          background: `radial-gradient(circle, rgba(${glow},0.28) 0%, transparent 70%)`,
                          filter: "blur(10px)",
                        }}
                      />
                    </div>
                  </div>

                  <p
                    className="opacity-0 text-xs md:text-sm uppercase tracking-[0.2em] text-grafito/70"
                    data-3d-desc
                  >
                    Página no encontrada
                  </p>

                  <h1
                    id="nf-title"
                    data-3d-title
                    className="opacity-0 text-2xl md:text-4xl font-extrabold text-azul-profundo py-2"
                  >
                    No hemos encontrado esta página
                  </h1>

                  <p
                    data-3d-desc
                    className="opacity-0 text-lg text-grafito max-w-prose"
                  >
                    Lo sentimos, pero la dirección que has introducido no existe
                    o ha cambiado.
                  </p>

                  <div
                    data-3d-data
                    className="opacity-0 pt-4 flex flex-col sm:flex-row items-center justify-center gap-3"
                  >
                    <PrimaryButton
                      href="/es"
                      bubbleTransition={true}
                      bubbleColor="var(--color-teal)"
                      transitionDuration={0.8}
                      className="px-7 py-3 w-full"
                    >
                      Ir al inicio
                    </PrimaryButton>
                    <SecondaryButton
                      href="/es/contacto"
                      bubbleTransition={true}
                      bubbleColor="var(--color-teal)"
                      transitionDuration={0.8}
                      className="px-7 py-3 w-full"
                    >
                      Contacto
                    </SecondaryButton>
                  </div>

                  <div
                    data-3d-data
                    className="opacity-0 pt-1 text-sm text-grafito/80 flex items-center justify-center gap-4"
                  >
                    <Link
                      href="/es/servicios"
                      className="hover:text-teal transition-colors"
                    >
                      Servicios
                    </Link>
                    <span className="opacity-30">•</span>
                    <Link
                      href="/es/sobre-nosotros"
                      className="hover:text-teal transition-colors"
                    >
                      Sobre nosotros
                    </Link>
                    <span className="opacity-30">•</span>
                    <Link
                      href="/es/casos-de-exito"
                      className="hover:text-teal transition-colors"
                    >
                      Casos de éxito
                    </Link>
                  </div>
                </div>
              </div>

              {/* Side data stream */}
              <div className="absolute top-0 right-0 w-1 h-full overflow-hidden opacity-30">
                <div
                  data-3d-data
                  className="w-full h-8 opacity-80"
                  style={{
                    background: `linear-gradient(180deg, rgba(${glow}, 0.55) 0%, transparent 100%)`,
                    willChange: "transform",
                  }}
                />
              </div>
            </div>
          </div>
          {/* /3D card */}
        </div>
      </div>
    </section>
  );
}
