"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeUp } from "@/lib/motion";

type InViewProps = HTMLMotionProps<"div"> & {
  amount?: number;
  delay?: number;
};

export function InView({
  children,
  className,
  amount = 0.3,
  delay = 0,
  ...rest
}: InViewProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={fadeUp}
      transition={{ ...fadeUp.visible, delay } as never}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
