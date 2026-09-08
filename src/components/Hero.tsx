import { profile } from "@/data/content";
import { btnGhost, btnPrimary } from "@/lib/styles";
import ArrowUpRight from "./ArrowUpRight";

export default function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="pt-14 pb-16 md:pt-24 md:pb-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        {profile.location}
      </p>

      <h1 className="mt-5 font-serif text-5xl font-normal tracking-tight md:text-7xl">
        {profile.name}
      </h1>

      <p className="mt-5 text-lg text-ink md:text-xl">
        {profile.role}
        <span aria-hidden="true" className="mx-2 text-muted/50">
          /
        </span>
        <span className="text-muted">{profile.institution}</span>
      </p>

      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
        {profile.tagline}
      </p>

      <div className="mt-9 flex flex-wrap gap-3">
        <a
          href={profile.cv}
          target="_blank"
          rel="noopener noreferrer"
          className={btnPrimary}
        >
          View CV
          <ArrowUpRight />
        </a>
        <a href={`mailto:${profile.email}`} className={btnGhost}>
          Email
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={btnGhost}
        >
          LinkedIn
          <ArrowUpRight />
        </a>
      </div>
    </section>
  );
}
