const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { motion } from "framer-motion";
import { Award, Star } from "lucide-react";

const awarded = [
  {
    year: "2023",
    title: "Best Cinematography",
    organization: "Toronto International Film Festival",
    project: "Luminance — Short Film",
    image: "https://media.db.com/images/public/69d89f59836b8577ff0e152a/1ef5c096e_generated_image.png",
  },
  {
    year: "2022",
    title: "Gold — Visual Excellence",
    organization: "Cannes Lions",
    project: "Porsche Heritage Campaign",
    image: "https://media.db.com/images/public/69d89f59836b8577ff0e152a/af1cf27ae_generated_image.png",
  },
  {
    year: "2021",
    title: "Creative Director of the Year",
    organization: "Communication Arts",
    project: "Urban Solitude Series",
    image: "https://media.db.com/images/public/69d89f59836b8577ff0e152a/a15c760df_generated_image.png",
  },
  {
    year: "2019",
    title: "Best Documentary Photography",
    organization: "World Press Photo",
    project: "Still Waters — Short Film",
    image: "https://media.db.com/images/public/69d89f59836b8577ff0e152a/0860dcc27_generated_image.png",
  },
];

const nominated = [
  {
    year: "2023",
    title: "Outstanding Art Direction",
    organization: "The One Club for Creativity",
    project: "Lexus Immersion Campaign",
    image: "https://media.db.com/images/public/69d89f59836b8577ff0e152a/e5d6ecb46_generated_image.png",
  },
  {
    year: "2022",
    title: "Emerging Filmmaker",
    organization: "Tribeca Film Festival",
    project: "Echoes of Light — Short Film",
    image: "https://media.db.com/images/public/69d89f59836b8577ff0e152a/e8fcbd084_generated_image.png",
  },
  {
    year: "2020",
    title: "Editorial Photography of the Year",
    organization: "Society of Publication Designers",
    project: "Vogue Canada Editorial",
    image: "https://media.db.com/images/public/69d89f59836b8577ff0e152a/b822f6120_generated_image.png",
  },
  {
    year: "2018",
    title: "Best New Talent",
    organization: "PDN Photo Annual",
    project: "Portrait Series",
    image: "https://media.db.com/images/public/69d89f59836b8577ff0e152a/288559678_generated_image.png",
  },
];

function AwardCard({ item, index, type }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group grid grid-cols-1 md:grid-cols-2 gap-0 bg-card border border-border rounded-sm overflow-hidden hover:border-primary/40 transition-colors duration-300"
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.project}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col justify-center p-7 md:p-8">
        <div className="flex items-center gap-2 mb-4">
          {type === "awarded" ? (
            <Award size={14} className="text-primary shrink-0" />
          ) : (
            <Star size={14} className="text-muted-foreground shrink-0" />
          )}
          <span
            className={`font-body text-[10px] tracking-[0.25em] uppercase ${
              type === "awarded" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {type === "awarded" ? "Awarded" : "Nominated"}
          </span>
        </div>
        <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">
          {item.year}
        </p>
        <h3 className="font-heading text-xl md:text-2xl text-foreground mb-2 leading-snug">
          {item.title}
        </h3>
        <p className="font-body text-sm text-primary mb-1">{item.organization}</p>
        <p className="font-body text-sm text-muted-foreground">{item.project}</p>
      </div>
    </motion.div>
  );
}

export default function Awards() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-10 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-20"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">Recognition</p>
        <h1 className="font-heading text-4xl md:text-6xl text-foreground">Awards &amp; Nominations</h1>
      </motion.div>

      {/* Awarded */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-10"
        >
          <Award size={16} className="text-primary" />
          <h2 className="font-heading text-2xl md:text-3xl text-foreground">Awarded</h2>
          <div className="flex-1 h-px bg-border" />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {awarded.map((item, i) => (
            <AwardCard key={i} item={item} index={i} type="awarded" />
          ))}
        </div>
      </section>

      {/* Nominated */}
      <section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-10"
        >
          <Star size={16} className="text-muted-foreground" />
          <h2 className="font-heading text-2xl md:text-3xl text-foreground">Nominated</h2>
          <div className="flex-1 h-px bg-border" />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {nominated.map((item, i) => (
            <AwardCard key={i} item={item} index={i} type="nominated" />
          ))}
        </div>
      </section>
    </div>
  );
}