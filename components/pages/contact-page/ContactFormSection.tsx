"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import SocialIcons from "@/components/SocialIcons";

export default function ContactFormSection() {
  const { t } = useTranslation();

  return (
    <section className="relative contact-form-section section">
      {/* Diagonal background layers */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-hielo/50 via-turquesa/20 to-blanco"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 45%)" }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-blanco via-hielo/30 to-blanco"
          style={{ clipPath: "polygon(0 45%, 100% 65%, 100% 100%, 0 100%)" }}
        />
      </div>

      <div className="container">
        {/* Header */}
        <div className="text-center pb-20">
          <div className="contact-form-eyebrow pb-6 fade-in-up opacity-0">
            <span className="text-teal font-semibold tracking-wider uppercase text-sm">
              {t("contact-page.section.eyebrow")}
            </span>
          </div>

          <h2 className="contact-form-title section-title text-teal leading-tight tracking-tight pb-8 slide-in-up opacity-0">
            {t("contact-page.section.title")}
          </h2>

          <p className="contact-form-subtitle text-xl text-negro leading-relaxed container bounce-in-up opacity-0">
            {t("contact-page.section.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
          {/* Left - Contact Info */}
          <div className="relative lg:col-span-2">
            <div className="contact-info-content">
              <h3 className="text-3xl font-bold text-azul-profundo pb-6 leading-tight fade-in-left opacity-0">
                {t("contact-page.info.title")}
              </h3>

              <p className="text-lg text-negro leading-relaxed pb-12 fade-in-left opacity-0">
                {t("contact-page.info.description")}
              </p>

              {/* Contact Cards (3D like ServiceCard) */}
              <div className="contact-info-cards flex flex-col md:flex-row lg:flex-col gap-6 pb-12">
                {/* EMAIL */}
                <div className="w-full md:w-1/2 lg:w-full">
                  <a
                    href="mailto:info@galagaagency.com"
                    className="block"
                    data-3d-card
                  >
                    <div
                      data-3d-tilt
                      className="relative h-[240px] rounded-3xl group"
                      style={{
                        transformStyle: "preserve-3d",
                        willChange: "transform",
                      }}
                    >
                      {/* Ambient glow (teal) */}
                      <div
                        data-3d-glow
                        className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl pointer-events-none"
                        style={{
                          background: `
                            radial-gradient(520px 320px at 50% 50%,
                              rgba(76,188,197,0.55) 0%,
                              rgba(76,188,197,0.18) 40%,
                              transparent 70%
                            )
                          `,
                          animation:
                            "pulse-glow 2s ease-in-out infinite alternate",
                        }}
                      />

                      {/* Card surface */}
                      <div
                        className="relative w-full h-full rounded-3xl overflow-hidden border"
                        style={{
                          background: `
                            linear-gradient(135deg, rgba(255,255,255,0.85), rgba(255,255,255,0.76)),
                            radial-gradient(1200px 600px at -10% -10%, rgba(76,188,197,0.18), transparent 60%)
                          `,
                          borderColor: "rgba(0,0,0,0.06)",
                          boxShadow:
                            "0 8px 28px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)",
                          backdropFilter: "saturate(120%) blur(6px)",
                          transformStyle: "preserve-3d",
                        }}
                      >
                     

                        {/* Scan line */}
                        <div
                          data-3d-scan
                          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                          style={{
                            background:
                              "linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)",
                            transform: "translateX(-100%)",
                            animation: "scan-line 3s ease-in-out infinite",
                            willChange: "transform",
                          }}
                        />

                        {/* Content */}
                        <div
                          className="relative z-10 h-full p-6 flex flex-col"
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          {/* Icon bubble */}
                          <div className="pb-4 w-full flex justify-center">
                            <div
                              data-3d-icon
                              className="relative w-16 h-16 rounded-full flex items-center justify-center border shadow-sm"
                              style={{
                                background: `
                                  linear-gradient(135deg,
                                    rgba(76,188,197,0.25) 0%,
                                    rgba(76,188,197,0.06) 100%
                                  )
                                `,
                                borderColor: "rgba(76,188,197,0.30)",
                                boxShadow:
                                  "inset 0 0 12px rgba(76,188,197,0.10)",
                                willChange: "transform",
                              }}
                            >
                              <Mail
                                className="w-7 h-7"
                                style={{ color: "#176161" }}
                              />
                              <span
                                className="absolute inset-0 rounded-full opacity-50"
                                style={{
                                  background:
                                    "radial-gradient(circle, rgba(76,188,197,0.28) 0%, transparent 70%)",
                                  filter: "blur(8px)",
                                }}
                              />
                            </div>
                          </div>

                          <h4
                            data-3d-title
                            className="text-xl font-black leading-tight pb-2 text-teal text-center"
                            style={{ willChange: "transform" }}
                          >
                            {t("contact-page.info.email")}
                          </h4>

                          <p
                            data-3d-desc
                            className="text-md font-semibold leading-relaxed text-azul-profundo text-center"
                            style={{ willChange: "transform" }}
                          >
                            info@galagaagency.com
                          </p>

                          {/* CTA chevron */}
                          <div className="mt-auto absolute bottom-6 right-6">
                            <div className="w-8 h-8 bg-teal-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg">
                              <svg
                                className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                          </div>

                          {/* Side data stream */}
                          <div className="pointer-events-none absolute top-0 right-0 w-1 h-full overflow-hidden opacity-30">
                            <div
                              data-3d-data
                              className="w-full h-8 opacity-80"
                              style={{
                                background:
                                  "linear-gradient(180deg, rgba(76,188,197,0.55) 0%, transparent 100%)",
                                willChange: "transform",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                {/* LOCATION */}
                <div className="w-full md:w-1/2 lg:w-full">
                  <a
                    href="https://maps.google.com/?q=C.+Arado%2C+35200+Telde%2C+Las+Palmas+de+Gran+Canaria%2C+Spain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    data-3d-card
                  >
                    <div
                      data-3d-tilt
                      className="relative h-[240px] rounded-3xl group"
                      style={{
                        transformStyle: "preserve-3d",
                        willChange: "transform",
                      }}
                    >
                      {/* Ambient glow (mandarina) */}
                      <div
                        data-3d-glow
                        className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl pointer-events-none"
                        style={{
                          background: `
                            radial-gradient(520px 320px at 50% 50%,
                              rgba(238,111,69,0.55) 0%,
                              rgba(238,111,69,0.18) 40%,
                              transparent 70%
                            )
                          `,
                          animation:
                            "pulse-glow 2s ease-in-out infinite alternate",
                        }}
                      />

                      {/* Card surface */}
                      <div
                        className="relative w-full h-full rounded-3xl overflow-hidden border"
                        style={{
                          background: `
                            linear-gradient(135deg, rgba(255,255,255,0.85), rgba(255,255,255,0.76)),
                            radial-gradient(1200px 600px at -10% -10%, rgba(238,111,69,0.18), transparent 60%)
                          `,
                          borderColor: "rgba(0,0,0,0.06)",
                          boxShadow:
                            "0 8px 28px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)",
                          backdropFilter: "saturate(120%) blur(6px)",
                          transformStyle: "preserve-3d",
                        }}
                      >

                        {/* Scan line */}
                        <div
                          data-3d-scan
                          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                          style={{
                            background:
                              "linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)",
                            transform: "translateX(-100%)",
                            animation: "scan-line 3s ease-in-out infinite",
                            willChange: "transform",
                          }}
                        />

                        {/* Content */}
                        <div
                          className="relative z-10 h-full p-6 flex flex-col"
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          {/* Icon bubble */}
                          <div className="pb-4 w-full flex justify-center">
                            <div
                              data-3d-icon
                              className="relative w-16 h-16 rounded-full flex items-center justify-center border shadow-sm"
                              style={{
                                background: `
                                  linear-gradient(135deg,
                                    rgba(238,111,69,0.25) 0%,
                                    rgba(238,111,69,0.06) 100%
                                  )
                                `,
                                borderColor: "rgba(238,111,69,0.30)",
                                boxShadow:
                                  "inset 0 0 12px rgba(238,111,69,0.10)",
                                willChange: "transform",
                              }}
                            >
                              <MapPin
                                className="w-7 h-7"
                                style={{ color: "#b03c18" }}
                              />
                              <span
                                className="absolute inset-0 rounded-full opacity-50"
                                style={{
                                  background:
                                    "radial-gradient(circle, rgba(238,111,69,0.28) 0%, transparent 70%)",
                                  filter: "blur(8px)",
                                }}
                              />
                            </div>
                          </div>

                          <h4
                            data-3d-title
                            className="text-xl font-black leading-tight pb-2 text-mandarina text-center"
                            style={{ willChange: "transform" }}
                          >
                            {t("contact-page.info.location")}
                          </h4>

                          <p
                            data-3d-desc
                            className="text-md font-semibold leading-relaxed text-azul-profundo text-center"
                            style={{ willChange: "transform" }}
                          >
                            Calle Arado 2, 35200 Telde, Las Palmas, España
                          </p>

                          {/* CTA chevron */}
                          <div className="mt-auto absolute bottom-6 right-6">
                            <div className="w-8 h-8 bg-orange-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg">
                              <svg
                                className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                          </div>

                          {/* Side data stream */}
                          <div className="pointer-events-none absolute top-0 right-0 w-1 h-full overflow-hidden opacity-30">
                            <div
                              data-3d-data
                              className="w-full h-8 opacity-80"
                              style={{
                                background:
                                  "linear-gradient(180deg, rgba(238,111,69,0.55) 0%, transparent 100%)",
                                willChange: "transform",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="contact-social flex flex-col items-center lg:items-start fade-in-up-rotate opacity-0 w-fit">
                <h4 className="text-lg font-bold text-azul-profundo pb-4">
                  {t("contact-page.social.title")}
                </h4>
                <SocialIcons
                  linkedinColor="teal"
                  instagramColor="mandarina"
                  size="lg"
                />
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="z-20 lg:col-span-3">
            <div className="contact-form-container slide-in-up opacity-0">
              <div className="bg-blanco/70 backdrop-blur-md p-6 lg:px-8 lg:py-12 rounded-2xl border border-hielo/30 shadow-xl">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
