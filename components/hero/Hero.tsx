"use client";

import Image from "next/image";
import { ArrowRight, ArrowDown } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-32 overflow-hidden">

            {/* Background image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('/images/hero-bg.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            />

            {/* Fallback gradient if image missing */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "linear-gradient(135deg, #1A2330 0%, #2D3A4F 50%, #1A2330 100%)",
                }}
            />

            {/* Re-apply background image on top of fallback so if image loads, it covers the gradient */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
            />

            {/* Dark overlay */}
            <div
                className="absolute inset-0 z-[1]"
                style={{
                    background:
                        "radial-gradient(ellipse at top, rgba(26, 35, 48, 0.55) 0%, rgba(26, 35, 48, 0.88) 100%), linear-gradient(180deg, rgba(26, 35, 48, 0.4) 0%, rgba(26, 35, 48, 0.92) 100%)",
                }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-[1100px] w-full">

                {/* Logo lockup */}
                <div
                    className="flex items-center justify-center gap-7 mb-10"
                    style={{ animation: "fade-up 0.8s ease forwards" }}
                >
                    <div className="relative h-14 w-14 md:h-16 md:w-16">
                        <Image
                            src="/images/unilag-logo.png"
                            alt="University of Lagos"
                            fill
                            sizes="64px"
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div className="w-px h-9 bg-white/25" />
                    <div className="relative h-14 w-14 md:h-16 md:w-16">
                        <Image
                            src="/images/mini-afri.png"
                            alt="AFRETEC Network"
                            fill
                            sizes="64px"
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
                {/* Edition pill */}
                <div
                    className="inline-block font-mono text-[12px] font-semibold uppercase mb-7 px-[18px] py-2 rounded-full "
                    style={{
                        letterSpacing: "0.2em",
                        color: "white",
                        background: "rgba(0, 150, 255, 0.12)",
                        border: "1px solid rgba(0, 150, 255, 0.3)",
                        animation: "fade-up 0.8s ease 0.15s forwards",
                    }}
                >
                    Edition III · 2026 · West Africa
                </div>

                {/* Main title */}
                <h1
                    className="font-display font-medium leading-[0.95] tracking-[-0.035em] text-white mb-6 "
                    style={{
                        fontSize: "clamp(48px, 8vw, 110px)",
                        fontVariationSettings: "'opsz' 144, 'SOFT' 30",
                        animation: "fade-up 0.9s ease 0.3s forwards",
                    }}
                >
                    AFRETEC-UNILAG
                    <br />
                    Innovation Challenge{" "}
                    <em
                        className="italic font-light"
                        style={{
                            color: "var(--color-blue)",
                            fontVariationSettings: "'opsz' 144, 'SOFT' 100",
                        }}
                    >
                        3.0
                    </em>
                </h1>

                {/* Subtitle */}
                <p
                    className="font-display italic font-normal leading-[1.35] mb-4 max-w-[800px] mx-auto "
                    style={{
                        fontSize: "clamp(20px, 2.6vw, 28px)",
                        color: "rgba(255, 255, 255, 0.88)",
                        fontVariationSettings: "'opsz' 36, 'SOFT' 100",
                        animation: "fade-up 0.9s ease 0.45s forwards",
                    }}
                >
                    Inclusive Education Innovation Challenge
                </p>

                {/* Tagline */}
                <p
                    className="text-[15px] leading-[1.55] max-w-[640px] mx-auto mb-11 "
                    style={{
                        color: "rgba(255, 255, 255, 0.7)",
                        animation: "fade-up 0.9s ease 0.6s forwards",
                    }}
                >
                    <strong style={{ color: "rgba(255, 255, 255, 0.92)" }}>
                        Digitally Enabled Inclusive Education.
                    </strong>{" "}
                    Expanding access, equity, and opportunity for undergraduate teams across Anglophone West Africa.
                </p>

                {/* CTAs */}
                <div
                    className="flex gap-3.5 justify-center flex-wrap mb-10 "
                    style={{ animation: "fade-up 0.9s ease 0.75s forwards" }}
                >
                    <a
                        href="https://bit.ly/UNILAGAFRETECInnovationChallenge3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full font-semibold text-[14px] transition-all hover:-translate-y-0.5"
                        style={{
                            backgroundColor: "var(--color-blue)",
                            color: "#fff",
                            letterSpacing: "0.04em",
                            boxShadow: "0 4px 20px rgba(0, 150, 255, 0.25)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--color-blue-deep)";
                            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 150, 255, 0.45)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--color-blue)";
                            e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 150, 255, 0.25)";
                        }}
                    >
                        Apply for the challenge
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </a>

                    <a
                        href="#timeline"
                        className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full font-semibold text-[14px] text-white transition-all hover:-translate-y-0.5"
                        style={{
                            background: "transparent",
                            border: "1px solid rgba(255,255,255,0.3)",
                            letterSpacing: "0.04em",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                        }}
                    >
                        Learn more
                        <ArrowDown size={16} className="transition-transform group-hover:translate-y-1" />
                    </a>
                </div>
            </div>

        </section>
    );
}