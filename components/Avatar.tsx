// Arturito's avatar — an 8-ray sun in cream on a gold-to-red radial gradient
// circle, ringed in teal then gold. Inline SVG so it stays sharp at any size
// and we don't depend on app/icon.png being routable.
//
// Geometry: 8 rays alternating outer/inner from a central disc, drawn as a
// 16-point polygon so the rays read as discrete spokes. Same family as the
// bumboclaude sun emblem, retinted to the tropical palette.
const sunPoints = (() => {
  const cx = 16;
  const cy = 16;
  const outer = 13;
  const inner = 4.5;
  const pts: string[] = [];
  for (let i = 0; i < 16; i++) {
    const angle = (Math.PI / 8) * i - Math.PI / 2;
    const r = i % 2 === 0 ? outer : inner;
    pts.push(`${(cx + Math.cos(angle) * r).toFixed(2)},${(cy + Math.sin(angle) * r).toFixed(2)}`);
  }
  return pts.join(" ");
})();

export default function Avatar() {
  return (
    <div className="tl-avatar" aria-label="Arturito">
      <svg width={32} height={32} viewBox="0 0 32 32" aria-hidden="true">
        <polygon points={sunPoints} fill="#fdf6e3" />
        <circle cx={16} cy={16} r={3.5} fill="#fdf6e3" />
      </svg>
    </div>
  );
}
