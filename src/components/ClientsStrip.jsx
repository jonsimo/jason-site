const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { motion } from "framer-motion";

const clients = [
  { name: "Porsche", logo: "https://media.db.com/images/public/69d89f59836b8577ff0e152a/b80c8b362_porsche.png" },
  { name: "Lexus", logo: "https://media.db.com/images/public/69d89f59836b8577ff0e152a/080279ea2_Logo-Lexus.png" },
  { name: "Audi", logo: "https://media.db.com/images/public/69d89f59836b8577ff0e152a/fcb52a577_audi-14-logo-png-transparent.png" },
  { name: "BMW", logo: "https://media.db.com/images/public/69d89f59836b8577ff0e152a/4b752f642_bmw-logo.png" },
  { name: "Acura", logo: "https://media.db.com/images/public/69d89f59836b8577ff0e152a/e121c57f0_Acura_logosvg.png" },
  { name: "Mercedes-Benz", logo: "https://media.db.com/images/public/69d89f59836b8577ff0e152a/3448a1dd2_MBTrueNorthRoundelFinal-400x400.png" },
  { name: "Radical", logo: "https://media.db.com/images/public/69d89f59836b8577ff0e152a/cf6dac501_Radical-Sportscars-Logo.png" },
  { name: "Liberty Walk", logo: "https://media.db.com/images/public/69d89f59836b8577ff0e152a/fd7387370_2023-NEW-LOGO-LB-Liberty-walk.png" },
  { name: "Vossen", logo: "https://media.db.com/images/public/69d89f59836b8577ff0e152a/c96219593_Logo-Vossen.png" },
];

export default function ClientsStrip() {
  return (
    <section className="border-y border-border py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-10"
        >
          Brands I've Worked With
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center justify-center"
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-16 w-auto object-contain opacity-30 hover:opacity-60 transition-opacity duration-300 grayscale invert"
                />
              ) : (
                <span className="font-heading text-lg md:text-xl text-muted-foreground/40 hover:text-primary/70 transition-colors duration-300 tracking-wide">
                  {client.name}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}