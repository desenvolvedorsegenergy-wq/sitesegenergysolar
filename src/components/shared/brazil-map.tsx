export function BrazilMapBackground() {
  return (
    <svg
      viewBox="0 0 400 450"
      fill="none"
      className="absolute inset-0 h-full w-full opacity-[0.07]"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <path
        d="M200 20 C240 20 260 40 280 60 C300 80 320 90 330 110 C340 130 350 150 345 170 C340 190 335 210 330 230 C325 250 320 270 310 290 C300 310 290 330 275 345 C260 360 245 375 230 385 C215 395 200 400 185 395 C170 390 155 380 140 365 C125 350 110 335 100 315 C90 295 85 275 80 255 C75 235 70 215 75 195 C80 175 90 155 105 135 C120 115 140 95 160 75 C180 55 170 20 200 20 Z"
        stroke="#16A34A"
        strokeWidth="2"
        fill="#16A34A"
        fillOpacity="0.1"
      />
      {/* Region dots */}
      {[
        [180, 120], [220, 100], [250, 140], [200, 180],
        [160, 200], [240, 220], [190, 260], [220, 300],
        [170, 320], [250, 350], [200, 150], [230, 180],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="4" fill="#16A34A" opacity="0.6">
          <animate
            attributeName="opacity"
            values="0.3;0.9;0.3"
            dur={`${2 + i * 0.3}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  );
}
