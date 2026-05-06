import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MetaTag from "./MetaTag";

const PROOF_DATA = [
  { metric: "+450% ROI", period: "Q4 2025", quote: "We stopped guessing and started converting. The data doesn't lie.", author: "Head of Growth, Fintech Series B" },
  { metric: "2.4s → 0.3s", period: "Load Time", quote: "Our bounce rate dropped 60% in the first week. That's not optimization—that's transformation.", author: "CTO, E-Commerce Platform" },
  { metric: "312% Lift", period: "Conversion Rate", quote: "Every element feels deliberate. Our users notice the difference even if they can't articulate it.", author: "VP Product, SaaS Enterprise" },
  { metric: "$2.1M", period: "Pipeline Generated", quote: "The landing page alone generated more qualified leads than our entire outbound team.", author: "Revenue Lead, B2B Startup" },
  { metric: "98/100", period: "Lighthouse Score", quote: "Perfect scores aren't accidents. They're the result of obsessive engineering discipline.", author: "Engineering Director, Media Co" },
  { metric: "4.2x", period: "Engagement Increase", quote: "Users don't just visit—they stay, they explore, they convert.", author: "Chief Digital Officer, Retail" },
];

export default function SocialProofMatrix() {
  const [activeIndex, setActiveIndex] = useState(null);
  const doubled = [...PROOF_DATA, ...PROOF_DATA];

  return (
    <section id="proof" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-16">
        <MetaTag label="03. SOCIAL PROOF" />
        <h2 className="font-display font-extrabold text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-foreground mt-6">
          Results speak louder.
        </h2>
      </div>

      {/* Ticker */}
      <div className="relative">
        <div className="h-px w-full bg-foreground/10" />
        <div className="overflow-hidden py-8">
          <div className="animate-ticker flex gap-0 w-max">
            {doubled.map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-10 md:px-16 border-r border-foreground/10 cursor-pointer group"
                onMouseEnter={() => setActiveIndex(i % PROOF_DATA.length)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <span className="font-display font-extrabold text-2xl md:text-4xl tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  {item.metric}
                </span>
                <span className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  {item.period}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="h-px w-full bg-foreground/10" />
      </div>

      {/* Expanded testimonial */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="max-w-screen-2xl mx-auto px-6 md:px-12 mt-12"
          >
            <div className="max-w-3xl">
              <blockquote className="font-inter text-xl md:text-2xl leading-relaxed text-foreground mb-4">
                "{PROOF_DATA[activeIndex].quote}"
              </blockquote>
              <cite className="font-mono text-xs uppercase tracking-wider text-muted-foreground not-italic">
                — {PROOF_DATA[activeIndex].author}
              </cite>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background image */}
      <div className="absolute inset-0 -z-10 opacity-5 pointer-events-none">
        <img
          src="https://media.base44.com/images/public/69f23f04d31d784c57914c64/16f3f667b_generated_76166849.png"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}