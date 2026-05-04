import { motion } from "framer-motion";

export default function AnimatedHeadline({ text, className = "", delay = 0 }) {
  const letters = text.split("");

  return (
    <span className={className} aria-label={text}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.4,
            delay: delay + i * 0.02,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block"
          style={{ whiteSpace: letter === " " ? "pre" : undefined }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
}