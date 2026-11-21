"use client";

export default function Template({ children }: { children: React.ReactNode }) {
  // Keep SSR first paint immediately visible (never hide root tree at opacity: 0)
  return <>{children}</>;
}
