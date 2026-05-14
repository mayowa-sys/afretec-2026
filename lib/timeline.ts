export type StageStatus = "upcoming" | "active" | "complete";

export interface TimelineStage {
  number: string;
  phase: "Apply" | "Bootcamp" | "Build" | "Showcase";
  title: string;
  date: string;          // human-readable, e.g. "May 5 – 31, 2026"
  dateStart: string;     // ISO, used for status calculation
  dateEnd: string;       // ISO, used for status calculation
  description: string;
  details: string[];
  highlight?: string;    // optional callout like "New this year"
}

export const TIMELINE: TimelineStage[] = [
  {
    number: "01",
    phase: "Apply",
    title: "Applications Open",
    date: "May 5 — 31, 2026",
    dateStart: "2026-05-05",
    dateEnd: "2026-05-31T23:59:59+01:00",
    description:
      "Multidisciplinary undergraduate teams submit their applications.",
    details: [
      "Open to teams from Anglophone West Africa",
      "Teams must include members from Arts & Humanities",
      "Submit via the official registration link",
    ],
  },
  {
    number: "02",
    phase: "Bootcamp",
    title: "Pre-Selection Bootcamp",
    date: "Two weeks · Early June 2026",
    dateStart: "2026-06-01",
    dateEnd: "2026-06-14",
    description:
      "Every applicant team goes through intensive training covering design thinking, problem solving, communication, and pitching.",
    details: [
      "Design Thinking & Problem Identification",
      "Critical Thinking & Solution Development",
      "Communication & Pitching",
      "All applicants attend — equal preparation for every team",
    ],
    highlight: "New this year",
  },
  {
    number: "03",
    phase: "Bootcamp",
    title: "Pre-Selection Pitches",
    date: "Six days · Mid June 2026",
    dateStart: "2026-06-15",
    dateEnd: "2026-06-20",
    description:
      "Teams pitch what they've learned. Bootcamp facilitators score each pitch to determine finalists.",
    details: [
      "Scheduled across six days",
      "Scored by the same facilitators who ran the bootcamp",
      "Every team gets a fair, equal shot at the finals",
    ],
  },
  {
    number: "04",
    phase: "Build",
    title: "15 Finalists Announced",
    date: "Late June 2026",
    dateStart: "2026-06-21",
    dateEnd: "2026-06-25",
    description:
      "10 finalists from Nigerian institutions and 5 from other West African countries advance to the build phase.",
    details: [
      "10 teams from Nigeria",
      "5 teams from other Anglophone West African countries",
      "Inclusive representation across the region",
    ],
    highlight: "Inclusive selection",
  },
  {
    number: "05",
    phase: "Build",
    title: "Proof of Concept Development",
    date: "One month · July 2026",
    dateStart: "2026-06-26",
    dateEnd: "2026-07-25",
    description:
      "Finalists have one full month to develop a working proof of concept of their solution.",
    details: [
      "Build, test, iterate with mentor support",
      "Document the solution for the final pitch",
      "MathWorks training available to finalists",
    ],
  },
  {
    number: "06",
    phase: "Showcase",
    title: "Post-Selection Bootcamp & Final Pitch",
    date: "Three days · On-site at UNILAG",
    dateStart: "2026-09-15",
    dateEnd: "2026-09-17",
    description:
      "Finalists travel to the University of Lagos for an intensive in-person bootcamp followed by the final pitch.",
    details: [
      "Two days of intensive on-site preparation",
      "One day of final pitches before the judging panel",
      "Top three winners selected",
    ],
  },
  {
    number: "07",
    phase: "Showcase",
    title: "Innovation Showcase",
    date: "October 12 — 13, 2026",
    dateStart: "2026-10-12",
    dateEnd: "2026-10-13",
    description:
      "Winners are showcased during UNILAG International Week — celebrating the next generation of African EdTech.",
    details: [
      "Part of UNILAG International Week",
      "Public showcase of winning solutions",
      "Open to press, partners, and the wider AFRETEC network",
    ],
  },
];

export function getStageStatus(stage: TimelineStage, now: Date = new Date()): StageStatus {
  const start = new Date(stage.dateStart).getTime();
  const end = new Date(stage.dateEnd).getTime();
  const t = now.getTime();
  if (t < start) return "upcoming";
  if (t > end) return "complete";
  return "active";
}
