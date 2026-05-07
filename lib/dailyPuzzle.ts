/**
 *  this handles the daily puzzle selection and game-state persistence.
 *
 *  the "daily" mechanic works by hashing the current date into
 *  an index so every player gets the same puzzle on the same day.
 *  the game state is saved to localStorage and automatically expires
 *  when the calendar date rolls over.
 */

import { Puzzle, GameState, SavedGameState } from "@/types/game";
import { shuffleWords } from "@/lib/shuffle";
import { STORAGE_KEY, MAX_ATTEMPTS } from "./constants";

function getTodayString(): string {
  return new Date().toISOString().split("T")[0];
}

/**
 * hashing with sir achim
 */
export function getTodaysPuzzle(puzzles: Puzzle[]): Puzzle {
  const dateString = getTodayString();
  const dateNum = parseInt(dateString.replace(/-/g, ""), 10);
  const puzzleIndex = dateNum % puzzles.length;
  return puzzles[puzzleIndex];
}

export function initializeGameState(puzzle: Puzzle): GameState {
  const allWords = puzzle.groups.flatMap((group) => group.words);
  const shuffledWords = shuffleWords(allWords);

  return {
    words: shuffledWords,
    selectedWords: [],
    solvedGroups: [],
    remainingAttempts: MAX_ATTEMPTS,
    status: "playing",
  };
}

/** persists the current game state with today's date. */
export function saveGameState(gameState: GameState): void {
  if (typeof window === "undefined") return;

  const savedState: SavedGameState = {
    ...gameState,
    date: getTodayString(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedState));
}

/** try to read the saved game state from localStorage */
export function loadGameState(): SavedGameState | null {
  if (typeof window === "undefined") return null;

  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return null;

  try {
    return JSON.parse(saved) as SavedGameState;
  } catch {
    return null;
  }
}

/** checks if the saved state belongs to today's date. */
export function isStateFromToday(state: SavedGameState): boolean {
  return state.date === getTodayString();
}

/**
 * restore if today, else new game
 */
export function restoreGameState(puzzle: Puzzle): GameState {
  const saved = loadGameState();

  if (saved && isStateFromToday(saved)) {
    return {
      words: saved.words,
      selectedWords: saved.selectedWords,
      solvedGroups: saved.solvedGroups,
      remainingAttempts: saved.remainingAttempts,
      status: saved.status,
    };
  }

  return initializeGameState(puzzle);
}
