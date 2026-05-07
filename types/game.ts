export type Language = "tagalog" | "kapampangan" | "pangasinense";

/** word on the board */
export type Word = {
  id: string;
  text: string;
  language: Language;
  translation?: string; // for non-tagalog words only.
};

/** color coding for diffuculty*/
export type GroupColor = "yellow" | "green" | "blue" | "purple";

/**
 * a group of 4 words that has a hidden connection.
 * players must identify all 4 to solve the group.
 */
export type Group = {
  id: string;
  words: Word[];
  connection: string;
  color: GroupColor;
};

/** daily puzzle with 4 groups (16 words total) */
export type Puzzle = {
  id: string;
  date: string;
  groups: Group[];
};

/**
 * runtime game state tracked while the player is solving a puzzle.
 * this is what gets persisted to localStorage for resuming later.
 */
export type GameState = {
  words: Word[];
  selectedWords: Word[];
  /** groups that have been correctly identified */
  solvedGroups: Group[];
  /** wrong guesses left before game over */
  remainingAttempts: number;
  /** current game status */
  status: "playing" | "won" | "lost";
};

/**
 * extended game state that includes the date it was saved,
 * so we can detect stale saves from previous days.
 */
export type SavedGameState = GameState & {
  date: string;
};
