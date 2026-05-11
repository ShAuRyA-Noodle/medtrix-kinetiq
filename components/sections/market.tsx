"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { Surface } from "@/components/ui/surface";
import { EASE_OUT_QUART } from "@/lib/motion";

const HEADLINE_NUMBERS = [
  { value: "207.20",   unit: "M USD", sub: "TENG market, 2025"    },
  { value: "2,776.14", unit: "M USD", sub: "Forecast, 2035"        },
  { value: "29.14%",   unit: "",      sub: "CAGR, 2026 to 2035"    },
];

const REGIONAL_NUMBERS = [
  { label: "Asia-Pacific share, 2025",            value: "40.12%" },
  { label: "Asia-Pacific CAGR, 2026 to 2035",     value: "31.65%" },
];

export function Market() {
  return (
    <Surface id="market" variant="ink" divider>
      <SectionHeader
        sectionNumber="08"
        eyebrow="Market"
        tone="ink"
        title="A 13.4x market, growing fastest where Medtrix is built."
        description="The global triboelectric nanogenerator market is on a 10-year compounding curve. Asia-Pacific is the dominant and fastest-growing region. Medical devices are the fastest-growing application segment inside that curve."
      />

      <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
        {HEADLINE_NUMBERS.map((n, i) => (
          <motion.div
            key={n.sub}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: EASE_OUT_QUART, delay: i * 0.1 }}
            className="relative overflow-hidden rounded-[var(--radius-2xl)] bg-[color:var(--bg-ink-elevated)] p-7 ring-1 ring-inset ring-[color:var(--border-on-ink)] md:p-9"
          >
            <div className="text-mono-eyebrow text-[color:var(--fg-on-ink-subtle)]">
              {n.sub}
            </div>
            <div className="mt-5 flex items-baseline gap-2">
              <span className="heading-mega text-[clamp(2.6rem,5vw,4rem)] tabular-nums text-[color:var(--fg-on-ink)]">
                {n.value}
              </span>
              {n.unit && (
                <span className="text-[14px] font-medium text-[color:var(--fg-on-ink-muted)]">
                  {n.unit}
                </span>
              )}
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--accent-bright) 50%, transparent) 50%, transparent 100%)",
              }}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: EASE_OUT_QUART, delay: 0.1 }}
        className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5"
      >
        {REGIONAL_NUMBERS.map((r) => (
          <div
            key={r.label}
            className="flex items-center justify-between gap-4 rounded-[var(--radius-xl)] bg-[color:var(--bg-ink-elevated)] px-6 py-5 ring-1 ring-inset ring-[color:var(--border-on-ink)]"
          >
            <span className="text-[13.5px] tracking-tight text-[color:var(--fg-on-ink-muted)]">
              {r.label}
            </span>
            <span className="text-[22px] font-semibold tabular-nums tracking-tight text-[color:var(--fg-on-ink)]">
              {r.value}
            </span>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="mt-10 rounded-[var(--radius-xl)] border border-[color:var(--border-on-ink)] p-6 md:p-7"
      >
        <p className="text-[14.5px] leading-[1.55] text-[color:var(--fg-on-ink-muted)]">
          Medical devices are reported as the fastest-growing application segment within
          this market. Asia-Pacific is the dominant region and the fastest-growing region.
          Medtrix sits at the intersection.
        </p>
        <p className="mt-4 text-[11px] uppercase tracking-[0.14em] text-[color:var(--fg-on-ink-subtle)]">
          Source · SNS Insider, Triboelectric Nanogenerator Market report, March 2026,
          published via GlobeNewswire
        </p>
      </motion.div>
    </Surface>
  );
}
