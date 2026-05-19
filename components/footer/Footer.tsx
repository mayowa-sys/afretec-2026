"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";

const DEADLINE = new Date("2026-05-31T23:59:00+01:00").getTime();

function getTimeLeft() {
    const now = Date.now();
    const diff = Math.max(0, DEADLINE - now);
    const days = Math.floor(diff / 86_400_000);
    const expired = DEADLINE - now <= 0;
    return { days, expired };
}

// ---------- Custom social icons (lucide-react doesn't export them) ----------

function LinkedInIcon({ size = 15, strokeWidth: _sw }: { size?: number; strokeWidth?: number }) {
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

function InstagramIcon({ size = 15, strokeWidth = 1.8 }: { size?: number; strokeWidth?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            role="img"
            aria-label="Instagram"
        >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="5" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
    );
}

function TwitterIcon({ size = 15 }: { size?: number; strokeWidth?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            role="img"
            aria-label="Twitter / X"
        >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );
}

// ------------------------------------------------------------

export function Footer() {
    const [time, setTime] = useState({ days: 0, expired: false });

    useEffect(() => {
        setTime(getTimeLeft());
        const id = setInterval(() => setTime(getTimeLeft()), 60_000);
        return () => clearInterval(id);
    }, []);

    return (
        <footer className="relative z-10">
            {/* ===== Final CTA banner ===== */}
            <section
                className="relative px-5 md:px-10 py-24 md:py-32 overflow-hidden"
                style={{
                    backgroundColor: "var(--color-ink)",
                    color: "var(--color-bg)",
                }}
            >
                <div
                    className="absolute inset-0 pointer-events-none opacity-25"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.15 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
                        mixBlendMode: "screen",
                    }}
                />

                <div className="relative max-w-[1600px] mx-auto">
                    <div
                        className="flex items-center gap-3 font-mono text-[11px] tracking-[0.14em] uppercase mb-6"
                        style={{ color: "var(--color-bg)", opacity: 0.55 }}
                    >
            <span
                className="inline-block w-8 h-px"
                style={{ backgroundColor: "var(--color-bg)" }}
            />
                        <span>
              {time.expired
                  ? "Applications closed · Next phase begins"
                  : `${time.days} ${time.days === 1 ? "day" : "days"} left to apply`}
            </span>
                    </div>

                    <h2
                        className="font-display font-normal leading-[0.9] tracking-[-0.04em] mb-10 max-w-[1400px]"
                        style={{
                            fontSize: "clamp(56px, 11vw, 180px)",
                            fontVariationSettings: "'opsz' 144, 'SOFT' 30",
                        }}
                    >
                        Stop reading.{" "}
                        <em
                            className="italic font-light"
                            style={{
                                color: "var(--color-signal)",
                                fontVariationSettings: "'opsz' 144, 'SOFT' 100",
                            }}
                        >
                            Start building.
                        </em>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-end max-w-[1200px]">
                        <p
                            className="text-[17px] md:text-[19px] leading-[1.5] max-w-[640px]"
                            style={{ color: "var(--color-bg)", opacity: 0.75 }}
                        >
                            The work begins the moment your team submits. The deadline is
                            May 31, 2026 — no late entries. One application per team.
                        </p>

                        <a
                            href="https://bit.ly/UNILAGAFRETECInnovationChallenge3"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-4 px-7 py-5 rounded-full transition-all hover:-translate-y-1"
                            style={{
                                backgroundColor: "var(--color-bg)",
                                color: "var(--color-ink)",
                            }}
                        >
              <span
                  className="font-display text-[20px] md:text-[22px] font-medium"
                  style={{ fontVariationSettings: "'opsz' 24, 'SOFT' 40" }}
              >
                Register your team
              </span>
                            <span
                                className="w-9 h-9 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5"
                                style={{
                                    backgroundColor: "var(--color-blue)",
                                    color: "var(--color-bg)",
                                }}
                            >
                <ArrowUpRight size={18} strokeWidth={2.2} />
              </span>
                        </a>
                    </div>

                    <div
                        className="font-mono text-[10px] tracking-[0.14em] uppercase mt-6"
                        style={{ color: "var(--color-bg)", opacity: 0.45 }}
                    >
                        bit.ly/UNILAGAFRETECInnovationChallenge3
                    </div>
                </div>
            </section>

            {/* ===== Bottom footer ===== */}
            <section
                className="px-5 md:px-10 pt-16 md:pt-20 pb-10"
                style={{ backgroundColor: "var(--color-bg)" }}
            >
                <div className="max-w-[1600px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 lg:gap-12 mb-16">
                        <div>
                            <div className="flex items-center gap-4 mb-5">
                                <div className="relative h-12 w-12">
                                    <Image
                                        src="/images/unilag-logo.png"
                                        alt="University of Lagos"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="relative h-16 w-60 flex-shrink-0">
                                    <Image
                                        src="/images/afretec-logo.png"
                                        alt="AFRETEC Network"
                                        fill
                                        sizes="240px"
                                        className="object-contain object-left"
                                    />
                                </div>
                            </div>
                            <div
                                className="font-display font-bold text-[20px] mb-2"
                                style={{
                                    fontVariationSettings: "'opsz' 24, 'SOFT' 40",
                                    color: "var(--color-ink)",
                                }}
                            >
                                AFRETEC <span style={{ color: "var(--color-blue)" }}>×</span> UNILAG
                            </div>
                            <p
                                className="text-[14px] leading-[1.55] max-w-[360px]"
                                style={{ color: "var(--color-ink-soft)" }}
                            >
                                The Inclusive Education Innovation Challenge — Edition III. A
                                pan-African competition for undergraduate teams across
                                Anglophone West Africa.
                            </p>
                        </div>

                        <FooterColumn
                            title="Explore"
                            links={[
                                { label: "How it works", href: "#timeline" },
                                { label: "Eligibility", href: "#eligibility" },
                                { label: "Prizes", href: "#prizes" },
                                { label: "Past editions", href: "#past" },
                                { label: "The team", href: "#team" },
                                { label: "FAQ", href: "#faq" },
                            ]}
                        />

                        <FooterColumn
                            title="Partners"
                            links={[
                                {
                                    label: "AFRETEC Network",
                                    href: "https://www.afretec.africa/",
                                    external: true,
                                },
                                {
                                    label: "Carnegie Mellon Africa",
                                    href: "https://www.africa.engineering.cmu.edu/",
                                    external: true,
                                },
                                {
                                    label: "University of Lagos",
                                    href: "https://unilag.edu.ng/",
                                    external: true,
                                },
                                {
                                    label: "MathWorks",
                                    href: "https://www.mathworks.com/",
                                    external: true,
                                },
                            ]}
                        />

                        <div>
                            <div
                                className="font-mono text-[10px] tracking-[0.14em] uppercase mb-5"
                                style={{ color: "var(--color-muted)" }}
                            >
                                Get in touch
                            </div>
                            <a
                                href="mailto:itmo@unilag.edu.ng"
                                className="flex items-center gap-2 text-[14px] mb-3 transition-colors group"
                                style={{ color: "var(--color-ink-soft)" }}
                            >
                                <Mail size={14} strokeWidth={1.8} />
                                <span className="group-hover:text-[var(--color-ink)]">
                  itmo@unilag.edu.ng
                </span>
                            </a>
                            <p
                                className="text-[13px] leading-[1.55] mb-6 max-w-[280px]"
                                style={{ color: "var(--color-muted)" }}
                            >
                                Innovation & Technology Management Office, UNILAG
                            </p>

                            <div className="flex items-center gap-2">
                                <SocialIcon Icon={LinkedInIcon} href="https://www.linkedin.com/" label="LinkedIn" />
                                <SocialIcon Icon={InstagramIcon} href="https://www.instagram.com/" label="Instagram" />
                                <SocialIcon Icon={TwitterIcon} href="https://www.twitter.com/" label="Twitter" />
                            </div>
                        </div>
                    </div>

                    {/* Funded by / Supported by row */}
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 border-t border-b"
                        style={{ borderColor: "var(--color-line)" }}
                    >
                        <div>
                            <div
                                className="font-mono text-[10px] tracking-[0.14em] uppercase mb-3"
                                style={{ color: "var(--color-muted)" }}
                            >
                                Funded by
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="relative h-12 w-48 flex-shrink-0">
                                    <Image
                                        src="/images/afretec-logo.png"
                                        alt="AFRETEC Network"
                                        fill
                                        sizes="192px"
                                        className="object-contain object-left"
                                    />
                                </div>

                            </div>
                        </div>

                        <div>
                            <div
                                className="font-mono text-[10px] tracking-[0.14em] uppercase mb-3"
                                style={{ color: "var(--color-muted)" }}
                            >
                                Supported by
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="relative h-12 w-10 flex-shrink-0">
                                    <Image
                                        src="/images/mathworks-logo.png"
                                        alt="AFRETEC Network"
                                        fill
                                        sizes="5000px"
                                        className="object-contain object-left"
                                    />
                                </div>
                                <div>
                                    <div
                                        className="font-display font-medium text-[16px] leading-tight"
                                        style={{
                                            fontVariationSettings: "'opsz' 24, 'SOFT' 40",
                                            color: "var(--color-ink)",
                                        }}
                                    >
                                        MathWorks
                                    </div>
                                    <div
                                        className="text-[12px]"
                                        style={{ color: "var(--color-muted)" }}
                                    >
                                        MATLAB · Simulink · Special prize pool
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-4 pt-8">
                        <div
                            className="font-mono text-[10px] tracking-[0.14em] uppercase"
                            style={{ color: "var(--color-muted)" }}
                        >
                            © {new Date().getFullYear()} University of Lagos · AFRETEC Network
                        </div>
                        <div
                            className="font-mono text-[10px] tracking-[0.14em] uppercase"
                            style={{ color: "var(--color-muted)" }}
                        >
                            Edition III · MMXXVI · West Africa
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}

function FooterColumn({
                          title,
                          links,
                      }: {
    title: string;
    links: { label: string; href: string; external?: boolean }[];
}) {
    return (
        <div>
            <div
                className="font-mono text-[10px] tracking-[0.14em] uppercase mb-5"
                style={{ color: "var(--color-muted)" }}
            >
                {title}
            </div>
            <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                    <li key={link.label}>
                        <a
                            href={link.href}
                            target={link.external ? "_blank" : undefined}
                            rel={link.external ? "noopener noreferrer" : undefined}
                            className="text-[14px] inline-flex items-center gap-1.5 transition-colors group"
                            style={{ color: "var(--color-ink-soft)" }}
                        >
              <span className="group-hover:text-[var(--color-ink)]">
                {link.label}
              </span>
                            {link.external && (
                                <ArrowUpRight
                                    size={12}
                                    strokeWidth={1.8}
                                    className="opacity-60 group-hover:opacity-100"
                                />
                            )}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function SocialIcon({
                        Icon,
                        href,
                        label,
                    }: {
    Icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
    href: string;
    label: string;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-9 h-9 rounded-full border flex items-center justify-center transition-all hover:-translate-y-0.5"
            style={{
                borderColor: "var(--color-line)",
                color: "var(--color-ink-soft)",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-ink)";
                e.currentTarget.style.color = "var(--color-ink)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-line)";
                e.currentTarget.style.color = "var(--color-ink-soft)";
            }}
        >
            <Icon size={15} strokeWidth={1.8} />
        </a>
    );
}