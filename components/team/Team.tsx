"use client";

import Image from "next/image";
import { useState } from "react";

// No lucide-react import needed for LinkedIn now

interface TeamMember {
    name: string;
    role: string;
    affiliation?: string;
    linkedin?: string;
    photo?: string;
}

const TEAM: TeamMember[] = [
    {
        name: "Dr. Olayinka Adewumi",
        role: "Co-Lead, Pathways to Opportunities & Entrepreneurship Pillar",
        affiliation: "Acting Director, ITMO · UNILAG",
        linkedin: "https://www.linkedin.com/in/olayinka-omowunmi-adewumi-69315517/",
        photo: "/images/team/adewumi-2026.jpg",
    },
    {
        name: "Dr. Ahmed Yinusa",
        role: "AFRETEC UNILAG Programme Administration",
        linkedin: "https://www.linkedin.com/in/ahmed-yinusa-b94b61a2",
        photo: "/images/team/yinusa.jpg",
    },
    {
        name: "Dr. Kemi Onayemi",
        role: "Entrepreneurship Training Strategy & Execution",
        linkedin: "",
        photo: "/images/team/onayemi.jpg",
    },
    {
        name: "Ms. Eunice Isong",
        role: "Challenge Communications & Engagement",
        linkedin: "https://www.linkedin.com/in/eunice-isong-7439b6314/",
        photo: "/images/team/isong.jpg",
    },
    {
        name: "Mr. Abdurrahman Balogun",
        role: "ICT Support",
        linkedin: "https://www.linkedin.com/in/abdurrahman-balogun-41b48a32b/",
        photo: "/images/team/balogun.jpg",
    },
];

// Tiny inline LinkedIn icon (official blue logo)
function LinkedInIcon({ size = 15 }: { size?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            role="img"
            aria-label="LinkedIn"
        >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );
}

export function Team() {
    return (
        <section
            id="team"
            className="relative px-5 md:px-10 py-24 md:py-32 z-10"
        >
            <div className="max-w-[1600px] mx-auto">
                <div
                    className="flex items-center gap-3 font-mono text-[11px] tracking-[0.14em] uppercase mb-4"
                    style={{ color: "var(--color-muted)" }}
                >
                    <span className="inline-block w-8 h-px" style={{ backgroundColor: "var(--color-ink)" }} />
                    <span>Section 06 · The team</span>
                </div>

                <div className="flex items-end justify-between flex-wrap gap-6 mb-14 md:mb-16">
                    <h2
                        className="font-display font-normal leading-[0.95] tracking-[-0.03em] max-w-[1100px]"
                        style={{
                            fontSize: "clamp(40px, 6.5vw, 96px)",
                            fontVariationSettings: "'opsz' 144, 'SOFT' 30",
                            color: "var(--color-ink)",
                        }}
                    >
                        Run by{" "}
                        <em
                            className="italic font-light"
                            style={{
                                color: "var(--color-blue)",
                                fontVariationSettings: "'opsz' 144, 'SOFT' 100",
                            }}
                        >
                            people.
                        </em>
                    </h2>
                    <p
                        className="text-[15px] md:text-[16px] leading-[1.5] max-w-[420px]"
                        style={{ color: "var(--color-ink-soft)" }}
                    >
                        The planning team behind this edition — coordinating
                        entrepreneurship training, communications, and programme delivery
                        across the next twelve months.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5">
                    {TEAM.map((member) => (
                        <MemberCard key={member.name} member={member} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function MemberCard({ member }: { member: TeamMember }) {
    const [imageOk, setImageOk] = useState(true);

    const initials = member.name
        .split(/\s+/)
        .filter((p) => !p.endsWith("."))
        .slice(0, 2)
        .map((p) => p[0])
        .join("")
        .toUpperCase();

    return (
        <div
            className="relative group p-5 md:p-6 border rounded-sm transition-all hover:-translate-y-1"
            style={{
                borderColor: "var(--color-line)",
                backgroundColor: "var(--color-bg-soft)",
            }}
        >
            {member.linkedin && (
                <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-all border z-10"
                    style={{
                        borderColor: "var(--color-line)",
                        backgroundColor: "var(--color-bg)",
                        color: "var(--color-ink-soft)",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#0A66C2";
                        e.currentTarget.style.borderColor = "#0A66C2";
                        e.currentTarget.style.color = "#FFFFFF";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "var(--color-bg)";
                        e.currentTarget.style.borderColor = "var(--color-line)";
                        e.currentTarget.style.color = "var(--color-ink-soft)";
                    }}
                >
                    <LinkedInIcon size={15} />
                </a>
            )}

            <div
                className="relative w-full aspect-[4/5] mb-5 rounded-sm overflow-hidden"
                style={{ backgroundColor: "var(--color-bg)" }}
            >
                {member.photo && imageOk ? (
                    <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                        className="object-cover"
                        onError={() => setImageOk(false)}
                    />
                ) : (
                    <InitialsAvatar initials={initials} />
                )}
            </div>

            <h3
                className="font-display font-medium leading-[1.15] tracking-tight mb-2 pr-10"
                style={{
                    fontSize: "clamp(17px, 1.5vw, 19px)",
                    fontVariationSettings: "'opsz' 36, 'SOFT' 40",
                    color: "var(--color-ink)",
                }}
            >
                {member.name}
            </h3>

            <p
                className="text-[13px] md:text-[14px] leading-[1.45]"
                style={{ color: "var(--color-ink-soft)" }}
            >
                {member.role}
            </p>

            {member.affiliation && (
                <p
                    className="font-mono text-[10px] tracking-[0.1em] uppercase mt-2"
                    style={{ color: "var(--color-muted)" }}
                >
                    {member.affiliation}
                </p>
            )}
        </div>
    );
}

function InitialsAvatar({ initials }: { initials: string }) {
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 125"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden="true"
            >
                <defs>
                    <pattern id="avatar-grid" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                        <path
                            d="M 8 0 L 0 0 0 8"
                            fill="none"
                            stroke="var(--color-line)"
                            strokeWidth="0.3"
                            opacity="0.6"
                        />
                    </pattern>
                </defs>
                <rect width="100" height="125" fill="url(#avatar-grid)" />
            </svg>

            <span
                className="relative font-display font-light italic select-none"
                style={{
                    fontSize: "clamp(48px, 6vw, 72px)",
                    color: "var(--color-ink-soft)",
                    fontVariationSettings: "'opsz' 144, 'SOFT' 100",
                    letterSpacing: "-0.02em",
                }}
            >
        {initials}
      </span>
        </div>
    );
}