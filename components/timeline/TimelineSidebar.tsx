"use client";

import { TIMELINE, getStageStatus } from "@/lib/timeline";

const PHASE_COLORS: Record<string, string> = {
  Apply: "var(--color-blue)",
  Bootcamp: "var(--color-warm)",
  Build: "var(--color-signal)",
  Showcase: "var(--color-blue-deep)",
};

// Distinct colours for the five eligible countries
const COUNTRY_COLORS: Record<string, string> = {
  Nigeria: "var(--color-blue)",
  Ghana: "var(--color-warm)",
  Liberia: "var(--color-signal)",
  "Sierra Leone": "var(--color-blue-deep)",
  "The Gambia": "var(--color-muted)",
};

export function TimelineSidebar({ now }: { now: Date | null }) {
  return (
      <aside className="hidden lg:flex flex-col gap-5 sticky top-32 self-start">
        <div
            className="p-5 border rounded-sm overflow-hidden"
            style={{ borderColor: "var(--color-line)", backgroundColor: "var(--color-bg-soft)" }}
        >
          <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-[10px] tracking-[0.14em] uppercase" style={{ color: "var(--color-muted)" }}>
            Eligible Region
          </span>
            <span className="font-mono text-[10px] tracking-[0.14em]" style={{ color: "var(--color-blue)" }}>
            5 of 54
          </span>
          </div>

          {/* Map container */}
          <div className="relative w-full aspect-[1000/1001]">
            {/* Base map */}
            <img
                src="/images/africa-map.svg"
                alt="Map of Africa"
                className="block w-full h-full object-contain"
            />

            {/* Overlay with only the 5 highlighted countries */}
            <svg
                viewBox="0 0 1000 1001"
                className="absolute inset-0 w-full h-full pointer-events-none"
            >
              {/* Nigeria */}
              <path
                  d="m 468.2,344.6 -2.2,0.3 -8.4,-15.1 -2.9,-0.6 -9.4,7.7 -9.4,-4 -6.5,-0.8 -3.5,1.9 -7.1,-0.4 -7.1,5.9 -6.2,0.3 -14.7,-7.1 -5.8,3.4 -6.1,-0.2 -4.6,-5.3 -12.2,-5.1 -13,1.6 -3.2,3 -1.6,8 -3.5,5.5 -0.8,12.4 -0.5,4.6 2.8,8.2 -2.4,5.6 1.3,3.7 -5.9,8.5 -3.7,4.3 -2.3,8.7 0.3,8.8 -0.6,22.3 10.7,0 9.2,-0.1 8.6,9.1 4.1,10 6.5,8.6 9.8,0.3 4.7,-3.1 4.6,0.8 12.7,-5 3.1,-9.8 5.7,-13.4 3.6,-0.1 7.2,-8.1 4.6,-0.2 6.9,5.7 8.3,-4.7 1.1,-5.7 2.7,-5.6 1.9,-7 6.4,-5.7 2.4,-9.7 2.6,-3.1 1.6,-7.2 3.1,-8.8 10.2,-10.7 0.5,-4.6 1.3,-2.5 -4.9,-5.5 z"
                  fill={COUNTRY_COLORS["Nigeria"]}
                  fillOpacity={0.7}
                  stroke={COUNTRY_COLORS["Nigeria"]}
                  strokeWidth={1.5}
                  strokeLinejoin="round"
              />
              {/* Ghana */}
              <path
                  d="m 296.4,364.9 -5.6,-1.1 -3.9,2.2 -5.4,-1 -21.1,0.6 -0.3,7.9 1.6,10.4 3.2,19.7 -5.1,11.6 -3.2,15.6 5.2,11.9 -0.5,5.5 10.9,3.9 11,-4 6.7,-4.7 19.2,-8.1 -2.8,-4.9 -3.2,-8.8 -1,-6.8 2.7,-12.5 -3,-5 -1.2,-10.9 0,-10.1 -5.1,-7.1 0.9,-4.3 z"
                  fill={COUNTRY_COLORS["Ghana"]}
                  fillOpacity={0.7}
                  stroke={COUNTRY_COLORS["Ghana"]}
                  strokeWidth={1.5}
                  strokeLinejoin="round"
              />
              {/* Liberia */}
              <path
                  d="m 193.3,411 -3.4,-0.4 -2.6,5.6 -3.4,-0.1 -2.4,-2.9 0.9,-5.6 -5.1,-8.5 -3.2,1.6 -2.6,0.3 -5.7,6.5 -5.5,7.5 -0.7,4 -2.9,4.4 8.1,8.9 10.4,7.6 11,10.5 12.6,6.6 3.2,-0.1 1,-11.4 1.1,-1.7 -0.3,-5.5 -5.2,-5.8 -3.8,-0.9 -3.6,-3.8 2.7,-6.1 -1.2,-6.7 0.6,-4 z"
                  fill={COUNTRY_COLORS["Liberia"]}
                  fillOpacity={0.7}
                  stroke={COUNTRY_COLORS["Liberia"]}
                  strokeWidth={1.5}
                  strokeLinejoin="round"
              />
              {/* Sierra Leone */}
              <path
                  d="m 171.5,401 -3.3,0.8 0.1,-5.1 -1.9,-3.6 0.4,-4 -2.6,-5.8 -3.3,-5 -9.7,0 -2.9,2.6 -3.3,0.3 -2.1,3 -1.5,3.8 -6.5,6.1 1.4,10.3 2.1,5 6.3,7.4 8.7,5.6 3.3,1 2.9,-4.4 0.7,-4 5.5,-7.5 5.7,-6.5 z"
                  fill={COUNTRY_COLORS["Sierra Leone"]}
                  fillOpacity={0.7}
                  stroke={COUNTRY_COLORS["Sierra Leone"]}
                  strokeWidth={1.5}
                  strokeLinejoin="round"
              />
              {/* The Gambia */}
              <path
                  d="m 91.9,335.4 11,0.2 3,-1.9 2.2,-0.1 4.5,-3.2 5.2,2.9 5.2,0.3 5.3,-3.1 -2.4,-4 -4,2.3 -3.8,-0.1 -4.7,-3.4 -3.8,0.2 -2.8,3.3 -13.2,0.4 -1.7,6.2 z"
                  fill={COUNTRY_COLORS["The Gambia"]}
                  fillOpacity={0.7}
                  stroke={COUNTRY_COLORS["The Gambia"]}
                  strokeWidth={1.5}
                  strokeLinejoin="round"
              />
            </svg>
          </div>

          <p
              className="font-mono text-[10px] tracking-[0.06em] mt-3 leading-relaxed"
              style={{ color: "var(--color-muted)" }}
          >
            Nigeria · Ghana · Liberia · Sierra Leone · The Gambia
          </p>
        </div>

        <div
            className="p-5 border rounded-sm"
            style={{ borderColor: "var(--color-line)", backgroundColor: "var(--color-bg-soft)" }}
        >
          <div className="font-mono text-[10px] tracking-[0.14em] uppercase mb-4" style={{ color: "var(--color-muted)" }}>
            Jump to stage
          </div>
          <ol className="flex flex-col">
            {TIMELINE.map((stage) => {
              const status = now ? getStageStatus(stage, now) : "upcoming";
              const isActive = status === "active";
              const isComplete = status === "complete";
              const accent = PHASE_COLORS[stage.phase];
              return (
                  <li key={stage.number} className="border-b last:border-b-0" style={{ borderColor: "var(--color-line)" }}>
                    <a
                        href={`#stage-${stage.number}`}
                        className="group flex items-center gap-3 py-2.5 transition-opacity hover:opacity-100"
                        style={{ opacity: isComplete ? 0.5 : 1 }}
                    >
                  <span className="font-mono text-[10px] w-5 flex-shrink-0" style={{ color: "var(--color-muted)" }}>
                    {stage.number}
                  </span>
                      <span
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{
                            backgroundColor: isActive ? accent : isComplete ? "var(--color-muted)" : "var(--color-line)",
                            boxShadow: isActive ? `0 0 0 3px color-mix(in srgb, ${accent} 25%, transparent)` : "none",
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
                          <span className="font-mono text-[9px] uppercase tracking-[0.1em] flex-shrink-0" style={{ color: accent }}>
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