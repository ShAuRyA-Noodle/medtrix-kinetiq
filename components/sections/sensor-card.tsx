"use client";

import { motion } from "framer-motion";
import { EASE_OUT_QUART } from "@/lib/motion";
import { cn } from "@/lib/cn";

const FINGERS = [
  { name: "Thumb",  voltage: "1.14 V", path: "M2 18 L18 14 L34 12 L50 10 L66 12 L82 14 L98 16 L114 14 L130 12 L146 10 L162 12 L178 14 L194 18" },
  { name: "Index",  voltage: "1.26 V", path: "M2 16 L18 10 L34 6 L50 4 L66 6 L82 10 L98 14 L114 10 L130 6 L146 4 L162 6 L178 10 L194 16" },
  { name: "Middle", voltage: "1.36 V", path: "M2 14 L18 8 L34 4 L50 2 L66 4 L82 8 L98 12 L114 8 L130 4 L146 2 L162 4 L178 8 L194 14" },
  { name: "Ring",   voltage: "1.20 V", path: "M2 16 L18 12 L34 8 L50 6 L66 8 L82 12 L98 14 L114 12 L130 8 L146 6 L162 8 L178 12 L194 16" },
  { name: "Little", voltage: "1.08 V", path: "M2 18 L18 16 L34 14 L50 12 L66 14 L82 16 L98 18 L114 16 L130 14 L146 12 L162 14 L178 16 L194 18" },
];

export function SensorCard({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: EASE_OUT_QUART, delay: 0.3 }}
      className={cn(
        "relative w-full overflow-hidden rounded-[var(--radius-2xl)] bg-bg-elevated p-6 shadow-glove ring-1 ring-inset ring-border md:p-7",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block size-2 rounded-full bg-accent"
            aria-hidden
          />
          <span className="text-mono-eyebrow text-fg-subtle">Live · SW-TENG · Rehab Glove</span>
        </div>
        <span className="text-mono-eyebrow text-fg-subtle">4 wt% MWCNT-PDMS</span>
      </div>

      <ul className="mt-7 divide-y divide-border">
        {FINGERS.map((f, i) => (
          <FingerRow key={f.name} index={i} {...f} />
        ))}
      </ul>

      <div className="mt-7 flex items-baseline justify-between">
        <div>
          <div className="text-mono-eyebrow text-fg-subtle">Peak Voc, 4 wt% device</div>
          <div className="mt-1 text-[28px] font-semibold tracking-tight text-fg">195.4 V</div>
        </div>
        <div className="text-right">
          <div className="text-mono-eyebrow text-fg-subtle">Durability tested</div>
          <div className="mt-1 text-[28px] font-semibold tracking-tight text-fg">5,000 cycles</div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--accent) 50%, transparent) 50%, transparent 100%)",
        }}
      />
    </motion.div>
  );
}

type FingerRowProps = {
  name: string;
  voltage: string;
  path: string;
  index: number;
};

function FingerRow({ name, voltage, path, index }: FingerRowProps) {
  return (
    <li className="grid grid-cols-[72px_1fr_64px] items-center gap-4 py-3">
      <span className="text-[12px] uppercase tracking-[0.14em] text-fg-subtle">{name}</span>
      <svg
        viewBox="0 0 196 22"
        className="h-5 w-full overflow-visible"
        aria-hidden
      >
        <motion.path
          d={path}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-accent"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 1.4,
            delay: 0.7 + index * 0.12,
            ease: EASE_OUT_QUART,
          }}
        />
        <motion.circle
          r={2.2}
          fill="currentColor"
          className="text-accent"
          initial={{ opacity: 0 }}
          animate={{
            cx: [2, 50, 98, 146, 194],
            cy: [18, 6, 12, 6, 18],
            opacity: [0, 1, 1, 1, 0],
          }}
          transition={{
            duration: 3.6,
            delay: 1.6 + index * 0.18,
            repeat: Infinity,
            repeatDelay: 1.2,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        />
      </svg>
      <span className="text-right text-[14px] font-medium tabular-nums tracking-tight text-fg">
        {voltage}
      </span>
    </li>
  );
}
