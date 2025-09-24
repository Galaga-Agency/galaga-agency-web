"use client";

import { forwardRef } from "react";
import { Check } from "lucide-react";

interface CustomCheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string | React.ReactNode;
  error?: string;
  required?: boolean;
}

const CustomCheckbox = forwardRef<HTMLInputElement, CustomCheckboxProps>(
  ({ label, error, required, className = "", checked, id, ...props }, ref) => {
    return (
      <div className="form-field">
        <div className="flex items-start gap-4">
          <div className="relative flex items-center justify-center pt-1">
            <input
              ref={ref}
              type="checkbox"
              id={id}
              checked={checked}
              className="peer absolute opacity-0 w-6 h-6 cursor-pointer z-10"
              {...props}
            />
            <div
              className={`
                w-6 h-6 
                border-2 rounded-md
                transition-all duration-300 ease-out
                flex items-center justify-center
                pointer-events-none
                ${
                  error
                    ? "border-mandarina peer-focus:border-mandarina/80 peer-focus:shadow-lg peer-focus:shadow-mandarina/20"
                    : "border-hielo/60 peer-focus:border-teal peer-focus:shadow-lg peer-focus:shadow-teal/20 peer-hover:border-hielo"
                }
                ${checked ? "bg-teal border-teal" : "bg-blanco"}
              `}
            >
              {checked && (
                <Check className="w-4 h-4 text-blanco" strokeWidth={3} />
              )}
            </div>
          </div>

          {label && (
            <label
              htmlFor={id}
              className="flex-1 text-base text-negro leading-relaxed cursor-pointer pt-0.5"
            >
              {label} {required && <span className="text-mandarina">*</span>}
            </label>
          )}
        </div>

        {error && (
          <p className="pt-2 text-sm text-mandarina font-medium pl-10">
            {error}
          </p>
        )}
      </div>
    );
  }
);

CustomCheckbox.displayName = "CustomCheckbox";

export default CustomCheckbox;
