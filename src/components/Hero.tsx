import { motion } from "framer-motion";
import { Linkedin, Download, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold-light font-sans text-sm tracking-[0.3em] uppercase mb-4">
            SAP Programme Manager &middot; PMO Lead
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-primary-foreground mb-6 tracking-tight">
            Zubin Shah
          </h1>
          <div className="gold-line mx-auto mb-8" />
          <p className="text-primary-foreground/70 font-sans text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Over 15 years of leadership delivering complex SAP-led business
            transformation programmes with global organisations.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a
            href="https://www.linkedin.com/in/zubins/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-sans font-medium text-sm rounded-md hover:brightness-110 transition-all"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a
            href="/Zubin_Shah_CV.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary-foreground/30 text-primary-foreground font-sans font-medium text-sm rounded-md hover:bg-primary-foreground/10 transition-all"
          >
            <Download size={18} />
            Download CV
          </a>
          <a
            href="mailto:zubin@example.com"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary-foreground/30 text-primary-foreground font-sans font-medium text-sm rounded-md hover:bg-primary-foreground/10 transition-all"
          >
            <Mail size={18} />
            Get in Touch
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-primary-foreground/50" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
