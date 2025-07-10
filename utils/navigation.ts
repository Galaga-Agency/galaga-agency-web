import { routeTranslations, type Language } from "./routeTranslations";

export function getLocalizedRoute(route: string, language: Language): string {
  // If it's the home route (empty string)
  if (!route || route === "") {
    return `/${language}`;
  }

  // Check if the route needs translation
  const translations = routeTranslations[language];
  const translatedRoute =
    translations[route as keyof typeof translations] || route;

  return `/${language}/${translatedRoute}`;
}
