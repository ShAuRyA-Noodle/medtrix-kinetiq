"use client";

import { motion } from "framer-motion";
import { EASE_OUT_QUART } from "@/lib/motion";
import { cn } from "@/lib/cn";

const PEAK_MAX = 195.4;

const MATERIAL_ROWS = [
  { label: "Pure PDMS",  weight: "0 wt%", voltage: 39.9,  optimal: false },
  { label: "MWCNT-PDMS", weight: "2 wt%", voltage: 79.0,  optimal: false },
  { label: "MWCNT-PDMS", weight: "4 wt%", voltage: 195.4, optimal: true  },
  { label: "MWCNT-PDMS", weight: "6 wt%", voltage: 42.4,  optimal: false },
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
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span
            className="inline-block size-2 rounded-full bg-accent"
            aria-hidden
          />
          <span className="text-mono-eyebrow text-fg-subtle">
            Material study · Peak-to-peak Voc
          </span>
        </div>
        <span className="text-mono-eyebrow text-fg-subtle">SW-TENG</span>
      </div>

      <ul className="mt-7 space-y-4">
        {MATERIAL_ROWS.map((row, i) => (
          <MaterialRow key={row.weight} index={i} {...row} />
        ))}
      </ul>

      <div className="mt-7 grid grid-cols-2 gap-x-6 border-t border-border pt-5">
        <div>
          <div className="text-mono-eyebrow text-fg-subtle">Durability tested</div>
          <div className="mt-1 text-[22px] font-semibold tracking-tight text-fg">500 cycles</div>
        </div>
        <div className="text-right">
          <div className="text-mono-eyebrow text-fg-subtle">10 µF cap to 5 V</div>
          <div className="mt-1 text-[22px] font-semibold tracking-tight text-fg">~27 s</div>
        </div>
      </div>

      <p className="mt-5 text-[10.5px] uppercase tracking-[0.14em] text-fg-subtle">
        Source: Kaur et al., Microelectronic Engineering 275 (2023) 111992
      </p>

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

type MaterialRowProps = {
  label: string;
  weight: string;
  voltage: number;
  optimal: boolean;
  index: number;
};

function MaterialRow({ label, weight, voltage, optimal, index }: MaterialRowProps) {
  const pct = Math.min(100, (voltage / PEAK_MAX) * 100);
  return (
    <li className="grid grid-cols-[88px_1fr_76px] items-center gap-3">
      <div className="flex flex-col">
        <span className="text-[12px] font-medium tracking-tight text-fg">{weight}</span>
        <span className="text-[10.5px] uppercase tracking-[0.14em] text-fg-subtle">{label}</span>
      </div>
      <div className="relative h-2 overflow-hidden rounded-full bg-bg-sunken">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{
            duration: 1.1,
            delay: 0.7 + index * 0.12,
            ease: EASE_OUT_QUART,
          }}
          className={cn(
            "absolute inset-y-0 left-0 rounded-full",
            optimal ? "bg-accent" : "bg-fg/60",
          )}
        />
      </div>
      <div className="flex items-center justify-end gap-1.5 text-right">
        <span className="text-[14px] font-semibold tabular-nums tracking-tight text-fg">
          {voltage.toFixed(1)}
        </span>
        <span className="text-[11px] text-fg-subtle">V</span>
        {optimal && (
          <span className="ml-1 inline-flex items-center rounded-full bg-accent-soft px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-[0.1em] text-accent-deep">
            opt
          </span>
        )}
      </div>
    </li>
  );
}
