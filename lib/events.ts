export interface Event {
  id: string;
  number: string;
  category: "Webinar" | "Bootcamp" | "Workshop";
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  registrationUrl: string;
  ctaLabel: string;
  accent: "blue" | "warm" | "deep";
  flyer: string;
}

export const EVENTS: Event[] = [
  {
    id: "matlab-session-1",
    number: "01",
    category: "Webinar",
    title: "MATLAB Session 1",
    date: "Coming soon · Date TBA",
    time: "Online · Zoom",
    location: "Open to all applicants",
    description:
      "Hosted by MathWorks. Learn how to use MATLAB and Simulink to build, test, and document your innovation. Especially useful for finalist teams developing their proof of concept.",
    registrationUrl: "https://bit.ly/InclusiveEducationChallengeMATLABSession1",
    ctaLabel: "Register for MATLAB Session",
    accent: "deep",
    flyer: "/images/events/matlab-session-1.jpg",
  },
  {
    id: "preselection-bootcamp-1",
    number: "02",
    category: "Bootcamp",
    title: "Pre-Selection Bootcamp",
    date: "Two weeks · Early June 2026",
    time: "Full programme",
    location: "Mandatory for all applicant teams",
    description:
      "Intensive training in design thinking, problem identification, communication, and pitching. Every applicant team attends — it's how every team gets a fair shot at the finals, regardless of starting point.",
    registrationUrl: "https://bit.ly/InclusiveEducationChallengeBootcamp1",
    ctaLabel: "Register for Bootcamp",
    accent: "warm",
    flyer: "/images/events/preselection-bootcamp-1.jpg",
  },
];
