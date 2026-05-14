"use client";

import { useEffect, useState } from "react";
import { TIMELINE, getStageStatus, type StageStatus, type TimelineStage } from "@/lib/timeline";
import { TimelineSidebar } from "./TimelineSidebar";

const PHASE_COLORS: Record<string, string> = {
  Apply: "var(--color-blue)",
  Bootcamp: "var(--color-warm)",
  Build: "var(--color-signal)",
  Showcase: "var(--color-blue-deep)",
};

export function Timeline() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="timeline" className="relative px-5 md:px-10 py-24 md:py-32 z-10">
      <div className="max-w-[1600px] mx-auto">

        {/* Section header */}
        <div
          className="flex items-center gap-3 font-mono text-[11px] tracking-[0.14em] uppercase mb-4"
          style={{ color: "var(--color-muted)" }}
        >
          <span className="inline-block w-8 h-px" style={{ backgroundColor: "var(--color-ink)" }} />
          <span>Section 02 · How it works</span>
        </div>

        <h2
          className="font-display font-normal leading-[0.95] tracking-[-0.03em] mb-6 max-w-[1100px]"
          style={{
            fontSize: "clamp(40px, 6.5vw, 96px)",
            fontVariationSettings: "'opsz' 144, 'SOFT' 30",
            color: "var(--color-ink)",
          }}
        >
          Four phases.{" "}
          <em
            className="italic font-light"
            style={{
              color: "var(--color-blue)",
              fontVariationSettings: "'opsz' 144, 'SOFT' 100",
            }}
          >
            One journey.
          </em>
        </h2>

        <p
          className="text-[17px] md:text-[19px] leading-[1.5] max-w-[640px] mb-16 md:mb-20"
          style={{ color: "var(--color-ink-soft)" }}
        >
          From application to showcase, every team walks the same path —
          backed by training, mentorship, and a shot at the finals.
        </p>

        {/* Phase summary cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-20 md:mb-24">
          {(["Apply", "Bootcamp", "Build", "Showcase"] as const).map((phase, i) => (
            <PhaseSummary key={phase} phase={phase} index={i} />
          ))}
        </div>

        {/* Timeline + sidebar two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-start">

          {/* Left: detailed timeline */}
          <div className="relative">
            <div
              className="absolute left-[28px] md:left-[60px] top-0 bottom-0 w-px"
              style={{ backgroundColor: "var(--color-line)" }}
              aria-hidden="true"
            />
            <ol className="flex flex-col gap-12 md:gap-16">
              {TIMELINE.map((stage) => {
                const status = now ? getStageStatus(stage, now) : "upcoming";
                return (
                  <Stage key={stage.number} stage={stage} status={status} />
                );
              })}
            </ol>
          </div>

          {/* Right: sticky sidebar — hidden on mobile */}
          <TimelineSidebar now={now} />

        </div>
      </div>
    </section>
  );
}

function PhaseSummary({ phase, index }: { phase: "Apply" | "Bootcamp" | "Build" | "Showcase"; index: number }) {
  const subtitle: Record<typeof phase, string> = {
    Apply: "Submit your team",
    Bootcamp: "Train with the best",
    Build: "Develop your POC",
    Showcase: "Pitch to win",
  };

  return (
    <div
      className="relative p-5 md:p-6 border rounded-sm"
      style={{
        borderColor: "var(--color-line)",
        backgroundColor: "var(--color-bg-soft)",
      }}
    >
      <span
        className="font-mono text-[10px] tracking-[0.14em] uppercase"
        style={{ color: PHASE_COLORS[phase] }}
      >
        Phase {String(index + 1).padStart(2, "0")}
      </span>
      <div
        className="font-display font-medium text-[22px] md:text-[28px] mt-2 leading-[1.05] tracking-tight"
        style={{
          fontVariationSettings: "'opsz' 36, 'SOFT' 40",
          color: "var(--color-ink)",
        }}
      >
        {phase}
      </div>
      <div className="text-[12px] md:text-[13px] mt-1" style={{ color: "var(--color-muted)" }}>
        {subtitle[phase]}
      </div>
    </div>
  );
}

function Stage({ stage, status }: { stage: TimelineStage; status: StageStatus }) {
  const isActive = status === "active";
  const isComplete = status === "complete";
  const accent = PHASE_COLORS[stage.phase];

  return (
    <li
      id={`stage-${stage.number}`}
      className="relative grid grid-cols-[56px_1fr] md:grid-cols-[120px_1fr] gap-4 md:gap-10 scroll-mt-32"
    >
      {/* Stage number + dot on the line */}
      <div className="relative flex flex-col items-end pr-2 md:pr-4">
        <div
          className="absolute left-[28px] md:left-[60px] top-2 -translate-x-1/2 w-3 h-3 rounded-full border-2"
          style={{
            backgroundColor: isActive ? accent : isComplete ? "var(--color-ink)" : "var(--color-bg)",
            borderColor: isActive ? accent : "var(--color-line)",
            boxShadow: isActive
              ? `0 0 0 6px color-mix(in srgb, ${accent} 18%, transparent)`
              : "none",
          }}
        />
        <span className="font-mono text-[11px] tracking-[0.14em]" style={{ color: "var(--color-muted)" }}>
          {stage.number}
        </span>
      </div>

      {/* Stage content */}
      <div className="pb-2">
        <div className="flex items-center gap-3 flex-wrap mb-2">
          <span
            className="font-mono text-[10px] tracking-[0.14em] uppercase px-2 py-0.5 rounded-sm border"
            style={{
              color: accent,
              borderColor: `color-mix(in srgb, ${accent} 30%, transparent)`,
              backgroundColor: `color-mix(in srgb, ${accent} 8%, transparent)`,
            }}
          >
            {stage.phase}
          </span>
          {stage.highlight && (
            <span className="font-mono text-[10px] tracking-[0.14em] uppercase" style={{ color: "var(--color-warm)" }}>
              ★ {stage.highlight}
            </span>
          )}
          {isActive && (
            <span
              className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.14em] uppercase"
              style={{ color: accent }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  backgroundColor: accent,
                  animation: "pulse-dot 1.5s ease-in-out infinite",
                }}
              />
              Happening now
            </span>
          )}
        </div>

        <h3
          className="font-display font-medium leading-[1.05] tracking-tight mb-2"
          style={{
            fontSize: "clamp(24px, 3.2vw, 40px)",
            fontVariationSettings: "'opsz' 48, 'SOFT' 40",
            color: isComplete ? "var(--color-muted)" : "var(--color-ink)",
            textDecoration: isComplete ? "line-through" : "none",
          }}
        >
          {stage.title}
        </h3>

        <div
          className="font-mono text-[12px] tracking-[0.08em] uppercase mb-4"
          style={{ color: "var(--color-muted)" }}
        >
          {stage.date}
        </div>

        <p
          className="text-[16px] md:text-[17px] leading-[1.55] mb-5 max-w-[620px]"
          style={{ color: "var(--color-ink-soft)" }}
        >
          {stage.description}
        </p>

        <ul className="flex flex-col gap-2 max-w-[620px]">
          {stage.details.map((d) => (
            <li key={d} className="flex items-start gap-3 text-[14px] md:text-[15px] leading-[1.5]" style={{ color: "var(--color-ink-soft)" }}>
              <span className="flex-shrink-0 w-1 h-1 rounded-full mt-[10px]" style={{ backgroundColor: accent }} />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
