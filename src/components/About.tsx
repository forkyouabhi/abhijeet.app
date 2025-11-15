import { Card, CardContent } from "@/components/ui/card";
import { Code2, Rocket, Heart } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Developer",
      description: "Building modern web applications with React, TypeScript, and cloud technologies."
    },
    {
      icon: Rocket,
      title: "Founder & Entrepreneur",
      description: "Creating solutions that solve real problems for students and professionals."
    },
    {
      icon: Heart,
      title: "Problem Solver",
      description: "Passionate about building products that make a meaningful impact."
    }
  ];

  return (
    <section className="py-24 px-4 bg-secondary/30" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Developer, founder, and builder of products that connect people with opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index}
                className="border-2 hover:border-accent transition-all duration-300 hover:shadow-soft animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="border-2 shadow-soft">
            <CardContent className="p-8 md:p-12 space-y-4 text-center">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm currently focused on building <span className="text-accent font-semibold">Spot2Go</span>, 
                a platform that helps students and professionals discover and book the perfect spaces 
                for productivity. My goal is to create technology that simplifies everyday challenges 
                and connects communities.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                When I'm not coding, you'll find me exploring new technologies, meeting with users 
                to understand their needs, or working from one of Thunder Bay's many great coffee shops.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
