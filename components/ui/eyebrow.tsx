import { cn } from "@/lib/cn";

type EyebrowProps = {
  items: string[];
  className?: string;
};

export function Eyebrow({ items, className }: EyebrowProps) {
  return (
    <div
      className={cn(
        "text-mono-eyebrow inline-flex flex-wrap items-center gap-x-3 gap-y-1 text-fg-muted",
        className,
      )}
    >
      {items.map((item, i) => (
        <span key={item} className="inline-flex items-center">
          <span>{item}</span>
          {i < items.length - 1 && (
            <span aria-hidden className="ml-3 inline-block size-1 rounded-full bg-fg-subtle/60" />
          )}
        </span>
      ))}
    </div>
  );
}
