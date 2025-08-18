import Link from "next/link";
import { ReactNode } from "react";

interface BaseButtonProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  bgColor?: "teal" | "white";
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
  bgColor = "teal",
  ...props
}: PrimaryButtonProps) {
  const sizeStyles = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-lg",
    lg: "px-12 py-5 text-xl",
  };

  const colorStyles =
    bgColor === "white"
      ? `
      bg-blanco
      text-teal
      hover:bg-blanco/90
      hover:text-teal/90
    `
      : `
      bg-teal
      text-blanco
      hover:bg-teal/90
    `;

  const baseStyles = `
    ${sizeStyles[size]}
    ${colorStyles}
    font-bold
    rounded-lg
    cursor-pointer
    shadow-md
    hover:-translate-y-1
    hover:shadow-lg    
    focus:outline-none
    transition-all
    duration-300
    inline-flex
    items-center
    justify-center
    gap-2
    disabled:opacity-50
    disabled:cursor-not-allowed
  `;

  const combinedClassName = `${baseStyles} ${className}`;

  // Type guard to check if it's a link button
  if ("href" in props && props.href) {
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
