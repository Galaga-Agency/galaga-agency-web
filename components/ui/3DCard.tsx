"use client";

import { cn } from "@/lib/utils";
import React, {
  createContext,
  useState,
  useContext,
  useRef,
  ReactNode,
} from "react";

/* ========= GLOBAL FEEL (single source of truth) ========= */
const MAX_TILT_X = 6; // deg (left/right)
const MAX_TILT_Y = 6; // deg (up/down)
const PERSPECTIVE_PX = 1600; // smaller => stronger depth

// Fixed layer transforms (no props anywhere)
const Z = {
  BACK_FRAME: -12,
  BACK_BLUR: -8,
  GLOW: 130, // put glow ABOVE content so it's actually visible
  IMAGE: 80,
  CONTENT: 120,
} as const;

const PARALLAX = {
  IMAGE_X: 18,
  IMAGE_Y: 10,
  CONTENT_X: 12,
  CONTENT_Y: 6,
} as const;

const TILT_FOLLOW = {
  IMAGE_X: 0.3, // extra deg from mouse Y
  IMAGE_Y: 0.4, // extra deg from mouse X
  CONTENT_X: 0.25,
  CONTENT_Y: 0.25,
} as const;

const SCALE = {
  IMAGE: 1.015,
  CONTENT: 1.008,
} as const;
/* ======================================================== */

type MouseCtx = { entered: boolean } | undefined;
const MouseEnterContext = createContext<MouseCtx>(undefined);

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;

    const { left, top, width, height } = el.getBoundingClientRect();
    // Normalized [-0.5, 0.5]
    const nx = (e.clientX - left) / width - 0.5;
    const ny = (e.clientY - top) / height - 0.5;

    // Pass to children via CSS vars (no re-renders)
    el.style.setProperty("--nx", String(nx));
    el.style.setProperty("--ny", String(ny));

    // Tilt only while hovering
    const ry = nx * (MAX_TILT_X * 2);
    const rx = -ny * (MAX_TILT_Y * 2);
    el.style.transform = `rotateY(${ry}deg) rotateX(${rx}deg)`;
  };

  const handleMouseEnter = () => {
    setEntered(true);
    const el = containerRef.current;
    if (!el) return;
    el.style.setProperty("--nx", "0");
    el.style.setProperty("--ny", "0");
    el.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  const handleMouseLeave = () => {
    const el = containerRef.current;
    if (!el) return;
    setEntered(false);
    el.style.setProperty("--nx", "0");
    el.style.setProperty("--ny", "0");
    el.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  return (
    <MouseEnterContext.Provider value={{ entered }}>
      <div
        className={cn("flex items-stretch justify-stretch", containerClassName)}
        style={{ perspective: `${PERSPECTIVE_PX}px` }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "relative w-full transition-transform duration-300 ease-out rounded-2xl md:rounded-3xl",
            className
          )}
          style={{
            transformStyle: "preserve-3d",
            willChange: "transform",
            transform: "rotateY(0deg) rotateX(0deg)", // FLAT AT REST
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const useMouse = () => {
  const ctx = useContext(MouseEnterContext);
  if (!ctx) throw new Error("useMouse must be used within CardContainer");
  return ctx;
};

export const CardBody = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      // isolate keeps blend modes from spilling outside the card
      "relative w-full group isolate [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",
      className
    )}
  >
    {children}
  </div>
);

/* ========= FIXED-LAYER PRIMITIVES (NO PROPS) ========= */

const makeTransform = ({
  tx = 0,
  ty = 0,
  tz = 0,
  rx = 0,
  ry = 0,
  rz = 0,
  px = 0,
  py = 0,
  tfx = 0,
  tfy = 0,
  scale = 1,
  hover = false,
}: {
  tx?: number;
  ty?: number;
  tz?: number;
  rx?: number;
  ry?: number;
  rz?: number;
  px?: number;
  py?: number; // parallax px
  tfx?: number;
  tfy?: number; // tilt-follow deg
  scale?: number;
  hover?: boolean;
}) => {
  if (!hover) {
    return `
      translateX(${tx}px)
      translateY(${ty}px)
      translateZ(${tz}px)
      rotateX(${rx}deg)
      rotateY(${ry}deg)
      rotateZ(${rz}deg)
      scale(1)
    `.replace(/\s+/g, " ");
  }
  return `
    translateX(calc(${tx}px + var(--nx, 0) * ${px}px))
    translateY(calc(${ty}px + var(--ny, 0) * ${py}px))
    translateZ(${tz}px)
    rotateX(calc(${rx}deg + var(--ny, 0) * ${tfx}deg))
    rotateY(calc(${ry}deg + var(--nx, 0) * ${tfy}deg))
    rotateZ(${rz}deg)
    scale(${scale})
  `.replace(/\s+/g, " ");
};

const useEntered = () => useMouse().entered;

export const CardBackFrame = ({
  className = "",
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  const entered = useEntered();
  return (
    <div
      className={cn(
        "transition-transform duration-300 ease-out rounded-2xl md:rounded-3xl",
        className
      )}
      style={{ transform: makeTransform({ tz: Z.BACK_FRAME, hover: entered }) }}
    >
      {children}
    </div>
  );
};

export const CardBackBlur = ({
  className = "",
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  const entered = useEntered();
  return (
    <div
      className={cn("transition-transform duration-300 ease-out overflow-hidden", className)}
      style={{ transform: makeTransform({ tz: Z.BACK_BLUR, hover: entered }) }}
    >
      {children}
    </div>
  );
};

export const CardGlow = ({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const entered = useEntered();
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none transition-opacity duration-300 ease-out",
        className
      )}
      style={{
        // stay flat (no tilt), only fade opacity
        transform: makeTransform({ tz: Z.GLOW, hover: false }),
        // inherit and clip to parent radius
        borderRadius: "inherit",
        // clip the blurred edges
        overflow: "hidden",
        // actual glow look
        mixBlendMode: "screen",
        filter: "blur(24px)",
        opacity: entered ? 0.48 : 0.22,
        willChange: "opacity",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          // overridable brand color
          background:
            "radial-gradient(520px 320px at 50% 50%, var(--card-glow, rgba(76,188,197,0.55)) 0%, transparent 70%)",
        }}
      />
      {children}
    </div>
  );
};

export const CardImageLayer = ({
  className = "",
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  const entered = useEntered();
  return (
    <div
      className={cn(
        "transition-transform duration-300 ease-out",
        className
      )}
      style={{
        willChange: "transform",
        transform: makeTransform({
          tz: Z.IMAGE,
          // idle flat
          rx: 0,
          ry: 0,
          // hover parallax/tilt-follow
          px: PARALLAX.IMAGE_X,
          py: PARALLAX.IMAGE_Y,
          tfx: TILT_FOLLOW.IMAGE_X,
          tfy: TILT_FOLLOW.IMAGE_Y,
          scale: SCALE.IMAGE,
          hover: entered,
        }),
      }}
    >
      {children}
    </div>
  );
};

export const CardContentLayer = ({
  className = "",
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  const entered = useEntered();
  return (
    <div
      className={cn(
        "transition-transform duration-300 ease-out",
        className
      )}
      style={{
        willChange: "transform",
        transform: makeTransform({
          tz: Z.CONTENT,
          rx: 0,
          ry: 0,
          px: PARALLAX.CONTENT_X,
          py: PARALLAX.CONTENT_Y,
          tfx: TILT_FOLLOW.CONTENT_X,
          tfy: TILT_FOLLOW.CONTENT_Y,
          scale: SCALE.CONTENT,
          hover: entered,
        }),
      }}
    >
      {children}
    </div>
  );
};
