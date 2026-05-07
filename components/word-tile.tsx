/**
 * word button on the game board.
 * visual states:
 * default: dark surface tile with subtle border
 * selected: green accent with glow pulse
 * solved: hidden (already in a solved group)
 * disabled: dimmed, non-interactive (game over)
 */
"use client";

import { Word } from "@/types/game";

interface WordTileProps {
  word: Word;
  isSelected: boolean;
  isDisabled: boolean;
  onClick: (word: Word) => void;
}

export default function WordTile({
  word,
  isSelected,
  isDisabled,
  onClick,
}: WordTileProps) {
  return (
    <button
      id={`tile-${word.id}`}
      onClick={() => onClick(word)}
      disabled={isDisabled}
      aria-pressed={isSelected}
      aria-label={`Salita: ${word.text}`}
      className={isSelected ? "animate-selected-pulse" : ""}
      style={{
        position: "relative",
        width: "100%",
        minHeight: "clamp(52px, 14vw, 72px)",
        borderRadius: "var(--radius-md)",
        border: isSelected
          ? "2px solid var(--green-primary)"
          : "1px solid var(--border-default)",
        background: isSelected ? "var(--green-glow)" : "var(--bg-tertiary)",
        color: isSelected ? "var(--green-primary)" : "var(--text-primary)",
        fontSize: "clamp(0.5rem, 2.2vw, 0.75rem)",
        fontWeight: 700,
        cursor: isDisabled ? "not-allowed" : "pointer",
        opacity: isDisabled ? 0.4 : 1,
        transition: "all var(--transition-fast)",
        textTransform: "capitalize",
        letterSpacing: "0.2px",
        boxShadow: isSelected ? "var(--shadow-glow)" : "none",
        padding: "6px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={(e) => {
        if (!isDisabled && !isSelected) {
          e.currentTarget.style.background = "var(--bg-hover)";
          e.currentTarget.style.borderColor = "var(--text-muted)";
        }
      }}
      onMouseLeave={(e) => {
        if (!isDisabled && !isSelected) {
          e.currentTarget.style.background = "var(--bg-tertiary)";
          e.currentTarget.style.borderColor = "var(--border-default)";
        }
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.4rem",
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            whiteSpace: "normal",
            wordBreak: "break-word",
            lineHeight: 1.2,
            textAlign: "center",
          }}
        >
          {word.text}
        </span>
        {(word.language === "kapampangan" || word.language === "pangasinense") && (
          <span
            aria-label={word.translation ? `Hint: ${word.translation}` : "Hint available"}
            title={word.translation ? word.translation : "Hint available"}
            style={{
              position: "absolute",
              top: "6px",
              right: "6px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "0.95rem",
              height: "0.95rem",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.16)",
              color: "var(--text-primary)",
              fontSize: "0.7rem",
              fontWeight: 800,
              lineHeight: 1,
            }}
          >
            ?
          </span>
        )}
      </div>
    </button>
  );
}
