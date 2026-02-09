import { motion } from "framer-motion";

const experiences = [
  {
    period: "Sep 2024 – Jan 2026",
    company: "Diageo",
    title: "SAP Programme Manager",
    description:
      "Delivering end-to-end brownfield project moving from SAP ECC to SAP S/4 HANA Private Cloud.",
    highlights: [
      "Led SI partners SNP and IBM to deliver 3 successful E2E trial migrations",
      "Managed 14 direct reports across Data Migration and Data Validation",
      "Achieved 95% data accuracy across three successful trial migrations",
      "Led tooling and resource budgetary decisions",
    ],
  },
  {
    period: "Nov 2022 – Jun 2024",
    company: "FinLync",
    title: "EMEA Lead Project Manager",
    description:
      "Onboarding five Fortune 500 clients and delivering SAP S/4HANA Treasury functionality.",
    highlights: [
      "Key point of contact for project board on multiple SAP deliveries",
      "End-to-end delivery of Treasury solutions at Siemens and European clients",
      "Responsible for budgeting, estimation, and project change requests",
    ],
  },
  {
    period: "May 2021 – May 2022",
    company: "EY",
    title: "Senior Delivery Manager",
    description:
      "Global SAP S/4 HANA Public Cloud greenfield template for Landis+Gyr with Capgemini.",
    highlights: [
      "Delivering end-to-end finance design across pilot countries",
      "Established PMO Governance for accurate weekly/monthly reporting",
      "Release approach and workshop scheduling across 10+ countries",
    ],
  },
  {
    period: "Aug 2019 – Feb 2021",
    company: "PwC",
    title: "Senior Delivery Lead",
    description:
      "Greenfield SAP S/4HANA Private Cloud implementation at Heineken across 20 European countries.",
    highlights: [
      "Managing a team of 18 resources (PwC and client counterparts)",
      "Planned resources and budget for multiple releases (2-year stage plan)",
      "Defined agile methodologies and ways of working",
    ],
  },
  {
    period: "Mar 2014 – Jul 2019",
    company: "Accenture",
    title: "Finance Delivery Lead",
    description:
      "Delivering process standardisation for Compass Group, Dyson, Dixons Carphone, Imperial Brands, and BP.",
    highlights: [
      "Managing a team of 19 individuals across finance transformation",
      "Defined business processes across Procure to Pay, Order to Cash, Record to Report",
      "Change management practices with offshore and onshore teams",
    ],
  },
  {
    period: "Dec 2009 – Feb 2014",
    company: "Capgemini",
    title: "Senior SAP Consultant",
    description:
      "Various onsite SAP Finance and Management Accounting roles across pan-European accounts.",
    highlights: [
      "Operating model analysis and client workshops",
      "System design, build, testing, and end-user training",
      "Deployments in Netherlands, Finland, Germany, and Hungary",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-3">Career</p>
          <h2 className="section-heading mb-4">Professional Experience</h2>
          <div className="gold-line mb-10" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                className="relative pl-12 md:pl-16"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Dot */}
                <div className="absolute left-2.5 md:left-4.5 top-1 w-3 h-3 rounded-full bg-accent border-2 border-background" />

                <div className="card-elevated">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                    <span className="text-accent font-sans text-xs tracking-wider uppercase font-medium">
                      {exp.period}
                    </span>
                    <span className="text-muted-foreground text-xs">•</span>
                    <span className="text-foreground font-sans font-semibold text-sm">{exp.company}</span>
                  </div>
                  <h3 className="text-foreground font-serif text-xl font-semibold mb-2">{exp.title}</h3>
                  <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-3">
                    {exp.description}
                  </p>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-muted-foreground font-sans text-sm">
                        <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
