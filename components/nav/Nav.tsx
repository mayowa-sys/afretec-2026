"use client";

import { ArrowRight } from "lucide-react";

const links = [
    { href: "#challenge", label: "Challenge" },
    { href: "#bootcamp", label: "Bootcamp" },
    { href: "#timeline", label: "Timeline" },
    { href: "#past", label: "Past Editions" },
    { href: "#team", label: "Team" },
];

export function Nav() {

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-[18px] md:px-10 md:py-[22px] border-b backdrop-blur-md"
            style={{
                backgroundColor: "color-mix(in srgb, var(--color-bg) 70%, transparent)",
                borderColor: "color-mix(in srgb, var(--color-line) 60%, transparent)",
            }}
        >
            <div
                className="font-display font-bold text-[18px] tracking-tight"
                style={{ fontVariationSettings: "'opsz' 12, 'SOFT' 50" }}
            >
                AFRETEC<span style={{ color: "var(--color-blue)" }}>·</span>UNILAG
            </div>

            <ul className="hidden lg:flex gap-8 list-none">
                {links.map((link) => (
                    <li key={link.href}>
                        <a
                            href={link.href}
                            className="relative text-[13px] uppercase tracking-[0.04em] font-medium transition-colors group"
                            style={{ color: "var(--color-ink-soft)" }}
                        >
                            {link.label}
                            <span
                                className="absolute -bottom-1.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                                style={{ backgroundColor: "var(--color-ink)" }}
                            />
                        </a>
                    </li>
                ))}
            </ul>

            <div className="flex items-center gap-3.5">
        <a
                    href="https://bit.ly/UNILAGAFRETECInnovationChallenge3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-[22px] py-2.5 rounded-full text-[13px] font-semibold tracking-[0.03em] transition-all hover:-translate-y-0.5"
                    style={{
                        backgroundColor: "var(--color-ink)",
                        color: "var(--color-bg)",
                        border: "1px solid var(--color-ink)",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "var(--color-blue)";
                        e.currentTarget.style.borderColor = "var(--color-blue)";
                        e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "var(--color-ink)";
                        e.currentTarget.style.borderColor = "var(--color-ink)";
                        e.currentTarget.style.color = "var(--color-bg)";
                    }}
                >
                    Apply
                    <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                    />
                </a>
            </div>
        </nav>
    );
}