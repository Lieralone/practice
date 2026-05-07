"use client";

import { useGameState } from "@/hooks/useGameState";
import Header from "@/components/header";
import LivesDisplay from "@/components/live-display";
import GameBoard from "@/components/game-board";
import SubmitButton from "@/components/submit-button";
import WinModal from "@/components/win-modal";
import LoseModal from "@/components/lose-modal";
import { GAME_NAME } from "@/lib/constants";

export default function Home() {
  const {
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
  } = useGameState();

  if (isLoading || !gameState || !puzzle) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        {/* spinner */}
        <div className="w-10 h-10 rounded-full border-[3px] border-[var(--border-default)] border-t-[var(--green-primary)] animate-spin" />
        <span className="text-[var(--text-secondary)] text-base font-semibold">
          Naglo-load...
        </span>
      </div>
    );
  }
  return (
    <div className="font-pixel flex flex-col min-h-screen">
      <Header />
      {/* main board game */}
      <main className="flex-1 flex flex-col justify-center max-w-xl w-full mx-auto px-3 sm:px-4 py-5 sm:py-8">
        <LivesDisplay remaining={gameState.remainingAttempts} />
        <GameBoard
          gameState={gameState}
          puzzle={puzzle}
          onSelectWord={handleSelectWord}
        />
        <SubmitButton
          selectedCount={gameState.selectedWords.length}
          onSubmit={handleSubmit}
          onShuffle={handleShuffle}
          disabled={gameState.status !== "playing"}
        />
      </main>
      <footer className="border-t border-[var(--border-default)] p-3 sm:p-4 text-center text-[0.45rem] sm:text-xs text-[var(--text-muted)]">
        {GAME_NAME} © {new Date().getFullYear()} — tagline here
      </footer>

      {/* ── modals ── */}
      {showWinModal && <WinModal onDismiss={dismissWinModal} />}

      {showLoseModal && <LoseModal onDismiss={dismissLoseModal} />}
    </div>
  );
}
