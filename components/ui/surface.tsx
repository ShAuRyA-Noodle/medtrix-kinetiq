import { cn } from "@/lib/cn";

type Variant = "default" | "sunken" | "elevated" | "ink" | "accent" | "accent-bottom";

const VARIANT: Record<Variant, string> = {
  default:        "bg-bg text-fg",
  sunken:         "bg-bg-sunken text-fg",
  elevated:       "bg-bg-elevated text-fg",
  ink:            "gradient-ink-accent text-[color:var(--fg-on-ink)]",
  accent:         "gradient-radial-accent text-fg",
  "accent-bottom":"gradient-radial-accent-bottom text-fg",
};

type SurfaceProps = {
  id?: string;
  variant?: Variant;
  className?: string;
  innerClassName?: string;
  withGrid?: boolean;
  divider?: boolean;
  fullBleedInner?: boolean;
  children: React.ReactNode;
};

export function Surface({
  id,
  variant = "default",
  className,
  innerClassName,
  withGrid = false,
  divider = false,
  fullBleedInner = false,
  children,
}: SurfaceProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative isolate overflow-hidden",
        VARIANT[variant],
        divider && "section-hairline",
        className,
      )}
    >
      {withGrid && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 grid-backdrop grid-backdrop-fade opacity-60"
        />
      )}
      <div
        className={cn(
          "relative",
          !fullBleedInner && "mx-auto w-full max-w-[var(--container)] px-6 py-32 md:px-10 md:py-40",
          innerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
