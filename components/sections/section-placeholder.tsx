import { cn } from "@/lib/cn";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionPlaceholder({ id, eyebrow, title, description, className }: Props) {
  return (
    <section
      id={id}
      className={cn(
        "relative mx-auto w-full max-w-[var(--container)] px-6 py-32 md:px-10 md:py-40",
        className,
      )}
    >
      <div className="text-mono-eyebrow text-fg-subtle">{eyebrow}</div>
      <h2 className="heading-display mt-5 max-w-3xl text-[clamp(2rem,4.4vw,3.4rem)] text-balance text-fg">
        {title}
      </h2>
      {description && (
        <p className="mt-6 max-w-2xl text-[17px] leading-[1.55] text-fg-muted text-pretty md:text-[18px]">
          {description}
        </p>
      )}
      <div className="mt-12 grid h-48 place-items-center rounded-[var(--radius-xl)] bg-bg-sunken/60 ring-1 ring-inset ring-border">
        <span className="text-mono-eyebrow text-fg-subtle">Section under construction</span>
      </div>
    </section>
  );
}
