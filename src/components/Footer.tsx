import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-rule py-10">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-2 px-6 font-mono text-xs text-muted md:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Built with Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
