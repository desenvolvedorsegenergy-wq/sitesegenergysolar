export function ChargerIllustration() {
  return (
    <div className="relative aspect-square w-full max-w-lg">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-transparent" />
      <svg
        viewBox="0 0 400 400"
        fill="none"
        className="relative h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="chargerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0B1F3A" />
            <stop offset="100%" stopColor="#1E3A5F" />
          </linearGradient>
          <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#16A34A" stopOpacity="0" />
            <stop offset="50%" stopColor="#16A34A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#16A34A" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Ground */}
        <rect x="0" y="340" width="400" height="60" fill="#0B1F3A" opacity="0.5" />
        <line x1="0" y1="340" x2="400" y2="340" stroke="#16A34A" strokeWidth="1" opacity="0.3" />

        {/* Charging station */}
        <rect x="160" y="120" width="80" height="220" rx="12" fill="url(#chargerGrad)" stroke="#16A34A" strokeWidth="1.5" strokeOpacity="0.5" />
        <rect x="175" y="140" width="50" height="80" rx="8" fill="#0B1F3A" stroke="#16A34A" strokeWidth="1" strokeOpacity="0.3" />

        {/* Screen display */}
        <rect x="185" y="155" width="30" height="20" rx="3" fill="#16A34A" opacity="0.3" />
        <text x="200" y="170" textAnchor="middle" fill="#16A34A" fontSize="10" fontFamily="monospace">85%</text>

        {/* Charging port */}
        <circle cx="200" cy="250" r="12" fill="#0B1F3A" stroke="#16A34A" strokeWidth="2" />
        <circle cx="200" cy="250" r="6" fill="#16A34A" opacity="0.6">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* Cable */}
        <path
          d="M 200 262 Q 200 290 240 300 Q 280 310 300 280"
          stroke="#16A34A"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Electric car silhouette */}
        <g transform="translate(260, 250)">
          <rect x="0" y="20" width="100" height="40" rx="20" fill="#0B1F3A" stroke="#16A34A" strokeWidth="1.5" strokeOpacity="0.5" />
          <rect x="20" y="5" width="60" height="30" rx="15" fill="#0B1F3A" stroke="#16A34A" strokeWidth="1" strokeOpacity="0.4" />
          <circle cx="25" cy="65" r="12" fill="#1E3A5F" stroke="#16A34A" strokeWidth="1" />
          <circle cx="75" cy="65" r="12" fill="#1E3A5F" stroke="#16A34A" strokeWidth="1" />
          <circle cx="25" cy="65" r="5" fill="#16A34A" opacity="0.5" />
          <circle cx="75" cy="65" r="5" fill="#16A34A" opacity="0.5" />
        </g>

        {/* Energy pulse */}
        <rect x="50" y="200" width="300" height="2" fill="url(#glowGrad)" opacity="0.5">
          <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
        </rect>

        {/* Lightning bolts */}
        <path d="M 200 100 L 195 115 L 205 115 L 198 135 L 210 118 L 200 118 Z" fill="#16A34A" opacity="0.7">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
        </path>
      </svg>
    </div>
  );
}
