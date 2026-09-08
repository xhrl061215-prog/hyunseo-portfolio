import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  /** Mono index shown beside the heading, e.g. "01". */
  index: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, index, title, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-24 border-t border-rule py-16 md:py-24"
    >
      <div className="mb-10 flex items-baseline gap-4 md:mb-12">
        <span
          aria-hidden="true"
          className="font-mono text-xs tracking-[0.2em] text-muted"
        >
          {index}
        </span>
        <h2
          id={`${id}-heading`}
          className="font-serif text-3xl font-normal tracking-tight md:text-4xl"
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
