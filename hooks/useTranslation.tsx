"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Language = "es" | "en";

interface TranslationContextType {
  t: (key: string) => string;
  language: Language;
  changeLanguage: (newLanguage: Language) => void;
  toggleLanguage: () => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");
  const [translations, setTranslations] = useState<any>({});

  // Load translations dynamically
  const loadTranslations = async (lang: Language) => {
    try {
      const response = await import(`@/locales/${lang}.json`);
      setTranslations(response.default);
    } catch (error) {
      console.error(`Failed to load translations for ${lang}:`, error);
    }
  };

  // Load initial translations
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
    setLanguage(newLanguage);
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