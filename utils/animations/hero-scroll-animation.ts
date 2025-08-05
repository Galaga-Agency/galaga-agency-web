import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initHeroScrollAnimation = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());

  const heroSection = document.querySelector(".hero-section");
  const heroContent = document.querySelector(".hero-content");
  
  if (heroSection && heroContent) {
    ScrollTrigger.create({
      trigger: heroSection,
      start: "top -200px",
      end: "50% top",
      pin: true,
      pinSpacing: false,
    });

    const aboutSectionCards = document.querySelector(".homepage-about-section .absolute");
    if (aboutSectionCards) {
      ScrollTrigger.create({
        trigger: heroSection,
        start: "top bottom",
        end: "bottom top",
        onEnterBack: () => {
          gsap.to(aboutSectionCards, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        },
        onLeave: () => {
          gsap.to(aboutSectionCards, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      });
    }

    gsap.to(heroContent, {
      scale: 0.8,
      opacity: 0,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: heroSection,
        start: "top top",
        end: "50% top",
        scrub: 0.5,
        onUpdate: (self) => {
          if (self.progress === 0) {
            gsap.set(heroContent, { scale: 1, opacity: 1 });
          }
        }
      }
    });
  }

  const aboutSection = document.querySelector(".about-section");
  const aboutContent = document.querySelector(".about-content");
  
  if (aboutSection && aboutContent) {
    gsap.timeline({
      scrollTrigger: {
        trigger: aboutSection,
        start: "top top",
        end: "top 20%",
        scrub: 3,
        pin: ".about-wrapper",
        pinSpacing: true,
        anticipatePin: 1,
      }
    })
    .fromTo(aboutContent, 
      {
        y: 50, 
        opacity: 0,
        scale: 0.98
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        ease: "power2.out",
        duration: 0.8
      }
    );

    const aboutElements = aboutSection.querySelectorAll("[data-speed]");
    aboutElements.forEach((element) => {
      const speed = element.getAttribute("data-speed") || "1";
      
      gsap.to(element, {
        y: () => (parseFloat(speed) - 1) * 100,
        ease: "none",
        scrollTrigger: {
          trigger: aboutSection,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });
  }

  const servicesSection = document.querySelector(".services-section");
  
  if (servicesSection) {
    gsap.fromTo(servicesSection,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: servicesSection,
          start: "top 80%",
          end: "top 50%",
          scrub: 1
        }
      }
    );
  }

  ScrollTrigger.refresh();
};

export const cleanupHeroScrollAnimation = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  
  const heroSection = document.querySelector(".hero-section");
  const heroContent = document.querySelector(".hero-content");
  
  if (heroSection) {
    gsap.set(heroSection, { height: "100vh", minHeight: "100vh", clearProps: "all" });
  }
  if (heroContent) {
    gsap.set(heroContent, { scale: 1, opacity: 1, clearProps: "all" });
  }
};