export function Divider({ className = '' }: { className?: string }) {
  return (
    <div className={`divider-stitch ${className}`} aria-hidden="true">
      <svg width="28" height="10" viewBox="0 0 28 10" fill="none">
        <path
          d="M0 5 L4 1 L8 9 L12 1 L16 9 L20 1 L24 9 L28 5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
