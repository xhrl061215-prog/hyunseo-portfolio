import { bio, education, skills } from "@/data/content";
import { railGrid, railLabel } from "@/lib/styles";
import Reveal from "./Reveal";
import Section from "./Section";

/**
 * Renders `**bold**` spans in an otherwise plain string, so bio copy can carry
 * light emphasis without pulling in a markdown dependency.
 */
function withEmphasis(text: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-medium text-ink">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

export default function About() {
  return (
    <Section id="about" index="01" title="About">
      <Reveal>
        <div className="max-w-2xl space-y-5 text-base leading-relaxed text-ink/85">
          {bio.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{withEmphasis(paragraph)}</p>
          ))}
        </div>
      </Reveal>

      <Reveal delay={80}>
        <h3 className="mt-14 font-mono text-xs uppercase tracking-[0.18em] text-muted">
          Education
        </h3>
        <ul className="mt-6 space-y-8">
          {education.map((item) => (
            <li key={`${item.institution}-${item.period}`} className={railGrid}>
              <p className={railLabel}>{item.period}</p>
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h4 className="font-serif text-xl">{item.institution}</h4>
                  <span className="font-mono text-xs text-muted">
                    {item.location}
                  </span>
                </div>
                <p className="mt-1 text-sm text-ink/80 italic">{item.credential}</p>
                {item.highlight ? (
                  <p className="mt-2 text-sm text-ink/80">{item.highlight}</p>
                ) : null}
                {item.detail ? (
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.detail}
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={120}>
        <h3 className="mt-14 font-mono text-xs uppercase tracking-[0.18em] text-muted">
          Skills
        </h3>
        <dl className="mt-6 space-y-5">
          {skills.map((group) => (
            <div key={group.label} className={railGrid}>
              <dt className={railLabel}>{group.label}</dt>
              <dd className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-rule bg-surface px-3 py-1 font-mono text-xs text-ink/80"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
