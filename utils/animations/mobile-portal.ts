import gsap from "gsap";

export function initMobilePortal({ isOpen }: { isOpen: boolean }) {
  const layer = document.querySelector(".portal-layer") as HTMLElement | null;
  const surface = document.querySelector(
    ".portal-surface"
  ) as HTMLElement | null;
  const header = document.querySelector(".portal-header") as HTMLElement | null;
  const items = document.querySelectorAll(
    ".portal-nav li"
  ) as NodeListOf<HTMLElement>;
  const extras = document.querySelectorAll(
    ".portal-extras > *"
  ) as NodeListOf<HTMLElement>;

  if (!layer || !surface || !header || !items.length || !extras.length) return;

  // Calculate radius based on diagonal distance from top-right corner
  const radius = Math.ceil(
    Math.hypot(window.innerWidth, window.innerHeight) * 1.2
  );

  // Initial setup - hide all content
  gsap.set([...(header.children as any), ...items, ...extras], {
    autoAlpha: 0,
    y: 30,
  });

  // Set initial clip-path to 0 (completely hidden)
  gsap.set(layer, {
    clipPath: "circle(0px at calc(100% - 60px) 60px)",
    webkitClipPath: "circle(0px at calc(100% - 60px) 60px)",
  });

  // Remove any transforms from surface that could interfere
  gsap.set(surface, {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transformOrigin: "center",
  });

  const tl = gsap.timeline({ paused: true });

  // Single smooth circular expansion
  tl.to(layer, {
    clipPath: `circle(${radius}px at calc(100% - 60px) 60px)`,
    webkitClipPath: `circle(${radius}px at calc(100% - 60px) 60px)`,
    duration: 0.6,
    ease: "power2.out",
  });

  // Animate content in
  tl.to(
    header.children,
    {
      y: 0,
      autoAlpha: 1,
      stagger: 0.05,
      duration: 0.4,
      ease: "power2.out",
    },
    "-=0.3"
  );

  tl.to(
    items,
    {
      y: 0,
      autoAlpha: 1,
      stagger: 0.04,
      duration: 0.4,
      ease: "power2.out",
    },
    "-=0.25"
  );

  tl.to(
    extras,
    {
      y: 0,
      autoAlpha: 1,
      stagger: 0.03,
      duration: 0.4,
      ease: "power2.out",
    },
    "-=0.2"
  );

  if (isOpen) tl.play(0);
  else tl.reverse(0);

  return () => tl.kill();
}
