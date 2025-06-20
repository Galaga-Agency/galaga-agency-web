"use client";

import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";
import { services } from "@/data/services";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-400 to-cyan-300 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary-400 to-accent rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="container px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
            
            {/* Brand section */}
            <div className="md:col-span-2 lg:col-span-5">
              <div className="mb-6 lg:mb-8">
                <img
                  src="/assets/img/logos/logo-full-white.png"
                  alt="Galaga Agency Logo"
                  className="h-12 sm:h-16 lg:h-20 w-auto filter brightness-110"
                />
              </div>
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl pb-6 lg:pb-8 leading-relaxed max-w-lg">
                {t("footer.description")}
              </p>
              
              {/* Enhanced social links */}
              <div className="flex gap-3 sm:gap-4 pb-6 lg:pb-8">
                <Link
                  href="https://linkedin.com/company/galagaagency"
                  className="group w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:bg-teal-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 border border-white/10 hover:border-teal-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
                
                <Link
                  href="https://instagram.com/galagaagency"
                  className="group w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 border border-white/10 hover:border-pink-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
              </div>

              {/* Call to action */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <p className="text-teal-300 font-medium pb-6">Ready to transform your business?</p>
                <SecondaryButton
                  href="/contact"
                  darkBg
                >
                  {t("footer.getInTouch")}
                  <svg className="w-8 h-8 pl-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </SecondaryButton>
              </div>
            </div>

            {/* Services section */}
            <div className="lg:col-span-3">
              <h3 className="font-bold text-lg sm:text-xl lg:text-2xl text-white pb-4 sm:pb-6 relative">
                {t("footer.services")}
              </h3>
              <ul className="flex flex-col gap-6">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.href}
                      className="group text-gray-300 hover:text-white transition-all duration-300 flex items-center text-base relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-teal-400 after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {t(service.title)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact section */}
            <div className="md:col-span-2 lg:col-span-4">
              <h3 className="font-bold text-lg sm:text-xl lg:text-2xl text-white pb-4 sm:pb-6 relative">
                {t("footer.contact")}
              </h3>
              <div className="flex flex-col gap-4 sm:gap-6">
                <a
                  href="mailto:info@galagaagency.com"
                  className="group flex items-center text-gray-300 hover:text-white transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-teal-600 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 pl-3">Email</p>
                    <p className="font-medium pl-3">info@galagaagency.com</p>
                  </div>
                </a>

                <div className="flex items-center text-gray-300">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 pl-3">Location</p>
                    <p className="font-medium pl-3">{t("footer.location")}</p>
                  </div>
                </div>

                <PrimaryButton
                  href="/contact"      
                  className="mt-6"          >
                  {t("footer.getInTouch")}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="container px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400 gap-4">
              <p className="text-sm sm:text-base text-center sm:text-left">
                © {currentYear} Galaga Agency. {t("footer.allRightsReserved")}
              </p>
              <div className="flex items-center gap-6 sm:gap-8">
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors duration-300 text-sm sm:text-base relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-teal-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {t("footer.privacy")}
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors duration-300 text-sm sm:text-base relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-teal-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {t("footer.terms")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}