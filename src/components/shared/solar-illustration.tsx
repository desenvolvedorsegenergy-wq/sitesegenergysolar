export function SolarIllustration() {
  return (
    <div className="relative aspect-square w-full max-w-lg">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-seg-green/20 via-emerald-500/10 to-transparent" />
      <svg
        viewBox="0 0 400 400"
        fill="none"
        className="relative h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="sunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#16A34A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="panelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E3A5F" />
            <stop offset="100%" stopColor="#0B1F3A" />
          </linearGradient>
        </defs>

        {/* Sun rays */}
        {[...Array(8)].map((_, i) => (
          <line
            key={i}
            x1="200"
            y1="80"
            x2={200 + 60 * Math.cos((i * Math.PI) / 4 - Math.PI / 2)}
            y2={80 + 60 * Math.sin((i * Math.PI) / 4 - Math.PI / 2)}
            stroke="#16A34A"
            strokeWidth="2"
            strokeOpacity="0.3"
          />
        ))}

        {/* Sun */}
        <circle cx="200" cy="80" r="35" fill="url(#sunGrad)" opacity="0.9" />

        {/* Solar panels grid */}
        {[0, 1, 2].map((row) =>
          [0, 1, 2, 3].map((col) => (
            <g key={`${row}-${col}`}>
              <rect
                x={80 + col * 62}
                y={180 + row * 52}
                width="55"
                height="45"
                rx="4"
                fill="url(#panelGrad)"
                stroke="#16A34A"
                strokeWidth="1"
                strokeOpacity="0.4"
              />
              <line
                x1={80 + col * 62 + 27}
                y1={180 + row * 52}
                x2={80 + col * 62 + 27}
                y2={180 + row * 52 + 45}
                stroke="#16A34A"
                strokeWidth="0.5"
                strokeOpacity="0.3"
              />
              <line
                x1={80 + col * 62}
                y1={180 + row * 52 + 22}
                x2={80 + col * 62 + 55}
                y2={180 + row * 52 + 22}
                stroke="#16A34A"
                strokeWidth="0.5"
                strokeOpacity="0.3"
              />
            </g>
          ))
        )}

        {/* Energy flow lines */}
        <path
          d="M 200 115 Q 200 150 200 180"
          stroke="#16A34A"
          strokeWidth="2"
          strokeDasharray="4 4"
          opacity="0.6"
        />
        <circle cx="200" cy="160" r="4" fill="#16A34A" opacity="0.8">
          <animate
            attributeName="cy"
            values="115;180;115"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>

        {/* House outline */}
        <path
          d="M 140 360 L 200 310 L 260 360 L 260 380 L 140 380 Z"
          fill="#0B1F3A"
          stroke="#16A34A"
          strokeWidth="1.5"
          strokeOpacity="0.5"
        />
      </svg>
    </div>
  );
}
