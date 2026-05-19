"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

interface QA {
  question: string;
  answer: string;
}

const FAQS: QA[] = [
  {
    question: "Who can apply?",
    answer:
      "Undergraduate students currently enrolled at a recognized university in Anglophone West Africa — Nigeria, Ghana, Liberia, Sierra Leone, or The Gambia. Teams must be multidisciplinary, which means including members from across Science, Technology, Engineering, Arts, Mathematics, Education, or Design.",
  },
  {
    question: "Can I apply as an individual?",
    answer:
      "No — this is a team competition. We strongly encourage teams of three to five members from at least two different disciplines, with at least one member from Arts, Humanities, Education, or Design. Building inclusive education solutions is interdisciplinary work; the team should reflect that.",
  },
  {
    question: "What if my team doesn't have an Arts & Humanities member yet?",
    answer:
      "Go find one. Walk over to the Faculty of Arts, Education, or Social Sciences and pitch your idea. This requirement isn't a formality — students from these disciplines bring perspectives on learners, language, design, and pedagogy that engineering teams routinely miss. They're often the reason a solution actually works in the field.",
  },
  {
    question: "I'm from a French-speaking West African university. Can I apply?",
    answer:
      "Not for this edition. Edition III is being piloted in Anglophone West Africa to keep delivery focused, but the AFRETEC network spans the continent and future editions are expected to broaden. We deeply value Francophone innovation and are working to make sure the next round opens doors.",
  },
  {
    question: "Do I need a finished idea, or just a concept?",
    answer:
      "Concept is enough at application stage. The pre-selection bootcamp exists specifically to sharpen ideas — design thinking, problem framing, solution development, pitching. You walk in with a concept and a team that cares about the problem; you walk out with the ability to pitch it credibly.",
  },
  {
    question: "What kind of problem should we be solving?",
    answer:
      "Anything that fits the theme: 'Digitally Enabled Inclusive Education — Expanding Access, Equity, and Opportunity for All.' That means solutions for learners who are currently underserved — students with disabilities, students in rural areas, students whose first language isn't English, students out of school, students in under-resourced classrooms. Digital tools, platforms, content, or systems that close those gaps.",
  },
  {
    question: "What's actually in the bootcamp?",
    answer:
      "Two weeks of intensive training covering design thinking, problem identification, critical thinking, solution development, communication, and pitching. Run by experienced facilitators. Every applying team attends — it's how we make sure every team gets a fair shot at the finals, regardless of how prepared they came in.",
  },
  {
    question: "If we make the finals, do we have to travel?",
    answer:
      "Yes — the 15 finalist teams come to the University of Lagos for the post-selection bootcamp and final pitch. Flights, accommodation, and meals are covered for teams traveling from outside Lagos. The grand showcase is then held during UNILAG International Week, October 12–13, 2026.",
  },
  {
    question: "What does the prize money cover, and how is it awarded?",
    answer:
      "A total prize pool of ₦4.5 million is awarded to the top winning teams at the final pitch, plus a special MathWorks prize pool of $700 with MATLAB and Simulink training resources for finalists. Funds are intended to support continued development of the winning solutions.",
  },
  {
    question: "When is the deadline, and where do I apply?",
    answer:
      "Applications close on May 31, 2026. Apply at bit.ly/UNILAGAFRETECInnovationChallenge3 — one application per team. No late entries.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative px-5 md:px-10 py-24 md:py-32 z-10"
      style={{ backgroundColor: "var(--color-bg-soft)" }}
    >
      <div className="max-w-[1600px] mx-auto">

        <div
          className="flex items-center gap-3 font-mono text-[11px] tracking-[0.14em] uppercase mb-4"
          style={{ color: "var(--color-muted)" }}
        >
          <span className="inline-block w-8 h-px" style={{ backgroundColor: "var(--color-ink)" }} />
          <span>Section 07 · Questions, answered</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">

          {/* Left: heading + intro (sticky on desktop) */}
          <div className="lg:sticky lg:top-32 self-start">
            <h2
              className="font-display font-normal leading-[0.95] tracking-[-0.03em] mb-6"
              style={{
                fontSize: "clamp(40px, 5.5vw, 80px)",
                fontVariationSettings: "'opsz' 144, 'SOFT' 30",
                color: "var(--color-ink)",
              }}
            >
              Before you{" "}
              <em
                className="italic font-light"
                style={{
                  color: "var(--color-blue)",
                  fontVariationSettings: "'opsz' 144, 'SOFT' 100",
                }}
              >
                apply.
              </em>
            </h2>
            <p
              className="text-[16px] md:text-[17px] leading-[1.55] mb-8 max-w-[440px]"
              style={{ color: "var(--color-ink-soft)" }}
            >
              The ten questions we expect most. If yours isn't here, reach out to the team —
              they'd rather answer once than have you not apply.
            </p>
            <div
              className="font-mono text-[10px] tracking-[0.14em] uppercase pt-4 border-t"
              style={{ color: "var(--color-muted)", borderColor: "var(--color-ink)" }}
            >
              10 questions · {FAQS.length} answers
            </div>
          </div>

          {/* Right: accordion */}
          <div className="flex flex-col">
            {FAQS.map((qa, i) => (
              <AccordionItem
                key={qa.question}
                qa={qa}
                index={i}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AccordionItem({
  qa,
  index,
  isOpen,
  onToggle,
}: {
  qa: QA;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="border-b"
      style={{ borderColor: "var(--color-line)" }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-start gap-5 md:gap-8 py-6 md:py-7 text-left group transition-colors"
      >
        <span
          className="font-mono text-[11px] tracking-[0.14em] mt-2 flex-shrink-0 w-8"
          style={{ color: "var(--color-muted)" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span
          className="flex-1 font-display font-medium leading-[1.2] tracking-tight transition-colors"
          style={{
            fontSize: "clamp(18px, 2.2vw, 26px)",
            fontVariationSettings: "'opsz' 36, 'SOFT' 40",
            color: isOpen ? "var(--color-ink)" : "var(--color-ink-soft)",
          }}
        >
          {qa.question}
        </span>

        <span
          className="flex-shrink-0 w-9 h-9 rounded-full border flex items-center justify-center mt-1 transition-all"
          style={{
            borderColor: isOpen ? "var(--color-ink)" : "var(--color-line)",
            backgroundColor: isOpen ? "var(--color-ink)" : "transparent",
            color: isOpen ? "var(--color-bg)" : "var(--color-ink-soft)",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          <Plus size={16} strokeWidth={2} />
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-500 ease-out"
        style={{
          maxHeight: isOpen ? "500px" : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="grid grid-cols-[32px_1fr_36px] md:grid-cols-[40px_1fr_36px] gap-5 md:gap-8 pb-7 md:pb-8">
          <div />
          <p
            className="text-[15px] md:text-[16px] leading-[1.6] max-w-[680px]"
            style={{ color: "var(--color-ink-soft)" }}
          >
            {qa.answer}
          </p>
          <div />
        </div>
      </div>
    </div>
  );
}
