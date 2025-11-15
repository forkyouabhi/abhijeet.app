import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Personal Shopper",
      company: "Loblaw Companies Limited",
      location: "Thunder Bay, ON",
      period: "Sept. 2023 – Present",
      type: "Part-Time",
      current: true,
      achievements: [
        "Coordinated with cross-functional teams to streamline fulfillment, ensuring 95%+ accuracy and timely delivery",
        "Monitored workflows and identified process gaps to reduce order delays and improve customer satisfaction",
        "Built transferable skills in data tracking, communication, and collaboration"
      ]
    },
    {
      title: "Full-Stack Web Developer / Digital Strategist",
      company: "Prshni Organisation",
      location: "Haryana, India",
      period: "May 2021 – Mar. 2023",
      type: "Full-Time",
      current: false,
      achievements: [
        "Designed and deployed responsive website; boosted mobile traffic by 40%, reduced bounce rates by 25%",
        "Developed modular backend services with PHP/MySQL; automated 1,200+ monthly updates, cut support tickets by 38%",
        "Configured and optimized hosting on Linux/Nginx; achieved 99.9% uptime",
        "Implemented SEO strategies; increased organic traffic by 35% and grew social media engagement by 60%"
      ]
    },
    {
      title: "Full-Stack Web Developer / Digital Consultant",
      company: "Stech Waterproofing Co.",
      location: "New Delhi, India",
      period: "Jan. 2020 – Jun. 2022",
      type: "Full-Time",
      current: false,
      achievements: [
        "Launched optimized corporate website; increased inquiries by 45% and reduced load time by 35%",
        "Designed relational schemas in MySQL; streamlined workflows, reduced manual reporting by 50+ hours/month",
        "Applied SEO strategies; boosted organic traffic by 60% within six months",
        "Refined campaign targeting; improved ROI by 22% and engagement by 50%"
      ]
    }
  ];

  return (
    <section className="py-24 px-4" id="experience">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground">
            My professional journey and key contributions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-accent transition-all duration-300 hover:shadow-soft animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="p-2 bg-accent/10 rounded-lg mt-1">
                        <Briefcase className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-lg text-primary font-semibold">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        exp.current 
                          ? 'bg-accent text-accent-foreground' 
                          : 'bg-secondary text-secondary-foreground'
                      }`}>
                        {exp.type}
                      </span>
                      {exp.current && (
                        <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-semibold">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 ml-11">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
