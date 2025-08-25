"use client";
import React from "react";
import { motion, MotionValue } from "motion/react";

export const HeroServiceCard = ({
  parallaxItem,
  translate,
}: {
  parallaxItem: {
    title: string;
    image: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{ x: translate }}
      className="w-92 h-72 shrink-0"
      whileHover={{
        scale: 1.02,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div
        className="relative w-full h-full [perspective:2000px] cursor-pointer group"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          // Subtle but effective mouse-following 3D rotation
          const x = (e.clientX - rect.left - rect.width / 2) / 25;
          const y = (e.clientY - rect.top - rect.height / 2) / 25;
          const card = e.currentTarget.querySelector(
            ".service-card"
          ) as HTMLElement;
          const floatingImage = e.currentTarget.querySelector(
            ".floating-image"
          ) as HTMLElement;
          const floatingTitle = e.currentTarget.querySelector(
            ".floating-title"
          ) as HTMLElement;

          if (card) {
            card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
          }

          // Subtle but clear 3D movement to reveal all layers
          if (floatingImage) {
            floatingImage.style.transform = `translateZ(120px) translateX(${
              x * 3
            }px) translateY(${y * 2}px) rotateY(${x * 0.8}deg) rotateX(${
              -y * 0.6 + 15
            }deg) rotateZ(${x * 0.3}deg) scale(1.03)`;
          }

          if (floatingTitle) {
            floatingTitle.style.transform = `translateZ(180px) translateX(${
              x * 2
            }px) translateY(${y * 1}px) rotateX(${-y * 0.4 + 10}deg) rotateY(${
              x * 0.5
            }deg) scale(1.02)`;
          }
        }}
        onMouseLeave={(e) => {
          const card = e.currentTarget.querySelector(
            ".service-card"
          ) as HTMLElement;
          const floatingImage = e.currentTarget.querySelector(
            ".floating-image"
          ) as HTMLElement;
          const floatingTitle = e.currentTarget.querySelector(
            ".floating-title"
          ) as HTMLElement;

          if (card) {
            card.style.transform = "rotateY(0deg) rotateX(0deg)";
          }
          if (floatingImage) {
            floatingImage.style.transform =
              "translateZ(100px) rotateX(8deg) rotateY(0deg) rotateZ(0deg) scale(1)";
          }
          if (floatingTitle) {
            floatingTitle.style.transform =
              "translateZ(200px) rotateX(5deg) rotateY(0deg) scale(1.1)";
          }
        }}
      >
        <div className="service-card relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ease-out">
          {/* Base Container */}
          <div
            className="absolute -inset-4 bg-gradient-to-br from-azul-profundo via-teal to-negro rounded-3xl shadow-2xl border-2 border-turquesa/30"
            style={{ transform: "translateZ(-20px)" }}
          />

          {/* Container glow */}
          <div
            className="absolute top-2 left-2 bg-gradient-to-br from-turquesa/20 to-azul-profundo/20 rounded-3xl blur-sm"
            style={{ transform: "translateZ(-15px)" }}
          />

          {/* Container shadow for depth */}
          <div
            className="absolute inset-0 bg-negro/30 rounded-3xl blur-xl"
            style={{
              transform: "translateZ(-10px) translateY(10px) translateX(5px)",
            }}
          />

          {/* Service Image */}
          <div
            className="floating-image absolute inset-0 rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.7)] transition-all duration-700 ease-out"
            style={{
              transform: "translateZ(100px) rotateX(8deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <img
              src={parallaxItem.image}
              alt={parallaxItem.title}
              className="w-full h-full object-cover"
            />

            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-azul-profundo/80 via-transparent to-transparent" />
          </div>

          {/* Service Title */}
          <div
            className="floating-title absolute bottom-6 left-6 right-6 transition-all duration-700 ease-out"
            style={{
              transform: "translateZ(160px) rotateX(5deg)",
              transformStyle: "preserve-3d",

            }}
          >
            <div className="p-2">
              <h3 className="text-xl font-bold text-white drop-shadow-2xl text-center">
                {parallaxItem.title}
              </h3>
              {/* Title shadow */}
              <div
                className="absolute inset-0 bg-black/20 blur-md rounded-xl -z-10"
                style={{ transform: "translateZ(-20px) translateY(10px)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
