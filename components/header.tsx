"use client";

import Link from "next/link";
import { GAME_NAME, GAME_TAGLINE } from "@/lib/constants";

export default function Header() {
  return (
    <header className="border-b border-[var(--border-default)] bg-[var(--bg-secondary)]">
      <div className="max-w-xl mx-auto px-3 sm:px-4 py-3 sm:py-5 flex items-center justify-between gap-2">
        {/* logo and tagline */}
        <Link href="/" className="no-underline min-w-0">
          <h1 className="text-sm sm:text-2xl font-extrabold text-[var(--green-primary)] tracking-tight leading-tight m-0 truncate">
            {GAME_NAME}
          </h1>
          <p className="text-[0.45rem] sm:text-xs text-[var(--text-muted)] mt-0.5 sm:mt-1 truncate">
            {GAME_TAGLINE}
          </p>
        </Link>

        {/* nav */}
        <nav className="flex items-center flex-shrink-0 gap-2">
          <Link
            href="/paano-maglaro"
            className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-md border border-[var(--border-default)] bg-[var(--bg-tertiary)] text-[var(--text-secondary)] text-xs sm:text-sm font-semibold no-underline transition-colors duration-150 hover:border-[var(--green-primary)] hover:text-[var(--green-primary)]"
          >
            {/* ? icon */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            {/* hide label on very small screens, show icon only */}
            <span className="hidden sm:inline">Paano Maglaro</span>
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-md border border-[var(--border-default)] bg-[var(--bg-tertiary)] text-[var(--text-secondary)] text-xs sm:text-sm font-semibold no-underline transition-colors duration-150 hover:border-[var(--green-primary)] hover:text-[var(--green-primary)]"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <circle cx="12" cy="8" r="1" />
            </svg>
          </Link>
        </nav>
      </div>
    </header>
  );
}
