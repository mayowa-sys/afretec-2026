"use client";

export function Eligibility() {
  return (
      <section
          id="eligibility"
          className="relative px-5 md:px-10 py-24 md:py-32 z-10"
          style={{ backgroundColor: "var(--color-bg-soft)" }}
      >
        <div className="max-w-[1600px] mx-auto">

          <div
              className="flex items-center gap-3 font-mono text-[11px] tracking-[0.14em] uppercase mb-4"
              style={{ color: "var(--color-muted)" }}
          >
            <span className="inline-block w-8 h-px" style={{ backgroundColor: "var(--color-ink)" }} />
            <span>Section 03 · Eligibility</span>
          </div>

          <h2
              className="font-display font-normal leading-[0.95] tracking-[-0.03em] mb-6 max-w-[1100px]"
              style={{
                fontSize: "clamp(40px, 6.5vw, 96px)",
                fontVariationSettings: "'opsz' 144, 'SOFT' 30",
                color: "var(--color-ink)",
              }}
          >
            Who can{" "}
            <em
                className="italic font-light"
                style={{
                  color: "var(--color-blue)",
                  fontVariationSettings: "'opsz' 144, 'SOFT' 100",
                }}
            >
              apply?
            </em>
          </h2>

          <p
              className="text-[17px] md:text-[19px] leading-[1.5] max-w-[680px] mb-16 md:mb-20"
              style={{ color: "var(--color-ink-soft)" }}
          >
            The challenge is open to undergraduate teams across five Anglophone West African
            countries. Teams must be multidisciplinary — and yes, that means inviting your friend
            from outside the engineering building.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">

            {/* Left: checklist */}
            <div className="flex flex-col gap-8 md:gap-10">
              <Rule
                  number="01"
                  title="Undergraduate students"
                  description="All team members must be currently enrolled undergraduate students at a recognized university."
              />
              <Rule
                  number="02"
                  title="From Anglophone West Africa"
                  description="Nigeria, Ghana, Liberia, Sierra Leone, or The Gambia. Teams can be from one institution or collaborate across institutions in the same country."
              />
              <Rule
                  number="03"
                  title="Multidisciplinary by design"
                  description="Teams must include members from across disciplines — Science, Technology, Engineering, Arts, Mathematics, Education, and Design."
                  highlight="New this year"
              />
              <Rule
                  number="04"
                  title="At least one Arts & Humanities member"
                  description="This isn't a bonus — it's a requirement. Inclusive education needs more than coders. Pull in your friends studying linguistics, education, design, sociology, or the arts."
                  accent={true}
              />
              <Rule
                  number="05"
                  title="Register before May 31, 2026"
                  description="One application per team. Submit via the official link below — no late entries."
              />

              {/* CTA – FIXED: added <a before href */}
              <div className="pt-4">
                <a
                    href="https://bit.ly/UNILAGAFRETECInnovationChallenge3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-6 py-4 rounded-full transition-all hover:-translate-y-0.5"
                    style={{
                      backgroundColor: "var(--color-ink)",
                      color: "var(--color-bg)",
                    }}
                >
                <span className="font-mono text-[11px] tracking-[0.14em] uppercase">
                  Apply
                </span>
                  <span
                      className="font-display text-[18px] font-medium"
                      style={{ fontVariationSettings: "'opsz' 24, 'SOFT' 40" }}
                  >
                  Register your team
                </span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <p
                    className="font-mono text-[10px] tracking-[0.1em] mt-3 uppercase"
                    style={{ color: "var(--color-muted)" }}
                >
                  bit.ly/UNILAGAFRETECInnovationChallenge3
                </p>
              </div>
            </div>

            {/* Right: STEAMED grid */}
            <div className="lg:sticky lg:top-32 self-start">
              <SteamedGrid />
            </div>

          </div>
        </div>
      </section>
  );
}

function Rule({
                number,
                title,
                description,
                highlight,
                accent,
              }: {
  number: string;
  title: string;
  description: string;
  highlight?: string;
  accent?: boolean;
}) {
  return (
      <div className="grid grid-cols-[56px_1fr] md:grid-cols-[80px_1fr] gap-4 md:gap-8">
        <div className="flex flex-col items-start">
        <span
            className="font-mono text-[12px] tracking-[0.14em] mt-1"
            style={{ color: accent ? "var(--color-blue)" : "var(--color-muted)" }}
        >
          {number}
        </span>
        </div>

        <div>
          <div className="flex items-center gap-3 flex-wrap mb-2">
            <h3
                className="font-display font-medium leading-[1.1] tracking-tight"
                style={{
                  fontSize: "clamp(20px, 2.4vw, 28px)",
                  fontVariationSettings: "'opsz' 36, 'SOFT' 40",
                  color: "var(--color-ink)",
                }}
            >
              {title}
            </h3>
            {highlight && (
                <span
                    className="font-mono text-[10px] tracking-[0.14em] uppercase"
                    style={{ color: "var(--color-warm)" }}
                >
              ★ {highlight}
            </span>
            )}
          </div>
          <p
              className="text-[15px] md:text-[16px] leading-[1.55] max-w-[560px]"
              style={{ color: "var(--color-ink-soft)" }}
          >
            {description}
          </p>
        </div>
      </div>
  );
}

interface Discipline {
  letter: string;
  name: string;
  field: string;
  color: string;
}

const DISCIPLINES: Discipline[] = [
  { letter: "S", name: "Science",     field: "Biology, Chemistry, Physics",   color: "var(--color-blue)"      },
  { letter: "T", name: "Technology",  field: "Computer Science, IT, Data",    color: "var(--color-blue-deep)" },
  { letter: "E", name: "Engineering", field: "Mechanical, Electrical, Civil", color: "var(--color-blue)"      },
  { letter: "A", name: "Arts",        field: "Design, Music, Visual Arts",    color: "var(--color-warm)"      },
  { letter: "M", name: "Mathematics", field: "Statistics, Applied Math",      color: "var(--color-blue-deep)" },
  { letter: "E", name: "Education",   field: "Pedagogy, Curriculum, Policy",  color: "var(--color-signal)"    },
  { letter: "D", name: "Design",      field: "UX, Product, Service Design",   color: "var(--color-warm)"      },
];

function SteamedGrid() {
  return (
      <div
          className="relative p-6 md:p-8 border rounded-sm"
          style={{ borderColor: "var(--color-line)", backgroundColor: "var(--color-bg)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
        <span
            className="font-mono text-[10px] tracking-[0.14em] uppercase"
            style={{ color: "var(--color-muted)" }}
        >
          What a STEAMED team looks like
        </span>
          <span
              className="font-mono text-[10px] tracking-[0.14em]"
              style={{ color: "var(--color-blue)" }}
          >
          7 disciplines
        </span>
        </div>

        {/* Central "YOUR TEAM" plate sitting above the grid */}
        <div className="flex justify-center mb-6">
          <div
              className="px-6 py-3 rounded-full font-mono text-[13px] tracking-[0.18em] font-bold"
              style={{
                backgroundColor: "var(--color-ink)",
                color: "var(--color-bg)",
              }}
          >
            YOUR TEAM
          </div>
        </div>

        {/* Vertical connector showing this all flows into the team */}
        <div className="flex justify-center -mt-3 mb-3">
          <div
              className="w-px h-8"
              style={{
                backgroundImage:
                    "linear-gradient(to bottom, var(--color-line) 50%, transparent 50%)",
                backgroundSize: "1px 6px",
                backgroundRepeat: "repeat-y",
              }}
          />
        </div>

        {/* The disciplines grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
          {DISCIPLINES.map((d, i) => (
              <DisciplineCard key={`${d.name}-${i}`} discipline={d} index={i} />
          ))}
        </div>

        <p
            className="font-mono text-[10px] tracking-[0.08em] mt-5 leading-relaxed"
            style={{ color: "var(--color-muted)" }}
        >
          STEAMED = Science · Technology · Engineering · Arts · Math · Education · Design
        </p>
      </div>
  );
}

function DisciplineCard({
                          discipline,
                          index,
                        }: {
  discipline: Discipline;
  index: number;
}) {
  return (
      <div
          className="relative flex items-center gap-3 p-3 rounded-sm border transition-transform hover:-translate-y-0.5"
          style={{
            borderColor: "var(--color-line)",
            backgroundColor: "var(--color-bg-soft)",
          }}
      >
        {/* Letter node */}
        <div
            className="relative flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: discipline.color }}
        >
        <span
            className="font-display font-bold text-[22px]"
            style={{ color: "var(--color-bg)", lineHeight: 1 }}
        >
          {discipline.letter}
        </span>
          {/* Pulse halo */}
          <span
              className="absolute inset-0 rounded-full"
              style={{
                backgroundColor: discipline.color,
                opacity: 0.25,
                animation: `pulse-dot 3s ease-in-out infinite`,
                animationDelay: `${index * 0.3}s`,
              }}
          />
        </div>

        {/* Text */}
        <div className="flex flex-col min-w-0">
        <span
            className="font-mono text-[11px] font-bold tracking-[0.1em] uppercase leading-tight"
            style={{ color: "var(--color-ink)" }}
        >
          {discipline.name}
        </span>
          <span
              className="font-mono text-[10px] leading-[1.35] mt-0.5"
              style={{ color: "var(--color-muted)" }}
          >
          {discipline.field}
        </span>
        </div>
      </div>
  );
}