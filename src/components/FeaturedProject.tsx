import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ArrowRight,
  MapPin,
  Zap,
  Terminal,
  ExternalLink,
  Lock,
  Activity,
  Database,
  Server
} from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  role: string;
  description: string;
  details: string[];
  techStack: string[];
  link?: string;
  linkLabel?: string;
  icon: React.ReactNode;
  accentColor: string;
  isInternal?: boolean;
  architectureDetails?: {
    overview: string;
    metrics: string[];
  };
}

const projects: Project[] = [
  {
    title: "PrioTool",
    role: "Developer — Internal Middleware",
    description:
      "An internal middleware that replaced legacy manual PHP scraping workflows with direct Teradata SQL queries, automating supply chain prioritization at enterprise scale.",
    details: [
      "Replaced fragile PHP web-scraping with direct Teradata SQL connections for reliable data extraction",
      "Built with Python and FastAPI for high-performance REST API endpoints",
      "Automated supply chain prioritization logic that previously required hours of manual analyst work",
      "Deployed as internal tooling serving the Supply Chain Analytics team",
    ],
    techStack: ["Python", "FastAPI", "Teradata SQL", "Automation"],
    icon: <Terminal className="w-10 h-10" />,
    accentColor: "from-primary/20 to-accent/10",
    isInternal: true,
    architectureDetails: {
      overview: "PrioTool acts as a high-speed data bridge. It intercepts legacy PHP scraping requests, translates them into optimized Teradata SQL queries, and streams the results back to the analytics frontend via a FastAPI REST interface.",
      metrics: [
        "Eliminated 99% of manual data entry errors",
        "Reduced report generation time from hours to seconds",
        "Direct Teradata integration bypassed brittle DOM scraping"
      ]
    }
  },
  {
    title: "Spot2Go",
    role: "Founder & Lead Developer",
    description:
      "A live full-stack booking platform connecting students and professionals with the best cafés, libraries, and co-working spaces for productive work sessions.",
    details: [
      "End-to-end development: database design, API, authentication, and responsive UI",
      "Real-time booking system with availability management and user profiles",
      "Built a scalable architecture using Supabase for auth, database, and storage",
      "Actively serving users in Thunder Bay with plans to expand",
    ],
    techStack: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    link: "https://spot2go.app",
    linkLabel: "Visit Spot2Go",
    icon: <MapPin className="w-10 h-10" />,
    accentColor: "from-accent/20 to-primary/10",
    architectureDetails: {
      overview: "A modern JAMstack application utilizing React for a reactive client interface, powered by Supabase's Postgres database with Row Level Security (RLS) and real-time WebSocket subscriptions for live booking status.",
      metrics: [
        "Fully serverless architecture for infinite scaling",
        "Optimized React query caching for instant UI updates",
        "Secure OAuth and Row Level Security implementation"
      ]
    }
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const FeaturedProject = () => {
  return (
    <section className="py-24 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground">
            Enterprise tools & live platforms
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={item}>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="h-full cursor-pointer group">
                    <SpotlightCard className="h-full group-hover:border-accent/50 group-hover:shadow-glow transition-all duration-500">
                      <div className="p-0 flex flex-col h-full">
                        {/* Visual header */}
                        <div
                          className={`relative h-48 bg-gradient-to-br ${project.accentColor} flex items-center justify-center p-8 overflow-hidden`}
                        >
                          <div className="absolute -right-8 -top-8 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
                          <div className="absolute -left-8 -bottom-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />

                          <div className="text-center space-y-3 relative z-10">
                            <div className="text-accent group-hover:scale-110 transition-transform duration-500">
                              {project.icon}
                            </div>
                            <h3 className="text-3xl font-bold">{project.title}</h3>
                            {project.isInternal && (
                              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-background/60 backdrop-blur-sm rounded-full text-xs font-medium text-muted-foreground">
                                <Lock className="w-3 h-3" />
                                Internal Tool
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 md:p-8 flex flex-col flex-1 space-y-5">
                          <div>
                            <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-3">
                              {project.role}
                            </div>
                            <p className="text-muted-foreground leading-relaxed line-clamp-3">
                              {project.description}
                            </p>
                          </div>

                          <div className="flex-1" />

                          <div className="flex items-center text-sm font-semibold text-accent group-hover:translate-x-2 transition-transform">
                            View Architecture Details
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </div>
                        </div>
                      </div>
                    </SpotlightCard>
                  </div>
                </DialogTrigger>

                <DialogContent className="max-w-2xl bg-background/95 backdrop-blur-2xl border-white/10 glassmorphism p-0 overflow-hidden">
                  <div className={`h-32 bg-gradient-to-br ${project.accentColor} flex items-center p-8 relative overflow-hidden`}>
                     <div className="absolute -right-8 -top-8 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
                     <div className="relative z-10 flex items-center gap-4">
                        <div className="p-4 bg-background/50 backdrop-blur-md rounded-2xl border border-white/10 text-accent">
                          {project.icon}
                        </div>
                        <div>
                          <DialogTitle className="text-3xl font-bold">{project.title}</DialogTitle>
                          <DialogDescription className="text-foreground/80 font-medium">
                            {project.role}
                          </DialogDescription>
                        </div>
                     </div>
                  </div>
                  
                  <div className="p-8 space-y-8">
                    <div className="space-y-4">
                      <h4 className="text-sm font-bold tracking-widest text-muted-foreground uppercase flex items-center gap-2">
                        <Database className="w-4 h-4" /> 
                        System Architecture
                      </h4>
                      <p className="text-lg leading-relaxed text-foreground/90">
                        {project.architectureDetails?.overview}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold tracking-widest text-muted-foreground uppercase flex items-center gap-2">
                          <Activity className="w-4 h-4" />
                          Key Metrics
                        </h4>
                        <ul className="space-y-3">
                          {project.architectureDetails?.metrics.map((metric, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Zap className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                              {metric}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold tracking-widest text-muted-foreground uppercase flex items-center gap-2">
                          <Server className="w-4 h-4" />
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-semibold border border-border"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {project.link ? (
                      <Button variant="accent" className="w-full group" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          {project.linkLabel}
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    ) : (
                      <div className="flex items-center justify-center gap-2 py-4 bg-muted/50 rounded-lg text-sm text-muted-foreground font-medium border border-dashed border-border">
                        <Lock className="w-4 h-4" />
                        Internal Enterprise Tooling — Source Code Restricted
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/forkyouabhi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors font-medium group"
          >
            <ExternalLink className="w-4 h-4" />
            View more on GitHub
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
