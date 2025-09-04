"use client";

import dynamic from "next/dynamic";
import { useAppLoading } from "@/hooks/useAppLoading";
import { useEffect, useState, useRef } from "react";
import { initLoadingToContentTransition } from "@/utils/animations/loading-transition-animations";

// IMPORTANT: Load the portal-based LoadingScreen only on the client
const LoadingScreen = dynamic(() => import("@/components/ui/LoadingScreen"), {
  ssr: false,
});

interface LoadingWrapperProps {
  children: React.ReactNode;
}

export default function LoadingWrapper({ children }: LoadingWrapperProps) {
  const { isLoading, loadingProgress, isAppReady } = useAppLoading();
  const [showLoading, setShowLoading] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);
  const transitionStarted = useRef(false);

  // Only set attributes in effects (client)
  useEffect(() => {
    document.body.setAttribute("data-app-ready", String(isAppReady));
  }, [isAppReady]);

  useEffect(() => {
    if (isAppReady && !isLoading && !transitionStarted.current) {
      transitionStarted.current = true;

      if (contentRef.current && loadingRef.current) {
        initLoadingToContentTransition({
          loadingElement: loadingRef.current,
          contentElement: contentRef.current,
          onComplete: () => {
            setShowLoading(false);
          },
        });
      } else {
        // Fallback: if refs not ready, just hide
        setShowLoading(false);
      }
    }
  }, [isAppReady, isLoading]);

  return (
    <>
      {/* This div is SSR-safe (no client-only text inside) */}
      <div
        ref={contentRef}
        style={{
          visibility: showLoading ? "hidden" : "visible",
        }}
      >
        {children}
      </div>

      {/* This subtree won’t render at all during SSR because LoadingScreen is ssr:false */}
      {showLoading && (
        <div ref={loadingRef}>
          <LoadingScreen progress={loadingProgress} />
        </div>
      )}
    </>
  );
}
