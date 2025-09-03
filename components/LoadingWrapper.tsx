"use client";

import { useAppLoading } from "@/hooks/useAppLoading";
import LoadingScreen from "@/components/ui/LoadingScreen";
import { useEffect, useState, useRef } from "react";
import { initLoadingToContentTransition } from "@/utils/animations/loading-transition-animations";

interface LoadingWrapperProps {
  children: React.ReactNode;
}

export default function LoadingWrapper({ children }: LoadingWrapperProps) {
  const { isLoading, loadingProgress, isAppReady } = useAppLoading();
  const [showLoading, setShowLoading] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);
  const transitionStarted = useRef(false);

  // Set global app ready state on body
  useEffect(() => {
    document.body.setAttribute('data-app-ready', isAppReady.toString());
  }, [isAppReady]);

  // Initialize transition animation when ready
  useEffect(() => {
    if (isAppReady && !isLoading && !transitionStarted.current) {
      transitionStarted.current = true;
      
      if (contentRef.current && loadingRef.current) {
        const cleanup = initLoadingToContentTransition({
          loadingElement: loadingRef.current,
          contentElement: contentRef.current,
          onComplete: () => {
            setShowLoading(false);
          }
        });

        return cleanup;
      }
    }
  }, [isAppReady, isLoading]);

  return (
    <>
      <div 
        ref={contentRef}
        style={{ 
          opacity: 0,
          pointerEvents: isLoading ? 'none' : 'auto'
        }}
      >
        {children}
      </div>
      
      {showLoading && (
        <div ref={loadingRef}>
          <LoadingScreen progress={loadingProgress} />
        </div>
      )}
    </>
  );
}