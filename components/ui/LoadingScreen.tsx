"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Logo3D } from "../Logo3D";
import { useTranslation } from "@/hooks/useTranslation";
import { initLoadingAnimation } from "@/utils/animations/loading-animations";
import { gsap } from "gsap";

interface LoadingScreenProps {
  progress: number;
}

export default function LoadingScreen({ progress }: LoadingScreenProps) {
  const { t } = useTranslation();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const animationInitialized = useRef(false);
  const circleRef = useRef<SVGCircleElement | null>(null);
  const currentOffset = useRef(942.48); // Full circle initially
  const gaugeTween = useRef<gsap.core.Tween | null>(null);

  if (typeof document === "undefined") return null;

  useEffect(() => {
    if (!rootRef.current || animationInitialized.current) return;

    animationInitialized.current = true;
    const cleanup = initLoadingAnimation({
      root: rootRef.current,
      selector: ".loading-text",
    });

    return () => cleanup?.();
  }, []);

  // Smooth gauge animation when progress changes
  useEffect(() => {
    if (!circleRef.current) return;

    const targetOffset = 942.48 - (942.48 * progress) / 100;

    // Kill existing tween
    if (gaugeTween.current) {
      gaugeTween.current.kill();
    }

    // Smooth animation to new gauge position
    gaugeTween.current = gsap.to(currentOffset, {
      current: targetOffset,
      duration: 0.8,
      ease: "power2.out",
      onUpdate: () => {
        if (circleRef.current) {
          circleRef.current.style.strokeDashoffset =
            currentOffset.current.toString();
        }
      },
    });

    return () => {
      if (gaugeTween.current) {
        gaugeTween.current.kill();
      }
    };
  }, [progress]);

  return createPortal(
    <div
      ref={rootRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, var(--color-azul-profundo) 0%, var(--color-teal) 50%, var(--color-negro) 100%)",
        gap: "clamp(1.5rem, 3vw, 2rem)",
        padding: "clamp(1rem, 5vw, 2rem)",
      }}
      aria-busy="true"
      aria-live="polite"
      role="status"
    >
      {/* Wrap the loading elements in a container that can be animated */}
      <div className="loading-elements-container">
        <div
          className="relative"
          style={{
            width: "clamp(280px, 60vw, 350px)",
            height: "clamp(280px, 60vw, 350px)",
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 350 350"
            className="absolute inset-0 transform -rotate-90"
          >
            <defs>
              <linearGradient
                id="progressGradient"
                gradientUnits="userSpaceOnUse"
                x1="175"
                y1="25"
                x2="175"
                y2="325"
              >
                <stop offset="0%" stopColor="var(--color-turquesa)" />
                <stop offset="100%" stopColor="var(--color-mandarina)" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <circle
              cx="175"
              cy="175"
              r="150"
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="4"
            />
            <circle
              ref={circleRef}
              className="progress-circle"
              cx="175"
              cy="175"
              r="150"
              fill="none"
              stroke="url(#progressGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="942.48"
              strokeDashoffset="942.48"
              filter="url(#glow)"
            />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <div
              style={{
                width: "clamp(250px, 45vw, 300px)",
                height: "clamp(190px, 34vw, 225px)",
              }}
            >
              <Logo3D />
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="loading-percentage text-blanco text-2xl font-light">
              {progress}%
            </span>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
