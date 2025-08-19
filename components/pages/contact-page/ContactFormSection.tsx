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
        {/* Top diagonal - Light teal gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-hielo/50 via-turquesa/20 to-blanco"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 45%)",
          }}
        ></div>

        {/* Bottom diagonal - Pure white */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-blanco via-hielo/30 to-blanco"
          style={{
            clipPath: "polygon(0 45%, 100% 65%, 100% 100%, 0 100%)",
          }}
        ></div>
      </div>
      <div className="container">
        {/* Header */}
        <div className="text-center pb-20">
          <div className="contact-form-eyebrow pb-6">
            <span className="text-teal font-semibold tracking-wider uppercase text-sm">
              {t("contact-page.section.eyebrow")}
            </span>
          </div>

          <h2 className="contact-form-title section-title text-teal leading-tight tracking-tight pb-8">
            {t("contact-page.section.title")}
          </h2>

          <p className="contact-form-subtitle text-xl text-negro leading-relaxed container">
            {t("contact-page.section.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
          {/* Left - Contact Info */}
          <div className="relative lg:col-span-2">
            <div className="contact-info-content">
              <h3 className="text-3xl font-bold text-azul-profundo pb-6 leading-tight">
                {t("contact-page.info.title")}
              </h3>

              <p className="text-lg text-negro leading-relaxed pb-12">
                {t("contact-page.info.description")}
              </p>

              {/* Contact Cards */}
              <div className="contact-info-cards flex flex-col md:flex-row lg:flex-col gap-6 pb-12">
                {/* Email Card */}
                <div className="contact-info-card group w-full md:w-1/2 lg:w-full">
                  <a
                    href="mailto:info@galagaagency.com"
                    className="relative overflow-hidden h-full cursor-pointer rounded-2xl bg-white border border-white/20 shadow-xl hover:shadow-2xl shadow-teal/50 transition-shadow duration-500 ease-out group block"
                  >
                    {/* Background image + overlay */}
                    <div className="absolute inset-0 overflow-hidden rounded-2xl">
                      <img
                        src="/assets/img/contacto/email-writing.jpg"
                        alt="Email"
                        className="absolute inset-0 w-full h-full object-cover opacity-20 transition-transform duration-1000 ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-white/60 transition-colors duration-500 group-hover:bg-white/50" />
                    </div>

                    {/* Floating icon */}
                    <div className="absolute -top-4 -right-4 text-[8rem] text-white/10 rotate-6 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:text-white/30">
                      <Mail />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full p-6">
                      {/* Themed Icon Bubble */}
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal/80 via-teal to-azul-profundo flex items-center justify-center text-blanco text-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg shadow-lg">
                        <Mail className="w-7 h-7" />
                      </div>

                      <h4 className="text-xl font-black leading-tight py-4 text-teal transition-transform duration-300 group-hover:scale-[1.02]">
                        {t("contact-page.info.email")}
                      </h4>

                      <p className="text-md font-semibold leading-relaxed flex-1 text-azul-profundo">
                        info@galagaagency.com
                      </p>

                      {/* CTA */}
                      <div className="mt-4 flex items-center justify-end gap-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-teal via-teal to-azul-profundo rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg">
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
                    </div>

                    {/* Subtle glow border */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-teal/80 via-teal to-azul-profundo opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-sm" />
                  </a>
                </div>

                {/* Location Card */}
                <div className="contact-info-card group w-full md:w-1/2 lg:w-full">
                  <a
                    href="https://maps.google.com/?q=C.+Arado%2C+35200+Telde%2C+Las+Palmas+de+Gran+Canaria%2C+Spain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden h-full cursor-pointer rounded-2xl bg-white border border-white/20 shadow-xl hover:shadow-2xl shadow-mandarina/50 transition-shadow duration-500 ease-out group block"
                  >
                    {/* Background image + overlay */}
                    <div className="absolute inset-0 overflow-hidden rounded-2xl">
                      <img
                        src="/assets/img/contacto/map.png"
                        alt="Location"
                        className="absolute inset-0 w-full h-full object-cover opacity-20 transition-transform duration-1000 ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-white/60 transition-colors duration-500 group-hover:bg-white/50" />
                    </div>

                    {/* Floating icon */}
                    <div className="absolute -top-4 -right-4 text-[8rem] text-white/10 rotate-6 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:text-white/30">
                      <MapPin />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full p-6">
                      {/* Themed Icon Bubble */}
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-mandarina/80 via-mandarina to-naranja-tostado flex items-center justify-center text-blanco text-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg shadow-lg">
                        <MapPin className="w-7 h-7" />
                      </div>

                      <h4 className="text-xl font-black leading-tight py-4 text-mandarina transition-transform duration-300 group-hover:scale-[1.02]">
                        {t("contact-page.info.location")}
                      </h4>

                      <p className="text-md font-semibold leading-relaxed flex-1 text-azul-profundo">
                        Calle Arado 2, 35200 Telde, Las Palmas, España
                      </p>

                      {/* CTA */}
                      <div className="mt-4 flex items-center justify-end gap-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-mandarina via-mandarina to-naranja-tostado rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg">
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
                    </div>

                    {/* Subtle glow border */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-mandarina/80 via-mandarina to-naranja-tostado opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-sm" />
                  </a>
                </div>
              </div>

              {/* Social Media Links - Now using consistent components */}
              <div className="contact-social flex flex-col items-center lg:items-start">
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
            <div className="contact-form-container">
              <div className="bg-blanco/70 backdrop-blur-md p-12 rounded-2xl border border-hielo/30 shadow-xl">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
