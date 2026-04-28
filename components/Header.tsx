import Image from "next/image";
import iconSrc from "../app/icon.png";
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

      {/* Wordmark — Playfair Display "VainaGPT" with the Venezuelan-flag
          sunburst as a sparkle accent tucked into the upper-right of the
          final "T", per the og.png hero. Drift animation kept gentle. */}
      <div className="flex justify-center">
        <div className="relative inline-block drift">
          <h1
            className="display wordmark-stamp"
            style={{
              fontSize: "clamp(3.5rem, 12vw, 7.5rem)",
            }}
          >
            VainaGPT
          </h1>
          <span
            className="absolute"
            style={{
              top: "-0.05em",
              right: "-0.55em",
              // Nudge the sparkle 22pt to the right of its anchor (per request).
              transform: "translateX(22pt) rotate(8deg)",
              filter: "drop-shadow(0 0 8px rgba(232, 184, 75, 0.55))",
              pointerEvents: "none",
            }}
          >
            <Image
              src={iconSrc}
              alt=""
              width={48}
              height={48}
              priority
              style={{
                width: "clamp(1.5rem, 4.5vw, 2.75rem)",
                height: "auto",
              }}
            />
          </span>
        </div>
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

    </header>
  );
}
