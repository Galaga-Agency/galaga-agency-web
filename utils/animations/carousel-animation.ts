"use client";

import { gsap, ScrollTrigger } from "@/lib/gsapConfig";

export const initCarouselAnimation = () => {
  if (typeof window === "undefined") return () => {};

  const createdTriggers: ScrollTrigger[] = [];
  const createdTweens: gsap.core.Tween[] = [];

  // ----- Title
  const section = document.querySelector(".case-studies-section");
  if (section && document.querySelector(".case-studies-title")) {
    const t = gsap.fromTo(
      ".case-studies-title",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: { trigger: section, start: "top 90%" },
      }
    );
    createdTweens.push(t);
    if ((t as any).scrollTrigger)
      createdTriggers.push((t as any).scrollTrigger);
  }

  // ----- Stats
  const statsContainer = document.querySelector(".stats-container");
  const statsItems = document.querySelectorAll(".stats-item");
  if (statsContainer && statsItems.length) {
    const t = gsap.fromTo(
      statsItems,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        stagger: 0.1,
        ease: "back.out",
        scrollTrigger: { trigger: statsContainer, start: "top 90%" },
      }
    );
    createdTweens.push(t);
    if ((t as any).scrollTrigger)
      createdTriggers.push((t as any).scrollTrigger);
  }

  // ----- Carousel (with its own cleanup)
  const cleanupCarousel = initGSAPCarousel();

  // ----- Combined cleanup
  return () => {
    // kill tweens we created (and their internal ScrollTriggers)
    createdTweens.forEach((t) => t.kill());
    // explicitly kill any ScrollTriggers we tracked
    createdTriggers.forEach((st) => st.kill());
    // kill carousel resources (listeners, interval, tweens)
    cleanupCarousel?.();
  };
};

const initGSAPCarousel = () => {
  const slides = Array.from(
    document.querySelectorAll<HTMLElement>(".carousel-slide")
  );
  const container = document.querySelector<HTMLElement>(".carousel-track");
  if (!slides.length || !container) return;

  let currentIndex = 0;
  const totalSlides = slides.length;
  let intervalId: number | null = null;

  const updateCarousel = () => {
    slides.forEach((slide, index) => {
      const offset = index - currentIndex;
      let normalizedOffset = offset;

      if (normalizedOffset > totalSlides / 2) normalizedOffset -= totalSlides;
      if (normalizedOffset < -totalSlides / 2) normalizedOffset += totalSlides;

      const isVisible = Math.abs(normalizedOffset) <= 1;
      const x = normalizedOffset * 320;
      const z = Math.abs(normalizedOffset) * -350;
      const rotateY = normalizedOffset * 35;
      const scale = normalizedOffset === 0 ? 1 : 0.75;
      const opacity = isVisible ? (normalizedOffset === 0 ? 1 : 0.7) : 0;
      const zIndex =
        normalizedOffset === 0
          ? 100
          : Math.max(1, 50 - Math.abs(normalizedOffset) * 10);

      gsap.to(slide, {
        x,
        z,
        rotateY,
        scale,
        opacity,
        zIndex,
        display: isVisible ? "block" : "none",
        duration: 0.6,
        ease: "power2.out",
        overwrite: "auto",
      });
    });
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  };

  // --- Touch/mouse handling
  let startX = 0;
  let isDragging = false;

  const el = container;
  el.style.cursor = "grab";

  const onMouseDown: EventListener = (e) => {
    const me = e as MouseEvent;
    startX = me.clientX;
    isDragging = true;
    el.style.cursor = "grabbing";
  };

  const onMouseUp: EventListener = (e) => {
    if (!isDragging) return;
    const me = e as MouseEvent;
    isDragging = false;
    el.style.cursor = "grab";
    const diff = startX - me.clientX;
    if (Math.abs(diff) > 50) diff > 0 ? nextSlide() : prevSlide();
  };

  const onTouchStart: EventListener = (e) => {
    const te = e as TouchEvent;
    startX = te.touches[0]?.clientX ?? 0;
    isDragging = true;
  };

  const onTouchEnd: EventListener = (e) => {
    if (!isDragging) return;
    const te = e as TouchEvent;
    isDragging = false;
    const diff = startX - (te.changedTouches[0]?.clientX ?? 0);
    if (Math.abs(diff) > 50) diff > 0 ? nextSlide() : prevSlide();
  };

  el.addEventListener("mousedown", onMouseDown);
  el.addEventListener("mouseup", onMouseUp);
  el.addEventListener("touchstart", onTouchStart, { passive: true });
  el.addEventListener("touchend", onTouchEnd);

  // Auto-advance every 3s
  intervalId = window.setInterval(nextSlide, 3000);

  // Initial setup
  updateCarousel();

  // Cleanup specific to carousel
  return () => {
    // listeners
    el.removeEventListener("mousedown", onMouseDown);
    el.removeEventListener("mouseup", onMouseUp);
    el.removeEventListener("touchstart", onTouchStart);
    el.removeEventListener("touchend", onTouchEnd);

    // interval
    if (intervalId != null) {
      clearInterval(intervalId);
      intervalId = null;
    }

    // stop any in-flight tweens on slides
    gsap.killTweensOf(slides);

    // optional: clear transforms if the DOM persists
    // gsap.set(slides, { clearProps: "transform,opacity,display" });
  };
};
