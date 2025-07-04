"use client";

import { useTranslation } from "@/hooks/useTranslation";
import ContactForm from "@/components/forms/ContactForm";
import { MdEmail, MdLocationOn, MdSchedule } from "react-icons/md";
import { FiLinkedin, FiInstagram } from "react-icons/fi";

export default function ContactFormSection() {
  const { t } = useTranslation();

  return (
    <section className="contact-form-section section relative overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-b from-hielo/30 to-white"></div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center pb-16">
          <div className="inline-flex items-center gap-3 pb-4">
            <div className="w-2 h-2 bg-teal rounded-full animate-pulse" />
            <span className="text-teal font-semibold tracking-wider uppercase text-sm">
              {t("contact-page.form.eyebrow")}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-negro pb-4">
            {t("contact-page.form.title")}
          </h2>

          <p className="text-xl text-grafito leading-relaxed">
            {t("contact-page.form.subtitle")}
          </p>
        </div>

        {/* Main grid - equal height columns */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 lg:items-start">
          {/* Form - 3 columns */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-hielo/30 h-full">
              <ContactForm />
            </div>
          </div>

          {/* Info sidebar - 2 columns, single tall card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-hielo/30 h-full flex flex-col">
              {/* Contact Information */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-teal pb-6">
                  {t("contact-page.info.title")}
                </h3>

                <div className="flex flex-col gap-5 pb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MdEmail className="w-5 h-5 text-teal" />
                    </div>
                    <div>
                      <p className="font-semibold text-negro text-sm">
                        {t("contact-page.info.email")}
                      </p>
                      <a
                        href="mailto:info@galagaagency.com"
                        className="text-teal hover:text-azul-profundo transition-colors text-sm"
                      >
                        info@galagaagency.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-mandarina/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MdLocationOn className="w-5 h-5 text-mandarina" />
                    </div>
                    <div>
                      <p className="font-semibold text-negro text-sm">
                        {t("contact-page.info.location")}
                      </p>
                      <p className="text-grafito text-sm">
                        {t("contact-page.info.locationText")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-violeta/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MdSchedule className="w-5 h-5 text-violeta" />
                    </div>
                    <div>
                      <p className="font-semibold text-negro text-sm">
                        {t("contact-page.info.schedule")}
                      </p>
                      <p className="text-grafito text-sm">
                        {t("contact-page.info.scheduleText")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media at bottom */}
              <div className="border-t border-hielo/30 pt-8">
                <h3 className="text-xl font-bold text-teal pb-6">
                  {t("contact-page.social.title")}
                </h3>

                <div className="flex gap-4 pb-6">
                  <a
                    href="https://linkedin.com/company/galagaagency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-teal text-white rounded-lg flex items-center justify-center hover:bg-azul-profundo hover:scale-110 transition-all duration-300 shadow-lg"
                  >
                    <FiLinkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://instagram.com/galagaagency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-mandarina to-naranja-tostado text-white rounded-lg flex items-center justify-center hover:from-purple-500 hover:to-pink-500 hover:scale-110 transition-all duration-300 shadow-lg"
                  >
                    <FiInstagram className="w-6 h-6" />
                  </a>
                </div>

                <p className="text-grafito text-sm leading-relaxed">
                  {t("contact-page.social.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
