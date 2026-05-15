/**
 * word button on the game board.
 * visual states:
 * default: dark surface tile with subtle border
 * selected: green accent with glow pulse
 * solved: hidden (already in a solved group)
 * disabled: dimmed, non-interactive (game over)
 */
"use client";

import { useState } from "react";
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
  const [showHint, setShowHint] = useState(false);
  const hasHint =
    word.language === "kapampangan" || word.language === "pangasinense";

  const languageName =
    word.language === "kapampangan"
      ? "Kapampangan"
      : word.language === "pangasinense"
      ? "Pangasinense"
      : "";

  const languageAccentColor =
    word.language === "kapampangan"
      ? "var(--kapampangan-accent)"
      : word.language === "pangasinense"
      ? "var(--pangasinense-accent)"
      : "transparent";

  const languageAccentBackground =
    word.language === "kapampangan"
      ? "var(--kapampangan-accent-bg)"
      : word.language === "pangasinense"
      ? "var(--pangasinense-accent-bg)"
      : "var(--bg-tertiary)";

  const hintText = word.translation
    ? `${languageName} ng '${word.translation}'`
    : "Hint available";

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
        borderLeft: `4px solid ${languageAccentColor}`,
        background: isSelected ? "var(--green-glow)" : languageAccentBackground,
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
          e.currentTarget.style.background = languageAccentBackground;
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
        {hasHint && (
          <span
            role="button"
            tabIndex={0}
            onClick={(e) => {
              e.stopPropagation();
              setShowHint((current) => !current);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                e.stopPropagation();
                setShowHint((current) => !current);
              }
            }}
            aria-label={hintText}
            title={hintText}
            style={{
              position: "absolute",
              top: "6px",
              right: "6px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "0.85rem",
              height: "0.85rem",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.16)",
              color: "var(--text-primary)",
              fontSize: "0.65rem",
              fontWeight: 800,
              lineHeight: 1,
              border: "1px solid transparent",
              padding: 0,
              cursor: "pointer",
            }}
          >
            ?
          </span>
        )}
        {hasHint && showHint && (
          <span
            style={{
              position: "absolute",
              bottom: "6px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(0, 0, 0, 0.85)",
              color: "white",
              padding: "0.3rem 0.5rem",
              borderRadius: "0.35rem",
              fontSize: "0.65rem",
              maxWidth: "90%",
              textAlign: "center",
              zIndex: 1,
              pointerEvents: "none",
            }}
          >
            {hintText}
          </span>
        )}
      </div>
    </button>
  );
}
