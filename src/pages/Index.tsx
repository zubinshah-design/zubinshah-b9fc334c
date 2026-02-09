import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
      <footer className="py-6 text-center bg-card border-t border-border">
        <p className="text-muted-foreground font-sans text-xs">
          © {new Date().getFullYear()} Zubin Shah. All rights reserved.
        </p>
      </footer>
    </main>
  );
};

export default Index;
