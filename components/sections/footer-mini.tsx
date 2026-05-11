import Link from "next/link";

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/akshpreetkaur93/" },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=dQqEg0EAAAAJ&hl=en" },
  { label: "ORCID", href: "https://orcid.org/0000-0003-3252-7635" },
  { label: "X", href: "https://x.com/Akshpre22163297" },
];

export function FooterMini() {
  return (
    <footer className="relative mt-32 border-t border-border">
      <div className="mx-auto flex w-full max-w-[var(--container)] flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="text-[14px] font-medium tracking-tight text-fg">
            Medtrix Technologies Pvt. Ltd
          </p>
          <p className="mt-1 max-w-md text-[12.5px] leading-relaxed text-fg-subtle">
            Punjabi University, Patiala, Punjab 147001, India. Research-grade prototype, not a
            medical device under any regulatory framework as of this date.
          </p>
        </div>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-fg-muted">
          {SOCIALS.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-fg"
              >
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto w-full max-w-[var(--container)] px-6 pb-8 md:px-10">
        <p className="text-[11px] uppercase tracking-[0.16em] text-fg-subtle">
          © 2026 Medtrix Technologies Pvt. Ltd
        </p>
      </div>
    </footer>
  );
}
