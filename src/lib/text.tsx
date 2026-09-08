import type { ReactNode } from "react";

/** Hangul syllables, plus conjoining and compatibility jamo. */
const HANGUL = /([가-힣ᄀ-ᇿ㄰-㆏]+)/g;

/**
 * Tags runs of Hangul with `lang="ko"` so screen readers switch to a Korean
 * voice instead of reading the syllables with an English one, and so the
 * browser resolves them against the Korean face in the font stack.
 */
export function withKorean(text: string): ReactNode[] {
  return text.split(HANGUL).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} lang="ko">
        {part}
      </span>
    ) : (
      part
    ),
  );
}
