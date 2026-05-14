"use client";

interface Winner {
  place: 1 | 2 | 3;
  team: string;
  university: string;
  project: string;
  description: string;
  prize: string;
}

interface Edition {
  year: string;
  name: string;
  shortName: string;
  theme: string;
  finaleDate: string;
  winners: Winner[];
  stats: { value: string; label: string }[];
  otherTeams?: string;
}

const EDITIONS: Edition[] = [
  {
    year: "2025",
    name: "Innovation in Health Challenge",
    shortName: "Health",
    theme: "Innovative, scalable solutions to critical healthcare challenges facing Africa.",
    finaleDate: "June 27, 2025 · College of Medicine, UNILAG",
    winners: [
      {
        place: 1,
        team: "Pharmacode",
        university: "University of Lagos",
        project: "Nutritec AI",
        description:
          "Saliva-based MammaGlobin test strip + web app helping women 25–55 detect breast cancer risk affordably, with USSD access for rural users.",
        prize: "₦2,000,000",
      },
      {
        place: 2,
        team: "MedPatch",
        university: "Thomas Adewunmi University, Kwara",
        project: "AI Micro-Needle Patch",
        description: "Wearable micro-needle patch powered by AI for early disease detection and monitoring.",
        prize: "₦1,500,000",
      },
      {
        place: 3,
        team: "EmergiBridge",
        university: "University of Lagos",
        project: "EmergiBridge",
        description: "AI-powered smart triage and real-time referral app connecting hospitals to optimize bed allocation.",
        prize: "₦1,000,000",
      },
    ],
    stats: [
      { value: "102", label: "Applications" },
      { value: "339", label: "Students" },
      { value: "24", label: "Universities" },
      { value: "14", label: "Finalists" },
    ],
    otherTeams: "AidCare · AutoDetect · AutoMed · Imago AI · Mindful Discipline · PayG · Pulse+ · RuralPhysio · ScriptSafe · SmartCare · VivaMoms",
  },
  {
    year: "2024",
    name: "Energy Innovation Challenge",
    shortName: "Energy",
    theme: "Sustainable energy solutions by Nigeria's brightest undergraduate teams.",
    finaleDate: "October 22, 2024 · UNILAG International Week",
    winners: [
      {
        place: 1,
        team: "Phoenix",
        university: "University of Lagos",
        project: "Sustainable Energy Solution",
        description: "Led by Folarin Eribake. Four-member team scored 48.3 / 50 — the highest in the competition.",
        prize: "₦2,000,000",
      },
      {
        place: 2,
        team: "Agro-Alliance",
        university: "LAUTECH, Ogbomoso",
        project: "Agro-Energy Innovation",
        description: "Scored 46.7 points — a jump from 4th place in the previous edition.",
        prize: "—",
      },
      {
        place: 3,
        team: "Green Cell Innovation",
        university: "University of Lagos",
        project: "Green Energy Cell",
        description: "Third place with 39.3 points.",
        prize: "—",
      },
    ],
    stats: [
      { value: "I", label: "Edition" },
      { value: "48.3/50", label: "Top score" },
      { value: "Oct 22", label: "Finale" },
    ],
  },
];

export function PastEditions() {
  return (
    <section
      id="past"
      className="relative px-5 md:px-10 py-16 md:py-24 z-10"
      style={{ backgroundColor: "var(--color-bg-soft)" }}
    >
      <div className="max-w-[1600px] mx-auto">

        {/* Header */}
        <div
          className="flex items-center gap-3 font-mono text-[11px] tracking-[0.14em] uppercase mb-4"
          style={{ color: "var(--color-muted)" }}
        >
          <span className="inline-block w-8 h-px" style={{ backgroundColor: "var(--color-ink)" }} />
          <span>Section 05 · Past editions</span>
        </div>

        <div className="flex items-end justify-between flex-wrap gap-4 mb-10 md:mb-12">
          <h2
            className="font-display font-normal leading-[0.95] tracking-[-0.03em]"
            style={{
              fontSize: "clamp(36px, 5.5vw, 80px)",
              fontVariationSettings: "'opsz' 144, 'SOFT' 30",
              color: "var(--color-ink)",
            }}
          >
            Built{" "}
            <em
              className="italic font-light"
              style={{
                color: "var(--color-blue)",
                fontVariationSettings: "'opsz' 144, 'SOFT' 100",
              }}
            >
              before.
            </em>
          </h2>
          <p
            className="text-[14px] md:text-[15px] leading-[1.5] max-w-[380px]"
            style={{ color: "var(--color-ink-soft)" }}
          >
            Two editions. Real winners. Real impact.
          </p>
        </div>

        <div className="flex flex-col gap-8 md:gap-10">
          {EDITIONS.map((edition) => (
            <EditionRow key={edition.year} edition={edition} />
          ))}
        </div>

      </div>
    </section>
  );
}

function EditionRow({ edition }: { edition: Edition }) {
  return (
    <article
      className="border rounded-sm overflow-hidden"
      style={{ borderColor: "var(--color-line)" }}
    >
      {/* Edition header strip */}
      <div
        className="flex items-center justify-between px-5 md:px-7 py-4 border-b"
        style={{
          backgroundColor: "var(--color-bg)",
          borderColor: "var(--color-line)",
        }}
      >
        <div className="flex items-center gap-4 md:gap-6">
          <span
            className="font-display font-medium leading-none tracking-[-0.03em]"
            style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontVariationSettings: "'opsz' 60, 'SOFT' 30",
              color: "var(--color-ink)",
            }}
          >
            {edition.year}
          </span>
          <div className="flex flex-col">
            <span
              className="font-display font-normal text-[14px] md:text-[16px] leading-tight tracking-tight"
              style={{
                fontVariationSettings: "'opsz' 24, 'SOFT' 40",
                color: "var(--color-ink)",
              }}
            >
              {edition.name}
            </span>
            <span
              className="font-mono text-[10px] tracking-[0.1em] uppercase mt-0.5"
              style={{ color: "var(--color-muted)" }}
            >
              {edition.finaleDate}
            </span>
          </div>
        </div>

        {/* Stats inline */}
        <div className="hidden sm:flex items-center gap-5 md:gap-8">
          {edition.stats.map((s) => (
            <div key={s.label} className="text-right">
              <div
                className="font-display font-medium leading-none tracking-tight"
                style={{
                  fontSize: "clamp(16px, 1.6vw, 20px)",
                  fontVariationSettings: "'opsz' 36, 'SOFT' 40",
                  color: "var(--color-ink)",
                }}
              >
                {s.value}
              </div>
              <div
                className="font-mono text-[9px] tracking-[0.1em] uppercase mt-0.5"
                style={{ color: "var(--color-muted)" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Winner rows */}
      <div className="divide-y" style={{ borderColor: "var(--color-line)" }}>
        {edition.winners.map((w) => (
          <WinnerRow key={w.place} winner={w} />
        ))}
      </div>

      {/* Other teams footer */}
      {edition.otherTeams && (
        <div
          className="px-5 md:px-7 py-3 border-t"
          style={{
            borderColor: "var(--color-line)",
            backgroundColor: "var(--color-bg)",
          }}
        >
          <span
            className="font-mono text-[10px] tracking-[0.12em] uppercase mr-3"
            style={{ color: "var(--color-muted)" }}
          >
            Also competed:
          </span>
          <span
            className="text-[12px] leading-[1.6]"
            style={{ color: "var(--color-muted)" }}
          >
            {edition.otherTeams}
          </span>
        </div>
      )}
    </article>
  );
}

function WinnerRow({ winner }: { winner: Winner }) {
  const isFirst = winner.place === 1;
  const placeLabel = ["1st", "2nd", "3rd"][winner.place - 1];

  return (
    <div
      className="grid grid-cols-[44px_1fr_auto] md:grid-cols-[56px_1fr_auto] gap-3 md:gap-5 items-start px-5 md:px-7 py-4"
      style={{
        backgroundColor: isFirst
          ? "color-mix(in srgb, var(--color-blue) 5%, var(--color-bg))"
          : "var(--color-bg-soft)",
      }}
    >
      {/* Place */}
      <div className="flex flex-col items-start pt-0.5">
        <span
          className="font-display font-medium leading-none"
          style={{
            fontSize: isFirst ? "22px" : "16px",
            fontVariationSettings: "'opsz' 36, 'SOFT' 40",
            color: isFirst ? "var(--color-blue)" : "var(--color-muted)",
          }}
        >
          {placeLabel}
        </span>
      </div>

      {/* Team + project */}
      <div className="min-w-0">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span
            className="font-display font-medium leading-tight tracking-tight"
            style={{
              fontSize: isFirst ? "clamp(15px, 1.6vw, 18px)" : "14px",
              fontVariationSettings: "'opsz' 24, 'SOFT' 40",
              color: "var(--color-ink)",
            }}
          >
            Team {winner.team}
          </span>
          <span
            className="font-mono text-[10px] tracking-[0.08em]"
            style={{ color: "var(--color-muted)" }}
          >
            {winner.university}
          </span>
        </div>
        <div
          className="font-mono text-[10px] tracking-[0.12em] uppercase mb-1"
          style={{ color: "var(--color-blue)" }}
        >
          {winner.project}
        </div>
        {isFirst && (
          <p
            className="text-[13px] leading-[1.5]"
            style={{ color: "var(--color-ink-soft)" }}
          >
            {winner.description}
          </p>
        )}
      </div>

      {/* Prize */}
      {winner.prize !== "—" && (
        <div className="text-right flex-shrink-0 pt-0.5">
          <span
            className="font-display font-medium leading-none"
            style={{
              fontSize: isFirst ? "clamp(14px, 1.4vw, 16px)" : "13px",
              fontVariationSettings: "'opsz' 24, 'SOFT' 40",
              color: "var(--color-ink)",
            }}
          >
            {winner.prize}
          </span>
        </div>
      )}
    </div>
  );
}
