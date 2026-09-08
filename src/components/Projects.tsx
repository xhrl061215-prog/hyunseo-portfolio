import { projects } from "@/data/content";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="research" index="03" title="Research & Projects">
      <ul className="space-y-6">
        {projects.map((project, i) => (
          <li key={project.title}>
            <Reveal delay={i * 60}>
              <article className="rounded-lg border border-rule bg-surface p-6 transition-colors duration-300 hover:border-accent/40 md:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                  {project.period}
                </p>

                <h3 className="mt-3 font-serif text-xl leading-snug md:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm text-muted">
                  {project.org}
                  {project.location ? (
                    <>
                      <span aria-hidden="true" className="mx-1.5 text-muted/60">
                        ·
                      </span>
                      {project.location}
                    </>
                  ) : null}
                </p>

                <ul className="mt-4 space-y-2">
                  {project.points.map((point) => (
                    <li
                      key={point.slice(0, 32)}
                      className="relative pl-4 text-sm leading-relaxed text-ink/80 before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-rule"
                    >
                      {point}
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs text-accent"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
