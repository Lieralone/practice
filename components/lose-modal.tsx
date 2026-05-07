"use client";

import { MdHeartBroken, MdClose } from "react-icons/md";

interface LoseModalProps {
  onDismiss: () => void;
}

export default function LoseModal({ onDismiss }: LoseModalProps) {
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
          border: "1px solid var(--error)",
          borderRadius: "var(--radius-xl)",
          padding: "clamp(24px, 5vw, 40px) clamp(20px, 4vw, 32px)",
          maxWidth: "420px",
          width: "100%",
          textAlign: "center",
          boxShadow: "0 0 40px rgba(248, 113, 113, 0.1)",
        }}
      >
        <div
          style={{
            fontSize: "clamp(2rem, 6vw, 3rem)",
            marginBottom: "12px",
            color: "var(--error)",
          }}
        >
          <MdHeartBroken style={{ display: "inline-block" }} />
        </div>

        <h2
          style={{
            fontSize: "clamp(1.25rem, 5vw, 1.75rem)",
            fontWeight: 800,
            color: "var(--error)",
            marginBottom: "12px",
          }}
        >
          Naubos na ang iyong mga buhay
        </h2>

        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "clamp(0.85rem, 3vw, 1rem)",
            marginBottom: "32px",
            lineHeight: 1.6,
          }}
        >
          Bumalik bukas para makuha ang 5 bagong buhay at subukan muli ang
          hamon. Ang iyong mga tamang sagot ay naka-save pa rin.
        </p>

        <button
          onClick={onDismiss}
          style={{
            width: "100%",
            padding: "clamp(10px, 3vw, 14px)",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--error)",
            background: "transparent",
            color: "var(--error)",
            fontSize: "clamp(0.85rem, 3vw, 1rem)",
            fontWeight: 700,
            cursor: "pointer",
            transition:
              "background var(--transition-fast), color var(--transition-fast)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--error)";
            e.currentTarget.style.color = "var(--text-inverse)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "var(--error)";
          }}
        >
          Omsim, babalik ako bukas
        </button>
      </div>
    </div>
  );
}
