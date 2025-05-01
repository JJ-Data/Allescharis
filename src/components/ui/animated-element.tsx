import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

type AnimationType =
  | "fadeIn"
  | "fadeInUp"
  | "fadeInDown"
  | "fadeInLeft"
  | "fadeInRight"
  | "scale"
  | "pulse"
  | "float";

interface AnimatedElementProps {
  children: React.ReactNode;
  animation: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

const variants = {
  hidden: {
    opacity: 0,
  },
  fadeIn: {
    opacity: 1,
  },
  fadeInUp: {
    opacity: 1,
    y: 0,
  },
  fadeInDown: {
    opacity: 1,
    y: 0,
  },
  fadeInLeft: {
    opacity: 1,
    x: 0,
  },
  fadeInRight: {
    opacity: 1,
    x: 0,
  },
  scale: {
    opacity: 1,
    scale: 1,
  },
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
  float: {
    y: [0, -10, 0],
    transition: {
      repeat: Infinity,
      repeatType: "reverse" as const,
      duration: 3,
      ease: "easeInOut",
    },
  },
};

const getInitialState = (animation: AnimationType) => {
  switch (animation) {
    case "fadeInUp":
      return { opacity: 0, y: 20 };
    case "fadeInDown":
      return { opacity: 0, y: -20 };
    case "fadeInLeft":
      return { opacity: 0, x: -20 };
    case "fadeInRight":
      return { opacity: 0, x: 20 };
    case "scale":
      return { opacity: 0, scale: 0.9 };
    default:
      return { opacity: 0 };
  }
};

export function AnimatedElement({
  children,
  animation,
  delay = 0,
  duration = 0.7,
  className = "",
  threshold = 0.1,
}: AnimatedElementProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // For 'pulse' and 'float' animations, we don't need intersection observer
    if (animation === "pulse" || animation === "float") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [animation, threshold]);

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={getInitialState(animation)}
        animate={isVisible ? animation : "hidden"}
        variants={variants}
        transition={{
          duration,
          delay,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
