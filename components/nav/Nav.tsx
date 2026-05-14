"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

const links = [
    { href: "#timeline", label: "How it works" },
    { href: "#eligibility", label: "Eligibility" },
    { href: "#prizes", label: "Prizes" },
    { href: "#past", label: "Past Editions" },
    { href: "#team", label: "Team" },
    { href: "#faq", label: "FAQ" },
];

export function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const close = () => setMenuOpen(false);

    return (
        <>
            <nav
                className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-[18px] md:px-10 md:py-[22px] border-b backdrop-blur-md"
                style={{
                    backgroundColor: "color-mix(in srgb, var(--color-bg) 75%, transparent)",
                    borderColor: "color-mix(in srgb, var(--color-line) 60%, transparent)",
                }}
            >
                {/* Wordmark */}
                <div
                    className="font-display font-bold text-[16px] md:text-[18px] tracking-tight flex items-center gap-2"
                    style={{ fontVariationSettings: "'opsz' 12, 'SOFT' 50" }}
                >
                    <div className="relative h-7 w-7 hidden sm:block">
                        <Image src="/images/unilag-logo.png" alt="UNILAG" fill className="object-contain" />
                    </div>
                    <div className="relative h-7 w-7 hidden sm:block">
                        <Image src="/images/afretec-logo.png" alt="AFRETEC" fill className="object-contain" />
                    </div>
                    AFRETEC<span style={{ color: "var(--color-blue)" }}>·</span>UNILAG
                </div>

                {/* Desktop links */}
                <ul className="hidden lg:flex gap-8 list-none">
                    {links.map((link) => (
                        <li key={link.href}>
                            {/* FIX: added <a */}
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

                {/* Right side: apply button + mobile hamburger */}
                <div className="flex items-center gap-3">
                    {/* FIX: added <a */}
                    <a
                        href="https://bit.ly/UNILAGAFRETECInnovationChallenge3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold tracking-[0.03em] transition-all hover:-translate-y-0.5"
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
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </a>

                    {/* Hamburger — mobile only */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        className="lg:hidden w-10 h-10 rounded-full border flex items-center justify-center transition-colors"
                        style={{
                            borderColor: "var(--color-line)",
                            color: "var(--color-ink)",
                        }}
                    >
                        {menuOpen ? <X size={18} strokeWidth={2} /> : <Menu size={18} strokeWidth={2} />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu overlay */}
            <div
                className="fixed inset-0 z-40 lg:hidden flex flex-col transition-all duration-300"
                style={{
                    backgroundColor: "var(--color-bg)",
                    opacity: menuOpen ? 1 : 0,
                    pointerEvents: menuOpen ? "all" : "none",
                    transform: menuOpen ? "translateY(0)" : "translateY(-8px)",
                }}
            >
                {/* Top: matches nav height */}
                <div className="h-[62px] md:h-[70px] flex-shrink-0" />

                {/* Links */}
                <div className="flex-1 flex flex-col px-5 py-8 overflow-y-auto">
                    <ul className="flex flex-col gap-1 mb-10">
                        {links.map((link, i) => (
                            <li key={link.href}>
                                {/* FIX: added <a */}
                                <a
                                    href={link.href}
                                    onClick={close}
                                    className="flex items-center justify-between py-4 border-b transition-colors group"
                                    style={{
                                        borderColor: "var(--color-line)",
                                    }}
                                >
                  <span
                      className="font-display font-normal tracking-tight"
                      style={{
                          fontSize: "clamp(26px, 7vw, 36px)",
                          fontVariationSettings: "'opsz' 48, 'SOFT' 40",
                          color: "var(--color-ink)",
                      }}
                  >
                    {link.label}
                  </span>
                                    <span
                                        className="font-mono text-[11px] tracking-[0.12em]"
                                        style={{ color: "var(--color-muted)" }}
                                    >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Apply CTA at bottom of menu */}
                    {/* FIX: added <a */}
                    <a
                        href="https://bit.ly/UNILAGAFRETECInnovationChallenge3"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={close}
                        className="w-full flex items-center justify-center gap-3 py-5 rounded-full text-[16px] font-semibold tracking-[0.04em] transition-all active:scale-95"
                        style={{
                            backgroundColor: "var(--color-ink)",
                            color: "var(--color-bg)",
                        }}
                    >
                        Apply now
                        <ArrowRight size={16} />
                    </a>

                    {/* Footer note */}
                    <p
                        className="font-mono text-[10px] tracking-[0.1em] uppercase text-center mt-5"
                        style={{ color: "var(--color-muted)" }}
                    >
                        Deadline · May 31, 2026
                    </p>
                </div>
            </div>
        </>
    );
}