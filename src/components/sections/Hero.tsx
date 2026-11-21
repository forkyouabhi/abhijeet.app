"use client";

import dynamic from "next/dynamic";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { MagneticLink } from "@/components/motion/MagneticLink";

const HeroShaderCanvas = dynamic(
  () => import("@/components/three/HeroShaderCanvas"),
  {
    ssr: false,
    loading: () => (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-obsidian-950 studio-spotlight"
      />
    ),
  }
);

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh flex-col justify-between bg-obsidian-950"
    >
      {/* Layer 0: Single active WebGL custom GLSL lighting canvas */}
      <HeroShaderCanvas />

      {/* Subtle architectural vertical framing hairlines (desktop) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-alabaster/[0.04] lg:block"
      />

      {/* Foreground Editorial Composition — 100% visible on SSR first paint */}
      <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-[1440px] flex-col justify-between px-6 pb-10 pt-24 sm:px-10 lg:px-20 lg:pb-12 lg:pt-28">
        {/* Top Metadata Telemetry Rail */}
        <div className="hero-animate flex flex-wrap items-center justify-between gap-4 border-b border-alabaster/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-brass" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brass">
              Act 00 — Portfolio Dossier
            </span>
          </div>

          <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-slate-ink">
            {PROFILE.heroAffiliations}
          </p>
        </div>

        {/* Center Monumental Asymmetrical Stage */}
        <div className="my-auto grid grid-cols-1 items-end gap-9 py-8 sm:gap-12 sm:py-12 lg:grid-cols-12 lg:gap-10 lg:py-16">
          {/* Left: Monumental Editorial Serif Title */}
          <div className="lg:col-span-8">
            <p className="hero-animate hero-delay-1 mb-4 font-mono text-[10px] uppercase tracking-[0.32em] text-slate-ink sm:mb-5 sm:text-[11px]">
              {PROFILE.title}
            </p>

            <h1 className="font-serif font-light tracking-[-0.02em] text-alabaster">
              <span className="block overflow-hidden pb-1">
                <span className="hero-animate hero-delay-2 block text-[clamp(3.75rem,11vw,8.75rem)] leading-[0.88]">
                  {PROFILE.heroHeadlineLine1}
                </span>
              </span>
              <span className="block overflow-hidden pb-2 pl-[0.06em] sm:pl-[0.14em]">
                <span className="hero-animate hero-delay-3 block font-normal italic text-parchment text-[clamp(3.75rem,11vw,8.75rem)] leading-[0.88]">
                  {PROFILE.heroHeadlineLine2}
                </span>
              </span>
            </h1>

            <div className="hero-animate hero-delay-4 mt-6 flex items-center gap-4 sm:mt-8">
              <span className="h-px w-12 bg-brass/60" />
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-parchment/80 sm:text-[11px]">
                Operational Precision · Built in Production
              </p>
            </div>
          </div>

          {/* Right: Quiet Architectural Posting Dossier (no cards, pure hairlines) */}
          <aside
            aria-label="Current posting"
            className="hero-animate hero-delay-4 border-l border-alabaster/12 pl-6 lg:col-span-4 lg:mb-4 lg:pl-8"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brass">
              Current Posting
            </p>
            <p className="mt-3 font-serif text-2xl font-normal tracking-wide text-alabaster sm:text-[28px] leading-snug">
              Information Technology Student
            </p>
            <p className="mt-1.5 text-sm font-light text-slate-ink">
              PCL Construction · Business Technology
            </p>
            <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-brass/80">
              Sep 2026 — Present · Toronto District
            </p>

            <div className="my-5 h-px w-full bg-alabaster/10" />

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-slate-ink/80">
                  Prior Co-ops
                </p>
                <p className="mt-1 text-xs font-light text-alabaster/90">
                  NWMO · Loblaw
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-slate-ink/80">
                  Academics
                </p>
                <p className="mt-1 text-xs font-light text-alabaster/90">
                  Lakehead HBSc CS · &apos;28
                </p>
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom Editorial Footrail */}
        <div className="hero-animate hero-delay-5 grid grid-cols-1 items-end gap-8 border-t border-alabaster/10 pt-7 lg:grid-cols-12 lg:gap-8">
          {/* Thesis Statement */}
          <div className="lg:col-span-4">
            <p className="max-w-md text-[14px] font-light leading-[1.75] text-alabaster/75 sm:text-[15px]">
              {PROFILE.heroStatement}
            </p>
          </div>

          {/* High-Contrast Serif Metrics — Hairline Separated, Lining Numerals, Zero Boxes */}
          <div className="grid grid-cols-3 divide-x divide-alabaster/10 lg:col-span-5">
            {PROFILE.heroMetrics.map((metric, idx) => (
              <div
                key={metric.label}
                className={idx === 0 ? "pr-4 sm:pr-6" : "px-4 sm:px-6"}
              >
                <p className="font-serif text-3xl font-normal tracking-tight text-alabaster lining-nums tabular-nums sm:text-4xl lg:text-[42px] leading-none">
                  {metric.value}
                </p>
                <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-ink sm:text-[10px] leading-relaxed">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          {/* Restrained Action & Index Links */}
          <div className="flex flex-col items-start justify-between gap-4 lg:col-span-3 lg:items-end">
            <MagneticLink
              href="#experience"
              className="group inline-flex items-center gap-2.5 whitespace-nowrap border border-alabaster/20 bg-obsidian-900/60 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.26em] text-alabaster transition-colors duration-300 hover:border-brass hover:text-parchment"
            >
              <span>Explore Dossier</span>
              <ArrowDown className="h-3.5 w-3.5 shrink-0 text-brass transition-transform duration-300 group-hover:translate-y-0.5" />
            </MagneticLink>

            <div className="flex items-center gap-5 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-ink">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-parchment"
              >
                GH
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-parchment"
              >
                LI
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="transition-colors hover:text-parchment"
              >
                Mail
              </a>
              <a
                href={PROFILE.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 text-brass/85 transition-colors hover:text-parchment"
              >
                CV
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
