import Link from "next/link";
import { ReactNode } from "react";

interface BaseButtonProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  darkBg?: boolean;
}

interface LinkButtonProps extends BaseButtonProps {
  href: string;
  onClick?: never;
}

interface ActionButtonProps extends BaseButtonProps {
  onClick: () => void;
  href?: never;
}

type SecondaryButtonProps = LinkButtonProps | ActionButtonProps;

export default function SecondaryButton({
  children,
  className = "",
  size = "md",
  disabled = false,
  darkBg = false,
  ...props
}: SecondaryButtonProps) {
  const sizeStyles = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-lg",
    lg: "px-12 py-5 text-xl",
  };

  // Conditional styles based on darkBg prop
  const colorStyles = darkBg
    ? `
      text-white
      border-white/30
      hover:border-white
      hover:text-white
      hover:bg-white/10
      focus:ring-white/30
    `
    : `
      text-gray-700
      border-gray-300
      hover:border-primary
      hover:text-primary
      hover:bg-primary/5
      focus:ring-primary/30
    `;

  const baseStyles = `
    ${sizeStyles[size]}
    ${colorStyles}
    font-bold
    rounded-xl
    bg-transparent
    border-2
    shadow-md
    hover:-translate-y-1
    hover:shadow-lg
    focus:outline-none
    focus:ring-4
    transition-all
    duration-300
    transform
    active:scale-95
    disabled:opacity-50
    disabled:cursor-not-allowed
    disabled:transform-none
    inline-flex
    items-center
    justify-center
    gap-2
  `;

  const combinedClassName = `${baseStyles} ${className}`;

  // Type guard to check if it's a link button
  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={combinedClassName}>
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