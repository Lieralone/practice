export const STORAGE_KEY = "kanunutan_gameState";
export const MAX_ATTEMPTS = 5;
export const WORDS_PER_GROUP = 4;
export const TOTAL_GROUPS = 4;
export const GAME_NAME = "Kanunutan";
export const GAME_TAGLINE = "Ideya";

export const GROUP_THEME = {
  yellow: {
    accent: "var(--group-yellow)",
    bg: "var(--group-yellow-bg)",
    emoji: "🟨",
    label: "Madali",
  },
  green: {
    accent: "var(--group-green)",
    bg: "var(--group-green-bg)",
    emoji: "🟩",
    label: "Katamtaman",
  },
  blue: {
    accent: "var(--group-blue)",
    bg: "var(--group-blue-bg)",
    emoji: "🟦",
    label: "Mahirap",
  },
  purple: {
    accent: "var(--group-purple)",
    bg: "var(--group-purple-bg)",
    emoji: "🟪",
    label: "Pinakamahirap",
  },
} as const;

export type GroupColor = keyof typeof GROUP_THEME;
