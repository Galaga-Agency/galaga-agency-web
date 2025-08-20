"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  routeTranslations,
  routeMapping,
  defaultLocale,
  type Language,
} from "@/utils/routeTranslations";
import { getRouteForLanguageSwitch } from "@/utils/navigation";

interface TranslationContextType {
  t: (key: string) => string;
  language: Language;
  changeLanguage: (newLanguage: Language) => void;
  toggleLanguage: () => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

export function TranslationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  // Get current language from URL and persist it
  const pathSegment = pathname.split("/")[1];
  const currentLocale = (pathSegment === "es" || pathSegment === "en") ? pathSegment : null;
  
  const [language, setLanguage] = useState<Language>(() => {
    // If URL has valid locale, use it
    if (currentLocale) {
      return currentLocale;
    }
    
    // Default to Spanish for root path or invalid locales
    return "es";
  });
  const [translations, setTranslations] = useState<any>({});

  const loadTranslations = async (lang: Language) => {
    try {
      const response = await import(`@/locales/${lang}.json`);
      setTranslations(response.default);
    } catch (error) {
      console.error(`Failed to load translations for ${lang}:`, error);
    }
  };

  useEffect(() => {
    const urlLocale = pathname.split("/")[1] as Language;
    if (urlLocale && (urlLocale === "es" || urlLocale === "en")) {
      setLanguage(urlLocale);
      // Save to localStorage for persistence
      if (typeof window !== "undefined") {
        localStorage.setItem("preferred-language", urlLocale);
      }
    } else {
      // No locale in URL, default to Spanish
      setLanguage("es");
      if (typeof window !== "undefined") {
        localStorage.setItem("preferred-language", "es");
      }
    }
  }, [pathname]);

  useEffect(() => {
    loadTranslations(language);
  }, [language]);

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations;

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }

    return typeof value === "string" ? value : key;
  };

  const changeLanguage = async (newLanguage: Language) => {
    const newPath = getRouteForLanguageSwitch(pathname, newLanguage);
    // Use window.history.replaceState for no reload
    window.history.replaceState({}, "", newPath);
    setLanguage(newLanguage);

    // Save preference
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred-language", newLanguage);
    }
  };

  const toggleLanguage = async () => {
    const newLang = language === "es" ? "en" : "es";
    changeLanguage(newLang);
  };

  return (
    <TranslationContext.Provider
      value={{
        t,
        language,
        changeLanguage,
        toggleLanguage,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
}