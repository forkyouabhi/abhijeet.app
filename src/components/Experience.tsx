import { Card, CardContent } from "@/components/ui/card";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { motion } from "framer-motion";

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  shortName: string;
  location: string;
  period: string;
  type: string;
  current: boolean;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: "nwmo",
    title: "Information Technology Analyst",
    company: "Nuclear Waste Management Organization (NWMO)",
    shortName: "NWMO",
    location: "Toronto, ON",
    period: "May 2026 — Present",
    type: "Co-op",
    current: true,
    achievements: [
      "Accelerating first-line IT Help Desk resolution by triaging and escalating support tickets across NWMO's Toronto office, reducing response friction for 100+ staff during ERP transition period.",
      "Supporting Microsoft 365 and SharePoint platform enhancements for enterprise-wide adoption, improving collaboration infrastructure for a cross-functional workforce managing Canada's nuclear fuel portfolio.",
      "Contributing to MS Defender configuration and security hardening initiatives, strengthening endpoint protection across NWMO's hybrid work environment.",
      "Drafting and revising IT governance policy instruments across Technology, Information Security, and Compliance domains — supporting NWMO's regulatory obligations as a federally mandated not-for-profit.",
      "Assisting ERP implementation workstreams by documenting requirements, testing workflows, and coordinating with IT stakeholders to ensure on-schedule delivery.",
    ],
  },
  {
    id: "loblaw",
    title: "Inbound Scheduling Analyst",
    company: "Loblaw Companies Limited",
    shortName: "Loblaw",
    location: "Brampton, ON",
    period: "Jan 2026 — Apr 2026",
    type: "Co-op",
    current: false,
    achievements: [
      "Analysed and optimised inbound scheduling workflows for Canada's largest retailer, supporting high-volume logistics operations across a national distribution network.",
      "Developed and maintained SQL-based reporting pipelines to surface scheduling metrics, enabling data-driven decisions for cross-functional supply chain stakeholders.",
      "Built an internal middleware tool (PrioTool) using Python and FastAPI to automate supply chain prioritisation data retrieval, replacing legacy manual PHP scraping with direct Teradata SQL queries.",
      "Contributed to UAT cycles and internal QA documentation, validating data integrity across scheduling systems and ensuring operational accuracy.",
      "Partnered with senior analytics managers to maintain data governance standards and support BI reporting within a fast-paced enterprise environment.",
      "Operated within enterprise compliance frameworks while collaborating across Supply Chain Analytics, Replenishment, and IT teams.",
    ],
  },
  {
    id: "prshni",
    title: "Co-Founder",
    company: "Prshni Organisation",
    shortName: "Prshni",
    location: "New Delhi, India",
    period: "Jul 2020 — Aug 2023",
    type: "Founder",
    current: false,
    achievements: [
      "Scaled a youth-led environmental NGO from 0 to multi-city operations over 3 years by leading technology, branding, and organizational strategy from inception.",
      "Drove digital growth by designing the organization's full web presence, brand identity, and social media strategy across Meta and Google — building audience from scratch.",
      "Secured government and NGO partnerships through stakeholder engagement, demonstrating cross-sector collaboration at an early stage.",
      "Built and mentored a core volunteer team, developing leadership and project management skills in a resource-constrained, agile environment.",
    ],
  },
  {
    id: "stech",
    title: "Web Developer",
    company: "Stech Waterproofing Co.",
    shortName: "Stech",
    location: "New Delhi, India",
    period: "Jan 2019 — Jun 2020",
    type: "Contract",
    current: false,
    achievements: [
      "Designed and delivered a responsive company website with a focus on UX principles and cross-device compatibility.",
      "Implemented on-page and technical SEO strategies, improving search visibility and organic discoverability for the business.",
      "Managed server configuration and hosting environment, ensuring reliable uptime and site performance.",
    ],
  },
];

export const Experience = () => {
  const [activeTab, setActiveTab] = useState(experiences[0].id);

  return (
    <section className="py-24 px-4" id="experience">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground">
            Enterprise IT, supply chain analytics & beyond
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="flex flex-col md:flex-row gap-6 lg:gap-10"
            orientation="vertical"
          >
            <div className="w-full md:w-72 shrink-0 overflow-x-auto md:overflow-visible">
              <TabsList className="flex md:flex-col h-auto bg-transparent p-0 justify-start w-full border-b md:border-b-0 md:border-l-2 rounded-none space-x-2 md:space-x-0 overflow-x-auto pb-px md:pb-0">
                {experiences.map((exp) => (
                  <TabsTrigger
                    key={exp.id}
                    value={exp.id}
                    className="md:w-full justify-start rounded-none border-b-2 md:border-b-0 md:border-l-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-primary/5 data-[state=active]:shadow-none data-[state=active]:text-primary text-left px-4 py-3 hover:bg-muted/50 transition-colors whitespace-nowrap md:whitespace-normal"
                  >
                    <div className="flex flex-col items-start gap-0.5">
                      <span className="font-semibold">{exp.shortName}</span>
                      <span className="text-xs text-muted-foreground hidden md:block">
                        {exp.period}
                      </span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <div className="flex-1 min-w-0">
              {experiences.map((exp) => (
                <TabsContent
                  key={exp.id}
                  value={exp.id}
                  className="mt-0 focus-visible:ring-0 focus-visible:outline-none animate-in fade-in-50 slide-in-from-bottom-2 duration-300"
                >
                  <SpotlightCard className="hover:border-accent/50 transition-colors">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                        <div className="flex-1">
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-accent/10 rounded-lg shrink-0 mt-1 hidden sm:block">
                              <Briefcase className="w-5 h-5 text-accent" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold leading-tight mb-1">
                                {exp.title}
                              </h3>
                              <p className="text-lg text-primary font-semibold hidden md:block">
                                {exp.company}
                              </p>
                              <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
                                <MapPin className="w-3.5 h-3.5" />
                                {exp.location}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex flex-wrap gap-2 mt-1">
                            <span
                              className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                                exp.current
                                  ? "bg-accent/10 text-accent"
                                  : "bg-secondary text-secondary-foreground"
                              }`}
                            >
                              {exp.type}
                            </span>
                            {exp.current && (
                              <span className="px-2.5 py-0.5 bg-accent text-accent-foreground rounded-full text-xs font-semibold">
                                Current
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-3 md:ml-12 mt-4">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-muted-foreground flex items-start gap-3 leading-relaxed"
                          >
                            <span className="text-accent mt-1.5 shrink-0 text-lg leading-none">
                              •
                            </span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </SpotlightCard>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};
