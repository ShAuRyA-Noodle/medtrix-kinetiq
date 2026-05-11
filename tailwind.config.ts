import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-elevated": "var(--bg-elevated)",
        "bg-sunken": "var(--bg-sunken)",
        "bg-ink": "var(--bg-ink)",
        "bg-ink-elevated": "var(--bg-ink-elevated)",
        fg: "var(--fg)",
        "fg-muted": "var(--fg-muted)",
        "fg-subtle": "var(--fg-subtle)",
        "fg-on-ink": "var(--fg-on-ink)",
        "fg-on-ink-muted": "var(--fg-on-ink-muted)",
        "fg-on-ink-subtle": "var(--fg-on-ink-subtle)",
        border: "var(--border)",
        "border-strong": "var(--border-strong)",
        "border-on-ink": "var(--border-on-ink)",
        "border-on-ink-strong": "var(--border-on-ink-strong)",
        accent: "var(--accent)",
        "accent-bright": "var(--accent-bright)",
        "accent-deep": "var(--accent-deep)",
        "accent-soft": "var(--accent-soft)",
        "accent-fg": "var(--accent-fg)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
