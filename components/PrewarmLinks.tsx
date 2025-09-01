"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { preloadPageAssets } from "@/utils/imagePreloader";
import { locales, routeMapping } from "@/utils/routeTranslations";

const HERO_KEYS = new Set([
  "home",
  "about-us",
  "use-cases",
  "contact",
  "privacy-policy",
  "terms-and-conditions",
  "immersive-marketing",
  "services", 
]);


function toEnBase(pathname: string): string {
  const clean = pathname.split("?")[0].split("#")[0];
  const parts = clean.split("/").filter(Boolean);

  const maybeLocale = parts[0];
  const isLocale = locales.includes(maybeLocale as (typeof locales)[number]);
  const segs = isLocale ? parts.slice(1) : parts;

  if (segs.length === 0) return "home";
  const first = segs[0];

  if (HERO_KEYS.has(first) || first === "services") return first;

  const mapped = (routeMapping as Record<string, string>)[first];
  if (mapped) return mapped;

  return "home";
}

function toHeroKey(enBase: string): string {
  if (HERO_KEYS.has(enBase)) return enBase;
  return "home";
}

function heroFromTarget(target: EventTarget | null): string | null {
  const a = (target as HTMLElement | null)?.closest?.(
    "a[href]"
  ) as HTMLAnchorElement | null;
  if (!a) return null;

  const explicit = a.getAttribute("data-prewarm-page");
  if (explicit && HERO_KEYS.has(explicit)) return explicit;

  try {
    const url = new URL(a.href, window.location.origin);
    const base = toEnBase(url.pathname);
    return toHeroKey(base);
  } catch {
    return null;
  }
}

export default function PrewarmLinks() {
  const pathname = usePathname();

  useEffect(() => {
    const heroKey = toHeroKey(toEnBase(pathname || "/"));
    if (heroKey) {
      preloadPageAssets(heroKey);
    }

    const handler = (e: Event) => {
      const hero = heroFromTarget(e.target);
      if (!hero) return;
      preloadPageAssets(hero);

      const a = (e.target as HTMLElement | null)?.closest?.(
        "a[href]"
      ) as HTMLAnchorElement | null;
      if (a && a.origin === window.location.origin) {
        a.rel = a.rel ? `${a.rel} prefetch` : "prefetch";
      }
    };

    const opts = { capture: true as const };
    // mouseover (not mouseenter) so it bubbles to document
    document.addEventListener("mouseover", handler, opts);
    document.addEventListener("focusin", handler, opts);
    document.addEventListener("touchstart", handler, opts);

    return () => {
      document.removeEventListener("mouseover", handler, opts);
      document.removeEventListener("focusin", handler, opts);
      document.removeEventListener("touchstart", handler, opts);
    };
  }, [pathname]);

  return null;
}
