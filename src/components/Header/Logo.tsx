export function Logo({ tabIndex }: { tabIndex?: number }) {
  return (
    <a
      href="#top"
      aria-label="Zaheer Abbas - back to top"
      tabIndex={tabIndex}
      className="inline-flex items-center text-current"
    >
      <svg width="55" height="55" viewBox="0 0 64 64" fill="none">
        <g fill="currentColor">
          <path d="M11.55 15.35 L24.8 15.35 L20.25 23.72 L16.11 23.72Z" />
          <path d="M29.45 15.35 L38.92 15.35 L21.03 48.65 L11.6 48.65Z" />
          <path d="M39.24 24.09 L52.45 48.65 L43.02 48.65 L34.51 32.83Z" />
          <path d="M30.09 40.33 L33.86 40.33 L38.33 48.65 L25.68 48.65Z" />
        </g>
      </svg>
    </a>
  );
}
