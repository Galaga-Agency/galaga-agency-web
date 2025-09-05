import Link from "next/link";
import { ReactNode } from "react";
import { useBubbleTransition } from "@/hooks/useBubbleTransition";

interface BaseButtonProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  darkBg?: boolean;
  borderColor?: "teal" | "white";
  bubbleTransition?: boolean;
  bubbleColor?: string;
  transitionDuration?: number;
}

interface LinkButtonProps extends BaseButtonProps {
  href: string;
  onClick?: never;
  external?: boolean;
}

interface ActionButtonProps extends BaseButtonProps {
  onClick: () => void;
  href?: never;
  external?: never;
}

type SecondaryButtonProps = LinkButtonProps | ActionButtonProps;

export default function SecondaryButton({
  children,
  className = "",
  size = "md",
  disabled = false,
  darkBg = false,
  borderColor = "teal",
  bubbleTransition = false,
  bubbleColor,
  transitionDuration = 0.8,
  ...props
}: SecondaryButtonProps) {
  const { navigateWithBubble } = useBubbleTransition({
    color:
      bubbleColor ||
      (borderColor === "white" ? "var(--color-white)" : "var(--color-teal)"),
    duration: transitionDuration,
  });

  const sizeStyles = {
    sm: "px-6 py-2 !text-sm",
    md: "px-8 py-3 !text-lg",
    lg: "px-12 py-5 !text-xl",
  };

  // Conditional styles based on borderColor prop
  const colorStyles =
    borderColor === "white"
      ? `
      text-blanco
      border-blanco
      hover:border-blanco
      hover:text-blanco
      hover:bg-blanco/10
      focus:ring-blanco/30
    `
      : darkBg
      ? `
      text-blanco
      border-blanco/30
      hover:border-blanco
      hover:text-blanco
      hover:bg-blanco/10
      focus:ring-blanco/30
    `
      : `
      text-grafito
      border-hielo
      hover:border-teal
      hover:text-teal
      hover:bg-teal/5
      focus:ring-teal/30
    `;

  const baseStyles = `
    ${sizeStyles[size]}
    ${colorStyles}
    !font-bold
    rounded-xl
    bg-transparent
    border-2
    shadow-md
    hover:-translate-y-1
    hover:shadow-lg
    focus:outline-none
    focus:ring-4
        text-nowrap
    transition-all
    duration-300
    transform
    cursor-pointer
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

  // Handle click with bubble transition for internal links
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if ("href" in props && props.href && !props.external && bubbleTransition) {
      navigateWithBubble(props.href, event);
      return;
    }

    if ("onClick" in props && props.onClick) {
      props.onClick();
    }
  };

  // Type guard to check if it's a link button
  if ("href" in props && props.href) {
    // Check if it's an external link that should open in new tab
    if (props.external) {
      return (
        <a
          href={props.href}
          className={combinedClassName}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    // Internal link - use bubble transition if enabled, otherwise Next.js Link
    if (bubbleTransition) {
      return (
        <button
          onClick={handleClick}
          disabled={disabled}
          className={combinedClassName}
        >
          {children}
        </button>
      );
    }

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
