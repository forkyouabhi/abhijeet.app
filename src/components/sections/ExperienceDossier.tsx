"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { EXPERIENCES, type ExperienceItem } from "@/data/portfolio";
import { MOTION_DURATION, MOTION_EASE, VIEWPORT_ONCE } from "@/lib/constants";

function ArchitecturalPlateSchematic({
  type,
}: {
  type: ExperienceItem["diagramType"];
}) {
  switch (type) {
    case "enterprise-it":
      return (
        <svg viewBox="0 0 360 180" fill="none" className="h-full w-full">
          {/* Concentric endpoint topology + Power Platform bridge */}
          <rect x="24" y="24" width="312" height="132" stroke="#F4F1EA" strokeOpacity="0.08" strokeWidth="0.75" />
          <circle cx="110" cy="90" r="46" stroke="#C89D5C" strokeOpacity="0.45" strokeWidth="0.8" />
          <circle cx="110" cy="90" r="24" stroke="#C89D5C" strokeOpacity="0.25" strokeWidth="0.7" strokeDasharray="3 4" />
          <circle cx="110" cy="90" r="3.5" fill="#C89D5C" />
          <line x1="156" y1="90" x2="226" y2="90" stroke="#C89D5C" strokeOpacity="0.55" strokeWidth="0.8" />
          <rect x="226" y="54" width="84" height="72" stroke="#E6D5B8" strokeOpacity="0.35" strokeWidth="0.8" />
          <line x1="226" y1="78" x2="310" y2="78" stroke="#F4F1EA" strokeOpacity="0.14" strokeWidth="0.6" />
          <line x1="226" y1="102" x2="310" y2="102" stroke="#F4F1EA" strokeOpacity="0.14" strokeWidth="0.6" />
          <text x="236" y="70" fill="#C89D5C" fontSize="7" fontFamily="monospace" letterSpacing="2">INTUNE</text>
          <text x="236" y="94" fill="#F4F1EA" fillOpacity="0.7" fontSize="7" fontFamily="monospace" letterSpacing="2">POWER APPS</text>
          <text x="236" y="117" fill="#8C909B" fontSize="7" fontFamily="monospace" letterSpacing="2">SERVICENOW</text>
          <text x="36" y="146" fill="#8C909B" fontSize="7" fontFamily="monospace" letterSpacing="2.2">DISTRICT ENDPOINT TOPOLOGY</text>
        </svg>
      );
    case "nuclear-ai":
      return (
        <svg viewBox="0 0 360 180" fill="none" className="h-full w-full">
          {/* Zia AI routing tree + zero-trust perimeter ring */}
          <circle cx="180" cy="90" r="64" stroke="#C89D5C" strokeOpacity="0.22" strokeWidth="0.7" strokeDasharray="2 5" />
          <circle cx="180" cy="90" r="40" stroke="#C89D5C" strokeOpacity="0.45" strokeWidth="0.8" />
          <line x1="56" y1="90" x2="140" y2="90" stroke="#E6D5B8" strokeOpacity="0.45" strokeWidth="0.8" />
          <line x1="220" y1="90" x2="296" y2="52" stroke="#C89D5C" strokeOpacity="0.5" strokeWidth="0.8" />
          <line x1="220" y1="90" x2="296" y2="90" stroke="#C89D5C" strokeOpacity="0.5" strokeWidth="0.8" />
          <line x1="220" y1="90" x2="296" y2="128" stroke="#C89D5C" strokeOpacity="0.5" strokeWidth="0.8" />
          <circle cx="56" cy="90" r="3" fill="#F4F1EA" fillOpacity="0.7" />
          <circle cx="180" cy="90" r="4" fill="#C89D5C" />
          <circle cx="296" cy="52" r="2.5" fill="#E6D5B8" />
          <circle cx="296" cy="90" r="2.5" fill="#E6D5B8" />
          <circle cx="296" cy="128" r="2.5" fill="#E6D5B8" />
          <text x="155" y="112" fill="#C89D5C" fontSize="7" fontFamily="monospace" letterSpacing="2">ZIA AI</text>
          <text x="304" y="55" fill="#8C909B" fontSize="6.5" fontFamily="monospace" letterSpacing="1.6">NET</text>
          <text x="304" y="93" fill="#8C909B" fontSize="6.5" fontFamily="monospace" letterSpacing="1.6">SEC</text>
          <text x="304" y="131" fill="#8C909B" fontSize="6.5" fontFamily="monospace" letterSpacing="1.6">HW</text>
          <text x="28" y="160" fill="#8C909B" fontSize="7" fontFamily="monospace" letterSpacing="2.2">ZERO-TRUST MDM · PREDICTIVE ROUTING</text>
        </svg>
      );
    case "supply-chain":
      return (
        <svg viewBox="0 0 360 180" fill="none" className="h-full w-full">
          {/* Direct Teradata -> FastAPI PrioTool -> 3 Distribution Centres */}
          <rect x="28" y="64" width="76" height="52" stroke="#F4F1EA" strokeOpacity="0.2" strokeWidth="0.8" />
          <rect x="142" y="56" width="84" height="68" stroke="#C89D5C" strokeOpacity="0.6" strokeWidth="0.9" />
          <line x1="104" y1="90" x2="142" y2="90" stroke="#C89D5C" strokeWidth="0.9" />
          <line x1="226" y1="74" x2="288" y2="52" stroke="#E6D5B8" strokeOpacity="0.45" strokeWidth="0.75" />
          <line x1="226" y1="90" x2="288" y2="90" stroke="#E6D5B8" strokeOpacity="0.45" strokeWidth="0.75" />
          <line x1="226" y1="106" x2="288" y2="128" stroke="#E6D5B8" strokeOpacity="0.45" strokeWidth="0.75" />
          <rect x="288" y="42" width="42" height="20" stroke="#F4F1EA" strokeOpacity="0.2" strokeWidth="0.7" />
          <rect x="288" y="80" width="42" height="20" stroke="#F4F1EA" strokeOpacity="0.2" strokeWidth="0.7" />
          <rect x="288" y="118" width="42" height="20" stroke="#F4F1EA" strokeOpacity="0.2" strokeWidth="0.7" />
          <text x="38" y="93" fill="#8C909B" fontSize="6.5" fontFamily="monospace" letterSpacing="1.5">TERADATA</text>
          <text x="155" y="87" fill="#C89D5C" fontSize="7.5" fontFamily="monospace" letterSpacing="1.8">PRIOTOOL</text>
          <text x="158" y="102" fill="#8C909B" fontSize="6.5" fontFamily="monospace" letterSpacing="1.5">FASTAPI</text>
          <text x="299" y="55" fill="#F4F1EA" fillOpacity="0.7" fontSize="6.5" fontFamily="monospace">DC-1</text>
          <text x="299" y="93" fill="#F4F1EA" fillOpacity="0.7" fontSize="6.5" fontFamily="monospace">DC-2</text>
          <text x="299" y="131" fill="#F4F1EA" fillOpacity="0.7" fontSize="6.5" fontFamily="monospace">DC-3</text>
          <text x="28" y="160" fill="#8C909B" fontSize="7" fontFamily="monospace" letterSpacing="2.2">500+ WEEKLY TRANSACTIONS · 85% COVERAGE</text>
        </svg>
      );
    case "retail-ops":
      return (
        <svg viewBox="0 0 360 180" fill="none" className="h-full w-full">
          {/* Precision fulfillment throughput curves */}
          <line x1="28" y1="132" x2="332" y2="132" stroke="#F4F1EA" strokeOpacity="0.14" strokeWidth="0.7" />
          <line x1="28" y1="52" x2="332" y2="52" stroke="#C89D5C" strokeOpacity="0.25" strokeWidth="0.6" strokeDasharray="3 4" />
          <path
            d="M 28 118 C 90 112, 130 62, 195 58 C 250 55, 285 48, 332 46"
            stroke="#C89D5C"
            strokeWidth="1.1"
          />
          <circle cx="195" cy="58" r="3" fill="#C89D5C" />
          <circle cx="332" cy="46" r="3" fill="#E6D5B8" />
          <text x="28" y="42" fill="#C89D5C" fontSize="7" fontFamily="monospace" letterSpacing="2">95%+ ACCURACY FLOOR</text>
          <text x="28" y="156" fill="#8C909B" fontSize="7" fontFamily="monospace" letterSpacing="2.2">FRONTLINE FLOOR → CORPORATE ANALYTICS</text>
        </svg>
      );
    case "ngo-scale":
      return (
        <svg viewBox="0 0 360 180" fill="none" className="h-full w-full">
          {/* Multi-city hub network */}
          <circle cx="180" cy="84" r="50" stroke="#C89D5C" strokeOpacity="0.24" strokeWidth="0.7" />
          <line x1="180" y1="84" x2="96" y2="54" stroke="#E6D5B8" strokeOpacity="0.35" strokeWidth="0.75" />
          <line x1="180" y1="84" x2="268" y2="56" stroke="#E6D5B8" strokeOpacity="0.35" strokeWidth="0.75" />
          <line x1="180" y1="84" x2="108" y2="124" stroke="#E6D5B8" strokeOpacity="0.35" strokeWidth="0.75" />
          <line x1="180" y1="84" x2="256" y2="122" stroke="#E6D5B8" strokeOpacity="0.35" strokeWidth="0.75" />
          <circle cx="180" cy="84" r="5" fill="#C89D5C" />
          <circle cx="96" cy="54" r="3" fill="#F4F1EA" fillOpacity="0.75" />
          <circle cx="268" cy="56" r="3" fill="#F4F1EA" fillOpacity="0.75" />
          <circle cx="108" cy="124" r="3" fill="#F4F1EA" fillOpacity="0.75" />
          <circle cx="256" cy="122" r="3" fill="#F4F1EA" fillOpacity="0.75" />
          <text x="28" y="158" fill="#8C909B" fontSize="7" fontFamily="monospace" letterSpacing="2.2">MULTI-CITY OPERATIONS · 40+ HRS/MO AUTOMATED</text>
        </svg>
      );
    case "web-seo":
      return (
        <svg viewBox="0 0 360 180" fill="none" className="h-full w-full">
          <rect x="44" y="34" width="272" height="106" stroke="#F4F1EA" strokeOpacity="0.16" strokeWidth="0.75" />
          <line x1="44" y1="54" x2="316" y2="54" stroke="#F4F1EA" strokeOpacity="0.12" strokeWidth="0.7" />
          <line x1="140" y1="54" x2="140" y2="140" stroke="#C89D5C" strokeOpacity="0.28" strokeWidth="0.7" />
          <rect x="164" y="74" width="128" height="10" stroke="#C89D5C" strokeOpacity="0.45" strokeWidth="0.7" />
          <line x1="164" y1="100" x2="274" y2="100" stroke="#F4F1EA" strokeOpacity="0.25" strokeWidth="0.7" />
          <line x1="164" y1="114" x2="246" y2="114" stroke="#F4F1EA" strokeOpacity="0.18" strokeWidth="0.7" />
          <text x="28" y="160" fill="#8C909B" fontSize="7" fontFamily="monospace" letterSpacing="2.2">COMMERCIAL WEB · TECHNICAL SEO</text>
        </svg>
      );
  }
}

export function ExperienceDossier() {
  const [activeId, setActiveId] = useState<string>(EXPERIENCES[0].id);
  const cardRefs = useRef<Record<string, HTMLElement | null>>({});
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const elements = EXPERIENCES.map((exp) => cardRefs.current[exp.id]).filter(
      (el): el is HTMLElement => el !== null
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top - window.innerHeight * 0.3) -
              Math.abs(b.boundingClientRect.top - window.innerHeight * 0.3)
          );

        if (visible[0]) {
          const id = visible[0].target.getAttribute("data-exp-id");
          if (id) setActiveId(id);
        }
      },
      {
        rootMargin: "-20% 0px -48% 0px",
        threshold: [0.1, 0.35, 0.6],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const activeExperience =
    EXPERIENCES.find((exp) => exp.id === activeId) ?? EXPERIENCES[0];

  const jumpToChapter = (id: string) => {
    setActiveId(id);
    const el = cardRefs.current[id];
    if (!el) return;
    el.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
      block: "center",
    });
  };

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative border-t border-alabaster/10 bg-obsidian-950 py-20 lg:py-32"
    >
      {/* Subtle top-left studio illumination */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-96"
        style={{
          background:
            "radial-gradient(ellipse 55% 40% at 22% 0%, rgba(200,157,92,0.06) 0%, transparent 72%)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        {/* Section Editorial Eyebrow & Headline */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: MOTION_DURATION.base, ease: MOTION_EASE }}
          className="mb-14 flex flex-col justify-between gap-6 border-b border-alabaster/10 pb-8 lg:mb-20 lg:flex-row lg:items-end"
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brass">
              Act 01 — Career Dossier
            </p>
            <h2
              id="experience-heading"
              className="mt-3 font-serif text-4xl font-light tracking-wide text-alabaster sm:text-5xl lg:text-6xl"
            >
              Experience in <span className="italic text-parchment">Production</span>
            </h2>
          </div>

          <p className="max-w-md text-[14px] font-light leading-[1.75] text-slate-ink sm:text-[15px]">
            From frontline fulfillment floors to federally regulated nuclear IT, national
            retail supply chains, and enterprise Business Technology.
          </p>
        </motion.div>

        {/* Asymmetrical Pinned Split-Screen (NO overflow-hidden on any ancestor!) */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT PINNED PLATE (Desktop Sticky) */}
          <aside className="hidden lg:col-span-5 lg:sticky lg:top-24 lg:block">
            <div className="border border-alabaster/10 bg-obsidian-900/70 p-6">
              {/* Plate Top Telemetry */}
              <div className="flex items-center justify-between border-b border-alabaster/10 pb-3.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-brass">
                  Chapter {activeExperience.index} / 0{EXPERIENCES.length}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-ink">
                  {activeExperience.period}
                </span>
              </div>

              {/* Architectural Domain Schematic + Crossfade */}
              <div className="relative my-4 aspect-[2.15/1] w-full border border-alabaster/[0.07] bg-obsidian-950/90">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 55% 45%, rgba(200,157,92,0.08) 0%, transparent 72%)",
                  }}
                />
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={activeExperience.id}
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.985 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.985 }}
                    transition={{ duration: 0.35, ease: MOTION_EASE }}
                    className="relative h-full w-full p-2"
                  >
                    <ArchitecturalPlateSchematic type={activeExperience.diagramType} />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Active Role Metadata + Lining Serif Metrics */}
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={`${activeExperience.id}-meta`}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: MOTION_EASE }}
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-slate-ink">
                    {activeExperience.sector}
                  </p>
                  <h3 className="mt-1 font-serif text-2xl font-normal tracking-wide text-alabaster">
                    {activeExperience.company}
                  </h3>

                  <div className="mt-4 grid grid-cols-2 divide-x divide-alabaster/10 border-t border-alabaster/10 pt-4">
                    {activeExperience.metrics.map((metric, idx) => (
                      <div
                        key={metric.label}
                        className={idx === 0 ? "pr-4" : "pl-5"}
                      >
                        <p className="font-serif text-[28px] font-normal tracking-tight text-parchment lining-nums tabular-nums leading-none">
                          {metric.value}
                        </p>
                        <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-ink leading-relaxed">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Interactive Chapter Index with Shared-Layout Brass Rule */}
            <nav aria-label="Experience chapters" className="mt-5 border-t border-alabaster/10">
              <ul className="divide-y divide-alabaster/[0.07]">
                {EXPERIENCES.map((exp) => {
                  const isActive = exp.id === activeId;
                  return (
                    <li key={exp.id}>
                      <button
                        type="button"
                        onClick={() => jumpToChapter(exp.id)}
                        className="group relative flex w-full items-center justify-between py-2.5 pl-4 text-left transition-colors"
                      >
                        {isActive && (
                          <motion.span
                            layoutId="active-chapter-rule"
                            transition={{ duration: 0.35, ease: MOTION_EASE }}
                            className="absolute inset-y-1.5 left-0 w-[2px] bg-brass"
                          />
                        )}
                        <span className="flex items-baseline gap-3.5">
                          <span
                            className={`font-mono text-[10px] tracking-[0.24em] transition-colors ${
                              isActive
                                ? "text-brass"
                                : "text-slate-ink/60 group-hover:text-brass/80"
                            }`}
                          >
                            {exp.index}
                          </span>
                          <span
                            className={`text-sm transition-colors ${
                              isActive
                                ? "font-medium text-alabaster"
                                : "font-light text-slate-ink group-hover:text-alabaster/85"
                            }`}
                          >
                            {exp.shortName}
                          </span>
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-ink/75">
                          {exp.period.split(" — ")[0]}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          {/* RIGHT SCROLLING EDITORIAL CHAPTERS */}
          <div className="space-y-20 lg:col-span-7 lg:space-y-28">
            {EXPERIENCES.map((exp, idx) => {
              const isActive = exp.id === activeId;
              return (
                <motion.article
                  key={exp.id}
                  id={`exp-${exp.id}`}
                  data-exp-id={exp.id}
                  ref={(el) => {
                    cardRefs.current[exp.id] = el;
                  }}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT_ONCE}
                  transition={{ duration: MOTION_DURATION.base, ease: MOTION_EASE }}
                  className={`transition-colors duration-500 ${
                    idx === 0
                      ? "pt-0 lg:border-t lg:pt-8"
                      : "border-t pt-8"
                  } ${
                    isActive ? "border-brass/55" : "border-alabaster/12"
                  }`}
                >
                  {/* Chapter Metadata Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brass">
                        Chapter {exp.index}
                      </span>
                      <span className="h-px w-5 bg-alabaster/15" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-slate-ink">
                        {exp.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-ink">
                      <span>{exp.location}</span>
                      {exp.current && (
                        <>
                          <span className="h-1 w-1 rounded-full bg-brass" />
                          <span className="text-parchment">Current</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Role & Organization Title */}
                  <div className="mt-5">
                    <h3 className="font-serif text-3xl font-normal tracking-wide text-alabaster sm:text-4xl lg:text-[42px] leading-[1.08]">
                      {exp.role}
                    </h3>
                    <p className="mt-2 font-serif text-xl italic text-parchment/90 sm:text-2xl">
                      {exp.company}
                    </p>
                  </div>

                  {/* Lead Narrative */}
                  <p className="mt-5 max-w-2xl text-[15px] font-light leading-[1.78] text-alabaster/80 sm:text-[16px]">
                    {exp.summary}
                  </p>

                  {/* Mobile / Inline Metrics Strip */}
                  <div className="mt-6 grid grid-cols-2 divide-x divide-alabaster/10 border-y border-alabaster/10 py-4 lg:hidden">
                    {exp.metrics.map((metric, idx) => (
                      <div
                        key={metric.label}
                        className={idx === 0 ? "pr-4" : "pl-4"}
                      >
                        <p className="font-serif text-3xl font-normal text-parchment lining-nums tabular-nums leading-none">
                          {metric.value}
                        </p>
                        <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-ink">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Structured Engineering Highlights */}
                  <ul className="mt-7 space-y-4">
                    {exp.highlights.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 text-[14px] font-light leading-[1.75] text-alabaster/72 sm:text-[15px]"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-px w-3.5 shrink-0 bg-brass/65"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Restrained Monospace Stack Footer (Zero SaaS Pill Badges) */}
                  <div className="mt-8 border-t border-alabaster/[0.07] pt-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-ink leading-relaxed">
                      <span className="mr-3 text-brass/80">Stack //</span>
                      {exp.stack.join(" · ")}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
