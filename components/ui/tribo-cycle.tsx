"use client";

import { motion } from "framer-motion";
import { EASE_OUT_QUART } from "@/lib/motion";

export function TriboCycle({ className }: { className?: string }) {
  return (
    <div className={`relative ${className ?? ""}`}>
      <svg
        viewBox="0 0 400 220"
        className="h-auto w-full"
        fill="none"
        aria-label="Schematic of the triboelectric contact-separation cycle"
      >
        <defs>
          <linearGradient id="topLayer" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent-bright)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="botLayer" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--fg)" stopOpacity="0.92" />
            <stop offset="100%" stopColor="var(--fg)" stopOpacity="0.78" />
          </linearGradient>
        </defs>

        <motion.line
          x1="20"
          y1="190"
          x2="380"
          y2="190"
          stroke="currentColor"
          strokeOpacity="0.18"
          strokeWidth="1.2"
          strokeDasharray="3 5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE_OUT_QUART }}
        />

        <motion.g
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: [-10, 30, -10], opacity: 1 }}
          transition={{
            duration: 3.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <rect
            x="100"
            y="60"
            width="200"
            height="22"
            rx="6"
            fill="url(#topLayer)"
          />
          <text
            x="200"
            y="50"
            textAnchor="middle"
            fill="var(--fg-muted)"
            fontSize="10"
            fontFamily="var(--font-mono)"
            letterSpacing="1.6"
          >
            MWCNT-PDMS, 4 wt%
          </text>
        </motion.g>

        <g>
          <rect
            x="100"
            y="140"
            width="200"
            height="22"
            rx="6"
            fill="url(#botLayer)"
          />
          <text
            x="200"
            y="178"
            textAnchor="middle"
            fill="var(--fg-muted)"
            fontSize="10"
            fontFamily="var(--font-mono)"
            letterSpacing="1.6"
          >
            ALUMINIUM TRIBOPOSITIVE LAYER
          </text>
        </g>

        {[120, 160, 200, 240, 280].map((cx, i) => (
          <motion.g key={`charge-pos-${cx}`}>
            <motion.circle
              cx={cx}
              cy={130}
              r={3}
              fill="var(--accent-bright)"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                cy: [102, 130, 102],
              }}
              transition={{
                duration: 3.6,
                delay: i * 0.15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.g>
        ))}
        {[120, 160, 200, 240, 280].map((cx, i) => (
          <motion.text
            key={`charge-text-pos-${cx}`}
            x={cx}
            y={130}
            textAnchor="middle"
            fontSize="9"
            fontWeight="600"
            fill="var(--accent-bright)"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [125, 130, 125],
            }}
            transition={{
              duration: 3.6,
              delay: i * 0.15 + 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            +
          </motion.text>
        ))}

        {[60, 350].map((cx) => (
          <motion.g key={`wire-${cx}`}>
            <motion.line
              x1={cx === 60 ? 60 : 350}
              y1="71"
              x2={cx === 60 ? 60 : 350}
              y2="151"
              stroke="var(--fg)"
              strokeOpacity="0.4"
              strokeWidth="1.2"
              strokeDasharray="2 3"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: EASE_OUT_QUART, delay: 0.4 }}
            />
          </motion.g>
        ))}

        <motion.path
          d="M 70 71 L 80 71 L 80 100"
          stroke="var(--fg-subtle)"
          strokeOpacity="0.5"
          strokeWidth="1.2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />

        <motion.text
          x="200"
          y="115"
          textAnchor="middle"
          fontSize="11"
          fill="var(--fg-subtle)"
          fontFamily="var(--font-mono)"
          letterSpacing="1.4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          CONTACT  ·  SEPARATION  ·  REPEAT
        </motion.text>
      </svg>

      <div className="mt-5 grid grid-cols-3 gap-3 text-center text-[11px] uppercase tracking-[0.14em] text-fg-subtle">
        <div>
          <span className="block text-[14px] font-semibold tracking-tight text-fg">195.4 V</span>
          Peak Voc
        </div>
        <div>
          <span className="block text-[14px] font-semibold tracking-tight text-fg">No bias</span>
          External power
        </div>
        <div>
          <span className="block text-[14px] font-semibold tracking-tight text-fg">No battery</span>
          On-body source
        </div>
      </div>
    </div>
  );
}
