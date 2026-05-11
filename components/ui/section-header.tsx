"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { fadeUp, stagger } from "@/lib/motion";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={stagger(0.08, 0)}
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <motion.div
        variants={fadeUp}
        className="text-mono-eyebrow text-fg-subtle"
      >
        {eyebrow}
      </motion.div>
      <motion.h2
        variants={fadeUp}
        className="heading-display mt-5 text-[clamp(2rem,4.6vw,3.6rem)] text-balance text-fg"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-[17px] leading-[1.55] text-fg-muted text-pretty md:text-[18px]"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
