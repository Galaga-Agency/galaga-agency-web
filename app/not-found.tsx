"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFound() {
  const pathname = usePathname();
  const [locale, setLocale] = useState<"es" | "en">("es");
  const [translations, setTranslations] = useState<any>({});

  useEffect(() => {
    // Get locale from URL
    const urlLocale = pathname.split("/")[1] as "es" | "en";
    const detectedLocale =
      urlLocale === "es" || urlLocale === "en" ? urlLocale : "es";
    setLocale(detectedLocale);

    // Load translations
    const loadTranslations = async () => {
      try {
        const response = await import(`@/locales/${detectedLocale}.json`);
        setTranslations(response.default);
      } catch (error) {
        console.error(
          `Failed to load translations for ${detectedLocale}:`,
          error
        );
      }
    };

    loadTranslations();
  }, [pathname]);

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

  const getHomeUrl = () => {
    return `/${locale}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-gray-300 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            {t("notFound.title") ||
              (locale === "es" ? "Página no encontrada" : "Page not found")}
          </h2>
          <p className="text-gray-600 mb-8">
            {t("notFound.description") ||
              (locale === "es"
                ? "La página que buscas no existe."
                : "The page you are looking for does not exist.")}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={getHomeUrl()}
            className="inline-flex items-center px-6 py-3 bg-teal text-white font-medium rounded-lg hover:bg-teal-600 transition-colors"
          >
            {t("notFound.goHome") ||
              (locale === "es" ? "Volver al inicio" : "Go to homepage")}
          </a>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            {t("notFound.goBack") ||
              (locale === "es" ? "Volver atrás" : "Go back")}
          </button>
        </div>
      </div>
    </div>
  );
}
