"use client";

import { motion, useReducedMotion } from "motion/react";
import { CAPABILITIES, CERTIFICATIONS } from "@/data/portfolio";
import { MOTION_DURATION, MOTION_EASE, VIEWPORT_ONCE } from "@/lib/constants";

export function TechnicalCraft() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="craft"
      aria-labelledby="craft-heading"
      className="relative border-t border-alabaster/10 bg-obsidian-950 py-20 lg:py-32"
    >
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
              Act 03 — Technical Ledger
            </p>
            <h2
              id="craft-heading"
              className="mt-3 font-serif text-4xl font-light tracking-wide text-alabaster sm:text-5xl lg:text-6xl"
            >
              Craft &amp; <span className="italic text-parchment">Credentials</span>
            </h2>
          </div>

          <p className="max-w-md text-[14px] font-light leading-[1.75] text-slate-ink sm:text-[15px] lg:text-right">
            Spanning low-level systems languages, full-stack production APIs, enterprise
            data warehouses, and zero-trust Microsoft endpoint engineering.
          </p>
        </motion.div>

        {/* 4-Row Architectural Capabilities Ledger */}
        <div className="divide-y divide-alabaster/10 border-b border-alabaster/10">
          {CAPABILITIES.map((group) => (
            <motion.div
              key={group.index}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_ONCE}
              transition={{ duration: MOTION_DURATION.base, ease: MOTION_EASE }}
              className="grid grid-cols-1 gap-8 py-10 lg:grid-cols-12 lg:gap-10 lg:py-12"
            >
              {/* Col 1: Index */}
              <div className="lg:col-span-1">
                <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-brass">
                  {group.index}
                </span>
              </div>

              {/* Cols 2-5: Category & Narrative */}
              <div className="lg:col-span-4">
                <h3 className="font-serif text-2xl font-normal tracking-wide text-alabaster sm:text-3xl">
                  {group.category}
                </h3>
                <p className="mt-2.5 max-w-sm text-[14px] font-light leading-[1.7] text-slate-ink">
                  {group.description}
                </p>
              </div>

              {/* Cols 6-12: Clean Typographic Matrix (Zero Pill Badges) */}
              <div className="lg:col-span-7">
                <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="group flex items-center gap-3 border-b border-alabaster/[0.07] pb-3 transition-colors duration-300 hover:border-brass/45"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1 w-1 rounded-full bg-brass/55 transition-colors duration-300 group-hover:bg-brass"
                      />
                      <span className="text-[14px] font-light tracking-wide text-alabaster/85 transition-colors duration-300 group-hover:text-parchment sm:text-[15px]">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Hairline Spread */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: MOTION_DURATION.base, ease: MOTION_EASE }}
          className="mt-16 lg:mt-20"
        >
          <div className="mb-8 flex items-center gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brass">
              Certifications
            </span>
            <span className="h-px flex-1 bg-alabaster/10" />
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-slate-ink">
              0{CERTIFICATIONS.length} Verified
            </span>
          </div>

          <div className="grid grid-cols-1 divide-y divide-alabaster/10 border border-alabaster/10 bg-obsidian-900/45 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {CERTIFICATIONS.map((cert, idx) => (
              <div key={cert.title} className="flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-brass/85">
                      0{idx + 1}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-slate-ink">
                      {cert.issuer}
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-normal leading-snug tracking-wide text-alabaster sm:text-2xl">
                    {cert.title}
                  </h3>
                </div>
                <p className="mt-6 border-t border-alabaster/[0.08] pt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-ink">
                  {cert.focus}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
