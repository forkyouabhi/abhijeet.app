import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export const Education = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30" id="education">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education
          </h2>
          <p className="text-xl text-muted-foreground">
            Academic background and achievements
          </p>
        </div>

        <Card className="border-2 shadow-soft max-w-4xl mx-auto">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl flex items-center justify-center">
                  <GraduationCap className="w-10 h-10 text-accent" />
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Honours Bachelor of Science in Computer Science
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-1">
                    Lakehead University
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Focused in Business (Co-Op Program)
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 py-4 border-y border-border">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-accent flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold">Expected</p>
                      <p className="text-sm text-muted-foreground">May 2027</p>
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
                  <h4 className="font-semibold mb-3 text-lg">Notable Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: "Mobile Computing", grade: "A" },
                      { name: "Web Design", grade: "A" },
                      { name: "Assembly Lang & Op Sys", grade: "A+" },
                      { name: "Data Structures", grade: "A" }
                    ].map((course, index) => (
                      <div 
                        key={index}
                        className="px-4 py-2 bg-secondary rounded-lg border border-border"
                      >
                        <span className="font-medium">{course.name}</span>
                        <span className="ml-2 text-accent font-bold">({course.grade})</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-lg border border-accent/20">
                    <Award className="w-5 h-5" />
                    <span className="font-semibold">2nd Place - Lakehead CS Club Hackathon (April 2025)</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
