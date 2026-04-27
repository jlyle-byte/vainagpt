import Image from "next/image";
import iconSrc from "../app/icon.png";

// Arturito's avatar — the Venezuelan-flag 16-point sunburst from app/icon.png.
// The sunburst is a complete brand mark (yellow rays with blue and red shadow
// layering, transparent background) so we render it as-is, no surrounding
// disc / ring / glow decoration. Static import via next/image so the favicon
// and the chat avatar share one source of truth — update icon.png to update
// both at once.
export default function Avatar() {
  return (
    <div className="tl-avatar" aria-label="Arturito">
      <Image
        src={iconSrc}
        alt="Arturito"
        width={48}
        height={48}
        priority
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </div>
  );
}
