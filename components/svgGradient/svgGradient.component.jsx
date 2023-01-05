export default function SvgGradient() {
  return (
    <svg height="150" width="400">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:var(--blue-dark);stop-opacity:1" />
          <stop offset="100%" style="stop-color:var(--blue-light);stop-opacity:1" />
        </linearGradient>
      </defs>
    </svg>
  );
}
