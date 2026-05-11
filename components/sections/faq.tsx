"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { EASE_OUT_QUART } from "@/lib/motion";
import { cn } from "@/lib/cn";

const QA = [
  {
    q: "What stage is the technology at today?",
    a: "Research-grade prototype with peer-reviewed performance data from in-vitro experiments. The smart wearable triboelectric nanogenerator was published in Microelectronic Engineering in 2023 and is the direct basis for the Rehab Glove product line.",
  },
  {
    q: "Where can I read the underlying science?",
    a: "Every published paper is in the Publications section above, with its full citation and a direct DOI link. Two papers (Microelectronic Engineering 2023 and Sensors and Actuators A 2025) form the core IP behind the current product line.",
  },
  {
    q: "How is this different from a piezoelectric sensor?",
    a: "Triboelectric devices generate output at lower mechanical thresholds and are cheaper to fabricate at scale. The MWCNT-PDMS composite at 4 wt% delivers 195.4 V peak open-circuit voltage from finger tapping alone, without external bias.",
  },
  {
    q: "How is the Rehab Glove worn?",
    a: "Five sensor units sit on the dorsum of a fabric glove, one over each finger from thumb to little. The wearer flexes the fingers and grips a soft object. The signals are read in real time without a battery or wires running off the hand.",
  },
  {
    q: "Are you raising or partnering?",
    a: "Open to early investor conversations and clinical partner inquiries through the Contact section. The product is pre-revenue and pre-clinical; expectations are calibrated accordingly.",
  },
  {
    q: "Where is Medtrix based?",
    a: "Medtrix Technologies Pvt. Ltd. is registered in India. Operations are co-located with the founder's Visvesvaraya postdoctoral fellowship at Punjabi University, Patiala, Punjab.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative mx-auto w-full max-w-[var(--container)] px-6 py-32 md:px-10 md:py-40"
    >
      <SectionHeader
        eyebrow="Frequently asked"
        title="What investors, clinicians, and partners usually ask first."
      />

      <ul className="mt-12 divide-y divide-border rounded-[var(--radius-2xl)] bg-bg-elevated ring-1 ring-inset ring-border">
        {QA.map((item, i) => {
          const isOpen = open === i;
          return (
            <li key={item.q}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="group flex w-full items-start justify-between gap-6 px-6 py-6 text-left transition-colors md:px-8 md:py-7"
              >
                <span
                  className={cn(
                    "flex-1 text-[16.5px] font-medium leading-snug tracking-tight transition-colors md:text-[17.5px]",
                    isOpen ? "text-fg" : "text-fg-muted group-hover:text-fg",
                  )}
                >
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className={cn(
                    "mt-1.5 grid size-7 shrink-0 place-items-center rounded-full ring-1 ring-inset ring-border transition-colors",
                    isOpen && "bg-fg ring-fg",
                  )}
                >
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    className={cn(isOpen ? "text-bg" : "text-fg-muted")}
                  >
                    <line x1="1" y1="5.5" x2="10" y2="5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    {!isOpen && (
                      <line x1="5.5" y1="1" x2="5.5" y2="10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    )}
                  </svg>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: EASE_OUT_QUART }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-7 text-[14.5px] leading-[1.6] text-fg-muted md:px-8 md:text-[15.5px]">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
