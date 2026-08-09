import { Card, CardContent } from "@/components/ui/card";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

// Spring transition matching Apple's critically damped defaults
const springContent = { type: "spring" as const, bounce: 0, duration: 0.4 };

export const Experience = () => {
  const [activeTab, setActiveTab] = useState(experiences[0].id);

  const activeExperience = experiences.find(e => e.id === activeTab);

  return (
    <section className="py-20 md:py-24 px-4" id="experience">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", bounce: 0, duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">Experience</h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Enterprise IT, supply chain analytics & beyond
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", bounce: 0, duration: 0.5, delay: 0.1 }}
        >
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10"
            orientation="vertical"
          >
            <div className="w-full md:w-72 shrink-0 overflow-x-auto md:overflow-visible">
              <TabsList className="flex md:flex-col h-auto bg-transparent p-0 justify-start w-full border-b md:border-b-0 md:border-l-2 rounded-none space-x-1.5 md:space-x-0 overflow-x-auto pb-px md:pb-0">
                {experiences.map((exp) => (
                  <TabsTrigger
                    key={exp.id}
                    value={exp.id}
                    className="md:w-full justify-start rounded-none border-b-2 md:border-b-0 md:border-l-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-primary/5 data-[state=active]:shadow-none data-[state=active]:text-primary text-left px-3 md:px-4 py-2.5 md:py-3 hover:bg-muted/50 active:scale-[0.98] transition-all whitespace-nowrap md:whitespace-normal"
                  >
                    <div className="flex flex-col items-start gap-0.5">
                      <span className="font-semibold text-sm md:text-base">{exp.shortName}</span>
                      <span className="text-xs text-muted-foreground hidden md:block">
                        {exp.period}
                      </span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                {activeExperience && (
                  <TabsContent
                    key={activeExperience.id}
                    value={activeExperience.id}
                    forceMount
                    className="mt-0 focus-visible:ring-0 focus-visible:outline-none"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={springContent}
                    >
                      <SpotlightCard className="hover:border-accent/50 transition-colors">
                        <CardContent className="p-5 md:p-6 lg:p-8">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4 mb-5 md:mb-6">
                            <div className="flex-1">
                              <div className="flex items-start gap-3">
                                <div className="p-2 bg-accent/10 rounded-lg shrink-0 mt-1 hidden sm:block">
                                  <Briefcase className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                  <h3 className="text-xl md:text-2xl font-bold leading-tight mb-1">
                                    {activeExperience.title}
                                  </h3>
                                  <p className="text-base md:text-lg text-primary font-semibold hidden md:block">
                                    {activeExperience.company}
                                  </p>
                                  <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
                                    <MapPin className="w-3.5 h-3.5" />
                                    {activeExperience.location}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                              <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                                <Calendar className="w-4 h-4" />
                                {activeExperience.period}
                              </div>
                              <div className="flex flex-wrap gap-2 mt-1">
                                <span
                                  className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                                    activeExperience.current
                                      ? "bg-accent/10 text-accent"
                                      : "bg-secondary text-secondary-foreground"
                                  }`}
                                >
                                  {activeExperience.type}
                                </span>
                                {activeExperience.current && (
                                  <span className="px-2.5 py-0.5 bg-accent text-accent-foreground rounded-full text-xs font-semibold">
                                    Current
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          <ul className="space-y-2.5 md:space-y-3 md:ml-12 mt-3 md:mt-4">
                            {activeExperience.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ ...springContent, delay: i * 0.04 }}
                                className="text-muted-foreground flex items-start gap-2.5 md:gap-3 leading-relaxed text-sm md:text-base"
                              >
                                <span className="text-accent mt-1 shrink-0 text-lg leading-none">
                                  •
                                </span>
                                <span>{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </CardContent>
                      </SpotlightCard>
                    </motion.div>
                  </TabsContent>
                )}
              </AnimatePresence>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};
