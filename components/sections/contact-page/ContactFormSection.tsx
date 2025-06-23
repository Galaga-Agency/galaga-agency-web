"use client";

import { useTranslation } from "@/hooks/useTranslation";
import ContactForm from "@/components/forms/ContactForm";

export default function ContactFormSection() {
  const { t } = useTranslation();

  return (
    <section className="contact-form-section section relative overflow-hidden">
      {/* Diagonal background layers */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-hielo/50 via-turquesa/15 to-blanco"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 50%)",
          }}
        ></div>

        <div
          className="absolute inset-0 bg-gradient-to-br from-blanco via-hielo/30 to-blanco"
          style={{
            clipPath: "polygon(0 50%, 100% 70%, 100% 100%, 0 100%)",
          }}
        ></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Form Side */}
          <div className="contact-form-container">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-xl border border-hielo/50">
              <div className="pb-8">
                <div className="inline-flex items-center gap-3 pb-4">
                  <div className="w-2 h-2 bg-teal rounded-full animate-pulse"></div>
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
          <div className="contact-info-container space-y-8">
            {/* Contact Information Card */}
            <div className="contact-info-card bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-8 md:p-10 shadow-xl border border-hielo/50">
              <h3 className="text-2xl md:text-3xl font-bold text-teal pb-8">
                {t("contact-page.info.title")}
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="contact-info-item flex items-start group">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-teal/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal/20 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 md:w-7 md:h-7 text-teal"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
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
                    <svg
                      className="w-6 h-6 md:w-7 md:h-7 text-mandarina"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
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
                    <svg
                      className="w-6 h-6 md:w-7 md:h-7 text-violeta"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
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
                  <svg
                    className="w-7 h-7 md:w-8 md:h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                <a
                  href="https://instagram.com/galagaagency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-mandarina to-naranja-tostado text-white rounded-xl flex items-center justify-center hover:from-purple-500 hover:to-pink-500 hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                >
                  <svg
                    className="w-7 h-7 md:w-8 md:h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Promise Card */}
            <div className="contact-promise-card bg-gradient-to-r from-teal/5 to-turquesa/10 rounded-2xl md:rounded-3xl p-8 md:p-10 border border-teal/20 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-teal"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
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
