/**
 * Metamorian mark — a traced approximation of the supplied logo, rebuilt as
 * currentColor SVG so it works in both themes and at any size. Swap in the
 * official vector file when it's available (see README).
 */
export default function Mark({ className, decorative = false }) {
  const a11y = decorative
    ? { 'aria-hidden': true }
    : { role: 'img', 'aria-label': 'Metamorian' }
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...a11y}
    >
      <g stroke="currentColor" strokeLinecap="round">
        <ellipse
          cx="47"
          cy="53"
          rx="36"
          ry="16"
          strokeWidth="11"
          transform="rotate(-34 47 53)"
        />
        <ellipse
          cx="54"
          cy="47"
          rx="30"
          ry="12.5"
          strokeWidth="7.5"
          transform="rotate(29 54 47)"
        />
      </g>
      <circle cx="50" cy="50" r="5.5" fill="currentColor" />
    </svg>
  )
}
