"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type ProofTileProps = {
  value: string;
  numericTarget?: number;
  numericFormat?: (n: number) => string;
  label: string;
  caption: string;
  source: string;
  className?: string;
};

export function ProofTile({
  value,
  numericTarget,
  numericFormat,
  label,
  caption,
  source,
  className,
}: ProofTileProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const display = useTransform(count, (latest) =>
    numericFormat ? numericFormat(latest) : Math.round(latest).toString(),
  );
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (inView && numericTarget !== undefined) {
      const controls = animate(count, numericTarget, {
        duration: 1.6,
        ease: [0.25, 1, 0.5, 1],
      });
      return controls.stop;
    }
  }, [inView, numericTarget, count]);

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      tabIndex={0}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
      className={cn(
        "group relative flex flex-col rounded-[var(--radius-xl)] bg-bg-elevated p-7 ring-1 ring-inset ring-border transition-shadow duration-500 hover:shadow-md focus-visible:shadow-md focus-visible:outline-none focus-visible:ring-fg-subtle",
        className,
      )}
      aria-label={`${value} ${label}. ${caption}. Source: ${source}`}
    >
      <div className="text-mono-eyebrow text-fg-subtle">{label}</div>
      <div className="mt-3 flex items-baseline gap-2">
        {numericTarget !== undefined ? (
          <motion.span className="heading-display text-[clamp(2.4rem,4.4vw,3.4rem)] text-fg">
            {display}
          </motion.span>
        ) : (
          <span className="heading-display text-[clamp(2.4rem,4.4vw,3.4rem)] text-fg">
            {value}
          </span>
        )}
      </div>
      <p className="mt-3 text-[14px] leading-[1.5] text-fg-muted">{caption}</p>
      <div
        className={cn(
          "mt-5 overflow-hidden text-[11.5px] uppercase tracking-[0.14em] text-fg-subtle transition-[max-height,opacity] duration-500 ease-out",
          hovered ? "max-h-12 opacity-100" : "max-h-0 opacity-0",
        )}
        aria-hidden={!hovered}
      >
        Source: {source}
      </div>
    </motion.div>
  );
}
