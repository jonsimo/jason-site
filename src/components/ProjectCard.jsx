import { motion } from "framer-motion";

export default function ProjectCard({ image, title, category, aspect = "aspect-[4/5]" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="group cursor-pointer"
    >
      <div className={`relative overflow-hidden ${aspect} bg-secondary rounded-sm`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-all duration-500 flex items-end">
          <div className="p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <p className="font-body text-[10px] tracking-[0.25em] uppercase text-primary mb-1">{category}</p>
            <h3 className="font-heading text-lg text-foreground">{title}</h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
}