export default function Logo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label="Park Miseon">
      <rect x="3" y="3" width="94" height="94" rx="22" fill="none" stroke="currentColor" strokeWidth={3} />
      <g fill="none" stroke="currentColor" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round">
        <path d="M31 32 V68" />
        <path d="M31 32 H43 a9 9 0 0 1 0 18 H31" />
        <path d="M53 68 V32 L62 50 L71 32 V68" />
      </g>
    </svg>
  )
}
