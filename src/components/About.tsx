import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-3">About</p>
          <h2 className="section-heading mb-4">Professional Summary</h2>
          <div className="gold-line mb-8" />
          <p className="text-muted-foreground font-sans leading-relaxed text-lg">
            As an experienced SAP Project/Programme Manager, I bring over 15 years of leadership in delivering
            complex SAP-led business transformation programmes. I have partnered with global organisations
            through top-tier companies including <span className="text-foreground font-medium">Diageo, EY, PwC, Accenture, and Capgemini</span>,
            advising clients on critical, long-term decisions that shape enterprise-wide business processes
            and C-suite reporting.
          </p>
          <p className="text-muted-foreground font-sans leading-relaxed text-lg mt-4">
            My expertise lies in leading end-to-end SAP S/4HANA transformation programmes, navigating
            high-stakes delivery environments with confidence and precision. I have successfully operated
            across agile, waterfall, and hybrid delivery models, leading cross-functional teams of up to
            25 resources across multiple geographies.
          </p>
          <p className="text-muted-foreground font-sans leading-relaxed text-lg mt-4">
            My portfolio spans multiple industries and delivery scales, from targeted change initiatives
            to large-scale, multi-year transformation programmes with budgets of up to £2.5mn.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
