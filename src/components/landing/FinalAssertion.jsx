import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import MetaTag from "./MetaTag";
import AnimatedHeadline from "./AnimatedHeadline";

const CTA_IMAGE = "https://media.base44.com/images/public/69f23f04d31d784c57914c64/410e4f1d4_generated_8e051434.png";

export default function FinalAssertion() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="cta"
      className="relative bg-foreground text-background min-h-[80vh] flex flex-col justify-end overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img
          src={CTA_IMAGE}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 px-6 md:px-12 py-20 md:py-32">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-8">
            <span className="font-mono text-xs uppercase tracking-widest opacity-50">
              [04. BEGIN]
            </span>
          </div>

          <h2 className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.0] mb-8">
            <AnimatedHeadline text="The next move" />
            <br />
            <AnimatedHeadline text="is yours." delay={0.25} />
          </h2>

          <p className="max-w-xl text-lg leading-relaxed opacity-60 mb-16 font-inter">
            Enter your email below. No friction, no forms, no delay. Just the beginning of measurable transformation.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-3xl">
              <div className="flex flex-col sm:flex-row items-stretch gap-0">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email to begin"
                    className="w-full bg-transparent border-0 border-b-2 border-background/30 focus:border-background py-5 text-lg md:text-xl font-inter text-background placeholder:text-background/30 outline-none transition-colors duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-10 py-5 font-mono text-sm uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-3 mt-4 sm:mt-0"
                >
                  Begin
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4"
            >
              <div className="w-10 h-10 bg-primary flex items-center justify-center">
                <Check className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-inter font-semibold text-lg">You're in.</p>
                <p className="font-mono text-xs uppercase tracking-wider opacity-50">
                  Check your inbox for what's next.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Footer hairline */}
      <div className="relative z-10 px-6 md:px-12 pb-8">
        <div className="h-px w-full bg-background/10 mb-6" />
        <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-widest opacity-30">
            Mechra — 2026
          </span>
          <div className="flex gap-8">
            {["Privacy", "Terms", "Contact"].map((link) => (
              <span
                key={link}
                className="font-mono text-xs uppercase tracking-wider opacity-30 hover:opacity-60 transition-opacity cursor-pointer"
              >
                {link}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}