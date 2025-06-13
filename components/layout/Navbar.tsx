"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems, ctaButtonKey } from "@/data/menu";
import { useTranslation } from "@/hooks/useTranslation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { t, language, toggleLanguage } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50 w-full">
      <div className="w-full mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 w-full">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-4 group flex-shrink-0"
          >
            <img
              src="/assets/img/logos/logo-full.png"
              alt="Galaga Agency Logo"
              className="h-16 w-auto transition-all duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center justify-center space-x-12">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-lg font-semibold transition-all duration-300 hover:text-primary group px-4 py-2 text-center ${
                    pathname === item.href ? "text-primary" : "text-gray-700"
                  }`}
                >
                  {t(item.labelKey)}
                  <span
                    className={`absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                      pathname === item.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Right side - Language + CTA */}
          <div className="flex items-center space-x-6 flex-shrink-0">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="text-sm font-bold text-gray-600 hover:text-primary transition-all duration-300 px-4 py-2 border-2 border-gray-200 rounded-xl hover:border-primary/50 hover:bg-primary/5 backdrop-blur"
            >
              {language.toUpperCase()}
            </button>

            {/* CTA Button - Desktop */}
            <Link
              href="/contact"
              className="hidden lg:block bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg"
            >
              {t(ctaButtonKey)}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-gray-700 hover:text-primary focus:outline-none transition-all duration-300 p-3 rounded-xl hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md w-full">
            <div className="py-8 space-y-6 px-4 w-full text-center">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block text-xl font-semibold transition-all duration-300 hover:text-primary py-3 px-4 rounded-xl hover:bg-gray-50 w-full text-center ${
                    pathname === item.href
                      ? "text-primary bg-primary/5"
                      : "text-gray-700"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {t(item.labelKey)}
                </Link>
              ))}
              <div className="pt-6 border-t border-gray-100 w-full">
                <Link
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 text-center transform hover:scale-105 max-w-md mx-auto"
                  onClick={() => setIsOpen(false)}
                >
                  {t(ctaButtonKey)}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
