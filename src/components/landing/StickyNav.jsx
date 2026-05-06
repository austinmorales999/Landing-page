import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function StickyNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md"
        >
          <div className="h-px w-full bg-foreground/10" />
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex items-center justify-between h-14">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Mechra
            </span>
            <div className="hidden md:flex items-center gap-8">
              {[
                { label: "Benefits", id: "benefits" },
                { label: "Proof", id: "proof" },
                { label: "Begin", id: "cta" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => scrollToSection("cta")}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 font-mono text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Start Now
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="h-px w-full bg-foreground/10" />
        </motion.nav>
      )}
    </AnimatePresence>
  );
}