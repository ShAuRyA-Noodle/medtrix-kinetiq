"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { Surface } from "@/components/ui/surface";
import { GloveMap } from "@/components/ui/glove-map";
import { fadeUp, stagger, EASE_OUT_QUART } from "@/lib/motion";

const SPECS = [
  { label: "Sensors per glove", value: "5",            note: "One per finger, on the dorsum" },
  { label: "Sensor footprint",  value: "6 × 6",        unit: "cm",  note: "Per-unit dimensions, 3.2 mm thick" },
  { label: "Detected bend",     value: "30 · 60 · 90", unit: "deg", note: "Angles characterised in Fig 7(e)" },
  { label: "Grip states",       value: "3",            note: "No grip, low grip, high grip (Fig 7f)" },
  { label: "Material",          value: "4 wt%",        note: "MWCNT-PDMS, peak-Voc optimum" },
  { label: "Counter-tribo",     value: "Al foil",      note: "Aluminium foil, tribopositive against MWCNT-PDMS" },
];

const DEMOS = [
  {
    title: "Digital thermometer",
    body: "Powered directly by the glove's harvested charge stored in a 10 µF capacitor.",
    metric: "27 s",
    metricLabel: "to charge to 5 V",
  },
  {
    title: "Pulse sensor",
    body: "Driven from the same capacitor bank as the thermometer, demonstrating multi-device powering from finger tapping alone.",
    metric: "2",
    metricLabel: "loads demonstrated",
  },
];

const USE_CASES = [
  {
    name: "Stroke recovery",
    body: "Continuous bend-angle and grip-strength data without a charger. Therapists see compliance, not estimates.",
  },
  {
    name: "Clenched-fist syndrome",
    body: "Real-time measurement of release events, every release logged, no daily reset.",
  },
  {
    name: "Post-surgical hand rehab",
    body: "Daily-wear monitoring across the recovery window, including night-time movement.",
  },
];

export function Product() {
  return (
    <Surface id="product" variant="sunken" divider>
      <SectionHeader
        sectionNumber="03"
        eyebrow="Product"
        title="The Rehab Glove."
        description="Five smart wearable triboelectric nanogenerators on the dorsum of a fabric glove. Each unit harvests energy from finger flexion and reports bend angle and grip strength in real time. No battery. No wires running off the hand."
      />

      <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1, ease: EASE_OUT_QUART }}
          className="lg:col-span-5"
        >
          <div className="relative overflow-hidden rounded-[var(--radius-2xl)] bg-bg-elevated p-7 ring-1 ring-inset ring-border md:p-9">
            <div className="flex items-center justify-between">
              <span className="text-mono-eyebrow text-fg-subtle">Schematic, dorsal view</span>
              <span className="text-mono-eyebrow text-fg-subtle">5 SW-TENGs</span>
            </div>
            <GloveMap className="mt-6" />
            <p className="mt-7 text-[11px] uppercase leading-relaxed tracking-[0.14em] text-fg-subtle">
              Bend angles per Paper 2 Fig 7(e). Schematic only, not a manufacturing drawing.
            </p>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--accent) 60%, transparent) 50%, transparent 100%)",
              }}
            />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger(0.08, 0.05)}
          className="lg:col-span-7"
        >
          <motion.div variants={fadeUp} className="text-mono-eyebrow text-fg-subtle">
            Specifications
          </motion.div>

          <motion.ul
            variants={stagger(0.06, 0.1)}
            className="mt-5 divide-y divide-border rounded-[var(--radius-2xl)] bg-bg-elevated ring-1 ring-inset ring-border"
          >
            {SPECS.map((s) => (
              <motion.li
                key={s.label}
                variants={fadeUp}
                className="grid grid-cols-[140px_1fr_auto] items-center gap-4 px-6 py-4 md:grid-cols-[180px_1fr_auto] md:px-8"
              >
                <span className="text-[12px] uppercase tracking-[0.14em] text-fg-subtle">
                  {s.label}
                </span>
                <span className="text-[13.5px] leading-snug text-fg-muted">{s.note}</span>
                <span className="text-right">
                  <span className="text-[18px] font-semibold tabular-nums tracking-tight text-fg">
                    {s.value}
                  </span>
                  {s.unit && (
                    <span className="ml-1 text-[11px] text-fg-subtle">{s.unit}</span>
                  )}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-[11px] uppercase tracking-[0.14em] text-fg-subtle"
          >
            Source · Kaur et al., Microelectronic Engineering 275 (2023) 111992, Section 4.3
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger(0.1, 0)}
          className="lg:col-span-5"
        >
          <motion.div variants={fadeUp} className="text-mono-eyebrow text-fg-subtle">
            Demonstrated loads
          </motion.div>

          <div className="mt-5 space-y-4">
            {DEMOS.map((d) => (
              <motion.div
                key={d.title}
                variants={fadeUp}
                className="rounded-[var(--radius-xl)] bg-bg-elevated p-6 ring-1 ring-inset ring-border md:p-7"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-[16px] font-semibold tracking-tight text-fg">{d.title}</h3>
                  <div className="text-right">
                    <div className="heading-display text-[clamp(1.5rem,2.4vw,1.9rem)] tabular-nums text-fg">
                      {d.metric}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.12em] text-fg-subtle">
                      {d.metricLabel}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-[13.5px] leading-[1.55] text-fg-muted">{d.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: EASE_OUT_QUART }}
        className="mt-16 md:mt-20"
      >
        <div className="text-mono-eyebrow text-fg-subtle">Use cases</div>
        <ul className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
          {USE_CASES.map((u) => (
            <motion.li
              key={u.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: EASE_OUT_QUART }}
              className="rounded-[var(--radius-xl)] bg-bg-elevated p-7 ring-1 ring-inset ring-border"
            >
              <h4 className="text-[17px] font-semibold tracking-tight text-fg">{u.name}</h4>
              <p className="mt-3 text-[14px] leading-[1.55] text-fg-muted">{u.body}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </Surface>
  );
}
