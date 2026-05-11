"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { EASE_OUT_QUART } from "@/lib/motion";

const SITE_LINKS = [
  { label: "Technology",    href: "#technology"    },
  { label: "Product",       href: "#product"       },
  { label: "Proof",         href: "#proof"         },
  { label: "Clinical",      href: "#clinical"      },
  { label: "Publications",  href: "#publications"  },
  { label: "Founder",       href: "#founder"       },
  { label: "Roadmap",       href: "#roadmap"       },
  { label: "FAQ",           href: "#faq"           },
  { label: "Contact",       href: "#contact"       },
];

const FOUNDER_LINKS = [
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=dQqEg0EAAAAJ&hl=en" },
  { label: "ORCID",          href: "https://orcid.org/0000-0003-3252-7635" },
  { label: "LinkedIn",       href: "https://www.linkedin.com/in/akshpreetkaur93/" },
  { label: "X",              href: "https://x.com/Akshpre22163297" },
];

export function FooterMini() {
  return (
    <footer className="relative isolate overflow-hidden gradient-ink-accent text-[color:var(--fg-on-ink)]">
      <div className="mx-auto w-full max-w-[var(--container)] px-6 pb-10 pt-20 md:px-10 md:pb-14 md:pt-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <Logomark />
              <span className="text-[15px] font-semibold tracking-tight text-[color:var(--fg-on-ink)]">
                Medtrix
              </span>
            </div>
            <p className="mt-6 max-w-sm text-[14.5px] leading-[1.55] text-[color:var(--fg-on-ink-muted)]">
              Self-powered triboelectric sensors for rehabilitation. Energy harvested from
              the patient&rsquo;s own motion. No batteries. No wires. No downtime.
            </p>
            <p className="mt-8 text-[11.5px] uppercase tracking-[0.16em] text-[color:var(--fg-on-ink-subtle)]">
              Research-grade prototype. Not a medical device under any regulatory framework
              as of this date.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-mono-eyebrow text-[color:var(--fg-on-ink-subtle)]">Site</div>
            <ul className="mt-5 space-y-2.5">
              {SITE_LINKS.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-[13.5px] tracking-tight text-[color:var(--fg-on-ink-muted)] transition-colors hover:text-[color:var(--fg-on-ink)]"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-mono-eyebrow text-[color:var(--fg-on-ink-subtle)]">Founder</div>
            <ul className="mt-5 space-y-2.5">
              {FOUNDER_LINKS.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13.5px] tracking-tight text-[color:var(--fg-on-ink-muted)] transition-colors hover:text-[color:var(--fg-on-ink)]"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 text-mono-eyebrow text-[color:var(--fg-on-ink-subtle)]">Address</div>
            <p className="mt-3 text-[13px] leading-[1.55] text-[color:var(--fg-on-ink-muted)]">
              Medtrix Technologies Pvt. Ltd
              <br />
              Punjabi University, Patiala
              <br />
              Punjab 147001, India
            </p>
            <p className="mt-4 text-[13px] tracking-tight text-[color:var(--fg-on-ink-muted)]">
              <a
                href="mailto:medtrixtechnologies@gmail.com"
                className="underline decoration-[color:var(--fg-on-ink-subtle)] underline-offset-4 transition-colors hover:text-[color:var(--fg-on-ink)]"
              >
                medtrixtechnologies@gmail.com
              </a>
            </p>
          </div>
        </div>

        <MegaWordmark />

        <div className="mt-12 flex flex-col gap-3 border-t border-[color:var(--border-on-ink)] pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--fg-on-ink-subtle)]">
            © 2026 Medtrix Technologies Pvt. Ltd
          </p>
          <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--fg-on-ink-subtle)]">
            Power the body with the body
          </p>
        </div>
      </div>
    </footer>
  );
}

function Logomark() {
  return (
    <span
      aria-hidden
      className="grid size-7 place-items-center rounded-[10px] text-bg"
      style={{
        backgroundImage:
          "linear-gradient(135deg, color-mix(in srgb, var(--accent-bright) 70%, var(--fg-on-ink)) 0%, var(--accent-deep) 100%)",
      }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M0.5 11 L2 7 L3 11 L4.5 4 L5.5 11 L7 2 L8.5 11 L9.5 4 L11 11 L12 7 L13.5 11"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[color:var(--bg-ink)]"
        />
      </svg>
    </span>
  );
}

function MegaWordmark() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 1.1, ease: EASE_OUT_QUART }}
      className="relative mt-20 hidden md:mt-28 md:block"
      aria-hidden
    >
      <div
        className="heading-mega select-none text-center text-[clamp(6rem,18vw,16rem)] leading-none"
        style={{
          backgroundImage:
            "linear-gradient(180deg, color-mix(in srgb, var(--fg-on-ink) 16%, transparent) 0%, color-mix(in srgb, var(--accent-bright) 18%, transparent) 60%, transparent 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Medtrix
      </div>
    </motion.div>
  );
}
