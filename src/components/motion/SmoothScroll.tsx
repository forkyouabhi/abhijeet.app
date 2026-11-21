"use client";

import { useEffect, useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";

function AnchorSync() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest<HTMLAnchorElement>(
        'a[href^="#"]'
      );
      if (!target) return;

      const hash = target.getAttribute("href");
      if (!hash || hash === "#") return;

      const destination = document.querySelector<HTMLElement>(hash);
      if (!destination) return;

      e.preventDefault();
      lenis.scrollTo(destination, {
        offset: -72,
        duration: 1.2,
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [lenis]);

  return null;
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);

    const onChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.2,
        smoothWheel: true,
      }}
    >
      <AnchorSync />
      {children}
    </ReactLenis>
  );
}
