"use client";

import Image from "next/image";
import { Countdown } from "./Countdown";

export function Hero() {
    return (
        <section className="relative min-h-screen px-5 md:px-10 pt-[110px] md:pt-[140px] pb-15 grid grid-cols-1 z-10">
            {/* Logo lockup — logos now 1.5× original size */}
            <div
                className="flex items-center gap-3.5 md:gap-[22px] mb-[18px] md:mb-[22px] flex-wrap opacity-0"
                style={{ animation: "rise 0.7s ease forwards" }}
            >
                <div className="flex items-center gap-3.5">
                    <div className="relative h-20 md:h-[104px] w-20 md:w-[104px]
">
                        <Image
                            src="/images/unilag-logo.png"
                            alt="University of Lagos"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div className="relative h-20 md:h-[104px] w-20 md:w-[140px]">
                        <Image
                            src="/images/afretec-logo.png"
                            alt="AFRETEC Network"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
                <div
                    className="hidden md:block w-px h-9"
                    style={{ backgroundColor: "var(--color-line)" }}
                />
                {/* Edition line — font size doubled, dot scaled accordingly */}
                <div
                    className="flex items-center gap-2.5 font-mono text-[15px] md:text-[16.5px] tracking-[0.14em] uppercase"
                    style={{ color: "var(--color-muted)" }}
                >
          <span
              className="w-3 h-3 rounded-full"
              style={{
                  backgroundColor: "var(--color-blue)",
                  boxShadow:
                      "0 0 0 7px color-mix(in srgb, var(--color-blue) 20%, transparent)",
                  animation: "pulse-dot 2s ease-in-out infinite",
              }}
          />
                    <span>Edition III · 2026 · West Africa</span>
                </div>
            </div>

            {/* Rest of the component remains exactly the same */}
            {/* Event title */}
            <h2
                className="font-display font-medium leading-[1.05] tracking-tight mb-2 max-w-[900px] opacity-0"
                style={{
                    fontSize: "clamp(28px, 3.4vw, 48px)",
                    fontVariationSettings: "'opsz' 48, 'SOFT' 40",
                    color: "var(--color-ink)",
                    animation: "rise 0.9s ease 0.1s forwards",
                }}
            >
                AFRETEC-UNILAG Innovation Challenge{" "}
        <span
          className="italic font-normal"
          style={{
            color: "var(--color-blue)",
            fontVariationSettings: "'opsz' 48, 'SOFT' 100",
          }}
        >
          — Edition III
        </span>
            </h2>

            {/* Big headline */}
            <h1
                className="font-display font-normal leading-[0.92] tracking-[-0.04em] mt-6 mb-6 max-w-[1500px] fraunces-soft"
                style={{ fontSize: "clamp(48px, 9.5vw, 156px)" }}
            >
        <span className="reveal-line">
          <span style={{ animationDelay: "0.3s" }}>Education needs</span>
        </span>
                <span className="reveal-line">
          <span style={{ animationDelay: "0.43s" }}>
            <span className="relative inline-block">
              builders
              <span
                  className="absolute left-0 right-0 -z-10"
                  style={{
                      bottom: "0.06em",
                      height: "0.08em",
                      backgroundColor: "var(--color-signal)",
                      transformOrigin: "left",
                      animation:
                          "scale-x 1s cubic-bezier(.7,0,.3,1) 1.4s forwards",
                      transform: "scaleX(0)",
                  }}
              />
            </span>
            .
          </span>
        </span>
                <span className="reveal-line">
          <span style={{ animationDelay: "0.56s" }}>
            Africa{" "}
              <em
                  className="italic font-light fraunces-italic-soft"
                  style={{ color: "var(--color-blue)" }}
              >
              has them
            </em>
            .
          </span>
        </span>
            </h1>

                  {/* Challenge flyer — editorial treatment, top right */}
      <div
        className="absolute right-5 md:right-10 top-[90px] md:top-[110px] z-20 pointer-events-none hidden sm:block opacity-0"
        style={{ animation: "flyer-place 1.2s cubic-bezier(.16,1,.3,1) 1.4s forwards" }}
      >
        {/* Crop marks — top right corner */}
        <div className="absolute -top-3 -right-3 w-6 h-6 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-3 h-px"
            style={{ backgroundColor: "var(--color-ink)" }}
          />
          <div
            className="absolute top-0 right-0 w-px h-3"
            style={{ backgroundColor: "var(--color-ink)" }}
          />
        </div>
        {/* Crop marks — bottom left corner */}
        <div className="absolute -bottom-3 -left-3 w-6 h-6 pointer-events-none">
          <div
            className="absolute bottom-0 left-0 w-3 h-px"
            style={{ backgroundColor: "var(--color-ink)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-px h-3"
            style={{ backgroundColor: "var(--color-ink)" }}
          />
        </div>

        {/* Flyer image with slight tilt */}
        <div
          className="relative"
          style={{ transform: "rotate(-2.5deg)" }}
        >
          <div
            className="relative w-[220px] md:w-[340px] aspect-[4/5] overflow-hidden"
            style={{
              boxShadow:
                "0 1px 0 var(--color-line), 0 20px 40px -10px rgba(10,10,10,0.18), 0 8px 16px -4px rgba(10,10,10,0.1)",
              backgroundColor: "var(--color-bg)",
            }}
          >
            <Image
              src="/images/challenge-flyer.jpg"
              alt="AFRETEC-UNILAG Innovation Challenge 3.0 — Official Call for Student Innovators"
              fill
              sizes="(max-width: 768px) 220px, 340px"
              className="object-cover"
              priority
            />
          </div>

          {/* Editorial caption below flyer */}
          <div
            className="absolute -bottom-12 right-0 flex items-center gap-2 font-mono text-[9px] tracking-[0.14em] uppercase"
            style={{ color: "var(--color-muted)" }}
          >
            <span
              className="inline-block w-4 h-px"
              style={{ backgroundColor: "var(--color-muted)" }}
            />
            <span>Fig. 01 — Official call</span>
          </div>
        </div>
      </div>

            <div
                className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr] gap-8 md:gap-15 mt-12 md:mt-20 items-end opacity-0"
                style={{ animation: "rise 1s ease 1.6s forwards" }}
            >
                <div
                    className="flex flex-col gap-3.5 max-w-[500px] pt-3 border-t"
                    style={{ borderColor: "var(--color-ink)" }}
                >
          <span
              className="font-mono text-[11px] tracking-[0.14em] uppercase"
              style={{ color: "var(--color-muted)" }}
          >
            Theme
          </span>
                    <p
                        className="font-display font-normal leading-[1.35] tracking-tight"
                        style={{
                            fontSize: "clamp(18px, 1.7vw, 22px)",
                            fontVariationSettings: "'opsz' 36, 'SOFT' 50",
                            color: "var(--color-ink)",
                        }}
                    >
                        <strong style={{ fontWeight: 600 }}>
                            Digitally Enabled Inclusive Education.
                        </strong>{" "}
                        Expanding access, equity, and opportunity for all.
                    </p>
                </div>

                <Countdown />

                <div className="flex flex-col gap-6">
                    <Meta label="Prize Pool" value="₦4.5M" sub="+ $700 MathWorks" />
                    <Meta label="Eligible" value="5 Countries" sub="· 100+ Universities" />
                </div>
            </div>

            {/* Marquee ribbon */}
            <div
                className="mt-20 py-[18px] border-t border-b overflow-hidden relative z-10 -mx-5 md:-mx-10"
                style={{
                    borderColor: "var(--color-line)",
                    backgroundColor: "var(--color-bg-soft)",
                }}
            >
                <div
                    className="flex gap-15 whitespace-nowrap font-display italic font-light text-[18px] md:text-[22px]"
                    style={{
                        color: "var(--color-ink-soft)",
                        fontVariationSettings: "'opsz' 36, 'SOFT' 100",
                        animation: "scroll-x 40s linear infinite",
                    }}
                >
                    <RibbonContent />
                    <RibbonContent />
                </div>
            </div>
        </section>
    );
}

function Meta({
                  label,
                  value,
                  sub,
              }: {
    label: string;
    value: string;
    sub: string;
}) {
    return (
        <div className="flex flex-col gap-2">
      <span
          className="font-mono text-[11px] tracking-[0.12em] uppercase"
          style={{ color: "var(--color-muted)" }}
      >
        {label}
      </span>
            <span
                className="font-display text-[22px] font-normal tracking-tight"
                style={{
                    fontVariationSettings: "'opsz' 36, 'SOFT' 50",
                    color: "var(--color-ink)",
                }}
            >
        {value}{" "}
                <span
                    className="text-[14px] ml-1"
                    style={{ color: "var(--color-muted)" }}
                >
          {sub}
        </span>
      </span>
        </div>
    );
}

function RibbonContent() {
    const items = [
        "Nigeria",
        "Ghana",
        "Liberia",
        "Sierra Leone",
        "The Gambia",
        "Multidisciplinary teams",
        "Funded by AFRETEC",
        "Supported by MathWorks",
    ];
    return (
        <span className="inline-flex items-center gap-15 pr-15">
      {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-15">
          {item}
              <span
                  className="text-[14px] not-italic"
                  style={{ color: "var(--color-blue)" }}
              >
            ✦
          </span>
        </span>
      ))}
    </span>
    );
}