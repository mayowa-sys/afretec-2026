"use client";

import { TIMELINE, getStageStatus } from "@/lib/timeline";

const PHASE_COLORS: Record<string, string> = {
  Apply: "var(--color-blue)",
  Bootcamp: "var(--color-warm)",
  Build: "var(--color-signal)",
  Showcase: "var(--color-blue-deep)",
};

interface Country {
  name: string;
  cx: number;
  cy: number;
  lx: number;
  ly: number;
  anchor: "start" | "middle" | "end";
  bold?: boolean;
}

const COUNTRIES: Country[] = [
  { name: "The Gambia",   cx: 42,  cy: 142, lx: 38,  ly: 133, anchor: "end" },
  { name: "Sierra Leone", cx: 72,  cy: 192, lx: 62,  ly: 213, anchor: "end" },
  { name: "Liberia",      cx: 105, cy: 222, lx: 105, ly: 246, anchor: "middle" },
  { name: "Ghana",        cx: 210, cy: 212, lx: 210, ly: 246, anchor: "middle" },
  { name: "Nigeria",      cx: 305, cy: 188, lx: 318, ly: 182, anchor: "start", bold: true },
];

const WEST_AFRICA_PATH =
    "M 18,128 L 55,112 L 98,106 L 148,116 L 192,126 L 228,134 L 262,144 L 292,158 L 322,168 L 355,176 L 375,194 L 364,214 L 344,230 L 318,242 L 294,250 L 272,260 L 252,265 L 232,264 L 212,260 L 194,258 L 178,264 L 158,267 L 138,263 L 118,256 L 102,247 L 86,237 L 70,226 L 56,212 L 44,196 L 32,178 L 22,160 L 16,144 Z";

export function TimelineSidebar({ now }: { now: Date | null }) {
  return (
      <aside className="hidden lg:flex flex-col gap-5 sticky top-32 self-start">
        <div
            className="p-5 border rounded-sm overflow-hidden"
            style={{ borderColor: "var(--color-line)", backgroundColor: "var(--color-bg-soft)" }}
        >
          <div className="flex items-center justify-between mb-3">
          <span
              className="font-mono text-[10px] tracking-[0.14em] uppercase"
              style={{ color: "var(--color-muted)" }}
          >
            Eligible Region
          </span>
            <span
                className="font-mono text-[10px] tracking-[0.14em]"
                style={{ color: "var(--color-blue)" }}
            >
            5 countries
          </span>
          </div>

          <svg viewBox="0 0 400 300" className="w-full h-auto" aria-label="Eligible West African countries">
            <defs>
              <pattern id="mapgrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path
                    d="M 20 0 L 0 0 0 20"
                    fill="none"
                    stroke="var(--color-line)"
                    strokeWidth="0.4"
                    opacity="0.6"
                />
              </pattern>
            </defs>

            <rect width="400" height="300" fill="url(#mapgrid)" />

            <path
                d={WEST_AFRICA_PATH}
                fill="var(--color-bg)"
                stroke="var(--color-ink-soft)"
                strokeWidth="1.2"
            />

            {COUNTRIES.map((c, i) => (
                <g key={c.name}>
                  <circle
                      cx={c.cx}
                      cy={c.cy}
                      r="4"
                      fill="var(--color-blue)"
                      stroke="var(--color-bg)"
                      strokeWidth="1.5"
                  />
                  <circle cx={c.cx} cy={c.cy} r="10" fill="var(--color-blue)">
                    <animate
                        attributeName="r"
                        values="5;16;5"
                        dur="3s"
                        repeatCount="indefinite"
                        begin={`${i * 0.5}s`}
                    />
                    <animate
                        attributeName="opacity"
                        values="0.22;0;0.22"
                        dur="3s"
                        repeatCount="indefinite"
                        begin={`${i * 0.5}s`}
                    />
                  </circle>
                  <text
                      x={c.lx}
                      y={c.ly}
                      fontSize="8.5"
                      fontFamily="var(--font-geist-mono, monospace)"
                      fontWeight={c.bold ? "700" : "500"}
                      fill="var(--color-ink)"
                      textAnchor={c.anchor}
                      letterSpacing="0.6"
                  >
                    {c.name.toUpperCase()}
                  </text>
                </g>
            ))}

            <g transform="translate(370, 36)">
              <circle cx="0" cy="0" r="12" fill="none" stroke="var(--color-line)" strokeWidth="0.8" />
              <line x1="0" y1="-8" x2="0" y2="8" stroke="var(--color-ink-soft)" strokeWidth="1" />
              <line x1="-8" y1="0" x2="8" y2="0" stroke="var(--color-line)" strokeWidth="0.8" />
              <polygon points="0,-8 -2.5,-3 2.5,-3" fill="var(--color-ink-soft)" />
              <text
                  x="0"
                  y="-14"
                  fontSize="7"
                  fontFamily="var(--font-geist-mono, monospace)"
                  fill="var(--color-muted)"
                  textAnchor="middle"
              >
                N
              </text>
            </g>
          </svg>

          <p
              className="font-mono text-[10px] tracking-[0.06em] mt-2 leading-relaxed"
              style={{ color: "var(--color-muted)" }}
          >
            Nigeria · Ghana · Liberia · Sierra Leone · The Gambia
          </p>
        </div>

        <div
            className="p-5 border rounded-sm"
            style={{ borderColor: "var(--color-line)", backgroundColor: "var(--color-bg-soft)" }}
        >
          <div
              className="font-mono text-[10px] tracking-[0.14em] uppercase mb-4"
              style={{ color: "var(--color-muted)" }}
          >
            Jump to stage
          </div>

          <ol className="flex flex-col">
            {TIMELINE.map((stage) => {
              const status = now ? getStageStatus(stage, now) : "upcoming";
              const isActive = status === "active";
              const isComplete = status === "complete";
              const accent = PHASE_COLORS[stage.phase];

              return (
                  <li
                      key={stage.number}
                      className="border-b last:border-b-0"
                      style={{ borderColor: "var(--color-line)" }}
                  >
                    {/* ────── THE FIX ────── */}
                    <a
                        href={`#stage-${stage.number}`}
                        className="group flex items-center gap-3 py-2.5"
                        style={{ opacity: isComplete ? 0.5 : 1 }}
                    >
                  <span
                      className="font-mono text-[10px] w-5 flex-shrink-0"
                      style={{ color: "var(--color-muted)" }}
                  >
                    {stage.number}
                  </span>

                      <span
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{
                            backgroundColor: isActive
                                ? accent
                                : isComplete
                                    ? "var(--color-muted)"
                                    : "var(--color-line)",
                            boxShadow: isActive
                                ? `0 0 0 3px color-mix(in srgb, ${accent} 25%, transparent)`
                                : "none",
                          }}
                      />

                      <span
                          className="text-[12px] leading-tight flex-1"
                          style={{
                            color: isActive ? "var(--color-ink)" : "var(--color-ink-soft)",
                            fontWeight: isActive ? 600 : 400,
                            textDecoration: isComplete ? "line-through" : "none",
                          }}
                      >
                    {stage.title}
                  </span>

                      {isActive && (
                          <span
                              className="font-mono text-[9px] uppercase tracking-[0.1em] flex-shrink-0"
                              style={{ color: accent }}
                          >
                      Now
                    </span>
                      )}
                    </a>
                  </li>
              );
            })}
          </ol>
        </div>
      </aside>
  );
}