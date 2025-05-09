import React from "react";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
  color?: string;
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({
  size = "md",
  color = "text-primary",
  className = "",
}) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div
        className={`animate-spin rounded-full border-2 border-solid border-current border-r-transparent ${sizeClasses[size]} ${color}`}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
