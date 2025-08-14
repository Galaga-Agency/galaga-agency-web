"use client";

import { forwardRef, useState } from "react";
import { ChevronDown } from "lucide-react";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  label?: string;
  error?: string;
  required?: boolean;
  placeholder?: string;
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  name?: string;
  className?: string;
}

const CustomSelect = forwardRef<HTMLDivElement, CustomSelectProps>(
  ({ label, error, required, placeholder = "Select an option", options, value, onChange, name, className = "" }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const selectedOption = options.find(opt => opt.value === value);

    const handleSelect = (optionValue: string) => {
      onChange?.(optionValue);
      setIsOpen(false);
    };

    const baseClasses = `
      w-full px-6 py-4 
      border-2 rounded-xl
      font-medium text-base
      bg-blanco
      transition-all duration-300 ease-out
      focus:outline-none focus:ring-0
      cursor-pointer
      ${error 
        ? "border-mandarina focus:border-mandarina/80 focus:shadow-lg focus:shadow-mandarina/20" 
        : "border-hielo/60 focus:border-teal focus:shadow-lg focus:shadow-teal/20 hover:border-hielo"
      }
      ${isOpen ? "border-teal shadow-lg shadow-teal/20" : ""}
    `;

    return (
      <div className={`form-field relative z-10 ${className}`} ref={ref}>
        {label && (
          <label className="block text-md font-semibold text-azul-profundo pb-3">
            {label} {required && <span className="text-mandarina">*</span>}
          </label>
        )}
        
        {/* Hidden input for form submission */}
        <input type="hidden" name={name} value={value || ""} />
        
        {/* Custom Select Button */}
        <div
          className={baseClasses}
          onClick={() => setIsOpen(!isOpen)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsOpen(!isOpen);
            }
            if (e.key === 'Escape') {
              setIsOpen(false);
            }
          }}
        >
          <div className="flex items-center justify-between">
            <span className={selectedOption ? "text-negro" : "text-negro/40"}>
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            <ChevronDown 
              className={`w-5 h-5 text-azul-profundo transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`} 
            />
          </div>
        </div>

        {/* Dropdown Options */}
        {isOpen && (
          <>
            {/* Click outside to close */}
            <div
              className="fixed inset-0 z-[100]"
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute top-full left-0 right-0 mt-2 bg-blanco border-2 border-hielo/60 rounded-xl shadow-xl z-[101] max-h-60 overflow-y-auto">
              {options.map((option) => (
                <div
                  key={option.value}
                  className={`
                    px-6 py-3 cursor-pointer transition-colors duration-200
                    hover:bg-hielo/30 
                    ${value === option.value ? "bg-teal/10 text-teal font-semibold" : "text-negro"}
                    first:rounded-t-xl last:rounded-b-xl
                  `}
                  onClick={() => handleSelect(option.value)}
                  role="option"
                  aria-selected={value === option.value}
                >
                  {option.label}
                </div>
              ))}
            </div>
          </>
        )}

        {error && (
          <p className="pt-2 text-md text-mandarina font-medium">{error}</p>
        )}
      </div>
    );
  }
);

CustomSelect.displayName = "CustomSelect";

export default CustomSelect;