"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { EASE_OUT_QUART } from "@/lib/motion";
import { cn } from "@/lib/cn";

const PEAK_MAX = 195.4;

const MATERIAL_POINTS = [
  { weight: "0",  label: "PDMS",       voltage: 39.9,  optimal: false },
  { weight: "2",  label: "MWCNT 2%",   voltage: 79.0,  optimal: false },
  { weight: "4",  label: "MWCNT 4%",   voltage: 195.4, optimal: true  },
  { weight: "6",  label: "MWCNT 6%",   voltage: 42.4,  optimal: false },
];

const MICRO_STATS = [
  { value: "500", unit: "cycles",      label: "Durability"    },
  { value: "79",  unit: "%",           label: "Gain vs PDMS"  },
  { value: "27",  unit: "s",           label: "10 µF to 5 V"  },
  { value: "5",   unit: "",            label: "Sensors/glove" },
];

export function SensorCard({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: EASE_OUT_QUART, delay: 0.25 }}
      className={cn(
        "relative isolate w-full overflow-hidden rounded-[var(--radius-2xl)] bg-bg-elevated ring-1 ring-inset ring-border shadow-glove",
        className,
      )}
    >
      <CardBackdrop />

      <div className="relative z-10 p-7 md:p-8">
        <Header />
        <HeroNumber inView={inView} />
        <Waveform inView={inView} />
        <Divider />
        <MaterialStrip inView={inView} />
        <Divider />
        <MicroStats />
        <Citation />
      </div>

      <CornerMark />
    </motion.div>
  );
}

function Header() {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <motion.span
          aria-hidden
          animate={{ opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block size-2 rounded-full bg-accent"
        />
        <span className="text-mono-eyebrow text-fg-subtle">
          Triboelectric waveform
        </span>
      </div>
      <span className="text-mono-eyebrow text-fg-subtle">
        SW-TENG · 4 wt%
      </span>
    </div>
  );
}

function HeroNumber({ inView }: { inView: boolean }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => v.toFixed(1));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, PEAK_MAX, {
      duration: 1.6,
      ease: EASE_OUT_QUART,
      delay: 0.4,
    });
    return controls.stop;
  }, [inView, count]);

  return (
    <div className="mt-6 flex items-baseline gap-3">
      <motion.span className="heading-display text-[clamp(3rem,6.5vw,5rem)] tabular-nums leading-none text-fg">
        {rounded}
      </motion.span>
      <div className="flex flex-col">
        <span className="text-[26px] font-medium leading-none text-fg-muted">V</span>
        <span className="text-mono-eyebrow mt-2 text-fg-subtle">Peak Voc</span>
      </div>
    </div>
  );
}

function Waveform({ inView }: { inView: boolean }) {
  const path =
    "M 0 50 " +
    "L 24 50 L 30 14 L 36 50 L 50 50 L 56 86 L 62 50 L 84 50 " +
    "L 90 16 L 96 50 L 110 50 L 116 84 L 122 50 L 144 50 " +
    "L 150 12 L 156 50 L 170 50 L 176 88 L 182 50 L 204 50 " +
    "L 210 18 L 216 50 L 230 50 L 236 82 L 242 50 L 264 50 " +
    "L 270 14 L 276 50 L 290 50 L 296 86 L 302 50 L 324 50 " +
    "L 330 16 L 336 50 L 350 50 L 356 84 L 362 50 L 400 50";

  return (
    <div className="relative mt-5 h-[88px] w-full overflow-hidden">
      <svg
        viewBox="0 0 400 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="waveStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--accent-deep)" stopOpacity="0.0" />
            <stop offset="12%" stopColor="var(--accent-deep)" stopOpacity="0.95" />
            <stop offset="88%" stopColor="var(--accent)" stopOpacity="0.95" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.0" />
          </linearGradient>
          <linearGradient id="waveFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>

        <line
          x1="0" y1="50" x2="400" y2="50"
          stroke="var(--border)"
          strokeWidth="0.6"
          strokeDasharray="2 4"
        />

        <motion.path
          d={path}
          fill="none"
          stroke="url(#waveStroke)"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 2.2, ease: EASE_OUT_QUART, delay: 0.5 }}
        />

        <motion.path
          d={`${path} L 400 100 L 0 100 Z`}
          fill="url(#waveFade)"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.6 }}
        />
      </svg>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="absolute right-2 top-1 flex items-center gap-1.5"
      >
        <span className="inline-block size-1.5 rounded-full bg-accent" aria-hidden />
        <span className="text-mono-eyebrow text-fg-subtle">peak</span>
      </motion.div>
    </div>
  );
}

function MaterialStrip({ inView }: { inView: boolean }) {
  return (
    <div className="mt-6">
      <div className="flex items-center justify-between text-mono-eyebrow text-fg-subtle">
        <span>Material study</span>
        <span>Voltage, peak-to-peak</span>
      </div>

      <div className="relative mt-4 h-12">
        <div className="absolute inset-x-0 top-1/2 h-px bg-border" />
        <div className="absolute inset-0 grid grid-cols-4">
          {MATERIAL_POINTS.map((p, i) => {
            const heightPct = Math.max(8, (p.voltage / PEAK_MAX) * 100);
            return (
              <div
                key={p.weight}
                className="relative flex flex-col items-center justify-end"
              >
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={inView ? { height: `${heightPct}%`, opacity: 1 } : {}}
                  transition={{
                    duration: 1.0,
                    ease: EASE_OUT_QUART,
                    delay: 1.0 + i * 0.12,
                  }}
                  className={cn(
                    "w-[2px] rounded-full",
                    p.optimal ? "bg-accent" : "bg-fg/30",
                  )}
                />
                <motion.span
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 1.6 + i * 0.12,
                    ease: EASE_OUT_QUART,
                  }}
                  className={cn(
                    "absolute -top-1 size-2 rounded-full ring-2 ring-bg-elevated",
                    p.optimal ? "bg-accent shadow-[0_0_0_4px_var(--accent-soft)]" : "bg-fg/40",
                  )}
                  style={{ bottom: `calc(${heightPct}% - 4px)`, top: "auto" }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-3 grid grid-cols-4 gap-x-2 text-center">
        {MATERIAL_POINTS.map((p) => (
          <div key={p.weight} className="flex flex-col">
            <span
              className={cn(
                "text-[13px] font-semibold tabular-nums tracking-tight",
                p.optimal ? "text-accent-deep" : "text-fg-muted",
              )}
            >
              {p.voltage.toFixed(1)}
              <span className="ml-0.5 text-[10px] font-medium text-fg-subtle">V</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.12em] text-fg-subtle">
              {p.weight} wt%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MicroStats() {
  return (
    <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 md:grid-cols-4">
      {MICRO_STATS.map((s) => (
        <li key={s.label} className="flex flex-col">
          <div className="flex items-baseline gap-1">
            <span className="text-[18px] font-semibold tabular-nums tracking-tight text-fg">
              {s.value}
            </span>
            {s.unit && (
              <span className="text-[11px] font-medium text-fg-subtle">{s.unit}</span>
            )}
          </div>
          <span className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-fg-subtle">
            {s.label}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Citation() {
  return (
    <p className="mt-6 text-[10px] uppercase leading-relaxed tracking-[0.14em] text-fg-subtle">
      Source · Kaur et al., Microelectronic Engineering 275 (2023) 111992 · DOI 10.1016/j.mee.2023.111992
    </p>
  );
}

function Divider() {
  return <div className="mt-6 h-px w-full bg-border" />;
}

function CardBackdrop() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--accent) 60%, transparent) 50%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 100% 0%, color-mix(in srgb, var(--accent) 12%, transparent) 0%, transparent 60%), radial-gradient(50% 50% at 0% 100%, color-mix(in srgb, var(--accent-deep) 8%, transparent) 0%, transparent 70%)",
        }}
      />
    </>
  );
}

function CornerMark() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute right-5 top-5 flex h-6 w-6 items-center justify-center"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 4 L20 4 L20 8"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          className="text-border-strong"
        />
      </svg>
    </div>
  );
}
