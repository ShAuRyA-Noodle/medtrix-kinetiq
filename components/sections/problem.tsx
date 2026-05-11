"use client";

import { motion } from "framer-motion";
import { BatteryIcon, ClipboardIcon, PlugsIcon } from "@/components/ui/icons";
import { SectionHeader } from "@/components/ui/section-header";
import { Surface } from "@/components/ui/surface";
import { fadeUp, stagger } from "@/lib/motion";

const CARDS = [
  {
    Icon: BatteryIcon,
    metric: "600,000",
    metricLabel: "pacemakers per year",
    body:
      "Every implanted pacemaker runs on a battery that lasts about 7 to 10 years and then requires another surgery to swap. Source: Hao et al. 2015 (annual implant rate) and Mallela et al. 2004 (battery life), both cited in Sensors and Actuators A 390 (2025) 116606.",
  },
  {
    Icon: ClipboardIcon,
    metric: "Clipboard",
    metricLabel: "still the standard",
    body:
      "Most rehabilitation patients are still measured by hand. Bend angle, grip strength, and compliance live on paper rather than in real time, leaving therapists without continuous data.",
  },
  {
    Icon: PlugsIcon,
    metric: "Daily",
    metricLabel: "recharge interruptions",
    body:
      "Battery wearables for rehab and motion tracking interrupt therapy every recharge cycle. The body is already producing the energy. We just had to learn how to harvest it.",
  },
];

export function Problem() {
  return (
    <Surface id="problem" variant="sunken" withGrid divider>
      <SectionHeader
        sectionNumber="01"
        eyebrow="The problem"
        title="Rehab data should never depend on a charger."
        description="Three friction points break continuous care today. Self-powered sensing closes all three."
      />

      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger(0.12, 0.1)}
        className="mt-16 grid grid-cols-1 gap-5 md:mt-20 md:grid-cols-3"
      >
        {CARDS.map(({ Icon, metric, metricLabel, body }) => (
          <motion.li
            key={metric}
            variants={fadeUp}
            className="group relative flex flex-col rounded-[var(--radius-xl)] bg-bg-elevated p-8 ring-1 ring-inset ring-border transition-shadow duration-500 hover:shadow-md"
          >
            <Icon size={22} className="text-accent" />
            <div className="mt-8">
              <div className="heading-display text-[clamp(2rem,3.4vw,2.6rem)] text-fg">
                {metric}
              </div>
              <div className="text-mono-eyebrow mt-2 text-fg-subtle">{metricLabel}</div>
            </div>
            <p className="mt-6 text-[15px] leading-[1.55] text-fg-muted text-pretty">
              {body}
            </p>
          </motion.li>
        ))}
      </motion.ul>
    </Surface>
  );
}
