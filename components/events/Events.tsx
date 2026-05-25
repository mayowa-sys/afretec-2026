"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { ArrowUpRight, Calendar, MapPin, X, ZoomIn } from "lucide-react";
import { EVENTS, type Event } from "@/lib/events";

const ACCENT_MAP: Record<Event["accent"], string> = {
  blue: "var(--color-blue)",
  warm: "var(--color-warm)",
  deep: "var(--color-blue-deep)",
};

export function Events() {
  const [lightbox, setLightbox] = useState<Event | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  // Close on Escape key
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", onKey);
    // Prevent body scroll while modal is open
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, closeLightbox]);

  return (
    <>
      <section
        id="events"
        className="relative px-5 md:px-10 py-6 md:py-8"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="max-w-[1300px] mx-auto">

          <div className="text-center mb-6 md:mb-8">
            <div
              className="font-mono text-[11px] font-semibold uppercase mb-4"
              style={{ letterSpacing: "0.16em", color: "var(--color-blue)" }}
            >
              Register now
            </div>

            <h2
              className="font-display font-medium leading-[0.95] tracking-[-0.03em] mb-4"
              style={{
                fontSize: "clamp(36px, 5.5vw, 64px)",
                fontVariationSettings: "'opsz' 144, 'SOFT' 30",
                color: "var(--color-ink)",
              }}
            >
              Upcoming{" "}
              <em
                className="italic font-light"
                style={{
                  color: "var(--color-blue)",
                  fontVariationSettings: "'opsz' 144, 'SOFT' 100",
                }}
              >
                events.
              </em>
            </h2>

            <p
              className="text-[15px] md:text-[16px] leading-[1.55] max-w-[640px] mx-auto"
              style={{ color: "var(--color-ink-soft)" }}
            >
              Two registrations before the work begins — secure your team&apos;s
              spot in both.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-7">
            {EVENTS.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onFlyerClick={() => setLightbox(event)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox event={lightbox} onClose={closeLightbox} />
      )}
    </>
  );
}

function EventCard({
  event,
  onFlyerClick,
}: {
  event: Event;
  onFlyerClick: () => void;
}) {
  const accent = ACCENT_MAP[event.accent];

  return (
    <article
      className="group relative flex flex-col sm:flex-row gap-6 p-6 md:p-7 border rounded-sm transition-all hover:-translate-y-1"
      style={{
        borderColor: "var(--color-line)",
        backgroundColor: "var(--color-bg-soft)",
      }}
    >
      {/* Left: Flyer — clickable */}
      <div className="relative flex-shrink-0 mx-auto sm:mx-0">
        <div className="absolute -top-2.5 -right-2.5 w-5 h-5 pointer-events-none z-10">
          <div className="absolute top-0 right-0 w-2.5 h-px" style={{ background: "var(--color-ink)" }} />
          <div className="absolute top-0 right-0 w-px h-2.5" style={{ background: "var(--color-ink)" }} />
        </div>
        <div className="absolute -bottom-2.5 -left-2.5 w-5 h-5 pointer-events-none z-10">
          <div className="absolute bottom-0 left-0 w-2.5 h-px" style={{ background: "var(--color-ink)" }} />
          <div className="absolute bottom-0 left-0 w-px h-2.5" style={{ background: "var(--color-ink)" }} />
        </div>

        <button
          type="button"
          onClick={onFlyerClick}
          className="relative block w-[180px] sm:w-[160px] md:w-[200px] aspect-[4/5] overflow-hidden rounded-sm cursor-zoom-in group/flyer"
          style={{
            boxShadow: "0 12px 30px -8px rgba(0,0,0,0.2), 0 4px 12px -4px rgba(0,0,0,0.1)",
            backgroundColor: "#fff",
          }}
          aria-label={`View ${event.title} flyer`}
        >
          <Image
            src={event.flyer}
            alt={`${event.title} flyer`}
            fill
            sizes="200px"
            className="object-cover transition-transform duration-300 group-hover/flyer:scale-105"
          />
          {/* Hover overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/flyer:opacity-100 transition-opacity duration-200"
            style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
          >
            <div
              className="flex items-center gap-1.5 px-3 py-2 rounded-full text-white font-mono text-[10px] tracking-[0.1em] uppercase"
              style={{ backgroundColor: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
            >
              <ZoomIn size={13} />
              View
            </div>
          </div>
        </button>
      </div>

      {/* Right: Event details */}
      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex items-center justify-between mb-4">
          <span
            className="font-mono text-[11px] tracking-[0.14em]"
            style={{ color: "var(--color-muted)" }}
          >
            EVENT {event.number}
          </span>
          <span
            className="font-mono text-[10px] tracking-[0.14em] uppercase px-2.5 py-1 rounded-sm"
            style={{
              color: accent,
              backgroundColor: `color-mix(in srgb, ${accent} 12%, transparent)`,
              border: `1px solid color-mix(in srgb, ${accent} 28%, transparent)`,
            }}
          >
            {event.category}
          </span>
        </div>

        <h3
          className="font-display font-medium leading-[1.05] tracking-tight mb-3"
          style={{
            fontSize: "clamp(22px, 2.4vw, 28px)",
            fontVariationSettings: "'opsz' 48, 'SOFT' 40",
            color: "var(--color-ink)",
          }}
        >
          {event.title}
        </h3>

        <div className="flex flex-col gap-1.5 mb-4">
          <div
            className="flex items-start gap-2 text-[12.5px] leading-[1.45]"
            style={{ color: "var(--color-ink-soft)" }}
          >
            <Calendar size={13} strokeWidth={1.8} style={{ color: accent, marginTop: "2px", flexShrink: 0 }} />
            <span>
              <strong style={{ color: "var(--color-ink)", fontWeight: 600 }}>
                {event.date}
              </strong>
              {" · "}{event.time}
            </span>
          </div>
          <div
            className="flex items-start gap-2 text-[12.5px] leading-[1.45]"
            style={{ color: "var(--color-ink-soft)" }}
          >
            <MapPin size={13} strokeWidth={1.8} style={{ color: accent, marginTop: "2px", flexShrink: 0 }} />
            <span>{event.location}</span>
          </div>
        </div>

        <p
          className="text-[13.5px] md:text-[14px] leading-[1.55] mb-5 flex-1"
          style={{ color: "var(--color-ink-soft)" }}
        >
          {event.description}
        </p>

        
          <a href={event.registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn inline-flex items-center gap-2.5 px-4 py-3 rounded-full text-[12.5px] font-semibold transition-all self-start"
          style={{
            backgroundColor: accent,
            color: "#fff",
            letterSpacing: "0.04em",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-1px)";
            e.currentTarget.style.boxShadow = `0 8px 22px color-mix(in srgb, ${accent} 40%, transparent)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <span>{event.ctaLabel}</span>
          <ArrowUpRight size={15} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </a>
      </div>
    </article>
  );
}

function Lightbox({ event, onClose }: { event: Event; onClose: () => void }) {
  const accent = ACCENT_MAP[event.accent];

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      style={{ backgroundColor: "rgba(10, 10, 10, 0.88)", backdropFilter: "blur(10px)" }}
      onClick={onClose}
    >
      <div
        className="relative flex flex-col md:flex-row gap-6 md:gap-10 max-w-[900px] w-full max-h-[90vh] overflow-y-auto rounded-sm"
        style={{ backgroundColor: "var(--color-bg)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
          style={{
            backgroundColor: "var(--color-bg-soft)",
            border: "1px solid var(--color-line)",
            color: "var(--color-ink)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--color-ink)";
            e.currentTarget.style.color = "var(--color-bg)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "var(--color-bg-soft)";
            e.currentTarget.style.color = "var(--color-ink)";
          }}
        >
          <X size={16} strokeWidth={2} />
        </button>

        {/* Flyer — large */}
        <div className="relative flex-shrink-0 w-full md:w-[340px] aspect-[4/5]">
          <Image
            src={event.flyer}
            alt={`${event.title} flyer`}
            fill
            sizes="(max-width: 768px) 100vw, 340px"
            className="object-contain rounded-sm"
          />
        </div>

        {/* Event details */}
        <div className="flex flex-col justify-center p-6 md:p-8 md:pl-0 flex-1">
          <span
            className="font-mono text-[10px] tracking-[0.14em] uppercase px-2.5 py-1 rounded-sm self-start mb-4"
            style={{
              color: accent,
              backgroundColor: `color-mix(in srgb, ${accent} 12%, transparent)`,
              border: `1px solid color-mix(in srgb, ${accent} 28%, transparent)`,
            }}
          >
            {event.category}
          </span>

          <h3
            className="font-display font-medium leading-[1.05] tracking-tight mb-4"
            style={{
              fontSize: "clamp(28px, 3.5vw, 40px)",
              fontVariationSettings: "'opsz' 48, 'SOFT' 40",
              color: "var(--color-ink)",
            }}
          >
            {event.title}
          </h3>

          <div className="flex flex-col gap-2 mb-5">
            <div className="flex items-start gap-2 text-[14px]" style={{ color: "var(--color-ink-soft)" }}>
              <Calendar size={14} strokeWidth={1.8} style={{ color: accent, marginTop: "3px", flexShrink: 0 }} />
              <span>
                <strong style={{ color: "var(--color-ink)", fontWeight: 600 }}>{event.date}</strong>
                {" · "}{event.time}
              </span>
            </div>
            <div className="flex items-start gap-2 text-[14px]" style={{ color: "var(--color-ink-soft)" }}>
              <MapPin size={14} strokeWidth={1.8} style={{ color: accent, marginTop: "3px", flexShrink: 0 }} />
              <span>{event.location}</span>
            </div>
          </div>

          <p
            className="text-[15px] leading-[1.6] mb-7"
            style={{ color: "var(--color-ink-soft)" }}
          >
            {event.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 items-start">
            
              <a href={event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full text-[14px] font-semibold transition-all"
              style={{
                backgroundColor: accent,
                color: "#fff",
                letterSpacing: "0.04em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = `0 8px 22px color-mix(in srgb, ${accent} 40%, transparent)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span>{event.ctaLabel}</span>
              <ArrowUpRight size={16} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-[14px] font-semibold transition-all border"
              style={{
                color: "var(--color-ink-soft)",
                borderColor: "var(--color-line)",
                backgroundColor: "transparent",
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
              Close
            </button>
          </div>

          <p
            className="font-mono text-[10px] tracking-[0.1em] uppercase mt-4"
            style={{ color: "var(--color-muted)" }}
          >
            Press Esc or click outside to close
          </p>
        </div>
      </div>
    </div>
  );
}
