import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0, duration: 0.45 } },
};

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
    <section className="py-20 md:py-24 px-4" id="contact">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", bounce: 0, duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            Let's Connect
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Have a project in mind or want to chat? I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div key={index} variants={item}>
                <Card 
                  className="border-2 hover:border-accent transition-all duration-300 hover:shadow-soft group active:scale-[0.98] transform-gpu"
                >
                  <CardContent className="p-3 sm:p-5 md:p-6 flex items-center gap-3 sm:flex-col sm:text-center sm:space-y-3 sm:gap-0">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 shrink-0 sm:mx-auto bg-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`w-5 h-5 md:w-6 md:h-6 ${method.color}`} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-muted-foreground">{method.title}</p>
                      <a 
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold hover:text-accent transition-colors block truncate text-sm md:text-base"
                      >
                        {method.value}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 0.15 }}
        >
          <Card className="border-2 bg-gradient-to-br from-primary/5 to-accent/5 shadow-soft">
            <CardContent className="p-6 sm:p-8 md:p-12 text-center space-y-5 md:space-y-6">
              <h3 className="text-xl md:text-2xl font-bold">
                Interested in Spot2Go?
              </h3>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Whether you're looking to partner, invest, or just want to learn more about 
                what we're building, I'd love to connect.
              </p>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                <Button variant="accent" size="lg" className="active:scale-95 transition-transform" asChild>
                  <a href="mailto:hello@abhijeet.app">
                    Send Me an Email
                    <Mail className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="active:scale-95 transition-transform" asChild>
                  <a href="https://spot2go.app" target="_blank" rel="noopener noreferrer">
                    Visit Spot2Go
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
