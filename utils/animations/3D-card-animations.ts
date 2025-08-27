"use client";

import gsap from "gsap";

export function init3DCardAnimations(root: Element | Document = document) {
  const PERSPECTIVE = 1100;

  const MAX_TILT_X = 16; // deg (left/right)
  const MAX_TILT_Y = 10; // deg (up/down)

  // Depth (translateZ) in px
  const Z = {
    CARD: 20,
    BG: -60,
    GLOW: 48,
    ICON: 140,
    TITLE: 80,
    DESC: 56,
    SCAN: 48,
    DATA: 32,
  };

  // Parallax distances in px (XY)
  const PX = {
    BG_X: 16,
    BG_Y: 12,
    ICON_X: 10,
    ICON_Y: 6,
    TEXT_X: 6,
    TEXT_Y: 4,
  };

  const cards = gsap.utils.toArray<HTMLElement>("[data-3d-card]", root);

  const cleanups: Array<() => void> = [];

  cards.forEach((card) => {
    const tilt = card.querySelector<HTMLElement>("[data-3d-tilt]");
    if (!tilt) return;

    const bg = card.querySelector<HTMLElement>("[data-3d-bg]");
    const glow = card.querySelector<HTMLElement>("[data-3d-glow]");
    const icon = card.querySelector<HTMLElement>("[data-3d-icon]"); // whole bubble spins
    const title = card.querySelector<HTMLElement>("[data-3d-title]");
    const desc = card.querySelector<HTMLElement>("[data-3d-desc]");
    const scan = card.querySelector<HTMLElement>("[data-3d-scan]");
    const data = card.querySelector<HTMLElement>("[data-3d-data]");

    // base 3D context (no visual change at rest)
    gsap.set(card, { perspective: PERSPECTIVE });
    gsap.set(
      [tilt, bg, glow, icon, title, desc, scan, data].filter(
        Boolean
      ) as HTMLElement[],
      {
        transformStyle: "preserve-3d",
        z: 0,
      }
    );

    let hover = false;
    let spinTween: gsap.core.Tween | null = null;

    const onMove = (e: MouseEvent) => {
      const r = card.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5; // -0.5..0.5
      const ny = (e.clientY - r.top) / r.height - 0.5; // -0.5..0.5

      // Card tilt (ease via gsap overwriting)
      gsap.to(tilt, {
        rotateY: nx * (MAX_TILT_X * 2),
        rotateX: -ny * (MAX_TILT_Y * 2),
        z: hover ? Z.CARD : 0,
        duration: 0.18,
        overwrite: "auto",
      });

      // Parallax XY (depth set on enter)
      if (bg) {
        gsap.to(bg, {
          x: nx * PX.BG_X,
          y: ny * PX.BG_Y,
          duration: 0.18,
          overwrite: "auto",
        });
      }
      if (icon) {
        gsap.to(icon, {
          x: nx * PX.ICON_X,
          y: -10 + ny * PX.ICON_Y, // lift -10px
          duration: 0.12,
          overwrite: "auto",
        });
      }
      if (title) {
        gsap.to(title, {
          x: nx * PX.TEXT_X,
          y: ny * PX.TEXT_Y,
          duration: 0.14,
          overwrite: "auto",
        });
      }
      if (desc) {
        gsap.to(desc, {
          x: nx * (PX.TEXT_X * 0.8),
          y: ny * (PX.TEXT_Y * 0.8),
          duration: 0.14,
          overwrite: "auto",
        });
      }
    };

    const onEnter = () => {
      hover = true;

      // Depth on
      if (bg) gsap.set(bg, { z: Z.BG });
      if (glow) gsap.set(glow, { z: Z.GLOW });
      if (icon) gsap.set(icon, { z: Z.ICON });
      if (title) gsap.set(title, { z: Z.TITLE });
      if (desc) gsap.set(desc, { z: Z.DESC });
      if (scan) gsap.set(scan, { z: Z.SCAN });
      if (data) gsap.set(data, { z: Z.DATA });

      // Icon bubble: jump + infinite 3D spin
      if (icon) {
        spinTween?.kill();
        // ensure a little 3D pitch so it doesn't look flat
        gsap.set(icon, { rotateX: 15, transformOrigin: "50% 50% " });
        spinTween = gsap.to(icon, {
          keyframes: [
            { y: -10, duration: 0.12, ease: "power2.out" }, // quick hop
            // then perpetual spin
            { rotateY: "+=360", duration: 1.6, ease: "none" },
          ],
          repeat: -1,
        });
      }
    };

    const onLeave = () => {
      hover = false;

      // stop the infinite spin, reset rotateY but keep visuals clean
      spinTween?.kill();
      spinTween = null;

      gsap.to(
        [tilt, bg, glow, icon, title, desc, scan, data].filter(
          Boolean
        ) as HTMLElement[],
        {
          x: 0,
          y: 0,
          z: 0,
          rotateX: 0,
          rotateY: 0,
          duration: 0.28,
          ease: "power2.out",
          overwrite: "auto",
        }
      );
    };

    // listeners
    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);

    cleanups.push(() => {
      spinTween?.kill();
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
    });
  });

  // return a cleanup so your hook can dispose on unmount
  return () => {
    cleanups.forEach((fn) => fn());
  };
}
