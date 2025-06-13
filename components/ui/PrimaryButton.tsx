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
  onClick?: never;
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
    lg: "px-12 py-5 text-xl",
  };

  const baseStyles = `
    ${sizeStyles[size]}
    font-bold
    rounded-xl
    bg-gradient-to-r 
    from-primary 
    to-accent 
    text-white 
    shadow-lg 
    hover:shadow-2xl 
    hover:-translate-y-2 
    hover:scale-105
    focus:outline-none
    focus:ring-4
    focus:ring-primary/50
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
    ${disabled ? "" : "hover:from-primary/90 hover:to-accent/90"}
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
