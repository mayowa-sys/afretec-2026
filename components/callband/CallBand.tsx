"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const DEADLINE = new Date("2026-05-31T23:59:00+01:00").getTime();

function getTimeLeft() {
    const now = Date.now();
    let diff = Math.max(0, DEADLINE - now);
    const days = Math.floor(diff / 86_400_000);
    diff -= days * 86_400_000;
    const hours = Math.floor(diff / 3_600_000);
    diff -= hours * 3_600_000;
    const mins = Math.floor(diff / 60_000);
    diff -= mins * 60_000;
    const secs = Math.floor(diff / 1_000);
    return { days, hours, mins, secs, expired: DEADLINE - now <= 0 };
}

export function CallBand() {
    const [time, setTime] = useState({ days: 0, hours: 0, mins: 0, secs: 0, expired: false });
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            setTime(getTimeLeft());
            isFirstRender.current = false;
        }
        const id = setInterval(() => setTime(getTimeLeft()), 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <section
            id="overview"
            className="relative px-5 md:px-10 py-20 md:py-28"
            style={{ backgroundColor: "var(--color-bg-soft)" }}
        >
            <style jsx>{`
                @keyframes pulse-dot {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.4; transform: scale(0.8); }
                }
            `}</style>

            <div className="max-w-[1300px] mx-auto">
                {/* Top: flyer + countdown side by side */}
                <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-center mb-16 md:mb-20">
                    {/* Left: Flyer */}
                    <div className="relative mx-auto lg:mx-0 w-full max-w-[320px] lg:w-[340px]">
                        <div className="absolute -top-3 -right-3 w-6 h-6 pointer-events-none">
                            <div className="absolute top-0 right-0 w-3 h-px" style={{ background: "var(--color-ink)" }} />
                            <div className="absolute top-0 right-0 w-px h-3" style={{ background: "var(--color-ink)" }} />
                        </div>
                        <div className="absolute -bottom-3 -left-3 w-6 h-6 pointer-events-none">
                            <div className="absolute bottom-0 left-0 w-3 h-px" style={{ background: "var(--color-ink)" }} />
                            <div className="absolute bottom-0 left-0 w-px h-3" style={{ background: "var(--color-ink)" }} />
                        </div>

                        <div
                            className="relative w-full aspect-[4/5] overflow-hidden rounded-sm transition-transform duration-300 hover:scale-[1.02]"
                            style={{
                                boxShadow: "0 20px 50px -12px rgba(0, 0, 0, 0.25), 0 8px 20px -8px rgba(0, 0, 0, 0.15)",
                                backgroundColor: "#fff",
                            }}
                        >
                            <Image
                                src="/images/challenge-flyer.jpg"
                                alt="AFRETEC-UNILAG Innovation Challenge 3.0 — Official Call for Applications"
                                fill
                                sizes="(max-width: 1024px) 320px, 340px"
                                className="object-cover"
                            />
                        </div>

                        <p
                            className="mt-3 font-mono text-[10px] tracking-[0.14em] uppercase text-center lg:text-left"
                            style={{ color: "var(--color-muted)" }}
                        >
                            ✦ Official call for applications
                        </p>
                    </div>

                    {/* Right: Countdown + CTA */}
                    <div className="text-center lg:text-left">
                        <div
                            className="font-mono text-[11px] font-semibold uppercase mb-4 inline-flex items-center gap-2"
                            style={{
                                letterSpacing: "0.16em",
                                color: "var(--color-blue)",
                            }}
                        >
                            <span
                                className="inline-block w-2 h-2 rounded-full"
                                style={{
                                    backgroundColor: "var(--color-warm)",
                                    animation: "pulse-dot 1.5s ease-in-out infinite",
                                }}
                            />
                            {time.expired ? "Applications closed" : "Applications closing"}
                        </div>

                        <h2
                            className="font-display font-medium leading-[0.95] tracking-[-0.03em] mb-3"
                            style={{
                                fontSize: "clamp(32px, 4.5vw, 56px)",
                                fontVariationSettings: "'opsz' 144, 'SOFT' 30",
                                color: "var(--color-ink)",
                            }}
                        >
                            {time.expired ? (
                                <>
                                    This year&apos;s applications have{" "}
                                    <em
                                        className="italic font-light"
                                        style={{ color: "var(--color-blue)", fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
                                    >
                                        closed.
                                    </em>
                                </>
                            ) : (
                                <>
                                    Time left to{" "}
                                    <em
                                        className="italic font-light"
                                        style={{ color: "var(--color-blue)", fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
                                    >
                                        apply.
                                    </em>
                                </>
                            )}
                        </h2>

                        <p
                            className="text-[15px] md:text-[16px] leading-[1.55] mb-7 max-w-[520px] mx-auto lg:mx-0"
                            style={{ color: "var(--color-ink-soft)" }}
                        >
                            Multidisciplinary undergraduate teams across Anglophone West Africa — get
                            your application in before the deadline.
                        </p>

                        <div className="flex gap-3 md:gap-5 justify-center lg:justify-start mb-8 flex-wrap">
                            <Unit value={time.days} label="Days" />
                            <Colon />
                            <Unit value={time.hours} label="Hours" />
                            <Colon />
                            <Unit value={time.mins} label="Mins" />
                            <Colon />
                            <Unit value={time.secs} label="Secs" />
                        </div>

                        <div className="flex flex-wrap gap-3 justify-center lg:justify-start items-center">
                            <a
                                href="https://bit.ly/UNILAGAFRETECInnovationChallenge3"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-[14px] font-semibold transition-all hover:-translate-y-0.5"
                                style={{
                                    backgroundColor: "var(--color-blue)",
                                    color: "#fff",
                                    letterSpacing: "0.04em",
                                    boxShadow: "0 4px 16px rgba(0, 150, 255, 0.3)",
                                }}
                            >
                                Apply now
                                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>
                            <span
                                className="font-mono text-[11px] tracking-[0.14em] uppercase"
                                style={{ color: "var(--color-muted)" }}
                            >
                                Deadline · May 31, 2026
                            </span>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div
                    className="w-full h-px mb-10 md:mb-12"
                    style={{ background: "var(--color-line)" }}
                />

                {/* Bottom: Affiliations */}
                <div className="flex items-center justify-center gap-10 md:gap-16 flex-wrap">
                    {/* Organized by — UNILAG + ITMO */}
                    <AffiliationGroup title="Organized by">
                        <div className="relative h-20 w-20 md:h-24 md:w-24">
                            <Image
                                src="/images/unilag-logo.png"
                                alt="University of Lagos"
                                fill
                                sizes="96px"
                                className="object-contain"
                            />
                        </div>
                        <div className="relative h-20 w-20 md:h-24 md:w-24">
                            <Image
                                src="/images/itmo.png"
                                alt="University of Lagos"
                                fill
                                sizes="96px"
                                className="object-contain"
                            />
                        </div>
                    </AffiliationGroup>

                    <DividerVert />

                    {/* Funded by — AFRETEC without white background */}
                    <AffiliationGroup title="Funded by">
                        <div className="relative h-16 w-48 md:h-20 md:w-56">
                            <Image
                                src="/images/afretec-logo.png"
                                alt="AFRETEC Network"
                                fill
                                sizes="224px"
                                className="object-contain"
                            />
                        </div>
                    </AffiliationGroup>

                    <DividerVert />

                    {/* Supported by — MathWorks with logo and description */}
                    <AffiliationGroup title="Supported by">
                        <div className="flex items-center gap-4">
                            <div className="relative h-12 w-10 flex-shrink-0">
                                <Image
                                    src="/images/mathworks-logo.png"
                                    alt="MathWorks"
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
                    </AffiliationGroup>
                </div>
            </div>
        </section>
    );
}

function Unit({ value, label }: { value: number; label: string }) {
    return (
        <div className="flex flex-col items-center">
            <span
                className="font-display font-medium tabular-nums"
                style={{
                    fontSize: "clamp(40px, 5vw, 64px)",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    fontVariationSettings: "'opsz' 144, 'SOFT' 20",
                    color: "var(--color-ink)",
                }}
            >
                {String(value).padStart(2, "0")}
            </span>
            <span
                className="font-mono text-[10px] tracking-[0.14em] uppercase mt-2"
                style={{ color: "var(--color-muted)" }}
            >
                {label}
            </span>
        </div>
    );
}

function Colon() {
    return (
        <span
            className="font-display"
            style={{
                fontSize: "clamp(30px, 4vw, 48px)",
                lineHeight: 1,
                color: "var(--color-line)",
                transform: "translateY(-8px)",
                display: "inline-block",
            }}
        >
            :
        </span>
    );
}

function AffiliationGroup({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="text-center">
            <div
                className="font-mono text-[10px] font-semibold uppercase mb-4"
                style={{ letterSpacing: "0.16em", color: "var(--color-muted)" }}
            >
                {title}
            </div>
            <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap">
                {children}
            </div>
        </div>
    );
}

function DividerVert() {
    return (
        <div
            className="hidden md:block w-px h-[100px]"
            style={{ backgroundColor: "var(--color-line)" }}
        />
    );
}