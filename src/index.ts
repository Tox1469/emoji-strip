/**
 * emoji-strip
 * Detect / strip / count emoji using Unicode property escapes.
 */

// Matches a full emoji grapheme including ZWJ sequences, variation selectors,
// skin tone modifiers and keycap sequences.
const EMOJI_RE =
  /(?:\p{Extended_Pictographic}(?:\uFE0F|\u20E3)?(?:\u200D\p{Extended_Pictographic}(?:\uFE0F|\u20E3)?)*)/gu;

export function stripEmoji(s: string): string {
  if (!s) return "";
  return s.replace(EMOJI_RE, "");
}

export function countEmoji(s: string): number {
  if (!s) return 0;
  const m = s.match(EMOJI_RE);
  return m ? m.length : 0;
}

export function hasEmoji(s: string): boolean {
  if (!s) return false;
  EMOJI_RE.lastIndex = 0;
  return EMOJI_RE.test(s);
}

export function extractEmoji(s: string): string[] {
  if (!s) return [];
  return s.match(EMOJI_RE) ?? [];
}
