"use client";

import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import PrimaryButton from "../ui/PrimaryButton";
import { services } from "@/data/services";
import SocialIcons from "../SocialIcons";
import SecondaryButton from "../ui/SecondaryButton";
import { getLocalizedRoute } from "@/utils/navigation";

export default function Footer() {
  const { t, language } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white overflow-hidden">
      <div className="relative z-10">
        {/* Main footer content */}
        <div className="container px-4 py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-20">
            {/* Brand section */}
            <div className="lg:col-span-5">
              <div className="pb-8 md:pb-10">
                <img
                  src="/assets/img/logos/logo-full-white.webp"
                  alt="Galaga Agency Logo"
                  className="h-12 md:h-16 lg:h-20 w-auto filter brightness-110"
                />
              </div>
              <p className="text-gray-300 text-base md:text-lg lg:text-xl pb-8 md:pb-10 leading-relaxed">
                {t("footer.description")}
              </p>

              {/* Enhanced social links */}
              <div className="flex gap-3 md:gap-4 pb-10 md:pb-12">
                <SocialIcons />
              </div>

              {/* Single enhanced CTA - much cleaner design */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/10">
                <p className="text-teal-300 font-medium pb-4 text-base md:text-lg">
                  {t("footer.cta.title")}
                </p>
                <p className="text-gray-400 pb-6 text-sm md:text-base">
                  {t("footer.cta.description")}
                </p>
                <PrimaryButton
                  href={getLocalizedRoute("contacto", language)}
                  className="w-full"
                >
                  {t("footer.getInTouch")}
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </PrimaryButton>
              </div>
            </div>

            {/* Services and Contact section */}
            <div className="lg:col-span-7 flex flex-col gap-12 md:gap-16">
              {/* Services section - 2x3 grid on desktop */}
              <div>
                <h3 className="font-bold text-lg md:text-xl lg:text-2xl text-white pb-6 md:pb-8">
                  {t("footer.services")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
                  {services.map((service, index) => {
                    const translatedSlug = t(service.slug);
                    const serviceUrl = getLocalizedRoute(
                      `servicios/${translatedSlug}`,
                      language
                    );

                    return (
                      <div key={index} className="h-8 flex items-center">
                        <Link
                          href={serviceUrl}
                          className="group text-gray-300 hover:text-white transition-all duration-300 text-base md:text-lg"
                        >
                          <span className="relative inline-block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-teal-400 after:transition-all after:duration-300 group-hover:after:w-full">
                            {t(service.title)}
                          </span>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Contact section */}
              <div>
                <h3 className="font-bold text-lg md:text-xl lg:text-2xl text-white pb-6 md:pb-8">
                  {t("footer.contact")}
                </h3>
                <div className="flex flex-col gap-6 md:gap-8">
                  <a
                    href="mailto:info@galagaagency.com"
                    className="group flex items-center text-gray-300 hover:text-white transition-all duration-300"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-teal-600 transition-colors duration-300">
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div className="pl-4">
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="font-medium text-base md:text-lg">
                        info@galagaagency.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://maps.google.com/?q=C.+Arado%2C+35200+Telde%2C+Las+Palmas+de+Gran+Canaria%2C+Spain"
                    className="group flex items-center text-gray-300 hover:text-white transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-teal-600 transition-colors duration-300">
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6"
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
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="font-medium text-base md:text-lg">
                        {t("footer.location")}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="container px-4 py-6 md:py-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 gap-4">
              <p className="text-sm md:text-base text-center md:text-left">
                © {currentYear} Galaga Agency. {t("footer.allRightsReserved")}
              </p>
              <div className="flex items-center gap-6 md:gap-8">
                <Link
                  href={
                    language === "es"
                      ? "/es/politica-de-privacidad"
                      : "/en/privacy-policy"
                  }
                  className="group hover:text-white transition-colors duration-300 text-sm md:text-base"
                >
                  <span className="relative inline-block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-teal-400 after:transition-all after:duration-300 group-hover:after:w-full">
                    {t("footer.privacy")}
                  </span>
                </Link>
                <Link
                  href={
                    language === "es"
                      ? "/es/terminos-y-condiciones"
                      : "/en/terms-and-conditions"
                  }
                  className="group hover:text-white transition-colors duration-300 text-sm md:text-base"
                >
                  <span className="relative inline-block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-teal-400 after:transition-all after:duration-300 group-hover:after:w-full">
                    {t("footer.terms")}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
