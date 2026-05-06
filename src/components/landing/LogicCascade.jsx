import BenefitBlock from "./BenefitBlock";

const BENEFITS = [
  {
    tag: "PERFORMANCE",
    title: "Engineered for speed.",
    description:
      "Every millisecond matters. Our architecture eliminates latency at every layer—from edge-cached assets to pre-rendered critical paths.",
    image: "https://media.base44.com/images/public/69f23f04d31d784c57914c64/848a64e28_generated_61e5e59d.png",
    imageAlt: "Precision mechanical watch gears in macro detail",
    features: [
      { title: "Sub-100ms TTFB", desc: "Edge computing ensures your content loads before the thought completes." },
      { title: "Zero Layout Shift", desc: "Every element has a reserved slot. No jank. No surprises." },
      { title: "Adaptive Loading", desc: "Device-aware resource delivery that never over-serves." },
    ],
  },
  {
    tag: "PRECISION",
    title: "Every detail, calculated.",
    description:
      "We don't design by feel. Every spacing value, color choice, and interaction timing is mathematically derived from conversion data.",
    image: "https://media.base44.com/images/public/69f23f04d31d784c57914c64/3dbc3b954_generated_323bd0ae.png",
    imageAlt: "Carbon fiber weave in extreme close-up showing precise engineering",
    features: [
      { title: "Data-Driven Layouts", desc: "Heatmap-informed hierarchy puts focus where intent peaks." },
      { title: "Micro-Interaction Tuning", desc: "Animation curves calibrated for cognitive resonance, not decoration." },
      { title: "Semantic Architecture", desc: "Clean markup that search engines and screen readers parse perfectly." },
    ],
  },
];

export default function LogicCascade() {
  return (
    <section id="benefits" className="relative">
      <div className="h-px w-full bg-foreground/10" />
      {BENEFITS.map((benefit, i) => (
        <div key={i}>
          <BenefitBlock
            index={i + 1}
            tag={benefit.tag}
            title={benefit.title}
            description={benefit.description}
            features={benefit.features}
            image={benefit.image}
            imageAlt={benefit.imageAlt}
            reversed={i % 2 !== 0}
          />
          <div className="h-px w-full bg-foreground/10" />
        </div>
      ))}
    </section>
  );
}