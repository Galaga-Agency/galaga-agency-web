"use client";

import { forwardRef } from "react";

interface CustomTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  required?: boolean;
}

const CustomTextarea = forwardRef<HTMLTextAreaElement, CustomTextareaProps>(
  ({ label, error, required, className = "", rows = 5, ...props }, ref) => {
    const baseClasses = `
      w-full px-6 py-4 
      border-2 rounded-xl
      font-medium text-base
      bg-blanco text-negro
      placeholder:text-negro/40 placeholder:font-normal
      transition-all duration-300 ease-out
      focus:outline-none focus:ring-0
      resize-vertical min-h-[120px]
      ${error 
        ? "border-mandarina focus:border-mandarina/80 focus:shadow-lg focus:shadow-mandarina/20" 
        : "border-hielo/60 focus:border-teal focus:shadow-lg focus:shadow-teal/20 hover:border-hielo"
      }
    `;

    return (
      <div className="form-field">
        {label && (
          <label className="block text-md font-semibold text-azul-profundo pb-3">
            {label} {required && <span className="text-mandarina">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          rows={rows}
          className={`${baseClasses} ${className}`}
          {...props}
        />
        {error && (
          <p className="mt-2 text-sm text-mandarina font-medium">{error}</p>
        )}
      </div>
    );
  }
);

CustomTextarea.displayName = "CustomTextarea";

export default CustomTextarea;