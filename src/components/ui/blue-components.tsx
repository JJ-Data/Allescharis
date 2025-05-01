import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface BlueCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: "raise" | "glow" | "pulse" | "none";
}

export const BlueCard = ({
  title,
  description,
  icon,
  className,
  delay = 0,
  hoverEffect = "glow",
}: BlueCardProps) => {
  const baseClasses = "p-6 rounded-xl overflow-hidden";

  // Hover animations based on selected effect
  const hoverAnimation = {
    raise: {
      hover: {
        y: -10,
        boxShadow: "0 15px 30px rgba(0, 0, 150, 0.3)",
      },
    },
    glow: {
      hover: {
        boxShadow: "0 0 25px rgba(0, 0, 150, 0.7)",
      },
    },
    pulse: {
      hover: {
        scale: [1, 1.03, 1],
        transition: {
          repeat: Infinity,
          repeatType: "mirror" as const, // Type assertion to specific literal
          duration: 1,
        },
      },
    },
    none: {
      hover: {},
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      whileHover={hoverAnimation[hoverEffect]?.hover}
      className={cn(
        baseClasses,
        "bg-gradient-to-br from-blue-800 to-blue-900",
        "text-white shadow-lg",
        "border border-blue-700/30",
        "transition-all duration-300",
        className
      )}
    >
      {icon && (
        <motion.div
          className="mb-4 text-blue-200"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: delay + 0.2, duration: 0.5 }}
        >
          {icon}
        </motion.div>
      )}

      <motion.h3
        className="text-xl font-bold mb-2 blue-text-shadow"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: delay + 0.3, duration: 0.5 }}
      >
        {title}
      </motion.h3>

      <motion.p
        className="text-blue-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.4, duration: 0.5 }}
      >
        {description}
      </motion.p>

      <motion.div
        className="mt-4 w-16 h-1 bg-blue-400 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: 64 }}
        transition={{ delay: delay + 0.5, duration: 0.7 }}
      />
    </motion.div>
  );
};

interface BlueGradientSectionProps {
  children: React.ReactNode;
  className?: string;
  direction?: "tl-br" | "tr-bl" | "bl-tr" | "br-tl";
}

export const BlueGradientSection = ({
  children,
  className,
  direction = "tl-br",
}: BlueGradientSectionProps) => {
  const gradientDirections = {
    "tl-br": "bg-gradient-to-br",
    "tr-bl": "bg-gradient-to-bl",
    "bl-tr": "bg-gradient-to-tr",
    "br-tl": "bg-gradient-to-tl",
  };

  return (
    <section
      className={cn(
        gradientDirections[direction],
        "from-blue-900 to-blue-800",
        "py-16 px-4 md:px-8 text-white relative overflow-hidden",
        className
      )}
    >
      {/* Blue animated shapes in the background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-blue-600/10 top-0 -left-32"
          animate={{
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-blue-500/10 -bottom-48 -right-48"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-40 h-40 rounded-full bg-blue-400/10 top-1/2 left-1/3"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut",
          }}
        />
      </div>

      {children}
    </section>
  );
};
