import { motion } from "framer-motion";
import diageoLogo from "@/assets/logos/diageo.png";
import finlyncLogo from "@/assets/logos/finlync.png";
import eyLogo from "@/assets/logos/ey.png";
import pwcLogo from "@/assets/logos/pwc.png";
import accentureLogo from "@/assets/logos/accenture.png";
import capgeminiLogo from "@/assets/logos/capgemini.png";

const companies = [
  { name: "Diageo", id: "exp-diageo", logo: diageoLogo },
  { name: "FinLync", id: "exp-finlync", logo: finlyncLogo },
  { name: "EY", id: "exp-ey", logo: eyLogo },
  { name: "PwC", id: "exp-pwc", logo: pwcLogo },
  { name: "Accenture", id: "exp-accenture", logo: accentureLogo },
  { name: "Capgemini", id: "exp-capgemini", logo: capgeminiLogo },
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
                className="flex items-center gap-2.5 px-5 py-2.5 border border-border rounded-md font-sans text-sm font-medium text-foreground bg-card hover:border-accent hover:text-accent transition-all duration-300 cursor-pointer"
              >
                <img src={company.logo} alt={company.name} className="w-5 h-5 object-contain rounded-sm" />
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
