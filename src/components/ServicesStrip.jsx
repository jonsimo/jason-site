import { motion } from "framer-motion";
import { Camera, Film, Palette } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Photography",
    description: "Editorial, commercial, and fine art photography that captures the essence of every moment.",
  },
  {
    icon: Film,
    title: "Cinematography",
    description: "Cinematic storytelling through motion — from short films to brand narratives.",
  },
  {
    icon: Palette,
    title: "Creative Direction",
    description: "End-to-end visual strategy, art direction, and brand identity development.",
  },
];

export default function ServicesStrip() {
  return (
    <section className="border-y border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center md:text-left"
            >
              <service.icon className="w-8 h-8 text-primary mx-auto md:mx-0 mb-5" strokeWidth={1.5} />
              <h3 className="font-heading text-xl text-foreground mb-3">{service.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}