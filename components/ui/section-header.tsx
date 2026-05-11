"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { fadeUp, stagger } from "@/lib/motion";

type Props = {
  eyebrow: string;
  sectionNumber?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "ink";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  sectionNumber,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: Props) {
  const eyebrowColor =
    tone === "ink" ? "text-[color:var(--fg-on-ink-subtle)]" : "text-fg-subtle";
  const titleColor =
    tone === "ink" ? "text-[color:var(--fg-on-ink)]" : "text-fg";
  const descColor =
    tone === "ink" ? "text-[color:var(--fg-on-ink-muted)]" : "text-fg-muted";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={stagger(0.08, 0)}
      className={cn(
        "max-w-4xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <motion.div
        variants={fadeUp}
        className={cn("flex items-center gap-3", eyebrowColor)}
      >
        {sectionNumber && (
          <>
            <span className="text-mono-tag">{sectionNumber}</span>
            <span
              aria-hidden
              className="inline-block h-px w-7 bg-current opacity-40"
            />
          </>
        )}
        <span className="text-mono-eyebrow">{eyebrow}</span>
      </motion.div>

      <motion.h2
        variants={fadeUp}
        className={cn(
          "heading-display mt-6 text-[clamp(2.2rem,5.4vw,4.4rem)] text-balance",
          titleColor,
        )}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          variants={fadeUp}
          className={cn(
            "mt-7 max-w-2xl text-[17px] leading-[1.55] text-pretty md:text-[19px]",
            descColor,
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
