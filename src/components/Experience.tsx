import { experience } from "@/data/content";
import { railGrid, railLabel } from "@/lib/styles";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <ul className="space-y-10">
        {experience.map((role, i) => (
          <li key={`${role.org}-${role.role}`}>
            <Reveal delay={i * 70}>
              <div className={railGrid}>
                <p className={railLabel}>{role.period}</p>
                <div>
                  <h3 className="font-serif text-xl">{role.role}</h3>
                  <p className="mt-1 text-sm text-ink/80">
                    {role.org}
                    {role.orgNote ? (
                      <span className="text-muted"> — {role.orgNote}</span>
                    ) : null}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {role.points.map((point) => (
                      <li
                        key={point.slice(0, 32)}
                        className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-rule"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
