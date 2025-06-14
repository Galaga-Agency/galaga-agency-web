"use client";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 flex items-center justify-center section">
        <div className="text-center">
          {/* 404 Number */}
          <div className="mb-12">
            <h1 className="text-8xl sm:text-9xl md:text-[12rem] lg:text-[14rem] font-black text-primary/20 mb-6 leading-none">
              404
            </h1>
            <div className="w-32 h-2 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          {/* Error message */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            {t("notFound.title")}
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
            {t("notFound.description")}
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link
              href="/"
              className="bg-primary text-white px-10 md:px-12 py-4 md:py-5 rounded-xl text-lg md:text-xl font-black hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105"
            >
              🏠 {t("notFound.goHome")}
            </Link>

            <Link
              href="/contact"
              className="border-2 md:border-4 border-gray-300 text-gray-700 px-10 md:px-12 py-4 md:py-5 rounded-xl text-lg md:text-xl font-black hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 transform hover:-translate-y-1"
            >
              📞 {t("notFound.contactUs")}
            </Link>
          </div>

          {/* Helpful links */}
          <div className="bg-white p-10 md:p-12 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
              {t("notFound.helpfulLinks")}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/about"
                className="flex items-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 group transform hover:-translate-y-1 hover:shadow-md"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 mr-5 flex-shrink-0">
                  <svg
                    className="w-7 h-7 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-900 text-lg mb-1">
                    {t("notFound.links.about")}
                  </h4>
                  <p className="text-gray-600">
                    {t("notFound.links.aboutDesc")}
                  </p>
                </div>
              </Link>

              <Link
                href="/services"
                className="flex items-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 group transform hover:-translate-y-1 hover:shadow-md"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300 mr-5 flex-shrink-0">
                  <svg
                    className="w-7 h-7 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-900 text-lg mb-1">
                    {t("notFound.links.services")}
                  </h4>
                  <p className="text-gray-600">
                    {t("notFound.links.servicesDesc")}
                  </p>
                </div>
              </Link>

              <Link
                href="/contact"
                className="flex items-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 group transform hover:-translate-y-1 hover:shadow-md"
              >
                <div className="w-14 h-14 bg-creative/10 rounded-xl flex items-center justify-center group-hover:bg-creative/20 transition-colors duration-300 mr-5 flex-shrink-0">
                  <svg
                    className="w-7 h-7 text-creative"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-900 text-lg mb-1">
                    {t("notFound.links.contact")}
                  </h4>
                  <p className="text-gray-600">
                    {t("notFound.links.contactDesc")}
                  </p>
                </div>
              </Link>

              <a
                href="mailto:info@galagaagency.com"
                className="flex items-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 group transform hover:-translate-y-1 hover:shadow-md"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 mr-5 flex-shrink-0">
                  <svg
                    className="w-7 h-7 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-900 text-lg mb-1">
                    {t("notFound.links.email")}
                  </h4>
                  <p className="text-gray-600">
                    info@galagaagency.com
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}