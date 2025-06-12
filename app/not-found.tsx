"use client"

import React from "react";
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        {/* 404 Number */}
        <h1 className="text-8xl font-bold text-red-500 mb-4">404</h1>

        {/* Error Message */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Página no encontrada
        </h2>

        <p className="text-gray-600 mb-8 leading-relaxed">
          Lo sentimos, la página que buscas no existe o ha sido movida. Verifica
          la URL o regresa al inicio.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Volver al inicio
          </Link>

          <button
            onClick={() => window.history.back()}
            className="border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Página anterior
          </button>
        </div>

        {/* Additional Help */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            ¿Necesitas ayuda? Contacta con nosotros:
          </p>
          <Link
            href="/contact"
            className="text-red-500 hover:text-red-600 underline text-sm font-medium"
          >
            Ir a contacto
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
