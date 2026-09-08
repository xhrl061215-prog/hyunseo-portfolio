"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/data/content";
import { useScrollSpy } from "@/lib/useScrollSpy";

const sectionIds = nav.map((item) => item.id);

export default function Header() {
  const active = useScrollSpy(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu if the viewport grows past the md breakpoint.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between gap-4 px-6 md:h-16 md:px-8">
        <a
          href="#top"
          className="font-serif text-base tracking-tight transition-colors hover:text-accent md:text-lg"
        >
          {profile.name}
        </a>

        <nav aria-label="Sections" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {nav.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`border-b py-1 text-sm transition-colors duration-200 ${
                      isActive
                        ? "border-accent text-accent"
                        : "border-transparent text-muted hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-4 py-1.5 text-xs font-medium text-paper transition-colors duration-200 hover:bg-ink md:text-sm"
          >
            View CV
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="-mr-2 flex h-9 w-9 items-center justify-center rounded-full text-ink transition-colors hover:text-accent md:hidden"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <>
                  <path d="M4 4l10 10" />
                  <path d="M14 4L4 14" />
                </>
              ) : (
                <>
                  <path d="M2.5 5h13" />
                  <path d="M2.5 9h13" />
                  <path d="M2.5 13h13" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-nav"
          aria-label="Sections"
          className="border-t border-rule bg-paper md:hidden"
        >
          <ul className="mx-auto max-w-3xl px-6 py-2">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block border-b border-rule/60 py-3 text-sm last:border-b-0 ${
                    active === item.id ? "text-accent" : "text-ink"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
