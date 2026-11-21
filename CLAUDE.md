# Project Conventions — abhijeet.app

## Stack
Next.js App Router (`src/app`), Tailwind CSS v4 (`@theme` in `src/app/globals.css`), Motion (`motion/react`), React Three Fiber + Drei, Lenis (`lenis/react`), TypeScript.

## Hard Constraints
- No GSAP unless Motion (`motion/react`) genuinely cannot achieve the effect.
- Only one active `<canvas>` (WebGL context) on screen at a time. Cap R3F `dpr` to `[1, 2]`.
- Never use raw, untextured Three.js primitives (`TorusGeometry`, `OctahedronGeometry`, `BoxGeometry`) as hero/product visuals — use custom GLSL shaders, studio lighting, or editorial media.
- Respect `prefers-reduced-motion` on every animated component with a genuine navigable/legible fallback (including disabling Lenis smooth scroll and pausing WebGL animation).
- Never place `overflow-hidden` or `overflow-x-hidden` on an ancestor of any `position: sticky` scrollytelling container.
- Preload only the next section's assets; dynamically import client-only 3D/canvas scenes with `next/dynamic({ ssr: false })`.
- Prefer existing MagicUI / ReactBits / 21st.dev patterns (`04-UI/`) and handbook references (`09-Prompts/`, `10-Templates/`) over ad-hoc UI boilerplate.
- Follow the 4 Mandatory Gatekeeping Checkpoints (`HARD_CHECKPOINTS.md`): build and visually verify one section at a time.

## Editorial Design System — Architectural Obsidian & Brushed Brass
- Obsidian Background: `#090A0D`
- Elevated Surface: `#111318`
- Primary Ink: `#F4F1EA` (Alabaster)
- Muted Ink: `#8C909B` (Architectural Slate)
- Accent: `#C89D5C` (Brushed Brass) / `#E6D5B8` (Warm Parchment)
- Hairline Rules: `1px` `rgba(244, 241, 234, 0.10)` and `rgba(200, 157, 92, 0.24)`
- Typography: Cormorant Garamond (Editorial Serif Display & Metrics), Inter (Body), JetBrains Mono (`10px–11px` UPPERCASE tracked metadata).
- Banned: SaaS pill badges, glowing neon borders, heavy drop shadows, icon-stuffed bento grids, crowded 3-card feature grids.
