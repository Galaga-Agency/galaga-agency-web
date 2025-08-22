import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initAlternateBlocksAnimations = () => {
  // Block Icons - Dramatic entrance with impact
  gsap.set(".block-icon-1, .block-icon-2, .block-icon-3", { 
    scale: 0,
    opacity: 0,
    y: 50,
    rotation: 45,
    force3D: true
  });
  
  ScrollTrigger.create({
    trigger: ".block-container:nth-child(1)",
    start: "top 85%",
    onEnter: () => {
      gsap.to(".block-icon-1", {
        scale: 1,
        opacity: 1,
        y: 0,
        rotation: 0,
        duration: 0.7,
        ease: "back.out(2)",
        force3D: true
      });
    },
    once: true,
  });
  
  ScrollTrigger.create({
    trigger: ".block-container:nth-child(2)",
    start: "top 85%",
    onEnter: () => {
      gsap.to(".block-icon-2", {
        scale: 1,
        opacity: 1,
        y: 0,
        rotation: 0,
        duration: 0.7,
        ease: "back.out(2)",
        force3D: true
      });
    },
    once: true,
  });
  
  ScrollTrigger.create({
    trigger: ".block-container:nth-child(3)",
    start: "top 85%",
    onEnter: () => {
      gsap.to(".block-icon-3", {
        scale: 1,
        opacity: 1,
        y: 0,
        rotation: 0,
        duration: 0.7,
        ease: "back.out(2)",
        force3D: true
      });
    },
    once: true,
  });

  // Block Titles - Smooth slide entrance
  gsap.set(".block-title-1", { x: 40, opacity: 0, force3D: true });
  gsap.set(".block-title-2", { x: -40, opacity: 0, force3D: true });
  gsap.set(".block-title-3", { x: 40, opacity: 0, force3D: true });
  
  ScrollTrigger.create({
    trigger: ".block-container:nth-child(1)",
    start: "top 85%",
    onEnter: () => {
      gsap.to(".block-title-1", {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        force3D: true
      });
    },
    once: true,
  });
  
  ScrollTrigger.create({
    trigger: ".block-container:nth-child(2)",
    start: "top 85%",
    onEnter: () => {
      gsap.to(".block-title-2", {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        force3D: true
      });
    },
    once: true,
  });
  
  ScrollTrigger.create({
    trigger: ".block-container:nth-child(3)",
    start: "top 85%",
    onEnter: () => {
      gsap.to(".block-title-3", {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        force3D: true
      });
    },
    once: true,
  });

  // Block Descriptions - Modern vertical reveal
  gsap.set(".block-description-1, .block-description-2, .block-description-3", { 
    y: 40, 
    opacity: 0,
    force3D: true 
  });
  
  ScrollTrigger.create({
    trigger: ".block-container:nth-child(1)",
    start: "top 85%",
    onEnter: () => {
      gsap.to(".block-description-1", {
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power4.out",
        force3D: true
      });
    },
    once: true,
  });
  
  ScrollTrigger.create({
    trigger: ".block-container:nth-child(2)",
    start: "top 85%",
    onEnter: () => {
      gsap.to(".block-description-2", {
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power4.out",
        force3D: true
      });
    },
    once: true,
  });
  
  ScrollTrigger.create({
    trigger: ".block-container:nth-child(3)",
    start: "top 85%",
    onEnter: () => {
      gsap.to(".block-description-3", {
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power4.out",
        force3D: true
      });
    },
    once: true,
  });

  // Block Images - First two normal, third one special flip
  gsap.set(".block-image-1, .block-image-2", { 
    opacity: 0,
    y: 20,
    force3D: true 
  });
  
  gsap.set(".block-image-3", { 
    opacity: 0,
    y: 20,
    rotateY: 180,
    force3D: true 
  });
  
  ScrollTrigger.create({
    trigger: ".block-container:nth-child(1)",
    start: "top 85%",
    onEnter: () => {
      gsap.to(".block-image-1", {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power4.out",
        force3D: true
      });
    },
    once: true,
  });
  
  ScrollTrigger.create({
    trigger: ".block-container:nth-child(2)",
    start: "top 85%",
    onEnter: () => {
      gsap.to(".block-image-2", {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power4.out",
        force3D: true
      });
    },
    once: true,
  });
  
  ScrollTrigger.create({
    trigger: ".block-container:nth-child(3)",
    start: "top 85%",
    onEnter: () => {
      gsap.to(".block-image-3", {
        opacity: 1,
        y: 0,
        rotateY: 0,
        duration: 1.4,
        ease: "power4.out",
        force3D: true
      });
    },
    once: true,
  });

  // Cleanup
  return () => {
    ScrollTrigger.getAll().forEach((t) => t.kill());
  };
};