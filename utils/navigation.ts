import {
  routeTranslations,
  routeMapping,
  type Language,
} from "./routeTranslations";

function isAsset(path: string) {
  return (
    path.includes(".") ||
    path.startsWith("_next/") ||
    path.startsWith("favicon") ||
    path.startsWith("icon") ||
    path.startsWith("apple-touch") ||
    path.startsWith("manifest")
  );
}

function splitPathQueryHash(input: string) {
  const [pathAndQuery, hash = ""] = input.split("#");
  const [pathOnly, query = ""] = pathAndQuery.split("?");
  return {
    pathOnly,
    query: query ? `?${query}` : "",
    hash: hash ? `#${hash}` : "",
  };
}

function normalize(path: string) {
  return path.replace(/^\/+/, "").replace(/\/+$/, "");
}

/* FIXED */
export function getLocalizedRoute(route: string, language: Language): string {
  if (typeof route !== "string" || (language !== "es" && language !== "en")) {
    return "/";
  }

  if (isAsset(route)) return route;

  // Home
  if (!route || route === "/" || route === "") return `/${language}`;

  const { pathOnly, query, hash } = splitPathQueryHash(route);

  // Strip leading slashes + existing locale if present
  const parts = normalize(pathOnly).split("/");
  const pathParts =
    parts[0] === "es" || parts[0] === "en" ? parts.slice(1) : parts;

  // Translate FIRST segment with your dictionary;
  const first = pathParts[0] ?? "";
  const rest = pathParts.slice(1).join("/");

  const dict = routeTranslations[language] ?? {};
  const translatedFirst = (dict as Record<string, string>)[first] ?? first;

  const translatedPath = [translatedFirst, rest].filter(Boolean).join("/");

  return `/${language}/${translatedPath}${query}${hash}`.replace(/\/+/g, "/");
}

export function getRouteForLanguageSwitch(
  currentRoute: string,
  targetLanguage: Language
): string {
  if (
    typeof currentRoute !== "string" ||
    (targetLanguage !== "es" && targetLanguage !== "en")
  ) {
    return "/";
  }

  if (isAsset(currentRoute)) return currentRoute;

  const { pathOnly, query, hash } = splitPathQueryHash(currentRoute);

  const parts = normalize(pathOnly).split("/");

  // Drop existing locale if present
  const pathParts =
    parts[0] === "es" || parts[0] === "en" ? parts.slice(1) : parts;

  // Map each segment via routeMapping (unknowns are kept as-is)
  const mapped = pathParts
    .map((seg) => (routeMapping as Record<string, string>)[seg] ?? seg)
    .join("/");

  return `/${targetLanguage}/${mapped}${query}${hash}`.replace(/\/+/g, "/");
}
