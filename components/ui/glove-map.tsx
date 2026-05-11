"use client";

import { motion } from "framer-motion";
import { EASE_OUT_QUART } from "@/lib/motion";

const FINGERS = [
  { name: "Thumb",  x:  44, fingerTop:  170, fingerBottom: 260, sensorX: 44, sensorY: 196, rotate: -22, voltage: "30°" },
  { name: "Index",  x:  96, fingerTop:   48, fingerBottom: 192, sensorX: 96, sensorY:  72, rotate:   0, voltage: "60°" },
  { name: "Middle", x: 140, fingerTop:   24, fingerBottom: 192, sensorX:140, sensorY:  48, rotate:   0, voltage: "90°" },
  { name: "Ring",   x: 184, fingerTop:   44, fingerBottom: 192, sensorX:184, sensorY:  68, rotate:   0, voltage: "60°" },
  { name: "Little", x: 224, fingerTop:   72, fingerBottom: 192, sensorX:224, sensorY:  96, rotate:   0, voltage: "30°" },
];

const SENSOR_W = 26;
const SENSOR_H = 30;

export function GloveMap({ className }: { className?: string }) {
  return (
    <div className={`relative ${className ?? ""}`}>
      <svg
        viewBox="0 0 280 320"
        className="h-auto w-full"
        fill="none"
        aria-label="Schematic dorsal view of the Medtrix Rehab Glove showing five smart wearable triboelectric nanogenerators, one per finger"
      >
        <defs>
          <linearGradient id="palmFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent-soft)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <radialGradient id="sensorGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent-bright)" stopOpacity="0.5" />
            <stop offset="60%" stopColor="var(--accent)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <motion.rect
          x="46"
          y="170"
          width="200"
          height="118"
          rx="40"
          stroke="currentColor"
          strokeOpacity="0.18"
          strokeWidth="1.4"
          fill="url(#palmFill)"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.4, ease: EASE_OUT_QUART }}
        />

        <motion.rect
          x="80"
          y="280"
          width="132"
          height="32"
          rx="14"
          stroke="currentColor"
          strokeOpacity="0.18"
          strokeWidth="1.4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.4, ease: EASE_OUT_QUART }}
        />

        {FINGERS.map((f, i) => (
          <FingerStrip
            key={f.name}
            index={i}
            x={f.x}
            top={f.fingerTop}
            bottom={f.fingerBottom}
            rotate={f.rotate}
            sensorX={f.sensorX}
            sensorY={f.sensorY}
            name={f.name}
          />
        ))}
      </svg>

      <div className="mt-6 grid grid-cols-5 gap-2 text-center md:gap-3">
        {FINGERS.map((f, i) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 1.4 + i * 0.08, ease: EASE_OUT_QUART }}
            className="flex flex-col items-center"
          >
            <span className="text-[9.5px] uppercase tracking-[0.14em] text-fg-subtle">
              {f.name}
            </span>
            <span className="mt-1 inline-flex items-center rounded-full bg-accent-soft px-1.5 py-0.5 text-[9.5px] font-medium tabular-nums tracking-tight text-accent-deep">
              {f.voltage}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

type FingerStripProps = {
  index: number;
  x: number;
  top: number;
  bottom: number;
  rotate: number;
  sensorX: number;
  sensorY: number;
  name: string;
};

function FingerStrip({ index, x, top, bottom, rotate, sensorX, sensorY }: FingerStripProps) {
  const stripWidth = 28;
  const halfW = stripWidth / 2;
  const baseDelay = 0.5 + index * 0.12;

  return (
    <g
      transform={
        rotate !== 0
          ? `rotate(${rotate} ${x} ${bottom - 10})`
          : undefined
      }
    >
      <motion.rect
        x={x - halfW}
        y={top}
        width={stripWidth}
        height={bottom - top}
        rx={halfW}
        stroke="currentColor"
        strokeOpacity="0.18"
        strokeWidth="1.4"
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: baseDelay, ease: EASE_OUT_QUART }}
      />

      <motion.circle
        cx={sensorX}
        cy={sensorY}
        r={26}
        fill="url(#sensorGlow)"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, delay: baseDelay + 0.2, ease: EASE_OUT_QUART }}
      />

      <motion.rect
        x={sensorX - SENSOR_W / 2}
        y={sensorY - SENSOR_H / 2}
        width={SENSOR_W}
        height={SENSOR_H}
        rx={6}
        fill="var(--bg-elevated)"
        stroke="var(--accent)"
        strokeWidth="1.4"
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: baseDelay + 0.25, ease: EASE_OUT_QUART }}
      />

      <motion.circle
        cx={sensorX}
        cy={sensorY}
        r={3}
        fill="var(--accent)"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{
          duration: 2.4,
          delay: baseDelay + 0.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.line
        x1={sensorX - SENSOR_W / 2 + 3}
        y1={sensorY + SENSOR_H / 2 + 6}
        x2={sensorX + SENSOR_W / 2 - 3}
        y2={sensorY + SENSOR_H / 2 + 6}
        stroke="var(--accent)"
        strokeWidth="1.2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: baseDelay + 0.5, ease: EASE_OUT_QUART }}
      />
    </g>
  );
}
