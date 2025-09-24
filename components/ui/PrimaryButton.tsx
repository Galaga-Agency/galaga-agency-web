import Link from "next/link";
import { ReactNode } from "react";
import { useBubbleTransition } from "@/hooks/useBubbleTransition";

interface BaseButtonProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  bgColor?: "teal" | "white";
  bubbleTransition?: boolean;
  bubbleColor?: string;
  transitionDuration?: number;
  type?: "button" | "submit" | "reset";
}

interface LinkButtonProps extends BaseButtonProps {
  href: string;
  onClick?: () => void;
  external?: boolean;
}

interface ActionButtonProps extends BaseButtonProps {
  onClick?: () => void;
  href?: never;
  external?: never;
}

type PrimaryButtonProps = LinkButtonProps | ActionButtonProps;

export default function PrimaryButton({
  children,
  className = "",
  size = "md",
  disabled = false,
  bgColor = "teal",
  bubbleTransition = false,
  bubbleColor,
  transitionDuration = 0.8,
  type = "button",
  ...props
}: PrimaryButtonProps) {
  const { navigateWithBubble } = useBubbleTransition({
    color:
      bubbleColor ||
      (bgColor === "white" ? "var(--color-teal)" : "var(--color-white)"),
    duration: transitionDuration,
  });

  const sizeStyles = {
    sm: "px-6 py-2 !text-sm",
    md: "px-8 py-3 !text-lg",
    lg: "px-12 py-5 !text-xl",
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
    !font-bold
    rounded-lg
    cursor-pointer
    shadow-md
    hover:-translate-y-1
    hover:shadow-lg        
    focus:outline-none
    transition-all
    duration-300
    inline-flex
    text-nowrap
    items-center
    justify-center
    gap-2
    disabled:opacity-50
    disabled:cursor-not-allowed
  `;

  const combinedClassName = `${baseStyles} ${className}`;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if ("href" in props && props.href && !props.external && bubbleTransition) {
      navigateWithBubble(props.href, event);
      return;
    }

    if (props.onClick) {
      props.onClick();
    }
  };

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          className={combinedClassName}
          onClick={props.onClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    if (bubbleTransition) {
      return (
        <button
          type={type}
          onClick={handleClick}
          disabled={disabled}
          className={combinedClassName}
        >
          {children}
        </button>
      );
    }

    return (
      <Link
        href={props.href}
        className={combinedClassName}
        onClick={props.onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={(props as ActionButtonProps).onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {children}
    </button>
  );
}
