import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";

const certifications = [
  "PRINCE2 Foundation",
  "Professional Scrum Master",
  "ITIL V3 Foundation",
  "SAP Finance",
  "SAP Controlling",
  "SAP Rise (in progress)",
  "SAP Grow (in progress)",
];

const industries = [
  "Consumer Goods / FMCG",
  "Retail",
  "Manufacturing",
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-3">Credentials</p>
          <h2 className="section-heading mb-4">Certifications & Education</h2>
          <div className="gold-line mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="card-elevated"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Award size={20} className="text-accent" />
              </div>
              <h3 className="text-foreground font-serif text-xl font-semibold">Certifications</h3>
            </div>
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-center gap-3 text-muted-foreground font-sans text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {cert}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              className="card-elevated"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <GraduationCap size={20} className="text-accent" />
                </div>
                <h3 className="text-foreground font-serif text-xl font-semibold">Education</h3>
              </div>
              <p className="text-foreground font-sans font-medium">MBA (First Class)</p>
              <p className="text-muted-foreground font-sans text-sm">University of Mumbai, 2009</p>
            </motion.div>

            <motion.div
              className="card-elevated"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-foreground font-serif text-lg font-semibold mb-3">Domain Experience</h3>
              <div className="flex flex-wrap gap-2">
                {industries.map((ind) => (
                  <span
                    key={ind}
                    className="px-3 py-1.5 bg-accent/10 text-accent text-xs font-sans font-medium rounded-full"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
