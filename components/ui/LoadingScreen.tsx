"use client";

import { createPortal } from "react-dom";
import { Logo3D } from "../Logo3D";
import { useTranslation } from "@/hooks/useTranslation";

export default function LoadingScreen() {
  const { t } = useTranslation();

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, var(--color-azul-profundo) 0%, var(--color-teal) 50%, var(--color-negro) 100%)",
        gap: "2rem",
      }}
      aria-busy="true"
      aria-live="polite"
      role="status"
    >
      {/* 3D Logo */}
      <div style={{ width: "400px", height: "300px" }}>
        <Logo3D />
      </div>

      {/* Loading Text */}
      <div className="text-center flex flex-col gap-12">
        <p className="text-blanco text-2xl">{t("loading")}</p>
      </div>
    </div>,
    document.body
  );
}
