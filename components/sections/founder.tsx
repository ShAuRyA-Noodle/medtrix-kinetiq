"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { ArrowRightIcon } from "@/components/ui/icons";
import { fadeUp, stagger, EASE_OUT_QUART } from "@/lib/motion";

const CREDENTIALS = [
  {
    label: "Education",
    value: "PhD, UIET, Panjab University",
    sub: "Faculty of Engineering. Thesis: Fabrication of Energy Harvester for Biomedical Applications. Co-supervised with PGIMER Chandigarh, Department of Cardiology.",
  },
  {
    label: "Current role",
    value: "Visvesvaraya Postdoctoral Fellow",
    sub: "Department of Science and Technology, Government of India. Hosted at Punjabi University, Patiala. Since 14 January 2026.",
  },
  {
    label: "Publications",
    value: "9 SCIE papers",
    sub: "Cumulative impact factor 23.9, h-index 8, 143 Google Scholar citations. First author on the Rehab Glove and Pacemaker Lead papers.",
  },
];

const LINKS = [
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=dQqEg0EAAAAJ&hl=en" },
  { label: "ORCID",          href: "https://orcid.org/0000-0003-3252-7635" },
  { label: "LinkedIn",       href: "https://www.linkedin.com/in/akshpreetkaur93/" },
];

export function Founder() {
  return (
    <section
      id="founder"
      className="relative mx-auto w-full max-w-[var(--container)] px-6 py-32 md:px-10 md:py-40"
    >
      <SectionHeader
        eyebrow="Founder"
        title="Dr. Akshpreet Kaur built the IP before building the company."
      />

      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: EASE_OUT_QUART }}
          className="lg:col-span-5"
        >
          <FounderCard />
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
            className="text-[18px] leading-[1.6] text-fg-muted text-pretty md:text-[19px]"
          >
            Dr. Akshpreet Kaur is the founder and director of Medtrix Technologies. She
            spent six years building the science of self-powered triboelectric nanogenerators
            at UIET, Panjab University, co-supervised by the Department of Cardiology at
            PGIMER Chandigarh. Two of her first-author papers are the direct basis for the
            Medtrix product line.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-[16px] leading-[1.6] text-fg-muted text-pretty"
          >
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
    </section>
  );
}

function FounderCard() {
  return (
    <div className="relative overflow-hidden rounded-[var(--radius-2xl)] bg-bg-elevated p-8 ring-1 ring-inset ring-border md:p-10">
      <div className="flex items-center gap-4">
        <div
          aria-hidden
          className="grid size-20 place-items-center rounded-2xl text-bg"
          style={{
            backgroundImage:
              "linear-gradient(135deg, var(--fg) 0%, color-mix(in srgb, var(--accent-deep) 70%, var(--fg)) 100%)",
          }}
        >
          <span className="heading-display text-[28px]">AK</span>
        </div>
        <div>
          <div className="text-mono-eyebrow text-fg-subtle">Founder and Director</div>
          <div className="mt-1 text-[18px] font-semibold tracking-tight text-fg">
            Dr. Akshpreet Kaur
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-3 border-t border-border pt-6">
        <Row label="Location" value="Patiala, Punjab, India" />
        <Row label="Affiliation" value="Punjabi University" />
        <Row label="Discipline" value="Energy harvesters for biomedical applications" />
        <Row label="Since" value="January 2026" />
      </div>

      <div className="mt-8 text-mono-eyebrow text-fg-subtle">
        Source · CV, May 2026
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--accent) 60%, transparent) 50%, transparent 100%)",
        }}
      />
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <span className="text-[11.5px] uppercase tracking-[0.14em] text-fg-subtle">
        {label}
      </span>
      <span className="text-[13.5px] font-medium tracking-tight text-fg text-right">
        {value}
      </span>
    </div>
  );
}
