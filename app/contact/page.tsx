"use client";

import Navbar from "@/components/layout/Navbar";
import ContactForm from "@/components/forms/ContactForm";
import Footer from "@/components/layout/Footer";
import { useTranslation } from "@/hooks/useTranslation";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Hero section */}
        <section className="bg-gradient-to-br from-primary to-accent text-white section section-spacing">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              {t("contact.title")}
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl opacity-90 leading-relaxed">
              {t("contact.subtitle")}
            </p>
          </div>
        </section>

        {/* Contact content */}
        <section className="section section-spacing">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact form */}
            <div className="bg-white p-10 lg:p-12 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {t("contact.form.title")}
              </h2>
              <ContactForm />
            </div>

            {/* Contact information */}
            <div className="space-y-8">
              {/* Direct contact */}
              <div className="bg-white p-10 lg:p-12 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  {t("contact.info.title")}
                </h3>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mr-6">
                      <svg
                        className="w-7 h-7 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-xl mb-2">
                        {t("contact.email")}
                      </h4>
                      <a
                        href="mailto:info@galagaagency.com"
                        className="text-primary hover:text-primary-dark transition-colors duration-200 text-lg"
                      >
                        info@galagaagency.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 mr-6">
                      <svg
                        className="w-7 h-7 text-accent"
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
                    <div>
                      <h4 className="font-semibold text-gray-900 text-xl mb-2">
                        {t("contact.location")}
                      </h4>
                      <p className="text-gray-600 text-lg">
                        {t("contact.locationText")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-creative/10 rounded-xl flex items-center justify-center flex-shrink-0 mr-6">
                      <svg
                        className="w-7 h-7 text-creative"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-xl mb-2">
                        {t("contact.schedule")}
                      </h4>
                      <p className="text-gray-600 text-lg">
                        {t("contact.scheduleText")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social media */}
              <div className="bg-white p-10 lg:p-12 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  {t("contact.social.title")}
                </h3>

                <div className="flex">
                  <a
                    href="https://linkedin.com/company/galagaagency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary-dark transition-colors duration-200 mr-6"
                  >
                    <svg
                      className="w-8 h-8"
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
                    className="w-16 h-16 bg-accent text-white rounded-xl flex items-center justify-center hover:bg-accent-dark transition-colors duration-200"
                  >
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick response promise */}
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-2xl border border-primary/20">
                <h4 className="font-semibold text-gray-900 mb-3 text-xl">
                  {t("contact.promise.title")}
                </h4>
                <p className="text-gray-600 text-lg">
                  {t("contact.promise.description")}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}