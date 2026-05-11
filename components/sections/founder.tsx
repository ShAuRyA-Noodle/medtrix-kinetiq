"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { Surface } from "@/components/ui/surface";
import { ArrowRightIcon } from "@/components/ui/icons";
import { fadeUp, stagger, EASE_OUT_QUART } from "@/lib/motion";

const TIMELINE = [
  {
    date: "Dec 2019",
    body: "PhD begins, Faculty of Engineering, UIET, Panjab University.",
    tag: "Start",
  },
  {
    date: "2022 to 2024",
    body: "Six SCIE journal publications across Elsevier, RSC, Springer, and World Scientific. DFT, deformation, and fabrication studies of MWCNT-PDMS.",
    tag: "Build",
  },
  {
    date: "2024",
    body: "UKIERI-SPARC visiting exchange at Nottingham Trent University. Oxford Podium Institute oral talk. Edinburgh Napier joint talk.",
    tag: "International",
  },
  {
    date: "2025",
    body: "Cambridge Wearable Innovation Forum. IWAM Ras Al Khaimah travel award. Pacemaker SE-TENG paper in Sensors and Actuators A.",
    tag: "Platform",
  },
  {
    date: "Sep 2025",
    body: "PhD awarded. Thesis: Fabrication of Energy Harvester for Biomedical Applications.",
    tag: "Award",
  },
  {
    date: "Jan 2026",
    body: "Visvesvaraya Postdoctoral Fellow, DST Government of India. Founder, Medtrix Technologies Pvt. Ltd.",
    tag: "Current",
  },
];

const CREDENTIALS = [
  {
    label: "Education",
    value: "PhD, UIET, Panjab University",
    sub: "Faculty of Engineering. Thesis co-supervised with PGIMER Chandigarh, Department of Cardiology.",
  },
  {
    label: "Current role",
    value: "Visvesvaraya Postdoctoral Fellow",
    sub: "Department of Science and Technology, Government of India. Hosted at Punjabi University, Patiala.",
  },
  {
    label: "Publications",
    value: "9 SCIE papers",
    sub: "Cumulative impact factor 23.9, h-index 8, 143 Google Scholar citations.",
  },
];

const LINKS = [
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=dQqEg0EAAAAJ&hl=en" },
  { label: "ORCID",          href: "https://orcid.org/0000-0003-3252-7635" },
  { label: "LinkedIn",       href: "https://www.linkedin.com/in/akshpreetkaur93/" },
];

export function Founder() {
  return (
    <Surface id="founder" variant="default" divider>
      <SectionHeader
        sectionNumber="09"
        eyebrow="Founder"
        title="Dr. Akshpreet Kaur built the science before building the company."
      />

      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, ease: EASE_OUT_QUART }}
          className="lg:col-span-5"
        >
          <CareerTimeline />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger(0.1, 0.1)}
          className="space-y-7 lg:col-span-7"
        >
          <motion.p
            variants={fadeUp}
            className="text-[20px] leading-[1.5] tracking-tight text-fg text-pretty md:text-[22px]"
          >
            Dr. Akshpreet Kaur is the founder and director of Medtrix Technologies. From
            December 2019 to September 2025 she built the science of self-powered triboelectric
            nanogenerators at UIET, Panjab University, co-supervised by the Department of
            Cardiology at PGIMER Chandigarh.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-[16px] leading-[1.6] text-fg-muted text-pretty"
          >
            Two of her first-author papers are the direct basis for the Medtrix product line.
            Her work has been recognised by the Government of India (First Prize, India
            International Science Festival), platformed at the University of Oxford and the
            University of Cambridge, and supported by UKIERI-SPARC under the India-UK
            partnership programme.
          </motion.p>

          <motion.div variants={fadeUp} className="space-y-3 pt-2">
            {CREDENTIALS.map((c) => (
              <div
                key={c.label}
                className="rounded-[var(--radius-xl)] bg-bg-elevated p-6 ring-1 ring-inset ring-border"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-mono-eyebrow text-fg-subtle">{c.label}</span>
                  <span className="text-[15.5px] font-semibold tracking-tight text-fg text-right">
                    {c.value}
                  </span>
                </div>
                <p className="mt-3 text-[13.5px] leading-[1.55] text-fg-muted">{c.sub}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-x-5 gap-y-2 pt-2">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-[13.5px] font-medium text-fg-muted transition-colors hover:text-fg"
              >
                {l.label}
                <ArrowRightIcon
                  size={12}
                  className="rotate-[-45deg] transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Surface>
  );
}

function CareerTimeline() {
  return (
    <div className="relative overflow-hidden rounded-[var(--radius-2xl)] bg-bg-elevated p-7 ring-1 ring-inset ring-border md:p-9">
      <div className="flex items-center justify-between">
        <div className="text-mono-eyebrow text-fg-subtle">Career arc</div>
        <div className="text-mono-eyebrow text-fg-subtle">2019 to 2026</div>
      </div>

      <ol className="relative mt-7">
        <span aria-hidden className="absolute left-[5px] top-1.5 bottom-1.5 w-px bg-border" />
        {TIMELINE.map((t, i) => (
          <motion.li
            key={t.date}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 1, 0.5, 1],
              delay: 0.1 + i * 0.08,
            }}
            className="relative grid grid-cols-[24px_1fr] gap-3 pb-6 last:pb-0"
          >
            <span
              aria-hidden
              className="relative z-10 mt-1.5 inline-block size-[11px] rounded-full bg-bg-elevated ring-2 ring-fg"
            />
            <div>
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-[12.5px] font-medium tabular-nums tracking-tight text-fg">
                  {t.date}
                </span>
                <span className="text-mono-tag text-fg-subtle">{t.tag}</span>
              </div>
              <p className="mt-1.5 text-[13.5px] leading-[1.5] text-fg-muted">{t.body}</p>
            </div>
          </motion.li>
        ))}
      </ol>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--accent) 60%, transparent) 50%, transparent 100%)",
        }}
      />

      <div className="mt-6 text-mono-eyebrow text-fg-subtle">
        Source · Akshpreet Kaur CV, May 2026
      </div>
    </div>
  );
}
