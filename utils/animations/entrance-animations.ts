import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initEntranceAnimations = () => {
  // Fade In Up
  const fadeInUp = document.querySelectorAll(".fade-in-up");
  gsap.set(fadeInUp, { y: 30, opacity: 0 });
  fadeInUp.forEach((element) => {
    ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      onEnter: () => {
        gsap.to(element, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        });
      },
      once: true,
    });
  });

  // Fade In Down
  const fadeInDown = document.querySelectorAll(".fade-in-down");
  gsap.set(fadeInDown, { y: -30, opacity: 0 });
  fadeInDown.forEach((element) => {
    ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      onEnter: () => {
        gsap.to(element, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        });
      },
      once: true,
    });
  });

  // Fade In Left
  const fadeInLeft = document.querySelectorAll(".fade-in-left");
  gsap.set(fadeInLeft, { x: -30, opacity: 0 });
  fadeInLeft.forEach((element) => {
    ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      onEnter: () => {
        gsap.to(element, {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        });
      },
      once: true,
    });
  });

  // Fade In Right
  const fadeInRight = document.querySelectorAll(".fade-in-right");
  gsap.set(fadeInRight, { x: 30, opacity: 0 });
  fadeInRight.forEach((element) => {
    ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      onEnter: () => {
        gsap.to(element, {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        });
      },
      once: true,
    });
  });

  // Slide In Up
  const slideInUp = document.querySelectorAll(".slide-in-up");
  gsap.set(slideInUp, { y: 60, opacity: 0 });
  slideInUp.forEach((element) => {
    ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      onEnter: () => {
        gsap.to(element, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        });
      },
      once: true,
    });
  });

  // Slide In Down
  const slideInDown = document.querySelectorAll(".slide-in-down");
  gsap.set(slideInDown, { y: -60, opacity: 0 });
  slideInDown.forEach((element) => {
    ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      onEnter: () => {
        gsap.to(element, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        });
      },
      once: true,
    });
  });

  // Slide In Left
  const slideInLeft = document.querySelectorAll(".slide-in-left");
  gsap.set(slideInLeft, { x: -60, opacity: 0 });
  slideInLeft.forEach((element) => {
    ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      onEnter: () => {
        gsap.to(element, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        });
      },
      once: true,
    });
  });

  // Slide In Right
  const slideInRight = document.querySelectorAll(".slide-in-right");
  gsap.set(slideInRight, { x: 60, opacity: 0 });
  slideInRight.forEach((element) => {
    ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      onEnter: () => {
        gsap.to(element, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        });
      },
      once: true,
    });
  });

  // Scale In
  const scaleIn = document.querySelectorAll(".scale-in");
  gsap.set(scaleIn, { scale: 0.8, opacity: 0 });
  scaleIn.forEach((element) => {
    ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      onEnter: () => {
        gsap.to(element, {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        });
      },
      once: true,
    });
  });

  const bounceInUp = document.querySelectorAll(".bounce-in-up");
  gsap.set(bounceInUp, { y: 60, opacity: 0, scale: 0.8 });
  bounceInUp.forEach((element) => {
    ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      onEnter: () => {
        gsap.to(element, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.2)", // Smooth bounce
        });
      },
      once: true,
    });
  });

  // this is another bounce in up animation for when I have various items to animate - like in a grid for example, so they dont animate all at the same time
  const staggerBounceInUp = document.querySelectorAll(".stagger-bounce-in-up");
  if (staggerBounceInUp.length > 0) {
    gsap.set(staggerBounceInUp, { y: 60, opacity: 0, scale: 0.8 });

    ScrollTrigger.create({
      trigger: staggerBounceInUp[0].closest("section") || staggerBounceInUp[0], // Use parent section as trigger
      start: "top 75%",
      onEnter: () => {
        gsap.to(staggerBounceInUp, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.2)",
          stagger: {
            amount: 1.5, // Total stagger time
            from: "start",
            ease: "power2.inOut",
          },
        });
      },
      once: true,
    });
  }

  const fadeInUpRotateY = document.querySelectorAll(".fade-in-up-rotate");
  gsap.set(fadeInUpRotateY, {
    y: 30,
    opacity: 0,
    rotationY: 180,
    delay: 0.2,
    transformPerspective: 1000,
    transformOrigin: "center center",
  });
  fadeInUpRotateY.forEach((element) => {
    ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      onEnter: () => {
        gsap.to(element, {
          y: 0,
          opacity: 1,
          rotationY: 0,
          duration: 1.2,
          ease: "power2.out",
        });
      },
      once: true,
    });
  });

  // Fade In Right Rotate Y
  const fadeInRightRotateY = document.querySelectorAll(".fade-in-right-rotate");
  gsap.set(fadeInRightRotateY, {
    x: 30,
    opacity: 0,
    rotationY: 180,
    transformPerspective: 1000,
    transformOrigin: "center center",
  });
  fadeInRightRotateY.forEach((element) => {
    ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      onEnter: () => {
        gsap.to(element, {
          x: 0,
          opacity: 1,
          rotationY: 0,
          duration: 1.2,
          ease: "power2.out",
        });
      },
      once: true,
    });
  });

  // Fade In Left Rotate Y
  const fadeInLeftRotateY = document.querySelectorAll(".fade-in-left-rotate");
  gsap.set(fadeInLeftRotateY, {
    x: -30,
    opacity: 0,
    rotationY: 180,
    transformPerspective: 1000,
    transformOrigin: "center center",
  });
  fadeInLeftRotateY.forEach((element) => {
    ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      onEnter: () => {
        gsap.to(element, {
          x: 0,
          opacity: 1,
          rotationY: 0,
          duration: 1.2,
          ease: "power2.out",
        });
      },
      once: true,
    });
  });

  // Drift Right - Fast entry from right with sharp brake effect
  const driftRight = document.querySelectorAll(".drift-right");
  gsap.set(driftRight, { x: 200, opacity: 0, rotation: 5 });
  driftRight.forEach((element) => {
    ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      onEnter: () => {
        gsap.to(element, {
          x: 0,
          opacity: 1,
          rotation: 0,
          duration: 0.6,
          ease: "power4.out", // Fast start, abrupt stop like hitting brakes
        });
      },
      once: true,
    });
  });

  // Drift Left - Fast entry from left with sharp brake effect
  const driftLeft = document.querySelectorAll(".drift-left");
  gsap.set(driftLeft, { x: -200, opacity: 0, rotation: -5 });
  driftLeft.forEach((element) => {
    ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      onEnter: () => {
        gsap.to(element, {
          x: 0,
          opacity: 1,
          rotation: 0,
          duration: 0.6,
          ease: "power4.out", // Fast start, abrupt stop like hitting brakes
        });
      },
      once: true,
    });
  });

  const staggerDriftRight = document.querySelectorAll(".stagger-drift-right");
  if (staggerDriftRight.length > 0) {
    gsap.set(staggerDriftRight, {
      x: 250,
      opacity: 0,
      rotation: 8,
      scale: 0.9,
    });

    ScrollTrigger.create({
      trigger: staggerDriftRight[0].closest("section") || staggerDriftRight[0],
      start: "top 75%",
      onEnter: () => {
        gsap.to(staggerDriftRight, {
          x: 0,
          opacity: 1,
          rotation: 0,
          scale: 1,
          duration: 0.7,
          ease: "power4.out",
          stagger: {
            amount: 1.2, // Total stagger time
            from: "start",
            ease: "power2.inOut",
          },
        });
      },
      once: true,
    });
  }

  const staggerDriftLeft = document.querySelectorAll(".stagger-drift-left");
  if (staggerDriftLeft.length > 0) {
    gsap.set(staggerDriftLeft, {
      x: -250,
      opacity: 0,
      rotation: -8,
      scale: 0.9,
    });

    ScrollTrigger.create({
      trigger: staggerDriftLeft[0].closest("section") || staggerDriftLeft[0],
      start: "top 75%",
      onEnter: () => {
        gsap.to(staggerDriftLeft, {
          x: 0,
          opacity: 1,
          rotation: 0,
          scale: 1,
          duration: 0.7,
          ease: "power4.out",
          stagger: {
            amount: 1.2, // Total stagger time
            from: "start",
            ease: "power2.inOut",
          },
        });
      },
      once: true,
    });
  }

  // Cleanup
  return () => {
    ScrollTrigger.getAll().forEach((t) => t.kill());
  };
};
