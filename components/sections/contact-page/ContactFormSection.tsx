"use client";

import { useTranslation } from "@/hooks/useTranslation";
import ContactForm from "@/components/forms/ContactForm";
import { MdEmail, MdLocationOn, MdSchedule } from "react-icons/md";
import { FiLinkedin, FiInstagram, FiCheckCircle } from "react-icons/fi";

export default function ContactFormSection() {
  const { t } = useTranslation();

  return (
    <section className="contact-form-section section relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-hielo/50 via-turquesa/15 to-blanco"
          style={{ clipPath: "polygon(0 0,100% 0,100% 70%,0 50%)" }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-blanco via-hielo/30 to-blanco"
          style={{ clipPath: "polygon(0 50%,100% 70%,100% 100%,0 100%)" }}
        />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Form Side */}
          <div className="contact-form-container">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-xl border border-hielo/50">
              <div className="pb-8">
                <div className="inline-flex items-center gap-3 pb-4">
                  <div className="w-2 h-2 bg-teal rounded-full animate-pulse" />
                  <span className="text-teal font-semibold tracking-wider uppercase text-sm">
                    {t("contact-page.form.eyebrow")}
                  </span>
                </div>

                <h2 className="contact-form-title text-3xl md:text-4xl font-black text-teal pb-4">
                  {t("contact-page.form.title")}
                </h2>

                <p className="text-lg text-grafito leading-relaxed">
                  {t("contact-page.form.subtitle")}
                </p>
              </div>

              <ContactForm />
            </div>
          </div>

          {/* Info Side */}
          <div className="contact-info-container flex flex-col gap-12 lg:gap-16">
            {/* Contact Information Card */}
            <div className="contact-info-card bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-8 md:p-10 shadow-xl border border-hielo/50">
              <h3 className="text-2xl md:text-3xl font-bold text-teal pb-8">
                {t("contact-page.info.title")}
              </h3>

              <div className="flex flex-col gap-6 md:gap-8">
                {/* Email */}
                <div className="contact-info-item flex items-start group">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-teal/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal/20 transition-colors duration-300">
                    <MdEmail className="w-6 h-6 md:w-7 md:h-7 text-teal" />
                  </div>
                  <div className="pl-4">
                    <h4 className="font-semibold text-negro text-lg pb-1">
                      {t("contact-page.info.email")}
                    </h4>
                    <a
                      href="mailto:info@galagaagency.com"
                      className="text-teal hover:text-azul-profundo transition-colors duration-300 font-medium"
                    >
                      info@galagaagency.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="contact-info-item flex items-start group">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-mandarina/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-mandarina/20 transition-colors duration-300">
                    <MdLocationOn className="w-6 h-6 md:w-7 md:h-7 text-mandarina" />
                  </div>
                  <div className="pl-4">
                    <h4 className="font-semibold text-negro text-lg pb-1">
                      {t("contact-page.info.location")}
                    </h4>
                    <p className="text-grafito">
                      {t("contact-page.info.locationText")}
                    </p>
                  </div>
                </div>

                {/* Schedule */}
                <div className="contact-info-item flex items-start group">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-violeta/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-violeta/20 transition-colors duration-300">
                    <MdSchedule className="w-6 h-6 md:w-7 md:h-7 text-violeta" />
                  </div>
                  <div className="pl-4">
                    <h4 className="font-semibold text-negro text-lg pb-1">
                      {t("contact-page.info.schedule")}
                    </h4>
                    <p className="text-grafito">
                      {t("contact-page.info.scheduleText")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="contact-social-card bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-8 md:p-10 shadow-xl border border-hielo/50">
              <h3 className="text-2xl md:text-3xl font-bold text-teal pb-6">
                {t("contact-page.social.title")}
              </h3>

              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/company/galagaagency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-14 h-14 md:w-16 md:h-16 bg-teal text-white rounded-xl flex items-center justify-center hover:bg-azul-profundo hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                >
                  <FiLinkedin className="w-7 h-7 md:w-8 md:h-8" />
                </a>
                <a
                  href="https://instagram.com/galagaagency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-mandarina to-naranja-tostado text-white rounded-xl flex items-center justify-center hover:from-purple-500 hover:to-pink-500 hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                >
                  <FiInstagram className="w-7 h-7 md:w-8 md:h-8" />
                </a>
              </div>
            </div>

            {/* Promise Card */}
            <div className="contact-promise-card bg-gradient-to-r from-teal/5 to-turquesa/10 rounded-2xl md:rounded-3xl p-8 md:p-10 border border-teal/20 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FiCheckCircle className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <h4 className="font-bold text-negro text-xl pb-2">
                    {t("contact-page.promise.title")}
                  </h4>
                  <p className="text-grafito leading-relaxed">
                    {t("contact-page.promise.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
