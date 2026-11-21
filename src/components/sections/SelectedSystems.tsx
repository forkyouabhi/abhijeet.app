"use client";

import { useState } from "react";
import { ArrowUpRight, Lock, Minus, Plus } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { PROJECTS, PROFILE } from "@/data/portfolio";
import { MOTION_DURATION, MOTION_EASE, VIEWPORT_ONCE } from "@/lib/constants";

export function SelectedSystems() {
  const [expandedId, setExpandedId] = useState<string | null>(PROJECTS[0].id);
  const shouldReduceMotion = useReducedMotion();

  const toggleProject = (id: string) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="systems"
      aria-labelledby="systems-heading"
      className="relative border-t border-alabaster/10 bg-obsidian-950 py-20 lg:py-32"
    >
      {/* Subtle right-hand architectural spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-96"
        style={{
          background:
            "radial-gradient(ellipse 55% 42% at 78% 0%, rgba(200,157,92,0.06) 0%, transparent 72%)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        {/* Section Editorial Header */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: MOTION_DURATION.base, ease: MOTION_EASE }}
          className="mb-14 flex flex-col justify-between gap-6 border-b border-alabaster/10 pb-8 lg:mb-16 lg:flex-row lg:items-end"
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brass">
              Act 02 — Selected Systems
            </p>
            <h2
              id="systems-heading"
              className="mt-3 font-serif text-4xl font-light tracking-wide text-alabaster sm:text-5xl lg:text-6xl"
            >
              Engineered &amp; <span className="italic text-parchment">Shipped</span>
            </h2>
          </div>

          <div className="flex flex-col items-start gap-3 lg:items-end">
            <p className="max-w-md text-[14px] font-light leading-[1.75] text-slate-ink sm:text-[15px] lg:text-right">
              Enterprise supply chain middleware, live AI-native platforms, and automated
              data and endpoint pipelines running in production.
            </p>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.26em] text-brass transition-colors hover:text-parchment"
            >
              <span>All Repositories ({PROFILE.githubHandle})</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>

        {/* Full-Width Editorial Case-Study Ledger (Zero Generic Card Grids) */}
        <div className="border-b border-alabaster/12">
          {PROJECTS.map((project) => {
            const isOpen = expandedId === project.id;

            return (
              <motion.article
                key={project.id}
                id={`system-${project.id}`}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_ONCE}
                transition={{ duration: MOTION_DURATION.base, ease: MOTION_EASE }}
                className={`border-t transition-colors duration-500 ${
                  isOpen
                    ? "border-brass/55 bg-obsidian-900/55"
                    : "border-alabaster/12 hover:bg-obsidian-900/30"
                }`}
              >
                {/* Interactive Band Header */}
                <button
                  type="button"
                  onClick={() => toggleProject(project.id)}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${project.id}`}
                  className="group grid w-full grid-cols-1 items-start gap-6 px-4 py-8 text-left sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-8 lg:py-10"
                >
                  {/* Col 1: Index & Period */}
                  <div className="flex items-center justify-between lg:col-span-2 lg:flex-col lg:items-start lg:gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-brass">
                      {project.index}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-ink">
                      {project.period}
                    </span>
                  </div>

                  {/* Cols 2-6: Editorial Title & Subtitle */}
                  <div className="lg:col-span-5">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <h3 className="font-serif text-3xl font-normal tracking-wide text-alabaster transition-colors group-hover:text-parchment sm:text-4xl lg:text-[42px] leading-none">
                        {project.title}
                      </h3>
                      {project.isInternal && (
                        <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.22em] text-slate-ink">
                          <Lock className="h-2.5 w-2.5 text-brass/80" />
                          Internal
                        </span>
                      )}
                    </div>
                    <p className="mt-2 font-serif text-lg italic text-parchment/85">
                      {project.subtitle}
                    </p>
                    <p className="mt-3 max-w-xl text-[14px] font-light leading-[1.7] text-slate-ink">
                      {project.summary}
                    </p>
                  </div>

                  {/* Cols 7-10: Two Key Lining Serif Metrics */}
                  <div className="grid grid-cols-2 divide-x divide-alabaster/10 lg:col-span-3">
                    {project.metrics.slice(0, 2).map((metric, idx) => (
                      <div
                        key={metric.label}
                        className={idx === 0 ? "pr-4" : "pl-5"}
                      >
                        <p className="font-serif text-2xl font-normal tracking-tight text-alabaster lining-nums tabular-nums sm:text-3xl leading-none">
                          {metric.value}
                        </p>
                        <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-ink leading-relaxed">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Cols 11-12: Hairline Architecture Toggle */}
                  <div className="flex items-center justify-between lg:col-span-2 lg:justify-end">
                    <span className="inline-flex items-center gap-2 border border-alabaster/15 px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.24em] text-alabaster/85 transition-colors duration-300 group-hover:border-brass/60 group-hover:text-parchment">
                      <span>{isOpen ? "Close" : "Architecture"}</span>
                      {isOpen ? (
                        <Minus className="h-3 w-3 text-brass" />
                      ) : (
                        <Plus className="h-3 w-3 text-brass" />
                      )}
                    </span>
                  </div>
                </button>

                {/* Expandable Architecture Deep-Dive */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`panel-${project.id}`}
                      initial={
                        shouldReduceMotion
                          ? { opacity: 0 }
                          : { opacity: 0, height: 0 }
                      }
                      animate={
                        shouldReduceMotion
                          ? { opacity: 1 }
                          : { opacity: 1, height: "auto" }
                      }
                      exit={
                        shouldReduceMotion
                          ? { opacity: 0 }
                          : { opacity: 0, height: 0 }
                      }
                      transition={{ duration: 0.45, ease: MOTION_EASE }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 gap-8 border-t border-alabaster/10 px-4 pb-10 pt-8 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
                        {/* Left Architecture Brief */}
                        <div className="lg:col-span-6 lg:col-start-3">
                          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-brass">
                            System Architecture — {project.role}
                          </p>
                          <p className="mt-3 text-[15px] font-light leading-[1.8] text-alabaster/82">
                            {project.architecture}
                          </p>

                          <div className="mt-6 border-t border-alabaster/[0.08] pt-4">
                            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-ink leading-relaxed">
                              <span className="mr-3 text-brass/80">Stack //</span>
                              {project.stack.join(" · ")}
                            </p>
                          </div>
                        </div>

                        {/* Right Outcomes + Action */}
                        <div className="flex flex-col justify-between gap-6 border-t border-alabaster/10 pt-6 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                          <div>
                            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-ink">
                              Engineering Outcomes
                            </p>
                            <ul className="mt-4 space-y-3">
                              {project.highlights.map((item, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-3 text-[14px] font-light leading-[1.7] text-alabaster/75"
                                >
                                  <span
                                    aria-hidden="true"
                                    className="mt-2.5 h-px w-3 shrink-0 bg-brass/70"
                                  />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-2">
                            {project.href ? (
                              <a
                                href={project.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 border border-brass/45 px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.26em] text-parchment transition-colors duration-300 hover:border-brass hover:bg-brass/10"
                              >
                                <span>{project.hrefLabel ?? "Inspect System"}</span>
                                <ArrowUpRight className="h-3.5 w-3.5 text-brass transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                              </a>
                            ) : (
                              <div className="inline-flex items-center gap-2.5 whitespace-nowrap border border-alabaster/12 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-ink">
                                <Lock className="h-3 w-3 shrink-0 text-brass/80" />
                                <span>Internal · Source Restricted</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
