/**
 *
 * Knuth shuffle algorithm
 */

import { Word } from "@/types/game";

export function shuffleWords(words: Word[]): Word[] {
  const shuffled = [...words];

  for (let i = shuffled.length - 1; i > 0; i--) {
    // pick a random index from 0..i
    const j = Math.floor(Math.random() * (i + 1));
    // swap elements at positions i and j
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}
