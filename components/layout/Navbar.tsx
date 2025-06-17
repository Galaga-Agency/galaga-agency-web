"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { navigationItems, ctaButtonKey } from "@/data/menu";
import { useTranslation } from "@/hooks/useTranslation";
import PrimaryButton from "@/components/ui/PrimaryButton";
import LanguageSelector from "@/components/LanguageSelector";
import HamburgerToggle from "@/components/HamburgerToggle";
import { initScrollNavbar } from "@/utils/scroll-navbar";
import { initNavbarAnimations } from "@/utils/navbar-animation";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import useDeviceDetect from "@/hooks/useDeviceDetect";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { t, language, toggleLanguage } = useTranslation();
  const { isMobile } = useDeviceDetect();
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!navRef.current) return;

    // Initialize scroll behavior
    const scrollCleanup = initScrollNavbar({
      element: navRef.current,
      threshold: 100,
      hideDistance: -100,
    });

    // Initialize navbar animations
    const animationCleanup = initNavbarAnimations({
      navElement: navRef.current,
      mobileMenuElement: mobileMenuRef.current,
      isMenuOpen: isOpen,
    });

    return () => {
      scrollCleanup();
      animationCleanup();
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {isMobile && (
        <HamburgerToggle isOpen={isOpen} onClick={toggleMenu} />
      )}

      <nav
        ref={navRef}
        className="sticky top-0 inset-x-0 bg-white/95 backdrop-blur-md border-b border-gray-100 z-[100]"
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 logo-container">
              <Link href="/" className="block">
                <img
                  src={
                    isMobile
                      ? "/assets/img/logos/logo-mobile.webp"
                      : "/assets/img/logos/logo-full.webp"
                  }
                  alt="Galaga Agency Logo"
                  className="h-8 lg:h-14 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <ul className="flex items-center space-x-12 nav-links">
                {navigationItems.map((item, index) => (
                  <li key={item.href} className="nav-item" data-index={index}>
                    <Link
                      href={item.href}
                      className={`relative text-base font-semibold py-3 px-4 transition-colors duration-300 nav-link ${
                        pathname === item.href
                          ? "text-primary"
                          : "text-gray-800 hover:text-primary"
                      }`}
                    >
                      <span className="relative z-10">{t(item.labelKey)}</span>

                      {/* Hover background */}
                      <span className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg transform scale-0 hover-bg"></span>

                      {/* Active indicator */}
                      {pathname === item.href && (
                        <span className="absolute bottom-0 left-1/2 w-8 h-0.5 bg-primary rounded-full transform -translate-x-1/2 active-indicator"></span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4 desktop-actions">
              <div className="action-item" data-delay="0">
                <LanguageSelector
                  language={language}
                  onToggle={toggleLanguage}
                />
              </div>
              <div className="action-item" data-delay="100">
                <PrimaryButton href="/contact" size="md">
                  {t(ctaButtonKey)}
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[99] lg:hidden mobile-backdrop ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-[101] lg:hidden mobile-menu"
      >
        {/* Mobile Header */}
        <div className="flex items-center px-6 py-5 border-b border-gray-100 mobile-header">
          <Link href="/" onClick={closeMenu}>
            <img
              src="/assets/img/logos/logo-mobile.webp"
              alt="Galaga Logo"
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Mobile Navigation */}
        <nav className="px-6 py-8 mobile-nav">
          <ul className="space-y-2">
            {navigationItems.map((item, index) => (
              <li
                key={item.href}
                className="mobile-nav-item"
                data-index={index}
              >
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className={`block px-4 py-4 text-lg font-medium rounded-xl transition-colors duration-300 relative overflow-hidden ${
                    pathname === item.href
                      ? "text-primary bg-primary/10 border-l-4 border-primary"
                      : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  <span className="relative z-10">{t(item.labelKey)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Footer */}
        <div className="absolute bottom-0 left-0 right-0 px-6 py-6 border-t border-gray-100 bg-gray-50/50 mobile-footer">
          <div className="space-y-4">
            <div className="flex justify-center mobile-lang">
              <LanguageSelector language={language} onToggle={toggleLanguage} />
            </div>

            <div className="mobile-cta">
              <PrimaryButton
                href="/contact"
                size="lg"
                className="w-full justify-center"
                onClick={closeMenu}
              >
                {t(ctaButtonKey)}
              </PrimaryButton>
            </div>

            <div className="flex justify-center space-x-6 pt-2 mobile-social">
              <Link
                href="https://linkedin.com/company/galaga"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-600 hover:text-primary transition-colors duration-300 rounded-xl hover:bg-white social-link"
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://twitter.com/galaga"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-600 hover:text-primary transition-colors duration-300 rounded-xl hover:bg-white social-link"
              >
                <FaTwitter className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}