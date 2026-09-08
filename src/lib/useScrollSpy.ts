"use client";

import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently nearest the top of the viewport.
 * The asymmetric rootMargin defines a band across the upper third of the
 * screen, so the active item changes as a section crosses that band rather
 * than only when it fully enters the viewport.
 */
export function useScrollSpy(ids: string[]): string {
  const [active, setActive] = useState("");
  const key = ids.join("|");

  useEffect(() => {
    const sectionIds = key.split("|").filter(Boolean);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0 || typeof IntersectionObserver === "undefined") {
      return;
    }

    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        // Preserve document order so the topmost visible section wins.
        const current = sectionIds.find((id) => visible.has(id));
        setActive(current ?? "");
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);

  return active;
}
