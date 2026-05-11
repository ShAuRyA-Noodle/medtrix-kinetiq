"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";
import { Surface } from "@/components/ui/surface";
import { ArrowRightIcon } from "@/components/ui/icons";
import { fadeUp, stagger, EASE_OUT_QUART } from "@/lib/motion";
import { cn } from "@/lib/cn";

const EMAIL = "medtrixtechnologies@gmail.com";

type Door = {
  kind: "pilot" | "partner" | "invest";
  label: string;
  title: string;
  line: string;
  subject: string;
};

const DOORS: Door[] = [
  {
    kind: "pilot",
    label: "For hospitals and rehab clinics",
    title: "Request a clinical pilot.",
    line: "Use this door if you run a rehab program and want continuous bend-angle and grip-strength data without a charging cycle.",
    subject: "Clinical pilot inquiry · Medtrix Rehab Glove",
  },
  {
    kind: "partner",
    label: "For OEMs and research collaborators",
    title: "Co-develop or license.",
    line: "Use this door if you build medical devices, smart textiles, or sports wearables and want access to the SW-TENG platform.",
    subject: "Partnership inquiry · Medtrix Technologies",
  },
  {
    kind: "invest",
    label: "For pre-seed and seed deep-tech investors",
    title: "Invest at the seed stage.",
    line: "Use this door if you back deep-tech founders pre-revenue. Founder track record, science, and clinical anchor available on request.",
    subject: "Investor inquiry · Medtrix Technologies",
  },
];

export function Contact() {
  return (
    <Surface id="contact" variant="accent-bottom" divider>
      <SectionHeader
        sectionNumber="12"
        eyebrow="Contact"
        title="Three doors. One inbox."
        description="Pick the door that matches your intent. Every message lands in the same founder inbox."
      />

      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger(0.12, 0.1)}
        className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5"
      >
        {DOORS.map((d) => (
          <motion.li
            key={d.kind}
            variants={fadeUp}
            className={cn(
              "group relative flex flex-col rounded-[var(--radius-2xl)] bg-bg-elevated p-7 ring-1 ring-inset ring-border transition-shadow duration-500 hover:shadow-md md:p-8",
            )}
          >
            <span className="text-mono-eyebrow text-fg-subtle">{d.label}</span>
            <h3 className="heading-display mt-5 text-[clamp(1.4rem,2.4vw,1.9rem)] text-fg">
              {d.title}
            </h3>
            <p className="mt-4 text-[14.5px] leading-[1.55] text-fg-muted">{d.line}</p>

            <Link
              href={`mailto:${EMAIL}?subject=${encodeURIComponent(d.subject)}`}
              className="mt-7 inline-flex items-center justify-between gap-2 rounded-full bg-fg px-5 py-3 text-[13.5px] font-medium tracking-tight text-bg transition-colors hover:bg-[color-mix(in_srgb,var(--fg)_92%,transparent)]"
            >
              <span>Open this door</span>
              <ArrowRightIcon size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: EASE_OUT_QUART }}
        className="mt-10 flex flex-col items-start gap-3 rounded-[var(--radius-xl)] border border-border bg-bg-sunken/40 p-6 md:flex-row md:items-center md:justify-between md:p-7"
      >
        <div>
          <div className="text-mono-eyebrow text-fg-subtle">Direct line</div>
          <p className="mt-1 text-[15px] tracking-tight text-fg">
            <Link
              href={`mailto:${EMAIL}`}
              className="font-medium text-fg underline decoration-fg-subtle/40 underline-offset-4 transition-colors hover:text-accent-deep"
            >
              {EMAIL}
            </Link>
          </p>
        </div>
        <p className="text-[12.5px] leading-relaxed text-fg-subtle md:max-w-md md:text-right">
          Research-grade prototype, not a medical device under any regulatory framework as of
          this date. Every inbound message is read by the founder.
        </p>
      </motion.div>
    </Surface>
  );
}
