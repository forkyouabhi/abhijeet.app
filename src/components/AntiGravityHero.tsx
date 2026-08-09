import { useEffect, useRef, useCallback, useState } from "react";
import Matter from "matter-js";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, ChevronDown, Briefcase, Trophy, Rocket } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

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

// Spring transition presets (Apple §4)
const springSmooth = { type: "spring" as const, bounce: 0, duration: 0.6 };
const springSnappy = { type: "spring" as const, bounce: 0, duration: 0.4 };

// Floating geometric shapes config
const FLOATING_SHAPES = [
  // Rings
  { type: "ring", size: 120, x: "15%", y: "20%", delay: 0, parallaxFactor: 40, opacity: 0.08, rotation: 15 },
  { type: "ring", size: 80, x: "78%", y: "35%", delay: 2, parallaxFactor: 25, opacity: 0.06, rotation: -30 },
  { type: "ring", size: 200, x: "85%", y: "75%", delay: 4, parallaxFactor: 50, opacity: 0.05, rotation: 45 },
  // Squares
  { type: "square", size: 40, x: "10%", y: "65%", delay: 1, parallaxFactor: 30, opacity: 0.07, rotation: 45 },
  { type: "square", size: 24, x: "70%", y: "15%", delay: 3, parallaxFactor: 20, opacity: 0.06, rotation: 20 },
  { type: "square", size: 56, x: "50%", y: "80%", delay: 5, parallaxFactor: 35, opacity: 0.05, rotation: 60 },
  // Dots
  { type: "dot", size: 8, x: "25%", y: "40%", delay: 0.5, parallaxFactor: 15, opacity: 0.12, rotation: 0 },
  { type: "dot", size: 6, x: "60%", y: "25%", delay: 1.5, parallaxFactor: 10, opacity: 0.10, rotation: 0 },
  { type: "dot", size: 10, x: "40%", y: "70%", delay: 2.5, parallaxFactor: 18, opacity: 0.08, rotation: 0 },
  { type: "dot", size: 5, x: "88%", y: "55%", delay: 3.5, parallaxFactor: 12, opacity: 0.10, rotation: 0 },
  { type: "dot", size: 7, x: "8%", y: "85%", delay: 4.5, parallaxFactor: 14, opacity: 0.09, rotation: 0 },
  // Lines
  { type: "line", size: 80, x: "30%", y: "15%", delay: 1, parallaxFactor: 22, opacity: 0.06, rotation: -25 },
  { type: "line", size: 60, x: "65%", y: "60%", delay: 3, parallaxFactor: 28, opacity: 0.05, rotation: 40 },
  { type: "line", size: 100, x: "20%", y: "50%", delay: 5, parallaxFactor: 32, opacity: 0.04, rotation: 70 },
  // Crosses
  { type: "cross", size: 20, x: "45%", y: "12%", delay: 0, parallaxFactor: 16, opacity: 0.08, rotation: 15 },
  { type: "cross", size: 16, x: "75%", y: "50%", delay: 2, parallaxFactor: 20, opacity: 0.07, rotation: 30 },
  { type: "cross", size: 14, x: "35%", y: "88%", delay: 4, parallaxFactor: 14, opacity: 0.06, rotation: -20 },
];

const ShapeRenderer = ({ type, size, opacity }: { type: string; size: number; opacity: number }) => {
  const accentColor = `hsl(25 85% 55% / ${opacity})`;
  const primaryColor = `hsl(335 65% 35% / ${opacity})`;
  const color = Math.random() > 0.5 ? accentColor : primaryColor;

  switch (type) {
    case "ring":
      return (
        <div
          style={{
            width: size, height: size,
            border: `1.5px solid ${color}`,
            borderRadius: "50%",
          }}
        />
      );
    case "square":
      return (
        <div
          style={{
            width: size, height: size,
            border: `1px solid ${color}`,
            borderRadius: size * 0.15,
          }}
        />
      );
    case "dot":
      return (
        <div
          style={{
            width: size, height: size,
            backgroundColor: color,
            borderRadius: "50%",
          }}
        />
      );
    case "line":
      return (
        <div
          style={{
            width: size, height: 1.5,
            backgroundColor: color,
            borderRadius: 1,
          }}
        />
      );
    case "cross":
      return (
        <div style={{ width: size, height: size, position: "relative" }}>
          <div style={{ position: "absolute", top: "50%", left: 0, width: "100%", height: 1.5, backgroundColor: color, transform: "translateY(-50%)", borderRadius: 1 }} />
          <div style={{ position: "absolute", left: "50%", top: 0, width: 1.5, height: "100%", backgroundColor: color, transform: "translateX(-50%)", borderRadius: 1 }} />
        </div>
      );
    default:
      return null;
  }
};

export const AntiGravityHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const badgeElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const badgeBodiesRef = useRef<Matter.Body[]>([]);
  const wallsRef = useRef<Matter.Body[]>([]);
  const animFrameRef = useRef<number>(0);
  const mousePos = useRef<{ x: number; y: number } | null>(null);

  // Mouse parallax — raw motion values → smoothed springs
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20, mass: 0.5 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20, mass: 0.5 });

  // Parallax transforms at different depths
  const orbX1 = useTransform(smoothX, [-1, 1], [-40, 40]);
  const orbY1 = useTransform(smoothY, [-1, 1], [-40, 40]);
  const orbX2 = useTransform(smoothX, [-1, 1], [30, -30]);
  const orbY2 = useTransform(smoothY, [-1, 1], [30, -30]);
  const orbX3 = useTransform(smoothX, [-1, 1], [-20, 20]);
  const orbY3 = useTransform(smoothY, [-1, 1], [-20, 20]);

  // Grid parallax (subtle)
  const gridX = useTransform(smoothX, [-1, 1], [-8, 8]);
  const gridY = useTransform(smoothY, [-1, 1], [-8, 8]);

  // Track mouse position normalized to [-1, 1]
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth - 0.5) * 2);
      mouseY.set((e.clientY / innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

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
    <section ref={sectionRef} className="min-h-screen relative overflow-hidden" id="hero">

      {/* === LAYER 0: Animated dot grid with parallax === */}
      <motion.div
        className="absolute inset-0 z-0 hero-grid opacity-[0.06]"
        style={{ x: gridX, y: gridY }}
      />

      {/* === LAYER 0.5: Floating geometric shapes with individual parallax === */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {FLOATING_SHAPES.map((shape, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: shape.x,
              top: shape.y,
              x: useTransform(smoothX, [-1, 1], [-shape.parallaxFactor, shape.parallaxFactor]),
              y: useTransform(smoothY, [-1, 1], [-shape.parallaxFactor, shape.parallaxFactor]),
            }}
            initial={{ opacity: 0, scale: 0.5, rotate: shape.rotation }}
            animate={{
              opacity: shape.opacity,
              scale: 1,
              rotate: [shape.rotation, shape.rotation + 360],
            }}
            transition={{
              opacity: { duration: 1, delay: shape.delay * 0.15 },
              scale: { type: "spring", bounce: 0, duration: 1, delay: shape.delay * 0.15 },
              rotate: { duration: 60 + shape.delay * 10, repeat: Infinity, ease: "linear" },
            }}
          >
            <ShapeRenderer type={shape.type} size={shape.size} opacity={1} />
          </motion.div>
        ))}
      </div>

      {/* === LAYER 1: Glowing gradient orbs with parallax === */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-accent/15 blur-[120px] -top-40 -left-40 animate-orb-1"
          style={{ x: orbX1, y: orbY1 }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] -bottom-32 -right-32 animate-orb-2"
          style={{ x: orbX2, y: orbY2 }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full bg-accent/10 blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orb-3"
          style={{ x: orbX3, y: orbY3 }}
        />
        {/* Extra subtle accent wash */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-accent/8 blur-[100px] top-1/4 right-1/4"
          style={{
            x: useTransform(smoothX, [-1, 1], [20, -20]),
            y: useTransform(smoothY, [-1, 1], [15, -15]),
          }}
        />
      </div>

      {/* === LAYER 1.5: Animated grid lines === */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden opacity-[0.04]">
        <motion.div
          className="absolute top-[30%] left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent 0%, hsl(25 85% 55%) 50%, transparent 100%)",
            x: useTransform(smoothX, [-1, 1], [-30, 30]),
          }}
        />
        <motion.div
          className="absolute top-[70%] left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent 0%, hsl(335 65% 35%) 50%, transparent 100%)",
            x: useTransform(smoothX, [-1, 1], [20, -20]),
          }}
        />
        <motion.div
          className="absolute left-[25%] top-0 bottom-0 w-px"
          style={{
            background: "linear-gradient(180deg, transparent 0%, hsl(25 85% 55%) 50%, transparent 100%)",
            y: useTransform(smoothY, [-1, 1], [-25, 25]),
          }}
        />
        <motion.div
          className="absolute left-[75%] top-0 bottom-0 w-px"
          style={{
            background: "linear-gradient(180deg, transparent 0%, hsl(335 65% 35%) 50%, transparent 100%)",
            y: useTransform(smoothY, [-1, 1], [15, -15]),
          }}
        />
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
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-24 md:py-20 pointer-events-none">
        <div className="max-w-5xl mx-auto text-center space-y-6 md:space-y-8 bg-background/20 backdrop-blur-[8px] p-6 md:p-16 rounded-3xl border border-white/5 shadow-2xl">

          {/* Name */}
          <div className="space-y-3 md:space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springSmooth }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight drop-shadow-xl text-foreground"
            >
              Abhijeet <span className="text-accent">Singh</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springSmooth, delay: 0.1 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/90 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md"
            >
              I build things that make operations faster. From the warehouse
              floor to the enterprise analytics dashboard.
            </motion.p>
          </div>

          {/* Achievement stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...springSnappy, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-10 pt-2 md:pt-4"
          >
            {[
              { icon: Briefcase, value: "4+", label: "Enterprise Roles" },
              { icon: Rocket, value: "PrioTool", label: "Shipped @ Loblaw" },
              { icon: Trophy, value: "2×", label: "Hackathon Placements" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3 text-left">
                <div className="p-2 rounded-lg bg-accent/20 border border-accent/30 shadow-inner">
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent drop-shadow-md" />
                </div>
                <div>
                  <p className="text-sm sm:text-base md:text-lg font-bold leading-none text-foreground drop-shadow-md">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-foreground/80 mt-1 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springSmooth, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2 pointer-events-auto"
          >
            <Button size="lg" variant="accent" className="group active:scale-95 transition-transform" asChild>
              <a href="#projects">
                View My Work
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="glassmorphism hover:bg-white/10 active:scale-95 transition-transform" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...springSmooth, delay: 0.5 }}
            className="flex items-center justify-center gap-3 sm:gap-4 pt-2 md:pt-4 pointer-events-auto"
          >
            <a href="https://github.com/forkyouabhi" target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 active:scale-90 hover:scale-105">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/abhijeet3101" target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 active:scale-90 hover:scale-105">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:hello@abhijeet.app"
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 active:scale-90 hover:scale-105">
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* === LAYER 4: Terminal snippet (bottom-right) === */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ...springSmooth, delay: 0.8 }}
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
                transition={{ duration: 0.3, delay: 1.2 + i * 0.15 }}
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
              transition={{ duration: 1, repeat: Infinity, delay: 3 }}
              className="inline-block w-2 h-4 bg-accent/80 ml-0.5"
            />
          </div>
        </div>
      </motion.div>

      {/* === LAYER 5: Scroll indicator === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 pointer-events-auto"
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
