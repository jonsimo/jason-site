const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

const featured = [
  {
    image: "https://media.db.com/images/public/69d89f59836b8577ff0e152a/a6784f50a_generated_43b999c2.png",
    title: "Echoes of Light",
    category: "Photography",
    aspect: "aspect-[3/4]",
  },
  {
    image: "https://media.db.com/images/public/69d89f59836b8577ff0e152a/0eab6409f_generated_60d1b140.png",
    title: "Neon Nocturne",
    category: "Cinematography",
    aspect: "aspect-[16/10]",
  },
  {
    image: "https://media.db.com/images/public/69d89f59836b8577ff0e152a/39501d69b_generated_e869f17a.png",
    title: "Essence Collection",
    category: "Creative Direction",
    aspect: "aspect-[1/1]",
  },
  {
    image: "https://media.db.com/images/public/69d89f59836b8577ff0e152a/37ad22605_generated_12548d1b.png",
    title: "Wanderer",
    category: "Photography",
    aspect: "aspect-[3/4]",
  },
];

export default function FeaturedWork() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-end justify-between mb-14"
      >
        <div>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">Selected Works</p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">Featured Projects</h2>
        </div>
        <Link
          to="/portfolio"
          className="hidden md:inline-flex items-center gap-2 font-body text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors group"
        >
          View All
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featured.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>

      <Link
        to="/portfolio"
        className="md:hidden inline-flex items-center gap-2 font-body text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors group mt-10"
      >
        View All Projects
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </section>
  );
}