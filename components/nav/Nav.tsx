"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const LINKS = [
    { href: "#timeline", label: "How It Works" },
    { href: "#events", label: "Events" },
    { href: "#eligibility", label: "Eligibility" },
    { href: "#prizes", label: "Prizes" },
    { href: "#past", label: "Past Editions" },
    { href: "#team", label: "Team" },
    { href: "#faq", label: "FAQ" },
];

export function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const close = () => setMenuOpen(false);

    return (
        <>
            <nav
                className="fixed top-0 left-0 right-0 z-50 px-5 md:px-10 py-3.5 md:py-4 transition-all duration-300"
                style={{
                    backgroundColor: scrolled
                        ? "rgba(26, 35, 48, 0.95)"
                        : "rgba(26, 35, 48, 0.78)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    borderBottom: scrolled
                        ? "1px solid rgba(255,255,255,0.08)"
                        : "1px solid transparent",
                }}
            >
                {/* Use relative positioning so we can absolutely center the links */}
                <div className="relative flex items-center justify-end h-10">

                    {/* Centered nav links — absolutely positioned so they're truly centered */}
                    <ul className="hidden xl:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-6 list-none">
                        {LINKS.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="relative text-[12px] font-semibold uppercase transition-colors group py-1"
                                    style={{
                                        letterSpacing: "0.08em",
                                        color: "rgba(255, 255, 255, 0.78)",
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.color = "rgba(255, 255, 255, 0.78)")
                                    }
                                >
                                    {link.label}
                                    <span
                                        className="absolute left-0 right-0 -bottom-1 h-0.5 origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                                        style={{ backgroundColor: "var(--color-blue)" }}
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Right: CTA + hamburger */}
                    <div className="flex items-center gap-3">
                        <a
                            href="https://bit.ly/UNILAGAFRETECInnovationChallenge3"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all"
                            style={{
                                backgroundColor: "var(--color-blue)",
                                color: "#fff",
                                letterSpacing: "0.04em",
                                boxShadow: "0 2px 12px rgba(0, 150, 255, 0.3)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-1px)";
                                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 150, 255, 0.5)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 2px 12px rgba(0, 150, 255, 0.3)";
                            }}
                        >
                            Apply
                            <ArrowRight
                                size={14}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </a>

                        <button
                            type="button"
                            onClick={() => setMenuOpen((v) => !v)}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            className="xl:hidden w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors"
                            style={{
                                background: "rgba(255,255,255,0.08)",
                                border: "1px solid rgba(255,255,255,0.15)",
                            }}
                        >
                            {menuOpen ? <X size={18} strokeWidth={2} /> : <Menu size={18} strokeWidth={2} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            <div
                className="fixed inset-0 z-40 lg:hidden flex flex-col transition-all duration-300"
                style={{
                    backgroundColor: "rgba(26, 35, 48, 0.98)",
                    opacity: menuOpen ? 1 : 0,
                    pointerEvents: menuOpen ? "all" : "none",
                }}
            >
                <div className="h-[60px] md:h-[68px] flex-shrink-0" />
                <div className="flex-1 flex flex-col px-6 py-8 overflow-y-auto">
                    <ul className="flex flex-col gap-0 mb-10">
                        {LINKS.map((link, i) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={close}
                                    className="flex items-center justify-between py-4 border-b transition-colors"
                                    style={{ borderColor: "rgba(255,255,255,0.1)" }}
                                >
                  <span
                      className="font-display font-normal tracking-tight text-white"
                      style={{
                          fontSize: "clamp(24px, 6vw, 32px)",
                          fontVariationSettings: "'opsz' 48, 'SOFT' 40",
                      }}
                  >
                    {link.label}
                  </span>
                                    <span
                                        className="font-mono text-[11px]"
                                        style={{ color: "rgba(255,255,255,0.4)", letterSpacing: "0.12em" }}
                                    >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <a
                        href="https://bit.ly/UNILAGAFRETECInnovationChallenge3"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={close}
                        className="w-full flex items-center justify-center gap-3 py-5 rounded-full text-[16px] font-semibold transition-all"
                        style={{
                            backgroundColor: "var(--color-blue)",
                            color: "#fff",
                            letterSpacing: "0.04em",
                        }}
                    >
                        Apply for the challenge
                        <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </>
    );
}