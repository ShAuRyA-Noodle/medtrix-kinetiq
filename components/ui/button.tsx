"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { ArrowRightIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import { SPRING_SNAPPY } from "@/lib/motion";

type Variant = "primary" | "secondary";

type ButtonProps = HTMLMotionProps<"button"> & {
  variant?: Variant;
  withArrow?: boolean;
};

export function Button({
  variant = "primary",
  withArrow = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "group relative inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-medium tracking-tight will-change-transform";
  const styles = {
    primary:
      "bg-fg text-bg shadow-md hover:bg-[color-mix(in_srgb,var(--fg)_92%,transparent)]",
    secondary:
      "bg-bg-elevated/70 text-fg ring-1 ring-inset ring-border hover:ring-border-strong",
  } as const;

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={SPRING_SNAPPY}
      className={cn(base, styles[variant], className)}
      {...props}
    >
      <span>{children}</span>
      {withArrow && (
        <ArrowRightIcon
          size={16}
          className="transition-transform duration-300 ease-out group-hover:translate-x-0.5"
        />
      )}
    </motion.button>
  );
}
