"use client";

import { MAX_ATTEMPTS } from "@/lib/constants";
import PixelHeart from "./pixel-heart";

interface LivesDisplayProps {
  remaining: number;
}

export default function LivesDisplay({ remaining }: LivesDisplayProps) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
      <span className="text-xs sm:text-sm font-semibold leading-none text-[var(--text-secondary)]">
        Mga Pagkakataon:
      </span>

      {/* heartsssss this is just cool */}
      <div className="flex gap-1 sm:gap-1.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <PixelHeart key={i} filled={i < remaining} />
        ))}
      </div>

      <span className="text-[0.45rem] sm:text-xs font-medium text-[var(--text-muted)]">
        {remaining}/{MAX_ATTEMPTS}
      </span>
    </div>
  );
}
