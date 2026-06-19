export default function Avatar({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 250"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label="아바타 자리표시 이미지"
    >
      <defs>
        <linearGradient id="av-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#202023" />
          <stop offset="1" stopColor="#111113" />
        </linearGradient>
        <linearGradient id="av-fig" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#86868a" />
          <stop offset="1" stopColor="#56565a" />
        </linearGradient>
      </defs>

      <rect width="200" height="250" fill="url(#av-bg)" />
      {/* 은은한 헤일로 */}
      <circle cx="100" cy="104" r="74" fill="#ffffff" opacity="0.04" />

      <g fill="url(#av-fig)">
        {/* 목 */}
        <rect x="84" y="126" width="32" height="52" rx="14" />
        {/* 머리 */}
        <circle cx="100" cy="96" r="38" />
        {/* 어깨 */}
        <path d="M34 250 C34 190 63 162 100 162 C137 162 166 190 166 250 Z" />
      </g>
    </svg>
  )
}
