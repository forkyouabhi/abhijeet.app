import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "EcoThread",
      description: "Built during a 36-hour Google DSC hackathon, developed a MERN stack MVP supporting 500+ concurrent users with scalable REST API achieving <200ms avg response time.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Cloudinary", "Passport.js"],
      highlights: [
        "99.8% uptime during testing",
        "Integrated Cloudinary for compressed image uploads (<2s)",
        "Multi-role auth with Passport.js and JWT"
      ],
      date: "Nov. 2023"
    },
    {
      title: "Business Card Android App",
      description: "Developed functional Android business card app with full backup and restore functionality, collaborating with peers to design features and test for seamless UX.",
      technologies: ["Android", "Kotlin", "BackupManager"],
      highlights: [
        "Full backup and restore functionality",
        "Seamless UX across devices",
        "Collaborative design process"
      ],
      date: "Jan. 2025 - May 2025"
    }
  ];

  return (
    <section className="py-24 px-4 bg-secondary/30" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Other Projects
          </h2>
          <p className="text-xl text-muted-foreground">
            Side projects and hackathon builds
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-accent transition-all duration-300 hover:shadow-soft animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 md:p-8 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg mt-1">
                      <Code2 className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.date}</p>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold mb-2">Key Highlights</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
