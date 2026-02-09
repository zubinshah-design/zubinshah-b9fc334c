import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Credentials", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-card/90 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-transparent"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="#" className={`font-serif font-bold text-lg ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
            ZS
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-sans text-sm transition-colors ${
                  scrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="https://www.linkedin.com/in/zubins/"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors ${scrolled ? "text-accent" : "text-gold-light"}`}
          >
            <Linkedin size={20} />
          </a>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
