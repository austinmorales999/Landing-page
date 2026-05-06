import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MetaTag from "./MetaTag";
import AnimatedHeadline from "./AnimatedHeadline";

export default function BenefitBlock({ index, tag, title, description, features, image, imageAlt, reversed }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.08, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <div ref={ref} className="py-16 md:py-24">
      <div className={`max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-center ${reversed ? "md:direction-rtl" : ""}`}>
        {/* Image side (3 cols) */}
        <motion.div
          style={{ scale: imageScale, opacity: imageOpacity }}
          className={`md:col-span-3 overflow-hidden ${reversed ? "md:order-2" : ""}`}
        >
          <div className="relative aspect-[4/3] bg-foreground/5 overflow-hidden group">
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover transition-all duration-700 group-hover:grayscale group-hover:contrast-150"
            />
            <div className="absolute inset-0 border border-foreground/10 pointer-events-none" />
          </div>
        </motion.div>

        {/* Text side (2 cols) */}
        <div className={`md:col-span-2 ${reversed ? "md:order-1 md:direction-ltr" : ""}`}>
          <div className="mb-6">
            <MetaTag label={`0${index}. ${tag}`} />
          </div>

          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.05] text-foreground mb-6">
            <AnimatedHeadline text={title} />
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed mb-10 font-inter">
            {description}
          </p>

          <div className="space-y-0">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="h-px w-full bg-foreground/10" />
                <div className="py-4 flex items-start gap-4">
                  <span className="font-mono text-xs text-muted-foreground mt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-inter font-semibold text-sm text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
            <div className="h-px w-full bg-foreground/10" />
          </div>
        </div>
      </div>
    </div>
  );
}