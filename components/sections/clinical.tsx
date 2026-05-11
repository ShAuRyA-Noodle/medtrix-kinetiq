"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { Surface } from "@/components/ui/surface";
import { fadeUp, stagger, EASE_OUT_QUART } from "@/lib/motion";

const PARTNERS = [
  {
    code: "PGIMER",
    name: "Postgraduate Institute of Medical Education and Research",
    city: "Chandigarh, India",
    line: "Co-author institution on both Medtrix-relevant peer-reviewed papers. Department of Cardiology contributed clinical framing for the cardiac TENG line and clinical context for rehabilitation work.",
    papers: ["Microelectronic Engineering 275 (2023) 111992", "Sensors and Actuators A 390 (2025) 116606"],
    role: "Clinical research collaborator",
  },
  {
    code: "NTU UK",
    name: "Nottingham Trent University, Advanced Optics and Photonics Lab",
    city: "Nottingham, United Kingdom",
    line: "International co-author institution on the Rehab Glove paper. Hosted Dr. Akshpreet Kaur as a visiting exchange researcher under the UKIERI-SPARC India-UK partnership programme.",
    papers: ["Microelectronic Engineering 275 (2023) 111992"],
    role: "Materials and photonics collaborator",
  },
];

export function Clinical() {
  return (
    <Surface id="clinical" variant="sunken" divider>
      <SectionHeader
        sectionNumber="05"
        eyebrow="Clinical and research collaborators"
        title="Co-developed with hospitals and labs that publish."
        description="Every Medtrix paper carries co-authors from premier medical and engineering institutions. The product is grounded in real clinical context, not a marketing claim."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger(0.12, 0.05)}
        className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6"
      >
        {PARTNERS.map((p) => (
          <motion.div
            key={p.code}
            variants={fadeUp}
            className="group relative flex flex-col rounded-[var(--radius-2xl)] bg-bg-elevated p-7 ring-1 ring-inset ring-border md:p-8"
          >
            <div className="flex items-start justify-between gap-3">
              <span
                aria-hidden
                className="grid h-14 w-14 place-items-center rounded-2xl bg-fg text-bg"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, var(--fg) 0%, color-mix(in srgb, var(--accent-deep) 65%, var(--fg)) 100%)",
                }}
              >
                <span className="text-[15px] font-semibold tracking-tight">{p.code.split(" ")[0].slice(0, 4)}</span>
              </span>
              <span className="text-mono-eyebrow text-fg-subtle">{p.role}</span>
            </div>

            <h3 className="heading-display mt-6 text-[clamp(1.4rem,2.4vw,1.9rem)] text-fg">
              {p.name}
            </h3>
            <p className="mt-2 text-[12px] uppercase tracking-[0.14em] text-fg-subtle">
              {p.city}
            </p>

            <p className="mt-5 text-[14.5px] leading-[1.55] text-fg-muted">{p.line}</p>

            <ul className="mt-6 space-y-1.5 border-t border-border pt-4">
              {p.papers.map((paper) => (
                <li
                  key={paper}
                  className="flex items-start gap-2 text-[12px] text-fg-subtle"
                >
                  <span aria-hidden className="mt-1 inline-block size-1 rounded-full bg-accent" />
                  <span className="font-mono">{paper}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: EASE_OUT_QUART }}
        className="mt-8 max-w-3xl text-[13px] leading-relaxed text-fg-subtle"
      >
        Institutions listed only where their researchers appear as named co-authors on
        peer-reviewed papers cited on this page. Individual collaborators are not named
        on the public site pending consent.
      </motion.p>
    </Surface>
  );
}
