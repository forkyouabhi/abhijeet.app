"use client";

import { EDUCATION } from "@/data/portfolio";

export function EducationHonors() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="relative border-t border-alabaster/10 bg-obsidian-950 py-20 lg:py-32"
    >
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        {/* Section Editorial Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 border-b border-alabaster/10 pb-8 lg:mb-16 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brass">
              Act 04 — Academic Foundation
            </p>
            <h2
              id="education-heading"
              className="mt-3 font-serif text-4xl font-light tracking-wide text-alabaster sm:text-5xl lg:text-6xl"
            >
              Education &amp; <span className="italic text-parchment">Honors</span>
            </h2>
          </div>

          <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-slate-ink">
            {EDUCATION.period} · {EDUCATION.location}
          </p>
        </div>

        {/* Asymmetrical Editorial Spread */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: Degree Spread */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-brass" />
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-brass">
                {EDUCATION.distinction}
              </span>
            </div>

            <h3 className="mt-4 font-serif text-3xl font-normal tracking-wide text-alabaster sm:text-4xl lg:text-[44px] leading-[1.08]">
              {EDUCATION.degree}
            </h3>
            <p className="mt-2 font-serif text-xl italic text-parchment/90 sm:text-2xl">
              {EDUCATION.institution} — {EDUCATION.focus}
            </p>

            {/* Key Academic Coursework Ledger */}
            <div className="mt-10 border-t border-alabaster/10 pt-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-ink">
                Selected Coursework
              </p>
              <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2">
                {EDUCATION.coursework.map((course) => (
                  <li
                    key={course}
                    className="flex items-center gap-3 border-b border-alabaster/[0.07] pb-3 text-[14px] font-light text-alabaster/82 sm:text-[15px]"
                  >
                    <span
                      aria-hidden="true"
                      className="h-px w-3 shrink-0 bg-brass/65"
                    />
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Honors & Distinctions Column */}
          <div className="border-t border-alabaster/10 pt-8 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brass">
              Honors &amp; Competitions
            </p>

            <div className="mt-6 divide-y divide-alabaster/10">
              {EDUCATION.honors.map((honor, idx) => (
                <article
                  key={honor.title}
                  className={idx === 0 ? "pb-8" : "py-8"}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-slate-ink">
                      {honor.organization}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brass/85">
                      {honor.period}
                    </span>
                  </div>
                  <h4 className="mt-3 font-serif text-2xl font-normal tracking-wide text-alabaster">
                    {honor.title}
                  </h4>
                  <p className="mt-2.5 text-[14px] font-light leading-[1.75] text-alabaster/72">
                    {honor.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
