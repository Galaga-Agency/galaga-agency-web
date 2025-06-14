"use client";

import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

export default function CTASection() {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-primary via-primary to-accent">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center text-white">
          
          {/* Main headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 lg:mb-8 leading-tight">
            {t("cta.readyToTransform")}
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-12 lg:mb-16 opacity-90 leading-relaxed">
            {t("cta.subtitle")}
          </p>

          {/* Benefits list */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
            <div className="bg-white/10 p-6 lg:p-8 rounded-2xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="font-bold text-lg lg:text-xl mb-3">
                {t("cta.benefit1.title")}
              </h3>
              <p className="text-sm lg:text-base opacity-90 leading-relaxed">
                {t("cta.benefit1.description")}
              </p>
            </div>
            <div className="bg-white/10 p-6 lg:p-8 rounded-2xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="font-bold text-lg lg:text-xl mb-3">
                {t("cta.benefit2.title")}
              </h3>
              <p className="text-sm lg:text-base opacity-90 leading-relaxed">
                {t("cta.benefit2.description")}
              </p>
            </div>
            <div className="bg-white/10 p-6 lg:p-8 rounded-2xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="font-bold text-lg lg:text-xl mb-3">
                {t("cta.benefit3.title")}
              </h3>
              <p className="text-sm lg:text-base opacity-90 leading-relaxed">
                {t("cta.benefit3.description")}
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 justify-center items-center mb-12 lg:mb-16">
            <Link
              href="/contact"
              className="bg-white text-primary px-8 sm:px-12 md:px-16 py-4 md:py-6 rounded-xl md:rounded-2xl text-lg md:text-xl lg:text-2xl font-black hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 hover:scale-110"
            >
              📞 {t("cta.scheduleCall")}
            </Link>
            <Link
              href="/about"
              className="border-2 md:border-4 border-white text-white px-8 sm:px-12 md:px-16 py-4 md:py-6 rounded-xl md:rounded-2xl text-lg md:text-xl lg:text-2xl font-black hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-md"
            >
              {t("cta.knowMore")} →
            </Link>
          </div>

          {/* Contact info */}
          <div className="pt-8 lg:pt-12 border-t border-white/20">
            <p className="text-lg md:text-xl lg:text-2xl mb-6 lg:mb-8 font-semibold">
              {t("cta.directContact")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-12 justify-center items-center">
              <a
                href="mailto:info@galagaagency.com"
                className="flex items-center space-x-3 text-white hover:text-gray-200 transition-all duration-300 text-lg lg:text-xl font-medium hover:scale-105"
              >
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                  <svg
                    className="w-4 h-4 lg:w-5 lg:h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span>info@galagaagency.com</span>
              </a>
              <a
                href="https://linkedin.com/company/galagaagency"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white hover:text-gray-200 transition-all duration-300 text-lg lg:text-xl font-medium hover:scale-105"
              >
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                  <svg
                    className="w-4 h-4 lg:w-5 lg:h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}