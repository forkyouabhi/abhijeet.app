"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { PROFILE } from "@/data/portfolio";
import { MOTION_EASE } from "@/lib/constants";

const NAV_ITEMS = [
  { index: "01", label: "Experience", href: "#experience" },
  { index: "02", label: "Systems", href: "#systems" },
  { index: "03", label: "Craft", href: "#craft" },
  { index: "04", label: "Contact", href: "#contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "border-b border-alabaster/10 bg-obsidian-950/82 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-20"
      >
        {/* Brand Identity */}
        <a
          href="#hero"
          className="group flex items-center gap-3.5 focus-visible:outline-none"
        >
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-alabaster transition-colors group-hover:text-parchment">
            {PROFILE.name}
          </span>
          <span className="hidden h-3 w-px bg-alabaster/15 sm:inline-block" />
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.24em] text-slate-ink sm:inline-block">
            {PROFILE.location}
          </span>
        </a>

        {/* Desktop Editorial Index */}
        <div className="hidden items-center gap-9 md:flex">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group inline-flex items-baseline gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-ink transition-colors duration-300 hover:text-alabaster"
                >
                  <span className="text-[9px] text-brass/75 transition-colors group-hover:text-brass">
                    {item.index}
                  </span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href={PROFILE.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 border border-brass/35 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.24em] text-parchment transition-colors duration-300 hover:border-brass hover:bg-brass/10"
          >
            <span>Resume</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-brass transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex h-10 w-10 items-center justify-center border border-alabaster/15 text-alabaster transition-colors hover:border-brass/50 md:hidden"
        >
          {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: MOTION_EASE }}
            className="border-b border-alabaster/10 bg-obsidian-950/96 px-6 pb-8 pt-4 backdrop-blur-xl md:hidden"
          >
            <ul className="divide-y divide-alabaster/10">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between py-4 font-mono text-xs uppercase tracking-[0.24em] text-alabaster"
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] text-brass">{item.index}</span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-5 flex w-full items-center justify-between border border-brass/35 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.24em] text-parchment"
            >
              <span>Download Resume PDF</span>
              <ArrowUpRight className="h-4 w-4 text-brass" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
