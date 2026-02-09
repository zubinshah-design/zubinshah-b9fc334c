import { motion } from "framer-motion";

const skills = [
  "Hands-on Project Management (Waterfall, Agile, Hybrid)",
  "Project Management Governance & Delivery",
  "SAP S/4 HANA (Public Cloud, Private Cloud, On-Premise)",
  "Complex Finance Transformation led by SAP",
  "SAP Data Governance",
  "Stakeholder Engagement & C-Suite Communication",
  "Shared Services (Finance & Management Reporting)",
  "Target Operating Model Design",
  "Leading Cross-Country Teams",
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-3">Expertise</p>
          <h2 className="section-heading mb-4">Core Skills</h2>
          <div className="gold-line mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="card-elevated flex items-start gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
              <span className="text-foreground font-sans text-sm">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
