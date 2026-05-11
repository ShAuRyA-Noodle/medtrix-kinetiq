"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { Surface } from "@/components/ui/surface";
import { fadeUp, stagger } from "@/lib/motion";
import { cn } from "@/lib/cn";

type Stage = {
  trl: string;
  title: string;
  body: string;
  status: "done" | "active" | "future";
  window: string;
};

const STAGES: Stage[] = [
  {
    trl: "TRL 4",
    title: "Lab-validated material and device",
    body: "MWCNT-PDMS at 4 wt% achieves 195.4 V peak Voc and 500-cycle durability. Five-sensor glove demonstrated powering a digital thermometer and a pulse sensor.",
    status: "done",
    window: "Achieved",
  },
  {
    trl: "TRL 5",
    title: "Wearability and life cycle hardening",
    body: "Sweat and wash testing. Long-cycle (multi-thousand) durability extension to match the SE-TENG variant benchmark. Encapsulation that survives daily wear.",
    status: "active",
    window: "Next 6 months",
  },
  {
    trl: "TRL 6",
    title: "Clinical pilot",
    body: "Stroke and post-surgical hand rehab pilot in partnership with PGIMER Chandigarh. Capture compliance and bend-angle data across a real patient cohort.",
    status: "future",
    window: "Months 6 to 12",
  },
  {
    trl: "TRL 7",
    title: "Hardened wearable form factor",
    body: "Low-power BLE telemetry, mobile clinician dashboard, charging-free deployment across the full recovery window.",
    status: "future",
    window: "Months 12 to 18",
  },
  {
    trl: "TRL 8",
    title: "Regulatory pathway",
    body: "ICMR and CDSCO pathway in India. CE pathway in the European Union. Documented quality system.",
    status: "future",
    window: "Year 2",
  },
  {
    trl: "TRL 9",
    title: "Commercial deployment",
    body: "First commercial deployment in Indian rehabilitation clinics, then expansion across UK and Asia-Pacific markets.",
    status: "future",
    window: "Year 3 plus",
  },
];

const STATUS_DOT = {
  done:   "bg-accent",
  active: "bg-fg",
  future: "bg-fg-subtle/60",
} as const;

const STATUS_LABEL = {
  done:   "Achieved",
  active: "Active",
  future: "Planned",
} as const;

export function Roadmap() {
  return (
    <Surface id="roadmap" variant="sunken" divider>
      <SectionHeader
        sectionNumber="10"
        eyebrow="Roadmap"
        title="From lab-validated device to clinical deployment."
        description="Six rungs of the technology readiness ladder. Each milestone is defined by an observable outcome, not a quarter on a calendar."
      />

      <motion.ol
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger(0.1, 0.05)}
        className="relative mt-14"
      >
        <span aria-hidden className="absolute left-[28px] top-3 bottom-3 w-px bg-border md:left-[88px]" />
        {STAGES.map((s, i) => (
          <motion.li
            key={s.trl}
            variants={fadeUp}
            className="relative grid grid-cols-[56px_1fr] gap-4 py-6 md:grid-cols-[88px_1fr_auto] md:gap-10 md:py-7"
          >
            <div className="relative flex items-start pt-1">
              <span
                aria-hidden
                className={cn(
                  "z-10 inline-block size-3 rounded-full ring-4 ring-bg",
                  STATUS_DOT[s.status],
                )}
              />
              <span className="ml-3 text-mono-eyebrow text-fg-subtle md:hidden">
                {s.trl}
              </span>
            </div>

            <div className="md:hidden">
              <h3 className="text-[17px] font-semibold leading-snug tracking-tight text-fg">
                {s.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.55] text-fg-muted">{s.body}</p>
              <div className="mt-3 flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-fg-subtle">
                <span>{s.window}</span>
                <span className="inline-block size-1 rounded-full bg-fg-subtle/60" />
                <span>{STATUS_LABEL[s.status]}</span>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-mono-eyebrow text-fg-subtle">{s.trl}</span>
                  <h3 className="heading-display mt-2 text-[clamp(1.4rem,2.1vw,1.8rem)] text-fg">
                    {s.title}
                  </h3>
                </div>
              </div>
              <p className="mt-3 max-w-3xl text-[15px] leading-[1.55] text-fg-muted">
                {s.body}
              </p>
            </div>

            <div className="hidden md:flex md:flex-col md:items-end md:gap-2 md:pt-1">
              <span className="text-mono-eyebrow text-fg-subtle">{s.window}</span>
              <span
                className={cn(
                  "inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em]",
                  s.status === "done" && "bg-accent-soft text-accent-deep",
                  s.status === "active" && "bg-fg text-bg",
                  s.status === "future" && "bg-bg-sunken text-fg-muted ring-1 ring-inset ring-border",
                )}
              >
                {STATUS_LABEL[s.status]}
              </span>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </Surface>
  );
}
