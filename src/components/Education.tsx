import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { motion } from "framer-motion";

export const Education = () => {
  return (
    <section className="py-20 md:py-24 px-4 bg-secondary/30" id="education">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", bounce: 0, duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            Education
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Academic background and achievements
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 0.1 }}
        >
          <Card className="border-2 shadow-soft max-w-4xl mx-auto">
            <CardContent className="p-6 sm:p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-accent" />
                  </div>
                </div>

                <div className="flex-1 space-y-5 md:space-y-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                      Honours Bachelor of Science in Computer Science
                    </h3>
                    <p className="text-base md:text-lg text-primary font-semibold mb-1">
                      Lakehead University
                    </p>
                    <p className="text-muted-foreground mb-4 text-sm md:text-base">
                      Focused in Business (Co-Op Program)
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 py-4 border-y border-border">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-accent flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold">Expected</p>
                        <p className="text-sm text-muted-foreground">May 2028</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold">Location</p>
                        <p className="text-sm text-muted-foreground">Thunder Bay, ON</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-accent flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold">GPA</p>
                        <p className="text-sm text-muted-foreground">3.0/4.0</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-base md:text-lg">Notable Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: "Mobile Computing", grade: "A" },
                        { name: "Web Design", grade: "A" },
                        { name: "Assembly Lang & Op Sys", grade: "A+" },
                        { name: "Data Structures", grade: "A" }
                      ].map((course, index) => (
                        <div 
                          key={index}
                          className="px-3 md:px-4 py-1.5 md:py-2 bg-secondary rounded-lg border border-border text-sm"
                        >
                          <span className="font-medium">{course.name}</span>
                          <span className="ml-2 text-accent font-bold">({course.grade})</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 md:pt-4">
                    <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-accent/10 text-accent rounded-lg border border-accent/20 text-sm md:text-base">
                      <Award className="w-4 h-4 md:w-5 md:h-5" />
                      <span className="font-semibold">2nd Place - Lakehead CS Club Hackathon (April 2025)</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
