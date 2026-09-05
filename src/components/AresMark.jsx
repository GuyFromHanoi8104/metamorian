/**
 * Ares mark — a traced approximation of the supplied logo (broadcast tower +
 * signal arcs), rebuilt as SVG in the brand colours. Like the Kollab tile it
 * keeps its own colour rather than following the theme. Swap in the official
 * vector when it's available (see README).
 */
const TOWER = '#9e3b2e'
const SIGNAL = '#c55a2c'
const CENTER = [50, 74]
const RADII = [19, 29, 39]

function polar(cx, cy, r, deg) {
  const a = (deg * Math.PI) / 180
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)]
}

function arc(r, a0, a1) {
  const [cx, cy] = CENTER
  const [x0, y0] = polar(cx, cy, r, a0)
  const [x1, y1] = polar(cx, cy, r, a1)
  const large = Math.abs(a1 - a0) > 180 ? 1 : 0
  return `M ${x0.toFixed(2)} ${y0.toFixed(2)} A ${r} ${r} 0 ${large} 1 ${x1.toFixed(
    2,
  )} ${y1.toFixed(2)}`
}

export default function AresMark({ className, decorative = false }) {
  const a11y = decorative
    ? { 'aria-hidden': true }
    : { role: 'img', 'aria-label': 'Ares' }
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...a11y}
    >
      {RADII.map((r) => (
        <g key={r} stroke={SIGNAL} strokeWidth="4.6" strokeLinecap="round">
          <path d={arc(r, 202, 261)} />
          <path d={arc(r, 279, 338)} />
        </g>
      ))}
      <path
        d="M50 36 L82 90 L58 90 L50 75 L42 90 L18 90 Z M50 52 L63 74 L37 74 Z"
        fill={TOWER}
        fillRule="evenodd"
      />
      <circle cx="50" cy="66" r="4.4" fill={TOWER} />
    </svg>
  )
}
