"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { getLocalizedNavigationItems, ctaButtonKey } from "@/data/menu";
import {
  getLocalizedRoute,
  getRouteForLanguageSwitch,
} from "@/utils/navigation";
import { useTranslation } from "@/hooks/useTranslation";
import { services } from "@/data/services";
import PrimaryButton from "@/components/ui/PrimaryButton";
import LanguageSelector from "@/components/LanguageSelector";
import HamburgerToggle from "@/components/HamburgerToggle";
import useDeviceDetect from "@/hooks/useDeviceDetect";
import SecondaryButton from "../ui/SecondaryButton";
import Image from "next/image";
import { initMobilePortal } from "@/utils/animations/mobile-portal";
import {
  FiChevronDown,
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname() || "/";
  const router = useRouter();
  const currentLang: "es" | "en" = pathname.startsWith("/en") ? "en" : "es";
  const { t, language, toggleLanguage } = useTranslation();
  const { isMobile } = useDeviceDetect();
  const navRef = useRef<HTMLElement>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const localizedNavItems = getLocalizedNavigationItems(currentLang);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    return initMobilePortal({ isOpen });
  }, [isOpen]);

  const toggleMenu = () => {
    setIsServicesMobileOpen(false);
    setIsOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setIsServicesMobileOpen(false);
    setIsOpen(false);
  };

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  const handleLanguageSwitch = () => {
    const targetLanguage: "es" | "en" = currentLang === "es" ? "en" : "es";
    const nextPath = getRouteForLanguageSwitch(pathname, targetLanguage);
    router.push(nextPath);
  };

  useEffect(() => {
    if (language !== currentLang) {
      toggleLanguage();
    }
  }, [currentLang]);

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
            <div className="flex-shrink-0 navbar-logo min-w-0">
              <Link href={getLocalizedRoute("", currentLang)} className="block">
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

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center justify-center flex-1">
              <ul className="flex items-center gap-1 navbar-links">
                {localizedNavItems.map((item, index) => {
                  const isServicesItem =
                    item.href.includes("services") ||
                    item.href.includes("servicios");

                  return (
                    <li
                      key={item.href}
                      className="navbar-link-item relative"
                      onMouseEnter={
                        isServicesItem ? handleServicesMouseEnter : undefined
                      }
                      onMouseLeave={
                        isServicesItem ? handleServicesMouseLeave : undefined
                      }
                    >
                      <Link
                        href={item.href}
                        className={`relative text-base font-semibold py-3 px-4 transition-colors duration-300 flex items-center gap-1 ${
                          pathname === item.href
                            ? isScrolled
                              ? "text-teal"
                              : "text-white"
                            : isScrolled
                            ? "text-azul-profundo hover:text-teal"
                            : "text-white hover:text-white/80 drop-shadow-lg"
                        }`}
                      >
                        <span className="relative z-10">{t(item.label)}</span>
                        {isServicesItem && (
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isServicesOpen ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        )}
                      </Link>

                      {/* Services Submenu */}
                      {isServicesItem && (
                        <div
                          className={`absolute top-full left-0 mt-2 w-80 transition-all duration-300 ease-out ${
                            isServicesOpen
                              ? "opacity-100 visible translate-y-0"
                              : "opacity-0 invisible translate-y-4 pointer-events-none"
                          }`}
                          onMouseEnter={handleServicesMouseEnter}
                          onMouseLeave={handleServicesMouseLeave}
                        >
                          <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 p-4">
                            <div className="space-y-1">
                              {services.map((service, index) => {
                                const translatedSlug = t(service.slug);
                                const serviceUrl = `/${currentLang}/${
                                  currentLang === "es"
                                    ? "servicios"
                                    : "services"
                                }/${translatedSlug}`;

                                if (!service.hasRedirection) {
                                  return (
                                    <div
                                      key={index}
                                      className="flex items-center gap-3 p-3 rounded-lg opacity-50 cursor-not-allowed"
                                    >
                                      <div className="w-8 h-8 bg-gradient-to-br from-teal to-turquesa rounded-lg flex items-center justify-center flex-shrink-0">
                                        <service.icon className="w-4 h-4 text-white" />
                                      </div>
                                      <span className="text-sm font-medium text-azul-profundo">
                                        {t(service.title)}
                                      </span>
                                    </div>
                                  );
                                }

                                return (
                                  <Link
                                    key={index}
                                    href={serviceUrl}
                                    className="group flex items-center gap-3 p-3 rounded-lg hover:bg-teal/5 transition-all duration-200"
                                  >
                                    <div className="w-8 h-8 bg-gradient-to-br from-teal to-turquesa rounded-lg flex items-center justify-center flex-shrink-0">
                                      <service.icon className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-sm font-medium text-azul-profundo group-hover:text-teal transition-colors">
                                      {t(service.title)}
                                    </span>
                                  </Link>
                                );
                              })}

                              <div className="pt-2 mt-2 border-t border-teal/10">
                                <Link
                                  href={getLocalizedRoute(
                                    "services",
                                    currentLang
                                  )}
                                  className="group flex items-center justify-between p-3 rounded-lg bg-teal/5 hover:bg-teal/10 transition-all duration-200"
                                >
                                  <span className="text-sm font-semibold text-teal">
                                    Ver Todos los Servicios
                                  </span>
                                  <svg
                                    className="w-4 h-4 text-teal group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Desktop Actions */}
            <div className="hidden xl:flex items-center gap-4 navbar-desktop-actions">
              <div className="navbar-lang-selector">
                <LanguageSelector
                  language={currentLang}
                  onToggle={handleLanguageSwitch}
                  isScrolled={isScrolled}
                />
              </div>
              <div className="navbar-cta-button">
                {isScrolled ? (
                  <PrimaryButton
                    href={getLocalizedRoute("contacto", currentLang)}
                    size="md"
                    bubbleTransition={true}
                    bubbleColor="var(--color-teal)"
                    transitionDuration={0.8}
                  >
                    {t(ctaButtonKey)}
                  </PrimaryButton>
                ) : (
                  <SecondaryButton
                    href={getLocalizedRoute("contacto", currentLang)}
                    size="md"
                    className="text-white/80 hover:text-white hover:border-white"
                    bubbleTransition={true}
                    bubbleColor="var(--color-teal)"
                    transitionDuration={0.8}
                  >
                    {t(ctaButtonKey)}
                  </SecondaryButton>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* === MOBILE MENU PORTAL ==================================== */}
      <div
        className="xl:hidden fixed inset-0 z-[998] pointer-events-none"
        aria-hidden={!isOpen}
      >
        {/* Backdrop */}
        <button
          onClick={closeMenu}
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Close menu"
        />

        {/* Clip-path portal */}
        <div
          className="portal-layer absolute inset-0 pointer-events-auto"
          style={{
            clipPath: "circle(0px at 100% 0%)",
            WebkitClipPath: "circle(0px at 100% 0%)",
            willChange: "clip-path",
          }}
        >
          <div className="portal-surface absolute inset-0 text-white bg-gradient-to-br from-azul-profundo via-slate-800 to-teal overflow-auto">
            {/* WOW overlays */}
            <div className="portal-glow absolute inset-0 opacity-0 pointer-events-none" />
            <div className="portal-sweep absolute inset-0 opacity-0 pointer-events-none" />

            {/* Header */}
            <div className="portal-header flex items-center justify-between px-5 md:px-6 pt-6 pb-2">
              <Image
                src="/assets/img/logos/logo-mobile-white.webp"
                alt="Galaga Logo"
                width={148}
                height={32}
                priority
              />
            </div>

            {/* Navigation */}
            <nav className="mt-6 md:mt-8 px-5 md:px-6">
              <ul className="portal-nav flex flex-col gap-3 md:gap-4 text-lg font-semibold">
                {localizedNavItems.map((item) => {
                  const isServicesItem =
                    item.href.includes("services") ||
                    item.href.includes("servicios");
                  const isActive = pathname === item.href;

                  if (!isServicesItem) {
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className={`group block w-full rounded-2xl px-6 py-5 text-lg font-semibold transition-all duration-300 border
                                ${
                                  isActive
                                    ? "bg-white text-teal shadow-lg border-white/20"
                                    : "bg-white/10 text-white hover:bg-white/20 border-white/15 hover:border-white/30"
                                }`}
                        >
                          <span className="flex items-center justify-between">
                            {t(item.label)}
                            <svg
                              className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </span>
                        </Link>
                      </li>
                    );
                  }

                  // === Services submenu
                  return (
                    <li key={item.href}>
                      <button
                        onClick={() => setIsServicesMobileOpen((s) => !s)}
                        className="w-full flex items-center justify-between rounded-2xl px-6 py-5 text-lg font-semibold bg-white/10 hover:bg-white/20 border border-white/15 hover:border-white/30 transition-all duration-300"
                      >
                        <span>{t(item.label)}</span>
                        <FiChevronDown
                          className={`w-5 h-5 transition-transform ${
                            isServicesMobileOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-[grid-template-rows,opacity,margin] duration-300
                              ${
                                isServicesMobileOpen
                                  ? "pt-3 grid [grid-template-rows:1fr] opacity-100"
                                  : "grid [grid-template-rows:0fr] opacity-0"
                              }`}
                      >
                        <div className="min-h-0">
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                            {services.map((service, i) => {
                              const translatedSlug = t(service.slug);
                              const base =
                                currentLang === "es" ? "servicios" : "services";
                              const url = getLocalizedRoute(
                                `${base}/${translatedSlug}`,
                                currentLang
                              );

                              return (
                                <Link
                                  key={i}
                                  href={service.hasRedirection ? url : "#"}
                                  onClick={closeMenu}
                                  className={`group p-4 rounded-xl transition ring-1 ring-white/15 hover:ring-white/25 flex gap-2 justify-start items-center border
                                        ${
                                          service.hasRedirection
                                            ? "bg-white/8 hover:bg-white/15 border-white/10 hover:border-white/20"
                                            : "bg-white/3 opacity-50 cursor-not-allowed border-white/5"
                                        }`}
                                >
                                  <div className="flex-shrink-0 w-10 h-10 grid place-items-center rounded-xl bg-gradient-to-br from-teal to-turquesa group-hover:scale-110 transition">
                                    <service.icon className="w-5 h-5 text-white flex-shrink-0" />
                                  </div>
                                  <p className="text-sm text-left font-medium text-wrap">
                                    {t(service.title)}
                                  </p>
                                </Link>
                              );
                            })}
                          </div>

                          {/* All Services Link */}
                          <div className="pt-3 md:pt-4">
                            <Link
                              href={getLocalizedRoute("services", currentLang)}
                              onClick={closeMenu}
                              className="group flex items-center justify-between p-6 transition-all duration-200"
                            >
                              <span className="text-sm font-semibold text-white">
                                {currentLang === "es"
                                  ? "Ver Todos los Servicios"
                                  : "View All Services"}
                              </span>
                              <svg
                                className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Extras */}
            <div className="portal-extras py-6 md:mt-8 px-5 md:px-6 flex flex-col gap-4">
              <div className="h-full flex flex-col justify-center gap-3 md:gap-4 flex-1 pt-4 pb-12">
                {/* Email */}
                <a
                  href="mailto:info@galagaagency.com"
                  className="group text-lg font-medium flex items-center gap-4 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center group-hover:bg-teal/30 transition-colors">
                    <FiMail className="flex-shrink-0 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email</p>
                    <span className="text-white font-semibold">
                      info@galagaagency.com
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="text-lg font-medium flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center">
                    <FiMapPin className="flex-shrink-0 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">{t("nav.location")}</p>
                    <span className="text-white font-semibold">
                      Telde, Gran Canaria
                    </span>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div
                  className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl pointer-events-none"
                  style={{
                    background: `
                      radial-gradient(circle at 50% 50%,
                        rgba(76, 188, 197, 0.6) 0%,
                        rgba(76, 188, 197, 0.2) 40%,
                        transparent 70%
                      )
                    `,
                    animation: "pulse-glow 2s ease-in-out infinite alternate",
                  }}
                />

                <div
                  className="container bottom-6 inset-x-0 relative rounded-2xl p-6 border overflow-hidden backdrop-blur-xl"
                  style={{
                    background: `
                      linear-gradient(135deg, 
                        rgba(255, 255, 255, 0.10) 0%,
                        rgba(255, 255, 255, 0.05) 50%,
                        rgba(76, 188, 197, 0.10) 100%
                      )
                    `,
                    borderColor: "rgba(255, 255, 255, 0.12)",
                    boxShadow: `
                      inset 0 1px 0 rgba(255, 255, 255, 0.2),
                      0 20px 40px rgba(0, 0, 0, 0.12)
                    `,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: `
                        radial-gradient(circle at 50% 50%, 
                          rgba(76, 188, 197, 0.15) 0%, 
                          transparent 50%
                        ),
                        linear-gradient(45deg, 
                          transparent 30%, 
                          rgba(76, 188, 197, 0.05) 50%, 
                          transparent 70%
                        )
                      `,
                      willChange: "transform",
                    }}
                  />

                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                      background: `linear-gradient(90deg, 
                        transparent 0%, 
                        rgba(76, 188, 197, 0.5) 50%, 
                        transparent 100%
                      )`,
                      transform: "translateX(-100%)",
                      animation: "scan-line 3s ease-in-out infinite",
                      willChange: "transform",
                    }}
                  />

                  <div className="absolute top-0 right-0 w-1 h-full overflow-hidden opacity-30">
                    <div
                      className="w-full h-8 opacity-80"
                      style={{
                        background: `linear-gradient(180deg, rgba(76, 188, 197, 0.8) 0%, transparent 100%)`,
                        willChange: "transform",
                      }}
                    />
                  </div>

                  <div className="relative z-10">
                    {/* Socials + language */}
                    <div className="flex justify-between items-center pb-5">
                      <div className="flex gap-3">
                        <a
                          href="https://linkedin.com/company/galagaagency"
                          target="_blank"
                          rel="noreferrer"
                          className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-105"
                        >
                          <FiLinkedin className="w-6 h-6 flex-shrink-0" />
                        </a>
                        <a
                          href="https://instagram.com/galagaagency"
                          target="_blank"
                          rel="noreferrer"
                          className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-105"
                        >
                          <FiInstagram className="w-6 h-6 flex-shrink-0" />
                        </a>
                      </div>
                      {/* Language toggle */}
                      <button
                        onClick={handleLanguageSwitch}
                        className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-sm font-semibold border border-white/10 hover:border-white/20 transition-all duration-200"
                      >
                        {currentLang === "es" ? "English" : "Español"}
                      </button>
                    </div>

                    {/* CTA */}
                    <PrimaryButton
                      href={getLocalizedRoute("contacto", currentLang)}
                      size="md"
                      onClick={closeMenu}
                      className="w-full"
                    >
                      {t(ctaButtonKey)}
                    </PrimaryButton>

                    {/* Legal */}
                    <div className="flex justify-between items-center gap-6 text-white/60 text-md pt-6">
                      <Link
                        href={
                          currentLang === "es"
                            ? "/es/politica-de-privacidad"
                            : "/en/privacy-policy"
                        }
                        onClick={closeMenu}
                        className="hover:text-white transition text-center"
                      >
                        {t("footer.privacy")}
                      </Link>
                      <span>•</span>
                      <Link
                        href={
                          currentLang === "es"
                            ? "/es/terminos-y-condiciones"
                            : "/en/terms-and-conditions"
                        }
                        onClick={closeMenu}
                        className="hover:text-white transition text-center"
                      >
                        {t("footer.terms")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
