import { motion } from "framer-motion";
import { Linkedin, Mail, MapPin, Download } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 hero-gradient">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold-light font-sans text-sm tracking-[0.2em] uppercase mb-3">Connect</p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary-foreground tracking-tight mb-4">
            Let's Work Together
          </h2>
          <p className="text-primary-foreground/50 font-sans text-base mb-1">References available on request</p>
          <div className="gold-line mx-auto mb-8" />
          <p className="text-primary-foreground/60 font-sans text-lg max-w-xl mx-auto mb-10">
            Available for SAP Programme Management and PMO Leadership roles across the UK and Europe.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href="https://www.linkedin.com/in/zubins/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-sans font-medium text-sm rounded-md hover:brightness-110 transition-all"
            >
              <Linkedin size={18} />
              Connect on LinkedIn
            </a>
            <a
              href="/Zubin_Shah_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary-foreground/30 text-primary-foreground font-sans font-medium text-sm rounded-md hover:bg-primary-foreground/10 transition-all"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-primary-foreground/50 font-sans text-sm">
            <span className="flex items-center gap-2">
              <MapPin size={14} />
              South London, UK
            </span>
            <span>British Citizen</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
