import { motion } from "framer-motion";

const companies = [
  { name: "Diageo", id: "exp-diageo" },
  { name: "FinLync", id: "exp-finlync" },
  { name: "EY", id: "exp-ey" },
  { name: "PwC", id: "exp-pwc" },
  { name: "Accenture", id: "exp-accenture" },
  { name: "Capgemini", id: "exp-capgemini" },
];

const About = () => {
  const scrollToExperience = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.add("ring-2", "ring-accent", "ring-offset-2", "ring-offset-background");
      setTimeout(() => {
        el.classList.remove("ring-2", "ring-accent", "ring-offset-2", "ring-offset-background");
      }, 2000);
    }
  };

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
            Programme Director / Senior SAP Programme Manager with 15+ years leading <span className="text-foreground font-medium">SAP-led business transformation</span> for global organisations, including delivery through <span className="text-foreground font-medium">Diageo</span> and advisory / SI environments across <span className="text-foreground font-medium">EY, PwC, Accenture and Capgemini</span>. Trusted to steer business-critical decisions that shape enterprise operating processes and <span className="text-foreground font-medium">C-suite reporting</span>, and to restore control in high-stakes programmes through disciplined <span className="text-foreground font-medium">governance</span>, clear decision making, and strong system-integrator management to enforce delivery standards.
          </p>
          <p className="text-muted-foreground font-sans leading-relaxed text-lg mt-4">
            Deep end-to-end SAP S/4HANA delivery experience, translating complex functional and technical requirements into predictable execution and measurable outcomes. Experienced across <span className="text-foreground font-medium">agile, waterfall and hybrid</span> models, leading cross-functional teams of up to 25 across multiple geographies while maintaining tight <span className="text-foreground font-medium">financial control</span>, <span className="text-foreground font-medium">risk management</span>, and <span className="text-foreground font-medium">stakeholder alignment</span> from mobilisation through go-live and hypercare. Portfolio includes initiatives up to £3m, spanning targeted change through multi-year transformation.
          </p>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-muted-foreground font-sans text-xs tracking-[0.2em] uppercase mb-4">
            Companies I've Worked With
          </p>
          <div className="flex flex-wrap gap-3">
            {companies.map((company) => (
              <button
                key={company.id}
                onClick={() => scrollToExperience(company.id)}
                className="px-5 py-2.5 border border-border rounded-md font-sans text-sm font-medium text-foreground bg-card hover:border-accent hover:text-accent transition-all duration-300 cursor-pointer"
              >
                {company.name}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
