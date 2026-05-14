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
  source: string;
  sourceUrl: string;
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
    source: "UNILAG · June 2025",
    sourceUrl: "https://unilag.edu.ng/",
    winners: [
      {
        place: 1,
        team: "Pharmacode",
        university: "University of Lagos",
        project: "Nutritec AI",
        description:
          "An at-home, saliva-based MammaGlobin test strip + web app helping women 25–55 detect breast cancer risk affordably, painlessly, with USSD access for rural users.",
        prize: "₦2,000,000",
      },
      {
        place: 2,
        team: "MedPatch",
        university: "Thomas Adewunmi University, Kwara",
        project: "AI Micro-Needle Patch",
        description:
          "A wearable micro-needle patch powered by AI for early disease detection and monitoring in African health contexts.",
        prize: "₦1,500,000",
      },
      {
        place: 3,
        team: "EmergiBridge",
        university: "University of Lagos",
        project: "EmergiBridge",
        description:
          "An AI-powered smart triage and real-time referral web application connecting hospitals to optimize bed allocation for critically ill patients.",
        prize: "₦1,000,000",
      },
    ],
    stats: [
      { value: "102", label: "Applications" },
      { value: "339", label: "Students" },
      { value: "24", label: "Universities" },
      { value: "14", label: "Finalist teams" },
    ],
    otherTeams:
      "AidCare · AutoDetect · AutoMed · Imago AI · Mindful Discipline · PayG · Pulse+ · RuralPhysio · ScriptSafe · SmartCare · VivaMoms",
  },
  {
    year: "2024",
    name: "Energy Innovation Challenge",
    shortName: "Energy",
    theme: "Sustainable energy solutions developed by Nigeria's brightest undergraduate teams.",
    finaleDate: "October 22, 2024 · UNILAG International Week",
    source: "MySchoolNews · October 2024",
    sourceUrl: "https://myschoolnews.ng/",
    winners: [
      {
        place: 1,
        team: "Phoenix",
        university: "University of Lagos",
        project: "Sustainable Energy Solution",
        description:
          "Led by Folarin Eribake, the four-member team impressed judges with creativity and problem-solving — scoring 48.3 out of 50.",
        prize: "₦2,000,000",
      },
      {
        place: 2,
        team: "Agro-Alliance",
        university: "Ladoke Akintola University of Technology",
        project: "Agro-Energy Innovation",
        description: "Earned 46.7 points — a notable jump from the team's fourth-place finish in the previous edition.",
        prize: "—",
      },
      {
        place: 3,
        team: "Green Cell Innovation",
        university: "University of Lagos",
        project: "Green Energy Cell",
        description: "Third place with 39.3 points in the showcase round.",
        prize: "—",
      },
    ],
    stats: [
      { value: "I", label: "Edition" },
      { value: "Oct 22", label: "Grand finale" },
      { value: "48.3 / 50", label: "Winning score" },
    ],
  },
];

export function PastEditions() {
  return (
    <section
      id="past"
      className="relative px-5 md:px-10 py-24 md:py-32 z-10"
      style={{ backgroundColor: "var(--color-bg-soft)" }}
    >
      <div className="max-w-[1600px] mx-auto">

        {/* Header — kept tight */}
        <div
          className="flex items-center gap-3 font-mono text-[11px] tracking-[0.14em] uppercase mb-4"
          style={{ color: "var(--color-muted)" }}
        >
          <span className="inline-block w-8 h-px" style={{ backgroundColor: "var(--color-ink)" }} />
          <span>Section 05 · Past editions</span>
        </div>

        <div className="flex items-end justify-between flex-wrap gap-6 mb-12 md:mb-16">
          <h2
            className="font-display font-normal leading-[0.95] tracking-[-0.03em] max-w-[1100px]"
            style={{
              fontSize: "clamp(40px, 6.5vw, 96px)",
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
            className="text-[15px] md:text-[16px] leading-[1.5] max-w-[420px]"
            style={{ color: "var(--color-ink-soft)" }}
          >
            Two editions, real winners, real money, real impact. This is what comes next when undergraduate teams take the work seriously.
          </p>
        </div>

        {/* Editions — one row per edition */}
        <div className="flex flex-col gap-12 md:gap-16">
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
      className="relative pt-10 md:pt-12 border-t"
      style={{ borderColor: "var(--color-ink)" }}
    >
      {/* Top meta row */}
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:gap-12 mb-8 md:mb-10">

        {/* Year + name */}
        <div>
          <div
            className="font-display font-medium leading-none tracking-[-0.03em] mb-2"
            style={{
              fontSize: "clamp(56px, 7vw, 92px)",
              fontVariationSettings: "'opsz' 144, 'SOFT' 30",
              color: "var(--color-ink)",
            }}
          >
            {edition.year}
          </div>
          <div
            className="font-mono text-[10px] tracking-[0.14em] uppercase"
            style={{ color: "var(--color-muted)" }}
          >
            Edition · {edition.shortName}
          </div>
        </div>

        {/* Title + theme */}
        <div>
          <h3
            className="font-display font-normal leading-[1.1] tracking-tight mb-3"
            style={{
              fontSize: "clamp(24px, 3vw, 36px)",
              fontVariationSettings: "'opsz' 48, 'SOFT' 40",
              color: "var(--color-ink)",
            }}
          >
            {edition.name}
          </h3>
          <p
            className="text-[15px] md:text-[16px] leading-[1.5] mb-4 max-w-[640px]"
            style={{ color: "var(--color-ink-soft)" }}
          >
            {edition.theme}
          </p>
          <div
            className="font-mono text-[10px] tracking-[0.1em] uppercase"
            style={{ color: "var(--color-muted)" }}
          >
            Grand finale · {edition.finaleDate}
          </div>
        </div>
      </div>

      {/* Body — winner highlight + runner-ups + stats */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 lg:gap-12">

        {/* Winners */}
        <div className="flex flex-col gap-3">
          {edition.winners.map((w) => (
            <WinnerCard key={w.place} winner={w} />
          ))}

          {edition.otherTeams && (
            <div className="mt-4">
              <div
                className="font-mono text-[10px] tracking-[0.14em] uppercase mb-2"
                style={{ color: "var(--color-muted)" }}
              >
                Other finalist teams
              </div>
              <p
                className="text-[13px] leading-[1.6]"
                style={{ color: "var(--color-ink-soft)" }}
              >
                {edition.otherTeams}
              </p>
            </div>
          )}
        </div>

        {/* Stats column */}
        <div className="flex flex-col gap-4">
          <div
            className="font-mono text-[10px] tracking-[0.14em] uppercase pb-2 border-b"
            style={{ color: "var(--color-muted)", borderColor: "var(--color-line)" }}
          >
            By the numbers
          </div>
          {edition.stats.map((s) => (
            <div key={s.label} className="flex items-baseline justify-between">
              <span
                className="font-display font-medium leading-none tracking-tight"
                style={{
                  fontSize: "clamp(22px, 2.2vw, 28px)",
                  fontVariationSettings: "'opsz' 48, 'SOFT' 40",
                  color: "var(--color-ink)",
                }}
              >
                {s.value}
              </span>
              <span
                className="font-mono text-[10px] tracking-[0.14em] uppercase"
                style={{ color: "var(--color-muted)" }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function WinnerCard({ winner }: { winner: Winner }) {
  const isFirst = winner.place === 1;
  const placeLabel = winner.place === 1 ? "1st" : winner.place === 2 ? "2nd" : "3rd";

  return (
    <div
      className="relative p-5 md:p-6 border rounded-sm"
      style={{
        borderColor: isFirst ? "var(--color-ink)" : "var(--color-line)",
        backgroundColor: isFirst ? "var(--color-bg)" : "var(--color-bg)",
      }}
    >
      <div className="grid grid-cols-[60px_1fr_auto] gap-4 items-start">
        {/* Place */}
        <div className="flex flex-col items-start">
          <span
            className="font-display font-medium leading-none"
            style={{
              fontSize: "clamp(28px, 2.6vw, 36px)",
              fontVariationSettings: "'opsz' 48, 'SOFT' 40",
              color: isFirst ? "var(--color-blue)" : "var(--color-ink)",
            }}
          >
            {placeLabel}
          </span>
          {isFirst && (
            <span
              className="font-mono text-[9px] tracking-[0.14em] uppercase mt-1"
              style={{ color: "var(--color-blue)" }}
            >
              ★ Winner
            </span>
          )}
        </div>

        {/* Team + project */}
        <div>
          <h4
            className="font-display font-medium leading-[1.15] tracking-tight mb-1"
            style={{
              fontSize: isFirst ? "clamp(20px, 2vw, 24px)" : "clamp(17px, 1.5vw, 19px)",
              fontVariationSettings: "'opsz' 36, 'SOFT' 40",
              color: "var(--color-ink)",
            }}
          >
            Team {winner.team}
            <span
              className="font-normal italic"
              style={{ color: "var(--color-muted)" }}
            >
              {" "}· {winner.university}
            </span>
          </h4>
          <div
            className="font-mono text-[10px] tracking-[0.14em] uppercase mb-2"
            style={{ color: "var(--color-blue)" }}
          >
            {winner.project}
          </div>
          {isFirst ? (
            <p
              className="text-[14px] md:text-[15px] leading-[1.55]"
              style={{ color: "var(--color-ink-soft)" }}
            >
              {winner.description}
            </p>
          ) : (
            <p
              className="text-[13px] leading-[1.55]"
              style={{ color: "var(--color-ink-soft)" }}
            >
              {winner.description}
            </p>
          )}
        </div>

        {/* Prize */}
        <div className="text-right flex-shrink-0">
          <div
            className="font-display font-medium leading-none tracking-tight"
            style={{
              fontSize: isFirst ? "clamp(18px, 1.6vw, 22px)" : "clamp(14px, 1.2vw, 16px)",
              fontVariationSettings: "'opsz' 36, 'SOFT' 40",
              color: "var(--color-ink)",
            }}
          >
            {winner.prize}
          </div>
        </div>
      </div>
    </div>
  );
}
