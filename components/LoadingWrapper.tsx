"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "@/components/ui/LoadingScreen";

interface LoadingWrapperProps {
  children: React.ReactNode;
}

export default function LoadingWrapper({ children }: LoadingWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkReady = () => {
      if (document.readyState === 'complete') {
        setTimeout(() => {
          setIsLoading(false);
        }, 1200);
      }
    };

    if (document.readyState === 'complete') {
      checkReady();
    } else {
      document.addEventListener('readystatechange', checkReady);
    }

    return () => document.removeEventListener('readystatechange', checkReady);
  }, []);

  // Lock scroll while loading
  useEffect(() => {
    if (isLoading) {
      const prev = document.documentElement.style.overflow;
      document.documentElement.style.overflow = "hidden";
      return () => {
        document.documentElement.style.overflow = prev;
      };
    }
  }, [isLoading]);

  return (
    <>
      {children}
      {!isLoading && <LoadingScreen />}
    </>
  );
}
