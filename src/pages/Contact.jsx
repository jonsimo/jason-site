import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Instagram, Youtube } from "lucide-react";
import ContactForm from "../components/ContactForm";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@lensandvision.com" },
  { icon: Phone, label: "Phone", value: "+1 (310) 555-0192" },
  { icon: MapPin, label: "Location", value: "Los Angeles, California" },
];

export default function Contact() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">Contact</p>
          <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-6 leading-tight">
            Let's start<br />
            <span className="italic">something great</span>
          </h1>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-10">
            Whether you have a project in mind, need creative direction, or just want to say hello — 
            I'd love to hear from you.
          </p>

          <div className="space-y-6 mb-10">
            {contactInfo.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center shrink-0">
                  <item.icon size={16} className="text-primary" />
                </div>
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-0.5">
                    {item.label}
                  </p>
                  <p className="font-body text-sm text-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-4">Follow</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Youtube size={16} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-3"
        >
          <div className="bg-card border border-border rounded-sm p-8 md:p-10">
            <h2 className="font-heading text-2xl text-foreground mb-8">Send a Message</h2>
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </div>
  );
}