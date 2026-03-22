/** Decorative SVGs — Ice/Winter motifs */

export function Sparkle({ className }: { className?: string }) {
  // A clean, geometric snowflake instead of standard Disney sparkle
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
      <path d="M12 6L9 9m3-3l3 3M6 12l3-3m-3 3l3 3M12 18l-3-3m3 3l3-3M18 12l-3-3m3 3l-3 3" />
    </svg>
  )
}

export function StarWand({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
    >
      <path
        d="M16 2l1.2 6.8L24 10l-6.8 1.2L16 18l-1.2-6.8L8 10l6.8-1.2L16 2z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M24 18l.8 4.4L29 23l-4.2.8L24 28l-.8-4.4L19 23l4.2-.8L24 18z"
        fill="currentColor"
        opacity="0.6"
      />
    </svg>
  )
}

export function CastleSilhouette({ className }: { className?: string }) {
  // A sleeker, slightly icy-looking castle outline
  return (
    <svg
      className={className}
      viewBox="0 0 120 48"
      fill="currentColor"
      aria-hidden
      style={{ filter: "drop-shadow(0 2px 8px rgba(14, 165, 233, 0.3))" }}
    >
      <path d="M60 2l8 14h-6v8h12V18h-6l10-14h8l10 14h-6v30H84V30h-8v20H44V30h-8v20H16V18h-6l10-14h8l10 14h-6v8h12V18h-6l8-14z" />
    </svg>
  )
}
