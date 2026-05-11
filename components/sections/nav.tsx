"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MenuIcon, CloseIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { label: "Technology", href: "#technology" },
  { label: "Product", href: "#product" },
  { label: "Proof", href: "#proof" },
  { label: "Founder", href: "#founder" },
  { label: "Press", href: "#press" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[box-shadow,background] duration-500",
        scrolled ? "glass hairline-bottom" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[var(--container)] items-center justify-between px-6 md:h-[72px] md:px-10">
        <Link href="/" className="group flex items-center gap-2.5" aria-label="Medtrix home">
          <Logomark />
          <span className="text-[15px] font-semibold tracking-tight">Medtrix</span>
        </Link>

        <nav className="hidden md:flex" aria-label="Primary">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group relative inline-flex h-9 items-center rounded-full px-3.5 text-[13.5px] font-medium tracking-tight text-fg-muted transition-colors duration-300 hover:text-fg"
                >
                  <span>{item.label}</span>
                  <span className="pointer-events-none absolute inset-0 rounded-full bg-fg/0 transition-colors duration-300 group-hover:bg-fg/[0.04]" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="primary"
            withArrow
            className="hidden h-10 px-5 text-[13.5px] md:inline-flex"
            onClick={() => {
              const el = document.querySelector("#contact");
              el?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            Pilot
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-full ring-1 ring-inset ring-border md:hidden"
          >
            {open ? <CloseIcon size={18} /> : <MenuIcon size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="glass hairline-bottom md:hidden"
          >
            <ul className="mx-auto flex max-w-[var(--container)] flex-col px-6 py-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-[15px] font-medium tracking-tight text-fg-muted hover:text-fg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Logomark() {
  return (
    <span
      aria-hidden
      className="grid size-7 place-items-center rounded-[10px] bg-fg text-bg"
      style={{
        backgroundImage:
          "linear-gradient(135deg, var(--fg) 0%, color-mix(in srgb, var(--accent-deep) 65%, var(--fg)) 100%)",
      }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M2 11 L2 3 L7 8 L12 3 L12 11"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-bg"
        />
      </svg>
    </span>
  );
}
