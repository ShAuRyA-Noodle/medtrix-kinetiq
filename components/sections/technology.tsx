"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { fadeUp, stagger, EASE_OUT_QUART } from "@/lib/motion";
import { cn } from "@/lib/cn";

const PROPERTIES = [
  {
    label: "Optimal composition",
    value: "4 wt%",
    detail: "MWCNT in PDMS, selected by sweep against 0, 2, 4, 6 wt% samples",
    source: "Paper 2 Conclusions, Microelectronic Engineering 275 (2023)",
  },
  {
    label: "Mechanical compliance",
    value: "108.21%",
    detail: "Elongation at break of the 4 wt% MWCNT-PDMS film, highest among all samples tested",
    source: "Paper 2 Fig 5(d)",
  },
  {
    label: "Output peak",
    value: "195.4 V",
    detail: "Open circuit voltage of the optimal 4 wt% device under 15 N tapping",
    source: "Paper 2 Fig 6(a)",
  },
];

const ARCHITECTURES = [
  {
    name: "Vertical Contact Separation",
    code: "VCS",
    line: "Two dielectric layers cycle between contact and separation. Drives the rehab glove SW-TENG.",
    use: "Rehab Glove",
  },
  {
    name: "Single Electrode",
    code: "SE",
    line: "One electrode plus a moving triboelectric body. Adapted into the pacemaker lead variant.",
    use: "Pacemaker line",
  },
];

export function Technology() {
  return (
    <section
      id="technology"
      className="relative mx-auto w-full max-w-[var(--container)] px-6 py-32 md:px-10 md:py-40"
    >
      <SectionHeader
        eyebrow="Technology"
        title="A square of rubber. A web of carbon. A medical device that never sees a charger."
        description="The triboelectric effect converts everyday mechanical motion into electricity through contact electrification and electrostatic induction. We engineered the dielectric down to its weight ratio."
      />

      <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <MaterialStack />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger(0.1, 0.05)}
          className="space-y-4 lg:col-span-5"
        >
          {PROPERTIES.map((p) => (
            <motion.div
              key={p.label}
              variants={fadeUp}
              className="group relative rounded-[var(--radius-lg)] bg-bg-elevated p-6 ring-1 ring-inset ring-border transition-shadow duration-500 hover:shadow-md"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-mono-eyebrow text-fg-subtle">{p.label}</span>
                <span className="heading-display text-[clamp(1.6rem,2.4vw,2rem)] tabular-nums text-fg">
                  {p.value}
                </span>
              </div>
              <p className="mt-3 text-[14px] leading-[1.55] text-fg-muted">{p.detail}</p>
              <p className="mt-3 text-[10px] uppercase tracking-[0.14em] text-fg-subtle">
                Source · {p.source}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger(0.12, 0.05)}
        className="mt-16 grid grid-cols-1 gap-5 md:mt-20 md:grid-cols-2"
      >
        {ARCHITECTURES.map((a) => (
          <motion.div
            key={a.code}
            variants={fadeUp}
            className="relative overflow-hidden rounded-[var(--radius-xl)] bg-bg-elevated p-7 ring-1 ring-inset ring-border md:p-8"
          >
            <div className="flex items-baseline justify-between gap-4">
              <div>
                <span className="text-mono-eyebrow text-fg-subtle">Architecture · {a.code}</span>
                <h3 className="heading-display mt-2 text-[clamp(1.4rem,2.2vw,1.9rem)] text-fg">
                  {a.name}
                </h3>
              </div>
              <span className="inline-flex items-center rounded-full bg-accent-soft px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-accent-deep">
                {a.use}
              </span>
            </div>
            <p className="mt-4 text-[15px] leading-[1.55] text-fg-muted">{a.line}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function MaterialStack() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: EASE_OUT_QUART }}
      className="relative overflow-hidden rounded-[var(--radius-2xl)] bg-bg-elevated p-8 ring-1 ring-inset ring-border md:p-10"
    >
      <div className="flex items-center justify-between">
        <span className="text-mono-eyebrow text-fg-subtle">Exploded view · SW-TENG stack</span>
        <span className="text-mono-eyebrow text-fg-subtle">4 wt%</span>
      </div>

      <div className="mt-8 space-y-3">
        <StackLayer label="Top electrode" sub="Copper foil, current collector" thickness="thin" tone="dark" />
        <StackLayer label="MWCNT-PDMS dielectric" sub="4 wt% multiwalled carbon nanotubes, optimal nanocomposite" thickness="thick" tone="accent" badge="Optimum" />
        <StackLayer label="Spacer" sub="Air gap, contact-separation cycle" thickness="thin" tone="muted" />
        <StackLayer label="Counter-tribo layer" sub="Aluminium foil, tribopositive partner against MWCNT-PDMS" thickness="medium" tone="warm" />
        <StackLayer label="Bottom electrode" sub="Copper foil, current collector" thickness="thin" tone="dark" />
      </div>

      <p className="mt-8 text-[12.5px] leading-relaxed text-fg-muted">
        When the patient flexes a finger, the two dielectric layers contact and separate. Contact
        electrification donates surface charges. Electrostatic induction drives current through the
        external circuit. No battery, no wires from the body.
      </p>
    </motion.div>
  );
}

function StackLayer({
  label,
  sub,
  thickness,
  tone,
  badge,
}: {
  label: string;
  sub: string;
  thickness: "thin" | "medium" | "thick";
  tone: "dark" | "accent" | "muted" | "warm";
  badge?: string;
}) {
  const heightClass =
    thickness === "thin" ? "h-3" : thickness === "medium" ? "h-7" : "h-12";
  const toneClass = {
    dark: "bg-fg/85",
    accent: "bg-accent/85",
    muted: "bg-bg-sunken ring-1 ring-inset ring-border",
    warm: "bg-fg/40",
  }[tone];

  return (
    <div className="grid grid-cols-[1fr_auto] items-center gap-5">
      <div>
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-medium tracking-tight text-fg">{label}</span>
          {badge && (
            <span className="inline-flex items-center rounded-full bg-accent-soft px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-[0.1em] text-accent-deep">
              {badge}
            </span>
          )}
        </div>
        <div className="text-[11.5px] leading-snug text-fg-subtle">{sub}</div>
      </div>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "min(280px, 60vw)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1, ease: EASE_OUT_QUART, delay: 0.2 }}
        className={cn("rounded-md", heightClass, toneClass)}
      />
    </div>
  );
}
