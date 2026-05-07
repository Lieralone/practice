"use client";

import { FaTrophy } from "react-icons/fa";
import { MdContentCopy, MdClose } from "react-icons/md";

interface WinModalProps {
  onDismiss: () => void;
}

export default function WinModal({ onDismiss }: WinModalProps) {
  return (
    <div
      className="animate-overlay"
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        zIndex: 50,
        backdropFilter: "blur(4px)",
      }}
      onClick={onDismiss}
    >
      <div
        className="animate-modal"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--bg-secondary)",
          border: "1px solid var(--green-primary)",
          borderRadius: "var(--radius-xl)",
          padding: "clamp(24px, 5vw, 40px) clamp(20px, 4vw, 32px)",
          maxWidth: "420px",
          width: "100%",
          textAlign: "center",
          boxShadow: "0 0 40px rgba(74, 222, 128, 0.15)",
        }}
      >
        {/* Trophy icon */}
        <div
          style={{
            fontSize: "clamp(2rem, 6vw, 3rem)",
            marginBottom: "12px",
            color: "var(--green-primary)",
          }}
        >
          <FaTrophy style={{ display: "inline-block" }} />
        </div>

        <h2
          style={{
            fontSize: "clamp(1.25rem, 5vw, 1.75rem)",
            fontWeight: 800,
            color: "var(--green-primary)",
            marginBottom: "12px",
          }}
        >
          Napanalunan mo!
        </h2>

        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "clamp(0.85rem, 3vw, 1rem)",
            marginBottom: "28px",
            lineHeight: 1.6,
          }}
        >
          Mahusay! Nahanap mo ang lahat ng mga grupo.
          <br />
          Edi ikaw na!
        </p>

        <button
          onClick={onDismiss}
          style={{
            width: "100%",
            padding: "clamp(10px, 3vw, 14px)",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--border-default)",
            background: "var(--bg-tertiary)",
            color: "var(--text-secondary)",
            fontSize: "clamp(0.85rem, 3vw, 1rem)",
            fontWeight: 600,
            cursor: "pointer",
            transition: "all var(--transition-fast)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--bg-hover)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--bg-tertiary)";
          }}
        >
          <MdClose size="1.1em" />
          Isara
        </button>
      </div>
    </div>
  );
}
