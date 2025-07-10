"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  routeTranslations,
  defaultLocale,
  type Language,
} from "@/utils/routeTranslations";

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
  const currentLocale = pathname.split("/")[1] as Language;
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get from localStorage first, then URL, then default
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("preferred-language") as Language;
      if (saved && (saved === "es" || saved === "en")) {
        return saved;
      }
    }
    return currentLocale || defaultLocale;
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

  const translateRoute = (
    currentPath: string,
    targetLang: Language
  ): string => {
    const pathWithoutLocale = currentPath.replace(/^\/[a-z]{2}/, "") || "/";
    const segments = pathWithoutLocale.split("/").filter(Boolean);

    if (segments.length === 0) {
      return `/${targetLang}`;
    }

    const mainRoute = segments[0];
    const translations = routeTranslations[targetLang];
    const translatedRoute =
      translations[mainRoute as keyof typeof translations] || mainRoute;

    const remainingSegments = segments.slice(1);
    const newPath = `/${targetLang}/${translatedRoute}${
      remainingSegments.length > 0 ? "/" + remainingSegments.join("/") : ""
    }`;

    return newPath;
  };

  const changeLanguage = async (newLanguage: Language) => {
    const newPath = translateRoute(pathname, newLanguage);
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
