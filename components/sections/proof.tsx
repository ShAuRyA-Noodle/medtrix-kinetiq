"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { Surface } from "@/components/ui/surface";
import { ProofTile } from "@/components/ui/proof-tile";

const TILES = [
  {
    label: "Peak Voc",
    value: "195.4 V",
    numericTarget: 195.4,
    numericFormat: (n: number) => `${n.toFixed(1)} V`,
    caption: "Open circuit voltage of the 4 wt% MWCNT-PDMS SW-TENG under 15 N tapping.",
    source: "Paper 2 abstract and Fig 6(a), Microelectronic Engineering 275 (2023) 111992",
  },
  {
    label: "Gain vs PDMS",
    value: "~79%",
    caption: "Triboelectric output enhancement of the 4 wt% nanocomposite over the pure PDMS baseline.",
    source: "Paper 2 abstract",
  },
  {
    label: "Durability",
    value: "500 cycles",
    numericTarget: 500,
    numericFormat: (n: number) => `${Math.round(n).toLocaleString()}`,
    caption: "Stability of the SW-TENG verified across 500 contact-separation cycles, negligible degradation.",
    source: "Paper 2 Fig 6(b)",
  },
  {
    label: "Charge time",
    value: "~27 s",
    caption: "10 µF capacitor charged to 5 V via continuous finger tapping, sufficient to drive a digital thermometer.",
    source: "Paper 2 Section 4.3.1 and Fig 7(c)",
  },
  {
    label: "Sensors / glove",
    value: "5",
    numericTarget: 5,
    numericFormat: (n: number) => `${Math.round(n)}`,
    caption: "One SW-TENG per finger, mounted on the dorsum of the fabric glove.",
    source: "Paper 2 Fig 7(d), Section 4.3.2",
  },
  {
    label: "Mechanical compliance",
    value: "108.21%",
    numericTarget: 108.21,
    numericFormat: (n: number) => `${n.toFixed(2)}%`,
    caption: "Elongation at break of the 4 wt% MWCNT-PDMS film, highest of all weight ratios tested.",
    source: "Paper 2 Fig 5(d)",
  },
];

export function Proof() {
  return (
    <Surface id="proof" variant="default" divider>
      <SectionHeader
        sectionNumber="04"
        eyebrow="Proof"
        title="Numbers we publish, sourced verbatim."
        description="Every figure on this page is taken directly from peer-reviewed publications. Hover any tile to see the exact citation."
      />

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TILES.map((t) => (
          <ProofTile
            key={t.label}
            label={t.label}
            value={t.value}
            numericTarget={t.numericTarget}
            numericFormat={t.numericFormat}
            caption={t.caption}
            source={t.source}
          />
        ))}
      </div>
    </Surface>
  );
}
