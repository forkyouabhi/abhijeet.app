export interface ExperienceMetric {
  value: string;
  label: string;
}

export interface ExperienceItem {
  id: string;
  index: string;
  role: string;
  company: string;
  shortName: string;
  sector: string;
  location: string;
  period: string;
  type: string;
  current?: boolean;
  summary: string;
  metrics: ExperienceMetric[];
  highlights: string[];
  stack: string[];
  diagramType: "enterprise-it" | "nuclear-ai" | "supply-chain" | "retail-ops" | "ngo-scale" | "web-seo";
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  role: string;
  period: string;
  summary: string;
  architecture: string;
  metrics: ExperienceMetric[];
  highlights: string[];
  stack: string[];
  href?: string;
  hrefLabel?: string;
  isInternal?: boolean;
}

export interface CapabilityGroup {
  index: string;
  category: string;
  description: string;
  items: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  focus: string;
}

export const PROFILE = {
  name: "Abhijeet Singh",
  firstName: "Abhijeet",
  lastName: "Singh",
  monogram: "AS",
  title: "Business Technology & Full-Stack Automation Engineer",
  location: "Greater Toronto Area, ON",
  coordinates: "43.6532° N · 79.3832° W",
  email: "hello@abhijeet.app",
  secondaryEmail: "abhijeetsingh3766@gmail.com",
  resumeUrl: "/resume.pdf",
  github: "https://github.com/forkyouabhi",
  githubHandle: "@forkyouabhi",
  linkedin: "https://www.linkedin.com/in/abhijeet3101/",
  spot2go: "https://spot2go.app",
  heroHeadlineLine1: "Abhijeet",
  heroHeadlineLine2: "Singh",
  heroStatement:
    "I don't wait to be assigned a problem. At NWMO, I automated ticket routing with Zia AI and rebuilt an Intune driver pipeline. At Loblaw, I shipped Python/FastAPI middleware handling 500+ weekly transactions. Both were gaps I found myself — both are still running.",
  heroAffiliations: "PCL CONSTRUCTION · EX-NWMO · EX-LOBLAW",
  heroMetrics: [
    { value: "500+", label: "Weekly Ops Automated · Loblaw" },
    { value: "100+", label: "Workstations Validated · NWMO" },
    { value: "15+", label: "Zero-Trust Field iPads · NWMO" },
  ],
} as const;

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "pcl",
    index: "01",
    role: "Information Technology Student",
    company: "PCL Construction",
    shortName: "PCL Construction",
    sector: "Business Technology · Enterprise Infrastructure",
    location: "Toronto District / Oakville, ON",
    period: "Sep 2026 — Present",
    type: "Co-op",
    current: true,
    diagramType: "enterprise-it",
    summary:
      "Supporting enterprise infrastructure, endpoint lifecycle, and Microsoft Power Platform automation across PCL's Toronto District and Oakville office.",
    metrics: [
      { value: "M365", label: "Intune · Autopilot · Entra ID" },
      { value: "Power", label: "Apps · Automate · Power BI" },
    ],
    highlights: [
      "Supporting hardware lifecycle operations across PCL's Oakville office — workstation provisioning, configuration, equipment audits, and shipment documentation to maintain accurate asset records.",
      "Delivering frontline technical support across Toronto District infrastructure, diagnosing hardware, software, network, account, mobile device, and Microsoft 365 incidents via ServiceNow, Teams, phone, and in-person desks.",
      "Assisting with Microsoft Intune, Autopilot, Entra ID, and enterprise endpoint deployment workflows across the district.",
      "Translating business requirements into lightweight internal tooling, reporting, and workflow automation using Microsoft Power Apps, Power Automate, Power BI, and SharePoint / Microsoft Lists.",
      "Contributing to IT process-improvement initiatives across hardware intake, equipment tracking, user communications, and standardized deployment pipelines.",
    ],
    stack: [
      "ServiceNow",
      "Power Apps",
      "Power Automate",
      "Power BI",
      "Microsoft Intune",
      "Autopilot",
      "Entra ID",
      "SharePoint",
    ],
  },
  {
    id: "nwmo",
    index: "02",
    role: "Information Technology Analyst",
    company: "Nuclear Waste Management Organization (NWMO)",
    shortName: "NWMO",
    sector: "Federally Regulated Nuclear Environment",
    location: "Toronto, ON",
    period: "May 2026 — Aug 2026",
    type: "Co-op",
    diagramType: "nuclear-ai",
    summary:
      "Automated manual ticket routing with Zia AI, engineered zero-trust MDM for field iPads, and re-engineered an enterprise Intune printer deployment pipeline with zero unplanned compliance incidents.",
    metrics: [
      { value: "100+", label: "Workstations Relocated (<1 Wk)" },
      { value: "15+", label: "Zero-Trust Field iPads Locked" },
    ],
    highlights: [
      "Implemented Zia AI predictive routing in ServiceDesk Plus — analyzed historical ticket data, tuned confidence thresholds, and configured fallback rules to automate technician assignment across networking, cybersecurity, and hardware groups.",
      "Re-engineered a failing printer driver deployment pipeline after root cause analysis uncovered a SYSTEM vs. user-context execution gap — rebuilt silent, idempotent Intune deployment using PowerShell, pnputil, and JSON config maps.",
      "Designed a zero-trust mobile architecture for the Site Categorization team using Entra ID and Intune compliance profiles — scoped restrictions with team leads to lock 15+ field iPads to authorized apps only.",
      "Validated 100+ workstations for a 300-person office relocation in under a week while maintaining zero unplanned compliance incidents across 4 concurrent workstreams.",
      "Reduced incident resolution time by 15% with PowerShell/Shell automation and real-time SLA dashboards; consolidated vendor compliance records across 10 vendors.",
    ],
    stack: [
      "Zia AI",
      "ServiceDesk Plus",
      "PowerShell",
      "pnputil",
      "Microsoft Intune",
      "Entra ID",
      "MS Defender",
      "SharePoint",
    ],
  },
  {
    id: "loblaw",
    index: "03",
    role: "Inbound Scheduling Analyst",
    company: "Loblaw Companies Limited",
    shortName: "Loblaw",
    sector: "National Retail Supply Chain",
    location: "Brampton, ON",
    period: "Jan 2026 — Apr 2026",
    type: "Co-op",
    diagramType: "supply-chain",
    summary:
      "Architected and shipped PrioTool — a Python/FastAPI middleware replacing brittle legacy PHP scraping with direct Teradata SQL queries across national distribution centers.",
    metrics: [
      { value: "500+", label: "Weekly Transactions Automated" },
      { value: "85%", label: "Automated Test Coverage" },
    ],
    highlights: [
      "Built PrioTool, a Python/FastAPI middleware replacing legacy PHP scraping with direct Teradata SQL queries and GitHub Actions CI/CD — now supporting 500+ weekly supply chain transactions across 3 distribution centers and saving ~8 hours/week.",
      "Achieved 85% automated test coverage using pytest and REST API integration suites, enabling near-zero deployment risk and continuous zero-downtime releases.",
      "Developed and maintained Teradata and PostgreSQL reporting pipelines surfacing inbound scheduling metrics and data quality discrepancies for executive stakeholders.",
      "Contributed to UAT cycles and internal QA documentation across scheduling systems, validating data integrity within Loblaw's enterprise supply chain compliance framework.",
    ],
    stack: [
      "Python",
      "FastAPI",
      "Teradata SQL",
      "PostgreSQL",
      "pytest",
      "GitHub Actions",
      "Power BI",
    ],
  },
  {
    id: "rcss",
    index: "04",
    role: "Personal Shopper — Fulfillment Operations",
    company: "Real Canadian Superstore (Loblaw)",
    shortName: "Real Canadian Superstore",
    sector: "Frontline Retail Logistics",
    location: "Thunder Bay, ON",
    period: "Sep 2023 — Apr 2026",
    type: "Operations",
    diagramType: "retail-ops",
    summary:
      "Worked the operational floor inside Loblaw's internal retail fulfillment systems — frontline context that directly informed later corporate supply chain analytics and PrioTool.",
    metrics: [
      { value: "95%+", label: "Sustained Order Accuracy" },
      { value: "2.8 yrs", label: "Frontline Operations Context" },
    ],
    highlights: [
      "Sustained 95%+ order accuracy across peak fulfillment periods by coordinating high-throughput workflows in Loblaw's internal retail systems.",
      "Identified and resolved fulfillment bottlenecks during high-volume spikes, improving order completion rates and building first-hand intuition for upstream scheduling constraints.",
      "Delivered high-trust stakeholder and customer support in a fast-moving environment — directly carrying over to frontline Business Technology roles.",
    ],
    stack: ["Retail Fulfillment Systems", "Workflow Optimization", "Operations"],
  },
  {
    id: "prshni",
    index: "05",
    role: "Co-Founder & Full-Stack Developer",
    company: "Prshni Organisation",
    shortName: "Prshni Organisation",
    sector: "Civic Tech & Environmental NGO",
    location: "New Delhi, India",
    period: "Jul 2020 — Aug 2023",
    type: "Founder",
    diagramType: "ngo-scale",
    summary:
      "Co-founded and scaled a youth-led environmental NGO from zero to multi-city operations over three years, shipping Python and Node.js automation services that reclaimed 40+ hours per month.",
    metrics: [
      { value: "40+ hrs", label: "Monthly Manual Work Reclaimed" },
      { value: "3+ yrs", label: "0 → Multi-City Scale" },
    ],
    highlights: [
      "Scaled a youth-led environmental organization from inception to multi-city operations by leading technology architecture, branding, and organizational strategy.",
      "Reclaimed 40+ hours/month of manual data-entry overhead by shipping Python and Node.js automation services adopted as standard internal tooling.",
      "Designed the full web presence, brand identity, and organic growth strategy across Meta and Google while securing government and NGO partnerships.",
      "Built and mentored a core volunteer team in a resource-constrained, high-ownership environment.",
    ],
    stack: ["Python", "Node.js", "Web Architecture", "Brand & Growth", "Leadership"],
  },
  {
    id: "stech",
    index: "06",
    role: "Web Developer",
    company: "Stech Waterproofing Co.",
    shortName: "Stech Waterproofing",
    sector: "Commercial Web & SEO",
    location: "New Delhi, India",
    period: "Jan 2019 — Jun 2020",
    type: "Contract",
    diagramType: "web-seo",
    summary:
      "Designed, engineered, and deployed a responsive commercial web presence with technical on-page SEO and managed hosting.",
    metrics: [
      { value: "1.5 yrs", label: "End-to-End Web & Hosting" },
      { value: "SEO", label: "Organic Search Architecture" },
    ],
    highlights: [
      "Designed and delivered a responsive commercial website prioritizing cross-device usability and fast load performance.",
      "Implemented structured on-page and technical SEO to expand organic discoverability for a regional contractor.",
      "Managed server configuration, DNS, and hosting reliability end to end.",
    ],
    stack: ["HTML/CSS", "JavaScript", "Technical SEO", "Hosting"],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "priotool",
    index: "01",
    title: "PrioTool",
    subtitle: "Enterprise Supply Chain Middleware · Loblaw",
    role: "Architect & Lead Developer",
    period: "2026",
    summary:
      "Internal Python & FastAPI middleware engineered for Loblaw's Supply Chain Analytics team — replacing brittle PHP scraping with direct Teradata SQL execution and automated CI/CD releases.",
    architecture:
      "PrioTool acts as a low-latency data bridge between national distribution centre schedules and analytics consumers. It translates scheduling prioritization rules into parameterized Teradata SQL queries served through FastAPI, verified by an 85% pytest + REST integration test suite on GitHub Actions.",
    metrics: [
      { value: "500+", label: "Weekly Transactions Automated" },
      { value: "~8 hrs", label: "Analyst Time Saved Weekly" },
      { value: "85%", label: "Automated Test Coverage" },
    ],
    highlights: [
      "Replaced brittle DOM/PHP scraping with direct Teradata SQL pipelines across 3 distribution centres.",
      "Built automated CI/CD pipeline with GitHub Actions and pytest integration testing.",
      "Reduced prioritization report turnaround from hours of manual reconciliation to seconds.",
    ],
    stack: ["Python", "FastAPI", "Teradata SQL", "pytest", "GitHub Actions"],
    isInternal: true,
  },
  {
    id: "spot2go",
    index: "02",
    title: "Spot2Go",
    subtitle: "Live Full-Stack AI Booking Platform",
    role: "Founder & Lead Developer",
    period: "Sep 2025 — Present",
    summary:
      "Production booking platform serving real users in Thunder Bay — connecting students and professionals with cafés, libraries, and co-working spaces using agentic AI workflows, PostgreSQL, and Azure.",
    architecture:
      "Full-stack Next.js and TypeScript platform backed by PostgreSQL with Row Level Security, real-time availability subscriptions, Dockerized services, GitHub Actions CI/CD, and agentic AI workflows automating core booking operations.",
    metrics: [
      { value: "Live", label: "In Production · Thunder Bay" },
      { value: "AI", label: "Agentic Booking Workflows" },
      { value: "CI/CD", label: "Docker · GitHub Actions · Azure" },
    ],
    highlights: [
      "Shipped end-to-end production system spanning database schema, auth, real-time availability, and responsive UI.",
      "Integrated agentic AI workflows to automate core venue discovery and booking operations.",
      "Automated testing and continuous deployment pipelines via Docker, GitHub Actions, and Azure.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "Azure",
      "GitHub Actions",
    ],
    href: "https://spot2go.app",
    hrefLabel: "Visit spot2go.app",
  },
  {
    id: "phonesense",
    index: "03",
    title: "PhoneSense",
    subtitle: "Automated Device Anomaly Data Pipeline",
    role: "Data & Systems Engineer",
    period: "2025",
    summary:
      "Scheduled Python, pandas, and SQL data pipeline engineered to ingest, normalize, and anomaly-score 50,000+ device telemetry records with automated operational metrics reporting.",
    architecture:
      "Modular ETL architecture orchestrated with scheduled Shell scripts: raw device telemetry is normalized in pandas, scored against statistical anomaly thresholds, persisted to SQL tables, and distilled into automated operational health summaries.",
    metrics: [
      { value: "50,000+", label: "Device Records Processed" },
      { value: "Auto", label: "Scheduled Shell Orchestration" },
      { value: "ETL", label: "Python · pandas · SQL" },
    ],
    highlights: [
      "Processed and anomaly-scored 50,000+ device telemetry records reliably through a repeatable ETL workflow.",
      "Automated pipeline scheduling and metrics reporting using Shell scripting and structured SQL views.",
      "Designed modular scoring logic to isolate anomalous device behavior cleanly for downstream review.",
    ],
    stack: ["Python", "SQL", "pandas", "Shell Scripting", "Anomaly Detection"],
    href: "https://github.com/forkyouabhi",
    hrefLabel: "Explore on GitHub",
  },
  {
    id: "intune-driver-pipeline",
    index: "04",
    title: "Zero-Touch Driver Pipeline",
    subtitle: "Idempotent Enterprise Intune Deployment · NWMO",
    role: "Systems Automation Engineer",
    period: "2026",
    summary:
      "Re-engineered a failing enterprise Xerox C8070 printer driver rollout after root cause analysis revealed a SYSTEM vs. user-context execution gap — rebuilt with PowerShell, pnputil, and JSON config maps.",
    architecture:
      "Decoupled driver staging from user-session execution by packaging signed INF drivers with declarative JSON configuration maps and idempotent PowerShell scripts executing via pnputil inside Microsoft Intune Win32 deployment contexts.",
    metrics: [
      { value: "Silent", label: "Zero-Touch Intune Rollout" },
      { value: "100%", label: "Idempotent Execution" },
      { value: "RCA", label: "SYSTEM Context Fix" },
    ],
    highlights: [
      "Diagnosed root cause of silent deployment failures across SYSTEM vs. user-session contexts.",
      "Engineered declarative JSON config maps driving PowerShell + pnputil silent installation and verification.",
      "Published deployment pattern on GitHub alongside enterprise Microsoft Intune packaging.",
    ],
    stack: ["PowerShell", "pnputil", "JSON", "Microsoft Intune", "Windows Internals"],
    href: "https://github.com/forkyouabhi/-Xerox-C8070_Deployment",
    hrefLabel: "View Repository",
  },
];

export const CAPABILITIES: CapabilityGroup[] = [
  {
    index: "01",
    category: "Languages & Scripting",
    description: "Production backends, systems programming, and enterprise automation.",
    items: ["Python", "TypeScript", "JavaScript", "C++", "C#", "SQL", "PowerShell", "Bash"],
  },
  {
    index: "02",
    category: "Application & API Engineering",
    description: "Full-stack platforms, high-throughput REST APIs, and automated testing.",
    items: ["Next.js", "React", "FastAPI", "Node.js", "MERN Stack", "pandas", "pytest"],
  },
  {
    index: "03",
    category: "Data, Cloud & Delivery",
    description: "Warehouse analytics, anomaly pipelines, and continuous deployment.",
    items: [
      "PostgreSQL",
      "Teradata",
      "MySQL",
      "MongoDB",
      "Data Science",
      "Azure",
      "Docker",
      "GitHub Actions",
      "Power BI",
    ],
  },
  {
    index: "04",
    category: "Business Technology & Zero-Trust IT",
    description: "AI ticket routing, Intune MDM architecture, and Microsoft Power Platform.",
    items: [
      "Microsoft Intune",
      "Autopilot",
      "Entra ID",
      "Power Apps",
      "Power Automate",
      "ServiceNow",
      "ServiceDesk Plus (Zia AI)",
      "MS Defender",
      "SharePoint",
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Full Stack Web Development (MERN Stack)",
    issuer: "Certification",
    focus: "MongoDB · Express · React · Node.js",
  },
  {
    title: "Introduction to Programming Using Python",
    issuer: "Certification",
    focus: "Core Python · Scripting · Automation",
  },
  {
    title: "Beyond Chat: A Quick Guide to Copilot Cowork in Microsoft 365",
    issuer: "Microsoft 365 AI",
    focus: "Enterprise AI Workflows · Copilot",
  },
];

export const EDUCATION = {
  degree: "Honours BSc in Computer Science",
  focus: "Business Focus · Co-op Program",
  institution: "Lakehead University",
  location: "Thunder Bay, ON",
  period: "Sep 2023 — May 2028",
  distinction: "Dean's List 2025–26",
  coursework: [
    "Software Engineering",
    "Data Structures & Algorithms (C/C++)",
    "Assembly Language & Operating Systems",
    "Systems Analysis & Design",
    "Object-Oriented Programming",
    "Mobile Computing",
  ],
  honors: [
    {
      title: "Dean's List — Academic Excellence",
      organization: "Lakehead University",
      period: "2025 — 2026",
      detail: "Recognized for top academic standing in Honours Computer Science with Business.",
    },
    {
      title: "2nd Place — Lakehead CS Club Hackathon",
      organization: "12 Competing Teams",
      period: "April 2025",
      detail:
        "Designed, engineered, and shipped a full-stack Python & React application in 24 hours.",
    },
  ],
} as const;
