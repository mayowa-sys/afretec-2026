"use client";

import { Trophy, GraduationCap, Plane, Megaphone, Network } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SupportingPrize {
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
  accent: string;
}

const SUPPORTING_PRIZES: SupportingPrize[] = [
  {
    icon: Trophy,
    label: "Special Feature",
    title: "$700 MathWorks Prize",
    description:
      "A dedicated MathWorks prize pool awarded for technical excellence, plus MATLAB and Simulink training resources for finalist teams.",
    accent: "var(--color-blue)",
  },
  {
    icon: GraduationCap,
    label: "For every applicant",
    title: "Pre-selection bootcamp",
    description:
      "Two weeks of expert-led training in design thinking, problem solving, communication, and pitching — open to every applying team.",
    accent: "var(--color-warm)",
  },
  {
    icon: Plane,
    label: "For the 15 finalists",
    title: "Travel & stay covered",
    description:
      "Finalists from across West Africa fly to Lagos for the on-site post-selection bootcamp and final pitch. Flights, accommodation, and meals provided.",
    accent: "var(--color-blue-deep)",
  },
  {
    icon: Megaphone,
    label: "October 12 — 13",
    title: "Innovation Showcase",
    description:
      "Winners are showcased during UNILAG International Week — in front of press, partners, faculty, and the wider AFRETEC network across Africa.",
    accent: "var(--color-signal)",
  },
  {
    icon: Network,
    label: "Lifelong",
    title: "AFRETEC network access",
    description:
      "Join a continent-wide network of African innovators backed by Carnegie Mellon Africa — mentorship, alumni, and ongoing opportunities long after the challenge ends.",
    accent: "var(--color-warm)",
  },
];

export function Prizes() {
  return (
    <section
      id="prizes"
      className="relative px-5 md:px-10 py-24 md:py-32 z-10"
    >
      <div className="max-w-[1600px] mx-auto">

        {/* Section header */}
        <div
          className="flex items-center gap-3 font-mono text-[11px] tracking-[0.14em] uppercase mb-4"
          style={{ color: "var(--color-muted)" }}
        >
          <span className="inline-block w-8 h-px" style={{ backgroundColor: "var(--color-ink)" }} />
          <span>Section 04 · What you win</span>
        </div>

        <h2
          className="font-display font-normal leading-[0.95] tracking-[-0.03em] mb-6 max-w-[1100px]"
          style={{
            fontSize: "clamp(40px, 6.5vw, 96px)",
            fontVariationSettings: "'opsz' 144, 'SOFT' 30",
            color: "var(--color-ink)",
          }}
        >
          More than a{" "}
          <em
            className="italic font-light"
            style={{
              color: "var(--color-blue)",
              fontVariationSettings: "'opsz' 144, 'SOFT' 100",
            }}
          >
            prize.
          </em>
        </h2>

        <p
          className="text-[17px] md:text-[19px] leading-[1.5] max-w-[680px] mb-16 md:mb-20"
          style={{ color: "var(--color-ink-soft)" }}
        >
          A meaningful pot of money — and a path that gives every team
          something real, win or lose.
        </p>

        {/* The main prize: ₦4.5M as the editorial centerpiece */}
        <div
          className="relative mb-20 md:mb-24 overflow-hidden rounded-sm border"
          style={{
            borderColor: "var(--color-ink)",
            backgroundColor: "var(--color-ink)",
            color: "var(--color-bg)",
          }}
        >
          {/* Decorative grain layer */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.15 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
              mixBlendMode: "screen",
            }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 p-8 md:p-14 lg:p-20 items-center">

            {/* Left: the number */}
            <div>
              <div
                className="font-mono text-[11px] tracking-[0.18em] uppercase mb-6 flex items-center gap-3"
                style={{ color: "var(--color-bg)", opacity: 0.6 }}
              >
                <span
                  className="inline-block w-8 h-px"
                  style={{ backgroundColor: "var(--color-bg)" }}
                />
                <span>Total prize pool</span>
              </div>

              <div
                className="font-display font-normal leading-[0.85] tracking-[-0.05em] mb-6"
                style={{
                  fontSize: "clamp(80px, 14vw, 220px)",
                  fontVariationSettings: "'opsz' 144, 'SOFT' 20",
                  color: "var(--color-bg)",
                }}
              >
                <span className="opacity-60" style={{ fontSize: "0.5em", verticalAlign: "0.4em", marginRight: "0.05em" }}>
                  ₦
                </span>
                4.5
                <em
                  className="italic font-light"
                  style={{
                    color: "var(--color-signal)",
                    fontVariationSettings: "'opsz' 144, 'SOFT' 100",
                  }}
                >
                  M
                </em>
              </div>

              <p
                className="text-[17px] md:text-[19px] leading-[1.5] max-w-[520px]"
                style={{ color: "var(--color-bg)", opacity: 0.75 }}
              >
                Awarded across the top winning teams at the Innovation Showcase
                in October. Funded by AFRETEC, backed by Carnegie Mellon Africa.
              </p>
            </div>

            {/* Right: a vertical decorative seal */}
            <div className="hidden lg:flex flex-col items-end justify-center gap-4 pr-2">
              <div
                className="font-mono text-[10px] tracking-[0.2em] uppercase"
                style={{ color: "var(--color-bg)", opacity: 0.5 }}
              >
                Edition III
              </div>
              <div
                className="font-display italic font-light"
                style={{
                  fontSize: "44px",
                  color: "var(--color-bg)",
                  fontVariationSettings: "'opsz' 60, 'SOFT' 100",
                  lineHeight: 1,
                }}
              >
                MMXXVI
              </div>
              <div
                className="w-16 h-px"
                style={{ backgroundColor: "var(--color-bg)", opacity: 0.3 }}
              />
              <div
                className="font-mono text-[10px] tracking-[0.2em] uppercase"
                style={{ color: "var(--color-bg)", opacity: 0.5 }}
              >
                AFRETEC × UNILAG
              </div>
            </div>
          </div>
        </div>

        {/* Supporting prizes header */}
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10 md:mb-12">
          <h3
            className="font-display font-normal leading-[1.0] tracking-[-0.02em] max-w-[700px]"
            style={{
              fontSize: "clamp(28px, 3.8vw, 48px)",
              fontVariationSettings: "'opsz' 60, 'SOFT' 40",
              color: "var(--color-ink)",
            }}
          >
            And{" "}
            <em
              className="italic font-light"
              style={{
                color: "var(--color-blue)",
                fontVariationSettings: "'opsz' 60, 'SOFT' 100",
              }}
            >
              everything else
            </em>{" "}
            that comes with it.
          </h3>
          <span
            className="font-mono text-[10px] tracking-[0.14em] uppercase"
            style={{ color: "var(--color-muted)" }}
          >
            05 supporting prizes
          </span>
        </div>

        {/* Supporting prizes grid — 5 items, asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {SUPPORTING_PRIZES.map((prize, i) => (
            <PrizeCard key={prize.title} prize={prize} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PrizeCard({ prize, index }: { prize: SupportingPrize; index: number }) {
  const Icon = prize.icon;

  return (
    <div
      className="relative group p-6 md:p-7 border rounded-sm transition-all hover:-translate-y-1"
      style={{
        borderColor: "var(--color-line)",
        backgroundColor: "var(--color-bg-soft)",
      }}
    >
      {/* Index number, top-right */}
      <span
        className="absolute top-5 right-6 font-mono text-[10px] tracking-[0.14em]"
        style={{ color: "var(--color-muted)" }}
      >
        {String(index + 1).padStart(2, "0")} / 05
      </span>

      {/* Icon in colored circle */}
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
        style={{
          backgroundColor: `color-mix(in srgb, ${prize.accent} 14%, transparent)`,
          color: prize.accent,
        }}
      >
        <Icon size={20} strokeWidth={1.8} />
      </div>

      {/* Eyebrow label */}
      <div
        className="font-mono text-[10px] tracking-[0.14em] uppercase mb-2"
        style={{ color: prize.accent }}
      >
        {prize.label}
      </div>

      {/* Title */}
      <h4
        className="font-display font-medium leading-[1.15] tracking-tight mb-3"
        style={{
          fontSize: "clamp(20px, 2vw, 26px)",
          fontVariationSettings: "'opsz' 36, 'SOFT' 40",
          color: "var(--color-ink)",
        }}
      >
        {prize.title}
      </h4>

      {/* Description */}
      <p
        className="text-[14px] md:text-[15px] leading-[1.55]"
        style={{ color: "var(--color-ink-soft)" }}
      >
        {prize.description}
      </p>
    </div>
  );
}
