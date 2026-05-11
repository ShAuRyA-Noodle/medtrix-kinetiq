"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownIcon } from "@/components/ui/icons";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { WordReveal } from "@/components/motion/word-reveal";
import { fadeUp, stagger, EASE_OUT_QUART } from "@/lib/motion";

const SPEC_CALLOUTS = [
  {
    label: "Peak Voc",
    value: "195.4 V",
    note: "4 wt% MWCNT-PDMS",
    pos: "left-[-6%] top-[18%]",
  },
  {
    label: "Sensors",
    value: "5",
    note: "one per finger",
    pos: "right-[-4%] top-[8%]",
  },
  {
    label: "Durability",
    value: "5,000",
    note: "cycles tested",
    pos: "right-[-8%] bottom-[26%]",
  },
  {
    label: "Power source",
    value: "Self-powered",
    note: "no battery, no wires",
    pos: "left-[-8%] bottom-[14%]",
  },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden gradient-radial-accent"
    >
      <div className="relative mx-auto grid min-h-[100dvh] w-full max-w-[var(--container)] grid-cols-1 items-center gap-x-10 gap-y-16 px-6 pb-24 pt-32 md:grid-cols-12 md:gap-x-12 md:px-10 md:pb-36 md:pt-40">
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

          <motion.div
            variants={fadeUp}
            transition={{ delay: 1.35, duration: 0.7, ease: EASE_OUT_QUART }}
            className="mt-14 grid max-w-md grid-cols-3 gap-x-8 gap-y-1 text-[12px] text-fg-subtle md:mt-20"
          >
            <KeyMetric value="9" label="SCIE papers" />
            <KeyMetric value="h-8" label="Scholar h-index" />
            <KeyMetric value="29.14%" label="TENG market CAGR" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: EASE_OUT_QUART, delay: 0.2 }}
          className="relative z-10 md:col-span-5"
        >
          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-[var(--radius-2xl)] bg-bg-elevated p-2 shadow-glove ring-1 ring-inset ring-border"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(var(--radius-2xl)-8px)] bg-bg-sunken">
                <Image
                  src="/glove/glove-hero.jpg"
                  alt="Medtrix self-powered rehabilitation glove with five triboelectric sensors mounted on the dorsum, photographed dorsal and palmar."
                  fill
                  priority
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className="object-cover"
                  style={{
                    objectFit: "cover",
                    objectPosition: "8% 50%",
                    transform: "scale(2.6)",
                    transformOrigin: "8% 50%",
                  }}
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(120% 80% at 80% 0%, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0) 55%), linear-gradient(180deg, rgba(10,10,10,0) 60%, rgba(10,10,10,0.20) 100%)",
                  }}
                />
              </div>
            </motion.div>

            {SPEC_CALLOUTS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: 1.4 + i * 0.12,
                  duration: 0.6,
                  ease: EASE_OUT_QUART,
                }}
                className={`pointer-events-none absolute hidden ${s.pos} md:block`}
              >
                <div className="rounded-2xl bg-bg-elevated/90 px-4 py-3 shadow-md ring-1 ring-inset ring-border backdrop-blur">
                  <div className="text-mono-eyebrow text-fg-subtle">{s.label}</div>
                  <div className="mt-1 text-[18px] font-semibold tracking-tight text-fg">
                    {s.value}
                  </div>
                  <div className="text-[11.5px] leading-snug text-fg-muted">{s.note}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.a
          href="#problem"
          aria-label="Scroll to problem section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.6 }}
          className="group absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
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

function KeyMetric({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-[20px] font-semibold tracking-tight text-fg">{value}</span>
      <span className="mt-0.5 text-[11.5px] uppercase tracking-[0.14em] text-fg-subtle">
        {label}
      </span>
    </div>
  );
}
