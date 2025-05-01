import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface AnimatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  children: React.ReactNode;
}

export const AnimatedButton = ({
  variant = "default",
  size = "md",
  isLoading = false,
  icon,
  iconPosition = "left",
  className,
  children,
  ...props
}: AnimatedButtonProps) => {
  // Base styles
  const baseStyles =
    "rounded-lg font-medium flex items-center justify-center transition-all";

  // Variant styles
  const variantStyles = {
    default:
      "bg-blue-900 text-white hover:bg-blue-800 shadow-lg hover:shadow-blue-900/30",
    outline:
      "bg-transparent border-2 border-blue-900 text-blue-900 hover:bg-blue-900/10",
    ghost: "bg-transparent text-blue-900 hover:bg-blue-900/10",
  };

  // Size styles
  const sizeStyles = {
    sm: "text-sm px-3 py-1.5 gap-1.5",
    md: "text-base px-4 py-2 gap-2",
    lg: "text-lg px-6 py-3 gap-2.5",
  };

  // Animation variants
  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 150, 0.3), 0 4px 6px -4px rgba(0, 0, 150, 0.3)",
    },
    tap: { scale: 0.98 },
    initial: { scale: 1 },
  };

  const iconVariants = {
    initial: { x: 0 },
    hover: {
      x: iconPosition === "left" ? -3 : 3,
      transition: {
        repeat: Infinity,
        repeatType: "mirror" as const,
        duration: 0.5,
      },
    },
  };

  // Combined classes
  const combinedClasses = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    isLoading ? "opacity-70 cursor-not-allowed" : "",
    className
  );

  return (
    <motion.button
      className={combinedClasses}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
      disabled={isLoading || props.disabled}
      onClick={props.onClick}
      type={props.type}
      name={props.name}
      value={props.value}
      id={props.id}
      form={props.form}
      tabIndex={props.tabIndex}
      aria-label={props["aria-label"]}
    >
      {isLoading ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span>Loading...</span>
        </>
      ) : (
        <>
          {icon && iconPosition === "left" && (
            <motion.span variants={iconVariants} className="inline-flex">
              {icon}
            </motion.span>
          )}
          <span>{children}</span>
          {icon && iconPosition === "right" && (
            <motion.span
              variants={iconVariants}
              className="inline-flex"
            ></motion.span>
          )}
        </>
      )}
    </motion.button>
  );
};
