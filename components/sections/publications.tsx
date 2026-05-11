"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { Surface } from "@/components/ui/surface";
import { ArrowRightIcon } from "@/components/ui/icons";
import { PUBLICATIONS, SCHOLAR_METRICS } from "@/content/publications";
import { fadeUp, stagger, EASE_OUT_QUART } from "@/lib/motion";
import { cn } from "@/lib/cn";

export function Publications() {
  const sorted = [...PUBLICATIONS].sort((a, b) => b.year - a.year);

  return (
    <Surface id="publications" variant="default" divider>
      <SectionHeader
        sectionNumber="06"
        eyebrow="Publications"
        title="Nine peer-reviewed papers. Every number on this page is in one of them."
        description="Eight SCIE-indexed journal publications across Elsevier, Royal Society of Chemistry, Springer, World Scientific, and Taylor and Francis, plus one paper under review."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: EASE_OUT_QUART }}
        className="mt-14 grid grid-cols-2 gap-3 rounded-[var(--radius-2xl)] bg-bg-elevated p-6 ring-1 ring-inset ring-border sm:grid-cols-4 md:gap-6 md:p-8"
      >
        <MetricCell value={`${SCHOLAR_METRICS.totalPapers}`} label="SCIE papers" />
        <MetricCell value={`${SCHOLAR_METRICS.hIndex}`} label="Scholar h-index" />
        <MetricCell value={`${SCHOLAR_METRICS.citations}`} label="Citations" />
        <MetricCell value={`${SCHOLAR_METRICS.cumulativeIF}`} label="Cumulative IF" />
      </motion.div>

      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger(0.06, 0.05)}
        className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2"
      >
        {sorted.map((pub) => (
          <motion.li
            key={pub.title}
            variants={fadeUp}
            className={cn(
              "group relative flex flex-col rounded-[var(--radius-xl)] bg-bg-elevated p-6 ring-1 ring-inset ring-border transition-shadow duration-500 hover:shadow-md",
              pub.featured && "ring-border-strong",
            )}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-mono-eyebrow text-fg-subtle">
                {pub.journal}
              </span>
              <div className="flex items-center gap-1.5">
                {pub.firstAuthor && (
                  <span className="inline-flex items-center rounded-full bg-accent-soft px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-[0.1em] text-accent-deep">
                    1st author
                  </span>
                )}
                {pub.status === "under-review" && (
                  <span className="inline-flex items-center rounded-full bg-bg-sunken px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-[0.1em] text-fg-muted ring-1 ring-inset ring-border">
                    in review
                  </span>
                )}
                {pub.impactFactor && (
                  <span className="text-[10px] font-mono text-fg-subtle">
                    IF {pub.impactFactor.toFixed(1)}
                  </span>
                )}
              </div>
            </div>

            <h3 className="mt-3 text-[15.5px] font-semibold leading-[1.3] tracking-tight text-fg">
              {pub.title}
            </h3>

            <p className="mt-3 text-[12.5px] leading-relaxed text-fg-muted">
              {pub.authors}
            </p>

            {pub.note && (
              <p className="mt-2 text-[12px] italic leading-relaxed text-accent-deep">
                {pub.note}
              </p>
            )}

            <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
              <span className="text-[12px] font-mono text-fg-subtle">
                {pub.year}
              </span>
              {pub.doi && (
                <Link
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[12px] font-medium text-fg-muted transition-colors hover:text-fg"
                >
                  <span className="font-mono">{pub.doi}</span>
                  <ArrowRightIcon size={11} className="rotate-[-45deg]" />
                </Link>
              )}
            </div>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between"
      >
        <p className="text-[12.5px] text-fg-subtle">
          Scholar profile is the source of truth for live citation counts.
        </p>
        <Link
          href={SCHOLAR_METRICS.scholarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-fg transition-colors"
        >
          View on Google Scholar
          <ArrowRightIcon
            size={13}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </Link>
      </motion.div>
    </Surface>
  );
}

function MetricCell({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="heading-display text-[clamp(1.6rem,2.8vw,2.4rem)] tabular-nums text-fg">
        {value}
      </span>
      <span className="mt-1 text-[11px] uppercase tracking-[0.14em] text-fg-subtle">
        {label}
      </span>
    </div>
  );
}
