import {
  routeTranslations,
  routeMapping,
  type Language,
} from "./routeTranslations";

export function getLocalizedRoute(route: string, language: Language): string {
  // If route or language are not strings, return safely
  if (typeof route !== "string" || typeof language !== "string") {
    return "/";
  }

  // Skip static assets and files with extensions - return original
  if (
    route.includes(".") ||
    route.startsWith("_next/") ||
    route.startsWith("favicon") ||
    route.startsWith("icon") ||
    route.startsWith("apple-touch") ||
    route.startsWith("manifest")
  ) {
    return route;
  }

  // If language is actually a filename, return the route as-is
  if (
    language.includes(".") ||
    language.startsWith("_next/") ||
    language.startsWith("favicon") ||
    language.startsWith("icon")
  ) {
    return route;
  }

  // If it's the home route (empty string)
  if (!route || route === "") {
    return `/${language}`;
  }

  // Validate language - if invalid, return route without processing
  if (language !== "es" && language !== "en") {
    return route;
  }

  // Get translations for the current language
  const translations = routeTranslations[language];

  if (!translations) {
    console.error(`No translations found for language: ${language}`);
    return `/${language}/${route}`;
  }

  // Translate the route
  const translatedRoute =
    translations[route as keyof typeof translations] || route;
  return `/${language}/${translatedRoute}`;
}

// Function for switching languages while keeping the same page
export function getRouteForLanguageSwitch(
  currentRoute: string,
  targetLanguage: Language
): string {
  // If parameters are not strings, return safely
  if (typeof currentRoute !== "string" || typeof targetLanguage !== "string") {
    return "/";
  }

  // Skip static assets - return as-is
  if (
    currentRoute.includes(".") ||
    currentRoute.startsWith("_next/") ||
    currentRoute.startsWith("favicon") ||
    currentRoute.startsWith("icon") ||
    currentRoute.startsWith("apple-touch") ||
    currentRoute.startsWith("manifest")
  ) {
    return currentRoute;
  }

  // If targetLanguage is actually a filename, return original route
  if (
    targetLanguage.includes(".") ||
    targetLanguage.startsWith("_next/") ||
    targetLanguage.startsWith("favicon") ||
    targetLanguage.startsWith("icon")
  ) {
    return currentRoute;
  }

  // Remove leading slash if present
  const cleanRoute = currentRoute.replace(/^\//, "");

  // Validate target language - if invalid, return original route
  if (targetLanguage !== "es" && targetLanguage !== "en") {
    return currentRoute;
  }

  // Split the route into parts
  const routeParts = cleanRoute.split('/');
  
  // Skip the first part (language) if present
  const pathParts = routeParts.length > 1 && (routeParts[0] === 'es' || routeParts[0] === 'en') 
    ? routeParts.slice(1) 
    : routeParts;
  
  // Map each part of the route
  const mappedParts = pathParts.map(part => 
    routeMapping[part as keyof typeof routeMapping] || part
  );
  
  // Rebuild the route for target language
  return `/${targetLanguage}/${mappedParts.join('/')}`;
}