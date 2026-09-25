const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://media.db.com/images/public/69d89f59836b8577ff0e152a/749446b7a_generated_06210ba2.png"
          alt="Dramatic cinematic landscape at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Photographer · Cinematographer · Creative Director
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.95] mb-6">
            Stories told<br />
            <span className="italic text-primary">through light</span>
          </h1>
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
            Crafting visual narratives that move, inspire, and endure. 
            From concept to final frame.
          </p>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-3 font-body text-sm tracking-widest uppercase text-foreground hover:text-primary transition-colors group"
          >
            View Portfolio
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}