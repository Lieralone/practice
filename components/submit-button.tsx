"use client";

import { WORDS_PER_GROUP } from "@/lib/constants";

interface SubmitButtonProps {
  selectedCount: number;
  onSubmit: () => void;
  onShuffle: () => void;
  disabled?: boolean;
}

export default function SubmitButton({
  selectedCount,
  onSubmit,
  onShuffle,
  disabled = false,
}: SubmitButtonProps) {
  const canSubmit = selectedCount === WORDS_PER_GROUP && !disabled;

  return (
    <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
      <button
        id="btn-submit"
        onClick={onSubmit}
        disabled={!canSubmit}
        style={{
          flex: 1,
          padding: "clamp(10px, 2.5vw, 14px) clamp(8px, 2vw, 16px)",
          borderRadius: "var(--radius-md)",
          border: "none",
          background: canSubmit ? "var(--green-primary)" : "var(--bg-hover)",
          color: canSubmit ? "var(--text-inverse)" : "var(--text-muted)",
          fontSize: "clamp(0.55rem, 2.2vw, 0.95rem)",
          fontWeight: 700,
          cursor: canSubmit ? "pointer" : "not-allowed",
          transition: "all var(--transition-fast)",
          opacity: canSubmit ? 1 : 0.5,
          whiteSpace: "nowrap",
        }}
        onMouseEnter={(e) => {
          if (canSubmit) {
            e.currentTarget.style.background = "var(--green-secondary)";
            e.currentTarget.style.transform = "translateY(-1px)";
          }
        }}
        onMouseLeave={(e) => {
          if (canSubmit) {
            e.currentTarget.style.background = "var(--green-primary)";
            e.currentTarget.style.transform = "translateY(0)";
          }
        }}
      >
        Isumite ({selectedCount}/{WORDS_PER_GROUP})
      </button>

      <button
        id="btn-shuffle"
        onClick={onShuffle}
        disabled={disabled}
        style={{
          padding: "clamp(10px, 2.5vw, 14px) clamp(12px, 3vw, 20px)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--border-default)",
          background: "var(--bg-tertiary)",
          color: disabled ? "var(--text-muted)" : "var(--text-secondary)",
          fontSize: "clamp(0.55rem, 2.2vw, 0.95rem)",
          fontWeight: 600,
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.4 : 1,
          transition: "all var(--transition-fast)",
          whiteSpace: "nowrap",
        }}
        onMouseEnter={(e) => {
          if (!disabled) {
            e.currentTarget.style.background = "var(--bg-hover)";
            e.currentTarget.style.borderColor = "var(--text-muted)";
          }
        }}
        onMouseLeave={(e) => {
          if (!disabled) {
            e.currentTarget.style.background = "var(--bg-tertiary)";
            e.currentTarget.style.borderColor = "var(--border-default)";
          }
        }}
      >
        I-shuffle
      </button>
    </div>
  );
}
