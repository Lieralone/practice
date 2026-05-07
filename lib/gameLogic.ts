/**
 *
 * all functions for evaluating player's guess
 */

import { Word, Group } from "@/types/game";
import { WORDS_PER_GROUP } from "./constants";

/**
 * checks whether two arrays of words contain exactly the same
 * words (compared by `id`), regardless of order.
 */
export function wordsMatch(a: Word[], b: Word[]): boolean {
  if (a.length !== b.length) return false;

  const aIds = a.map((w) => w.id).sort();
  const bIds = b.map((w) => w.id).sort();

  return aIds.every((id, index) => id === bIds[index]);
}

/**
 * validates the player's 4-word selection against all unsolved
 * groups. returns the matching group if correct, or null if no group matches.
 */
export function checkGuess(
  selected: Word[],
  groups: Group[],
  solvedGroups: Group[],
): Group | null {
  // must have exactly 4 words selected to submit
  if (selected.length !== WORDS_PER_GROUP) return null;

  // only check groups that haven't been solved yet
  const unsolvedGroups = groups.filter(
    (group) => !solvedGroups.some((sg) => sg.id === group.id),
  );

  for (const group of unsolvedGroups) {
    if (wordsMatch(selected, group.words)) {
      return group;
    }
  }

  return null;
}
