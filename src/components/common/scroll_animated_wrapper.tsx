"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ScrollAnimatedWrapperProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  margin?: string;
}

export default function ScrollAnimatedWrapper({
  children,
  delay = 0,
  className = "",
  margin = "-100px",
}: ScrollAnimatedWrapperProps) {
  const ref = useRef(null);
  // Fix type error: useInView expects margin to be MarginType | undefined, not string.
  // So, cast margin to MarginType or remove default value if not needed.
  const isInView = useInView(ref, { once: true, margin: margin as any });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
            }
          : {
              opacity: 0,
              y: 50,
              scale: 0.95,
            }
      }
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
      }}
      className={className}>
      {children}
    </motion.div>
  );
}
