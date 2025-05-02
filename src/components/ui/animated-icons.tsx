// import React from "react";
import { motion } from "framer-motion";

interface AnimatedIconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const FlameIcon = ({
  size = 24,
  color = "#1e3a8a",
  className = "",
}: AnimatedIconProps) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      initial={{ scale: 0.9 }}
      animate={{
        scale: [0.9, 1.1, 0.9],
        filter: [
          "drop-shadow(0 0 2px rgba(30, 58, 138, 0.3))",
          "drop-shadow(0 0 8px rgba(30, 58, 138, 0.7))",
          "drop-shadow(0 0 2px rgba(30, 58, 138, 0.3))",
        ],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.5,
        ease: "easeInOut",
      }}
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
    </motion.svg>
  );
};

export const GasCanisterIcon = ({
  size = 24,
  color = "#1e3a8a",
  className = "",
}: AnimatedIconProps) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      initial={{ y: 0 }}
      animate={{ y: [-2, 2, -2] }}
      transition={{
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut",
      }}
    >
      <path d="M4 10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></path>
      <path d="M10 2v3"></path>
      <path d="M14 2v3"></path>
      <path d="M7 8v0"></path>
      <path d="M17 8v0"></path>
      <path d="M7 12v5"></path>
      <path d="M17 12v5"></path>
    </motion.svg>
  );
};

export const DeliveryTruckIcon = ({
  size = 24,
  color = "#1e3a8a",
  className = "",
}: AnimatedIconProps) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      initial={{ x: -5 }}
      animate={{ x: 5 }}
      transition={{
        repeat: Infinity,
        repeatType: "mirror",
        duration: 2,
        ease: "easeInOut",
      }}
    >
      <path d="M3 3h14v14H3z"></path>
      <path d="M17 6h4l3 4v7h-7V6z"></path>
      <path d="M7 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
      <path d="M17 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
    </motion.svg>
  );
};

export const StarBurstIcon = ({
  size = 24,
  color = "#1e3a8a",
  className = "",
}: AnimatedIconProps) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      initial={{ rotate: 0 }}
      animate={{
        rotate: 360,
        scale: [1, 1.1, 1],
      }}
      transition={{
        rotate: {
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        },
        scale: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        },
      }}
    >
      <path d="M12 2L9.82 7.14 4 8 8.37 12 7.14 18 12 15l4.86 3L15.63 12 20 8l-5.82-.86L12 2z"></path>
    </motion.svg>
  );
};

export const PulsingLocationIcon = ({
  size = 24,
  color = "#1e3a8a",
  className = "",
}: AnimatedIconProps) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <motion.path
        d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0.7, 1] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
      />
      <motion.path
        d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
        animate={{
          scale: [1, 1.2, 1],
          filter: [
            "drop-shadow(0 0 2px rgba(30, 58, 138, 0.3))",
            "drop-shadow(0 0 8px rgba(30, 58, 138, 0.7))",
            "drop-shadow(0 0 2px rgba(30, 58, 138, 0.3))",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
      />
    </motion.svg>
  );
};

export const SafetyShieldIcon = ({
  size = 24,
  color = "#1e3a8a",
  className = "",
}: AnimatedIconProps) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      initial={{ opacity: 0.9 }}
      animate={{
        opacity: 1,
        boxShadow: [
          "0px 0px 0px rgba(30, 58, 138, 0)",
          "0px 0px 20px rgba(30, 58, 138, 0.7)",
          "0px 0px 0px rgba(30, 58, 138, 0)",
        ],
      }}
      transition={{
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut",
      }}
    >
      <motion.path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
      />
      <motion.path
        d="M9 12l2 2 4-4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.7,
          ease: "easeOut",
        }}
      />
    </motion.svg>
  );
};
