import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";

export const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@abhijeet.app",
      href: "mailto:hello@abhijeet.app",
      color: "text-accent"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "@forkyouabhi",
      href: "https://github.com/forkyouabhi",
      color: "text-foreground"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/abhijeet3101",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-24 px-4" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground">
            Have a project in mind or want to chat? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card 
                key={index}
                className="border-2 hover:border-accent transition-all duration-300 hover:shadow-soft group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 mx-auto bg-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-6 h-6 ${method.color}`} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{method.title}</p>
                    <a 
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold hover:text-accent transition-colors block truncate"
                    >
                      {method.value}
                    </a>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="border-2 bg-gradient-to-br from-primary/5 to-accent/5 shadow-soft">
          <CardContent className="p-8 md:p-12 text-center space-y-6">
            <h3 className="text-2xl font-bold">
              Interested in Spot2Go?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're looking to partner, invest, or just want to learn more about 
              what we're building, I'd love to connect.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="accent" size="lg" asChild>
                <a href="mailto:hello@abhijeet.app">
                  Send Me an Email
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://spot2go.app" target="_blank" rel="noopener noreferrer">
                  Visit Spot2Go
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
