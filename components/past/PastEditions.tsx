"use client";

import { ArrowUpRight } from "lucide-react";

interface Edition {
  year: string;
  edition: string;
  theme: string;
  tag: string;
  stat1: { value: string; label: string };
  stat2: { value: string; label: string };
  stat3: { value: string; label: string };
  description: string;
  url?: string;
  urlLabel?: string;
}

const EDITIONS: Edition[] = [
  {
    year: "2025",
    edition: "Edition II",
    tag: "Innovation in Health",
    theme: "Developing scalable healthcare solutions for Africa through student-led innovation.",
    stat1: { value: "102", label: "Applications" },
    stat2: { value: "339", label: "Students" },
    stat3: { value: "24", label: "Universities" },
    description:
        "The second edition challenged Nigerian undergraduate teams to tackle critical healthcare gaps — from AI diagnostics to maternal health and telemedicine. Teams went through a Young Innovators Forum with industry experts, a MATLAB webinar by MathWorks, and a grand finale held at the College of Medicine, UNILAG. Fourteen finalist teams competed across nine universities.",
    url: "https://afretec-unilag-innovation.onrender.com",
    urlLabel: "Visit the 2025 site",
  },
  {
    year: "2024",
    edition: "Edition I",
    tag: "Energy Innovation",
    theme: "Sustainable energy solutions developed by Nigeria's undergraduate innovators.",
    stat1: { value: "I", label: "Inaugural" },
    stat2: { value: "48.3/50", label: "Top score" },
    stat3: { value: "Oct 22", label: "Grand finale" },
    description:
        "The inaugural edition — organized by ITMO and FAB-LAB at UNILAG's International Week — invited undergraduate teams to tackle sustainable energy challenges. It set the template: rigorous judging, real prize money, and a showcase platform at one of Nigeria's most prominent academic events.",
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

          {/* Section header */}
          <div
              className="flex items-center gap-3 font-mono text-[11px] tracking-[0.14em] uppercase mb-4"
              style={{ color: "var(--color-muted)" }}
          >
          <span
              className="inline-block w-8 h-px"
              style={{ backgroundColor: "var(--color-ink)" }}
          />
            <span>Section 05 · Past editions</span>
          </div>

          <div className="flex items-end justify-between flex-wrap gap-4 mb-12 md:mb-14">
            <h2
                className="font-display font-normal leading-[0.95] tracking-[-0.03em]"
                style={{
                  fontSize: "clamp(36px, 5.5vw, 80px)",
                  fontVariationSettings: "'opsz' 144, 'SOFT' 30",
                  color: "var(--color-ink)",
                }}
            >
              Proven{" "}
              <em
                  className="italic font-light"
                  style={{
                    color: "var(--color-blue)",
                    fontVariationSettings: "'opsz' 144, 'SOFT' 100",
                  }}
              >
                twice.
              </em>
            </h2>
            <p
                className="text-[14px] md:text-[15px] leading-[1.5] max-w-[400px]"
                style={{ color: "var(--color-ink-soft)" }}
            >
              Two editions. Hundreds of student innovators. This is edition three.
            </p>
          </div>

          {/* Edition cards side by side on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {EDITIONS.map((ed) => (
                <EditionCard key={ed.year} edition={ed} />
            ))}
          </div>

        </div>
      </section>
  );
}

function EditionCard({ edition }: { edition: Edition }) {
  return (
      <article
          className="relative flex flex-col border rounded-sm overflow-hidden"
          style={{ borderColor: "var(--color-line)" }}
      >
        {/* Header */}
        <div
            className="px-6 md:px-7 pt-6 pb-5 border-b"
            style={{
              borderColor: "var(--color-line)",
              backgroundColor: "var(--color-bg)",
            }}
        >
          {/* Year + edition tag row */}
          <div className="flex items-start justify-between gap-4 mb-4">
          <span
              className="font-display font-medium leading-none tracking-[-0.04em]"
              style={{
                fontSize: "clamp(52px, 7vw, 80px)",
                fontVariationSettings: "'opsz' 144, 'SOFT' 20",
                color: "var(--color-ink)",
                lineHeight: 0.9,
              }}
          >
            {edition.year}
          </span>
            <span
                className="font-mono text-[10px] tracking-[0.14em] uppercase mt-1 text-right"
                style={{ color: "var(--color-muted)" }}
            >
            {edition.edition}<br />{edition.tag}
          </span>
          </div>

          {/* Theme */}
          <p
              className="font-display font-normal leading-[1.2] tracking-tight"
              style={{
                fontSize: "clamp(16px, 1.6vw, 19px)",
                fontVariationSettings: "'opsz' 24, 'SOFT' 50",
                color: "var(--color-ink-soft)",
              }}
          >
            {edition.theme}
          </p>
        </div>

        {/* Stats strip */}
        <div
            className="grid grid-cols-3 divide-x border-b"
            style={{
              borderColor: "var(--color-line)",
              backgroundColor: "var(--color-bg-soft)",
            }}
        >
          {[edition.stat1, edition.stat2, edition.stat3].map((s) => (
              <div key={s.label} className="flex flex-col items-center py-4 px-2">
            <span
                className="font-display font-medium leading-none tracking-tight"
                style={{
                  fontSize: "clamp(18px, 2vw, 24px)",
                  fontVariationSettings: "'opsz' 36, 'SOFT' 30",
                  color: "var(--color-ink)",
                }}
            >
              {s.value}
            </span>
                <span
                    className="font-mono text-[9px] tracking-[0.12em] uppercase mt-1.5"
                    style={{ color: "var(--color-muted)" }}
                >
              {s.label}
            </span>
              </div>
          ))}
        </div>

        {/* Description */}
        <div
            className="flex-1 px-6 md:px-7 py-6"
            style={{ backgroundColor: "var(--color-bg-soft)" }}
        >
          <p
              className="text-[14px] md:text-[15px] leading-[1.65]"
              style={{ color: "var(--color-ink-soft)" }}
          >
            {edition.description}
          </p>
        </div>

        {/* Link footer — only when url provided */}
        {edition.url && (
            <div
                className="px-6 md:px-7 py-4 border-t"
                style={{
                  borderColor: "var(--color-line)",
                  backgroundColor: "var(--color-bg)",
                }}
            >
              <a
                  href={edition.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 transition-all"
              >
            <span
                className="font-mono text-[11px] tracking-[0.14em] uppercase transition-colors"
                style={{ color: "var(--color-blue)" }}
            >
              {edition.urlLabel}
            </span>
                <span
                    className="w-6 h-6 rounded-full flex items-center justify-center transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{
                      backgroundColor: "color-mix(in srgb, var(--color-blue) 12%, transparent)",
                      color: "var(--color-blue)",
                    }}
                >
              <ArrowUpRight size={12} strokeWidth={2.5} />
            </span>
              </a>
            </div>
        )}
      </article>
  );
}