import { Card, CardContent } from "@/components/ui/card";
import { Code2, Rocket, MapPin, Coffee, Terminal, Flame } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";

const analyticsData = [
  { time: "Q1", efficiency: 45 },
  { time: "Q2", efficiency: 52 },
  { time: "Q3", efficiency: 68 },
  { time: "Q4", efficiency: 89 },
  { time: "Q1", efficiency: 95 },
];

export const About = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, scale: 0.97, y: 16 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", bounce: 0, duration: 0.5 } }
  };

  return (
    <section className="py-20 md:py-24 px-4 relative" id="about">
      <div className="absolute inset-0 bg-background/50 backdrop-blur-3xl -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", bounce: 0, duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            The architect behind the code.
          </p>
        </motion.div>

        {/* BENTO GRID */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-3 md:gap-4 md:auto-rows-[200px]"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Main Bio - Large Tile */}
          <motion.div variants={item} className="md:col-span-4 lg:col-span-8 row-span-2">
            <Card className="h-full border border-white/10 glassmorphism relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary" />
              <CardContent className="h-full flex flex-col justify-center p-6 sm:p-8 lg:p-12">
                <Rocket className="w-8 h-8 md:w-10 md:h-10 text-accent mb-4 md:mb-6" />
                <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Builder & Problem Solver</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  I build things that make operations faster — from the warehouse floor to the enterprise 
                  analytics dashboard. At <span className="text-accent font-semibold">Loblaw</span>, I shipped{" "}
                  <span className="text-accent font-semibold">PrioTool</span>, an internal Python/FastAPI middleware 
                  that replaced brittle PHP scraping with direct Teradata SQL queries. Now at{" "}
                  <span className="text-accent font-semibold">NWMO</span>, I work at the intersection of IT governance, 
                  enterprise platforms, and security policy. I combine real software development experience with 
                  frontline operations context — I don't just build dashboards, I understand what the data means on the ground.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Location / Status - Square Tile */}
          <motion.div variants={item} className="md:col-span-2 lg:col-span-4 row-span-1">
            <Card className="h-full border border-white/10 glassmorphism relative overflow-hidden flex flex-col items-center justify-center p-5 md:p-6 bg-gradient-to-br from-background/80 to-muted/80">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <MapPin className="w-8 h-8 md:w-10 md:h-10 text-primary mb-2 md:mb-3" />
              <h3 className="text-lg md:text-xl font-bold">Greater Toronto Area</h3>
              <p className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                Open to Fall 2026 co-ops
              </p>
            </Card>
          </motion.div>

          {/* Code Stats/Stack - Square Tile */}
          <motion.div variants={item} className="md:col-span-2 lg:col-span-4 row-span-1">
            <Card className="h-full border border-white/10 glassmorphism flex flex-col items-center justify-center p-5 md:p-6 group hover:border-accent/50 transition-colors">
              <Terminal className="w-8 h-8 md:w-10 md:h-10 text-muted-foreground group-hover:text-accent transition-colors mb-3 md:mb-4" />
              <h3 className="text-xl md:text-2xl font-bold font-mono">1M+</h3>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Lines Written</p>
            </Card>
          </motion.div>

          {/* Tools Marquee - Wide Tile */}
          <motion.div variants={item} className="md:col-span-4 lg:col-span-8 row-span-1">
            <Card className="h-full border border-white/10 glassmorphism overflow-hidden relative flex flex-col justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80 z-10 pointer-events-none" />
              <div className="px-6 md:px-8 pb-3 md:pb-4">
                 <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-2">My Arsenal</h3>
              </div>
              
              <div className="relative flex overflow-x-hidden">
                <div className="animate-marquee whitespace-nowrap flex items-center gap-6 md:gap-8 py-2">
                  <span className="text-2xl md:text-3xl font-bold text-accent/40 mx-3 md:mx-4">PYTHON</span>
                  <span className="text-2xl md:text-3xl font-bold text-foreground/20 mx-3 md:mx-4">FASTAPI</span>
                  <span className="text-2xl md:text-3xl font-bold text-foreground/20 mx-3 md:mx-4">SQL</span>
                  <span className="text-2xl md:text-3xl font-bold text-foreground/20 mx-3 md:mx-4">REACT</span>
                  <span className="text-2xl md:text-3xl font-bold text-foreground/20 mx-3 md:mx-4">NEXT.JS</span>
                  <span className="text-2xl md:text-3xl font-bold text-primary/40 mx-3 md:mx-4">TYPESCRIPT</span>
                  <span className="text-2xl md:text-3xl font-bold text-foreground/20 mx-3 md:mx-4">SUPABASE</span>
                  <span className="text-2xl md:text-3xl font-bold text-foreground/20 mx-3 md:mx-4">TAILWIND</span>
                  <span className="text-2xl md:text-3xl font-bold text-accent/40 mx-3 md:mx-4">M365</span>
                </div>
                {/* Duplicate for infinite effect */}
                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-6 md:gap-8 py-2">
                  <span className="text-2xl md:text-3xl font-bold text-accent/40 mx-3 md:mx-4">PYTHON</span>
                  <span className="text-2xl md:text-3xl font-bold text-foreground/20 mx-3 md:mx-4">FASTAPI</span>
                  <span className="text-2xl md:text-3xl font-bold text-foreground/20 mx-3 md:mx-4">SQL</span>
                  <span className="text-2xl md:text-3xl font-bold text-foreground/20 mx-3 md:mx-4">REACT</span>
                  <span className="text-2xl md:text-3xl font-bold text-foreground/20 mx-3 md:mx-4">NEXT.JS</span>
                  <span className="text-2xl md:text-3xl font-bold text-primary/40 mx-3 md:mx-4">TYPESCRIPT</span>
                  <span className="text-2xl md:text-3xl font-bold text-foreground/20 mx-3 md:mx-4">SUPABASE</span>
                  <span className="text-2xl md:text-3xl font-bold text-foreground/20 mx-3 md:mx-4">TAILWIND</span>
                  <span className="text-2xl md:text-3xl font-bold text-accent/40 mx-3 md:mx-4">M365</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Analytics Visual - Square Tile */}
          <motion.div variants={item} className="md:col-span-2 lg:col-span-4 row-span-1">
            <Card className="h-full border border-white/10 glassmorphism p-5 md:p-6 relative overflow-hidden flex flex-col group">
              <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-1">Impact</h3>
              <p className="text-lg md:text-xl font-bold mb-3 md:mb-4">Supply Chain KPI</p>
              
              <div className="flex-1 w-full min-h-[80px] -ml-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={analyticsData}>
                    <defs>
                      <linearGradient id="colorEfficiency" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(25 85% 55%)" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="hsl(25 85% 55%)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'hsl(335 45% 12%)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="efficiency" 
                      stroke="hsl(25 85% 55%)" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorEfficiency)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
