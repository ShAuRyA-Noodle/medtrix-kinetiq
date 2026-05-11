"use client";

import { motion } from "framer-motion";
import { ArrowDownIcon } from "@/components/ui/icons";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { WordReveal } from "@/components/motion/word-reveal";
import { SensorCard } from "@/components/sections/sensor-card";
import { fadeUp, stagger, EASE_OUT_QUART } from "@/lib/motion";

const PROOF_STRIP = [
  { value: "195.4 V", label: "Peak Voc" },
  { value: "79%",     label: "Gain vs pure PDMS" },
  { value: "5",       label: "Sensors per glove" },
  { value: "5,000",   label: "Cycles durability" },
  { value: "0",       label: "Batteries" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden gradient-radial-accent"
    >
      <div className="relative mx-auto grid min-h-[100dvh] w-full max-w-[var(--container)] grid-cols-1 items-center gap-x-10 gap-y-16 px-6 pb-20 pt-32 md:grid-cols-12 md:gap-x-14 md:px-10 md:pb-28 md:pt-40">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger(0.08, 0.05)}
          className="relative z-10 md:col-span-7"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow
              items={[
                "Backed by DST",
                "Developed with PGIMER Chandigarh",
                "Peer reviewed in Elsevier and RSC",
              ]}
            />
          </motion.div>

          <h1 className="heading-display mt-7 text-[clamp(2.6rem,7.2vw,5.6rem)] text-balance text-fg">
            <WordReveal as="span" className="block" text="Power the body" />
            <WordReveal
              as="span"
              className="block text-fg-muted"
              text="with the body."
              delayChildren={0.45}
            />
          </h1>

          <motion.p
            variants={fadeUp}
            transition={{ delay: 0.95, duration: 0.7, ease: EASE_OUT_QUART }}
            className="mt-7 max-w-xl text-[17px] leading-[1.55] text-fg-muted text-pretty md:text-[19px]"
          >
            Medtrix builds self-powered triboelectric sensors for rehabilitation. Energy
            harvested from the patient&rsquo;s own motion. No batteries. No wires. No downtime.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ delay: 1.15, duration: 0.7, ease: EASE_OUT_QUART }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Button
              withArrow
              onClick={() => {
                const el = document.querySelector("#contact");
                el?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Request a clinical pilot
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                const el = document.querySelector("#proof");
                el?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Read the science
            </Button>
          </motion.div>
        </motion.div>

        <div className="relative z-10 md:col-span-5">
          <SensorCard />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, ease: EASE_OUT_QUART }}
          className="col-span-full mt-8 md:mt-14"
        >
          <ul className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-border pt-8 sm:grid-cols-3 md:grid-cols-5 md:gap-x-8 md:pt-10">
            {PROOF_STRIP.map((item) => (
              <li key={item.label} className="flex flex-col">
                <span className="text-[clamp(1.4rem,2.4vw,1.9rem)] font-semibold tracking-tight text-fg">
                  {item.value}
                </span>
                <span className="mt-1 text-[11px] uppercase tracking-[0.16em] text-fg-subtle">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.a
          href="#problem"
          aria-label="Scroll to problem section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 0.6 }}
          className="group absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        >
          <span className="text-mono-eyebrow text-fg-subtle">Scroll</span>
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="grid size-8 place-items-center rounded-full ring-1 ring-inset ring-border"
          >
            <ArrowDownIcon size={14} />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
