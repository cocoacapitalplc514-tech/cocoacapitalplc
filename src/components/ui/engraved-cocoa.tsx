import { cn } from "@/lib/utils";

/**
 * Engraved cocoa pod vignette for the homepage hero.
 *
 * Drawn in the visual language of a bond certificate rather than as an
 * illustration: hairline strokes only, no fills, a guilloché rosette behind,
 * and a double-rule border. Engraving is the historical iconography of
 * securities, which is why this reads as an issuer mark where a flat cartoon
 * does not.
 *
 * Cross-contour shading was tried on the shadowed flank and removed: short
 * repeated arcs sitting beside the leaf read as gills. The furrows carry enough
 * line texture on their own.
 *
 * Deliberately contains no money imagery — no coins, notes, arrows or charts.
 */

const LINE = "#b88a35";
const LINE_BRIGHT = "#d9ad52";

const CX = 180;
const POD_TOP = 86;
const POD_BOTTOM = 296;
/** Widest point, roughly 40% down — the pod is rounded above, tapered below. */
const POD_MID_Y = 176;
const POD_HALF_W = 52;

/**
 * Rounded at the stem end, tapering to a blunt point. A shape that comes to a
 * cusp at both ends reads as an almond or a leaf, not a cocoa pod.
 */
const POD_PATH = `M ${CX},${POD_TOP} C ${CX + 28},${POD_TOP} ${CX + POD_HALF_W},${POD_TOP + 36} ${CX + POD_HALF_W},${POD_MID_Y} C ${CX + POD_HALF_W},${POD_MID_Y + 58} ${CX + 26},${POD_BOTTOM - 10} ${CX},${POD_BOTTOM} C ${CX - 26},${POD_BOTTOM - 10} ${CX - POD_HALF_W},${POD_MID_Y + 58} ${CX - POD_HALF_W},${POD_MID_Y} C ${CX - POD_HALF_W},${POD_TOP + 36} ${CX - 28},${POD_TOP} ${CX},${POD_TOP} Z`;

/**
 * Longitudinal furrows. They fan rather than converging on a single point at
 * each tip — converging lines read as a wireframe globe.
 */
const FURROWS = [-1, -0.55, 0, 0.55, 1];

/** Guilloché: a flat rosette, not a sphere. Low ry keeps the petals thin. */
const ROSETTE = Array.from({ length: 24 }, (_, i) => i * 7.5);

const LEAF_VEINS = [-34, -17, 0, 17, 34];

function furrow(f: number) {
  const c = CX + f * 60;
  return `M ${CX + f * 9},102 C ${c},148 ${c},238 ${CX + f * 7},282`;
}

export function EngravedCocoa({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 360"
      className={cn("h-auto w-full", className)}
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      {/* Guilloché rosette */}
      <g fill="none" stroke={LINE} strokeWidth="0.7" opacity="0.09">
        {ROSETTE.map((angle) => (
          <ellipse
            key={angle}
            cx={CX}
            cy="180"
            rx="128"
            ry="30"
            transform={`rotate(${angle} ${CX} 180)`}
          />
        ))}
      </g>

      {/* Double-rule border */}
      <circle
        cx={CX}
        cy="180"
        r="170"
        fill="none"
        stroke={LINE}
        strokeWidth="2.5"
        opacity="0.75"
      />
      <circle
        cx={CX}
        cy="180"
        r="162"
        fill="none"
        stroke={LINE}
        strokeWidth="1.2"
        opacity="0.5"
      />

      {/* Leaf, set behind the pod. Drawn about its own origin so the veins
          cannot drift outside the blade when the group is rotated. */}
      <g
        transform="translate(108 138) rotate(-34)"
        fill="none"
        stroke={LINE}
        strokeWidth="1.4"
        opacity="0.55"
      >
        <path d="M 0,-60 C 21,-32 21,32 0,60 C -21,32 -21,-32 0,-60 Z" />
        <path d="M 0,-54 V 54" strokeWidth="1" />
        {LEAF_VEINS.map((y) => (
          <g key={y} strokeWidth="0.9">
            <path d={`M 0,${y} C 6,${y - 4} 11,${y - 9} 14,${y - 16}`} />
            <path d={`M 0,${y} C -6,${y - 4} -11,${y - 9} -14,${y - 16}`} />
          </g>
        ))}
      </g>

      {/* Stem */}
      <path
        d={`M ${CX},${POD_TOP} C ${CX + 5},${POD_TOP - 16} ${CX + 14},${POD_TOP - 25} ${CX + 25},${POD_TOP - 30}`}
        fill="none"
        stroke={LINE_BRIGHT}
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* Pod body */}
      <path
        d={POD_PATH}
        fill="none"
        stroke={LINE_BRIGHT}
        strokeWidth="2.2"
        strokeLinejoin="round"
        opacity="0.9"
      />

      {/* Furrows */}
      <g fill="none" stroke={LINE} strokeWidth="1.3" opacity="0.65" strokeLinecap="round">
        {FURROWS.map((f) => (
          <path key={f} d={furrow(f)} />
        ))}
      </g>

      {/* Base rule, as on a certificate vignette */}
      <g fill="none" stroke={LINE} opacity="0.5" strokeLinecap="round">
        <path d={`M ${CX - 44},320 H ${CX + 44}`} strokeWidth="1.6" />
        <path d={`M ${CX - 24},326 H ${CX + 24}`} strokeWidth="0.9" />
      </g>
    </svg>
  );
}
