import { profile } from "@/data/content";
import ArrowUpRight from "./ArrowUpRight";
import Reveal from "./Reveal";
import Section from "./Section";

const links = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "hyunseolilykim",
    href: profile.linkedin,
    external: true,
  },
  {
    label: "Curriculum Vitae",
    value: "cv.pdf",
    href: profile.cv,
    external: true,
  },
];

export default function Contact() {
  return (
    <Section id="contact" index="05" title="Contact">
      <Reveal>
        <p className="max-w-xl text-base leading-relaxed text-muted">
          Open to research collaborations, internships, and conversations about
          medical devices, soft robotics, and computational biology. The quickest
          way to reach me is by email.
        </p>

        <ul className="mt-10 border-t border-rule">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule py-4 transition-colors duration-200 hover:text-accent"
              >
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted transition-colors group-hover:text-accent">
                  {link.label}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm break-all">
                  {link.value}
                  {link.external ? <ArrowUpRight /> : null}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-8 font-mono text-xs uppercase tracking-[0.14em] text-muted">
          Based in {profile.location}
        </p>
      </Reveal>
    </Section>
  );
}
