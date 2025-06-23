"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { navigationItems, ctaButtonKey } from "@/data/menu";
import { useTranslation } from "@/hooks/useTranslation";
import PrimaryButton from "@/components/ui/PrimaryButton";
import LanguageSelector from "@/components/LanguageSelector";
import HamburgerToggle from "@/components/HamburgerToggle";
import { initNavbarAnimations } from "@/utils/animations/navbar-animation";
import useDeviceDetect from "@/hooks/useDeviceDetect";
import SecondaryButton from "../ui/SecondaryButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { t, language, toggleLanguage } = useTranslation();
  const { isMobile } = useDeviceDetect();
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    if (!navRef.current) return;

    const animationCleanup = initNavbarAnimations({
      navElement: navRef.current,
      mobileMenuElement: mobileMenuRef.current,
      isMenuOpen: isOpen,
    });

    return () => {
      animationCleanup();
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <HamburgerToggle
        isOpen={isOpen}
        onClick={toggleMenu}
        isScrolled={isScrolled}
      />

      <nav
        ref={navRef}
        className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? "bg-blanco/95 backdrop-blur-md border-b border-hielo"
            : "bg-transparent"
        }`}
      >
        <div className="px-3 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 md:h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 logo-container min-w-0">
              <Link href="/" className="block">
                <img
                  src={
                    isScrolled
                      ? isMobile
                        ? "/assets/img/logos/logo-mobile.webp"
                        : "/assets/img/logos/logo-full.webp"
                      : isMobile
                      ? "/assets/img/logos/logo-mobile-white.webp"
                      : "/assets/img/logos/logo-full-white.webp"
                  }
                  alt="Galaga Agency Logo"
                  className="h-16 md:h-8 lg:h-14 w-auto max-w-[150px] md:max-w-none"
                />
              </Link>
            </div>

            {/* Desktop Navigation - Only show on xl+ screens */}
            <div className="hidden xl:flex items-center justify-center flex-1">
              <ul className="flex items-center gap-1 nav-links">
                {navigationItems.map((item, index) => (
                  <li key={item.href} className="nav-item" data-index={index}>
                    <Link
                      href={item.href}
                      className={`relative text-base font-semibold py-3 px-4 transition-colors duration-300 nav-link ${
                        pathname === item.href
                          ? isScrolled
                            ? "text-teal"
                            : "text-white"
                          : isScrolled
                          ? "text-azul-profundo hover:text-teal"
                          : "text-white hover:text-white/80 drop-shadow-lg"
                      }`}
                    >
                      <span className="relative z-10">{t(item.labelKey)}</span>
                      <span
                        className={`absolute inset-0 rounded-lg transform scale-0 hover-bg transition-all duration-75 ${
                          isScrolled
                            ? "bg-gradient-to-r from-teal/5 to-turquesa/10"
                            : "bg-white/20"
                        }`}
                      ></span>
                      {pathname === item.href && (
                        <span
                          className={`absolute inset-0 rounded-lg active-bg ${
                            isScrolled
                              ? "bg-gradient-to-r from-teal/5 to-turquesa/10"
                              : "bg-white/20"
                          }`}
                        ></span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop Actions - Only show on xl+ screens */}
            <div className="hidden xl:flex items-center gap-4 desktop-actions">
              <div className="action-item" data-delay="0">
                <LanguageSelector
                  language={language}
                  onToggle={toggleLanguage}
                  isScrolled={isScrolled}
                />
              </div>
              <div className="action-item" data-delay="100">
                {isScrolled ? (
                  <PrimaryButton href="/contact" size="md">
                    {t(ctaButtonKey)}
                  </PrimaryButton>
                ) : (
                  <SecondaryButton href="/contact" size="md" className="text-white/80 hover:text-white hover:border-white">
                    {t(ctaButtonKey)}
                  </SecondaryButton>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop - Show on everything below xl */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[999] xl:hidden mobile-backdrop ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } transition-opacity duration-300`}
        onClick={closeMenu}
      />

      {/* Mobile Menu - Show on everything below xl */}
      <div
        ref={mobileMenuRef}
        className={`fixed inset-x-4 top-16 bottom-16 md:left-[50%] md:translate-x-[-50%] md:top-20 md:bottom-auto md:max-h-[70vh] md:w-96 bg-white rounded-2xl shadow-2xl z-[1001] xl:hidden mobile-menu transform transition-all duration-400 ease-out overflow-hidden ${
          isOpen
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <div className="p-4 md:p-6 h-full flex flex-col">
          {/* Logo Section */}
          <div className="pb-4 md:pb-6 flex-shrink-0 text-center">
            <img
              src="/assets/img/logos/logo-full.webp"
              alt="Galaga Logo"
              className="h-12 md:h-16 mx-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="flex flex-col gap-1 md:gap-2">
              {navigationItems.map((item, index) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={`block px-3 md:px-4 py-3 md:py-3.5 text-base md:text-lg font-medium rounded-xl transition-all duration-200 ${
                      pathname === item.href
                        ? "bg-teal text-white"
                        : "text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    {t(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom Section */}
          <div className="pt-4 md:pt-6 border-t border-gray-100">
            {/* Language Selector */}
            <button
              onClick={toggleLanguage}
              className="w-full text-left px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base text-gray-600 hover:bg-gray-50 rounded-lg transition-colors mb-3 md:mb-4"
            >
              <span className="text-xs text-gray-400 block">
                {t("nav.language")}
              </span>
              {language === "es" ? "Español" : "English"}
            </button>

            {/* Social Media & Contact */}
            <div className="pb-4 border-b border-gray-100 mb-4">
              <a
                href="mailto:info@galagaagency.com"
                className="group flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-all duration-200 mb-2"
              >
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-teal-100 transition-colors duration-200">
                  <svg
                    className="w-4 h-4 text-gray-600 group-hover:text-teal-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span className="pl-3 text-sm font-medium">
                  info@galagaagency.com
                </span>
              </a>

              <div className="flex items-center gap-3 px-3">
                <span className="text-xs text-gray-400 font-medium">
                  {t("footer.followUs")}
                </span>
                <div className="flex gap-2">
                  <a
                    href="https://linkedin.com/company/galagaagency"
                    className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-white hover:bg-blue-600 transition-all duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>

                  <a
                    href="https://instagram.com/galagaagency"
                    className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-white hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <PrimaryButton
              href="/contact"
              size="md"
              className="w-full justify-center text-sm md:text-base py-2.5 md:py-3"
              onClick={closeMenu}
            >
              {t(ctaButtonKey)}
            </PrimaryButton>
          </div>
        </div>
      </div>
    </>
  );
}
