"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { RECOGNITIONS } from "@/content/recognitions";
import { fadeUp, stagger, EASE_OUT_QUART } from "@/lib/motion";
import { cn } from "@/lib/cn";

const CATEGORY_DOT = {
  award:    "bg-accent",
  platform: "bg-fg",
  exchange: "bg-fg/60",
  talk:     "bg-accent-deep",
} as const;

const CATEGORY_LABEL = {
  award:    "Award",
  platform: "Platform",
  exchange: "Exchange",
  talk:     "Talk",
} as const;

export function Recognitions() {
  return (
    <section
      id="press"
      className="relative mx-auto w-full max-w-[var(--container)] px-6 py-32 md:px-10 md:py-40"
    >
      <SectionHeader
        eyebrow="Press and recognitions"
        title="Funded by DST. Platformed at Oxford and Cambridge. First Prize from the Government of India."
        description="A reverse-chronological record of awards, talks, exchanges, and platforms that shaped the science behind Medtrix."
      />

      <motion.ol
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger(0.07, 0.05)}
        className="relative mt-14"
      >
        <span
          aria-hidden
          className="absolute left-[88px] top-0 bottom-0 hidden w-px bg-border md:block"
        />
        {RECOGNITIONS.map((r, i) => (
          <motion.li
            key={`${r.year}-${r.achievement}`}
            variants={fadeUp}
            className={cn(
              "relative grid grid-cols-1 gap-3 border-b border-border py-7 md:grid-cols-[88px_1fr_auto] md:items-start md:gap-8",
              i === RECOGNITIONS.length - 1 && "border-b-0",
            )}
          >
            <div className="flex items-baseline gap-2 md:block">
              <span className="heading-display text-[clamp(1.4rem,2vw,1.7rem)] tabular-nums text-fg">
                {r.year}
              </span>
              <span
                aria-hidden
                className={cn(
                  "size-2 rounded-full ring-2 ring-bg",
                  "hidden md:absolute md:left-[85px] md:top-[14px] md:inline-block",
                  CATEGORY_DOT[r.category],
                )}
              />
            </div>

            <div className="md:pl-6">
              <p className="text-[15.5px] font-medium leading-[1.35] tracking-tight text-fg">
                {r.achievement}
              </p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-fg-muted">
                {r.body}
              </p>
              {r.location && (
                <p className="mt-1 text-[11.5px] uppercase tracking-[0.14em] text-fg-subtle">
                  {r.location}
                </p>
              )}
            </div>

            <span className="hidden text-mono-eyebrow text-fg-subtle md:inline-block md:pt-1">
              {CATEGORY_LABEL[r.category]}
            </span>
          </motion.li>
        ))}
      </motion.ol>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: EASE_OUT_QUART }}
        className="mt-10 text-[12px] uppercase tracking-[0.14em] text-fg-subtle"
      >
        Source · Akshpreet Kaur CV, May 2026
      </motion.p>
    </section>
  );
}
