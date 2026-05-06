import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import MetaTag from "./MetaTag";
import AnimatedHeadline from "./AnimatedHeadline";

const HERO_IMAGE = "https://media.base44.com/images/public/69f23f04d31d784c57914c64/8fe33d055_generated_486785f9.png";

export default function HeroMonolith() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-background"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 z-0"
      >
        <img
          src={HERO_IMAGE}
          alt="Light refracting through a glass prism against a dark background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </motion.div>

      {/* Top peripheral data */}
      <div className="absolute top-0 left-0 right-0 z-10 px-6 md:px-12 pt-8">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Mechra
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            © 2026
          </span>
        </div>
        <div className="h-px w-full bg-foreground/10 mt-6" />
      </div>

      {/* Main hero content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 px-6 md:px-12 pb-16 md:pb-24"
      >
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-8">
            <MetaTag label="00. Mechra ENGINE" />
          </div>

          <h1 className="font-display font-extrabold leading-[0.9] tracking-tighter mb-6">
            <span className="block text-foreground text-[clamp(3rem,8vw,9rem)]">
              <AnimatedHeadline text="Build faster." />
            </span>
            <span className="block text-[clamp(3rem,8vw,9rem)]" style={{
              WebkitTextStroke: '2px hsl(var(--foreground))',
              WebkitTextFillColor: 'transparent',
            }}>
              <AnimatedHeadline text="Ship smarter." delay={0.3} />
            </span>
          </h1>

          <div className="h-px w-full bg-foreground/10 my-8" />

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground font-inter">
              The conversion engine that transforms digital presence into measurable business outcomes. Engineered for precision. Built for Mechra.
            </p>

            <div className="flex items-center gap-6">
              <button
                onClick={() => scrollToSection("cta")}
                className="bg-primary text-primary-foreground px-8 py-4 font-mono text-sm uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center gap-3"
              >
                Begin Now
                <ArrowDown className="w-4 h-4" />
              </button>
              <span className="font-mono text-xs text-muted-foreground hidden md:block">
                Scroll to explore ↓
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}