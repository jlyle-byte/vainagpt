import { STAMPS, CHARACTER_TAGLINE, PALETTE } from "@/lib/constants";

export default function Header() {
  return (
    <header className="w-full max-w-3xl px-6 pt-12 pb-8 relative z-10">
      {/* Top row: gold stamp microtype. Right (QUÉ ES LA VAINA) is the hero. */}
      <div className="flex items-end justify-between mb-6 gap-4">
        <span className="stamp" style={{ fontSize: 11 }}>
          {STAMPS.left}
        </span>
        <span
          className="stamp"
          style={{
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          {STAMPS.right}
        </span>
      </div>

      {/* Wordmark — Playfair Display, cream, three-layer drop shadow,
          gentle drift animation. */}
      <div className="flex justify-center">
        <h1
          className="display drift wordmark-stamp"
          style={{
            fontSize: "clamp(3.5rem, 12vw, 7.5rem)",
          }}
        >
          vainagpt
        </h1>
      </div>

      {/* Tagline — Lora italic, gold, between gradient rules. */}
      <div className="mt-6">
        <div className="rule-tagline" />
        <div className="py-3 flex justify-center">
          <span
            className="serif italic"
            style={{
              color: PALETTE.gold,
              fontSize: "clamp(1rem, 2.2vw, 1.125rem)",
              lineHeight: 1.3,
              textAlign: "center",
            }}
          >
            {CHARACTER_TAGLINE}
          </span>
        </div>
        <div className="rule-tagline" />
      </div>

      {/* Press label */}
      <div className="mt-3 flex justify-start">
        <span className="stamp" style={{ opacity: 0.85 }}>
          {STAMPS.label}
        </span>
      </div>
    </header>
  );
}
