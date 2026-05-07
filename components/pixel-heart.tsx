const HEART_PIXELS = [
  [0, 1, 1, 0, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0],
];

export default function PixelHeart({ filled }: { filled: boolean }) {
  const SIZE = 4; // px per pixel block
  return (
    <svg
      width={7 * SIZE}
      height={6 * SIZE}
      viewBox={`0 0 ${7 * SIZE} ${6 * SIZE}`}
      className="transition-all duration-300"
    >
      {HEART_PIXELS.map((row, rowIdx) =>
        row.map((cell, colIdx) =>
          cell ? (
            <rect
              key={`${rowIdx}-${colIdx}`}
              x={colIdx * SIZE}
              y={rowIdx * SIZE}
              width={SIZE}
              height={SIZE}
              className={
                filled
                  ? "fill-[var(--green-primary)]"
                  : "fill-[var(--bg-hover)]"
              }
            />
          ) : null,
        ),
      )}
    </svg>
  );
}
