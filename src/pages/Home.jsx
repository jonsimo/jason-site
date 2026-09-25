import HeroSection from "../components/HeroSection";
import FeaturedWork from "../components/FeaturedWork";
import ServicesStrip from "../components/ServicesStrip";
import ClientsStrip from "../components/ClientsStrip";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedWork />
      <ServicesStrip />
      <ClientsStrip />

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Let's Create</p>
          <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-6">
            Have a project<br />
            <span className="italic">in mind?</span>
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-md mx-auto mb-10">
            I'd love to hear about your vision. Let's bring your story to life together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 font-body text-sm tracking-widest uppercase text-foreground hover:text-primary transition-colors group border border-border px-8 py-4 rounded-sm hover:border-primary"
          >
            Get in Touch
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}