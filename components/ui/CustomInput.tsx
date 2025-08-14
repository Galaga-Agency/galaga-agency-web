"use client";

import { forwardRef } from "react";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  required?: boolean;
  variant?: "default" | "floating";
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, error, required, variant = "default", className = "", ...props }, ref) => {
    const baseClasses = `
      w-full px-6 py-4 
      border-2 rounded-xl
      font-medium text-base
      bg-blanco text-negro
      placeholder:text-negro/40 placeholder:font-normal
      transition-all duration-300 ease-out
      focus:outline-none focus:ring-0
      ${error 
        ? "border-mandarina focus:border-mandarina/80 focus:shadow-lg focus:shadow-mandarina/20" 
        : "border-hielo/60 focus:border-teal focus:shadow-lg focus:shadow-teal/20 hover:border-hielo"
      }
    `;

    if (variant === "floating") {
      return (
        <div className="relative">
          <input
            ref={ref}
            className={`${baseClasses} peer placeholder-transparent ${className}`}
            placeholder={label}
            {...props}
          />
          {label && (
            <label className="absolute left-6 -top-2.5 bg-blanco px-2 text-sm font-semibold text-azul-profundo transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-negro/40 peer-placeholder-shown:top-4 peer-placeholder-shown:left-6 peer-focus:-top-2.5 peer-focus:left-6 peer-focus:text-sm peer-focus:text-teal peer-focus:font-semibold">
              {label} {required && <span className="text-mandarina">*</span>}
            </label>
          )}
          {error && (
            <p className="mt-2 text-sm text-mandarina font-medium">{error}</p>
          )}
        </div>
      );
    }

    return (
      <div className="form-field">
        {label && (
          <label className="block text-md font-semibold text-azul-profundo pb-3">
            {label} {required && <span className="text-mandarina">*</span>}
          </label>
        )}
        <input
          ref={ref}
          className={`${baseClasses} ${className}`}
          {...props}
        />
        {error && (
          <p className="pt-2 text-sm text-mandarina font-medium">{error}</p>
        )}
      </div>
    );
  }
);

CustomInput.displayName = "CustomInput";

export default CustomInput;