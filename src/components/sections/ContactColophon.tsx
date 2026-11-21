"use client";

import { ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { MagneticLink } from "@/components/motion/MagneticLink";

const CHANNELS = [
  {
    index: "01",
    label: "Direct Email",
    value: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
    external: false,
  },
  {
    index: "02",
    label: "LinkedIn",
    value: "/in/abhijeet3101",
    href: PROFILE.linkedin,
    external: true,
  },
  {
    index: "03",
    label: "GitHub",
    value: "github.com/forkyouabhi",
    href: PROFILE.github,
    external: true,
  },
  {
    index: "04",
    label: "Live Venture",
    value: "spot2go.app",
    href: PROFILE.spot2go,
    external: true,
  },
] as const;

export function ContactColophon() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      aria-labelledby="contact-heading"
      className="relative border-t border-alabaster/10 bg-obsidian-950 pt-20 lg:pt-32"
    >
      {/* Quiet bottom studio illumination */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px]"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 100%, rgba(200,157,92,0.09) 0%, transparent 72%)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        {/* Monumental Closing Statement */}
        <div className="grid grid-cols-1 items-end gap-10 border-b border-alabaster/10 pb-14 lg:grid-cols-12 lg:pb-20">
          <div className="lg:col-span-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brass">
              Act 05 — Correspondence &amp; Colophon
            </p>
            <h2
              id="contact-heading"
              className="mt-4 font-serif text-4xl font-light tracking-[-0.015em] text-alabaster sm:text-6xl lg:text-[76px] leading-[0.98]"
            >
              Let&apos;s build something{" "}
              <span className="italic text-parchment">worth running.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start gap-5 lg:col-span-4 lg:items-end">
            <p className="max-w-sm text-[14px] font-light leading-[1.75] text-slate-ink lg:text-right">
              Open to high-impact engineering, business technology, and data systems
              conversations — or partnerships around Spot2Go.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <MagneticLink
                href={`mailto:${PROFILE.email}`}
                className="group inline-flex items-center gap-2.5 border border-brass/55 bg-brass/10 px-6 py-3.5 font-mono text-[10px] uppercase tracking-[0.26em] text-parchment transition-colors duration-300 hover:border-brass hover:bg-brass/20"
              >
                <span>{PROFILE.email}</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-brass transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </MagneticLink>

              <a
                href={PROFILE.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-alabaster/18 px-5 py-3.5 font-mono text-[10px] uppercase tracking-[0.26em] text-alabaster/85 transition-colors duration-300 hover:border-brass/60 hover:text-parchment"
              >
                <span>Resume PDF</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-brass" />
              </a>
            </div>
          </div>
        </div>

        {/* Hairline Channel Index */}
        <div className="grid grid-cols-1 divide-y divide-alabaster/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {CHANNELS.map((channel) => (
            <a
              key={channel.index}
              href={channel.href}
              target={channel.external ? "_blank" : undefined}
              rel={channel.external ? "noopener noreferrer" : undefined}
              className="group flex flex-col justify-between gap-4 py-7 transition-colors duration-300 sm:px-6 lg:first:pl-0 lg:last:pr-0"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-brass/80">
                  {channel.index} — {channel.label}
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 text-slate-ink transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brass" />
              </div>
              <span className="font-serif text-xl font-normal tracking-wide text-alabaster lining-nums transition-colors group-hover:text-parchment xl:text-[22px]">
                {channel.value}
              </span>
            </a>
          ))}
        </div>

        {/* Bottom Architectural Colophon */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-alabaster/10 py-8 font-mono text-[10px] uppercase tracking-[0.24em] text-slate-ink sm:flex-row sm:items-center">
          <p>
            &copy; {year} {PROFILE.name} · {PROFILE.location}
          </p>
          <p className="text-slate-ink/75">
            Next.js App Router · Tailwind v4 · Motion · WebGL · Lenis
          </p>
        </div>
      </div>
    </footer>
  );
}
