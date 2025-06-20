import Link from "next/link";
import { ReactNode } from "react";

interface BaseButtonProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

interface LinkButtonProps extends BaseButtonProps {
  href: string;
  onClick?: () => void; // Allow onClick for links too
}

interface ActionButtonProps extends BaseButtonProps {
  onClick: () => void;
  href?: never;
}

type PrimaryButtonProps = LinkButtonProps | ActionButtonProps;

export default function PrimaryButton({ 
  children, 
  className = "", 
  size = "md", 
  disabled = false,
  ...props 
}: PrimaryButtonProps) {
  const sizeStyles = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-lg",
    lg: "px-12 py-5 text-xl"
  };

  const baseStyles = `
    ${sizeStyles[size]}
    font-bold
    rounded-lg
    bg-teal
    text-blanco 
    shadow-md
    hover:shadow-lg
    hover:bg-teal/90
    focus:outline-none
    transition-all
    duration-200
    inline-flex
    items-center
    justify-center
    gap-2
    disabled:opacity-50
    disabled:cursor-not-allowed
  `;
  
  const combinedClassName = `${baseStyles} ${className}`;

  // Type guard to check if it's a link button
  if ('href' in props && props.href) {
    return (
      <Link 
        href={props.href} 
        className={combinedClassName}
        onClick={props.onClick} // Support onClick for links
      >
        {children}
      </Link>
    );
  }

  // Otherwise it's an action button
  return (
    <button
      onClick={(props as ActionButtonProps).onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {children}
    </button>
  );
}