import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { InteractiveBackground } from "@/components/InteractiveBackground";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 animate-fade-in relative overflow-hidden">
      <InteractiveBackground />
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-gradient">Abhijeet</span>
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
            Founder & Developer
          </p>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Building innovative solutions that connect people with spaces. Currently founding{" "}
          <a 
            href="https://spot2go.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent font-semibold hover:underline inline-flex items-center gap-1"
          >
            Spot2Go
            <ArrowRight className="w-4 h-4" />
          </a>
          {" "}— helping students and professionals find their perfect study spot.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
          <Button size="lg" variant="accent" asChild>
            <a href="https://spot2go.app" target="_blank" rel="noopener noreferrer">
              Visit Spot2Go
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">
              Get in Touch
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4 pt-8">
          <a 
            href="https://github.com/forkyouabhi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-lg hover:bg-secondary transition-all duration-300 hover:scale-110"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com/in/abhijeet" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-lg hover:bg-secondary transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:hello@abhijeet.app"
            className="p-3 rounded-lg hover:bg-secondary transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
