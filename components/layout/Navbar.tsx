"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { navigationItems, ctaButtonKey } from "@/data/menu";
import { useTranslation } from "@/hooks/useTranslation";
import PrimaryButton from "@/components/ui/PrimaryButton";
import LanguageSelector from "@/components/LanguageSelector";
import { initScrollNavbar } from "@/utils/scroll-navbar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { t, language, toggleLanguage } = useTranslation();
  const navRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!navRef.current) return;

    const cleanup = initScrollNavbar({
      element: navRef.current,
      threshold: 100, // Start hiding after 100px scroll
      hideDistance: -100 // Move navbar 100px up when hiding
    });

    return cleanup;
  }, []);

  return (
    <nav ref={navRef} className="bg-white shadow-md sticky top-0 z-50">
      <div className="px-8 flex items-center h-20">
        {/* Logo - LEFT */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img
              src="/assets/img/logos/logo-full.png"
              alt="Galaga Agency Logo"
              className="h-16 w-auto"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 flex justify-center">
          <ul className="hidden lg:flex items-center space-x-32">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    className={`text-base font-semibold py-2 px-5 transition-colors duration-200 inline-block ${
                      isActive ? 'text-primary' : 'text-gray-900 hover:text-primary'
                    }`}
                  >
                    {t(item.labelKey)}
                    {isActive && (
                      <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-primary rounded-full whitespace-nowrap"
                            style={{ width: 'calc(100% - 2.5rem)' }} />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right Actions - ACTUALLY ON THE RIGHT */}
        <div className="flex items-center space-x-6 flex-shrink-0">
          {/* Language - SUBTLE */}
          <LanguageSelector language={language} onToggle={toggleLanguage} />

          <PrimaryButton href="/contact" size="md" className="hidden lg:inline-flex">
            {t(ctaButtonKey)}
          </PrimaryButton>

          {/* Mobile Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="flex flex-col px-6 py-6 space-y-4">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-3 px-4 text-center font-semibold rounded-xl transition-all duration-200 ${
                    isActive ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                  }`}
                >
                  {t(item.labelKey)}
                </Link>
              );
            })}
            
            {/* Mobile Language Selector */}
            <div className="flex justify-center py-2">
              <LanguageSelector language={language} onToggle={toggleLanguage} />
            </div>
            
            {/* Mobile CTA */}
            <PrimaryButton
              href="/contact"
              size="md"
              className="w-full mt-4"
            >
              {t(ctaButtonKey)}
            </PrimaryButton>
          </div>
        </div>
      )}
    </nav>
  );
}