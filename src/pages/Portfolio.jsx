const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const categories = ["All", "Photography", "Cinematography", "Creative Direction"];

const projects = [
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
  {
    image: "https://media.db.com/images/public/69d89f59836b8577ff0e152a/f90682a5e_generated_4756bc61.png",
    title: "Coastal Horizons",
    category: "Cinematography",
    aspect: "aspect-[16/10]",
  },
  {
    image: "https://media.db.com/images/public/69d89f59836b8577ff0e152a/595f8627d_generated_0fcec1a6.png",
    title: "Behind the Lens",
    category: "Cinematography",
    aspect: "aspect-[16/10]",
  },
  {
    image: "https://media.db.com/images/public/69d89f59836b8577ff0e152a/cbee22a2b_generated_4c991e1a.png",
    title: "Crimson Dusk",
    category: "Photography",
    aspect: "aspect-[3/4]",
  },
  {
    image: "https://media.db.com/images/public/69d89f59836b8577ff0e152a/749446b7a_generated_06210ba2.png",
    title: "Golden Valley",
    category: "Creative Direction",
    aspect: "aspect-[16/10]",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="pt-32 pb-24 px-6 md:px-10 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-14"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">Portfolio</p>
        <h1 className="font-heading text-4xl md:text-6xl text-foreground">Body of Work</h1>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`font-body text-xs tracking-widest uppercase px-5 py-2.5 rounded-sm border transition-all duration-300 ${
              active === cat
                ? "border-primary text-primary bg-primary/10"
                : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project, i) => (
          <ProjectCard key={project.title + i} {...project} />
        ))}
      </div>
    </div>
  );
}