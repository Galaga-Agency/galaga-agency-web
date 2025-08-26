"use client";
import React from "react";
import { motion, MotionValue, useTransform } from "motion/react";

export const HeroImageCard = ({
  image,
  translate,
  scrollProgress,
}: {
  image: string;
  translate: MotionValue<number>;
  scrollProgress: MotionValue<number>;
}) => {
  // Cards fade out as video expands
  const cardOpacity = useTransform(scrollProgress, [0.8, 0.95], [1, 0]);

  return (
    <motion.div
      style={{
        x: translate,
        opacity: cardOpacity,
      }}
      className="w-92 h-72 shrink-0"
    >
      <div
        className="relative w-full h-full [perspective:2000px] cursor-pointer group"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width / 2) / 25;
          const y = (e.clientY - rect.top - rect.height / 2) / 25;
          const card = e.currentTarget.querySelector(
            ".image-card"
          ) as HTMLElement;

          if (card) {
            card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
          }
        }}
        onMouseLeave={(e) => {
          const card = e.currentTarget.querySelector(
            ".image-card"
          ) as HTMLElement;
          if (card) {
            card.style.transform = "rotateY(0deg) rotateX(0deg)";
          }
        }}
      >
        <div className="image-card relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ease-out">
          {/* Base Container */}
          <div
            className="absolute -inset-4 bg-gradient-to-br from-azul-profundo via-teal to-negro rounded-3xl shadow-2xl border-2 border-turquesa/30"
            style={{ transform: "translateZ(-20px)" }}
          />

          {/* Image */}
          <div
            className="absolute inset-0 rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.7)]"
            style={{
              transform: "translateZ(100px) rotateX(8deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
