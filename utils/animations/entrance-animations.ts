"use client";

import { gsap, ScrollTrigger } from "@/lib/gsapConfig";

export const initEntranceAnimations = () => {
  if (typeof window === "undefined") return () => {};

  // track only what we create here
  const triggers: ScrollTrigger[] = [];

  // helper: only set when there are targets
  const setIfAny = (targets: NodeListOf<Element>, vars: gsap.TweenVars) => {
    if (targets.length) gsap.set(targets, vars);
  };

  // collect all selectors we tween so we can killTweensOf them on cleanup
  const tweenSelectors: string[] = [];

  // ---------- Fade In Up
  const fadeInUp = document.querySelectorAll(".fade-in-up");
  setIfAny(fadeInUp, { y: 30, opacity: 0 });
  fadeInUp.forEach((el) => {
    tweenSelectors.push(".fade-in-up");
    triggers.push(
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () =>
          gsap.to(el, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }),
        once: true,
      })
    );
  });

  // ---------- Fade In Down
  const fadeInDown = document.querySelectorAll(".fade-in-down");
  setIfAny(fadeInDown, { y: -30, opacity: 0 });
  fadeInDown.forEach((el) => {
    tweenSelectors.push(".fade-in-down");
    triggers.push(
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () =>
          gsap.to(el, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }),
        once: true,
      })
    );
  });

  // ---------- Fade In Left
  const fadeInLeft = document.querySelectorAll(".fade-in-left");
  setIfAny(fadeInLeft, { x: -30, opacity: 0 });
  fadeInLeft.forEach((el) => {
    tweenSelectors.push(".fade-in-left");
    triggers.push(
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () =>
          gsap.to(el, { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }),
        once: true,
      })
    );
  });

  // ---------- Fade In Right
  const fadeInRight = document.querySelectorAll(".fade-in-right");
  setIfAny(fadeInRight, { x: 30, opacity: 0 });
  fadeInRight.forEach((el) => {
    tweenSelectors.push(".fade-in-right");
    triggers.push(
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () =>
          gsap.to(el, { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }),
        once: true,
      })
    );
  });

  // ---------- Slide In Up
  const slideInUp = document.querySelectorAll(".slide-in-up");
  setIfAny(slideInUp, { y: 60, opacity: 0 });
  slideInUp.forEach((el) => {
    tweenSelectors.push(".slide-in-up");
    triggers.push(
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () =>
          gsap.to(el, { y: 0, opacity: 1, duration: 1, ease: "power2.out" }),
        once: true,
      })
    );
  });

  // ---------- Slide In Down
  const slideInDown = document.querySelectorAll(".slide-in-down");
  setIfAny(slideInDown, { y: -60, opacity: 0 });
  slideInDown.forEach((el) => {
    tweenSelectors.push(".slide-in-down");
    triggers.push(
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () =>
          gsap.to(el, { y: 0, opacity: 1, duration: 1, ease: "power2.out" }),
        once: true,
      })
    );
  });

  // ---------- Slide In Left
  const slideInLeft = document.querySelectorAll(".slide-in-left");
  setIfAny(slideInLeft, { x: -60, opacity: 0 });
  slideInLeft.forEach((el) => {
    tweenSelectors.push(".slide-in-left");
    triggers.push(
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () =>
          gsap.to(el, { x: 0, opacity: 1, duration: 1, ease: "power2.out" }),
        once: true,
      })
    );
  });

  // ---------- Slide In Right
  const slideInRight = document.querySelectorAll(".slide-in-right");
  setIfAny(slideInRight, { x: 60, opacity: 0 });
  slideInRight.forEach((el) => {
    tweenSelectors.push(".slide-in-right");
    triggers.push(
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () =>
          gsap.to(el, { x: 0, opacity: 1, duration: 1, ease: "power2.out" }),
        once: true,
      })
    );
  });

  // ---------- Scale In
  const scaleIn = document.querySelectorAll(".scale-in");
  setIfAny(scaleIn, { scale: 0.8, opacity: 0 });
  scaleIn.forEach((el) => {
    tweenSelectors.push(".scale-in");
    triggers.push(
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () =>
          gsap.to(el, {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          }),
        once: true,
      })
    );
  });

  // ---------- Bounce In Up
  const bounceInUp = document.querySelectorAll(".bounce-in-up");
  setIfAny(bounceInUp, { y: 60, opacity: 0, scale: 0.8 });
  bounceInUp.forEach((el) => {
    tweenSelectors.push(".bounce-in-up");
    triggers.push(
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () =>
          gsap.to(el, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "back.out(1.2)",
          }),
        once: true,
      })
    );
  });

  // ---------- Stagger Bounce In Up (group trigger)
  const staggerBounceInUp = document.querySelectorAll(".stagger-bounce-in-up");
  if (staggerBounceInUp.length) {
    gsap.set(staggerBounceInUp, { y: 60, opacity: 0, scale: 0.8 });
    tweenSelectors.push(".stagger-bounce-in-up");
    const groupTrigger =
      staggerBounceInUp[0].closest("section") ||
      (staggerBounceInUp[0] as Element);
    triggers.push(
      ScrollTrigger.create({
        trigger: groupTrigger,
        start: "top 75%",
        onEnter: () =>
          gsap.to(staggerBounceInUp, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "back.out(1.2)",
            stagger: { amount: 1.5, from: "start", ease: "power2.inOut" },
          }),
        once: true,
      })
    );
  }

  // ---------- Fade In Up + rotateY
  const fadeInUpRotateY = document.querySelectorAll(".fade-in-up-rotate");
  setIfAny(fadeInUpRotateY, {
    y: 30,
    opacity: 0,
    rotationY: 180,
    transformPerspective: 1000,
    transformOrigin: "center center",
  });
  fadeInUpRotateY.forEach((el) => {
    tweenSelectors.push(".fade-in-up-rotate");
    triggers.push(
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () =>
          gsap.to(el, {
            y: 0,
            opacity: 1,
            rotationY: 0,
            duration: 1.2,
            ease: "power2.out",
          }),
        once: true,
      })
    );
  });

  // ---------- Right rotateY
  const fadeInRightRotateY = document.querySelectorAll(".fade-in-right-rotate");
  setIfAny(fadeInRightRotateY, {
    x: 30,
    opacity: 0,
    rotationY: 180,
    transformPerspective: 1000,
    transformOrigin: "center center",
  });
  fadeInRightRotateY.forEach((el) => {
    tweenSelectors.push(".fade-in-right-rotate");
    triggers.push(
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () =>
          gsap.to(el, {
            x: 0,
            opacity: 1,
            rotationY: 0,
            duration: 1.2,
            ease: "power2.out",
          }),
        once: true,
      })
    );
  });

  // ---------- Left rotateY
  const fadeInLeftRotateY = document.querySelectorAll(".fade-in-left-rotate");
  setIfAny(fadeInLeftRotateY, {
    x: -30,
    opacity: 0,
    rotationY: 180,
    transformPerspective: 1000,
    transformOrigin: "center center",
  });
  fadeInLeftRotateY.forEach((el) => {
    tweenSelectors.push(".fade-in-left-rotate");
    triggers.push(
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () =>
          gsap.to(el, {
            x: 0,
            opacity: 1,
            rotationY: 0,
            duration: 1.2,
            ease: "power2.out",
          }),
        once: true,
      })
    );
  });

  // ---------- Drift Right
  const driftRight = document.querySelectorAll(".drift-right");
  setIfAny(driftRight, { x: 200, opacity: 0, rotation: 5 });
  driftRight.forEach((el) => {
    tweenSelectors.push(".drift-right");
    triggers.push(
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () =>
          gsap.to(el, {
            x: 0,
            opacity: 1,
            rotation: 0,
            duration: 0.6,
            ease: "power4.out",
          }),
        once: true,
      })
    );
  });

  // ---------- Drift Left
  const driftLeft = document.querySelectorAll(".drift-left");
  setIfAny(driftLeft, { x: -200, opacity: 0, rotation: -5 });
  driftLeft.forEach((el) => {
    tweenSelectors.push(".drift-left");
    triggers.push(
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () =>
          gsap.to(el, {
            x: 0,
            opacity: 1,
            rotation: 0,
            duration: 0.6,
            ease: "power4.out",
          }),
        once: true,
      })
    );
  });

  // ---------- Stagger drifts: right
  const staggerDriftRight = document.querySelectorAll(".stagger-drift-right");
  if (staggerDriftRight.length) {
    gsap.set(staggerDriftRight, {
      x: 250,
      opacity: 0,
      rotation: 8,
      scale: 0.9,
    });
    tweenSelectors.push(".stagger-drift-right");
    const trigger =
      staggerDriftRight[0].closest("section") || staggerDriftRight[0];
    triggers.push(
      ScrollTrigger.create({
        trigger,
        start: "top 75%",
        onEnter: () =>
          gsap.to(staggerDriftRight, {
            x: 0,
            opacity: 1,
            rotation: 0,
            scale: 1,
            duration: 0.7,
            ease: "power4.out",
            stagger: { amount: 1.2, from: "start", ease: "power2.inOut" },
          }),
        once: true,
      })
    );
  }

  // ---------- Stagger drifts: left
  const staggerDriftLeft = document.querySelectorAll(".stagger-drift-left");
  if (staggerDriftLeft.length) {
    gsap.set(staggerDriftLeft, {
      x: -250,
      opacity: 0,
      rotation: -8,
      scale: 0.9,
    });
    tweenSelectors.push(".stagger-drift-left");
    const trigger =
      staggerDriftLeft[0].closest("section") || staggerDriftLeft[0];
    triggers.push(
      ScrollTrigger.create({
        trigger,
        start: "top 75%",
        onEnter: () =>
          gsap.to(staggerDriftLeft, {
            x: 0,
            opacity: 1,
            rotation: 0,
            scale: 1,
            duration: 0.7,
            ease: "power4.out",
            stagger: { amount: 1.2, from: "start", ease: "power2.inOut" },
          }),
        once: true,
      })
    );
  }

  // ---------- Cleanup: only our stuff
  return () => {
    // stop any in-flight tweens we created on these selectors
    gsap.killTweensOf(Array.from(new Set(tweenSelectors)));
    // kill our triggers
    triggers.forEach((t) => t.kill());
  };
};
