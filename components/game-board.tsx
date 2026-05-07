/**
 * main board game, solved groups on top unsovled on bottom.
 */

"use client";

import { GameState, Word, Puzzle, GroupColor } from "@/types/game";
import WordTile from "./word-tile";
import ConnectionResult from "./connection-result";

const GROUP_ORDER: GroupColor[] = ["yellow", "green", "blue", "purple"];

interface GameBoardProps {
  gameState: GameState;
  puzzle: Puzzle;
  onSelectWord: (word: Word) => void;
}

export default function GameBoard({
  gameState,
  puzzle,
  onSelectWord,
}: GameBoardProps) {
  const isGameOver = gameState.status !== "playing";

  /**
   * look up a solved group by its color.
   * returns undefined if that color hasn't been solved yet.
   */
  const getSolvedGroup = (color: GroupColor) =>
    gameState.solvedGroups.find((g) => g.color === color);

  return (
    <div className="w-full">
      {/* solved groups (displayed based on difficulty) */}
      <div className="mb-4">
        {GROUP_ORDER.map((color) => {
          const group = getSolvedGroup(color);
          return (
            <ConnectionResult key={color} group={group!} isVisible={!!group} />
          );
        })}
      </div>

      {/* remaining word tiles */}
      <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mb-4">
        {gameState.words.map((word) => (
          <WordTile
            key={word.id}
            word={word}
            isSelected={gameState.selectedWords.some((w) => w.id === word.id)}
            isDisabled={isGameOver}
            onClick={onSelectWord}
          />
        ))}
      </div>
    </div>
  );
}
