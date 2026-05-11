"use client";

import { motion } from "framer-motion";
import { stagger, wordFade } from "@/lib/motion";
import { cn } from "@/lib/cn";

type WordRevealProps = {
  text: string;
  className?: string;
  wordClassName?: string;
  childDelay?: number;
  delayChildren?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

export function WordReveal({
  text,
  className,
  wordClassName,
  childDelay = 0.06,
  delayChildren = 0.05,
  as = "h1",
}: WordRevealProps) {
  const words = text.split(" ");
  const Tag = motion[as];

  return (
    <Tag
      className={cn(className)}
      initial="hidden"
      animate="visible"
      variants={stagger(childDelay, delayChildren)}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-baseline"
          aria-hidden
        >
          <motion.span
            variants={wordFade}
            className={cn("inline-block will-change-transform", wordClassName)}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
