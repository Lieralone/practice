/*
 * custom hook that encapsulates all the game logic:
 *   - initializing or restoring the game from localStorage.
 *   - selecting and deselecting words.
 *   - submitting a guess (correct -> solve group, wrong -> lose a life).
 *   - shuffling remaining words.
 */

"use client";

import { useEffect, useState, useCallback } from "react";
import { puzzles } from "@/data/puzzles";
import { GameState, Word, Puzzle } from "@/types/game";
import {
  getTodaysPuzzle,
  restoreGameState,
  saveGameState,
} from "@/lib/dailyPuzzle";
import { shuffleWords } from "@/lib/shuffle";
import {
  WORDS_PER_GROUP,
  TOTAL_GROUPS,
  GAME_NAME,
  STORAGE_KEY,
} from "@/lib/constants";
import { checkGuess } from "@/lib/gameLogic";

/** return type for the useGameState hook */
export interface UseGameStateReturn {
  puzzle: Puzzle | null;
  gameState: GameState | null;
  isLoading: boolean;
  showWinModal: boolean;
  showLoseModal: boolean;
  handleSelectWord: (word: Word) => void;
  handleSubmit: () => void;
  handleShuffle: () => void;
  dismissWinModal: () => void;
  dismissLoseModal: () => void;
  resetGame: () => void;
}

export function useGameState(): UseGameStateReturn {
  const [puzzle, setPuzzle] = useState<Puzzle | null>(null);
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showWinModal, setShowWinModal] = useState(false);
  const [showLoseModal, setShowLoseModal] = useState(false);

  // initialise game on first render
  useEffect(() => {
    const todaysPuzzle = getTodaysPuzzle(puzzles);
    setPuzzle(todaysPuzzle);

    const restoredState = restoreGameState(todaysPuzzle);
    setGameState(restoredState);
    setIsLoading(false);

    // if the restored game was already won/lost, show the modal
    if (restoredState.status === "won") setShowWinModal(true);
    if (restoredState.status === "lost") setShowLoseModal(true);
  }, []);

  // persist state to localStorage whenever it changes
  const persistState = useCallback((state: GameState) => {
    setGameState(state);
    saveGameState(state);
  }, []);

  // toggle word selection
  const handleSelectWord = useCallback(
    (word: Word) => {
      if (!gameState || gameState.status !== "playing") return;

      // ignore words that belong to solved groups
      const isSolved = gameState.solvedGroups.some((group) =>
        group.words.some((w) => w.id === word.id),
      );
      if (isSolved) return;

      const isAlreadySelected = gameState.selectedWords.some(
        (w) => w.id === word.id,
      );

      let updatedSelection: Word[];

      if (isAlreadySelected) {
        //deselect the word
        updatedSelection = gameState.selectedWords.filter(
          (w) => w.id !== word.id,
        );
      } else if (gameState.selectedWords.length >= WORDS_PER_GROUP) {
        //already at max selection - ignore
        return;
      } else {
        // add to selection
        updatedSelection = [...gameState.selectedWords, word];
      }

      persistState({ ...gameState, selectedWords: updatedSelection });
    },
    [gameState, persistState],
  );

  //submit the current 4-word guess
  const handleSubmit = useCallback(() => {
    if (
      !gameState ||
      !puzzle ||
      gameState.selectedWords.length !== WORDS_PER_GROUP
    )
      return;

    const matchedGroup = checkGuess(
      gameState.selectedWords,
      puzzle.groups,
      gameState.solvedGroups,
    );

    if (matchedGroup) {
      // correct guess - add group to solved list
      const newSolvedGroups = [...gameState.solvedGroups, matchedGroup];

      // remove solved words from the board
      const remainingWords = gameState.words.filter(
        (word) =>
          !newSolvedGroups.some((group) =>
            group.words.some((w) => w.id === word.id),
          ),
      );

      const isWon = newSolvedGroups.length === TOTAL_GROUPS;

      const newState: GameState = {
        words: remainingWords,
        selectedWords: [],
        solvedGroups: newSolvedGroups,
        remainingAttempts: gameState.remainingAttempts,
        status: isWon ? "won" : "playing",
      };

      persistState(newState);
      if (isWon) setShowWinModal(true);
    } else {
      //wrong guess -> deduct an attempt
      const newAttempts = gameState.remainingAttempts - 1;
      const isLost = newAttempts <= 0;

      const newState: GameState = {
        ...gameState,
        selectedWords: [],
        remainingAttempts: newAttempts,
        status: isLost ? "lost" : "playing",
      };

      persistState(newState);
      if (isLost) setShowLoseModal(true);
    }
  }, [gameState, puzzle, persistState]);

  //shuffle remaining words on the board
  const handleShuffle = useCallback(() => {
    if (!gameState || gameState.status !== "playing") return;

    const shuffled = shuffleWords(gameState.words);
    persistState({ ...gameState, words: shuffled, selectedWords: [] });
  }, [gameState, persistState]);

  //modal dismiss handlers
  const dismissWinModal = useCallback(() => setShowWinModal(false), []);
  const dismissLoseModal = useCallback(() => setShowLoseModal(false), []);

  //full game reset (clears localStorage)
  const resetGame = useCallback(() => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(STORAGE_KEY);
    window.location.reload();
  }, []);

  return {
    puzzle,
    gameState,
    isLoading,
    showWinModal,
    showLoseModal,
    handleSelectWord,
    handleSubmit,
    handleShuffle,
    dismissWinModal,
    dismissLoseModal,
    resetGame,
  };
}
