import { awards } from "@/data/content";
import { railGrid, railLabel } from "@/lib/styles";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Awards() {
  return (
    <Section id="awards" index="04" title="Awards & Distinctions">
      <ul className="space-y-6">
        {awards.map((award, i) => (
          <li key={`${award.title}-${award.detail ?? ""}-${award.year}`}>
            <Reveal delay={i * 40}>
              <div className={railGrid}>
                <p className={railLabel}>{award.year}</p>
                <div>
                  <h3 className="text-base text-ink">{award.title}</h3>
                  {award.detail ? (
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {award.detail}
                    </p>
                  ) : null}
                  {award.project ? (
                    <p className="mt-1.5 text-sm leading-relaxed text-muted/85 italic">
                      {award.project}
                    </p>
                  ) : null}
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
