"use client";

import { useEffect, useState } from "react";

// May 31, 2026 23:59 WAT (UTC+1)
const DEADLINE = new Date("2026-05-31T23:59:00+01:00").getTime();

function getTimeLeft() {
    const now = Date.now();
    let diff = Math.max(0, DEADLINE - now);
    const days = Math.floor(diff / 86_400_000);
    diff -= days * 86_400_000;
    const hours = Math.floor(diff / 3_600_000);
    diff -= hours * 3_600_000;
    const mins = Math.floor(diff / 60_000);
    return { days, hours, mins, expired: DEADLINE - now <= 0 };
}

export function Countdown() {
    // Start with zeros so server-rendered HTML matches first client paint
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        mins: 0,
        expired: false,
    });

    useEffect(() => {
        setTime(getTimeLeft());
        const id = setInterval(() => setTime(getTimeLeft()), 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <div
            className="relative px-8 py-7 rounded border overflow-hidden"
            style={{
                backgroundColor: "var(--color-bg-soft)",
                borderColor: "var(--color-line)",
            }}
        >
            <div
                className="absolute top-3.5 left-8 font-mono text-[10px] tracking-[0.14em]"
                style={{ color: "var(--color-muted)" }}
            >
                DEADLINE
            </div>
            <div
                className="absolute top-[18px] right-8 w-2 h-2 rounded-full"
                style={{
                    backgroundColor: "var(--color-warm)",
                    animation: "pulse-dot 1.5s ease-in-out infinite",
                }}
            />

            <div className="flex gap-[18px] mt-6 items-baseline">
                <Unit value={time.days} label="Days" />
                <Colon />
                <Unit value={time.hours} label="Hours" />
                <Colon />
                <Unit value={time.mins} label="Min" />
            </div>
        </div>
    );
}

function Unit({ value, label }: { value: number; label: string }) {
    return (
        <div className="flex flex-col items-start">
      <span
          className="font-display text-[38px] md:text-[52px] leading-none font-medium tracking-tight tabular-nums"
          style={{
              fontVariationSettings: "'opsz' 144, 'SOFT' 20",
              color: "var(--color-ink)",
          }}
      >
        {String(value).padStart(2, "0")}
      </span>
            <span
                className="font-mono text-[10px] tracking-[0.14em] uppercase mt-1.5"
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
            className="font-display text-[42px] -translate-y-1.5"
            style={{ color: "var(--color-line)" }}
        >
      :
    </span>
    );
}