import { useEffect, useRef, useCallback } from "react";
import Matter from "matter-js";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, ChevronDown, Briefcase, Trophy, Rocket } from "lucide-react";
import { motion } from "framer-motion";

interface BadgeConfig {
  label: string;
  color: string;
  textColor: string;
  width: number;
  height: number;
}

const BADGES: BadgeConfig[] = [
  { label: "Python", color: "hsl(210, 60%, 50%)", textColor: "#fff", width: 110, height: 44 },
  { label: "FastAPI", color: "hsl(160, 70%, 40%)", textColor: "#fff", width: 120, height: 44 },
  { label: "SQL", color: "hsl(35, 85%, 50%)", textColor: "#fff", width: 80, height: 44 },
  { label: "React", color: "hsl(195, 80%, 45%)", textColor: "#fff", width: 100, height: 44 },
  { label: "Next.js", color: "hsl(0, 0%, 15%)", textColor: "#fff", width: 110, height: 44 },
  { label: "TypeScript", color: "hsl(210, 65%, 45%)", textColor: "#fff", width: 135, height: 44 },
  { label: "PrioTool", color: "hsl(335, 65%, 35%)", textColor: "#fff", width: 120, height: 44 },
  { label: "Spot2Go", color: "hsl(25, 85%, 55%)", textColor: "#fff", width: 115, height: 44 },
  { label: "Supabase", color: "hsl(153, 60%, 40%)", textColor: "#fff", width: 125, height: 44 },
  { label: "M365", color: "hsl(0, 75%, 45%)", textColor: "#fff", width: 90, height: 44 },
];

const TERMINAL_LINES = [
  "$ whoami",
  "abhijeet — IT Analyst @ NWMO",
  "$ cat shipped.log",
  "✓ PrioTool — Python/FastAPI middleware",
  "✓ Spot2Go — Full-stack booking platform",
  "$ echo $STACK",
  "Python · FastAPI · SQL · React · Next.js",
  "$ status --current",
  "→ Open to Fall 2026 co-ops",
];

export const AntiGravityHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const badgeBodiesRef = useRef<Matter.Body[]>([]);
  const wallsRef = useRef<Matter.Body[]>([]);
  const animFrameRef = useRef<number>(0);
  const mousePos = useRef<{ x: number; y: number } | null>(null);

  const createWalls = useCallback((width: number, height: number) => {
    const t = 60;
    return [
      Matter.Bodies.rectangle(width / 2, -t / 2, width + t * 2, t, { isStatic: true, restitution: 0.8 }),
      Matter.Bodies.rectangle(width / 2, height + t / 2, width + t * 2, t, { isStatic: true, restitution: 0.8 }),
      Matter.Bodies.rectangle(-t / 2, height / 2, t, height + t * 2, { isStatic: true, restitution: 0.8 }),
      Matter.Bodies.rectangle(width + t / 2, height / 2, t, height + t * 2, { isStatic: true, restitution: 0.8 }),
    ];
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.offsetWidth;
    const height = container.offsetHeight;

    const engine = Matter.Engine.create({
      gravity: { x: 0, y: 0, scale: 0.001 },
    });
    engineRef.current = engine;

    const bodies = BADGES.map((badge) => {
      const x = Math.random() * (width - badge.width - 120) + 60 + badge.width / 2;
      const y = Math.random() * (height - badge.height - 120) + 60 + badge.height / 2;

      const body = Matter.Bodies.rectangle(x, y, badge.width, badge.height, {
        restitution: 0.9,
        friction: 0.05,
        frictionAir: 0.015,
        chamfer: { radius: 12 },
        density: 0.002,
      });

      Matter.Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 2.5,
        y: (Math.random() - 0.5) * 2.5,
      });
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.03);
      return body;
    });
    badgeBodiesRef.current = bodies;

    const walls = createWalls(width, height);
    wallsRef.current = walls;
    Matter.Composite.add(engine.world, [...bodies, ...walls]);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mousePos.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const handleMouseLeave = () => { mousePos.current = null; };

    container.addEventListener("mousemove", handleMouseMove, { passive: true });
    container.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    const runner = Matter.Runner.create();
    runnerRef.current = runner;
    Matter.Runner.run(runner, engine);

    const syncDOM = () => {
      const mp = mousePos.current;
      for (let i = 0; i < badgeBodiesRef.current.length; i++) {
        const body = badgeBodiesRef.current[i];
        const el = badgeElementsRef.current[i];
        if (!el) continue;

        if (mp) {
          const dx = body.position.x - mp.x;
          const dy = body.position.y - mp.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150 && dist > 1) {
            const force = 0.0004 * ((150 - dist) / 150);
            Matter.Body.applyForce(body, body.position, {
              x: (dx / dist) * force,
              y: (dy / dist) * force,
            });
          }
        } else {
          // Auto-float: apply tiny random forces to keep them moving if they slow down
          if (body.speed < 0.5) {
            Matter.Body.applyForce(body, body.position, {
              x: (Math.random() - 0.5) * 0.0005,
              y: (Math.random() - 0.5) * 0.0005,
            });
          }
        }

        el.style.transform = `translate(${body.position.x - BADGES[i].width / 2}px, ${body.position.y - BADGES[i].height / 2}px) rotate(${body.angle}rad)`;
      }
      animFrameRef.current = requestAnimationFrame(syncDOM);
    };

    requestAnimationFrame(() => {
      badgeElementsRef.current.forEach((el) => {
        if (el) el.style.opacity = "1";
      });
    });
    animFrameRef.current = requestAnimationFrame(syncDOM);

    const handleResize = () => {
      if (!containerRef.current || !engineRef.current) return;
      const w = containerRef.current.offsetWidth;
      const h = containerRef.current.offsetHeight;
      if (wallsRef.current.length > 0) {
        Matter.Composite.remove(engineRef.current.world, wallsRef.current);
      }
      const newWalls = createWalls(w, h);
      wallsRef.current = newWalls;
      Matter.Composite.add(engineRef.current.world, newWalls);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animFrameRef.current);
      if (runnerRef.current) Matter.Runner.stop(runnerRef.current);
      if (engineRef.current) {
        Matter.World.clear(engineRef.current.world, false);
        Matter.Engine.clear(engineRef.current);
      }
    };
  }, [createWalls]);

  return (
    <section className="min-h-screen relative overflow-hidden" id="hero">

      {/* === LAYER 0: Animated dot grid background === */}
      <div className="absolute inset-0 z-0 hero-grid opacity-[0.04]" />

      {/* === LAYER 1: Glowing gradient orbs === */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-accent/15 blur-[120px] -top-40 -left-40 animate-orb-1" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] -bottom-32 -right-32 animate-orb-2" />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-accent/10 blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orb-3" />
      </div>

      {/* === LAYER 2: Physics badges === */}
      <div
        ref={containerRef}
        className="absolute inset-0 z-[2] pointer-events-auto"
      >
        {BADGES.map((badge, i) => (
          <div
            key={badge.label}
            ref={(el) => { badgeElementsRef.current[i] = el; }}
            style={{
              position: "absolute",
              left: 0, top: 0,
              width: badge.width, height: badge.height,
              backgroundColor: badge.color, color: badge.textColor,
              opacity: 0, transition: "opacity 0.8s ease",
              borderRadius: "12px",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 700, fontSize: "14px", letterSpacing: "0.02em",
              pointerEvents: "none", userSelect: "none",
              boxShadow: `0 4px 24px -4px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.15), 0 0 20px -8px ${badge.color}`,
              border: "1px solid rgba(255,255,255,0.12)",
              willChange: "transform",
              backdropFilter: "blur(4px)",
            }}
          >
            {badge.label}
          </div>
        ))}
      </div>

      {/* === LAYER 3: Main content overlay === */}
          <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20 pointer-events-none">
        <div className="max-w-5xl mx-auto text-center space-y-8 bg-background/20 backdrop-blur-[8px] p-8 md:p-16 rounded-3xl border border-white/5 shadow-2xl">

          {/* Name */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight drop-shadow-xl text-foreground"
            >
              Abhijeet <span className="text-accent">Singh</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl lg:text-2xl text-foreground/90 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md"
            >
              I build things that make operations faster. From the warehouse
              floor to the enterprise analytics dashboard.
            </motion.p>
          </div>

          {/* Achievement stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10 pt-4"
          >
            {[
              { icon: Briefcase, value: "4+", label: "Enterprise Roles" },
              { icon: Rocket, value: "PrioTool", label: "Shipped @ Loblaw" },
              { icon: Trophy, value: "2×", label: "Hackathon Placements" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3 text-left">
                <div className="p-2 rounded-lg bg-accent/20 border border-accent/30 shadow-inner">
                  <stat.icon className="w-5 h-5 text-accent drop-shadow-md" />
                </div>
                <div>
                  <p className="text-base md:text-lg font-bold leading-none text-foreground drop-shadow-md">{stat.value}</p>
                  <p className="text-sm text-foreground/80 mt-1 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2 pointer-events-auto"
          >
            <Button size="lg" variant="accent" className="group" asChild>
              <a href="#projects">
                View My Work
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="glassmorphism hover:bg-white/10" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex items-center justify-center gap-4 pt-4 pointer-events-auto"
          >
            <a href="https://github.com/forkyouabhi" target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 hover:scale-110">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/abhijeet3101" target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 hover:scale-110">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:hello@abhijeet.app"
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 hover:scale-110">
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* === LAYER 4: Terminal snippet (bottom-right) === */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-20 right-6 z-10 hidden lg:block pointer-events-none"
      >
        <div className="w-80 rounded-xl border border-white/10 bg-background/70 backdrop-blur-xl shadow-2xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10 bg-white/5">
            <div className="w-3 h-3 rounded-full bg-red-400/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <div className="w-3 h-3 rounded-full bg-green-400/80" />
            <span className="ml-2 text-xs text-muted-foreground font-mono">abhijeet@portfolio</span>
          </div>
          <div className="p-4 font-mono text-xs space-y-1">
            {TERMINAL_LINES.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.5 + i * 0.2 }}
                className={
                  line.startsWith("$")
                    ? "text-accent font-semibold"
                    : line.startsWith("✓")
                    ? "text-green-400/90 pl-2"
                    : line.startsWith("→")
                    ? "text-primary pl-2"
                    : "text-muted-foreground pl-2"
                }
              >
                {line}
              </motion.p>
            ))}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity, delay: 3.5 }}
              className="inline-block w-2 h-4 bg-accent/80 ml-0.5"
            />
          </div>
        </div>
      </motion.div>

      {/* === LAYER 5: Scroll indicator === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 pointer-events-auto"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors group">
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 z-[3] pointer-events-none bg-gradient-to-b from-background/30 via-transparent to-background/90" />
      <div className="absolute inset-0 z-[3] pointer-events-none bg-gradient-to-r from-background/40 via-transparent to-background/40" />
    </section>
  );
};
