"use client";
import { useEffect } from "react";
import { ScrollTrigger } from "@/lib/gsapConfig";

export default function GsapBoot() {
  useEffect(() => {
    const onLoad = () => ScrollTrigger.refresh();
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad, { once: true });
    return () => window.removeEventListener("load", onLoad);
  }, []);
  return null;
}
