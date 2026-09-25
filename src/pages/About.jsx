const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { motion } from "framer-motion";
import { Award, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
{ value: "12+", label: "Years Experience" },
{ value: "200+", label: "Projects Completed" },
{ value: "45+", label: "Brands Partnered" },
{ value: "8", label: "International Awards" }];

const timeline = [
{ year: "2014", title: "Started freelance photography", description: "Began capturing stories through editorial and documentary work." },
{ year: "2017", title: "Expanded into cinematography", description: "Directed first short film, 'Luminance', screened at Tribeca." },
{ year: "2019", title: "Creative Director at Studio Noir", description: "Led visual campaigns for global fashion and lifestyle brands." },
{ year: "2022", title: "Independent studio launch", description: "Founded LENS & VISION, a multidisciplinary creative studio." }];

export default function About() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <div className="px-6 md:px-10 max-w-7xl mx-auto mb-20 md:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">About</p>
            <h1 className="font-heading text-4xl md:text-6xl text-foreground mb-6 leading-tight">
              The eye behind<br />
              <span className="italic">the lens</span>
            </h1>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">I'm a visual storyteller based in Toronto with over a decade of experience in photography, cinematography, and creative direction. My work lives at the intersection of art and narrative — every frame is intentional, every story is worth telling.

            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">I've had the privilege of working with brands like Porsche, Radical, and Lexus, as well as independent artists and filmmakers who dare to push boundaries. Whether it's a quiet portrait or a sweeping cinematic sequence, I bring the same dedication to craft and vision.

            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground font-body">
              <span className="flex items-center gap-2">Toronto, Ontario

              </span>
              <span className="flex items-center gap-2">Since 2016

              </span>
            </div>
          </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative">
            
            <div className="aspect-[3/4] rounded-sm overflow-hidden">
              <img src="https://media.db.com/images/public/69d89f59836b8577ff0e152a/48d2f01c4_this_is_me2.jpg"

              alt="Creative director portrait" className="w-full h-full object-cover" />

              
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-sm p-5 hidden lg:block">
              <Award className="w-6 h-6 text-primary mb-2" />
              <p className="font-heading text-lg text-foreground">Award Winner</p>
              <p className="font-body text-xs text-muted-foreground">Tribeca Film Festival</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="border-y border-border bg-card py-16 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) =>
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center">
            
              <p className="font-heading text-4xl md:text-5xl text-primary mb-2">{stat.value}</p>
              <p className="font-body text-xs tracking-widest uppercase text-muted-foreground">{stat.label}</p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Timeline */}
      <div className="px-6 md:px-10 max-w-3xl mx-auto mb-20 md:mb-28">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12">
          
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">Journey</p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">The Path So Far</h2>
        </motion.div>

        <div className="space-y-10">
          {timeline.map((item, i) =>
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-6">
            
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-primary shrink-0" />
                {i < timeline.length - 1 && <div className="w-px h-full bg-border mt-2" />}
              </div>
              <div className="pb-2">
                <p className="font-body text-xs tracking-widest uppercase text-primary mb-1">{item.year}</p>
                <h3 className="font-heading text-lg text-foreground mb-1">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center px-6">
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 font-body text-sm tracking-widest uppercase text-foreground hover:text-primary transition-colors group border border-border px-8 py-4 rounded-sm hover:border-primary">
          
          Let's Work Together
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>);

}