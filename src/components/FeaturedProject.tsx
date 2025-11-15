import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MapPin, Calendar, Users } from "lucide-react";

export const FeaturedProject = () => {
  return (
    <section className="py-24 px-4" id="project">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Project
          </h2>
          <p className="text-xl text-muted-foreground">
            Currently building and scaling
          </p>
        </div>

        <Card className="overflow-hidden shadow-soft hover:shadow-glow transition-all duration-500 border-2">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center p-12">
                <div className="text-center space-y-4">
                  <MapPin className="w-20 h-20 mx-auto text-accent" />
                  <h3 className="text-3xl font-bold">Spot2Go</h3>
                  <p className="text-sm text-muted-foreground">Find Your Perfect Study Spot</p>
                </div>
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                <div>
                  <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
                    Founder & Lead Developer
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Spot2Go</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    A platform connecting students and professionals with the best cafés, libraries, 
                    and co-working spaces. Solving the problem of finding productive work environments 
                    in Thunder Bay and beyond.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 py-4 border-y border-border">
                  <div className="text-center">
                    <Calendar className="w-5 h-5 mx-auto mb-2 text-accent" />
                    <p className="text-sm text-muted-foreground">2024-Present</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-5 h-5 mx-auto mb-2 text-accent" />
                    <p className="text-sm text-muted-foreground">Startup</p>
                  </div>
                  <div className="text-center">
                    <MapPin className="w-5 h-5 mx-auto mb-2 text-accent" />
                    <p className="text-sm text-muted-foreground">Thunder Bay</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "TypeScript", "Supabase", "Tailwind CSS"].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button variant="accent" size="lg" asChild className="w-full md:w-auto">
                  <a href="https://spot2go.app" target="_blank" rel="noopener noreferrer">
                    Visit Spot2Go
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
