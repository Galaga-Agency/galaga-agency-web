"use client";

import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

export default function CTASection() {
  const { t } = useTranslation();
  
  return (
    <section className="section relative bg-gradient-to-br from-neutral-50 to-neutral-100">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-16 w-80 h-80 bg-secondary-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 text-center">
        
        {/* Main content */}
        <div className="pb-20">
          <h2 className="section-title text-primary-600 pb-8">
            {t("cta.readyToTransform")}
          </h2>
          <p className="text-xl text-secondary-700 leading-relaxed">
            {t("cta.subtitle")}
          </p>
        </div>

        {/* Simple benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
          <div className="bg-white border-2 border-primary-200 rounded-2xl p-8 shadow-lg">
            <h3 className="text-lg font-bold text-primary-700 pb-4">
              {t("cta.benefit1.title")}
            </h3>
            <p className="text-secondary-600">
              {t("cta.benefit1.description")}
            </p>
          </div>

          <div className="bg-white border-2 border-primary-200 rounded-2xl p-8 shadow-lg">
            <h3 className="text-lg font-bold text-primary-700 pb-4">
              {t("cta.benefit2.title")}
            </h3>
            <p className="text-secondary-600">
              {t("cta.benefit2.description")}
            </p>
          </div>

          <div className="bg-white border-2 border-primary-200 rounded-2xl p-8 shadow-lg">
            <h3 className="text-lg font-bold text-primary-700 pb-4">
              {t("cta.benefit3.title")}
            </h3>
            <p className="text-secondary-600">
              {t("cta.benefit3.description")}
            </p>
          </div>
        </div>

        {/* Clean CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pb-20">
          <Link
            href="/contact"
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {t("cta.scheduleCall")}
          </Link>
          
          <Link
            href="/about"
            className="border-2 border-primary-600 hover:border-primary-700 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
          >
            {t("cta.knowMore")}
          </Link>
        </div>

        {/* Contact info */}
        <div className="border-t border-secondary-200 pt-12">
          <p className="text-secondary-600 mb-6">
            {t("cta.directContact")}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:info@galagaagency.com"
              className="text-primary-600 hover:text-primary-700 transition-colors duration-300 text-lg"
            >
              info@galagaagency.com
            </a>
            
            <a
              href="https://linkedin.com/company/galagaagency"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 transition-colors duration-300 text-lg"
            >
              LinkedIn
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
}