import { gsap } from "@/lib/gsapConfig";

// Original hero 3D animation (centered, large to small)
export const animateHero3D = () => {
  const element3D = document.querySelector('[data-animate="hero-3d-element"]');
  if (!element3D) return;

  gsap.set(element3D, {
    top: "50%",
    opacity: 0.1,
    scale: 3,
    xPercent: -50,
    yPercent: -50,
  });

  gsap.to(element3D, {
    top: "22%",
    scale: 0.5,
    opacity: 1,
    duration: 2,
    delay: 0.8,
    ease: "power3.out",
  });
};

// New layout animation (tiny to full size, for flex layout)
export const animateHero3DGrow = () => {
  const element3D = document.querySelector('[data-animate="hero-3d-grow"]');
  if (!element3D) return;

  gsap.set(element3D, {
    scale: 0.05,
    opacity: 0,
    rotationY: -45,
    transformOrigin: "center center",
  });

  gsap.to(element3D, {
    scale: 1,
    opacity: 1,
    rotationY: 0,
    duration: 2.5,
    delay: 1.2,
    ease: "back.out(1.7)",
  });
};

// Floating 3D model animation (subtle hover effect)
export const animateFloating3D = () => {
  const element3D = document.querySelector('[data-animate="floating-3d"]');
  if (!element3D) return;

  gsap.set(element3D, {
    y: 0,
    rotationY: 0,
  });

  // Continuous floating animation
  gsap.to(element3D, {
    y: -15,
    duration: 3,
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true,
  });

  // Subtle rotation
  gsap.to(element3D, {
    rotationY: 360,
    duration: 20,
    ease: "none",
    repeat: -1,
  });
};

// Product showcase 3D animation (for product pages)
export const animateProduct3D = () => {
  const element3D = document.querySelector('[data-animate="product-3d"]');
  if (!element3D) return;

  gsap.set(element3D, {
    scale: 0.3,
    opacity: 0,
    rotationX: 30,
    rotationY: -30,
  });

  gsap.to(element3D, {
    scale: 1,
    opacity: 1,
    rotationX: 0,
    rotationY: 0,
    duration: 2,
    delay: 0.5,
    ease: "power3.out",
  });
};

// Interactive 3D model (responds to mouse hover)
export const initInteractive3D = () => {
  const element3D = document.querySelector('[data-animate="interactive-3d"]');
  if (!element3D) return;

  const handleMouseMove = (e: Event) => {
    const mouseEvent = e as MouseEvent;
    const rect = element3D.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = mouseEvent.clientX - centerX;
    const mouseY = mouseEvent.clientY - centerY;

    const rotateX = (mouseY / rect.height) * -10;
    const rotateY = (mouseX / rect.width) * 10;

    gsap.to(element3D, {
      rotationX: rotateX,
      rotationY: rotateY,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element3D, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.8,
      ease: "power2.out",
    });
  };

  element3D.addEventListener("mousemove", handleMouseMove);
  element3D.addEventListener("mouseleave", handleMouseLeave);

  // Return cleanup function
  return () => {
    element3D.removeEventListener("mousemove", handleMouseMove);
    element3D.removeEventListener("mouseleave", handleMouseLeave);
  };
};
